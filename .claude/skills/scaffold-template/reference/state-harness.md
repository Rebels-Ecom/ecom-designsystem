# The state-harness pattern

A functional template needs live state. The app holds it in XState machines + redux; a template
reproduces the **essential** transitions with a small local `useReducer` that lives in the **stories**,
wrapping the stateless template component. This file is the copyable pattern.

## Principles

1. **Actions = the machine's real events.** Name reducer actions after the driving machine's events
   (`ADD_TO_CART`, `UPDATE_CART`, `REMOVE_FROM_CART`, `APPLY_CAMPAIGN`, `SET_DELIVERY_DATE`). The harness
   then reads as the machine distilled, and the app team can map it straight back. (See
   `app-flow-map.md` for each flow's event vocabulary.)
2. **Store base facts, derive everything computed.** Keep lines/quantities/selected-campaign in state;
   compute line totals, discount, freight, grand total, campaign eligibility and min-order gating in a
   pure selector run on every render. This is why editing one quantity re-computes the whole summary
   *live* — the essence of "functional".
3. **Model the states a reviewer must see**, not the plumbing: `idle | loading | error | empty |
   submitting | complete`. Skip retry/network internals.
4. **Harness in the stories, purity in the component.** `<Name>.tsx` is a pure function of props; the
   reducer + wiring live in `<Name>.stories.tsx`. This keeps the composition reusable and testable.
5. **Deterministic.** No `Date.now()` / `Math.random()` in anything a captured frame depends on.

## Worked example — Checkout cart reducer

The stateless template exposes callbacks; the harness supplies data + dispatches.

```tsx
// --- state model (mirrors cartMachine's context + events) ---
interface CartLine {
  partNo: string
  name: string
  pricePerUnit: number      // base fact
  quantity: number          // base fact
  campaignId?: string       // which campaign this line belongs to
}
interface CartState {
  lines: CartLine[]
  appliedCampaigns: string[]   // campaign ids the user applied
  deliveryDate?: string
  customOrderNo?: string
  status: 'idle' | 'submitting' | 'complete' | 'failure'
  error?: string
}

type CartAction =
  | { type: 'ADD_TO_CART'; line: CartLine }
  | { type: 'UPDATE_CART'; partNo: string; quantity: number }
  | { type: 'REMOVE_FROM_CART'; partNo: string }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_CAMPAIGN'; campaignId: string }
  | { type: 'SET_DELIVERY_DATE'; date: string }
  | { type: 'ADD_CUSTOM_ORDER_NUMBER'; value: string }
  | { type: 'GO_TO_CHECKOUT' }

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.lines.find((l) => l.partNo === action.line.partNo)
      return existing
        ? cartReducer(state, { type: 'UPDATE_CART', partNo: action.line.partNo, quantity: existing.quantity + action.line.quantity })
        : { ...state, lines: [...state.lines, action.line] }
    }
    case 'UPDATE_CART':
      return {
        ...state,
        lines: state.lines.map((l) =>
          l.partNo === action.partNo ? { ...l, quantity: Math.max(0, action.quantity) } : l,
        ).filter((l) => l.quantity > 0),   // qty 0 removes the line, like the app
      }
    case 'REMOVE_FROM_CART':
      return { ...state, lines: state.lines.filter((l) => l.partNo !== action.partNo) }
    case 'CLEAR_CART':
      return { ...state, lines: [], appliedCampaigns: [] }
    case 'APPLY_CAMPAIGN':
      return { ...state, appliedCampaigns: [...new Set([...state.appliedCampaigns, action.campaignId])] }
    case 'SET_DELIVERY_DATE':
      return { ...state, deliveryDate: action.date }
    case 'ADD_CUSTOM_ORDER_NUMBER':
      return { ...state, customOrderNo: action.value }
    case 'GO_TO_CHECKOUT':
      return { ...state, status: 'complete' }   // simplified: straight to confirmation
    default:
      return state
  }
}

// --- derived (never stored) ---
const MIN_ORDER = 500
function selectTotals(state: CartState, campaigns: Record<string, { discountPct: number }>) {
  const subtotal = state.lines.reduce((sum, l) => sum + l.pricePerUnit * l.quantity, 0)
  const discount = state.appliedCampaigns.reduce((d, id) => {
    const pct = campaigns[id]?.discountPct ?? 0
    const eligible = state.lines.filter((l) => l.campaignId === id).reduce((s, l) => s + l.pricePerUnit * l.quantity, 0)
    return d + eligible * pct
  }, 0)
  const freight = subtotal >= MIN_ORDER ? 0 : 79
  const grandTotal = subtotal - discount + freight
  const belowMinOrder = subtotal < MIN_ORDER
  return { subtotal, discount, freight, grandTotal, belowMinOrder }
}
```

## Wiring the harness in the story

```tsx
function CheckoutHarness(initial: CartState) {
  const [state, dispatch] = useReducer(cartReducer, initial)
  const totals = selectTotals(state, CAMPAIGNS)
  return (
    <CheckoutPage
      lines={state.lines}
      totals={totals}
      deliveryDate={state.deliveryDate}
      status={state.status}
      onChangeQuantity={(partNo, quantity) => dispatch({ type: 'UPDATE_CART', partNo, quantity })}
      onRemoveLine={(partNo) => dispatch({ type: 'REMOVE_FROM_CART', partNo })}
      onApplyCampaign={(campaignId) => dispatch({ type: 'APPLY_CAMPAIGN', campaignId })}
      onSetDeliveryDate={(date) => dispatch({ type: 'SET_DELIVERY_DATE', date })}
      onSubmit={() => dispatch({ type: 'GO_TO_CHECKOUT' })}
    />
  )
}

export const Default: Story = {
  render: () => <CheckoutHarness {...defaultCartState} />,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    // Change a quantity → the grand total re-computes live.
    const qty = canvas.getByRole('spinbutton', { name: /norrlands guld/i })
    await userEvent.clear(qty); await userEvent.type(qty, '4')
    await expect(canvas.getByTestId('grand-total')).toHaveTextContent('...')   // assert the derived value
    // Apply a campaign → ribbon + discounted total.
    await userEvent.click(canvas.getByRole('button', { name: 'Aktivera kampanj' }))
    await expect(canvas.getByText(/kampanj/i)).toBeInTheDocument()
    // Remove a line → row gone.
    await userEvent.click(canvas.getAllByRole('button', { name: 'Ta bort produkt' })[0])
    await expect(canvas.queryByRole('article', { name: /norrlands guld/i })).toBeNull()
  },
}
```

Note the `play` asserts the **effect** of each interaction (total re-computed, ribbon shown, row removed),
not that a control merely exists. That is the coverage gate — one interaction from the checklist per
assertion block, so a missed interaction is visible as a missing assertion.

## Adapting to other flows

- **Listing/filter** (`productsMachine`): state `{ activeFilters, sort, page, pageSize }`; the derived
  selector filters+sorts+paginates the fixture list, so toggling a facet updates the grid + result count.
- **Order-return wizard** (`orderReturnMachine`): state `{ step, selectedOrder, returnLines }`; actions
  `ORDER_SELECTED`, `ORDER_ITEM_SELECTED`, `UPDATE_ACCUMULATED_RETURN_INFO`, `NEXT`; the `play` walks the
  steps and asserts the summary.
- **Auth** (`authenticationMachine`): state `{ phase }`; actions `SUBMIT`, `REQUEST_RESET_PASSWORD_LINK`,
  `CHOOSE_USER`; the `play` submits valid + invalid credentials and asserts success/error/reset states.
- **Purchase lists** (`purchaseListsMachine`): state `{ lists, selectedList, items }`; create/rename/
  delete/add-item/add-list-to-cart actions.
