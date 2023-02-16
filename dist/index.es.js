import * as he from "react";
import Yt, { forwardRef as Xe, createContext as Pt, useContext as Q, useLayoutEffect as Rr, useEffect as G, useState as ne, useRef as ae, useCallback as Ye, useMemo as jt, createElement as Ls, cloneElement as Es, Children as Ns, isValidElement as Rs } from "react";
import { createPortal as Vs, unmountComponentAtNode as Is } from "react-dom";
var Ri = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var r = [], a = 0; a < arguments.length; a++) {
        var o = arguments[a];
        if (!!o) {
          var i = typeof o;
          if (i === "string" || i === "number")
            r.push(o);
          else if (Array.isArray(o)) {
            if (o.length) {
              var s = n.apply(null, o);
              s && r.push(s);
            }
          } else if (i === "object") {
            if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]")) {
              r.push(o.toString());
              continue;
            }
            for (var l in o)
              t.call(o, l) && o[l] && r.push(l);
          }
        }
      }
      return r.join(" ");
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Ri);
const L = Ri.exports, As = "_button_1cr2v_1", $s = "_disabled_1cr2v_15", Os = "_primary_1cr2v_27", Ms = "_secondary_1cr2v_141", Ds = "_tertiary_1cr2v_195", ks = "_large_1cr2v_229", js = "_small_1cr2v_257", Bs = "_rounded_1cr2v_287", Fs = "_fullWidth_1cr2v_295", Ae = {
  button: As,
  disabled: $s,
  primary: Os,
  "primary-orange": "_primary-orange_1cr2v_27",
  "primary-blue": "_primary-blue_1cr2v_65",
  "primary-light_orange": "_primary-light_orange_1cr2v_103",
  secondary: Ms,
  tertiary: Ds,
  large: ks,
  small: js,
  rounded: Bs,
  fullWidth: Fs
};
var In = { exports: {} }, ft = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var la;
function Ws() {
  if (la)
    return ft;
  la = 1;
  var e = Yt, t = 60103;
  if (ft.Fragment = 60107, typeof Symbol == "function" && Symbol.for) {
    var n = Symbol.for;
    t = n("react.element"), ft.Fragment = n("react.fragment");
  }
  var r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = Object.prototype.hasOwnProperty, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var u, p = {}, f = null, v = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (v = l.ref);
    for (u in l)
      a.call(l, u) && !o.hasOwnProperty(u) && (p[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        p[u] === void 0 && (p[u] = l[u]);
    return { $$typeof: t, type: s, key: f, ref: v, props: p, _owner: r.current };
  }
  return ft.jsx = i, ft.jsxs = i, ft;
}
var Hn = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ca;
function qs() {
  return ca || (ca = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var t = Yt, n = 60103, r = 60106;
      e.Fragment = 60107;
      var a = 60108, o = 60114, i = 60109, s = 60110, l = 60112, c = 60113, u = 60120, p = 60115, f = 60116, v = 60121, h = 60122, g = 60117, _ = 60129, y = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var x = Symbol.for;
        n = x("react.element"), r = x("react.portal"), e.Fragment = x("react.fragment"), a = x("react.strict_mode"), o = x("react.profiler"), i = x("react.provider"), s = x("react.context"), l = x("react.forward_ref"), c = x("react.suspense"), u = x("react.suspense_list"), p = x("react.memo"), f = x("react.lazy"), v = x("react.block"), h = x("react.server.block"), g = x("react.fundamental"), x("react.scope"), x("react.opaque.id"), _ = x("react.debug_trace_mode"), x("react.offscreen"), y = x("react.legacy_hidden");
      }
      var b = typeof Symbol == "function" && Symbol.iterator, P = "@@iterator";
      function N(m) {
        if (m === null || typeof m != "object")
          return null;
        var T = b && m[b] || m[P];
        return typeof T == "function" ? T : null;
      }
      var O = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      function V(m) {
        {
          for (var T = arguments.length, E = new Array(T > 1 ? T - 1 : 0), M = 1; M < T; M++)
            E[M - 1] = arguments[M];
          A("error", m, E);
        }
      }
      function A(m, T, E) {
        {
          var M = O.ReactDebugCurrentFrame, W = "";
          if (de) {
            var q = U(de.type), j = de._owner;
            W += ie(q, de._source, j && U(j.type));
          }
          W += M.getStackAddendum(), W !== "" && (T += "%s", E = E.concat([W]));
          var D = E.map(function(le) {
            return "" + le;
          });
          D.unshift("Warning: " + T), Function.prototype.apply.call(console[m], console, D);
        }
      }
      var $ = !1;
      function B(m) {
        return !!(typeof m == "string" || typeof m == "function" || m === e.Fragment || m === o || m === _ || m === a || m === c || m === u || m === y || $ || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === p || m.$$typeof === i || m.$$typeof === s || m.$$typeof === l || m.$$typeof === g || m.$$typeof === v || m[0] === h));
      }
      var Y = /^(.*)[\\\/]/;
      function ie(m, T, E) {
        var M = "";
        if (T) {
          var W = T.fileName, q = W.replace(Y, "");
          if (/^index\./.test(q)) {
            var j = W.match(Y);
            if (j) {
              var D = j[1];
              if (D) {
                var le = D.replace(Y, "");
                q = le + "/" + q;
              }
            }
          }
          M = " (at " + q + ":" + T.lineNumber + ")";
        } else
          E && (M = " (created by " + E + ")");
        return `
    in ` + (m || "Unknown") + M;
      }
      var Z = 1;
      function oe(m) {
        return m._status === Z ? m._result : null;
      }
      function se(m, T, E) {
        var M = T.displayName || T.name || "";
        return m.displayName || (M !== "" ? E + "(" + M + ")" : E);
      }
      function U(m) {
        if (m == null)
          return null;
        if (typeof m.tag == "number" && V("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue."), typeof m == "function")
          return m.displayName || m.name || null;
        if (typeof m == "string")
          return m;
        switch (m) {
          case e.Fragment:
            return "Fragment";
          case r:
            return "Portal";
          case o:
            return "Profiler";
          case a:
            return "StrictMode";
          case c:
            return "Suspense";
          case u:
            return "SuspenseList";
        }
        if (typeof m == "object")
          switch (m.$$typeof) {
            case s:
              return "Context.Consumer";
            case i:
              return "Context.Provider";
            case l:
              return se(m, m.render, "ForwardRef");
            case p:
              return U(m.type);
            case v:
              return U(m.render);
            case f: {
              var T = m, E = oe(T);
              if (E)
                return U(E);
              break;
            }
          }
        return null;
      }
      var _e = {};
      O.ReactDebugCurrentFrame;
      var de = null;
      function ye(m) {
        de = m;
      }
      function lt(m, T, E, M, W) {
        {
          var q = Function.call.bind(Object.prototype.hasOwnProperty);
          for (var j in m)
            if (q(m, j)) {
              var D = void 0;
              try {
                if (typeof m[j] != "function") {
                  var le = Error((M || "React class") + ": " + E + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw le.name = "Invariant Violation", le;
                }
                D = m[j](T, j, M, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ce) {
                D = Ce;
              }
              D && !(D instanceof Error) && (ye(W), V("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", E, j, typeof D), ye(null)), D instanceof Error && !(D.message in _e) && (_e[D.message] = !0, ye(W), V("Failed %s type: %s", E, D.message), ye(null));
            }
        }
      }
      var fe = O.ReactCurrentOwner, X = Object.prototype.hasOwnProperty, k = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, w, R, K;
      K = {};
      function Ze(m) {
        if (X.call(m, "ref")) {
          var T = Object.getOwnPropertyDescriptor(m, "ref").get;
          if (T && T.isReactWarning)
            return !1;
        }
        return m.ref !== void 0;
      }
      function ct(m) {
        if (X.call(m, "key")) {
          var T = Object.getOwnPropertyDescriptor(m, "key").get;
          if (T && T.isReactWarning)
            return !1;
        }
        return m.key !== void 0;
      }
      function wt(m, T) {
        if (typeof m.ref == "string" && fe.current && T && fe.current.stateNode !== T) {
          var E = U(fe.current.type);
          K[E] || (V('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(fe.current.type), m.ref), K[E] = !0);
        }
      }
      function hs(m, T) {
        {
          var E = function() {
            w || (w = !0, V("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
          };
          E.isReactWarning = !0, Object.defineProperty(m, "key", {
            get: E,
            configurable: !0
          });
        }
      }
      function ms(m, T) {
        {
          var E = function() {
            R || (R = !0, V("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", T));
          };
          E.isReactWarning = !0, Object.defineProperty(m, "ref", {
            get: E,
            configurable: !0
          });
        }
      }
      var gs = function(m, T, E, M, W, q, j) {
        var D = {
          $$typeof: n,
          type: m,
          key: T,
          ref: E,
          props: j,
          _owner: q
        };
        return D._store = {}, Object.defineProperty(D._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(D, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: M
        }), Object.defineProperty(D, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: W
        }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
      };
      function _s(m, T, E, M, W) {
        {
          var q, j = {}, D = null, le = null;
          E !== void 0 && (D = "" + E), ct(T) && (D = "" + T.key), Ze(T) && (le = T.ref, wt(T, W));
          for (q in T)
            X.call(T, q) && !k.hasOwnProperty(q) && (j[q] = T[q]);
          if (m && m.defaultProps) {
            var Ce = m.defaultProps;
            for (q in Ce)
              j[q] === void 0 && (j[q] = Ce[q]);
          }
          if (D || le) {
            var We = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
            D && hs(j, We), le && ms(j, We);
          }
          return gs(m, D, le, W, M, fe.current, j);
        }
      }
      var Wn = O.ReactCurrentOwner;
      O.ReactDebugCurrentFrame;
      function ut(m) {
        de = m;
      }
      var qn;
      qn = !1;
      function Un(m) {
        return typeof m == "object" && m !== null && m.$$typeof === n;
      }
      function ra() {
        {
          if (Wn.current) {
            var m = U(Wn.current.type);
            if (m)
              return `

Check the render method of \`` + m + "`.";
          }
          return "";
        }
      }
      function ys(m) {
        {
          if (m !== void 0) {
            var T = m.fileName.replace(/^.*[\\\/]/, ""), E = m.lineNumber;
            return `

Check your code at ` + T + ":" + E + ".";
          }
          return "";
        }
      }
      var aa = {};
      function bs(m) {
        {
          var T = ra();
          if (!T) {
            var E = typeof m == "string" ? m : m.displayName || m.name;
            E && (T = `

Check the top-level render call using <` + E + ">.");
          }
          return T;
        }
      }
      function ia(m, T) {
        {
          if (!m._store || m._store.validated || m.key != null)
            return;
          m._store.validated = !0;
          var E = bs(T);
          if (aa[E])
            return;
          aa[E] = !0;
          var M = "";
          m && m._owner && m._owner !== Wn.current && (M = " It was passed a child from " + U(m._owner.type) + "."), ut(m), V('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, M), ut(null);
        }
      }
      function oa(m, T) {
        {
          if (typeof m != "object")
            return;
          if (Array.isArray(m))
            for (var E = 0; E < m.length; E++) {
              var M = m[E];
              Un(M) && ia(M, T);
            }
          else if (Un(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var W = N(m);
            if (typeof W == "function" && W !== m.entries)
              for (var q = W.call(m), j; !(j = q.next()).done; )
                Un(j.value) && ia(j.value, T);
          }
        }
      }
      function xs(m) {
        {
          var T = m.type;
          if (T == null || typeof T == "string")
            return;
          var E;
          if (typeof T == "function")
            E = T.propTypes;
          else if (typeof T == "object" && (T.$$typeof === l || T.$$typeof === p))
            E = T.propTypes;
          else
            return;
          if (E) {
            var M = U(T);
            lt(E, m.props, "prop", M, m);
          } else if (T.PropTypes !== void 0 && !qn) {
            qn = !0;
            var W = U(T);
            V("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
          }
          typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && V("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ss(m) {
        {
          for (var T = Object.keys(m.props), E = 0; E < T.length; E++) {
            var M = T[E];
            if (M !== "children" && M !== "key") {
              ut(m), V("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", M), ut(null);
              break;
            }
          }
          m.ref !== null && (ut(m), V("Invalid attribute `ref` supplied to `React.Fragment`."), ut(null));
        }
      }
      function sa(m, T, E, M, W, q) {
        {
          var j = B(m);
          if (!j) {
            var D = "";
            (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var le = ys(W);
            le ? D += le : D += ra();
            var Ce;
            m === null ? Ce = "null" : Array.isArray(m) ? Ce = "array" : m !== void 0 && m.$$typeof === n ? (Ce = "<" + (U(m.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof m, V("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, D);
          }
          var We = _s(m, T, E, W, q);
          if (We == null)
            return We;
          if (j) {
            var dt = T.children;
            if (dt !== void 0)
              if (M)
                if (Array.isArray(dt)) {
                  for (var zn = 0; zn < dt.length; zn++)
                    oa(dt[zn], m);
                  Object.freeze && Object.freeze(dt);
                } else
                  V("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                oa(dt, m);
          }
          return m === e.Fragment ? Ss(We) : xs(We), We;
        }
      }
      function Ts(m, T, E) {
        return sa(m, T, E, !0);
      }
      function Ps(m, T, E) {
        return sa(m, T, E, !1);
      }
      var Cs = Ps, ws = Ts;
      e.jsx = Cs, e.jsxs = ws;
    }();
  }(Hn)), Hn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ws() : e.exports = qs();
})(In);
const d = In.exports.jsx, C = In.exports.jsxs, Pe = In.exports.Fragment, An = Xe(({
  className: e,
  surface: t = "primary",
  surfaceVariant: n = "orange",
  size: r = "large",
  type: a = "button",
  children: o,
  fullWidth: i,
  rounded: s,
  disabled: l,
  onClick: c,
  id: u
}, p) => /* @__PURE__ */ d("button", {
  ref: p,
  id: u || void 0,
  type: a,
  className: L(Ae.button, Ae[r], t === "primary" && n ? Ae[`${t}-${n}`] : Ae[t], i && Ae.fullWidth, s && Ae.rounded, e),
  disabled: l,
  onClick: c,
  children: o
}));
function Gt(e, t) {
  return t ? e.error : "";
}
const Us = "_inputText_yf5ld_1", zs = "_error_yf5ld_53", ua = {
  inputText: Us,
  error: zs
}, Vr = Xe(({
  id: e,
  className: t,
  type: n = "text",
  value: r,
  defaultValue: a,
  isErroneous: o,
  required: i,
  onChange: s,
  onBlur: l,
  onFocus: c,
  disabled: u,
  placeholder: p,
  other: f
}, v) => {
  function h(y) {
    s && s(y);
  }
  function g(y) {
    l && l(y);
  }
  function _(y) {
    c && c(y);
  }
  return /* @__PURE__ */ d("input", {
    ref: v,
    type: n,
    className: L("body", ua.inputText, Gt(ua, o), t),
    id: e,
    value: r,
    defaultValue: a,
    onChange: h,
    onFocus: _,
    onBlur: g,
    disabled: u,
    placeholder: p,
    required: i,
    ...f
  });
}), Hs = "_radioButton_hod4t_1", Ys = "_error_hod4t_77", da = {
  radioButton: Hs,
  error: Ys
}, Vi = Xe(({
  id: e,
  name: t,
  value: n,
  defaultValue: r,
  className: a,
  isErroneous: o,
  required: i,
  onChange: s,
  disabled: l,
  checked: c,
  other: u
}, p) => {
  function f(v) {
    s && s(v);
  }
  return /* @__PURE__ */ d("input", {
    ref: p,
    type: "radio",
    className: L("body", da.radioButton, Gt(da, o), a),
    id: e,
    name: t,
    value: n,
    defaultValue: r,
    onChange: f,
    checked: c,
    disabled: l,
    required: i,
    ...u
  });
}), Gs = "_checkbox_78aad_1", Ks = "_error_78aad_89", fa = {
  checkbox: Gs,
  error: Ks
}, Ii = Xe((e, t) => {
  const {
    id: n,
    name: r,
    value: a,
    defaultValue: o,
    checked: i,
    className: s,
    isErroneous: l,
    required: c,
    onChange: u,
    disabled: p,
    other: f
  } = e;
  function v(h) {
    u && u(h);
  }
  return /* @__PURE__ */ d("input", {
    ref: t,
    type: "checkbox",
    className: L("body", fa.checkbox, Gt(fa, l), s),
    id: n,
    name: r,
    onChange: v,
    value: a,
    defaultValue: o,
    checked: i,
    disabled: p,
    required: c,
    ...f
  });
}), Xs = "_value_hzhu7_1", Zs = "_inputFile_hzhu7_9", Yn = {
  value: Xs,
  inputFile: Zs
}, Z_ = Xe(({
  id: e,
  className: t,
  value: n,
  defaultValue: r,
  required: a,
  onChange: o,
  onBlur: i,
  disabled: s,
  label: l,
  placeholder: c,
  other: u
}, p) => {
  function f(h) {
    o && o(h);
  }
  function v(h) {
    i && i(h);
  }
  return /* @__PURE__ */ C("div", {
    className: L(t),
    children: [/* @__PURE__ */ C("label", {
      htmlFor: e,
      className: Yn.labelButton,
      children: [/* @__PURE__ */ d("span", {
        className: L(Ae.button, Ae.small, Ae.secondary, s && Ae.disabled),
        children: l
      }), /* @__PURE__ */ d("span", {
        className: Yn.value,
        children: n || c
      })]
    }), /* @__PURE__ */ d("input", {
      ref: p,
      type: "file",
      className: Yn.inputFile,
      id: e,
      value: n,
      defaultValue: r,
      onChange: f,
      onBlur: v,
      disabled: s,
      required: a,
      ...u
    })]
  });
}), Js = "_defaultStyling_1vkqj_1", Qs = {
  defaultStyling: Js
}, ce = ({
  icon: e,
  className: t
}) => /* @__PURE__ */ d("span", {
  className: L("icomoon", e, t || Qs.defaultStyling)
}), el = "_validationError_h5dsv_1", tl = "_text_h5dsv_11", nl = "_icon_h5dsv_33", Gn = {
  validationError: el,
  text: tl,
  icon: nl
}, rl = ({
  children: e,
  className: t
}) => /* @__PURE__ */ C("div", {
  className: L("body", Gn.validationError, t),
  children: [/* @__PURE__ */ d(ce, {
    icon: "icon-x-circle",
    className: Gn.icon
  }), /* @__PURE__ */ d("span", {
    className: Gn.text,
    children: e
  })]
}), al = "_inlineHelper_6ltnt_1", il = {
  inlineHelper: al
}, ol = ({
  children: e,
  className: t
}) => /* @__PURE__ */ d("div", {
  className: L("body", il.inlineHelper, t),
  children: e
}), sl = "_wrapper_10fys_1", ll = "_select_10fys_9", cl = "_error_10fys_49", ul = "_icon_10fys_69", nn = {
  wrapper: sl,
  select: ll,
  error: cl,
  icon: ul
}, J_ = Xe(({
  id: e,
  options: t,
  onChange: n,
  value: r,
  selectedIndex: a,
  disabled: o,
  isErroneous: i,
  required: s,
  other: l
}, c) => {
  function u(f) {
    n && n(f);
  }
  function p() {
    return t instanceof Array && t.length;
  }
  return /* @__PURE__ */ d("div", {
    className: nn.wrapper,
    children: p() && /* @__PURE__ */ C(Pe, {
      children: [/* @__PURE__ */ d("select", {
        className: L("body", nn.select, Gt(nn, i)),
        onChange: u,
        disabled: o,
        required: s,
        id: e,
        value: a ? t[a].value : r,
        ref: c,
        ...l,
        children: t == null ? void 0 : t.map((f, v) => /* @__PURE__ */ d("option", {
          value: f.value,
          children: f.name
        }, `option_${v}`))
      }), /* @__PURE__ */ d("div", {
        className: nn.icon
      })]
    })
  });
}), dl = "_textarea_1xqx6_1", fl = "_error_1xqx6_61", va = {
  textarea: dl,
  error: fl
}, Q_ = Xe(({
  id: e,
  className: t,
  value: n,
  defaultValue: r,
  isErroneous: a,
  required: o,
  onChange: i,
  disabled: s,
  rows: l,
  cols: c,
  placeholder: u,
  other: p
}, f) => {
  function v(h) {
    i && i(h);
  }
  return /* @__PURE__ */ d("textarea", {
    ref: f,
    className: L("body", va.textarea, Gt(va, a), t),
    id: e,
    value: n,
    defaultValue: r,
    onChange: v,
    disabled: s,
    required: o,
    rows: l,
    cols: c,
    placeholder: u,
    ...p
  });
}), vl = "_picture_1l4va_1", pl = "_image_1l4va_9", pa = {
  picture: vl,
  image: pl
}, Fe = ({
  id: e,
  sources: t,
  src: n,
  width: r,
  height: a,
  loading: o = "lazy",
  decoding: i = "auto",
  alt: s = "",
  fetchPriority: l = "auto",
  classNamePicture: c,
  classNameImg: u
}) => {
  function p() {
    return t instanceof Array && n && e;
  }
  return p() ? /* @__PURE__ */ C("picture", {
    className: c || pa.picture,
    id: e,
    children: [t.map((f, v) => /* @__PURE__ */ d("source", {
      srcSet: f.srcset,
      type: f.type,
      media: f.media,
      sizes: f.sizes
    }, `${e}_source_${v}`)), /* @__PURE__ */ d("img", {
      src: n,
      className: u || pa.image,
      loading: o,
      decoding: i,
      alt: s,
      width: r,
      height: a,
      fetchpriority: l
    })]
  }) : null;
}, hl = "_link_1ai8g_1", ml = "_linkText_1ai8g_13", gl = "_transparent_1ai8g_47", _l = "_decorativeOne_1ai8g_61", yl = "_decorativeTwo_1ai8g_75", bl = "_large_1ai8g_89", xl = "_withIconLeft_1ai8g_97", Sl = "_withIconRight_1ai8g_103", Tl = "_icon_1ai8g_111", Pl = "_iconLeft_1ai8g_165", Cl = "_iconRight_1ai8g_179", we = {
  link: hl,
  linkText: ml,
  transparent: gl,
  decorativeOne: _l,
  decorativeTwo: yl,
  large: bl,
  withIconLeft: xl,
  withIconRight: Sl,
  icon: Tl,
  default: "_default_1ai8g_131",
  iconLeft: Pl,
  iconRight: Cl
}, Ai = ({
  children: e,
  ...t
}) => /* @__PURE__ */ d("div", {
  ...t,
  children: e
}), ot = ({
  linkComponent: e = Ai,
  text: t,
  href: n,
  target: r,
  isExternal: a,
  title: o,
  className: i,
  iconLeft: s,
  iconRight: l,
  size: c = "default",
  onSurface: u = "transparent"
}) => /* @__PURE__ */ C(a ? "a" : e, {
  to: a ? void 0 : n,
  href: a ? n : void 0,
  target: r,
  title: o,
  className: L(we.link, we[c], we[u], s && we.withIconLeft, l && we.withIconRight, i),
  children: [s && /* @__PURE__ */ d("span", {
    className: we.iconLeft,
    children: /* @__PURE__ */ d(ce, {
      icon: s,
      className: we.icon
    })
  }), /* @__PURE__ */ d("span", {
    className: we.linkText,
    children: t
  }), l && /* @__PURE__ */ d("span", {
    className: we.iconRight,
    children: /* @__PURE__ */ d(ce, {
      icon: l,
      className: we.icon
    })
  })]
}), wl = "_button_1x55y_1", Ll = "_disabled_1x55y_21", El = "_primary_1x55y_33", Nl = "_secondary_1x55y_171", Rl = "_large_1x55y_233", Vl = "_small_1x55y_261", Il = "_fullWidth_1x55y_291", rn = {
  button: wl,
  disabled: Ll,
  primary: El,
  "primary-orange": "_primary-orange_1x55y_33",
  "primary-blue": "_primary-blue_1x55y_79",
  "primary-light_orange": "_primary-light_orange_1x55y_125",
  secondary: Nl,
  large: Rl,
  small: Vl,
  fullWidth: Il
}, $i = ({
  className: e,
  surface: t = "primary",
  size: n = "large",
  children: r,
  fullWidth: a,
  linkComponent: o = Ai,
  href: i,
  target: s,
  title: l,
  isExternal: c,
  text: u,
  id: p
}) => {
  const f = L(rn.button, rn[n], rn[t], a && rn.fullWidth, e);
  return /* @__PURE__ */ d(c ? "a" : o, {
    to: c ? void 0 : i,
    href: c ? i : void 0,
    target: s,
    title: l,
    className: f,
    id: p || void 0,
    children: r || u
  });
}, Al = "_moviePoster_205wm_1", $l = "_picture_205wm_23", Ol = "_image_205wm_37", Ml = "_contain_205wm_61", Kn = {
  moviePoster: Al,
  picture: $l,
  image: Ol,
  contain: Ml
}, Xn = (e) => /* @__PURE__ */ d(Pe, {
  children: /* @__PURE__ */ d("div", {
    className: Kn.moviePoster,
    children: /* @__PURE__ */ d(Fe, {
      ...e,
      classNamePicture: Kn.picture,
      classNameImg: Kn.image
    })
  })
}), Dl = "_outerWrapper_haeyt_1", kl = "_table_haeyt_11", ha = {
  outerWrapper: Dl,
  table: kl
}, jl = ({
  children: e
}) => /* @__PURE__ */ d("div", {
  className: ha.outerWrapper,
  children: /* @__PURE__ */ d("table", {
    className: ha.table,
    children: e
  })
});
var fr = function(e, t) {
  return fr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var a in r)
      Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
  }, fr(e, t);
};
function Oi(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  fr(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
}
var S = function() {
  return S = Object.assign || function(t) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, S.apply(this, arguments);
};
function ge(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function Bl(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n)
    return n.call(e);
  if (e && typeof e.length == "number")
    return {
      next: function() {
        return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
      }
    };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function H(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n)
    return e;
  var r = n.call(e), a, o = [], i;
  try {
    for (; (t === void 0 || t-- > 0) && !(a = r.next()).done; )
      o.push(a.value);
  } catch (s) {
    i = { error: s };
  } finally {
    try {
      a && !a.done && (n = r.return) && n.call(r);
    } finally {
      if (i)
        throw i.error;
    }
  }
  return o;
}
function Se(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, a = t.length, o; r < a; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var Fl = { env: { NODE_ENV: "production" } }, Wl = typeof process > "u" ? Fl : process, $n = Wl, Oe = function(e) {
  return {
    isEnabled: function(t) {
      return e.some(function(n) {
        return !!t[n];
      });
    }
  };
}, Bt = {
  measureLayout: Oe(["layout", "layoutId", "drag"]),
  animation: Oe([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: Oe(["exit"]),
  drag: Oe(["drag", "dragControls"]),
  focus: Oe(["whileFocus"]),
  hover: Oe(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: Oe(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: Oe([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: Oe([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function ql(e) {
  for (var t in e)
    e[t] !== null && (t === "projectionNodeConstructor" ? Bt.projectionNodeConstructor = e[t] : Bt[t].Component = e[t]);
}
var Kt = function() {
}, me = function() {
};
process.env.NODE_ENV !== "production" && (Kt = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, me = function(e, t) {
  if (!e)
    throw new Error(t);
});
var Mi = Pt({ strict: !1 }), Di = Object.keys(Bt), Ul = Di.length;
function zl(e, t, n) {
  var r = [], a = Q(Mi);
  if (!t)
    return null;
  $n.env.NODE_ENV !== "production" && n && a.strict && me(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  for (var o = 0; o < Ul; o++) {
    var i = Di[o], s = Bt[i], l = s.isEnabled, c = s.Component;
    l(e) && c && r.push(he.createElement(c, S({ key: i }, e, { visualElement: t })));
  }
  return r;
}
var Ir = Pt({
  transformPagePoint: function(e) {
    return e;
  },
  isStatic: !1,
  reducedMotion: "never"
}), On = Pt({});
function Hl() {
  return Q(On).visualElement;
}
var Xt = Pt(null), Ct = typeof document < "u", bn = Ct ? Rr : G, vr = { current: null }, ki = !1;
function Yl() {
  if (ki = !0, !!Ct)
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"), t = function() {
        return vr.current = e.matches;
      };
      e.addListener(t), t();
    } else
      vr.current = !1;
}
function Gl() {
  !ki && Yl();
  var e = H(ne(vr.current), 1), t = e[0];
  return t;
}
function Kl() {
  var e = Gl(), t = Q(Ir).reducedMotion;
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function Xl(e, t, n, r) {
  var a = Q(Mi), o = Hl(), i = Q(Xt), s = Kl(), l = ae(void 0);
  r || (r = a.renderer), !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceId: i == null ? void 0 : i.id,
    blockInitialAnimation: (i == null ? void 0 : i.initial) === !1,
    shouldReduceMotion: s
  }));
  var c = l.current;
  return bn(function() {
    c == null || c.syncRender();
  }), G(function() {
    var u;
    (u = c == null ? void 0 : c.animationState) === null || u === void 0 || u.animateChanges();
  }), bn(function() {
    return function() {
      return c == null ? void 0 : c.notifyUnmount();
    };
  }, []), c;
}
function gt(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Zl(e, t, n) {
  return Ye(
    function(r) {
      var a;
      r && ((a = e.mount) === null || a === void 0 || a.call(e, r)), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : gt(n) && (n.current = r));
    },
    [t]
  );
}
function ji(e) {
  return Array.isArray(e);
}
function xe(e) {
  return typeof e == "string" || ji(e);
}
function Jl(e) {
  var t = {};
  return e.forEachValue(function(n, r) {
    return t[r] = n.get();
  }), t;
}
function Ql(e) {
  var t = {};
  return e.forEachValue(function(n, r) {
    return t[r] = n.getVelocity();
  }), t;
}
function Bi(e, t, n, r, a) {
  var o;
  return r === void 0 && (r = {}), a === void 0 && (a = {}), typeof t == "function" && (t = t(n != null ? n : e.custom, r, a)), typeof t == "string" && (t = (o = e.variants) === null || o === void 0 ? void 0 : o[t]), typeof t == "function" && (t = t(n != null ? n : e.custom, r, a)), t;
}
function Mn(e, t, n) {
  var r = e.getProps();
  return Bi(r, t, n != null ? n : r.custom, Jl(e), Ql(e));
}
function Dn(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) == "function" || xe(e.initial) || xe(e.animate) || xe(e.whileHover) || xe(e.whileDrag) || xe(e.whileTap) || xe(e.whileFocus) || xe(e.exit);
}
function Fi(e) {
  return Boolean(Dn(e) || e.variants);
}
function ec(e, t) {
  if (Dn(e)) {
    var n = e.initial, r = e.animate;
    return {
      initial: n === !1 || xe(n) ? n : void 0,
      animate: xe(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function tc(e) {
  var t = ec(e, Q(On)), n = t.initial, r = t.animate;
  return jt(function() {
    return { initial: n, animate: r };
  }, [ma(n), ma(r)]);
}
function ma(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function Zt(e) {
  var t = ae(null);
  return t.current === null && (t.current = e()), t.current;
}
const Wi = 1 / 60 * 1e3, nc = typeof performance < "u" ? () => performance.now() : () => Date.now(), qi = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(nc()), Wi);
function rc(e) {
  let t = [], n = [], r = 0, a = !1, o = !1;
  const i = /* @__PURE__ */ new WeakSet(), s = {
    schedule: (l, c = !1, u = !1) => {
      const p = u && a, f = p ? t : n;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), p && a && (r = t.length)), l;
    },
    cancel: (l) => {
      const c = n.indexOf(l);
      c !== -1 && n.splice(c, 1), i.delete(l);
    },
    process: (l) => {
      if (a) {
        o = !0;
        return;
      }
      if (a = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
        for (let c = 0; c < r; c++) {
          const u = t[c];
          u(l), i.has(u) && (s.schedule(u), e());
        }
      a = !1, o && (o = !1, s.process(l));
    }
  };
  return s;
}
const ac = 40;
let pr = !0, Ft = !1, hr = !1;
const bt = {
  delta: 0,
  timestamp: 0
}, Jt = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], kn = Jt.reduce((e, t) => (e[t] = rc(() => Ft = !0), e), {}), Te = Jt.reduce((e, t) => {
  const n = kn[t];
  return e[t] = (r, a = !1, o = !1) => (Ft || oc(), n.schedule(r, a, o)), e;
}, {}), St = Jt.reduce((e, t) => (e[t] = kn[t].cancel, e), {}), Zn = Jt.reduce((e, t) => (e[t] = () => kn[t].process(bt), e), {}), ic = (e) => kn[e].process(bt), Ui = (e) => {
  Ft = !1, bt.delta = pr ? Wi : Math.max(Math.min(e - bt.timestamp, ac), 1), bt.timestamp = e, hr = !0, Jt.forEach(ic), hr = !1, Ft && (pr = !1, qi(Ui));
}, oc = () => {
  Ft = !0, pr = !0, hr || qi(Ui);
}, xn = () => bt, Sn = (e, t, n) => Math.min(Math.max(n, e), t), Jn = 1e-3, sc = 0.01, ga = 10, lc = 0.05, cc = 1;
function uc({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let a, o;
  Kt(e <= ga * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = Sn(lc, cc, i), e = Sn(sc, ga, e / 1e3), i < 1 ? (a = (c) => {
    const u = c * i, p = u * e, f = u - n, v = mr(c, i), h = Math.exp(-p);
    return Jn - f / v * h;
  }, o = (c) => {
    const p = c * i * e, f = p * n + n, v = Math.pow(i, 2) * Math.pow(c, 2) * e, h = Math.exp(-p), g = mr(Math.pow(c, 2), i);
    return (-a(c) + Jn > 0 ? -1 : 1) * ((f - v) * h) / g;
  }) : (a = (c) => {
    const u = Math.exp(-c * e), p = (c - n) * e + 1;
    return -Jn + u * p;
  }, o = (c) => {
    const u = Math.exp(-c * e), p = (n - c) * (e * e);
    return u * p;
  });
  const s = 5 / e, l = fc(a, o, s);
  if (e = e * 1e3, isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * r;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(r * c),
      duration: e
    };
  }
}
const dc = 12;
function fc(e, t, n) {
  let r = n;
  for (let a = 1; a < dc; a++)
    r = r - e(r) / t(r);
  return r;
}
function mr(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const vc = ["duration", "bounce"], pc = ["stiffness", "damping", "mass"];
function _a(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function hc(e) {
  let t = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, e);
  if (!_a(e, pc) && _a(e, vc)) {
    const n = uc(e);
    t = Object.assign(Object.assign(Object.assign({}, t), n), { velocity: 0, mass: 1 }), t.isResolvedFromDuration = !0;
  }
  return t;
}
function Ar(e) {
  var { from: t = 0, to: n = 1, restSpeed: r = 2, restDelta: a } = e, o = ge(e, ["from", "to", "restSpeed", "restDelta"]);
  const i = { done: !1, value: t };
  let { stiffness: s, damping: l, mass: c, velocity: u, duration: p, isResolvedFromDuration: f } = hc(o), v = ya, h = ya;
  function g() {
    const _ = u ? -(u / 1e3) : 0, y = n - t, x = l / (2 * Math.sqrt(s * c)), b = Math.sqrt(s / c) / 1e3;
    if (a === void 0 && (a = Math.min(Math.abs(n - t) / 100, 0.4)), x < 1) {
      const P = mr(b, x);
      v = (N) => {
        const O = Math.exp(-x * b * N);
        return n - O * ((_ + x * b * y) / P * Math.sin(P * N) + y * Math.cos(P * N));
      }, h = (N) => {
        const O = Math.exp(-x * b * N);
        return x * b * O * (Math.sin(P * N) * (_ + x * b * y) / P + y * Math.cos(P * N)) - O * (Math.cos(P * N) * (_ + x * b * y) - P * y * Math.sin(P * N));
      };
    } else if (x === 1)
      v = (P) => n - Math.exp(-b * P) * (y + (_ + b * y) * P);
    else {
      const P = b * Math.sqrt(x * x - 1);
      v = (N) => {
        const O = Math.exp(-x * b * N), V = Math.min(P * N, 300);
        return n - O * ((_ + x * b * y) * Math.sinh(V) + P * y * Math.cosh(V)) / P;
      };
    }
  }
  return g(), {
    next: (_) => {
      const y = v(_);
      if (f)
        i.done = _ >= p;
      else {
        const x = h(_) * 1e3, b = Math.abs(x) <= r, P = Math.abs(n - y) <= a;
        i.done = b && P;
      }
      return i.value = i.done ? n : y, i;
    },
    flipTarget: () => {
      u = -u, [t, n] = [n, t], g();
    }
  };
}
Ar.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const ya = (e) => 0, Wt = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, z = (e, t, n) => -n * e + n * t + e, zi = (e, t) => (n) => Math.max(Math.min(n, t), e), It = (e) => e % 1 ? Number(e.toFixed(5)) : e, qt = /(-)?([\d]*\.?[\d])+/g, gr = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi, mc = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function Qt(e) {
  return typeof e == "string";
}
const st = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, At = Object.assign(Object.assign({}, st), { transform: zi(0, 1) }), an = Object.assign(Object.assign({}, st), { default: 1 }), en = (e) => ({
  test: (t) => Qt(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), ze = en("deg"), $e = en("%"), I = en("px"), gc = en("vh"), _c = en("vw"), ba = Object.assign(Object.assign({}, $e), { parse: (e) => $e.parse(e) / 100, transform: (e) => $e.transform(e * 100) }), $r = (e, t) => (n) => Boolean(Qt(n) && mc.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Hi = (e, t, n) => (r) => {
  if (!Qt(r))
    return r;
  const [a, o, i, s] = r.match(qt);
  return {
    [e]: parseFloat(a),
    [t]: parseFloat(o),
    [n]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, at = {
  test: $r("hsl", "hue"),
  parse: Hi("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + $e.transform(It(t)) + ", " + $e.transform(It(n)) + ", " + It(At.transform(r)) + ")"
}, yc = zi(0, 255), Qn = Object.assign(Object.assign({}, st), { transform: (e) => Math.round(yc(e)) }), Ge = {
  test: $r("rgb", "red"),
  parse: Hi("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + Qn.transform(e) + ", " + Qn.transform(t) + ", " + Qn.transform(n) + ", " + It(At.transform(r)) + ")"
};
function bc(e) {
  let t = "", n = "", r = "", a = "";
  return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), a = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), a = e.substr(4, 1), t += t, n += n, r += r, a += a), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const _r = {
  test: $r("#"),
  parse: bc,
  transform: Ge.transform
}, re = {
  test: (e) => Ge.test(e) || _r.test(e) || at.test(e),
  parse: (e) => Ge.test(e) ? Ge.parse(e) : at.test(e) ? at.parse(e) : _r.parse(e),
  transform: (e) => Qt(e) ? e : e.hasOwnProperty("red") ? Ge.transform(e) : at.transform(e)
}, Yi = "${c}", Gi = "${n}";
function xc(e) {
  var t, n, r, a;
  return isNaN(e) && Qt(e) && ((n = (t = e.match(qt)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((a = (r = e.match(gr)) === null || r === void 0 ? void 0 : r.length) !== null && a !== void 0 ? a : 0) > 0;
}
function Ki(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0;
  const r = e.match(gr);
  r && (n = r.length, e = e.replace(gr, Yi), t.push(...r.map(re.parse)));
  const a = e.match(qt);
  return a && (e = e.replace(qt, Gi), t.push(...a.map(st.parse))), { values: t, numColors: n, tokenised: e };
}
function Xi(e) {
  return Ki(e).values;
}
function Zi(e) {
  const { values: t, numColors: n, tokenised: r } = Ki(e), a = t.length;
  return (o) => {
    let i = r;
    for (let s = 0; s < a; s++)
      i = i.replace(s < n ? Yi : Gi, s < n ? re.transform(o[s]) : It(o[s]));
    return i;
  };
}
const Sc = (e) => typeof e == "number" ? 0 : e;
function Tc(e) {
  const t = Xi(e);
  return Zi(e)(t.map(Sc));
}
const ke = { test: xc, parse: Xi, createTransformer: Zi, getAnimatableNone: Tc }, Pc = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Cc(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(qt) || [];
  if (!r)
    return e;
  const a = n.replace(r, "");
  let o = Pc.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + a + ")";
}
const wc = /([a-z-]*)\(.*?\)/g, yr = Object.assign(Object.assign({}, ke), { getAnimatableNone: (e) => {
  const t = e.match(wc);
  return t ? t.map(Cc).join(" ") : e;
} });
function er(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function xa({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let a = 0, o = 0, i = 0;
  if (!t)
    a = o = i = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    a = er(l, s, e + 1 / 3), o = er(l, s, e), i = er(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(o * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
const Lc = (e, t, n) => {
  const r = e * e, a = t * t;
  return Math.sqrt(Math.max(0, n * (a - r) + r));
}, Ec = [_r, Ge, at], Sa = (e) => Ec.find((t) => t.test(e)), Ta = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, Ji = (e, t) => {
  let n = Sa(e), r = Sa(t);
  me(!!n, Ta(e)), me(!!r, Ta(t));
  let a = n.parse(e), o = r.parse(t);
  n === at && (a = xa(a), n = Ge), r === at && (o = xa(o), r = Ge);
  const i = Object.assign({}, a);
  return (s) => {
    for (const l in i)
      l !== "alpha" && (i[l] = Lc(a[l], o[l], s));
    return i.alpha = z(a.alpha, o.alpha, s), n.transform(i);
  };
}, br = (e) => typeof e == "number", Nc = (e, t) => (n) => t(e(n)), jn = (...e) => e.reduce(Nc);
function Qi(e, t) {
  return br(e) ? (n) => z(e, t, n) : re.test(e) ? Ji(e, t) : to(e, t);
}
const eo = (e, t) => {
  const n = [...e], r = n.length, a = e.map((o, i) => Qi(o, t[i]));
  return (o) => {
    for (let i = 0; i < r; i++)
      n[i] = a[i](o);
    return n;
  };
}, Rc = (e, t) => {
  const n = Object.assign(Object.assign({}, e), t), r = {};
  for (const a in n)
    e[a] !== void 0 && t[a] !== void 0 && (r[a] = Qi(e[a], t[a]));
  return (a) => {
    for (const o in r)
      n[o] = r[o](a);
    return n;
  };
};
function Pa(e) {
  const t = ke.parse(e), n = t.length;
  let r = 0, a = 0, o = 0;
  for (let i = 0; i < n; i++)
    r || typeof t[i] == "number" ? r++ : t[i].hue !== void 0 ? o++ : a++;
  return { parsed: t, numNumbers: r, numRGB: a, numHSL: o };
}
const to = (e, t) => {
  const n = ke.createTransformer(t), r = Pa(e), a = Pa(t);
  return r.numHSL === a.numHSL && r.numRGB === a.numRGB && r.numNumbers >= a.numNumbers ? jn(eo(r.parsed, a.parsed), n) : (Kt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? t : e}`);
}, Vc = (e, t) => (n) => z(e, t, n);
function Ic(e) {
  if (typeof e == "number")
    return Vc;
  if (typeof e == "string")
    return re.test(e) ? Ji : to;
  if (Array.isArray(e))
    return eo;
  if (typeof e == "object")
    return Rc;
}
function Ac(e, t, n) {
  const r = [], a = n || Ic(e[0]), o = e.length - 1;
  for (let i = 0; i < o; i++) {
    let s = a(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] : t;
      s = jn(l, s);
    }
    r.push(s);
  }
  return r;
}
function $c([e, t], [n]) {
  return (r) => n(Wt(e, t, r));
}
function Oc(e, t) {
  const n = e.length, r = n - 1;
  return (a) => {
    let o = 0, i = !1;
    if (a <= e[0] ? i = !0 : a >= e[r] && (o = r - 1, i = !0), !i) {
      let l = 1;
      for (; l < n && !(e[l] > a || l === r); l++)
        ;
      o = l - 1;
    }
    const s = Wt(e[o], e[o + 1], a);
    return t[o](s);
  };
}
function no(e, t, { clamp: n = !0, ease: r, mixer: a } = {}) {
  const o = e.length;
  me(o === t.length, "Both input and output ranges must be the same length"), me(!r || !Array.isArray(r) || r.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[o - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  const i = Ac(t, r, a), s = o === 2 ? $c(e, i) : Oc(e, i);
  return n ? (l) => s(Sn(e[0], e[o - 1], l)) : s;
}
const Bn = (e) => (t) => 1 - e(1 - t), Or = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Mc = (e) => (t) => Math.pow(t, e), ro = (e) => (t) => t * t * ((e + 1) * t - e), Dc = (e) => {
  const t = ro(e);
  return (n) => (n *= 2) < 1 ? 0.5 * t(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)));
}, ao = 1.525, kc = 4 / 11, jc = 8 / 11, Bc = 9 / 10, Mr = (e) => e, Dr = Mc(2), Fc = Bn(Dr), io = Or(Dr), oo = (e) => 1 - Math.sin(Math.acos(e)), kr = Bn(oo), Wc = Or(kr), jr = ro(ao), qc = Bn(jr), Uc = Or(jr), zc = Dc(ao), Hc = 4356 / 361, Yc = 35442 / 1805, Gc = 16061 / 1805, Tn = (e) => {
  if (e === 1 || e === 0)
    return e;
  const t = e * e;
  return e < kc ? 7.5625 * t : e < jc ? 9.075 * t - 9.9 * e + 3.4 : e < Bc ? Hc * t - Yc * e + Gc : 10.8 * e * e - 20.52 * e + 10.72;
}, Kc = Bn(Tn), Xc = (e) => e < 0.5 ? 0.5 * (1 - Tn(1 - e * 2)) : 0.5 * Tn(e * 2 - 1) + 0.5;
function Zc(e, t) {
  return e.map(() => t || io).splice(0, e.length - 1);
}
function Jc(e) {
  const t = e.length;
  return e.map((n, r) => r !== 0 ? r / (t - 1) : 0);
}
function Qc(e, t) {
  return e.map((n) => n * t);
}
function gn({ from: e = 0, to: t = 1, ease: n, offset: r, duration: a = 300 }) {
  const o = { done: !1, value: e }, i = Array.isArray(t) ? t : [e, t], s = Qc(r && r.length === i.length ? r : Jc(i), a);
  function l() {
    return no(s, i, {
      ease: Array.isArray(n) ? n : Zc(i, n)
    });
  }
  let c = l();
  return {
    next: (u) => (o.value = c(u), o.done = u >= a, o),
    flipTarget: () => {
      i.reverse(), c = l();
    }
  };
}
function eu({ velocity: e = 0, from: t = 0, power: n = 0.8, timeConstant: r = 350, restDelta: a = 0.5, modifyTarget: o }) {
  const i = { done: !1, value: t };
  let s = n * e;
  const l = t + s, c = o === void 0 ? l : o(l);
  return c !== l && (s = c - t), {
    next: (u) => {
      const p = -s * Math.exp(-u / r);
      return i.done = !(p > a || p < -a), i.value = i.done ? c : c + p, i;
    },
    flipTarget: () => {
    }
  };
}
const Ca = { keyframes: gn, spring: Ar, decay: eu };
function tu(e) {
  if (Array.isArray(e.to))
    return gn;
  if (Ca[e.type])
    return Ca[e.type];
  const t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? gn : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Ar : gn;
}
function so(e, t, n = 0) {
  return e - t - n;
}
function nu(e, t, n = 0, r = !0) {
  return r ? so(t + -e, t, n) : t - (e - t) + n;
}
function ru(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
const au = (e) => {
  const t = ({ delta: n }) => e(n);
  return {
    start: () => Te.update(t, !0),
    stop: () => St.update(t)
  };
};
function lo(e) {
  var t, n, { from: r, autoplay: a = !0, driver: o = au, elapsed: i = 0, repeat: s = 0, repeatType: l = "loop", repeatDelay: c = 0, onPlay: u, onStop: p, onComplete: f, onRepeat: v, onUpdate: h } = e, g = ge(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: _ } = g, y, x = 0, b = g.duration, P, N = !1, O = !0, V;
  const A = tu(g);
  !((n = (t = A).needsInterpolation) === null || n === void 0) && n.call(t, r, _) && (V = no([0, 100], [r, _], {
    clamp: !1
  }), r = 0, _ = 100);
  const $ = A(Object.assign(Object.assign({}, g), { from: r, to: _ }));
  function B() {
    x++, l === "reverse" ? (O = x % 2 === 0, i = nu(i, b, c, O)) : (i = so(i, b, c), l === "mirror" && $.flipTarget()), N = !1, v && v();
  }
  function Y() {
    y.stop(), f && f();
  }
  function ie(oe) {
    if (O || (oe = -oe), i += oe, !N) {
      const se = $.next(Math.max(0, i));
      P = se.value, V && (P = V(P)), N = O ? se.done : i <= 0;
    }
    h == null || h(P), N && (x === 0 && (b != null || (b = i)), x < s ? ru(i, b, c, O) && B() : Y());
  }
  function Z() {
    u == null || u(), y = o(ie), y.start();
  }
  return a && Z(), {
    stop: () => {
      p == null || p(), y.stop();
    }
  };
}
function co(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function iu({ from: e = 0, velocity: t = 0, min: n, max: r, power: a = 0.8, timeConstant: o = 750, bounceStiffness: i = 500, bounceDamping: s = 10, restDelta: l = 1, modifyTarget: c, driver: u, onUpdate: p, onComplete: f, onStop: v }) {
  let h;
  function g(b) {
    return n !== void 0 && b < n || r !== void 0 && b > r;
  }
  function _(b) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - b) < Math.abs(r - b) ? n : r;
  }
  function y(b) {
    h == null || h.stop(), h = lo(Object.assign(Object.assign({}, b), {
      driver: u,
      onUpdate: (P) => {
        var N;
        p == null || p(P), (N = b.onUpdate) === null || N === void 0 || N.call(b, P);
      },
      onComplete: f,
      onStop: v
    }));
  }
  function x(b) {
    y(Object.assign({ type: "spring", stiffness: i, damping: s, restDelta: l }, b));
  }
  if (g(e))
    x({ from: e, velocity: t, to: _(e) });
  else {
    let b = a * t + e;
    typeof c < "u" && (b = c(b));
    const P = _(b), N = P === n ? -1 : 1;
    let O, V;
    const A = ($) => {
      O = V, V = $, t = co($ - O, xn().delta), (N === 1 && $ > P || N === -1 && $ < P) && x({ from: $, to: P, velocity: t });
    };
    y({
      type: "decay",
      from: e,
      velocity: t,
      timeConstant: o,
      power: a,
      restDelta: l,
      modifyTarget: c,
      onUpdate: g(b) ? A : void 0
    });
  }
  return {
    stop: () => h == null ? void 0 : h.stop()
  };
}
const xr = (e) => e.hasOwnProperty("x") && e.hasOwnProperty("y"), wa = (e) => xr(e) && e.hasOwnProperty("z"), on = (e, t) => Math.abs(e - t);
function uo(e, t) {
  if (br(e) && br(t))
    return on(e, t);
  if (xr(e) && xr(t)) {
    const n = on(e.x, t.x), r = on(e.y, t.y), a = wa(e) && wa(t) ? on(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(a, 2));
  }
}
const fo = (e, t) => 1 - 3 * t + 3 * e, vo = (e, t) => 3 * t - 6 * e, po = (e) => 3 * e, Pn = (e, t, n) => ((fo(t, n) * e + vo(t, n)) * e + po(t)) * e, ho = (e, t, n) => 3 * fo(t, n) * e * e + 2 * vo(t, n) * e + po(t), ou = 1e-7, su = 10;
function lu(e, t, n, r, a) {
  let o, i, s = 0;
  do
    i = t + (n - t) / 2, o = Pn(i, r, a) - e, o > 0 ? n = i : t = i;
  while (Math.abs(o) > ou && ++s < su);
  return i;
}
const cu = 8, uu = 1e-3;
function du(e, t, n, r) {
  for (let a = 0; a < cu; ++a) {
    const o = ho(t, n, r);
    if (o === 0)
      return t;
    const i = Pn(t, n, r) - e;
    t -= i / o;
  }
  return t;
}
const _n = 11, sn = 1 / (_n - 1);
function fu(e, t, n, r) {
  if (e === t && n === r)
    return Mr;
  const a = new Float32Array(_n);
  for (let i = 0; i < _n; ++i)
    a[i] = Pn(i * sn, e, n);
  function o(i) {
    let s = 0, l = 1;
    const c = _n - 1;
    for (; l !== c && a[l] <= i; ++l)
      s += sn;
    --l;
    const u = (i - a[l]) / (a[l + 1] - a[l]), p = s + u * sn, f = ho(p, e, n);
    return f >= uu ? du(i, p, e, n) : f === 0 ? p : lu(i, s, s + sn, e, n);
  }
  return (i) => i === 0 || i === 1 ? i : Pn(o(i), t, r);
}
function Br(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Fr(e, t) {
  var n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var $t = function() {
  function e() {
    this.subscriptions = [];
  }
  return e.prototype.add = function(t) {
    var n = this;
    return Br(this.subscriptions, t), function() {
      return Fr(n.subscriptions, t);
    };
  }, e.prototype.notify = function(t, n, r) {
    var a = this.subscriptions.length;
    if (!!a)
      if (a === 1)
        this.subscriptions[0](t, n, r);
      else
        for (var o = 0; o < a; o++) {
          var i = this.subscriptions[o];
          i && i(t, n, r);
        }
  }, e.prototype.getSize = function() {
    return this.subscriptions.length;
  }, e.prototype.clear = function() {
    this.subscriptions.length = 0;
  }, e;
}(), vu = function(e) {
  return !isNaN(parseFloat(e));
}, pu = function() {
  function e(t) {
    var n = this;
    this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new $t(), this.velocityUpdateSubscribers = new $t(), this.renderSubscribers = new $t(), this.canTrackVelocity = !1, this.updateAndNotify = function(r, a) {
      a === void 0 && (a = !0), n.prev = n.current, n.current = r;
      var o = xn(), i = o.delta, s = o.timestamp;
      n.lastUpdated !== s && (n.timeDelta = i, n.lastUpdated = s, Te.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), a && n.renderSubscribers.notify(n.current);
    }, this.scheduleVelocityCheck = function() {
      return Te.postRender(n.velocityCheck);
    }, this.velocityCheck = function(r) {
      var a = r.timestamp;
      a !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = vu(this.current);
  }
  return e.prototype.onChange = function(t) {
    return this.updateSubscribers.add(t);
  }, e.prototype.clearListeners = function() {
    this.updateSubscribers.clear();
  }, e.prototype.onRenderRequest = function(t) {
    return t(this.get()), this.renderSubscribers.add(t);
  }, e.prototype.attach = function(t) {
    this.passiveEffect = t;
  }, e.prototype.set = function(t, n) {
    n === void 0 && (n = !0), !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }, e.prototype.get = function() {
    return this.current;
  }, e.prototype.getPrevious = function() {
    return this.prev;
  }, e.prototype.getVelocity = function() {
    return this.canTrackVelocity ? co(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
  }, e.prototype.start = function(t) {
    var n = this;
    return this.stop(), new Promise(function(r) {
      n.hasAnimated = !0, n.stopAnimation = t(r);
    }).then(function() {
      return n.clearAnimation();
    });
  }, e.prototype.stop = function() {
    this.stopAnimation && this.stopAnimation(), this.clearAnimation();
  }, e.prototype.isAnimating = function() {
    return !!this.stopAnimation;
  }, e.prototype.clearAnimation = function() {
    this.stopAnimation = null;
  }, e.prototype.destroy = function() {
    this.updateSubscribers.clear(), this.renderSubscribers.clear(), this.stop();
  }, e;
}();
function Tt(e) {
  return new pu(e);
}
var je = function(e) {
  return Boolean(e !== null && typeof e == "object" && e.getVelocity);
}, Cn = function(e) {
  return e * 1e3;
}, La = {
  linear: Mr,
  easeIn: Dr,
  easeInOut: io,
  easeOut: Fc,
  circIn: oo,
  circInOut: Wc,
  circOut: kr,
  backIn: jr,
  backInOut: Uc,
  backOut: qc,
  anticipate: zc,
  bounceIn: Kc,
  bounceInOut: Xc,
  bounceOut: Tn
}, Ea = function(e) {
  if (Array.isArray(e)) {
    me(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var t = H(e, 4), n = t[0], r = t[1], a = t[2], o = t[3];
    return fu(n, r, a, o);
  } else if (typeof e == "string")
    return me(La[e] !== void 0, "Invalid easing type '".concat(e, "'")), La[e];
  return e;
}, hu = function(e) {
  return Array.isArray(e) && typeof e[0] != "number";
}, Na = function(e, t) {
  return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && ke.test(t) && !t.startsWith("url("));
}, Ut = function(e) {
  return Array.isArray(e);
}, Je = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
}, ln = function(e) {
  return {
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
}, tr = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
}, mu = function(e) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: e
  };
}, Ra = {
  x: Je,
  y: Je,
  z: Je,
  rotate: Je,
  rotateX: Je,
  rotateY: Je,
  rotateZ: Je,
  scaleX: ln,
  scaleY: ln,
  scale: ln,
  opacity: tr,
  backgroundColor: tr,
  color: tr,
  default: ln
}, gu = function(e, t) {
  var n;
  return Ut(t) ? n = mu : n = Ra[e] || Ra.default, S({ to: t }, n(t));
}, Va = S(S({}, st), { transform: Math.round }), mo = {
  borderWidth: I,
  borderTopWidth: I,
  borderRightWidth: I,
  borderBottomWidth: I,
  borderLeftWidth: I,
  borderRadius: I,
  radius: I,
  borderTopLeftRadius: I,
  borderTopRightRadius: I,
  borderBottomRightRadius: I,
  borderBottomLeftRadius: I,
  width: I,
  maxWidth: I,
  height: I,
  maxHeight: I,
  size: I,
  top: I,
  right: I,
  bottom: I,
  left: I,
  padding: I,
  paddingTop: I,
  paddingRight: I,
  paddingBottom: I,
  paddingLeft: I,
  margin: I,
  marginTop: I,
  marginRight: I,
  marginBottom: I,
  marginLeft: I,
  rotate: ze,
  rotateX: ze,
  rotateY: ze,
  rotateZ: ze,
  scale: an,
  scaleX: an,
  scaleY: an,
  scaleZ: an,
  skew: ze,
  skewX: ze,
  skewY: ze,
  distance: I,
  translateX: I,
  translateY: I,
  translateZ: I,
  x: I,
  y: I,
  z: I,
  perspective: I,
  transformPerspective: I,
  opacity: At,
  originX: ba,
  originY: ba,
  originZ: I,
  zIndex: Va,
  fillOpacity: At,
  strokeOpacity: At,
  numOctaves: Va
}, _u = S(S({}, mo), {
  color: re,
  backgroundColor: re,
  outlineColor: re,
  fill: re,
  stroke: re,
  borderColor: re,
  borderTopColor: re,
  borderRightColor: re,
  borderBottomColor: re,
  borderLeftColor: re,
  filter: yr,
  WebkitFilter: yr
}), Wr = function(e) {
  return _u[e];
};
function qr(e, t) {
  var n, r = Wr(e);
  return r !== yr && (r = ke), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t);
}
var yu = {
  current: !1
}, bu = function(e) {
  return Boolean(e && typeof e == "object" && e.mix && e.toValue);
}, go = function(e) {
  return Ut(e) ? e[e.length - 1] || 0 : e;
};
function xu(e) {
  e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
  var t = ge(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(t).length;
}
var Ia = !1;
function Su(e) {
  var t = e.ease, n = e.times, r = e.yoyo, a = e.flip, o = e.loop, i = ge(e, ["ease", "times", "yoyo", "flip", "loop"]), s = S({}, i);
  return n && (s.offset = n), i.duration && (s.duration = Cn(i.duration)), i.repeatDelay && (s.repeatDelay = Cn(i.repeatDelay)), t && (s.ease = hu(t) ? t.map(Ea) : Ea(t)), i.type === "tween" && (s.type = "keyframes"), (r || o || a) && (Kt(!Ia, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), Ia = !0, r ? s.repeatType = "reverse" : o ? s.repeatType = "loop" : a && (s.repeatType = "mirror"), s.repeat = o || r || a || i.repeat), i.type !== "spring" && (s.type = "keyframes"), s;
}
function Tu(e, t) {
  var n, r, a = Ur(e, t) || {};
  return (r = (n = a.delay) !== null && n !== void 0 ? n : e.delay) !== null && r !== void 0 ? r : 0;
}
function Pu(e) {
  return Array.isArray(e.to) && e.to[0] === null && (e.to = Se([], H(e.to), !1), e.to[0] = e.from), e;
}
function Cu(e, t, n) {
  var r;
  return Array.isArray(t.to) && ((r = e.duration) !== null && r !== void 0 || (e.duration = 0.8)), Pu(t), xu(e) || (e = S(S({}, e), gu(n, t.to))), S(S({}, t), Su(e));
}
function wu(e, t, n, r, a) {
  var o, i = Ur(r, e), s = (o = i.from) !== null && o !== void 0 ? o : t.get(), l = Na(e, n);
  s === "none" && l && typeof n == "string" ? s = qr(e, n) : Aa(s) && typeof n == "string" ? s = $a(n) : !Array.isArray(n) && Aa(n) && typeof s == "string" && (n = $a(s));
  var c = Na(e, s);
  Kt(c === l, "You are trying to animate ".concat(e, ' from "').concat(s, '" to "').concat(n, '". ').concat(s, " is not an animatable value - to enable this animation set ").concat(s, " to a value animatable to ").concat(n, " via the `style` property."));
  function u() {
    var f = {
      from: s,
      to: n,
      velocity: t.getVelocity(),
      onComplete: a,
      onUpdate: function(v) {
        return t.set(v);
      }
    };
    return i.type === "inertia" || i.type === "decay" ? iu(S(S({}, f), i)) : lo(S(S({}, Cu(i, f, e)), { onUpdate: function(v) {
      var h;
      f.onUpdate(v), (h = i.onUpdate) === null || h === void 0 || h.call(i, v);
    }, onComplete: function() {
      var v;
      f.onComplete(), (v = i.onComplete) === null || v === void 0 || v.call(i);
    } }));
  }
  function p() {
    var f, v, h = go(n);
    return t.set(h), a(), (f = i == null ? void 0 : i.onUpdate) === null || f === void 0 || f.call(i, h), (v = i == null ? void 0 : i.onComplete) === null || v === void 0 || v.call(i), { stop: function() {
    } };
  }
  return !c || !l || i.type === !1 ? p : u;
}
function Aa(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function $a(e) {
  return typeof e == "number" ? 0 : qr("", e);
}
function Ur(e, t) {
  return e[t] || e.default || e;
}
function zr(e, t, n, r) {
  return r === void 0 && (r = {}), yu.current && (r = { type: !1 }), t.start(function(a) {
    var o, i, s = wu(e, t, n, r, a), l = Tu(r, e), c = function() {
      return i = s();
    };
    return l ? o = window.setTimeout(c, Cn(l)) : c(), function() {
      clearTimeout(o), i == null || i.stop();
    };
  });
}
function Lu(e, t, n) {
  n === void 0 && (n = {});
  var r = je(e) ? e : Tt(e);
  return zr("", r, t, n), {
    stop: function() {
      return r.stop();
    },
    isAnimating: function() {
      return r.isAnimating();
    }
  };
}
var _o = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Eu = _o.length, Oa = function(e) {
  return typeof e == "string" ? parseFloat(e) : e;
}, Ma = function(e) {
  return typeof e == "number" || I.test(e);
};
function Nu(e, t, n, r, a, o) {
  var i, s, l, c;
  a ? (e.opacity = z(
    0,
    (i = n.opacity) !== null && i !== void 0 ? i : 1,
    Ru(r)
  ), e.opacityExit = z((s = t.opacity) !== null && s !== void 0 ? s : 1, 0, Vu(r))) : o && (e.opacity = z((l = t.opacity) !== null && l !== void 0 ? l : 1, (c = n.opacity) !== null && c !== void 0 ? c : 1, r));
  for (var u = 0; u < Eu; u++) {
    var p = "border".concat(_o[u], "Radius"), f = Da(t, p), v = Da(n, p);
    if (!(f === void 0 && v === void 0)) {
      f || (f = 0), v || (v = 0);
      var h = f === 0 || v === 0 || Ma(f) === Ma(v);
      h ? (e[p] = Math.max(z(Oa(f), Oa(v), r), 0), ($e.test(v) || $e.test(f)) && (e[p] += "%")) : e[p] = v;
    }
  }
  (t.rotate || n.rotate) && (e.rotate = z(t.rotate || 0, n.rotate || 0, r));
}
function Da(e, t) {
  var n;
  return (n = e[t]) !== null && n !== void 0 ? n : e.borderRadius;
}
var Ru = yo(0, 0.5, kr), Vu = yo(0.5, 0.95, Mr);
function yo(e, t, n) {
  return function(r) {
    return r < e ? 0 : r > t ? 1 : n(Wt(e, t, r));
  };
}
function ka(e, t) {
  e.min = t.min, e.max = t.max;
}
function Le(e, t) {
  ka(e.x, t.x), ka(e.y, t.y);
}
function nr(e) {
  return e === void 0 || e === 1;
}
function bo(e) {
  var t = e.scale, n = e.scaleX, r = e.scaleY;
  return !nr(t) || !nr(n) || !nr(r);
}
function He(e) {
  return bo(e) || ja(e.x) || ja(e.y) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function ja(e) {
  return e && e !== "0%";
}
function wn(e, t, n) {
  var r = e - n, a = t * r;
  return n + a;
}
function Ba(e, t, n, r, a) {
  return a !== void 0 && (e = wn(e, a, r)), wn(e, n, r) + t;
}
function Sr(e, t, n, r, a) {
  t === void 0 && (t = 0), n === void 0 && (n = 1), e.min = Ba(e.min, t, n, r, a), e.max = Ba(e.max, t, n, r, a);
}
function xo(e, t) {
  var n = t.x, r = t.y;
  Sr(e.x, n.translate, n.scale, n.originPoint), Sr(e.y, r.translate, r.scale, r.originPoint);
}
function Iu(e, t, n, r) {
  var a, o;
  r === void 0 && (r = !1);
  var i = n.length;
  if (!!i) {
    t.x = t.y = 1;
    for (var s, l, c = 0; c < i; c++)
      s = n[c], l = s.projectionDelta, ((o = (a = s.instance) === null || a === void 0 ? void 0 : a.style) === null || o === void 0 ? void 0 : o.display) !== "contents" && (r && s.options.layoutScroll && s.scroll && s !== s.root && yt(e, { x: -s.scroll.x, y: -s.scroll.y }), l && (t.x *= l.x.scale, t.y *= l.y.scale, xo(e, l)), r && He(s.latestValues) && yt(e, s.latestValues));
  }
}
function _t(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function Fa(e, t, n) {
  var r = H(n, 3), a = r[0], o = r[1], i = r[2], s = t[i] !== void 0 ? t[i] : 0.5, l = z(e.min, e.max, s);
  Sr(e, t[a], t[o], l, t.scale);
}
var Au = ["x", "scaleX", "originX"], $u = ["y", "scaleY", "originY"];
function yt(e, t) {
  Fa(e.x, t, Au), Fa(e.y, t, $u);
}
function Be(e) {
  return e.max - e.min;
}
function Wa(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 0.01), uo(e, t) < n;
}
function qa(e, t, n, r) {
  r === void 0 && (r = 0.5), e.origin = r, e.originPoint = z(t.min, t.max, e.origin), e.scale = Be(n) / Be(t), (Wa(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = z(n.min, n.max, e.origin) - e.originPoint, (Wa(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Ot(e, t, n, r) {
  qa(e.x, t.x, n.x, r == null ? void 0 : r.originX), qa(e.y, t.y, n.y, r == null ? void 0 : r.originY);
}
function Ua(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Be(t);
}
function Ou(e, t, n) {
  Ua(e.x, t.x, n.x), Ua(e.y, t.y, n.y);
}
function za(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Be(t);
}
function Mt(e, t, n) {
  za(e.x, t.x, n.x), za(e.y, t.y, n.y);
}
function Ha(e, t, n, r, a) {
  return e -= t, e = wn(e, 1 / n, r), a !== void 0 && (e = wn(e, 1 / a, r)), e;
}
function Mu(e, t, n, r, a, o, i) {
  if (t === void 0 && (t = 0), n === void 0 && (n = 1), r === void 0 && (r = 0.5), o === void 0 && (o = e), i === void 0 && (i = e), $e.test(t)) {
    t = parseFloat(t);
    var s = z(i.min, i.max, t / 100);
    t = s - i.min;
  }
  if (typeof t == "number") {
    var l = z(o.min, o.max, r);
    e === o && (l -= t), e.min = Ha(e.min, t, n, l, a), e.max = Ha(e.max, t, n, l, a);
  }
}
function Ya(e, t, n, r, a) {
  var o = H(n, 3), i = o[0], s = o[1], l = o[2];
  Mu(e, t[i], t[s], t[l], t.scale, r, a);
}
var Du = ["x", "scaleX", "originX"], ku = ["y", "scaleY", "originY"];
function Ga(e, t, n, r) {
  Ya(e.x, t, Du, n == null ? void 0 : n.x, r == null ? void 0 : r.x), Ya(e.y, t, ku, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
var Ka = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
}, Dt = function() {
  return {
    x: Ka(),
    y: Ka()
  };
}, Xa = function() {
  return { min: 0, max: 0 };
}, ee = function() {
  return {
    x: Xa(),
    y: Xa()
  };
};
function Za(e) {
  return e.translate === 0 && e.scale === 1;
}
function So(e) {
  return Za(e.x) && Za(e.y);
}
function To(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
var ju = function() {
  function e() {
    this.members = [];
  }
  return e.prototype.add = function(t) {
    Br(this.members, t), t.scheduleRender();
  }, e.prototype.remove = function(t) {
    if (Fr(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      var n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }, e.prototype.relegate = function(t) {
    var n = this.members.findIndex(function(i) {
      return t === i;
    });
    if (n === 0)
      return !1;
    for (var r, a = n; a >= 0; a--) {
      var o = this.members[a];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }, e.prototype.promote = function(t, n) {
    var r, a = this.lead;
    if (t !== a && (this.prevLead = a, this.lead = t, t.show(), a)) {
      a.instance && a.scheduleRender(), t.scheduleRender(), t.resumeFrom = a, n && (t.resumeFrom.preserveOpacity = !0), a.snapshot && (t.snapshot = a.snapshot, t.snapshot.latestValues = a.animationValues || a.latestValues, t.snapshot.isShared = !0), !((r = t.root) === null || r === void 0) && r.isUpdating && (t.isLayoutDirty = !0);
      var o = t.options.crossfade;
      o === !1 && a.hide();
    }
  }, e.prototype.exitAnimationComplete = function() {
    this.members.forEach(function(t) {
      var n, r, a, o, i;
      (r = (n = t.options).onExitComplete) === null || r === void 0 || r.call(n), (i = (a = t.resumingFrom) === null || a === void 0 ? void 0 : (o = a.options).onExitComplete) === null || i === void 0 || i.call(o);
    });
  }, e.prototype.scheduleRender = function() {
    this.members.forEach(function(t) {
      t.instance && t.scheduleRender(!1);
    });
  }, e.prototype.removeLeadSnapshot = function() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }, e;
}(), Ln = {};
function Bu(e) {
  Object.assign(Ln, e);
}
var Fu = "translate3d(0px, 0px, 0) scale(1, 1)";
function Ja(e, t, n) {
  var r = e.x.translate / t.x, a = e.y.translate / t.y, o = "translate3d(".concat(r, "px, ").concat(a, "px, 0) ");
  if (n) {
    var i = n.rotate, s = n.rotateX, l = n.rotateY;
    i && (o += "rotate(".concat(i, "deg) ")), s && (o += "rotateX(".concat(s, "deg) ")), l && (o += "rotateY(".concat(l, "deg) "));
  }
  return o += "scale(".concat(e.x.scale, ", ").concat(e.y.scale, ")"), o === Fu ? "none" : o;
}
function Ie(e) {
  return [e("x"), e("y")];
}
var Tr = ["", "X", "Y", "Z"], Wu = ["translate", "scale", "rotate", "skew"], zt = ["transformPerspective", "x", "y", "z"];
Wu.forEach(function(e) {
  return Tr.forEach(function(t) {
    return zt.push(e + t);
  });
});
function qu(e, t) {
  return zt.indexOf(e) - zt.indexOf(t);
}
var Uu = new Set(zt);
function tn(e) {
  return Uu.has(e);
}
var zu = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function Po(e) {
  return zu.has(e);
}
var Hu = function(e, t) {
  return e.depth - t.depth;
}, Yu = function() {
  function e() {
    this.children = [], this.isDirty = !1;
  }
  return e.prototype.add = function(t) {
    Br(this.children, t), this.isDirty = !0;
  }, e.prototype.remove = function(t) {
    Fr(this.children, t), this.isDirty = !0;
  }, e.prototype.forEach = function(t) {
    this.isDirty && this.children.sort(Hu), this.isDirty = !1, this.children.forEach(t);
  }, e;
}();
function yn(e) {
  var t = je(e) ? e.get() : e;
  return bu(t) ? t.toValue() : t;
}
var Qa = 1e3, kt = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};
function Co(e) {
  var t = e.attachResizeListener, n = e.defaultParent, r = e.measureScroll, a = e.resetTransform;
  return function() {
    function o(i, s, l) {
      var c = this;
      s === void 0 && (s = {}), l === void 0 && (l = n == null ? void 0 : n()), this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = function() {
        c.isUpdating && (c.isUpdating = !1, c.clearAllSnapshots());
      }, this.updateProjection = function() {
        c.nodes.forEach(Qu), c.nodes.forEach(ed);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.id = i, this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? Se(Se([], H(l.path), !1), [l], !1) : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (var u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Yu());
    }
    return o.prototype.addEventListener = function(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new $t()), this.eventHandlers.get(i).add(s);
    }, o.prototype.notifyListeners = function(i) {
      for (var s = [], l = 1; l < arguments.length; l++)
        s[l - 1] = arguments[l];
      var c = this.eventHandlers.get(i);
      c == null || c.notify.apply(c, Se([], H(s), !1));
    }, o.prototype.hasListeners = function(i) {
      return this.eventHandlers.has(i);
    }, o.prototype.registerPotentialNode = function(i, s) {
      this.potentialNodes.set(i, s);
    }, o.prototype.mount = function(i, s) {
      var l = this, c;
      if (s === void 0 && (s = !1), !this.instance) {
        this.isSVG = i instanceof SVGElement && i.tagName !== "svg", this.instance = i;
        var u = this.options, p = u.layoutId, f = u.layout, v = u.visualElement;
        if (v && !v.getInstance() && v.mount(i), this.root.nodes.add(this), (c = this.parent) === null || c === void 0 || c.children.add(this), this.id && this.root.potentialNodes.delete(this.id), s && (f || p) && (this.isLayoutDirty = !0), t) {
          var h, g = function() {
            return l.root.updateBlockedByResize = !1;
          };
          t(i, function() {
            l.root.updateBlockedByResize = !0, clearTimeout(h), h = window.setTimeout(g, 250), kt.hasAnimatedSinceResize && (kt.hasAnimatedSinceResize = !1, l.nodes.forEach(Ju));
          });
        }
        p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && v && (p || f) && this.addEventListener("didUpdate", function(_) {
          var y, x, b, P, N, O = _.delta, V = _.hasLayoutChanged, A = _.hasRelativeTargetChanged, $ = _.layout;
          if (l.isTreeAnimationBlocked()) {
            l.target = void 0, l.relativeTarget = void 0;
            return;
          }
          var B = (x = (y = l.options.transition) !== null && y !== void 0 ? y : v.getDefaultTransition()) !== null && x !== void 0 ? x : id, Y = v.getProps(), ie = Y.onLayoutAnimationStart, Z = Y.onLayoutAnimationComplete, oe = !l.targetLayout || !To(l.targetLayout, $) || A, se = !V && A;
          if (((b = l.resumeFrom) === null || b === void 0 ? void 0 : b.instance) || se || V && (oe || !l.currentAnimation)) {
            l.resumeFrom && (l.resumingFrom = l.resumeFrom, l.resumingFrom.resumingFrom = void 0), l.setAnimationOrigin(O, se);
            var U = S(S({}, Ur(B, "layout")), { onPlay: ie, onComplete: Z });
            v.shouldReduceMotion && (U.delay = 0, U.type = !1), l.startAnimation(U);
          } else
            !V && l.animationProgress === 0 && l.finishAnimation(), l.isLead() && ((N = (P = l.options).onExitComplete) === null || N === void 0 || N.call(P));
          l.targetLayout = $;
        });
      }
    }, o.prototype.unmount = function() {
      var i, s;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (i = this.getStack()) === null || i === void 0 || i.remove(this), (s = this.parent) === null || s === void 0 || s.children.delete(this), this.instance = void 0, St.preRender(this.updateProjection);
    }, o.prototype.blockUpdate = function() {
      this.updateManuallyBlocked = !0;
    }, o.prototype.unblockUpdate = function() {
      this.updateManuallyBlocked = !1;
    }, o.prototype.isUpdateBlocked = function() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }, o.prototype.isTreeAnimationBlocked = function() {
      var i;
      return this.isAnimationBlocked || ((i = this.parent) === null || i === void 0 ? void 0 : i.isTreeAnimationBlocked()) || !1;
    }, o.prototype.startUpdate = function() {
      var i;
      this.isUpdateBlocked() || (this.isUpdating = !0, (i = this.nodes) === null || i === void 0 || i.forEach(td));
    }, o.prototype.willUpdate = function(i) {
      var s, l, c;
      if (i === void 0 && (i = !0), this.root.isUpdateBlocked()) {
        (l = (s = this.options).onExitComplete) === null || l === void 0 || l.call(s);
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), !this.isLayoutDirty) {
        this.isLayoutDirty = !0;
        for (var u = 0; u < this.path.length; u++) {
          var p = this.path[u];
          p.shouldResetTransform = !0, p.updateScroll();
        }
        var f = this.options, v = f.layoutId, h = f.layout;
        if (!(v === void 0 && !h)) {
          var g = (c = this.options.visualElement) === null || c === void 0 ? void 0 : c.getProps().transformTemplate;
          this.prevTransformTemplateValue = g == null ? void 0 : g(this.latestValues, ""), this.updateSnapshot(), i && this.notifyListeners("willUpdate");
        }
      }
    }, o.prototype.didUpdate = function() {
      var i = this.isUpdateBlocked();
      if (i) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ei);
        return;
      }
      !this.isUpdating || (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(od), this.potentialNodes.clear()), this.nodes.forEach(Zu), this.nodes.forEach(Gu), this.nodes.forEach(Ku), this.clearAllSnapshots(), Zn.update(), Zn.preRender(), Zn.render());
    }, o.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(Xu), this.sharedNodes.forEach(nd);
    }, o.prototype.scheduleUpdateProjection = function() {
      Te.preRender(this.updateProjection, !1, !0);
    }, o.prototype.scheduleCheckAfterUnmount = function() {
      var i = this;
      Te.postRender(function() {
        i.isLayoutDirty ? i.root.didUpdate() : i.root.checkUpdateFailed();
      });
    }, o.prototype.updateSnapshot = function() {
      if (!(this.snapshot || !this.instance)) {
        var i = this.measure(), s = this.removeTransform(this.removeElementScroll(i));
        ai(s), this.snapshot = {
          measured: i,
          layout: s,
          latestValues: {}
        };
      }
    }, o.prototype.updateLayout = function() {
      var i;
      if (!!this.instance && (this.updateScroll(), !(!(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))) {
        if (this.resumeFrom && !this.resumeFrom.instance)
          for (var s = 0; s < this.path.length; s++) {
            var l = this.path[s];
            l.updateScroll();
          }
        var c = this.measure();
        ai(c);
        var u = this.layout;
        this.layout = {
          measured: c,
          actual: this.removeElementScroll(c)
        }, this.layoutCorrected = ee(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.actual), (i = this.options.visualElement) === null || i === void 0 || i.notifyLayoutMeasure(this.layout.actual, u == null ? void 0 : u.actual);
      }
    }, o.prototype.updateScroll = function() {
      this.options.layoutScroll && this.instance && (this.scroll = r(this.instance));
    }, o.prototype.resetTransform = function() {
      var i;
      if (!!a) {
        var s = this.isLayoutDirty || this.shouldResetTransform, l = this.projectionDelta && !So(this.projectionDelta), c = (i = this.options.visualElement) === null || i === void 0 ? void 0 : i.getProps().transformTemplate, u = c == null ? void 0 : c(this.latestValues, ""), p = u !== this.prevTransformTemplateValue;
        s && (l || He(this.latestValues) || p) && (a(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
      }
    }, o.prototype.measure = function() {
      var i = this.options.visualElement;
      if (!i)
        return ee();
      var s = i.measureViewportBox(), l = this.root.scroll;
      return l && (_t(s.x, l.x), _t(s.y, l.y)), s;
    }, o.prototype.removeElementScroll = function(i) {
      var s = ee();
      Le(s, i);
      for (var l = 0; l < this.path.length; l++) {
        var c = this.path[l], u = c.scroll, p = c.options;
        c !== this.root && u && p.layoutScroll && (_t(s.x, u.x), _t(s.y, u.y));
      }
      return s;
    }, o.prototype.applyTransform = function(i, s) {
      s === void 0 && (s = !1);
      var l = ee();
      Le(l, i);
      for (var c = 0; c < this.path.length; c++) {
        var u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && yt(l, {
          x: -u.scroll.x,
          y: -u.scroll.y
        }), He(u.latestValues) && yt(l, u.latestValues);
      }
      return He(this.latestValues) && yt(l, this.latestValues), l;
    }, o.prototype.removeTransform = function(i) {
      var s, l = ee();
      Le(l, i);
      for (var c = 0; c < this.path.length; c++) {
        var u = this.path[c];
        if (!!u.instance && !!He(u.latestValues)) {
          bo(u.latestValues) && u.updateSnapshot();
          var p = ee(), f = u.measure();
          Le(p, f), Ga(l, u.latestValues, (s = u.snapshot) === null || s === void 0 ? void 0 : s.layout, p);
        }
      }
      return He(this.latestValues) && Ga(l, this.latestValues), l;
    }, o.prototype.setTargetDelta = function(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection();
    }, o.prototype.setOptions = function(i) {
      var s;
      this.options = S(S(S({}, this.options), i), { crossfade: (s = i.crossfade) !== null && s !== void 0 ? s : !0 });
    }, o.prototype.clearMeasurements = function() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }, o.prototype.resolveTargetDelta = function() {
      var i, s = this.options, l = s.layout, c = s.layoutId;
      !this.layout || !(l || c) || (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = ee(), this.relativeTargetOrigin = ee(), Mt(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), Le(this.relativeTarget, this.relativeTargetOrigin))), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ee(), this.targetWithTransforms = ee()), this.relativeTarget && this.relativeTargetOrigin && ((i = this.relativeParent) === null || i === void 0 ? void 0 : i.target) ? Ou(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Le(this.target, this.layout.actual), xo(this.target, this.targetDelta)) : Le(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = ee(), this.relativeTargetOrigin = ee(), Mt(this.relativeTargetOrigin, this.target, this.relativeParent.target), Le(this.relativeTarget, this.relativeTargetOrigin)))));
    }, o.prototype.getClosestProjectingParent = function() {
      if (!(!this.parent || He(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }, o.prototype.calcProjection = function() {
      var i, s = this.options, l = s.layout, c = s.layoutId;
      if (this.isTreeAnimating = Boolean(((i = this.parent) === null || i === void 0 ? void 0 : i.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !(!this.layout || !(l || c))) {
        var u = this.getLead();
        Le(this.layoutCorrected, this.layout.actual), Iu(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== u);
        var p = u.target;
        if (!!p) {
          this.projectionDelta || (this.projectionDelta = Dt(), this.projectionDeltaWithTransform = Dt());
          var f = this.treeScale.x, v = this.treeScale.y, h = this.projectionTransform;
          Ot(this.projectionDelta, this.layoutCorrected, p, this.latestValues), this.projectionTransform = Ja(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== v) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
        }
      }
    }, o.prototype.hide = function() {
      this.isVisible = !1;
    }, o.prototype.show = function() {
      this.isVisible = !0;
    }, o.prototype.scheduleRender = function(i) {
      var s, l, c;
      i === void 0 && (i = !0), (l = (s = this.options).scheduleRender) === null || l === void 0 || l.call(s), i && ((c = this.getStack()) === null || c === void 0 || c.scheduleRender()), this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }, o.prototype.setAnimationOrigin = function(i, s) {
      var l = this, c;
      s === void 0 && (s = !1);
      var u = this.snapshot, p = (u == null ? void 0 : u.latestValues) || {}, f = S({}, this.latestValues), v = Dt();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !s;
      var h = ee(), g = u == null ? void 0 : u.isShared, _ = (((c = this.getStack()) === null || c === void 0 ? void 0 : c.members.length) || 0) <= 1, y = Boolean(g && !_ && this.options.crossfade === !0 && !this.path.some(ad));
      this.animationProgress = 0, this.mixTargetDelta = function(x) {
        var b, P = x / 1e3;
        ti(v.x, i.x, P), ti(v.y, i.y, P), l.setTargetDelta(v), l.relativeTarget && l.relativeTargetOrigin && l.layout && ((b = l.relativeParent) === null || b === void 0 ? void 0 : b.layout) && (Mt(h, l.layout.actual, l.relativeParent.layout.actual), rd(l.relativeTarget, l.relativeTargetOrigin, h, P)), g && (l.animationValues = f, Nu(f, p, l.latestValues, P, y, _)), l.root.scheduleUpdateProjection(), l.scheduleRender(), l.animationProgress = P;
      }, this.mixTargetDelta(0);
    }, o.prototype.startAnimation = function(i) {
      var s = this, l, c;
      this.notifyListeners("animationStart"), (l = this.currentAnimation) === null || l === void 0 || l.stop(), this.resumingFrom && ((c = this.resumingFrom.currentAnimation) === null || c === void 0 || c.stop()), this.pendingAnimation && (St.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Te.update(function() {
        kt.hasAnimatedSinceResize = !0, s.currentAnimation = Lu(0, Qa, S(S({}, i), { onUpdate: function(u) {
          var p;
          s.mixTargetDelta(u), (p = i.onUpdate) === null || p === void 0 || p.call(i, u);
        }, onComplete: function() {
          var u;
          (u = i.onComplete) === null || u === void 0 || u.call(i), s.completeAnimation();
        } })), s.resumingFrom && (s.resumingFrom.currentAnimation = s.currentAnimation), s.pendingAnimation = void 0;
      });
    }, o.prototype.completeAnimation = function() {
      var i;
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0), (i = this.getStack()) === null || i === void 0 || i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }, o.prototype.finishAnimation = function() {
      var i;
      this.currentAnimation && ((i = this.mixTargetDelta) === null || i === void 0 || i.call(this, Qa), this.currentAnimation.stop()), this.completeAnimation();
    }, o.prototype.applyTransformsToTarget = function() {
      var i = this.getLead(), s = i.targetWithTransforms, l = i.target, c = i.layout, u = i.latestValues;
      !s || !l || !c || (Le(s, l), yt(s, u), Ot(this.projectionDeltaWithTransform, this.layoutCorrected, s, u));
    }, o.prototype.registerSharedNode = function(i, s) {
      var l, c, u;
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new ju());
      var p = this.sharedNodes.get(i);
      p.add(s), s.promote({
        transition: (l = s.options.initialPromotionConfig) === null || l === void 0 ? void 0 : l.transition,
        preserveFollowOpacity: (u = (c = s.options.initialPromotionConfig) === null || c === void 0 ? void 0 : c.shouldPreserveFollowOpacity) === null || u === void 0 ? void 0 : u.call(c, s)
      });
    }, o.prototype.isLead = function() {
      var i = this.getStack();
      return i ? i.lead === this : !0;
    }, o.prototype.getLead = function() {
      var i, s = this.options.layoutId;
      return s ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }, o.prototype.getPrevLead = function() {
      var i, s = this.options.layoutId;
      return s ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }, o.prototype.getStack = function() {
      var i = this.options.layoutId;
      if (i)
        return this.root.sharedNodes.get(i);
    }, o.prototype.promote = function(i) {
      var s = i === void 0 ? {} : i, l = s.needsReset, c = s.transition, u = s.preserveFollowOpacity, p = this.getStack();
      p && p.promote(this, u), l && (this.projectionDelta = void 0, this.needsReset = !0), c && this.setOptions({ transition: c });
    }, o.prototype.relegate = function() {
      var i = this.getStack();
      return i ? i.relegate(this) : !1;
    }, o.prototype.resetRotation = function() {
      var i = this.options.visualElement;
      if (!!i) {
        for (var s = !1, l = {}, c = 0; c < Tr.length; c++) {
          var u = Tr[c], p = "rotate" + u;
          !i.getStaticValue(p) || (s = !0, l[p] = i.getStaticValue(p), i.setStaticValue(p, 0));
        }
        if (!!s) {
          i == null || i.syncRender();
          for (var p in l)
            i.setStaticValue(p, l[p]);
          i.scheduleRender();
        }
      }
    }, o.prototype.getProjectionStyles = function(i) {
      var s, l, c, u, p, f;
      i === void 0 && (i = {});
      var v = {};
      if (!this.instance || this.isSVG)
        return v;
      if (this.isVisible)
        v.visibility = "";
      else
        return { visibility: "hidden" };
      var h = (s = this.options.visualElement) === null || s === void 0 ? void 0 : s.getProps().transformTemplate;
      if (this.needsReset)
        return this.needsReset = !1, v.opacity = "", v.pointerEvents = yn(i.pointerEvents) || "", v.transform = h ? h(this.latestValues, "") : "none", v;
      var g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        var _ = {};
        return this.options.layoutId && (_.opacity = (l = this.latestValues.opacity) !== null && l !== void 0 ? l : 1, _.pointerEvents = yn(i.pointerEvents) || ""), this.hasProjected && !He(this.latestValues) && (_.transform = h ? h({}, "") : "none", this.hasProjected = !1), _;
      }
      var y = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(), v.transform = Ja(this.projectionDeltaWithTransform, this.treeScale, y), h && (v.transform = h(y, v.transform));
      var x = this.projectionDelta, b = x.x, P = x.y;
      v.transformOrigin = "".concat(b.origin * 100, "% ").concat(P.origin * 100, "% 0"), g.animationValues ? v.opacity = g === this ? (u = (c = y.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : v.opacity = g === this ? (p = y.opacity) !== null && p !== void 0 ? p : "" : (f = y.opacityExit) !== null && f !== void 0 ? f : 0;
      for (var N in Ln)
        if (y[N] !== void 0) {
          var O = Ln[N], V = O.correct, A = O.applyTo, $ = V(y[N], g);
          if (A)
            for (var B = A.length, Y = 0; Y < B; Y++)
              v[A[Y]] = $;
          else
            v[N] = $;
        }
      return this.options.layoutId && (v.pointerEvents = g === this ? yn(i.pointerEvents) || "" : "none"), v;
    }, o.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    }, o.prototype.resetTree = function() {
      this.root.nodes.forEach(function(i) {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(ei), this.root.sharedNodes.clear();
    }, o;
  }();
}
function Gu(e) {
  e.updateLayout();
}
function Ku(e) {
  var t, n, r, a, o = (n = (t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) !== null && n !== void 0 ? n : e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
    var i = e.layout, s = i.actual, l = i.measured;
    e.options.animationType === "size" ? Ie(function(x) {
      var b = o.isShared ? o.measured[x] : o.layout[x], P = Be(b);
      b.min = s[x].min, b.max = b.min + P;
    }) : e.options.animationType === "position" && Ie(function(x) {
      var b = o.isShared ? o.measured[x] : o.layout[x], P = Be(s[x]);
      b.max = b.min + P;
    });
    var c = Dt();
    Ot(c, s, o.layout);
    var u = Dt();
    o.isShared ? Ot(u, e.applyTransform(l, !0), o.measured) : Ot(u, s, o.layout);
    var p = !So(c), f = !1;
    if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
      var v = e.relativeParent, h = v.snapshot, g = v.layout;
      if (h && g) {
        var _ = ee();
        Mt(_, o.layout, h.layout);
        var y = ee();
        Mt(y, s, g.actual), To(_, y) || (f = !0);
      }
    }
    e.notifyListeners("didUpdate", {
      layout: s,
      snapshot: o,
      delta: u,
      layoutDelta: c,
      hasLayoutChanged: p,
      hasRelativeTargetChanged: f
    });
  } else
    e.isLead() && ((a = (r = e.options).onExitComplete) === null || a === void 0 || a.call(r));
  e.options.transition = void 0;
}
function Xu(e) {
  e.clearSnapshot();
}
function ei(e) {
  e.clearMeasurements();
}
function Zu(e) {
  var t = e.options.visualElement;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notifyBeforeLayoutMeasure(), e.resetTransform();
}
function Ju(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function Qu(e) {
  e.resolveTargetDelta();
}
function ed(e) {
  e.calcProjection();
}
function td(e) {
  e.resetRotation();
}
function nd(e) {
  e.removeLeadSnapshot();
}
function ti(e, t, n) {
  e.translate = z(t.translate, 0, n), e.scale = z(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ni(e, t, n, r) {
  e.min = z(t.min, n.min, r), e.max = z(t.max, n.max, r);
}
function rd(e, t, n, r) {
  ni(e.x, t.x, n.x, r), ni(e.y, t.y, n.y, r);
}
function ad(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var id = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function od(e, t) {
  for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
    if (Boolean(e.path[r].instance)) {
      n = e.path[r];
      break;
    }
  var a = n && n !== e.root ? n.instance : document, o = a.querySelector('[data-projection-id="'.concat(t, '"]'));
  o && e.mount(o, !0);
}
function ri(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function ai(e) {
  ri(e.x), ri(e.y);
}
var sd = 1;
function ld() {
  return Zt(function() {
    if (kt.hasEverUpdated)
      return sd++;
  });
}
var Hr = Pt({}), wo = Pt({});
function cd(e, t, n, r) {
  var a, o = t.layoutId, i = t.layout, s = t.drag, l = t.dragConstraints, c = t.layoutScroll, u = Q(wo);
  !r || !n || (n == null ? void 0 : n.projection) || (n.projection = new r(e, n.getLatestValues(), (a = n.parent) === null || a === void 0 ? void 0 : a.projection), n.projection.setOptions({
    layoutId: o,
    layout: i,
    alwaysMeasureLayout: Boolean(s) || l && gt(l),
    visualElement: n,
    scheduleRender: function() {
      return n.scheduleRender();
    },
    animationType: typeof i == "string" ? i : "both",
    initialPromotionConfig: u,
    layoutScroll: c
  }));
}
var ud = function(e) {
  Oi(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.getSnapshotBeforeUpdate = function() {
    return this.updateProps(), null;
  }, t.prototype.componentDidUpdate = function() {
  }, t.prototype.updateProps = function() {
    var n = this.props, r = n.visualElement, a = n.props;
    r && r.setProps(a);
  }, t.prototype.render = function() {
    return this.props.children;
  }, t;
}(Yt.Component);
function dd(e) {
  var t = e.preloadedFeatures, n = e.createVisualElement, r = e.projectionNodeConstructor, a = e.useRender, o = e.useVisualState, i = e.Component;
  t && ql(t);
  function s(l, c) {
    var u = fd(l);
    l = S(S({}, l), { layoutId: u });
    var p = Q(Ir), f = null, v = tc(l), h = p.isStatic ? void 0 : ld(), g = o(l, p.isStatic);
    return !p.isStatic && Ct && (v.visualElement = Xl(i, g, S(S({}, p), l), n), cd(h, l, v.visualElement, r || Bt.projectionNodeConstructor), f = zl(l, v.visualElement, t)), he.createElement(
      ud,
      { visualElement: v.visualElement, props: S(S({}, p), l) },
      f,
      he.createElement(On.Provider, { value: v }, a(i, l, h, Zl(g, v.visualElement, c), g, p.isStatic, v.visualElement))
    );
  }
  return Xe(s);
}
function fd(e) {
  var t, n = e.layoutId, r = (t = Q(Hr)) === null || t === void 0 ? void 0 : t.id;
  return r && n !== void 0 ? r + "-" + n : n;
}
function vd(e) {
  function t(r, a) {
    return a === void 0 && (a = {}), dd(e(r, a));
  }
  if (typeof Proxy > "u")
    return t;
  var n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    get: function(r, a) {
      return n.has(a) || n.set(a, t(a)), n.get(a);
    }
  });
}
var pd = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "tspan",
  "use",
  "view"
];
function Yr(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(pd.indexOf(e) > -1 || /[A-Z]/.test(e));
}
function Lo(e, t) {
  var n = t.layout, r = t.layoutId;
  return tn(e) || Po(e) || (n || r !== void 0) && (!!Ln[e] || e === "opacity");
}
var hd = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function md(e, t, n, r) {
  var a = e.transform, o = e.transformKeys, i = t.enableHardwareAcceleration, s = i === void 0 ? !0 : i, l = t.allowTransformNone, c = l === void 0 ? !0 : l, u = "";
  o.sort(qu);
  for (var p = !1, f = o.length, v = 0; v < f; v++) {
    var h = o[v];
    u += "".concat(hd[h] || h, "(").concat(a[h], ") "), h === "z" && (p = !0);
  }
  return !p && s ? u += "translateZ(0)" : u = u.trim(), r ? u = r(a, n ? "" : u) : c && n && (u = "none"), u;
}
function gd(e) {
  var t = e.originX, n = t === void 0 ? "50%" : t, r = e.originY, a = r === void 0 ? "50%" : r, o = e.originZ, i = o === void 0 ? 0 : o;
  return "".concat(n, " ").concat(a, " ").concat(i);
}
function Eo(e) {
  return e.startsWith("--");
}
var _d = function(e, t) {
  return t && typeof e == "number" ? t.transform(e) : e;
};
function Gr(e, t, n, r) {
  var a, o = e.style, i = e.vars, s = e.transform, l = e.transformKeys, c = e.transformOrigin;
  l.length = 0;
  var u = !1, p = !1, f = !0;
  for (var v in t) {
    var h = t[v];
    if (Eo(v)) {
      i[v] = h;
      continue;
    }
    var g = mo[v], _ = _d(h, g);
    if (tn(v)) {
      if (u = !0, s[v] = _, l.push(v), !f)
        continue;
      h !== ((a = g.default) !== null && a !== void 0 ? a : 0) && (f = !1);
    } else
      Po(v) ? (c[v] = _, p = !0) : o[v] = _;
  }
  u ? o.transform = md(e, n, f, r) : r ? o.transform = r({}, "") : !t.transform && o.transform && (o.transform = "none"), p && (o.transformOrigin = gd(c));
}
var Kr = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
function No(e, t, n) {
  for (var r in t)
    !je(t[r]) && !Lo(r, n) && (e[r] = t[r]);
}
function yd(e, t, n) {
  var r = e.transformTemplate;
  return jt(function() {
    var a = Kr();
    Gr(a, t, { enableHardwareAcceleration: !n }, r);
    var o = a.vars, i = a.style;
    return S(S({}, o), i);
  }, [t]);
}
function bd(e, t, n) {
  var r = e.style || {}, a = {};
  return No(a, r, e), Object.assign(a, yd(e, t, n)), e.transformValues && (a = e.transformValues(a)), a;
}
function xd(e, t, n) {
  var r = {}, a = bd(e, t, n);
  return Boolean(e.drag) && e.dragListener !== !1 && (r.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = e.drag === !0 ? "none" : "pan-".concat(e.drag === "x" ? "y" : "x")), r.style = a, r;
}
var Sd = /* @__PURE__ */ new Set([
  "initial",
  "animate",
  "exit",
  "style",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "layout",
  "layoutId",
  "layoutDependency",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "drag",
  "dragControls",
  "dragListener",
  "dragConstraints",
  "dragDirectionLock",
  "dragSnapToOrigin",
  "_dragX",
  "_dragY",
  "dragElastic",
  "dragMomentum",
  "dragPropagation",
  "dragTransition",
  "whileDrag",
  "onPan",
  "onPanStart",
  "onPanEnd",
  "onPanSessionStart",
  "onTap",
  "onTapStart",
  "onTapCancel",
  "onHoverStart",
  "onHoverEnd",
  "whileFocus",
  "whileTap",
  "whileHover",
  "whileInView",
  "onViewportEnter",
  "onViewportLeave",
  "viewport",
  "layoutScroll"
]);
function En(e) {
  return Sd.has(e);
}
var Ro = function(e) {
  return !En(e);
};
function Td(e) {
  !e || (Ro = function(t) {
    return t.startsWith("on") ? !En(t) : e(t);
  });
}
try {
  Td(require("@emotion/is-prop-valid").default);
} catch {
}
function Pd(e, t, n) {
  var r = {};
  for (var a in e)
    (Ro(a) || n === !0 && En(a) || !t && !En(a) || e.draggable && a.startsWith("onDrag")) && (r[a] = e[a]);
  return r;
}
function ii(e, t, n) {
  return typeof e == "string" ? e : I.transform(t + n * e);
}
function Cd(e, t, n) {
  var r = ii(t, e.x, e.width), a = ii(n, e.y, e.height);
  return "".concat(r, " ").concat(a);
}
var wd = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Ld = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Ed(e, t, n, r, a) {
  n === void 0 && (n = 1), r === void 0 && (r = 0), a === void 0 && (a = !0), e.pathLength = 1;
  var o = a ? wd : Ld;
  e[o.offset] = I.transform(-r);
  var i = I.transform(t), s = I.transform(n);
  e[o.array] = "".concat(i, " ").concat(s);
}
function Xr(e, t, n, r) {
  var a = t.attrX, o = t.attrY, i = t.originX, s = t.originY, l = t.pathLength, c = t.pathSpacing, u = c === void 0 ? 1 : c, p = t.pathOffset, f = p === void 0 ? 0 : p, v = ge(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  Gr(e, v, n, r), e.attrs = e.style, e.style = {};
  var h = e.attrs, g = e.style, _ = e.dimensions;
  h.transform && (_ && (g.transform = h.transform), delete h.transform), _ && (i !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = Cd(_, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), a !== void 0 && (h.x = a), o !== void 0 && (h.y = o), l !== void 0 && Ed(h, l, u, f, !1);
}
var Vo = function() {
  return S(S({}, Kr()), { attrs: {} });
};
function Nd(e, t) {
  var n = jt(function() {
    var a = Vo();
    return Xr(a, t, { enableHardwareAcceleration: !1 }, e.transformTemplate), S(S({}, a.attrs), { style: S({}, a.style) });
  }, [t]);
  if (e.style) {
    var r = {};
    No(r, e.style, e), n.style = S(S({}, r), n.style);
  }
  return n;
}
function Rd(e) {
  e === void 0 && (e = !1);
  var t = function(n, r, a, o, i, s) {
    var l = i.latestValues, c = Yr(n) ? Nd : xd, u = c(r, l, s), p = Pd(r, typeof n == "string", e), f = S(S(S({}, p), u), { ref: o });
    return a && (f["data-projection-id"] = a), Ls(n, f);
  };
  return t;
}
var Vd = /([a-z])([A-Z])/g, Id = "$1-$2", Io = function(e) {
  return e.replace(Vd, Id).toLowerCase();
};
function Ao(e, t, n, r) {
  var a = t.style, o = t.vars;
  Object.assign(e.style, a, r && r.getProjectionStyles(n));
  for (var i in o)
    e.style.setProperty(i, o[i]);
}
var $o = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength"
]);
function Oo(e, t, n, r) {
  Ao(e, t, void 0, r);
  for (var a in t.attrs)
    e.setAttribute($o.has(a) ? a : Io(a), t.attrs[a]);
}
function Zr(e) {
  var t = e.style, n = {};
  for (var r in t)
    (je(t[r]) || Lo(r, e)) && (n[r] = t[r]);
  return n;
}
function Mo(e) {
  var t = Zr(e);
  for (var n in e)
    if (je(e[n])) {
      var r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      t[r] = e[n];
    }
  return t;
}
function Jr(e) {
  return typeof e == "object" && typeof e.start == "function";
}
function oi(e, t, n, r) {
  var a = e.scrapeMotionValuesFromProps, o = e.createRenderState, i = e.onMount, s = {
    latestValues: Ad(t, n, r, a),
    renderState: o()
  };
  return i && (s.mount = function(l) {
    return i(t, l, s);
  }), s;
}
var Do = function(e) {
  return function(t, n) {
    var r = Q(On), a = Q(Xt);
    return n ? oi(e, t, r, a) : Zt(function() {
      return oi(e, t, r, a);
    });
  };
};
function Ad(e, t, n, r) {
  var a = {}, o = (n == null ? void 0 : n.initial) === !1, i = r(e);
  for (var s in i)
    a[s] = yn(i[s]);
  var l = e.initial, c = e.animate, u = Dn(e), p = Fi(e);
  t && p && !u && e.inherit !== !1 && (l != null || (l = t.initial), c != null || (c = t.animate));
  var f = o || l === !1, v = f ? c : l;
  if (v && typeof v != "boolean" && !Jr(v)) {
    var h = Array.isArray(v) ? v : [v];
    h.forEach(function(g) {
      var _ = Bi(e, g);
      if (!!_) {
        var y = _.transitionEnd;
        _.transition;
        var x = ge(_, ["transitionEnd", "transition"]);
        for (var b in x) {
          var P = x[b];
          if (Array.isArray(P)) {
            var N = f ? P.length - 1 : 0;
            P = P[N];
          }
          P !== null && (a[b] = P);
        }
        for (var b in y)
          a[b] = y[b];
      }
    });
  }
  return a;
}
var $d = {
  useVisualState: Do({
    scrapeMotionValuesFromProps: Mo,
    createRenderState: Vo,
    onMount: function(e, t, n) {
      var r = n.renderState, a = n.latestValues;
      try {
        r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        r.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      Xr(r, a, { enableHardwareAcceleration: !1 }, e.transformTemplate), Oo(t, r);
    }
  })
}, Od = {
  useVisualState: Do({
    scrapeMotionValuesFromProps: Zr,
    createRenderState: Kr
  })
};
function Md(e, t, n, r, a) {
  var o = t.forwardMotionProps, i = o === void 0 ? !1 : o, s = Yr(e) ? $d : Od;
  return S(S({}, s), { preloadedFeatures: n, useRender: Rd(i), createVisualElement: r, projectionNodeConstructor: a, Component: e });
}
var F;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(F || (F = {}));
function Qr(e, t, n, r) {
  return e.addEventListener(t, n, r), function() {
    return e.removeEventListener(t, n, r);
  };
}
function Pr(e, t, n, r) {
  G(function() {
    var a = e.current;
    if (n && a)
      return Qr(a, t, n, r);
  }, [e, t, n, r]);
}
function Dd(e) {
  var t = e.whileFocus, n = e.visualElement, r = function() {
    var o;
    (o = n.animationState) === null || o === void 0 || o.setActive(F.Focus, !0);
  }, a = function() {
    var o;
    (o = n.animationState) === null || o === void 0 || o.setActive(F.Focus, !1);
  };
  Pr(n, "focus", t ? r : void 0), Pr(n, "blur", t ? a : void 0);
}
function ko(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function jo(e) {
  var t = !!e.touches;
  return t;
}
function kd(e) {
  return function(t) {
    var n = t instanceof MouseEvent, r = !n || n && t.button === 0;
    r && e(t);
  };
}
var jd = { pageX: 0, pageY: 0 };
function Bd(e, t) {
  t === void 0 && (t = "page");
  var n = e.touches[0] || e.changedTouches[0], r = n || jd;
  return {
    x: r[t + "X"],
    y: r[t + "Y"]
  };
}
function Fd(e, t) {
  return t === void 0 && (t = "page"), {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function ea(e, t) {
  return t === void 0 && (t = "page"), {
    point: jo(e) ? Bd(e, t) : Fd(e, t)
  };
}
var Bo = function(e, t) {
  t === void 0 && (t = !1);
  var n = function(r) {
    return e(r, ea(r));
  };
  return t ? kd(n) : n;
}, Wd = function() {
  return Ct && window.onpointerdown === null;
}, qd = function() {
  return Ct && window.ontouchstart === null;
}, Ud = function() {
  return Ct && window.onmousedown === null;
}, zd = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, Hd = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function Fo(e) {
  return Wd() ? e : qd() ? Hd[e] : Ud() ? zd[e] : e;
}
function xt(e, t, n, r) {
  return Qr(e, Fo(t), Bo(n, t === "pointerdown"), r);
}
function Nn(e, t, n, r) {
  return Pr(e, Fo(t), n && Bo(n, t === "pointerdown"), r);
}
function Wo(e) {
  var t = null;
  return function() {
    var n = function() {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
var si = Wo("dragHorizontal"), li = Wo("dragVertical");
function qo(e) {
  var t = !1;
  if (e === "y")
    t = li();
  else if (e === "x")
    t = si();
  else {
    var n = si(), r = li();
    n && r ? t = function() {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function Uo() {
  var e = qo(!0);
  return e ? (e(), !1) : !0;
}
function ci(e, t, n) {
  return function(r, a) {
    var o;
    !ko(r) || Uo() || ((o = e.animationState) === null || o === void 0 || o.setActive(F.Hover, t), n == null || n(r, a));
  };
}
function Yd(e) {
  var t = e.onHoverStart, n = e.onHoverEnd, r = e.whileHover, a = e.visualElement;
  Nn(a, "pointerenter", t || r ? ci(a, !0, t) : void 0), Nn(a, "pointerleave", n || r ? ci(a, !1, n) : void 0);
}
var zo = function(e, t) {
  return t ? e === t ? !0 : zo(e, t.parentElement) : !1;
};
function ta(e) {
  return G(function() {
    return function() {
      return e();
    };
  }, []);
}
function Gd(e) {
  var t = e.onTap, n = e.onTapStart, r = e.onTapCancel, a = e.whileTap, o = e.visualElement, i = t || n || r || a, s = ae(!1), l = ae(null);
  function c() {
    var h;
    (h = l.current) === null || h === void 0 || h.call(l), l.current = null;
  }
  function u() {
    var h;
    return c(), s.current = !1, (h = o.animationState) === null || h === void 0 || h.setActive(F.Tap, !1), !Uo();
  }
  function p(h, g) {
    !u() || (zo(o.getInstance(), h.target) ? t == null || t(h, g) : r == null || r(h, g));
  }
  function f(h, g) {
    !u() || r == null || r(h, g);
  }
  function v(h, g) {
    var _;
    c(), !s.current && (s.current = !0, l.current = jn(xt(window, "pointerup", p), xt(window, "pointercancel", f)), (_ = o.animationState) === null || _ === void 0 || _.setActive(F.Tap, !0), n == null || n(h, g));
  }
  Nn(o, "pointerdown", i ? v : void 0), ta(c);
}
var ui = /* @__PURE__ */ new Set();
function Kd(e, t, n) {
  e || ui.has(t) || (console.warn(t), n && console.warn(n), ui.add(t));
}
var Cr = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), Xd = function(e) {
  var t;
  (t = Cr.get(e.target)) === null || t === void 0 || t(e);
}, Zd = function(e) {
  e.forEach(Xd);
};
function Jd(e) {
  var t = e.root, n = ge(e, ["root"]), r = t || document;
  rr.has(r) || rr.set(r, {});
  var a = rr.get(r), o = JSON.stringify(n);
  return a[o] || (a[o] = new IntersectionObserver(Zd, S({ root: t }, n))), a[o];
}
function Qd(e, t, n) {
  var r = Jd(t);
  return Cr.set(e, n), r.observe(e), function() {
    Cr.delete(e), r.unobserve(e);
  };
}
function ef(e) {
  var t = e.visualElement, n = e.whileInView, r = e.onViewportEnter, a = e.onViewportLeave, o = e.viewport, i = o === void 0 ? {} : o, s = ae({
    hasEnteredView: !1,
    isInView: !1
  }), l = Boolean(n || r || a);
  i.once && s.current.hasEnteredView && (l = !1);
  var c = typeof IntersectionObserver > "u" ? rf : nf;
  c(l, s.current, t, i);
}
var tf = {
  some: 0,
  all: 1
};
function nf(e, t, n, r) {
  var a = r.root, o = r.margin, i = r.amount, s = i === void 0 ? "some" : i, l = r.once;
  G(function() {
    if (!!e) {
      var c = {
        root: a == null ? void 0 : a.current,
        rootMargin: o,
        threshold: typeof s == "number" ? s : tf[s]
      }, u = function(p) {
        var f, v = p.isIntersecting;
        if (t.isInView !== v && (t.isInView = v, !(l && !v && t.hasEnteredView))) {
          v && (t.hasEnteredView = !0), (f = n.animationState) === null || f === void 0 || f.setActive(F.InView, v);
          var h = n.getProps(), g = v ? h.onViewportEnter : h.onViewportLeave;
          g == null || g(p);
        }
      };
      return Qd(n.getInstance(), c, u);
    }
  }, [e, a, o, s]);
}
function rf(e, t, n, r) {
  var a = r.fallback, o = a === void 0 ? !0 : a;
  G(function() {
    !e || !o || ($n.env.NODE_ENV !== "production" && Kd(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(function() {
      var i;
      t.hasEnteredView = !0;
      var s = n.getProps().onViewportEnter;
      s == null || s(null), (i = n.animationState) === null || i === void 0 || i.setActive(F.InView, !0);
    }));
  }, [e]);
}
var Ke = function(e) {
  return function(t) {
    return e(t), null;
  };
}, af = {
  inView: Ke(ef),
  tap: Ke(Gd),
  focus: Ke(Dd),
  hover: Ke(Yd)
}, of = 0, sf = function() {
  return of++;
}, Ho = function() {
  return Zt(sf);
};
function Yo() {
  var e = Q(Xt);
  if (e === null)
    return [!0, null];
  var t = e.isPresent, n = e.onExitComplete, r = e.register, a = Ho();
  G(function() {
    return r(a);
  }, []);
  var o = function() {
    return n == null ? void 0 : n(a);
  };
  return !t && n ? [!1, o] : [!0];
}
function Go(e, t) {
  if (!Array.isArray(t))
    return !1;
  var n = t.length;
  if (n !== e.length)
    return !1;
  for (var r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
var lf = function(e) {
  return /^\-?\d*\.?\d+$/.test(e);
}, cf = function(e) {
  return /^0[^.\s]+$/.test(e);
}, Ko = function(e) {
  return function(t) {
    return t.test(e);
  };
}, uf = {
  test: function(e) {
    return e === "auto";
  },
  parse: function(e) {
    return e;
  }
}, Xo = [st, I, $e, ze, _c, gc, uf], Lt = function(e) {
  return Xo.find(Ko(e));
}, df = Se(Se([], H(Xo), !1), [re, ke], !1), ff = function(e) {
  return df.find(Ko(e));
};
function vf(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Tt(n));
}
function pf(e, t) {
  var n = Mn(e, t), r = n ? e.makeTargetAnimatable(n, !1) : {}, a = r.transitionEnd, o = a === void 0 ? {} : a;
  r.transition;
  var i = ge(r, ["transitionEnd", "transition"]);
  i = S(S({}, i), o);
  for (var s in i) {
    var l = go(i[s]);
    vf(e, s, l);
  }
}
function hf(e, t, n) {
  var r, a, o, i, s = Object.keys(t).filter(function(v) {
    return !e.hasValue(v);
  }), l = s.length;
  if (!!l)
    for (var c = 0; c < l; c++) {
      var u = s[c], p = t[u], f = null;
      Array.isArray(p) && (f = p[0]), f === null && (f = (a = (r = n[u]) !== null && r !== void 0 ? r : e.readValue(u)) !== null && a !== void 0 ? a : t[u]), f != null && (typeof f == "string" && (lf(f) || cf(f)) ? f = parseFloat(f) : !ff(f) && ke.test(p) && (f = qr(u, p)), e.addValue(u, Tt(f)), (o = (i = n)[u]) !== null && o !== void 0 || (i[u] = f), e.setBaseTarget(u, f));
    }
}
function mf(e, t) {
  if (!!t) {
    var n = t[e] || t.default || t;
    return n.from;
  }
}
function gf(e, t, n) {
  var r, a, o = {};
  for (var i in e)
    o[i] = (r = mf(i, t)) !== null && r !== void 0 ? r : (a = n.getValue(i)) === null || a === void 0 ? void 0 : a.get();
  return o;
}
function _f(e, t, n) {
  n === void 0 && (n = {}), e.notifyAnimationStart(t);
  var r;
  if (Array.isArray(t)) {
    var a = t.map(function(i) {
      return wr(e, i, n);
    });
    r = Promise.all(a);
  } else if (typeof t == "string")
    r = wr(e, t, n);
  else {
    var o = typeof t == "function" ? Mn(e, t, n.custom) : t;
    r = Zo(e, o, n);
  }
  return r.then(function() {
    return e.notifyAnimationComplete(t);
  });
}
function wr(e, t, n) {
  var r;
  n === void 0 && (n = {});
  var a = Mn(e, t, n.custom), o = (a || {}).transition, i = o === void 0 ? e.getDefaultTransition() || {} : o;
  n.transitionOverride && (i = n.transitionOverride);
  var s = a ? function() {
    return Zo(e, a, n);
  } : function() {
    return Promise.resolve();
  }, l = !((r = e.variantChildren) === null || r === void 0) && r.size ? function(v) {
    v === void 0 && (v = 0);
    var h = i.delayChildren, g = h === void 0 ? 0 : h, _ = i.staggerChildren, y = i.staggerDirection;
    return yf(e, t, g + v, _, y, n);
  } : function() {
    return Promise.resolve();
  }, c = i.when;
  if (c) {
    var u = H(c === "beforeChildren" ? [s, l] : [l, s], 2), p = u[0], f = u[1];
    return p().then(f);
  } else
    return Promise.all([s(), l(n.delay)]);
}
function Zo(e, t, n) {
  var r, a = n === void 0 ? {} : n, o = a.delay, i = o === void 0 ? 0 : o, s = a.transitionOverride, l = a.type, c = e.makeTargetAnimatable(t), u = c.transition, p = u === void 0 ? e.getDefaultTransition() : u, f = c.transitionEnd, v = ge(c, ["transition", "transitionEnd"]);
  s && (p = s);
  var h = [], g = l && ((r = e.animationState) === null || r === void 0 ? void 0 : r.getState()[l]);
  for (var _ in v) {
    var y = e.getValue(_), x = v[_];
    if (!(!y || x === void 0 || g && xf(g, _))) {
      var b = S({ delay: i }, p);
      e.shouldReduceMotion && tn(_) && (b = S(S({}, b), { type: !1, delay: 0 }));
      var P = zr(_, y, x, b);
      h.push(P);
    }
  }
  return Promise.all(h).then(function() {
    f && pf(e, f);
  });
}
function yf(e, t, n, r, a, o) {
  n === void 0 && (n = 0), r === void 0 && (r = 0), a === void 0 && (a = 1);
  var i = [], s = (e.variantChildren.size - 1) * r, l = a === 1 ? function(c) {
    return c === void 0 && (c = 0), c * r;
  } : function(c) {
    return c === void 0 && (c = 0), s - c * r;
  };
  return Array.from(e.variantChildren).sort(bf).forEach(function(c, u) {
    i.push(wr(c, t, S(S({}, o), { delay: n + l(u) })).then(function() {
      return c.notifyAnimationComplete(t);
    }));
  }), Promise.all(i);
}
function bf(e, t) {
  return e.sortNodePosition(t);
}
function xf(e, t) {
  var n = e.protectedKeys, r = e.needsAnimating, a = n.hasOwnProperty(t) && r[t] !== !0;
  return r[t] = !1, a;
}
var na = [
  F.Animate,
  F.InView,
  F.Focus,
  F.Hover,
  F.Tap,
  F.Drag,
  F.Exit
], Sf = Se([], H(na), !1).reverse(), Tf = na.length;
function Pf(e) {
  return function(t) {
    return Promise.all(t.map(function(n) {
      var r = n.animation, a = n.options;
      return _f(e, r, a);
    }));
  };
}
function Cf(e) {
  var t = Pf(e), n = Lf(), r = {}, a = !0, o = function(u, p) {
    var f = Mn(e, p);
    if (f) {
      f.transition;
      var v = f.transitionEnd, h = ge(f, ["transition", "transitionEnd"]);
      u = S(S(S({}, u), h), v);
    }
    return u;
  };
  function i(u) {
    return r[u] !== void 0;
  }
  function s(u) {
    t = u(e);
  }
  function l(u, p) {
    for (var f, v = e.getProps(), h = e.getVariantContext(!0) || {}, g = [], _ = /* @__PURE__ */ new Set(), y = {}, x = 1 / 0, b = function(V) {
      var A = Sf[V], $ = n[A], B = (f = v[A]) !== null && f !== void 0 ? f : h[A], Y = xe(B), ie = A === p ? $.isActive : null;
      ie === !1 && (x = V);
      var Z = B === h[A] && B !== v[A] && Y;
      if (Z && a && e.manuallyAnimateOnMount && (Z = !1), $.protectedKeys = S({}, y), !$.isActive && ie === null || !B && !$.prevProp || Jr(B) || typeof B == "boolean")
        return "continue";
      var oe = wf($.prevProp, B), se = oe || A === p && $.isActive && !Z && Y || V > x && Y, U = Array.isArray(B) ? B : [B], _e = U.reduce(o, {});
      ie === !1 && (_e = {});
      var de = $.prevResolvedValues, ye = de === void 0 ? {} : de, lt = S(S({}, ye), _e), fe = function(R) {
        se = !0, _.delete(R), $.needsAnimating[R] = !0;
      };
      for (var X in lt) {
        var k = _e[X], w = ye[X];
        y.hasOwnProperty(X) || (k !== w ? Ut(k) && Ut(w) ? !Go(k, w) || oe ? fe(X) : $.protectedKeys[X] = !0 : k !== void 0 ? fe(X) : _.add(X) : k !== void 0 && _.has(X) ? fe(X) : $.protectedKeys[X] = !0);
      }
      $.prevProp = B, $.prevResolvedValues = _e, $.isActive && (y = S(S({}, y), _e)), a && e.blockInitialAnimation && (se = !1), se && !Z && g.push.apply(g, Se([], H(U.map(function(R) {
        return {
          animation: R,
          options: S({ type: A }, u)
        };
      })), !1));
    }, P = 0; P < Tf; P++)
      b(P);
    if (r = S({}, y), _.size) {
      var N = {};
      _.forEach(function(V) {
        var A = e.getBaseTarget(V);
        A !== void 0 && (N[V] = A);
      }), g.push({ animation: N });
    }
    var O = Boolean(g.length);
    return a && v.initial === !1 && !e.manuallyAnimateOnMount && (O = !1), a = !1, O ? t(g) : Promise.resolve();
  }
  function c(u, p, f) {
    var v;
    if (n[u].isActive === p)
      return Promise.resolve();
    (v = e.variantChildren) === null || v === void 0 || v.forEach(function(_) {
      var y;
      return (y = _.animationState) === null || y === void 0 ? void 0 : y.setActive(u, p);
    }), n[u].isActive = p;
    var h = l(f, u);
    for (var g in n)
      n[g].protectedKeys = {};
    return h;
  }
  return {
    isAnimated: i,
    animateChanges: l,
    setActive: c,
    setAnimateFunction: s,
    getState: function() {
      return n;
    }
  };
}
function wf(e, t) {
  return typeof t == "string" ? t !== e : ji(t) ? !Go(t, e) : !1;
}
function Qe(e) {
  return e === void 0 && (e = !1), {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Lf() {
  var e;
  return e = {}, e[F.Animate] = Qe(!0), e[F.InView] = Qe(), e[F.Hover] = Qe(), e[F.Tap] = Qe(), e[F.Drag] = Qe(), e[F.Focus] = Qe(), e[F.Exit] = Qe(), e;
}
var Ef = {
  animation: Ke(function(e) {
    var t = e.visualElement, n = e.animate;
    t.animationState || (t.animationState = Cf(t)), Jr(n) && G(function() {
      return n.subscribe(t);
    }, [n]);
  }),
  exit: Ke(function(e) {
    var t = e.custom, n = e.visualElement, r = H(Yo(), 2), a = r[0], o = r[1], i = Q(Xt);
    G(function() {
      var s, l;
      n.isPresent = a;
      var c = (s = n.animationState) === null || s === void 0 ? void 0 : s.setActive(F.Exit, !a, { custom: (l = i == null ? void 0 : i.custom) !== null && l !== void 0 ? l : t });
      !a && (c == null || c.then(o));
    }, [a]);
  })
}, Jo = function() {
  function e(t, n, r) {
    var a = this, o = r === void 0 ? {} : r, i = o.transformPagePoint;
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
      if (!!(a.lastMoveEvent && a.lastMoveEventInfo)) {
        var f = ir(a.lastMoveEventInfo, a.history), v = a.startEvent !== null, h = uo(f.offset, { x: 0, y: 0 }) >= 3;
        if (!(!v && !h)) {
          var g = f.point, _ = xn().timestamp;
          a.history.push(S(S({}, g), { timestamp: _ }));
          var y = a.handlers, x = y.onStart, b = y.onMove;
          v || (x && x(a.lastMoveEvent, f), a.startEvent = a.lastMoveEvent), b && b(a.lastMoveEvent, f);
        }
      }
    }, this.handlePointerMove = function(f, v) {
      if (a.lastMoveEvent = f, a.lastMoveEventInfo = ar(v, a.transformPagePoint), ko(f) && f.buttons === 0) {
        a.handlePointerUp(f, v);
        return;
      }
      Te.update(a.updatePoint, !0);
    }, this.handlePointerUp = function(f, v) {
      a.end();
      var h = a.handlers, g = h.onEnd, _ = h.onSessionEnd, y = ir(ar(v, a.transformPagePoint), a.history);
      a.startEvent && g && g(f, y), _ && _(f, y);
    }, !(jo(t) && t.touches.length > 1)) {
      this.handlers = n, this.transformPagePoint = i;
      var s = ea(t), l = ar(s, this.transformPagePoint), c = l.point, u = xn().timestamp;
      this.history = [S(S({}, c), { timestamp: u })];
      var p = n.onSessionStart;
      p && p(t, ir(l, this.history)), this.removeListeners = jn(xt(window, "pointermove", this.handlePointerMove), xt(window, "pointerup", this.handlePointerUp), xt(window, "pointercancel", this.handlePointerUp));
    }
  }
  return e.prototype.updateHandlers = function(t) {
    this.handlers = t;
  }, e.prototype.end = function() {
    this.removeListeners && this.removeListeners(), St.update(this.updatePoint);
  }, e;
}();
function ar(e, t) {
  return t ? { point: t(e.point) } : e;
}
function di(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ir(e, t) {
  var n = e.point;
  return {
    point: n,
    delta: di(n, Qo(t)),
    offset: di(n, Nf(t)),
    velocity: Rf(t, 0.1)
  };
}
function Nf(e) {
  return e[0];
}
function Qo(e) {
  return e[e.length - 1];
}
function Rf(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  for (var n = e.length - 1, r = null, a = Qo(e); n >= 0 && (r = e[n], !(a.timestamp - r.timestamp > Cn(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  var o = (a.timestamp - r.timestamp) / 1e3;
  if (o === 0)
    return { x: 0, y: 0 };
  var i = {
    x: (a.x - r.x) / o,
    y: (a.y - r.y) / o
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function Vf(e, t, n) {
  var r = t.min, a = t.max;
  return r !== void 0 && e < r ? e = n ? z(r, e, n.min) : Math.max(e, r) : a !== void 0 && e > a && (e = n ? z(a, e, n.max) : Math.min(e, a)), e;
}
function fi(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function If(e, t) {
  var n = t.top, r = t.left, a = t.bottom, o = t.right;
  return {
    x: fi(e.x, r, o),
    y: fi(e.y, n, a)
  };
}
function vi(e, t) {
  var n, r = t.min - e.min, a = t.max - e.max;
  return t.max - t.min < e.max - e.min && (n = H([a, r], 2), r = n[0], a = n[1]), { min: r, max: a };
}
function Af(e, t) {
  return {
    x: vi(e.x, t.x),
    y: vi(e.y, t.y)
  };
}
function $f(e, t) {
  var n = 0.5, r = Be(e), a = Be(t);
  return a > r ? n = Wt(t.min, t.max - r, e.min) : r > a && (n = Wt(e.min, e.max - a, t.min)), Sn(0, 1, n);
}
function Of(e, t) {
  var n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Lr = 0.35;
function Mf(e) {
  return e === void 0 && (e = Lr), e === !1 ? e = 0 : e === !0 && (e = Lr), {
    x: pi(e, "left", "right"),
    y: pi(e, "top", "bottom")
  };
}
function pi(e, t, n) {
  return {
    min: hi(e, t),
    max: hi(e, n)
  };
}
function hi(e, t) {
  var n;
  return typeof e == "number" ? e : (n = e[t]) !== null && n !== void 0 ? n : 0;
}
function es(e) {
  var t = e.top, n = e.left, r = e.right, a = e.bottom;
  return {
    x: { min: n, max: r },
    y: { min: t, max: a }
  };
}
function Df(e) {
  var t = e.x, n = e.y;
  return { top: n.min, right: t.max, bottom: n.max, left: t.min };
}
function kf(e, t) {
  if (!t)
    return e;
  var n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function ts(e, t) {
  return es(kf(e.getBoundingClientRect(), t));
}
function jf(e, t, n) {
  var r = ts(e, n), a = t.scroll;
  return a && (_t(r.x, a.x), _t(r.y, a.y)), r;
}
var Bf = /* @__PURE__ */ new WeakMap(), Ff = function() {
  function e(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ee(), this.visualElement = t;
  }
  return e.prototype.start = function(t, n) {
    var r = this, a = n === void 0 ? {} : n, o = a.snapToCursor, i = o === void 0 ? !1 : o;
    if (this.visualElement.isPresent !== !1) {
      var s = function(p) {
        r.stopAnimation(), i && r.snapToCursor(ea(p, "page").point);
      }, l = function(p, f) {
        var v, h = r.getProps(), g = h.drag, _ = h.dragPropagation, y = h.onDragStart;
        g && !_ && (r.openGlobalLock && r.openGlobalLock(), r.openGlobalLock = qo(g), !r.openGlobalLock) || (r.isDragging = !0, r.currentDirection = null, r.resolveConstraints(), r.visualElement.projection && (r.visualElement.projection.isAnimationBlocked = !0, r.visualElement.projection.target = void 0), Ie(function(x) {
          var b, P, N = r.getAxisMotionValue(x).get() || 0;
          if ($e.test(N)) {
            var O = (P = (b = r.visualElement.projection) === null || b === void 0 ? void 0 : b.layout) === null || P === void 0 ? void 0 : P.actual[x];
            if (O) {
              var V = Be(O);
              N = V * (parseFloat(N) / 100);
            }
          }
          r.originPoint[x] = N;
        }), y == null || y(p, f), (v = r.visualElement.animationState) === null || v === void 0 || v.setActive(F.Drag, !0));
      }, c = function(p, f) {
        var v = r.getProps(), h = v.dragPropagation, g = v.dragDirectionLock, _ = v.onDirectionLock, y = v.onDrag;
        if (!(!h && !r.openGlobalLock)) {
          var x = f.offset;
          if (g && r.currentDirection === null) {
            r.currentDirection = Wf(x), r.currentDirection !== null && (_ == null || _(r.currentDirection));
            return;
          }
          r.updateAxis("x", f.point, x), r.updateAxis("y", f.point, x), r.visualElement.syncRender(), y == null || y(p, f);
        }
      }, u = function(p, f) {
        return r.stop(p, f);
      };
      this.panSession = new Jo(t, {
        onSessionStart: s,
        onStart: l,
        onMove: c,
        onSessionEnd: u
      }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
    }
  }, e.prototype.stop = function(t, n) {
    var r = this.isDragging;
    if (this.cancel(), !!r) {
      var a = n.velocity;
      this.startAnimation(a);
      var o = this.getProps().onDragEnd;
      o == null || o(t, n);
    }
  }, e.prototype.cancel = function() {
    var t, n;
    this.isDragging = !1, this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !1), (t = this.panSession) === null || t === void 0 || t.end(), this.panSession = void 0;
    var r = this.getProps().dragPropagation;
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), (n = this.visualElement.animationState) === null || n === void 0 || n.setActive(F.Drag, !1);
  }, e.prototype.updateAxis = function(t, n, r) {
    var a = this.getProps().drag;
    if (!(!r || !cn(t, a, this.currentDirection))) {
      var o = this.getAxisMotionValue(t), i = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (i = Vf(i, this.constraints[t], this.elastic[t])), o.set(i);
    }
  }, e.prototype.resolveConstraints = function() {
    var t = this, n = this.getProps(), r = n.dragConstraints, a = n.dragElastic, o = (this.visualElement.projection || {}).layout, i = this.constraints;
    r && gt(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = If(o.actual, r) : this.constraints = !1, this.elastic = Mf(a), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Ie(function(s) {
      t.getAxisMotionValue(s) && (t.constraints[s] = Of(o.actual[s], t.constraints[s]));
    });
  }, e.prototype.resolveRefConstraints = function() {
    var t = this.getProps(), n = t.dragConstraints, r = t.onMeasureDragConstraints;
    if (!n || !gt(n))
      return !1;
    var a = n.current;
    me(a !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    var o = this.visualElement.projection;
    if (!o || !o.layout)
      return !1;
    var i = jf(a, o.root, this.visualElement.getTransformPagePoint()), s = Af(o.layout.actual, i);
    if (r) {
      var l = r(Df(s));
      this.hasMutatedConstraints = !!l, l && (s = es(l));
    }
    return s;
  }, e.prototype.startAnimation = function(t) {
    var n = this, r = this.getProps(), a = r.drag, o = r.dragMomentum, i = r.dragElastic, s = r.dragTransition, l = r.dragSnapToOrigin, c = r.onDragTransitionEnd, u = this.constraints || {}, p = Ie(function(f) {
      var v;
      if (!!cn(f, a, n.currentDirection)) {
        var h = (v = u == null ? void 0 : u[f]) !== null && v !== void 0 ? v : {};
        l && (h = { min: 0, max: 0 });
        var g = i ? 200 : 1e6, _ = i ? 40 : 1e7, y = S(S({ type: "inertia", velocity: o ? t[f] : 0, bounceStiffness: g, bounceDamping: _, timeConstant: 750, restDelta: 1, restSpeed: 10 }, s), h);
        return n.startAxisValueAnimation(f, y);
      }
    });
    return Promise.all(p).then(c);
  }, e.prototype.startAxisValueAnimation = function(t, n) {
    var r = this.getAxisMotionValue(t);
    return zr(t, r, 0, n);
  }, e.prototype.stopAnimation = function() {
    var t = this;
    Ie(function(n) {
      return t.getAxisMotionValue(n).stop();
    });
  }, e.prototype.getAxisMotionValue = function(t) {
    var n, r, a = "_drag" + t.toUpperCase(), o = this.visualElement.getProps()[a];
    return o || this.visualElement.getValue(t, (r = (n = this.visualElement.getProps().initial) === null || n === void 0 ? void 0 : n[t]) !== null && r !== void 0 ? r : 0);
  }, e.prototype.snapToCursor = function(t) {
    var n = this;
    Ie(function(r) {
      var a = n.getProps().drag;
      if (!!cn(r, a, n.currentDirection)) {
        var o = n.visualElement.projection, i = n.getAxisMotionValue(r);
        if (o && o.layout) {
          var s = o.layout.actual[r], l = s.min, c = s.max;
          i.set(t[r] - z(l, c, 0.5));
        }
      }
    });
  }, e.prototype.scalePositionWithinConstraints = function() {
    var t = this, n, r = this.getProps(), a = r.drag, o = r.dragConstraints, i = this.visualElement.projection;
    if (!(!gt(o) || !i || !this.constraints)) {
      this.stopAnimation();
      var s = { x: 0, y: 0 };
      Ie(function(c) {
        var u = t.getAxisMotionValue(c);
        if (u) {
          var p = u.get();
          s[c] = $f({ min: p, max: p }, t.constraints[c]);
        }
      });
      var l = this.visualElement.getProps().transformTemplate;
      this.visualElement.getInstance().style.transform = l ? l({}, "") : "none", (n = i.root) === null || n === void 0 || n.updateScroll(), i.updateLayout(), this.resolveConstraints(), Ie(function(c) {
        if (!!cn(c, a, null)) {
          var u = t.getAxisMotionValue(c), p = t.constraints[c], f = p.min, v = p.max;
          u.set(z(f, v, s[c]));
        }
      });
    }
  }, e.prototype.addListeners = function() {
    var t = this, n;
    Bf.set(this.visualElement, this);
    var r = this.visualElement.getInstance(), a = xt(r, "pointerdown", function(c) {
      var u = t.getProps(), p = u.drag, f = u.dragListener, v = f === void 0 ? !0 : f;
      p && v && t.start(c);
    }), o = function() {
      var c = t.getProps().dragConstraints;
      gt(c) && (t.constraints = t.resolveRefConstraints());
    }, i = this.visualElement.projection, s = i.addEventListener("measure", o);
    i && !i.layout && ((n = i.root) === null || n === void 0 || n.updateScroll(), i.updateLayout()), o();
    var l = Qr(window, "resize", function() {
      t.scalePositionWithinConstraints();
    });
    return i.addEventListener("didUpdate", function(c) {
      var u = c.delta, p = c.hasLayoutChanged;
      t.isDragging && p && (Ie(function(f) {
        var v = t.getAxisMotionValue(f);
        !v || (t.originPoint[f] += u[f].translate, v.set(v.get() + u[f].translate));
      }), t.visualElement.syncRender());
    }), function() {
      l(), a(), s();
    };
  }, e.prototype.getProps = function() {
    var t = this.visualElement.getProps(), n = t.drag, r = n === void 0 ? !1 : n, a = t.dragDirectionLock, o = a === void 0 ? !1 : a, i = t.dragPropagation, s = i === void 0 ? !1 : i, l = t.dragConstraints, c = l === void 0 ? !1 : l, u = t.dragElastic, p = u === void 0 ? Lr : u, f = t.dragMomentum, v = f === void 0 ? !0 : f;
    return S(S({}, t), { drag: r, dragDirectionLock: o, dragPropagation: s, dragConstraints: c, dragElastic: p, dragMomentum: v });
  }, e;
}();
function cn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Wf(e, t) {
  t === void 0 && (t = 10);
  var n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
function qf(e) {
  var t = e.dragControls, n = e.visualElement, r = Zt(function() {
    return new Ff(n);
  });
  G(function() {
    return t && t.subscribe(r);
  }, [r, t]), G(function() {
    return r.addListeners();
  }, [r]);
}
function Uf(e) {
  var t = e.onPan, n = e.onPanStart, r = e.onPanEnd, a = e.onPanSessionStart, o = e.visualElement, i = t || n || r || a, s = ae(null), l = Q(Ir).transformPagePoint, c = {
    onSessionStart: a,
    onStart: n,
    onMove: t,
    onEnd: function(p, f) {
      s.current = null, r && r(p, f);
    }
  };
  G(function() {
    s.current !== null && s.current.updateHandlers(c);
  });
  function u(p) {
    s.current = new Jo(p, c, {
      transformPagePoint: l
    });
  }
  Nn(o, "pointerdown", i && u), ta(function() {
    return s.current && s.current.end();
  });
}
var zf = {
  pan: Ke(Uf),
  drag: Ke(qf)
}, un = [
  "LayoutMeasure",
  "BeforeLayoutMeasure",
  "LayoutUpdate",
  "ViewportBoxUpdate",
  "Update",
  "Render",
  "AnimationComplete",
  "LayoutAnimationComplete",
  "AnimationStart",
  "LayoutAnimationStart",
  "SetAxisTarget",
  "Unmount"
];
function Hf() {
  var e = un.map(function() {
    return new $t();
  }), t = {}, n = {
    clearAllListeners: function() {
      return e.forEach(function(r) {
        return r.clear();
      });
    },
    updatePropListeners: function(r) {
      un.forEach(function(a) {
        var o, i = "on" + a, s = r[i];
        (o = t[a]) === null || o === void 0 || o.call(t), s && (t[a] = n[i](s));
      });
    }
  };
  return e.forEach(function(r, a) {
    n["on" + un[a]] = function(o) {
      return r.add(o);
    }, n["notify" + un[a]] = function() {
      for (var o = [], i = 0; i < arguments.length; i++)
        o[i] = arguments[i];
      return r.notify.apply(r, Se([], H(o), !1));
    };
  }), n;
}
function Yf(e, t, n) {
  var r;
  for (var a in t) {
    var o = t[a], i = n[a];
    if (je(o))
      e.addValue(a, o);
    else if (je(i))
      e.addValue(a, Tt(o));
    else if (i !== o)
      if (e.hasValue(a)) {
        var s = e.getValue(a);
        !s.hasAnimated && s.set(o);
      } else
        e.addValue(a, Tt((r = e.getStaticValue(a)) !== null && r !== void 0 ? r : o));
  }
  for (var a in n)
    t[a] === void 0 && e.removeValue(a);
  return t;
}
var ns = function(e) {
  var t = e.treeType, n = t === void 0 ? "" : t, r = e.build, a = e.getBaseTarget, o = e.makeTargetAnimatable, i = e.measureViewportBox, s = e.render, l = e.readValueFromInstance, c = e.removeValueFromRenderState, u = e.sortNodePosition, p = e.scrapeMotionValuesFromProps;
  return function(f, v) {
    var h = f.parent, g = f.props, _ = f.presenceId, y = f.blockInitialAnimation, x = f.visualState, b = f.shouldReduceMotion;
    v === void 0 && (v = {});
    var P = !1, N = x.latestValues, O = x.renderState, V, A = Hf(), $ = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = {}, ie = S({}, N), Z;
    function oe() {
      !V || !P || (se(), s(V, O, g.style, k.projection));
    }
    function se() {
      r(k, O, N, v, g);
    }
    function U() {
      A.notifyUpdate(N);
    }
    function _e(w, R) {
      var K = R.onChange(function(ct) {
        N[w] = ct, g.onUpdate && Te.update(U, !1, !0);
      }), Ze = R.onRenderRequest(k.scheduleRender);
      B.set(w, function() {
        K(), Ze();
      });
    }
    var de = p(g);
    for (var ye in de) {
      var lt = de[ye];
      N[ye] !== void 0 && je(lt) && lt.set(N[ye], !1);
    }
    var fe = Dn(g), X = Fi(g), k = S(S({
      treeType: n,
      current: null,
      depth: h ? h.depth + 1 : 0,
      parent: h,
      children: /* @__PURE__ */ new Set(),
      presenceId: _,
      shouldReduceMotion: b,
      variantChildren: X ? /* @__PURE__ */ new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(h == null ? void 0 : h.isMounted()),
      blockInitialAnimation: y,
      isMounted: function() {
        return Boolean(V);
      },
      mount: function(w) {
        P = !0, V = k.current = w, k.projection && k.projection.mount(w), X && h && !fe && (Z = h == null ? void 0 : h.addVariantChild(k)), $.forEach(function(R, K) {
          return _e(K, R);
        }), h == null || h.children.add(k), k.setProps(g);
      },
      unmount: function() {
        var w;
        (w = k.projection) === null || w === void 0 || w.unmount(), St.update(U), St.render(oe), B.forEach(function(R) {
          return R();
        }), Z == null || Z(), h == null || h.children.delete(k), A.clearAllListeners(), V = void 0, P = !1;
      },
      addVariantChild: function(w) {
        var R, K = k.getClosestVariantNode();
        if (K)
          return (R = K.variantChildren) === null || R === void 0 || R.add(w), function() {
            return K.variantChildren.delete(w);
          };
      },
      sortNodePosition: function(w) {
        return !u || n !== w.treeType ? 0 : u(k.getInstance(), w.getInstance());
      },
      getClosestVariantNode: function() {
        return X ? k : h == null ? void 0 : h.getClosestVariantNode();
      },
      getLayoutId: function() {
        return g.layoutId;
      },
      getInstance: function() {
        return V;
      },
      getStaticValue: function(w) {
        return N[w];
      },
      setStaticValue: function(w, R) {
        return N[w] = R;
      },
      getLatestValues: function() {
        return N;
      },
      setVisibility: function(w) {
        k.isVisible !== w && (k.isVisible = w, k.scheduleRender());
      },
      makeTargetAnimatable: function(w, R) {
        return R === void 0 && (R = !0), o(k, w, g, R);
      },
      measureViewportBox: function() {
        return i(V, g);
      },
      addValue: function(w, R) {
        k.hasValue(w) && k.removeValue(w), $.set(w, R), N[w] = R.get(), _e(w, R);
      },
      removeValue: function(w) {
        var R;
        $.delete(w), (R = B.get(w)) === null || R === void 0 || R(), B.delete(w), delete N[w], c(w, O);
      },
      hasValue: function(w) {
        return $.has(w);
      },
      getValue: function(w, R) {
        var K = $.get(w);
        return K === void 0 && R !== void 0 && (K = Tt(R), k.addValue(w, K)), K;
      },
      forEachValue: function(w) {
        return $.forEach(w);
      },
      readValue: function(w) {
        var R;
        return (R = N[w]) !== null && R !== void 0 ? R : l(V, w, v);
      },
      setBaseTarget: function(w, R) {
        ie[w] = R;
      },
      getBaseTarget: function(w) {
        if (a) {
          var R = a(g, w);
          if (R !== void 0 && !je(R))
            return R;
        }
        return ie[w];
      }
    }, A), {
      build: function() {
        return se(), O;
      },
      scheduleRender: function() {
        Te.render(oe, !1, !0);
      },
      syncRender: oe,
      setProps: function(w) {
        (w.transformTemplate || g.transformTemplate) && k.scheduleRender(), g = w, A.updatePropListeners(w), Y = Yf(k, p(g), Y);
      },
      getProps: function() {
        return g;
      },
      getVariant: function(w) {
        var R;
        return (R = g.variants) === null || R === void 0 ? void 0 : R[w];
      },
      getDefaultTransition: function() {
        return g.transition;
      },
      getTransformPagePoint: function() {
        return g.transformPagePoint;
      },
      getVariantContext: function(w) {
        if (w === void 0 && (w = !1), w)
          return h == null ? void 0 : h.getVariantContext();
        if (!fe) {
          var R = (h == null ? void 0 : h.getVariantContext()) || {};
          return g.initial !== void 0 && (R.initial = g.initial), R;
        }
        for (var K = {}, Ze = 0; Ze < Gf; Ze++) {
          var ct = rs[Ze], wt = g[ct];
          (xe(wt) || wt === !1) && (K[ct] = wt);
        }
        return K;
      }
    });
    return k;
  };
}, rs = Se(["initial"], H(na), !1), Gf = rs.length;
function Er(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var as = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Kf(e) {
  var t = as.exec(e);
  if (!t)
    return [,];
  var n = H(t, 3), r = n[1], a = n[2];
  return [r, a];
}
var Xf = 4;
function Nr(e, t, n) {
  n === void 0 && (n = 1), me(n <= Xf, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
  var r = H(Kf(e), 2), a = r[0], o = r[1];
  if (!!a) {
    var i = window.getComputedStyle(t).getPropertyValue(a);
    return i ? i.trim() : Er(o) ? Nr(o, t, n + 1) : o;
  }
}
function Zf(e, t, n) {
  var r, a = ge(t, []), o = e.getInstance();
  if (!(o instanceof Element))
    return { target: a, transitionEnd: n };
  n && (n = S({}, n)), e.forEachValue(function(c) {
    var u = c.get();
    if (!!Er(u)) {
      var p = Nr(u, o);
      p && c.set(p);
    }
  });
  for (var i in a) {
    var s = a[i];
    if (!!Er(s)) {
      var l = Nr(s, o);
      !l || (a[i] = l, n && ((r = n[i]) !== null && r !== void 0 || (n[i] = s)));
    }
  }
  return { target: a, transitionEnd: n };
}
var Jf = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), is = function(e) {
  return Jf.has(e);
}, Qf = function(e) {
  return Object.keys(e).some(is);
}, os = function(e, t) {
  e.set(t, !1), e.set(t);
}, dn = function(e) {
  return e === st || e === I;
}, mi;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(mi || (mi = {}));
var gi = function(e, t) {
  return parseFloat(e.split(", ")[t]);
}, _i = function(e, t) {
  return function(n, r) {
    var a = r.transform;
    if (a === "none" || !a)
      return 0;
    var o = a.match(/^matrix3d\((.+)\)$/);
    if (o)
      return gi(o[1], t);
    var i = a.match(/^matrix\((.+)\)$/);
    return i ? gi(i[1], e) : 0;
  };
}, ev = /* @__PURE__ */ new Set(["x", "y", "z"]), tv = zt.filter(function(e) {
  return !ev.has(e);
});
function nv(e) {
  var t = [];
  return tv.forEach(function(n) {
    var r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.syncRender(), t;
}
var yi = {
  width: function(e, t) {
    var n = e.x, r = t.paddingLeft, a = r === void 0 ? "0" : r, o = t.paddingRight, i = o === void 0 ? "0" : o;
    return n.max - n.min - parseFloat(a) - parseFloat(i);
  },
  height: function(e, t) {
    var n = e.y, r = t.paddingTop, a = r === void 0 ? "0" : r, o = t.paddingBottom, i = o === void 0 ? "0" : o;
    return n.max - n.min - parseFloat(a) - parseFloat(i);
  },
  top: function(e, t) {
    var n = t.top;
    return parseFloat(n);
  },
  left: function(e, t) {
    var n = t.left;
    return parseFloat(n);
  },
  bottom: function(e, t) {
    var n = e.y, r = t.top;
    return parseFloat(r) + (n.max - n.min);
  },
  right: function(e, t) {
    var n = e.x, r = t.left;
    return parseFloat(r) + (n.max - n.min);
  },
  x: _i(4, 13),
  y: _i(5, 14)
}, rv = function(e, t, n) {
  var r = t.measureViewportBox(), a = t.getInstance(), o = getComputedStyle(a), i = o.display, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), n.forEach(function(c) {
    s[c] = yi[c](r, o);
  }), t.syncRender();
  var l = t.measureViewportBox();
  return n.forEach(function(c) {
    var u = t.getValue(c);
    os(u, s[c]), e[c] = yi[c](l, o);
  }), e;
}, av = function(e, t, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {}), t = S({}, t), r = S({}, r);
  var a = Object.keys(t).filter(is), o = [], i = !1, s = [];
  if (a.forEach(function(c) {
    var u = e.getValue(c);
    if (!!e.hasValue(c)) {
      var p = n[c], f = Lt(p), v = t[c], h;
      if (Ut(v)) {
        var g = v.length, _ = v[0] === null ? 1 : 0;
        p = v[_], f = Lt(p);
        for (var y = _; y < g; y++)
          h ? me(Lt(v[y]) === h, "All keyframes must be of the same type") : (h = Lt(v[y]), me(h === f || dn(f) && dn(h), "Keyframes must be of the same dimension as the current value"));
      } else
        h = Lt(v);
      if (f !== h)
        if (dn(f) && dn(h)) {
          var x = u.get();
          typeof x == "string" && u.set(parseFloat(x)), typeof v == "string" ? t[c] = parseFloat(v) : Array.isArray(v) && h === I && (t[c] = v.map(parseFloat));
        } else
          (f == null ? void 0 : f.transform) && (h == null ? void 0 : h.transform) && (p === 0 || v === 0) ? p === 0 ? u.set(h.transform(p)) : t[c] = f.transform(v) : (i || (o = nv(e), i = !0), s.push(c), r[c] = r[c] !== void 0 ? r[c] : t[c], os(u, v));
    }
  }), s.length) {
    var l = rv(t, e, s);
    return o.length && o.forEach(function(c) {
      var u = H(c, 2), p = u[0], f = u[1];
      e.getValue(p).set(f);
    }), e.syncRender(), { target: l, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function iv(e, t, n, r) {
  return Qf(t) ? av(e, t, n, r) : { target: t, transitionEnd: r };
}
var ov = function(e, t, n, r) {
  var a = Zf(e, t, r);
  return t = a.target, r = a.transitionEnd, iv(e, t, n, r);
};
function sv(e) {
  return window.getComputedStyle(e);
}
var ss = {
  treeType: "dom",
  readValueFromInstance: function(e, t) {
    if (tn(t)) {
      var n = Wr(t);
      return n && n.default || 0;
    } else {
      var r = sv(e);
      return (Eo(t) ? r.getPropertyValue(t) : r[t]) || 0;
    }
  },
  sortNodePosition: function(e, t) {
    return e.compareDocumentPosition(t) & 2 ? 1 : -1;
  },
  getBaseTarget: function(e, t) {
    var n;
    return (n = e.style) === null || n === void 0 ? void 0 : n[t];
  },
  measureViewportBox: function(e, t) {
    var n = t.transformPagePoint;
    return ts(e, n);
  },
  resetTransform: function(e, t, n) {
    var r = n.transformTemplate;
    t.style.transform = r ? r({}, "") : "none", e.scheduleRender();
  },
  restoreTransform: function(e, t) {
    e.style.transform = t.style.transform;
  },
  removeValueFromRenderState: function(e, t) {
    var n = t.vars, r = t.style;
    delete n[e], delete r[e];
  },
  makeTargetAnimatable: function(e, t, n, r) {
    var a = n.transformValues;
    r === void 0 && (r = !0);
    var o = t.transition, i = t.transitionEnd, s = ge(t, ["transition", "transitionEnd"]), l = gf(s, o || {}, e);
    if (a && (i && (i = a(i)), s && (s = a(s)), l && (l = a(l))), r) {
      hf(e, s, l);
      var c = ov(e, s, l, i);
      i = c.transitionEnd, s = c.target;
    }
    return S({ transition: o, transitionEnd: i }, s);
  },
  scrapeMotionValuesFromProps: Zr,
  build: function(e, t, n, r, a) {
    e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden"), Gr(t, n, r, a.transformTemplate);
  },
  render: Ao
}, lv = ns(ss), cv = ns(S(S({}, ss), { getBaseTarget: function(e, t) {
  return e[t];
}, readValueFromInstance: function(e, t) {
  var n;
  return tn(t) ? ((n = Wr(t)) === null || n === void 0 ? void 0 : n.default) || 0 : (t = $o.has(t) ? t : Io(t), e.getAttribute(t));
}, scrapeMotionValuesFromProps: Mo, build: function(e, t, n, r, a) {
  Xr(t, n, r, a.transformTemplate);
}, render: Oo })), uv = function(e, t) {
  return Yr(e) ? cv(t, { enableHardwareAcceleration: !1 }) : lv(t, { enableHardwareAcceleration: !0 });
};
function bi(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Et = {
  correct: function(e, t) {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (I.test(e))
        e = parseFloat(e);
      else
        return e;
    var n = bi(e, t.target.x), r = bi(e, t.target.y);
    return "".concat(n, "% ").concat(r, "%");
  }
}, xi = "_$css", dv = {
  correct: function(e, t) {
    var n = t.treeScale, r = t.projectionDelta, a = e, o = e.includes("var("), i = [];
    o && (e = e.replace(as, function(g) {
      return i.push(g), xi;
    }));
    var s = ke.parse(e);
    if (s.length > 5)
      return a;
    var l = ke.createTransformer(e), c = typeof s[0] != "number" ? 1 : 0, u = r.x.scale * n.x, p = r.y.scale * n.y;
    s[0 + c] /= u, s[1 + c] /= p;
    var f = z(u, p, 0.5);
    typeof s[2 + c] == "number" && (s[2 + c] /= f), typeof s[3 + c] == "number" && (s[3 + c] /= f);
    var v = l(s);
    if (o) {
      var h = 0;
      v = v.replace(xi, function() {
        var g = i[h];
        return h++, g;
      });
    }
    return v;
  }
}, fv = function(e) {
  Oi(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    var n = this, r = this.props, a = r.visualElement, o = r.layoutGroup, i = r.switchLayoutGroup, s = r.layoutId, l = a.projection;
    Bu(pv), l && (o != null && o.group && o.group.add(l), (i == null ? void 0 : i.register) && s && i.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", function() {
      n.safeToRemove();
    }), l.setOptions(S(S({}, l.options), {
      onExitComplete: function() {
        return n.safeToRemove();
      }
    }))), kt.hasEverUpdated = !0;
  }, t.prototype.getSnapshotBeforeUpdate = function(n) {
    var r = this, a = this.props, o = a.layoutDependency, i = a.visualElement, s = a.drag, l = a.isPresent, c = i.projection;
    return c && (c.isPresent = l, s || n.layoutDependency !== o || o === void 0 ? c.willUpdate() : this.safeToRemove(), n.isPresent !== l && (l ? c.promote() : c.relegate() || Te.postRender(function() {
      var u;
      !((u = c.getStack()) === null || u === void 0) && u.members.length || r.safeToRemove();
    }))), null;
  }, t.prototype.componentDidUpdate = function() {
    var n = this.props.visualElement.projection;
    n && (n.root.didUpdate(), !n.currentAnimation && n.isLead() && this.safeToRemove());
  }, t.prototype.componentWillUnmount = function() {
    var n = this.props, r = n.visualElement, a = n.layoutGroup, o = n.switchLayoutGroup, i = r.projection;
    i && (i.scheduleCheckAfterUnmount(), a != null && a.group && a.group.remove(i), o != null && o.deregister && o.deregister(i));
  }, t.prototype.safeToRemove = function() {
    var n = this.props.safeToRemove;
    n == null || n();
  }, t.prototype.render = function() {
    return null;
  }, t;
}(Yt.Component);
function vv(e) {
  var t = H(Yo(), 2), n = t[0], r = t[1], a = Q(Hr);
  return /* @__PURE__ */ d(fv, {
    ...S({}, e, {
      layoutGroup: a,
      switchLayoutGroup: Q(wo),
      isPresent: n,
      safeToRemove: r
    })
  });
}
var pv = {
  borderRadius: S(S({}, Et), {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: Et,
  borderTopRightRadius: Et,
  borderBottomLeftRadius: Et,
  borderBottomRightRadius: Et,
  boxShadow: dv
}, hv = {
  measureLayout: vv
}, mv = Co({
  attachResizeListener: function(e, t) {
    return e.addEventListener("resize", t, { passive: !0 }), function() {
      return e.removeEventListener("resize", t);
    };
  },
  measureScroll: function() {
    return {
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop
    };
  }
}), or = {
  current: void 0
}, gv = Co({
  measureScroll: function(e) {
    return {
      x: e.scrollLeft,
      y: e.scrollTop
    };
  },
  defaultParent: function() {
    if (!or.current) {
      var e = new mv(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), or.current = e;
    }
    return or.current;
  },
  resetTransform: function(e, t) {
    e.style.transform = t != null ? t : "none";
  }
}), _v = S(S(S(S({}, Ef), af), zf), hv), Ht = /* @__PURE__ */ vd(function(e, t) {
  return Md(e, t, _v, uv, gv);
});
function ls() {
  var e = ae(!1);
  return bn(function() {
    return e.current = !0, function() {
      e.current = !1;
    };
  }, []), e;
}
function yv() {
  var e = ls(), t = H(ne(0), 2), n = t[0], r = t[1], a = Ye(function() {
    e.current && r(n + 1);
  }, [n]), o = Ye(function() {
    return Te.postRender(a);
  }, [a]);
  return [o, n];
}
var sr = function(e) {
  var t = e.children, n = e.initial, r = e.isPresent, a = e.onExitComplete, o = e.custom, i = e.presenceAffectsLayout, s = Zt(bv), l = Ho(), c = jt(
    function() {
      return {
        id: l,
        initial: n,
        isPresent: r,
        custom: o,
        onExitComplete: function(u) {
          var p, f;
          s.set(u, !0);
          try {
            for (var v = Bl(s.values()), h = v.next(); !h.done; h = v.next()) {
              var g = h.value;
              if (!g)
                return;
            }
          } catch (_) {
            p = { error: _ };
          } finally {
            try {
              h && !h.done && (f = v.return) && f.call(v);
            } finally {
              if (p)
                throw p.error;
            }
          }
          a == null || a();
        },
        register: function(u) {
          return s.set(u, !1), function() {
            return s.delete(u);
          };
        }
      };
    },
    i ? void 0 : [r]
  );
  return jt(function() {
    s.forEach(function(u, p) {
      return s.set(p, !1);
    });
  }, [r]), he.useEffect(function() {
    !r && !s.size && (a == null || a());
  }, [r]), he.createElement(Xt.Provider, { value: c }, t);
};
function bv() {
  return /* @__PURE__ */ new Map();
}
var mt = function(e) {
  return e.key || "";
}, Si = $n.env.NODE_ENV !== "production";
function xv(e, t) {
  var n = Si ? /* @__PURE__ */ new Set() : null;
  e.forEach(function(r) {
    var a = mt(r);
    Si && n && n.has(a) && (console.warn('Children of AnimatePresence require unique keys. "'.concat(a, '" is a duplicate.')), n.add(a)), t.set(a, r);
  });
}
function Sv(e) {
  var t = [];
  return Ns.forEach(e, function(n) {
    Rs(n) && t.push(n);
  }), t;
}
var Fn = function(e) {
  var t = e.children, n = e.custom, r = e.initial, a = r === void 0 ? !0 : r, o = e.onExitComplete, i = e.exitBeforeEnter, s = e.presenceAffectsLayout, l = s === void 0 ? !0 : s, c = H(yv(), 1), u = c[0], p = Q(Hr).forceRender;
  p && (u = p);
  var f = ls(), v = Sv(t), h = v, g = /* @__PURE__ */ new Set(), _ = ae(h), y = ae(/* @__PURE__ */ new Map()).current, x = ae(!0);
  if (bn(function() {
    x.current = !1, xv(v, y), _.current = h;
  }), ta(function() {
    x.current = !0, y.clear(), g.clear();
  }), x.current)
    return he.createElement(he.Fragment, null, h.map(function(A) {
      return he.createElement(sr, { key: mt(A), isPresent: !0, initial: a ? void 0 : !1, presenceAffectsLayout: l }, A);
    }));
  h = Se([], H(h), !1);
  for (var b = _.current.map(mt), P = v.map(mt), N = b.length, O = 0; O < N; O++) {
    var V = b[O];
    P.indexOf(V) === -1 && g.add(V);
  }
  return i && g.size && (h = []), g.forEach(function(A) {
    if (P.indexOf(A) === -1) {
      var $ = y.get(A);
      if (!!$) {
        var B = b.indexOf(A), Y = function() {
          y.delete(A), g.delete(A);
          var ie = _.current.findIndex(function(Z) {
            return Z.key === A;
          });
          if (_.current.splice(ie, 1), !g.size) {
            if (_.current = v, f.current === !1)
              return;
            u(), o && o();
          }
        };
        h.splice(B, 0, he.createElement(sr, { key: mt($), isPresent: !1, onExitComplete: Y, custom: n, presenceAffectsLayout: l }, $));
      }
    }
  }), h = h.map(function(A) {
    var $ = A.key;
    return g.has($) ? A : he.createElement(sr, { key: mt(A), isPresent: !0, presenceAffectsLayout: l }, A);
  }), $n.env.NODE_ENV !== "production" && i && h.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), he.createElement(he.Fragment, null, g.size ? h : h.map(function(A) {
    return Es(A);
  }));
};
const Tv = "_accordionBtn_yh032_1", Pv = "_label_yh032_35", Cv = "_icon_yh032_43", wv = "_accordionBtnInnerWrapper_yh032_59", Lv = "_accordionContent_yh032_141", Nt = {
  accordionBtn: Tv,
  label: Pv,
  icon: Cv,
  accordionBtnInnerWrapper: wv,
  accordionContent: Lv
}, Ev = {
  open: {
    display: "block"
  },
  collapsed: {
    display: "none"
  }
}, Nv = ({
  id: e,
  label: t,
  description: n,
  isExpanded: r = !1,
  onAccordionBtnClick: a
}) => {
  function o() {
    a(e);
  }
  return /* @__PURE__ */ C(Pe, {
    children: [/* @__PURE__ */ d("button", {
      className: Nt.accordionBtn,
      id: `btn_${e}`,
      "aria-controls": e,
      "aria-expanded": r,
      onClick: o,
      children: /* @__PURE__ */ C("div", {
        className: Nt.accordionBtnInnerWrapper,
        children: [/* @__PURE__ */ d(ce, {
          icon: r ? "icon-x-circle" : "icon-plus-circle",
          className: Nt.icon
        }), /* @__PURE__ */ d("span", {
          className: L(Nt.label, "headingXS"),
          children: t
        })]
      })
    }), /* @__PURE__ */ d(Fn, {
      initial: !1,
      children: r && /* @__PURE__ */ d(Ht.div, {
        id: e,
        className: L(Nt.accordionContent),
        initial: "collapsed",
        animate: "open",
        exit: "collapsed",
        variants: Ev,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        },
        "aria-labelledby": `btn_${e}`,
        children: n
      })
    })]
  });
}, Rv = "_detailsBtn_1rwce_1", Vv = "_label_1rwce_39", Iv = "_icon_1rwce_49", Av = "_isExpanded_1rwce_115", $v = "_detailsContent_1rwce_157", vt = {
  detailsBtn: Rv,
  label: Vv,
  icon: Iv,
  isExpanded: Av,
  detailsContent: $v
}, Ov = {
  open: {
    opacity: 1,
    height: "auto"
  },
  collapsed: {
    opacity: 0,
    height: 0
  }
}, ey = ({
  id: e,
  label: t,
  description: n,
  isExpanded: r = !1,
  onDetailsBtnClick: a
}) => {
  function o() {
    a(e);
  }
  return /* @__PURE__ */ C(Pe, {
    children: [/* @__PURE__ */ C("button", {
      className: L(vt.detailsBtn, r && vt.isExpanded),
      id: `btn_${e}`,
      "aria-controls": e,
      "aria-expanded": r,
      onClick: o,
      children: [/* @__PURE__ */ d(ce, {
        icon: "icon-arrow-right",
        className: L(vt.icon, r && vt.isExpanded)
      }), /* @__PURE__ */ d("span", {
        className: L(vt.label, "body"),
        children: t
      })]
    }), /* @__PURE__ */ d(Fn, {
      initial: !1,
      children: r && /* @__PURE__ */ d(Ht.div, {
        id: e,
        className: L(vt.detailsContent),
        initial: "collapsed",
        animate: "open",
        exit: "collapsed",
        variants: Ov,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        },
        "aria-labelledby": `btn_${e}`,
        children: n
      })
    })]
  });
}, Mv = "_card_10qqn_1", Dv = "_content_10qqn_35", kv = "_center_10qqn_55", jv = "_middleCenter_10qqn_63", Bv = "_heading_10qqn_81", Fv = "_preamble_10qqn_107", Wv = "_link_10qqn_131", qv = "_picture_10qqn_139", Uv = "_image_10qqn_153", zv = "_contain_10qqn_175", Hv = "_fill_10qqn_181", Yv = "_cover_10qqn_187", Ee = {
  card: Mv,
  content: Dv,
  center: kv,
  middleCenter: jv,
  heading: Bv,
  preamble: Fv,
  link: Wv,
  picture: qv,
  image: Uv,
  contain: zv,
  fill: Hv,
  cover: Yv
}, Gv = ({
  heading: e,
  preamble: t,
  link: n,
  image: r,
  imageFit: a
}) => /* @__PURE__ */ d("div", {
  className: Ee.card,
  children: /* @__PURE__ */ C("div", {
    className: L(Ee.content, (r || !n) && Ee.center, r && Ee.middleCenter),
    children: [r && /* @__PURE__ */ d(Fe, {
      ...r,
      classNamePicture: Ee.picture,
      classNameImg: L(Ee.image, a && Ee[a])
    }), !r && /* @__PURE__ */ C(Pe, {
      children: [/* @__PURE__ */ C("div", {
        children: [e && /* @__PURE__ */ d("h2", {
          className: Ee.heading,
          children: e
        }), t && /* @__PURE__ */ d("h3", {
          className: Ee.preamble,
          children: t
        })]
      }), n && /* @__PURE__ */ d(ot, {
        ...n,
        iconRight: "icon-arrow-right",
        onSurface: "transparent",
        size: "default",
        className: Ee.link
      })]
    })]
  })
}), Kv = "_list_k7su0_1", Xv = {
  list: Kv
}, ty = ({
  children: e
}) => /* @__PURE__ */ d("ol", {
  className: Xv.list,
  children: e
}), Zv = "_list_16k0t_1", Jv = {
  list: Zv
}, ny = ({
  children: e
}) => /* @__PURE__ */ d("ul", {
  className: Jv.list,
  children: e
}), Qv = "_search_1u22s_1", ep = "_searchBar_1u22s_5", tp = "_searchButton_1u22s_11", np = "_inputField_1u22s_18", rp = "_clearButton_1u22s_30", ap = "_searchResults_1u22s_41", ip = "_searchResultLink_1u22s_66", op = "_active_1u22s_73", sp = "_searchResultItem_1u22s_78", lp = "_serchResultItemLabel_1u22s_83", ve = {
  search: Qv,
  searchBar: ep,
  searchButton: tp,
  inputField: np,
  clearButton: rp,
  searchResults: ap,
  searchResultLink: ip,
  active: op,
  searchResultItem: sp,
  serchResultItemLabel: lp
};
function cs({ onClose: e, isOpen: t, disableClose: n }) {
  G(() => {
    if (!(typeof document > "u" || n))
      return t ? document.addEventListener("keydown", r) : document.removeEventListener("keydown", r), () => {
        document.removeEventListener("keydown", r);
      };
  }, [t]);
  const r = (a) => {
    (a == null ? void 0 : a.key) === "Escape" && e();
  };
}
function us({ ref: e, onClose: t, disableClose: n }) {
  G(() => {
    if (n)
      return;
    const r = (a) => {
      !e.current || e.current.contains(a.target) || t(a);
    };
    return document.addEventListener("mousedown", r), document.addEventListener("touchstart", r), () => {
      document.removeEventListener("mousedown", r), document.removeEventListener("touchstart", r);
    };
  }, [e, t]);
}
const cp = (e) => {
  const [t, n] = ne({
    render: () => null,
    remove: () => null
  }), r = Ye((a) => ({
    render: ({ children: s }) => Vs(s, a),
    remove: () => Is(a)
  }), []);
  return G(() => {
    if (e) {
      t.remove();
      const a = r(e);
      return n(a), () => {
        a.remove();
      };
    }
  }, [e]), t.render;
}, up = cp;
function dp(e, t = 0) {
  const [n, r] = ne(t);
  return Rr(() => {
    function a() {
      e && e.current && r(e.current.scrollLeft);
    }
    return e && e.current && e.current.addEventListener("scroll", a), a(), () => {
      e && e.current && e.current.removeEventListener("scroll", a);
    };
  }, []), n;
}
function fp(e, t, n) {
  var i;
  const r = (i = e.current) == null ? void 0 : i.querySelectorAll('button, [href], input, select, textarea, video, [tabindex]:not([tabindex="-1"])'), a = r != null && r.length ? r[0] : null;
  Rr(() => {
    const s = document.querySelector("body");
    t ? setTimeout(() => {
      s.style.overflow = "hidden", n.current ? n.current.focus() : a == null || a.focus();
    }, 25) : s.style.overflow = "visible";
  }, [t, n]), G(() => {
    t ? document.addEventListener("focusout", o) : document.removeEventListener("focusout", o);
  }, [t]);
  const o = (s) => {
    var p;
    const l = (p = e == null ? void 0 : e.current) == null ? void 0 : p.querySelectorAll('button, [href], input, select, textarea, video, [tabindex]:not([tabindex="-1"])'), c = l != null && l.length ? l[0] : null;
    (l != null && l.length ? l[l.length - 1] : null) === s.target && c && setTimeout(() => c.focus(), 25);
  };
}
function vp({
  className: e,
  id: t,
  isOpen: n,
  setIsOpen: r,
  query: a,
  setQuery: o,
  setIsFocused: i,
  results: s,
  disabled: l,
  noResult: c,
  placeholder: u
}) {
  const p = ae(null), f = ae(null), v = Ye(() => (r(!1), (f == null ? void 0 : f.current) && f.current.blur()), [r]), h = Ye(() => {
    r(!0), i(!0);
  }, [r, i]), g = Ye(() => {
    i(!1);
  }, [i]), _ = Ye((x) => {
    n || r(!0), o(x.target.value);
  }, [n, r, o]);
  function y() {
    return o(""), (f == null ? void 0 : f.current) && f.current.focus();
  }
  return us({
    ref: p,
    onClose: v
  }), cs({
    onClose: v,
    isOpen: n
  }), /* @__PURE__ */ C("div", {
    ref: p,
    className: L(ve.search, e),
    children: [/* @__PURE__ */ C("div", {
      className: ve.searchBar,
      children: [/* @__PURE__ */ d(An, {
        className: ve.searchButton,
        type: "button",
        surface: "primary",
        size: "small",
        children: /* @__PURE__ */ d(ce, {
          icon: "icon-search"
        })
      }), /* @__PURE__ */ d(Vr, {
        ref: f,
        type: "text",
        id: t,
        onChange: _,
        value: a,
        className: ve.inputField,
        onFocus: h,
        onBlur: g,
        other: {
          autoComplete: "off"
        },
        disabled: l,
        placeholder: u
      }), a && /* @__PURE__ */ d("button", {
        onClick: y,
        tabIndex: -1,
        type: "button",
        className: ve.clearButton,
        children: /* @__PURE__ */ d(ce, {
          icon: "icon-x",
          className: "text-icon"
        })
      })]
    }), n && a && /* @__PURE__ */ d("div", {
      className: ve.searchResults,
      children: /* @__PURE__ */ C("ul", {
        "aria-labelledby": t,
        children: [s.map((x, b) => /* @__PURE__ */ d("li", {
          children: /* @__PURE__ */ C("a", {
            href: x.slug,
            className: ve.searchResultLink,
            children: [/* @__PURE__ */ d("span", {
              className: ve.serchResultItemLabel,
              children: x.label
            }), x.text && /* @__PURE__ */ d("span", {
              children: " - "
            }), /* @__PURE__ */ d("span", {
              className: ve.serchResultItemText,
              children: x.text
            })]
          })
        }, `${t}_${b}`)), s.length === 0 && a.length ? /* @__PURE__ */ d("li", {
          children: /* @__PURE__ */ C("div", {
            className: ve.serchResultItem,
            children: [/* @__PURE__ */ d("span", {
              className: ve.serchResultItemLabel,
              children: c.label
            }), c.text && /* @__PURE__ */ d("span", {
              children: "-"
            }), /* @__PURE__ */ d("span", {
              className: ve.serchResultItemText,
              children: c.text
            })]
          })
        }, `search_no_result_${t}`) : null]
      })
    })]
  });
}
const pp = "_hero_1q5bu_1", hp = "_outerWrapper_1q5bu_15", mp = "_innerWrapper_1q5bu_47", gp = "_content_1q5bu_85", _p = "_topHeading_1q5bu_135", yp = "_heading_1q5bu_143", bp = "_preamble_1q5bu_167", xp = "_linkButton_1q5bu_189", Sp = "_lightTheme_1q5bu_203", Tp = "_darkTheme_1q5bu_221", Pp = "_picture_1q5bu_239", Cp = "_image_1q5bu_251", ue = {
  hero: pp,
  outerWrapper: hp,
  innerWrapper: mp,
  content: gp,
  "content-left": "_content-left_1q5bu_101",
  "content-right": "_content-right_1q5bu_109",
  "content-center": "_content-center_1q5bu_121",
  topHeading: _p,
  heading: yp,
  preamble: bp,
  linkButton: xp,
  lightTheme: Sp,
  darkTheme: Tp,
  picture: Pp,
  image: Cp
};
function wp(e = "left") {
  return ue[`content-${e}`];
}
function Lp(e = "light") {
  return e === "dark" ? ue.darkTheme : ue.lightTheme;
}
const Ep = ({
  topHeading: e,
  heading: t,
  preamble: n,
  image: r,
  alignContent: a,
  link: o,
  heroTheme: i,
  fetchPriority: s,
  loading: l
}) => /* @__PURE__ */ C("section", {
  className: ue.hero,
  children: [/* @__PURE__ */ d(Fe, {
    ...r,
    fetchPriority: s,
    loading: l,
    classNamePicture: ue.picture,
    classNameImg: L(ue.image)
  }), /* @__PURE__ */ d("div", {
    className: ue.outerWrapper,
    children: /* @__PURE__ */ d("div", {
      className: ue.innerWrapper,
      children: /* @__PURE__ */ C("div", {
        className: L(ue.content, wp(a), Lp(i)),
        children: [(e || t) && /* @__PURE__ */ C("header", {
          children: [e && /* @__PURE__ */ d("h2", {
            className: L("body", "fontRegular", ue.topHeading),
            children: e
          }), t && /* @__PURE__ */ d("h1", {
            className: L("headingXL", ue.heading),
            children: t
          })]
        }), n && /* @__PURE__ */ d("p", {
          className: L("body", ue.preamble),
          children: n
        }), o && /* @__PURE__ */ d($i, {
          surface: "primary",
          size: "small",
          ...o,
          className: ue.linkButton
        })]
      })
    })
  })]
}), Np = "_cardPoster_273ug_1", Rp = "_decorativeOne_273ug_31", Vp = "_decorativeTwo_273ug_41", Ip = "_content_273ug_53", Ap = "_heading_273ug_83", $p = "_preamble_273ug_109", Op = "_description_273ug_135", Mp = "_link_273ug_159", qe = {
  cardPoster: Np,
  decorativeOne: Rp,
  decorativeTwo: Vp,
  content: Ip,
  heading: Ap,
  preamble: $p,
  description: Op,
  link: Mp
}, Dp = "_picture_zpjjk_1", kp = "_image_zpjjk_15", jp = "_contain_zpjjk_39", Bp = "_opacityLayer_zpjjk_49", fn = {
  picture: Dp,
  image: kp,
  contain: jp,
  opacityLayer: Bp
}, ds = ({
  image: e,
  contain: t
}) => /* @__PURE__ */ C(Pe, {
  children: [/* @__PURE__ */ d(Fe, {
    ...e,
    classNamePicture: fn.picture,
    classNameImg: L(fn.image, t && fn.contain)
  }), /* @__PURE__ */ d("div", {
    className: fn.opacityLayer
  })]
}), ry = ({
  image: e,
  surface: t,
  heading: n,
  preamble: r,
  description: a,
  link: o
}) => /* @__PURE__ */ C("div", {
  className: L(qe.cardPoster, t && !e && qe[t]),
  children: [e && /* @__PURE__ */ d(ds, {
    image: e
  }), /* @__PURE__ */ C("div", {
    className: `${qe.content}`,
    children: [r && /* @__PURE__ */ d("h2", {
      className: qe.preamble,
      children: r
    }), r ? /* @__PURE__ */ d("h3", {
      className: qe.heading,
      children: n
    }) : /* @__PURE__ */ d("h2", {
      className: qe.heading,
      children: n
    }), a && /* @__PURE__ */ d("p", {
      className: qe.description,
      children: a
    }), o && /* @__PURE__ */ d(ot, {
      ...o,
      iconRight: "icon-arrow-right",
      onSurface: t && !e ? t : "decorativeTwo",
      size: "default",
      className: qe.link
    })]
  })]
}), Fp = "_cardList_1ik58_1", Wp = "_rectangular_1ik58_29", qp = "_decorativeOne_1ik58_41", Up = "_decorativeTwo_1ik58_51", zp = "_list_1ik58_57", Hp = "_square_1ik58_75", Yp = "_content_1ik58_85", Gp = "_heading_1ik58_99", Kp = "_preamble_1ik58_113", Xp = "_link_1ik58_267", Zp = "_largeDeviceLink_1ik58_275", Jp = "_smallDeviceLink_1ik58_289", be = {
  cardList: Fp,
  rectangular: Wp,
  decorativeOne: qp,
  decorativeTwo: Up,
  list: zp,
  square: Hp,
  content: Yp,
  heading: Gp,
  preamble: Kp,
  link: Xp,
  largeDeviceLink: Zp,
  smallDeviceLink: Jp
}, ay = ({
  surface: e = "decorativeOne",
  list: t = [],
  preamble: n,
  format: r = "1:1",
  link: a
}) => {
  const o = () => t.map((i, s) => /* @__PURE__ */ d("li", {
    children: i
  }, `${i}-${s}`));
  return /* @__PURE__ */ d("div", {
    className: L(be.cardList, r === "1:1" ? be.square : be.rectangular, be[e]),
    children: /* @__PURE__ */ C("div", {
      className: be.content,
      children: [/* @__PURE__ */ C("div", {
        children: [/* @__PURE__ */ d("h2", {
          className: be.preamble,
          children: n
        }), /* @__PURE__ */ d("ul", {
          className: be.list,
          children: o()
        })]
      }), /* @__PURE__ */ d(ot, {
        ...a,
        iconRight: "icon-arrow-right",
        onSurface: e,
        size: r === "1:1" ? "large" : "default",
        className: L(be.link, be.largeDeviceLink)
      }), /* @__PURE__ */ d(ot, {
        ...a,
        iconRight: "icon-arrow-right",
        onSurface: e,
        size: "default",
        className: L(be.link, be.smallDeviceLink)
      })]
    })
  });
}, Qp = "_cardSquare_16qr4_1", eh = "_decorativeOne_16qr4_31", th = "_decorativeTwo_16qr4_41", nh = "_transparent_16qr4_51", rh = "_content_16qr4_61", ah = "_heading_16qr4_91", ih = "_preamble_16qr4_117", oh = "_description_16qr4_145", sh = "_link_16qr4_169", lh = "_largeDeviceLink_16qr4_177", ch = "_smallDeviceLink_16qr4_191", Ne = {
  cardSquare: Qp,
  decorativeOne: eh,
  decorativeTwo: th,
  transparent: nh,
  content: rh,
  heading: ah,
  preamble: ih,
  description: oh,
  link: sh,
  largeDeviceLink: lh,
  smallDeviceLink: ch
}, iy = ({
  surface: e,
  image: t,
  heading: n,
  preamble: r,
  description: a,
  link: o
}) => /* @__PURE__ */ C("div", {
  className: L(Ne.cardSquare, e && !t && Ne[e]),
  children: [t && /* @__PURE__ */ d(ds, {
    image: t
  }), /* @__PURE__ */ C("div", {
    className: Ne.content,
    children: [/* @__PURE__ */ C("div", {
      children: [r && /* @__PURE__ */ d("h2", {
        className: Ne.preamble,
        children: r
      }), /* @__PURE__ */ d("h3", {
        className: Ne.heading,
        children: n
      })]
    }), /* @__PURE__ */ C("div", {
      children: [a && /* @__PURE__ */ d("p", {
        className: Ne.description,
        children: a
      }), o && /* @__PURE__ */ C(Pe, {
        children: [/* @__PURE__ */ d(ot, {
          ...o,
          iconRight: "icon-arrow-right",
          onSurface: e && !t ? e : t ? "decorativeTwo" : "transparent",
          size: "large",
          className: L(Ne.link, Ne.largeDeviceLink)
        }), /* @__PURE__ */ d(ot, {
          ...o,
          iconRight: "icon-arrow-right",
          onSurface: e && !t ? e : t ? "decorativeTwo" : "transparent",
          size: "default",
          className: L(Ne.link, Ne.smallDeviceLink)
        })]
      })]
    })]
  })]
}), uh = "_list_1sb6r_1", dh = "_listItem_1sb6r_33", fh = "_maxColumnsThree_1sb6r_79", vh = "_maxColumnsFour_1sb6r_135", Rn = {
  list: uh,
  listItem: dh,
  maxColumnsThree: fh,
  maxColumnsFour: vh
};
function ph(e) {
  return e === 4 ? Rn.maxColumnsFour : Rn.maxColumnsThree;
}
const oy = ({
  list: e = [],
  maxColumns: t
}) => /* @__PURE__ */ d("ul", {
  className: Rn.list,
  children: e.map((n, r) => /* @__PURE__ */ d("li", {
    className: L(Rn.listItem, ph(t)),
    children: /* @__PURE__ */ d(Gv, {
      ...n
    })
  }, r))
}), hh = "_defaultStyleList_1jk7r_1", mh = "_horizontal_1jk7r_13", gh = "_defaultStyleListItem_1jk7r_21", _h = "_vertical_1jk7r_43", yh = "_defaultStyleRadioWrapper_1jk7r_59", bh = "_defaultStyleRadio_1jk7r_59", xh = "_defaultStyleLabel_1jk7r_77", Sh = "_disabled_1jk7r_91", et = {
  defaultStyleList: hh,
  horizontal: mh,
  defaultStyleListItem: gh,
  vertical: _h,
  defaultStyleRadioWrapper: yh,
  defaultStyleRadio: bh,
  defaultStyleLabel: xh,
  disabled: Sh
}, sy = ({
  className: e,
  classNameList: t,
  classNameListItem: n,
  classNameLabel: r,
  classNameRadio: a,
  classNameRadioWrapper: o,
  inputs: i,
  align: s = "horizontal"
}) => /* @__PURE__ */ d("div", {
  className: L(e),
  children: /* @__PURE__ */ d("ul", {
    className: t ? L(t) : L(et.defaultStyleList, et[s]),
    children: i.map((l) => /* @__PURE__ */ d("li", {
      className: L(n || et.defaultStyleListItem),
      children: /* @__PURE__ */ C("div", {
        className: L(o || et.defaultStyleRadioWrapper),
        children: [/* @__PURE__ */ d(Vi, {
          ...l,
          className: a || et.defaultStyleRadio
        }, l.id), /* @__PURE__ */ d("label", {
          className: L("body", r || et.defaultStyleLabel, l.disabled && et.disabled),
          htmlFor: l.id,
          children: l.label
        })]
      })
    }, l.id))
  })
}), Th = "_defaultStyleList_k93x1_1", Ph = "_horizontal_k93x1_13", Ch = "_defaultStyleListItem_k93x1_21", wh = "_vertical_k93x1_43", Lh = "_defaultStyleCheckboxWrapper_k93x1_59", Eh = "_defaultStyleCheckbox_k93x1_59", Nh = "_defaultStyleLabel_k93x1_79", Rh = "_disabled_k93x1_91", tt = {
  defaultStyleList: Th,
  horizontal: Ph,
  defaultStyleListItem: Ch,
  vertical: wh,
  defaultStyleCheckboxWrapper: Lh,
  defaultStyleCheckbox: Eh,
  defaultStyleLabel: Nh,
  disabled: Rh
}, ly = ({
  className: e,
  classNameList: t,
  classNameListItem: n,
  classNameLabel: r,
  classNameCheckbox: a,
  classNameCheckboxWrapper: o,
  inputs: i = [],
  align: s = "horizontal"
}) => /* @__PURE__ */ d("div", {
  className: L(e),
  children: /* @__PURE__ */ d("ul", {
    className: L(t || `${tt.defaultStyleList} ${tt[s]}`),
    children: i.map((l) => /* @__PURE__ */ d("li", {
      className: L(n || tt.defaultStyleListItem),
      children: /* @__PURE__ */ C("div", {
        className: L(o || tt.defaultStyleCheckboxWrapper),
        children: [/* @__PURE__ */ d(Ii, {
          ...l,
          className: L(a || tt.defaultStyleCheckbox)
        }), /* @__PURE__ */ d("label", {
          className: L("body", r || tt.defaultStyleLabel, l.disabled && tt.disabled),
          htmlFor: l.id,
          children: l.label
        })]
      })
    }, l.id))
  })
}), Vh = "_labelWrapper_jzsgi_1", Ih = "_label_jzsgi_1", Ah = "_hasHelpText_jzsgi_21", $h = "_helperText_jzsgi_75", Oh = "_errorText_jzsgi_83", Rt = {
  labelWrapper: Vh,
  label: Ih,
  hasHelpText: Ah,
  helperText: $h,
  errorText: Oh
}, Mh = ({
  label: e,
  formElementId: t,
  className: n,
  children: r,
  helperText: a,
  errorText: o,
  requiredText: i,
  labelRightText: s
}) => /* @__PURE__ */ C("div", {
  className: n,
  children: [/* @__PURE__ */ C("label", {
    className: Rt.labelWrapper,
    htmlFor: t,
    children: [/* @__PURE__ */ C("span", {
      className: L("body", Rt.label, a && Rt.hasHelpText),
      children: [/* @__PURE__ */ C("span", {
        children: [e, " ", i]
      }), s && /* @__PURE__ */ d("span", {
        children: s
      })]
    }), a && /* @__PURE__ */ d(ol, {
      className: Rt.helperText,
      children: a
    })]
  }), r, o && /* @__PURE__ */ d(rl, {
    className: Rt.errorText,
    children: o
  })]
}), Dh = "_defaultStyleLabel_1seve_1", kh = "_checkboxWrapper_1seve_13", jh = "_disabled_1seve_23", lr = {
  defaultStyleLabel: Dh,
  checkboxWrapper: kh,
  disabled: jh
}, cy = ({
  className: e,
  label: t,
  inputProps: n,
  helperText: r,
  errorText: a,
  checkboxLabel: o,
  labelRightText: i,
  visiblePassword: s = !1
}) => {
  const [l, c] = ne(s);
  G(() => {
    c(s);
  }, [s]);
  function u(p) {
    c(!l);
  }
  return /* @__PURE__ */ C(Pe, {
    children: [/* @__PURE__ */ d(Mh, {
      formElementId: n.id,
      className: e,
      label: t,
      errorText: a,
      helperText: r,
      labelRightText: i,
      children: /* @__PURE__ */ d(Vr, {
        ...n,
        type: l ? "text" : "password",
        isErroneous: !!a
      })
    }), /* @__PURE__ */ C("div", {
      className: lr.checkboxWrapper,
      children: [/* @__PURE__ */ d(Ii, {
        id: "password-checkbox",
        name: "password-checkbox",
        value: "password-checkbox",
        checked: l,
        onChange: u,
        disabled: n == null ? void 0 : n.disabled,
        "aria-controls": n.id,
        "aria-expanded": l
      }), /* @__PURE__ */ d("label", {
        htmlFor: "password-checkbox",
        className: L("body", lr.defaultStyleLabel, (n == null ? void 0 : n.disabled) && lr.disabled),
        children: o
      })]
    })]
  });
}, Bh = "_navigation_1m24j_1", Fh = "_navigationOpen_1m24j_17", Wh = "_bar_1m24j_35", qh = "_searchNavBar_1m24j_63", Uh = "_largeDeviceMenuBar_1m24j_75", zh = "_smallDeviceMenu_1m24j_91", Hh = "_menuButton_1m24j_91", Yh = "_open_1m24j_129", Gh = "_icon_1m24j_133", Kh = "_menuButtonInner_1m24j_153", Xh = "_largeDeviceMenu_1m24j_75", Zh = "_linkList_1m24j_195", Jh = "_link_1m24j_195", Qh = "_active_1m24j_261", em = "_linkItem_1m24j_343", te = {
  navigation: Bh,
  navigationOpen: Fh,
  bar: Wh,
  searchNavBar: qh,
  largeDeviceMenuBar: Uh,
  smallDeviceMenu: zh,
  menuButton: Hh,
  open: Yh,
  icon: Gh,
  menuButtonInner: Kh,
  largeDeviceMenu: Xh,
  linkList: Zh,
  link: Jh,
  active: Qh,
  linkItem: em
}, tm = "_logoPicture_13vdd_1", nm = "_logoImg_13vdd_6", rm = "_linkLogo_13vdd_14", am = "_active_13vdd_42", im = "_searchNavLinksWrapper_13vdd_55", om = "_searchNavLink_13vdd_55", sm = "_navIcon_13vdd_88", lm = "_searchComponent_13vdd_92", cm = "_innerSearchWrapper_13vdd_106", Ue = {
  logoPicture: tm,
  logoImg: nm,
  linkLogo: rm,
  active: am,
  searchNavLinksWrapper: im,
  searchNavLink: om,
  navIcon: sm,
  searchComponent: lm,
  innerSearchWrapper: cm
}, um = ({
  logo: e,
  searchNavLinks: t,
  linkComponent: n,
  searchArgs: r,
  itemsToFilterOn: a
}) => {
  const [o, i] = ne(!1), [s, l] = ne(!1), [c, u] = ne(""), [p, f] = ne([]);
  return G(() => {
    let v = new RegExp(c.toLowerCase(), "i");
    f(a.filter((h) => c && h.label && v.test(h.label.toLowerCase())));
  }, [c]), /* @__PURE__ */ C(Pe, {
    children: [e && /* @__PURE__ */ d(n, {
      to: e.href,
      className: Ue.linkLogo,
      children: /* @__PURE__ */ d(Fe, {
        ...e,
        classNamePicture: Ue.logoPicture,
        classNameImg: Ue.logoImg
      })
    }), /* @__PURE__ */ C("div", {
      className: Ue.innerSearchWrapper,
      children: [/* @__PURE__ */ d(vp, {
        className: Ue.searchComponent,
        id: "Search_Id",
        query: c,
        setQuery: u,
        results: p,
        isOpen: o,
        setIsOpen: i,
        setIsFocused: l,
        placeholder: "S\xF6k p\xE5 produkt",
        noResult: {
          label: "Din s\xF6kning gav inga tr\xE4ffar",
          text: ""
        }
      }), Array.isArray(t) && t.length && /* @__PURE__ */ d("ul", {
        className: Ue.searchNavLinksWrapper,
        children: t.map((v, h) => /* @__PURE__ */ d(n, {
          to: v.href,
          className: Ue.searchNavLink,
          children: /* @__PURE__ */ d(ce, {
            icon: v.navLinkType === "favorites" ? "icon-heart" : "icon-shopping-cart",
            className: Ue.navIcon
          })
        }, `${v.text}-${h}`))
      })]
    })]
  });
}, dm = "_topNavBar_1jinx_1", fm = "_topNavText_1jinx_14", vm = "_navLinksWrapper_1jinx_21", pm = "_topNavLink_1jinx_27", hm = "_active_1jinx_43", mm = "_navIcon_1jinx_50", Me = {
  topNavBar: dm,
  topNavText: fm,
  navLinksWrapper: vm,
  topNavLink: pm,
  active: hm,
  navIcon: mm
}, gm = ({
  topNavLinks: e,
  linkComponent: t
}) => {
  const n = e.filter((a) => a.navLinkType === "email" || a.navLinkType === "telephone"), r = e.filter((a) => a.navLinkType === "login" || a.navLinkType === "register");
  return /* @__PURE__ */ C("div", {
    className: Me.topNavBar,
    children: [Array.isArray(n) && n.length && /* @__PURE__ */ d("ul", {
      className: Me.navLinksWrapper,
      children: n.map((a, o) => /* @__PURE__ */ C("a", {
        href: a.navLinkType === "email" ? `mailto:${a.href}` : `tel:${a.href}`,
        className: Me.topNavLink,
        children: [/* @__PURE__ */ d(ce, {
          icon: a.navLinkType === "email" ? "icon-mail" : "icon-phone",
          className: Me.navIcon
        }), /* @__PURE__ */ d("span", {
          className: Me.topNavText,
          children: a.text
        })]
      }, `${a.text}-${o}`))
    }), Array.isArray(r) && r.length && /* @__PURE__ */ d("ul", {
      className: Me.navLinksWrapper,
      children: r.map((a, o) => /* @__PURE__ */ C(t, {
        to: a.href,
        className: Me.topNavLink,
        target: "_blank",
        title: a.text,
        children: [/* @__PURE__ */ d(ce, {
          icon: a.navLinkType === "register" ? "icon-plus-circle" : "icon-user",
          className: Me.navIcon
        }), /* @__PURE__ */ d("span", {
          className: Me.topNavText,
          children: a.text
        })]
      }, `${a.text}-${o}`))
    })]
  });
}, Ti = ({
  links: e = [],
  linkComponent: t
}) => /* @__PURE__ */ d("ul", {
  className: te.linkList,
  children: e.map((n, r) => /* @__PURE__ */ d("li", {
    className: te.linkItem,
    children: n.isExternal ? /* @__PURE__ */ d("a", {
      href: n.href,
      target: n.target,
      title: n.title,
      className: te.link,
      children: n.text
    }) : /* @__PURE__ */ d(t, {
      to: n.href,
      target: n.target,
      title: n.title,
      activeClassName: te.active,
      className: te.link,
      children: n.text
    })
  }, `${n.text}-${r}`))
}), _m = ({
  topNavBar: e,
  searchNavBar: t,
  links: n,
  button: r,
  linkComponent: a
}) => {
  const [o, i] = ne(!1);
  return /* @__PURE__ */ C("nav", {
    className: `${te.navigation} ${o ? te.navigationOpen : ""}`,
    children: [/* @__PURE__ */ d(gm, {
      ...e
    }), /* @__PURE__ */ C("div", {
      className: L(te.bar, te.searchNavBar),
      children: [/* @__PURE__ */ d(um, {
        ...t
      }), /* @__PURE__ */ d("button", {
        id: "navigation-menu-btn",
        type: "button",
        "aria-label": "menu",
        "aria-controls": "navigation-menu",
        "aria-expanded": o,
        onClick: () => i(!o),
        className: L(te.menuButton, o && te.open),
        children: /* @__PURE__ */ d("span", {
          className: te.menuButtonInner,
          children: /* @__PURE__ */ d(ce, {
            icon: "icon-menu",
            className: te.icon
          })
        })
      })]
    }), n != null && n.length ? /* @__PURE__ */ d("div", {
      className: L(te.bar, te.largeDeviceMenuBar),
      children: /* @__PURE__ */ d(Ti, {
        links: n,
        linkComponent: a
      })
    }) : null, ((n == null ? void 0 : n.length) || r) && /* @__PURE__ */ d(Fn, {
      initial: !1,
      children: o && /* @__PURE__ */ d(Ht.div, {
        id: "navigation-menu",
        initial: "collapsed",
        animate: "open",
        exit: "collapsed",
        variants: {
          open: {
            display: "block"
          },
          collapsed: {
            display: "none"
          }
        },
        "aria-labelledby": "navigation-menu-btn",
        children: /* @__PURE__ */ d("div", {
          className: te.smallDeviceMenu,
          children: (n == null ? void 0 : n.length) && /* @__PURE__ */ d(Ti, {
            links: n,
            linkComponent: a
          })
        })
      })
    })]
  });
};
function ym(e) {
  return !!(e.href && e.isExternal);
}
function bm(e, t) {
  return !!(e.href && t);
}
function xm(e, t, n) {
  !e || !t || (n && (t = { value: t, sessionStorageItemValidUntil: n }), typeof t == "object" && (t = JSON.stringify(t)), sessionStorage.setItem(e, t));
}
function Sm(e) {
  let t = new Date();
  return e >= t.setMinutes(t.getMinutes());
}
function Tm(e) {
  let t = sessionStorage.getItem(e);
  if (!!t)
    return (t[0] === "{" || t[0] === "[") && (t = JSON.parse(t)), t && !t.sessionStorageItemValidUntil ? t : Pm(t, e);
}
function Pm(e, t) {
  if (Sm(e.sessionStorageItemValidUntil))
    return e.value;
  Cm(t);
}
function Cm(e) {
  sessionStorage.removeItem(e);
}
const wm = "_heading_wmxrx_1", Lm = "_noMarginBottom_wmxrx_15", Em = "_preamble_wmxrx_23", Nm = "_preambleReactNode_wmxrx_45", Rm = "_list_wmxrx_87", Vm = "_listItem_wmxrx_125", Im = "_listItemHeading_wmxrx_163", Am = "_listItemPreamble_wmxrx_181", $m = "_link_wmxrx_191", Re = {
  heading: wm,
  noMarginBottom: Lm,
  preamble: Em,
  preambleReactNode: Nm,
  list: Rm,
  listItem: Vm,
  listItemHeading: Im,
  listItemPreamble: Am,
  link: $m
};
function Om(e = "") {
  const t = typeof window < "u" && e ? Tm(e) : 0;
  return t || 0;
}
const uy = ({
  heading: e,
  preamble: t,
  list: n = [],
  linkComponent: r,
  listSessionId: a
}) => {
  const o = ae(null), i = dp(o, Om(a));
  G(() => {
    o != null && o.current && (o.current.scrollLeft = i || 0);
  }, []), G(() => {
    a && xm(a, i);
  }, [i]);
  function s(l) {
    return (l == null ? void 0 : l.link) && ym(l.link) ? /* @__PURE__ */ d("a", {
      href: l.link.href,
      target: l.link.target,
      title: l.link.title,
      className: Re.link,
      children: /* @__PURE__ */ d(Xn, {
        ...l.image
      })
    }) : (l == null ? void 0 : l.link) && bm(l.link, r) ? /* @__PURE__ */ d(r, {
      to: l.link.href,
      target: l.link.target,
      title: l.link.title,
      className: Re.link,
      children: /* @__PURE__ */ d(Xn, {
        ...l.image
      })
    }) : /* @__PURE__ */ d(Xn, {
      ...l.image
    });
  }
  return /* @__PURE__ */ C("section", {
    children: [e && /* @__PURE__ */ d("h1", {
      className: `headingS ${Re.heading} ${t ? Re.noMarginBottom : ""}`,
      children: e
    }), t && Yt.isValidElement(t) ? /* @__PURE__ */ d("div", {
      className: Re.preambleReactNode,
      children: t
    }) : /* @__PURE__ */ d("p", {
      className: Re.preamble,
      children: t
    }), /* @__PURE__ */ d("ul", {
      ref: o,
      className: Re.list,
      children: n.map((l, c) => /* @__PURE__ */ C("li", {
        className: Re.listItem,
        children: [s(l), l.heading && /* @__PURE__ */ d("p", {
          className: `body bold ${Re.listItemHeading}`,
          children: l.heading
        }), l.preamble && /* @__PURE__ */ d("p", {
          className: `bodyS ${Re.listItemPreamble}`,
          children: l.preamble
        })]
      }, c))
    })]
  });
}, dy = ({
  data: e
}) => /* @__PURE__ */ C(jl, {
  children: [/* @__PURE__ */ d("thead", {
    children: /* @__PURE__ */ d("tr", {
      children: Object.keys(e[0]).map((t, n) => /* @__PURE__ */ d("th", {
        children: t
      }, `${t}-${n}`))
    })
  }), /* @__PURE__ */ d("tbody", {
    children: e.map((t, n) => /* @__PURE__ */ d("tr", {
      children: Object.values(t).map((r, a) => /* @__PURE__ */ d("td", {
        children: r
      }, `${r}-${a}`))
    }, `${t}-${n}`))
  })]
}), Mm = "_list_1eu27_1", Dm = "_listItem_1eu27_11", Pi = {
  list: Mm,
  listItem: Dm
}, fy = ({
  list: e = [],
  onAccordionBtnClick: t
}) => /* @__PURE__ */ d("ul", {
  className: Pi.list,
  children: e.map((n) => /* @__PURE__ */ d("li", {
    className: Pi.listItem,
    children: /* @__PURE__ */ d(Nv, {
      ...n,
      onAccordionBtnClick: t
    })
  }, n.id))
}), km = "_outerWrapper_3qh7z_1", jm = "_innerWrapper_3qh7z_13", Bm = "_heading_3qh7z_37", Fm = "_preamble_3qh7z_57", Wm = "_linkList_3qh7z_79", qm = "_linkListItem_3qh7z_91", pt = {
  outerWrapper: km,
  innerWrapper: jm,
  heading: Bm,
  preamble: Fm,
  linkList: Wm,
  linkListItem: qm
}, vy = ({
  heading: e,
  preamble: t,
  links: n = [],
  linkComponent: r
}) => /* @__PURE__ */ d("footer", {
  className: pt.outerWrapper,
  children: /* @__PURE__ */ C("div", {
    className: pt.innerWrapper,
    children: [e && /* @__PURE__ */ d("h1", {
      className: pt.heading,
      children: e
    }), t && /* @__PURE__ */ d("p", {
      className: L("body", pt.preamble),
      children: t
    }), n instanceof Array && n.length && /* @__PURE__ */ d("ul", {
      className: pt.linkList,
      children: n.map((a, o) => /* @__PURE__ */ d("li", {
        className: pt.linkListItem,
        children: a.isExternal ? /* @__PURE__ */ d("a", {
          href: a.href,
          target: a.target,
          children: a.text
        }) : /* @__PURE__ */ d(r, {
          to: a.href,
          children: a.text
        })
      }, `${a.text}-${o}`))
    })]
  })
}), Um = "_linkList_1twgo_1", zm = "_vertical_1twgo_13", Hm = "_horizontal_1twgo_37", Ym = "_linkListItem_1twgo_47", vn = {
  linkList: Um,
  vertical: zm,
  horizontal: Hm,
  linkListItem: Ym
}, py = ({
  links: e = [],
  linkComponent: t,
  direction: n = "vertical"
}) => /* @__PURE__ */ d(Pe, {
  children: e instanceof Array && e.length && /* @__PURE__ */ d("ul", {
    className: L(vn.linkList, n === "vertical" ? vn.vertical : vn.horizontal),
    children: e.map((r, a) => /* @__PURE__ */ d("li", {
      className: vn.linkListItem,
      children: r.isExternal ? /* @__PURE__ */ d("a", {
        href: r.href,
        target: r.target,
        children: r.text
      }) : /* @__PURE__ */ d(t, {
        to: r.href,
        children: r.text
      })
    }, `${r.text}-${a}`))
  })
}), Gm = "_dialog_wugmk_1", Km = "_innerWrapper_wugmk_3", Xm = "_overlay_wugmk_29", Zm = "_content_wugmk_43", Jm = "_noPadding_wugmk_93", Qm = "_closeBtn_wugmk_101", eg = "_icon_wugmk_163", nt = {
  dialog: Gm,
  innerWrapper: Km,
  overlay: Xm,
  content: Zm,
  noPadding: Jm,
  closeBtn: Qm,
  icon: eg
}, Ci = 0.5, tg = {
  open: {
    display: "block"
  },
  closed: {
    display: "none"
  }
}, hy = ({
  id: e,
  role: t,
  children: n,
  ariaLabelledBy: r,
  ariaDescribedBy: a,
  hasOverlay: o,
  onClose: i,
  isOpen: s,
  animationVariants: l = tg,
  focusableElementInside: c,
  noPadding: u,
  hasPortal: p = !0,
  theme: f,
  className: v
}) => {
  const h = ae(null), g = ae(null);
  us({
    ref: g,
    onClose: i
  }), fp(h, s, c), cs({
    onClose: i,
    isOpen: s
  });
  const _ = up(document.querySelector("body")), y = () => /* @__PURE__ */ d(Fn, {
    initial: !1,
    children: s && /* @__PURE__ */ C("div", {
      className: L(nt.dialog, v),
      id: e || void 0,
      role: t,
      "aria-labelledby": r,
      "aria-describedby": a,
      "aria-modal": "true",
      ref: h,
      children: [o && /* @__PURE__ */ d(Ht.div, {
        id: e,
        initial: "closed",
        animate: "open",
        exit: "closed",
        variants: {
          open: {
            display: "block"
          },
          closed: {
            display: "none"
          }
        },
        transition: {
          duration: Ci,
          ease: "easeOut"
        },
        children: /* @__PURE__ */ d("div", {
          className: nt.overlay
        })
      }), /* @__PURE__ */ d(Ht.div, {
        id: e,
        initial: "closed",
        animate: "open",
        exit: "closed",
        variants: l,
        transition: {
          duration: Ci,
          ease: "easeOut"
        },
        children: /* @__PURE__ */ d("div", {
          className: nt.innerWrapper,
          children: /* @__PURE__ */ C("div", {
            className: L(nt.content, f, u && nt.noPadding),
            ref: g,
            children: [/* @__PURE__ */ d("button", {
              className: nt.closeBtn,
              onClick: i,
              children: /* @__PURE__ */ d(ce, {
                icon: "icon-x",
                className: nt.icon
              })
            }), n]
          })
        })
      })]
    })
  });
  return p ? /* @__PURE__ */ d(_, {
    children: y()
  }) : y();
}, ng = "_offerCard_1o3yd_1", rg = "_icon_1o3yd_13", ag = "_heading_1o3yd_18", ig = "_text_1o3yd_22", pn = {
  offerCard: ng,
  icon: rg,
  heading: ag,
  text: ig
}, og = ({
  icon: e,
  heading: t,
  text: n
}) => /* @__PURE__ */ C("div", {
  className: pn.offerCard,
  children: [/* @__PURE__ */ d(ce, {
    icon: e,
    className: pn.icon
  }), /* @__PURE__ */ d("h4", {
    className: pn.heading,
    children: t
  }), /* @__PURE__ */ d("p", {
    className: L(pn.text, "body"),
    dangerouslySetInnerHTML: {
      __html: n
    }
  })]
}), sg = "_cardImageWrapper_1b0gp_1", lg = "_imageWrapper_1b0gp_14", cg = "_packageBtn_1b0gp_28", ug = "_content_1b0gp_35", dg = "_heading_1b0gp_45", fg = "_textGray_1b0gp_58", vg = "_textPurple_1b0gp_58", pg = "_cardPicture_1b0gp_79", hg = "_cardImage_1b0gp_1", De = {
  cardImageWrapper: sg,
  imageWrapper: lg,
  packageBtn: cg,
  content: ug,
  heading: dg,
  textGray: fg,
  textPurple: vg,
  cardPicture: pg,
  cardImage: hg
}, mg = "_dividerWrapper_1v86w_1", gg = "_divLeft_1v86w_16", _g = "_divCenter_1v86w_20", yg = "_divRight_1v86w_24", hn = {
  dividerWrapper: mg,
  divLeft: gg,
  divCenter: _g,
  divRight: yg
}, fs = () => /* @__PURE__ */ C("div", {
  className: hn.dividerWrapper,
  children: [/* @__PURE__ */ d("div", {
    className: hn.divLeft
  }), /* @__PURE__ */ d("div", {
    className: hn.divCenter
  }), /* @__PURE__ */ d("div", {
    className: hn.divRight
  })]
}), bg = ({
  className: e,
  image: t,
  heading: n,
  articleId: r,
  country: a,
  packaging: o,
  unitPriceStr: i,
  onClick: s
}) => /* @__PURE__ */ C("div", {
  className: `${De.cardImageWrapper} ${e || ""}`,
  children: [/* @__PURE__ */ d(An, {
    className: De.packageBtn,
    type: "button",
    surface: "tertiary",
    rounded: !0,
    onClick: s,
    children: /* @__PURE__ */ d(ce, {
      icon: "icon-layers"
    })
  }), /* @__PURE__ */ C("div", {
    className: De.imageWrapper,
    children: [/* @__PURE__ */ d(Fe, {
      ...t,
      classNamePicture: De.cardPicture,
      classNameImg: `${De.cardImage}`
    }), " "]
  }), /* @__PURE__ */ C("div", {
    className: `${De.content}`,
    children: [/* @__PURE__ */ d("p", {
      className: De.heading,
      children: n
    }), /* @__PURE__ */ d(fs, {}), /* @__PURE__ */ d("p", {
      className: De.textGray,
      children: `Art.nr. ${r} - ${a}`
    }), /* @__PURE__ */ d("p", {
      className: De.textPurple,
      children: `${o}: ${i} kr/st`
    })]
  })]
}), xg = "_inputQuantityWrapper_yem4a_1", Sg = "_quantityInputField_yem4a_7", Tg = "_textContainer_yem4a_20", Pg = "_textQuantity_yem4a_27", Cg = "_textPrice_yem4a_32", Vt = {
  inputQuantityWrapper: xg,
  quantityInputField: Sg,
  textContainer: Tg,
  textQuantity: Pg,
  textPrice: Cg
}, wg = ({
  className: e,
  quantity: t,
  quantityInputId: n,
  salesUnit: r,
  itemNumberPerSalesUnit: a,
  totalPrice: o,
  onChange: i
}) => {
  function s(l) {
    i && i(l);
  }
  return /* @__PURE__ */ C("div", {
    className: `${Vt.inputQuantityWrapper} ${e || ""}`,
    children: [/* @__PURE__ */ d(Vr, {
      id: n,
      defaultValue: t,
      placeholder: "1",
      onChange: s,
      type: "number",
      className: Vt.quantityInputField
    }), /* @__PURE__ */ C("div", {
      className: Vt.textContainer,
      children: [/* @__PURE__ */ d("p", {
        className: `${Vt.textQuantity} bodyS`,
        children: `x ${r} (${a} stick)`
      }), /* @__PURE__ */ d("p", {
        className: `${Vt.textPrice} bodyS fontBold`,
        children: `Pris: (${o} kr)`
      })]
    })]
  });
}, Lg = "_productCard_y05yr_1", Eg = "_productCardInput_y05yr_9", Ng = "_productCardBtn_y05yr_13", mn = {
  productCard: Lg,
  productCardInput: Eg,
  productCardBtn: Ng
};
function cr(e) {
  return e.toFixed(2).toString().replace(".", ",");
}
const Rg = "_productVariant_1idri_1", Vg = "_imageWrapper_1idri_8", Ig = "_picture_1idri_15", Ag = "_image_1idri_8", $g = "_content_1idri_36", Ve = {
  productVariant: Rg,
  imageWrapper: Vg,
  picture: Ig,
  image: Ag,
  content: $g
}, Og = ({
  image: e,
  productName: t,
  variantName: n,
  variantId: r,
  country: a,
  listPricePerUnitString: o,
  onChange: i,
  checked: s
}) => /* @__PURE__ */ C("div", {
  className: Ve.productVariant,
  children: [/* @__PURE__ */ C("div", {
    className: Ve.imageWrapper,
    children: [/* @__PURE__ */ d(Fe, {
      ...e,
      classNamePicture: Ve.picture,
      classNameImg: `${Ve.image}`
    }), " "]
  }), /* @__PURE__ */ C("div", {
    className: `${Ve.content}`,
    children: [/* @__PURE__ */ d("p", {
      className: Ve.heading,
      children: t
    }), /* @__PURE__ */ d("p", {
      className: Ve.heading,
      children: n
    }), /* @__PURE__ */ d(fs, {}), /* @__PURE__ */ d("p", {
      className: Ve.textGray,
      children: `Art.nr. ${r} - ${a}`
    }), /* @__PURE__ */ d("p", {
      className: Ve.textPurple,
      children: `${n}: ${o} kr/st`
    })]
  }), /* @__PURE__ */ d("div", {
    className: Ve.checkboxWrapper,
    children: /* @__PURE__ */ d(Vi, {
      id: r,
      name: `variant-radio-${t}`,
      checked: s,
      value: r,
      onChange: i
    })
  })]
}), Mg = "_variantsList_1lpnm_1", Dg = "_listItem_1lpnm_15", ur = {
  variantsList: Mg,
  listItem: Dg
}, kg = ({
  className: e,
  variantsList: t,
  onVariantSelect: n,
  selectedVariantId: r
}) => {
  const [a, o] = ne(r);
  function i(l) {
    const c = l.currentTarget.value;
    console.log("SELECTED VARIANT ID", c), o(c);
  }
  function s() {
    const l = t.find((c) => c.variantId === a);
    n(l, t);
  }
  return /* @__PURE__ */ C("div", {
    className: e || "",
    children: [/* @__PURE__ */ d("ul", {
      className: ur.variantsList,
      children: t.map((l) => /* @__PURE__ */ d("li", {
        className: ur.listItem,
        children: /* @__PURE__ */ d(Og, {
          ...l,
          onChange: i,
          checked: l.variantId === a
        }, l.variantId)
      }, l.variantId))
    }), /* @__PURE__ */ d(An, {
      className: ur.productCardBtn,
      type: "button",
      surface: "primary",
      fullWidth: !0,
      onClick: s,
      children: "V\xE4lj variant"
    })]
  });
};
function jg(e, t) {
  return {
    id: `product_${e}`,
    src: t,
    alt: "Placholder",
    loading: "eager",
    decoding: "auto",
    fetchPriority: "high",
    sources: [
      { srcset: `${t}`, media: "(max-width: 767px)" },
      { srcset: `${t}`, media: "(min-width: 768px)" }
    ]
  };
}
const Bg = ({
  productId: e,
  productName: t,
  productImageUrl: n,
  country: r,
  packaging: a,
  priceStr: o,
  price: i,
  salesUnit: s,
  itemNumberPerSalesUnit: l,
  productVariantList: c,
  button: u,
  addToCart: p
}) => {
  const [f, v] = ne({
    productId: e,
    productName: t,
    productImage: jg(e, n),
    country: r,
    packaging: a,
    priceStr: o,
    price: i,
    salesUnit: s,
    itemNumberPerSalesUnit: l,
    quantity: "1",
    totalPrice: cr(i * l),
    productVariantList: c,
    selectedVariantId: e
  }), [h, g] = ne(!1);
  function _(b) {
    const P = parseInt(b.target.value) || 1;
    v({
      ...f,
      quantity: P.toString(),
      totalPrice: cr(f.price * f.itemNumberPerSalesUnit * P)
    });
  }
  function y() {
    g(!0);
  }
  function x(b) {
    v({
      ...f,
      productId: b.variantId,
      productImage: b.image,
      country: b.country,
      packaging: b.variantName,
      priceStr: b.listPricePerUnitString,
      price: b.price,
      salesUnit: b.salesUnit,
      itemNumberPerSalesUnit: b.itemNumberPerSalesUnit,
      totalPrice: cr(b.price * b.itemNumberPerSalesUnit),
      selectedVariantId: b.variantId
    }), g(!1);
  }
  return h ? /* @__PURE__ */ d(kg, {
    className: mn.productCard,
    variantsList: f.productVariantList,
    onVariantSelect: x,
    selectedVariantId: f.selectedVariantId
  }) : /* @__PURE__ */ C("div", {
    className: mn.productCard,
    children: [/* @__PURE__ */ d(bg, {
      heading: f.productName,
      image: f.productImage,
      articleId: f.productId,
      country: f.country,
      packaging: f.packaging,
      unitPriceStr: f.priceStr,
      onClick: y
    }), /* @__PURE__ */ d(wg, {
      className: mn.productCardInput,
      salesUnit: f.salesUnit,
      itemNumberPerSalesUnit: f.itemNumberPerSalesUnit,
      totalPrice: f.totalPrice,
      quantity: f.quantity,
      quantityInputId: f.productId,
      onChange: _
    }), /* @__PURE__ */ d(An, {
      ...u,
      className: mn.productCardBtn,
      fullWidth: !0,
      onClick: () => p(f),
      children: "Add to cart"
    })]
  });
}, Fg = "_tag_8tyjh_1", Wg = "_rectangular_8tyjh_10", qg = "_small_8tyjh_11", Ug = "_large_8tyjh_21", zg = "_round_8tyjh_33", dr = {
  tag: Fg,
  rectangular: Wg,
  small: qg,
  large: Ug,
  round: zg
}, vs = ({
  text: e,
  size: t,
  shape: n,
  className: r
}) => /* @__PURE__ */ d("div", {
  className: `${dr.tag} ${dr[t]} ${dr[n]} ${r || ""}`,
  children: e
}), Hg = "_teaser_1ug5q_1", Yg = "_teaserLeft_1ug5q_13", Gg = "_teaserRight_1ug5q_19", Kg = "_imageWrapper_1ug5q_26", Xg = "_tag_1ug5q_44", Zg = "_tagLeft_1ug5q_51", Jg = "_tagRight_1ug5q_55", Qg = "_picture_1ug5q_59", e_ = "_image_1ug5q_26", t_ = "_contentWrapper_1ug5q_72", n_ = "_contentLeft_1ug5q_85", r_ = "_contentRight_1ug5q_96", a_ = "_heading_1ug5q_110", i_ = "_preamble_1ug5q_115", o_ = "_linkButton_1ug5q_119", s_ = "_text_1ug5q_123", l_ = "_textRight_1ug5q_153", J = {
  teaser: Hg,
  teaserLeft: Yg,
  teaserRight: Gg,
  imageWrapper: Kg,
  tag: Xg,
  tagLeft: Zg,
  tagRight: Jg,
  picture: Qg,
  image: e_,
  contentWrapper: t_,
  contentLeft: n_,
  contentRight: r_,
  heading: a_,
  preamble: i_,
  linkButton: o_,
  text: s_,
  textRight: l_
}, wi = ({
  heading: e,
  preamble: t,
  text: n,
  image: r,
  imagePosition: a,
  tag: o,
  tagPosition: i,
  linkButton: s,
  fullWidth: l
}) => /* @__PURE__ */ C("div", {
  className: `${J.teaser} ${a === "left" ? J.teaserLeft : J.teaserRight}`,
  children: [/* @__PURE__ */ C("div", {
    className: J.imageWrapper,
    children: [/* @__PURE__ */ d(Fe, {
      ...r,
      classNamePicture: J.picture,
      classNameImg: J.image
    }), o && /* @__PURE__ */ d(vs, {
      ...o,
      className: `${J.tag} ${i === "left" ? J.tagLeft : J.tagRight}`
    })]
  }), /* @__PURE__ */ C("div", {
    className: `${J.contentWrapper} ${a === "left" ? J.contentRight : J.contentLeft}`,
    children: [/* @__PURE__ */ d("h2", {
      className: J.heading,
      children: e
    }), t && /* @__PURE__ */ d("p", {
      className: J.preamble,
      children: t
    }), /* @__PURE__ */ d("p", {
      className: L(J.text, a === "right" && J.textRight),
      dangerouslySetInnerHTML: {
        __html: n
      }
    }), /* @__PURE__ */ d($i, {
      surface: "primary",
      ...s,
      className: J.linkButton
    })]
  })]
}), c_ = "_list_4dc64_1", u_ = "_listItem_4dc64_14", Li = {
  list: c_,
  listItem: u_
}, d_ = ({
  list: e
}) => /* @__PURE__ */ d("ul", {
  className: Li.list,
  children: e.slice(0, 4).map((t, n) => /* @__PURE__ */ d("li", {
    className: Li.listItem,
    children: /* @__PURE__ */ d(og, {
      ...t
    })
  }, n))
}), f_ = "_list_1tf3m_1", v_ = "_listItem_1tf3m_13", p_ = "_maxColumnsThree_1tf3m_33", h_ = "_maxColumnsFour_1tf3m_61", Vn = {
  list: f_,
  listItem: v_,
  maxColumnsThree: p_,
  maxColumnsFour: h_
};
function m_(e) {
  return e === 4 ? Vn.maxColumnsFour : Vn.maxColumnsThree;
}
function g_(e) {
  alert(`Adding to cart - ${e.productName} - ${e.packaging}. Quantity: ${e.quantity}, Total: ${e.totalPrice}`);
}
const my = ({
  productCards: e,
  maxColumns: t
}) => /* @__PURE__ */ d("ul", {
  className: Vn.list,
  children: e.map((n) => /* @__PURE__ */ d("li", {
    className: L(Vn.listItem, m_(t)),
    children: /* @__PURE__ */ d(Bg, {
      ...n,
      addToCart: g_
    }, n.productId)
  }, n.productId))
}), __ = "_heroCarousel_19di5_1", y_ = "_carouselContentWrapper_19di5_8", b_ = "_carouselContent_19di5_8", x_ = "_carouselPagination_19di5_31", S_ = "_paginationIndicator_19di5_38", T_ = "_paginationIndicatorActive_19di5_52", rt = {
  heroCarousel: __,
  carouselContentWrapper: y_,
  carouselContent: b_,
  carouselPagination: x_,
  paginationIndicator: S_,
  paginationIndicatorActive: T_
};
function P_(e) {
  const [t, n] = ne(0), r = 5;
  return {
    onTouchStart: (i) => {
      const s = i.touches[0].clientX;
      n(s);
    },
    onTouchMove: (i) => {
      const s = t;
      if (s === 0)
        return;
      const l = i.touches[0].clientX, c = s - l;
      c > r && e.onSwipedLeft(), c < -r && e.onSwipedRight(), n(0);
    }
  };
}
const C_ = ({
  heroComponents: e
}) => {
  const [t, n] = ne(0), [r, a] = ne(!0);
  G(() => {
    const l = setInterval(() => {
      r && o();
    }, 3e3);
    return () => {
      l && clearInterval(l);
    };
  });
  const o = () => {
    n(t === e.length - 1 ? 0 : t + 1);
  }, i = () => {
    n(t === 0 ? e.length - 1 : t - 1);
  }, s = P_({
    onSwipedLeft: () => o(),
    onSwipedRight: () => i()
  });
  return /* @__PURE__ */ C("div", {
    className: rt.heroCarousel,
    onMouseEnter: () => a(!1),
    onMouseLeave: () => a(!0),
    children: [/* @__PURE__ */ d("div", {
      className: rt.carouselContentWrapper,
      ...s,
      children: /* @__PURE__ */ d("div", {
        className: rt.carouselContent,
        style: {
          transform: `translateX(-${t * 100}%)`
        },
        children: e.map((l, c) => /* @__PURE__ */ d(Ep, {
          ...l,
          fetchPriority: c === 0 ? "high" : "auto",
          loading: c === 0 ? "eager" : "lazy"
        }, c))
      })
    }), /* @__PURE__ */ d("div", {
      className: rt.carouselPagination,
      children: e.map((l, c) => /* @__PURE__ */ d("div", {
        className: c === t ? L(rt.paginationIndicator, rt.paginationIndicatorActive) : L(rt.paginationIndicator),
        onClick: () => n(c)
      }, c))
    })]
  });
}, w_ = "_blogCard_1i8ux_1", L_ = "_fullWidth_1i8ux_9", E_ = "_pictureWrapper_1i8ux_17", N_ = "_smallHeight_1i8ux_28", R_ = "_picture_1i8ux_17", V_ = "_image_1i8ux_48", I_ = "_tag_1i8ux_61", A_ = "_content_1i8ux_67", $_ = "_centered_1i8ux_79", O_ = "_heading_1i8ux_87", M_ = "_text_1i8ux_92", pe = {
  blogCard: w_,
  fullWidth: L_,
  pictureWrapper: E_,
  smallHeight: N_,
  picture: R_,
  image: V_,
  tag: I_,
  content: A_,
  centered: $_,
  heading: O_,
  text: M_
}, ps = ({
  image: e,
  tag: t,
  heading: n,
  text: r,
  link: a,
  fullWidth: o
}) => /* @__PURE__ */ C("div", {
  className: L(pe.blogCard, o && pe.fullWidth),
  children: [e && /* @__PURE__ */ C("div", {
    className: L(pe.pictureWrapper, o && pe.smallHeight),
    children: [/* @__PURE__ */ d(Fe, {
      ...e,
      classNamePicture: pe.picture,
      classNameImg: pe.image
    }), t && /* @__PURE__ */ d(vs, {
      ...t,
      className: pe.tag
    })]
  }), /* @__PURE__ */ C("div", {
    className: L(pe.content, o && pe.centered),
    children: [/* @__PURE__ */ C("div", {
      children: [n && /* @__PURE__ */ d("h2", {
        className: pe.heading,
        children: n
      }), /* @__PURE__ */ d("p", {
        className: pe.text,
        dangerouslySetInnerHTML: {
          __html: r
        }
      })]
    }), a && /* @__PURE__ */ d(ot, {
      ...a,
      onSurface: "transparent",
      size: "default",
      className: pe.link
    })]
  })]
}), D_ = "_title_8wfuh_1", k_ = "_list_8wfuh_5", j_ = "_listItem_8wfuh_18", B_ = "_maxColumnsThree_8wfuh_23", F_ = "_maxColumnsFour_8wfuh_49", it = {
  title: D_,
  list: k_,
  listItem: j_,
  maxColumnsThree: B_,
  maxColumnsFour: F_
};
function W_(e) {
  return e === 1 ? it.fullWidth : e === 3 ? it.maxColumnsThree : it.maxColumnsFour;
}
const Ei = ({
  title: e,
  blogCards: t
}) => {
  if (!Array.isArray(t) || !t.length)
    return null;
  const n = t.slice(0, 4);
  return /* @__PURE__ */ C("div", {
    className: it.blogCardList,
    children: [e && /* @__PURE__ */ d("h3", {
      className: it.title,
      children: e
    }), /* @__PURE__ */ d("ul", {
      className: it.list,
      children: n.map((r, a) => /* @__PURE__ */ d("li", {
        className: L(it.listItem, W_(n.length)),
        children: /* @__PURE__ */ d(ps, {
          ...r,
          fullWidth: n.length === 1
        })
      }, a))
    })]
  });
}, q_ = "_contentWrapper_14r2p_1", U_ = {
  contentWrapper: q_
}, z_ = ({
  children: e
}) => /* @__PURE__ */ d("div", {
  className: U_.contentWrapper,
  children: e
}), H_ = "_maxWidth_75688_1", Y_ = "_narrow_75688_8", G_ = "_wide_75688_12", Ni = {
  maxWidth: H_,
  narrow: Y_,
  wide: G_
}, ht = ({
  children: e,
  contentMaxWidth: t
}) => /* @__PURE__ */ d("div", {
  className: L(Ni.maxWidth, Ni[t]),
  children: e
}), gy = ({
  navigation: e,
  hero: t,
  blogList_4_Col: n,
  offerCardsList: r,
  blogFullwidth: a,
  teaserRight: o,
  blogList_3_Col: i,
  teaserLeft: s
}) => /* @__PURE__ */ C(Pe, {
  children: [/* @__PURE__ */ d(_m, {
    ...e
  }), /* @__PURE__ */ C(z_, {
    children: [/* @__PURE__ */ d(C_, {
      ...t
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "wide",
      children: /* @__PURE__ */ d(Ei, {
        ...i
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "narrow",
      children: /* @__PURE__ */ d(d_, {
        ...r
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "wide",
      children: /* @__PURE__ */ d(ps, {
        ...a
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "narrow",
      children: /* @__PURE__ */ d(wi, {
        ...o
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "narrow",
      children: /* @__PURE__ */ d(wi, {
        ...s
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "wide",
      children: /* @__PURE__ */ d(Ei, {
        ...n
      })
    })]
  })]
});
export {
  Nv as Accordion,
  fy as AccordionList,
  Ei as BlogCardList,
  An as Button,
  bg as CardImage,
  ay as CardList,
  ry as CardPoster,
  iy as CardSquare,
  Gv as Card_16_9,
  oy as Card_16_9_List,
  Ii as Checkbox,
  ly as CheckboxGroup,
  z_ as ContentWrapper,
  dy as DataTable,
  ey as Details,
  hy as Dialog,
  vy as Footer,
  Mh as FormGroup,
  Ep as Hero,
  C_ as HeroCarousel,
  ce as Icon,
  ds as ImageOpacityLayer,
  rl as InlineErrorText,
  ol as InlineHelperText,
  Z_ as InputFile,
  cy as InputPasswordFormGroup,
  Vr as InputText,
  $i as LinkButton,
  py as LinkList,
  ht as MaxWidth,
  Xn as MoviePoster,
  uy as MoviePosterList,
  _m as Navigation,
  og as OfferCard,
  d_ as OfferCardList,
  ty as OrderedList,
  Fe as Picture,
  Bg as ProductCard,
  my as ProductCardList,
  wg as ProductQuantityInput,
  Og as ProductVariant,
  kg as ProductVariantList,
  Vi as RadioButton,
  sy as RadioButtonGroup,
  vp as Search,
  um as SearchNavBar,
  J_ as Select,
  gy as StartPageTemplate,
  jl as Table,
  wi as Teaser,
  Q_ as Textarea,
  gm as TopNavBar,
  ot as UILink,
  ny as UnorderedList
};
