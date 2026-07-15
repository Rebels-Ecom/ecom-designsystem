// Thin launcher for `pnpm visual:review` that adds a batch filter flag.
//
// `playwright test` rejects unknown CLI options, so we can't pass `--latest` straight through. This
// wrapper parses the batch flag out of argv, hands it to the generator spec via an env var
// (VISUAL_REVIEW_BATCH), and forwards everything else to Playwright unchanged.
//
//   pnpm visual:review              → capture every ['visual'] frame (default, slow)
//   pnpm visual:review --latest     → only the components in the latest batch (per MIGRATION-PROGRESS.md)
//   pnpm visual:review --24         → only the components tagged "Batch 24"
//   pnpm visual:review --batch=24   → same as --24
//
// Any other args (e.g. --headed) are passed through to `playwright test`.
import { spawn } from 'node:child_process'

const args = process.argv.slice(2)

if (args.includes('--help') || args.includes('-h')) {
  console.log(`Usage: pnpm visual:review [--latest | --<batchNumber> | --batch=<n>] [playwright args]

  (no flag)       Regenerate the gallery for every ['visual'] story (slow — the full library).
  --latest        Only capture the latest batch's components (from MIGRATION-PROGRESS.md).
  --<n> | --batch=<n>
                  Only capture the components tagged "Batch <n>".

  Note: the gallery is rebuilt from scratch each run, so a filtered run replaces the full gallery.`)
  process.exit(0)
}

let batch
const forwarded = []
for (const arg of args) {
  if (arg === '--latest') batch = 'latest'
  else if (/^--batch=.+$/.test(arg)) batch = arg.slice('--batch='.length)
  else if (/^--\d+$/.test(arg)) batch = arg.slice(2)
  else forwarded.push(arg)
}

const env = { ...process.env }
if (batch) env.VISUAL_REVIEW_BATCH = batch

const child = spawn(
  'pnpm',
  ['exec', 'playwright', 'test', '--config', 'scripts/visual-review.config.ts', ...forwarded],
  { stdio: 'inherit', env },
)
child.on('exit', (code) => process.exit(code ?? 0))
child.on('error', (err) => {
  console.error(err)
  process.exit(1)
})
