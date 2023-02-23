import * as he from "react";
import Kt, { forwardRef as Ze, createContext as Ct, useContext as Q, useLayoutEffect as Ar, useEffect as G, useState as te, useRef as re, useCallback as Ge, useMemo as Bt, createElement as Ns, cloneElement as Rs, Children as Vs, isValidElement as Is } from "react";
import { createPortal as As, unmountComponentAtNode as $s } from "react-dom";
var Ii = { exports: {} };
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
})(Ii);
const L = Ii.exports, Os = "_button_1cr2v_1", Ms = "_disabled_1cr2v_15", Ds = "_primary_1cr2v_27", js = "_secondary_1cr2v_141", ks = "_tertiary_1cr2v_195", Bs = "_large_1cr2v_229", Fs = "_small_1cr2v_257", Ws = "_rounded_1cr2v_287", qs = "_fullWidth_1cr2v_295", Ae = {
  button: Os,
  disabled: Ms,
  primary: Ds,
  "primary-orange": "_primary-orange_1cr2v_27",
  "primary-blue": "_primary-blue_1cr2v_65",
  "primary-light_orange": "_primary-light_orange_1cr2v_103",
  secondary: js,
  tertiary: ks,
  large: Bs,
  small: Fs,
  rounded: Ws,
  fullWidth: qs
};
var $n = { exports: {} }, ft = {};
/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ua;
function Us() {
  if (ua)
    return ft;
  ua = 1;
  var e = Kt, t = 60103;
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
var Yn = {};
/** @license React v16.14.0
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var da;
function zs() {
  return da || (da = 1, function(e) {
    process.env.NODE_ENV !== "production" && function() {
      var t = Kt, n = 60103, r = 60106;
      e.Fragment = 60107;
      var a = 60108, o = 60114, i = 60109, s = 60110, l = 60112, c = 60113, u = 60120, p = 60115, f = 60116, v = 60121, h = 60122, g = 60117, _ = 60129, x = 60131;
      if (typeof Symbol == "function" && Symbol.for) {
        var b = Symbol.for;
        n = b("react.element"), r = b("react.portal"), e.Fragment = b("react.fragment"), a = b("react.strict_mode"), o = b("react.profiler"), i = b("react.provider"), s = b("react.context"), l = b("react.forward_ref"), c = b("react.suspense"), u = b("react.suspense_list"), p = b("react.memo"), f = b("react.lazy"), v = b("react.block"), h = b("react.server.block"), g = b("react.fundamental"), b("react.scope"), b("react.opaque.id"), _ = b("react.debug_trace_mode"), b("react.offscreen"), x = b("react.legacy_hidden");
      }
      var y = typeof Symbol == "function" && Symbol.iterator, C = "@@iterator";
      function N(m) {
        if (m === null || typeof m != "object")
          return null;
        var T = y && m[y] || m[C];
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
            var q = U(de.type), k = de._owner;
            W += ie(q, de._source, k && U(k.type));
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
        return !!(typeof m == "string" || typeof m == "function" || m === e.Fragment || m === o || m === _ || m === a || m === c || m === u || m === x || $ || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === p || m.$$typeof === i || m.$$typeof === s || m.$$typeof === l || m.$$typeof === g || m.$$typeof === v || m[0] === h));
      }
      var Y = /^(.*)[\\\/]/;
      function ie(m, T, E) {
        var M = "";
        if (T) {
          var W = T.fileName, q = W.replace(Y, "");
          if (/^index\./.test(q)) {
            var k = W.match(Y);
            if (k) {
              var D = k[1];
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
          for (var k in m)
            if (q(m, k)) {
              var D = void 0;
              try {
                if (typeof m[k] != "function") {
                  var le = Error((M || "React class") + ": " + E + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw le.name = "Invariant Violation", le;
                }
                D = m[k](T, k, M, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (Ce) {
                D = Ce;
              }
              D && !(D instanceof Error) && (ye(W), V("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", M || "React class", E, k, typeof D), ye(null)), D instanceof Error && !(D.message in _e) && (_e[D.message] = !0, ye(W), V("Failed %s type: %s", E, D.message), ye(null));
            }
        }
      }
      var fe = O.ReactCurrentOwner, X = Object.prototype.hasOwnProperty, j = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, w, R, K;
      K = {};
      function Je(m) {
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
      function Lt(m, T) {
        if (typeof m.ref == "string" && fe.current && T && fe.current.stateNode !== T) {
          var E = U(fe.current.type);
          K[E] || (V('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', U(fe.current.type), m.ref), K[E] = !0);
        }
      }
      function gs(m, T) {
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
      function _s(m, T) {
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
      var ys = function(m, T, E, M, W, q, k) {
        var D = {
          $$typeof: n,
          type: m,
          key: T,
          ref: E,
          props: k,
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
      function bs(m, T, E, M, W) {
        {
          var q, k = {}, D = null, le = null;
          E !== void 0 && (D = "" + E), ct(T) && (D = "" + T.key), Je(T) && (le = T.ref, Lt(T, W));
          for (q in T)
            X.call(T, q) && !j.hasOwnProperty(q) && (k[q] = T[q]);
          if (m && m.defaultProps) {
            var Ce = m.defaultProps;
            for (q in Ce)
              k[q] === void 0 && (k[q] = Ce[q]);
          }
          if (D || le) {
            var qe = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
            D && gs(k, qe), le && _s(k, qe);
          }
          return ys(m, D, le, W, M, fe.current, k);
        }
      }
      var qn = O.ReactCurrentOwner;
      O.ReactDebugCurrentFrame;
      function ut(m) {
        de = m;
      }
      var Un;
      Un = !1;
      function zn(m) {
        return typeof m == "object" && m !== null && m.$$typeof === n;
      }
      function ia() {
        {
          if (qn.current) {
            var m = U(qn.current.type);
            if (m)
              return `

Check the render method of \`` + m + "`.";
          }
          return "";
        }
      }
      function xs(m) {
        {
          if (m !== void 0) {
            var T = m.fileName.replace(/^.*[\\\/]/, ""), E = m.lineNumber;
            return `

Check your code at ` + T + ":" + E + ".";
          }
          return "";
        }
      }
      var oa = {};
      function Ss(m) {
        {
          var T = ia();
          if (!T) {
            var E = typeof m == "string" ? m : m.displayName || m.name;
            E && (T = `

Check the top-level render call using <` + E + ">.");
          }
          return T;
        }
      }
      function sa(m, T) {
        {
          if (!m._store || m._store.validated || m.key != null)
            return;
          m._store.validated = !0;
          var E = Ss(T);
          if (oa[E])
            return;
          oa[E] = !0;
          var M = "";
          m && m._owner && m._owner !== qn.current && (M = " It was passed a child from " + U(m._owner.type) + "."), ut(m), V('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, M), ut(null);
        }
      }
      function la(m, T) {
        {
          if (typeof m != "object")
            return;
          if (Array.isArray(m))
            for (var E = 0; E < m.length; E++) {
              var M = m[E];
              zn(M) && sa(M, T);
            }
          else if (zn(m))
            m._store && (m._store.validated = !0);
          else if (m) {
            var W = N(m);
            if (typeof W == "function" && W !== m.entries)
              for (var q = W.call(m), k; !(k = q.next()).done; )
                zn(k.value) && sa(k.value, T);
          }
        }
      }
      function Ts(m) {
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
          } else if (T.PropTypes !== void 0 && !Un) {
            Un = !0;
            var W = U(T);
            V("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
          }
          typeof T.getDefaultProps == "function" && !T.getDefaultProps.isReactClassApproved && V("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ps(m) {
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
      function ca(m, T, E, M, W, q) {
        {
          var k = B(m);
          if (!k) {
            var D = "";
            (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
            var le = xs(W);
            le ? D += le : D += ia();
            var Ce;
            m === null ? Ce = "null" : Array.isArray(m) ? Ce = "array" : m !== void 0 && m.$$typeof === n ? (Ce = "<" + (U(m.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : Ce = typeof m, V("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ce, D);
          }
          var qe = bs(m, T, E, W, q);
          if (qe == null)
            return qe;
          if (k) {
            var dt = T.children;
            if (dt !== void 0)
              if (M)
                if (Array.isArray(dt)) {
                  for (var Hn = 0; Hn < dt.length; Hn++)
                    la(dt[Hn], m);
                  Object.freeze && Object.freeze(dt);
                } else
                  V("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
              else
                la(dt, m);
          }
          return m === e.Fragment ? Ps(qe) : Ts(qe), qe;
        }
      }
      function Cs(m, T, E) {
        return ca(m, T, E, !0);
      }
      function ws(m, T, E) {
        return ca(m, T, E, !1);
      }
      var Ls = ws, Es = Cs;
      e.jsx = Ls, e.jsxs = Es;
    }();
  }(Yn)), Yn;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Us() : e.exports = zs();
})($n);
const d = $n.exports.jsx, P = $n.exports.jsxs, Pe = $n.exports.Fragment, St = Ze(({
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
function Xt(e, t) {
  return t ? e.error : "";
}
const Hs = "_inputText_yf5ld_1", Ys = "_error_yf5ld_53", fa = {
  inputText: Hs,
  error: Ys
}, Ft = Ze(({
  id: e,
  className: t,
  type: n = "text",
  value: r,
  defaultValue: a,
  isErroneous: o,
  required: i,
  onChange: s,
  onBlur: l,
  disabled: c,
  placeholder: u,
  other: p,
  autocomplete: f
}, v) => {
  function h(_) {
    s && s(_);
  }
  function g(_) {
    l && l(_);
  }
  return /* @__PURE__ */ d("input", {
    ref: v,
    type: n,
    className: L("body", fa.inputText, Xt(fa, o), t),
    id: e,
    value: r,
    defaultValue: a,
    onChange: h,
    onBlur: g,
    disabled: c,
    placeholder: u,
    required: i,
    autoComplete: f,
    ...p
  });
}), Gs = "_radioButton_hod4t_1", Ks = "_error_hod4t_77", va = {
  radioButton: Gs,
  error: Ks
}, Ai = Ze(({
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
    className: L("body", va.radioButton, Xt(va, o), a),
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
}), Xs = "_checkbox_78aad_1", Zs = "_error_78aad_89", pa = {
  checkbox: Xs,
  error: Zs
}, $i = Ze((e, t) => {
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
    className: L("body", pa.checkbox, Xt(pa, l), s),
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
}), Js = "_value_hzhu7_1", Qs = "_inputFile_hzhu7_9", Gn = {
  value: Js,
  inputFile: Qs
}, ny = Ze(({
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
  return /* @__PURE__ */ P("div", {
    className: L(t),
    children: [/* @__PURE__ */ P("label", {
      htmlFor: e,
      className: Gn.labelButton,
      children: [/* @__PURE__ */ d("span", {
        className: L(Ae.button, Ae.small, Ae.secondary, s && Ae.disabled),
        children: l
      }), /* @__PURE__ */ d("span", {
        className: Gn.value,
        children: n || c
      })]
    }), /* @__PURE__ */ d("input", {
      ref: p,
      type: "file",
      className: Gn.inputFile,
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
}), el = "_defaultStyling_1vkqj_1", tl = {
  defaultStyling: el
}, ae = ({
  icon: e,
  className: t
}) => /* @__PURE__ */ d("span", {
  className: L("icomoon", e, t || tl.defaultStyling)
}), nl = "_validationError_h5dsv_1", rl = "_text_h5dsv_11", al = "_icon_h5dsv_33", Kn = {
  validationError: nl,
  text: rl,
  icon: al
}, il = ({
  children: e,
  className: t
}) => /* @__PURE__ */ P("div", {
  className: L("body", Kn.validationError, t),
  children: [/* @__PURE__ */ d(ae, {
    icon: "icon-x-circle",
    className: Kn.icon
  }), /* @__PURE__ */ d("span", {
    className: Kn.text,
    children: e
  })]
}), ol = "_inlineHelper_6ltnt_1", sl = {
  inlineHelper: ol
}, ll = ({
  children: e,
  className: t
}) => /* @__PURE__ */ d("div", {
  className: L("body", sl.inlineHelper, t),
  children: e
}), cl = "_wrapper_10fys_1", ul = "_select_10fys_9", dl = "_error_10fys_49", fl = "_icon_10fys_69", an = {
  wrapper: cl,
  select: ul,
  error: dl,
  icon: fl
}, ry = Ze(({
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
    className: an.wrapper,
    children: p() && /* @__PURE__ */ P(Pe, {
      children: [/* @__PURE__ */ d("select", {
        className: L("body", an.select, Xt(an, i)),
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
        className: an.icon
      })]
    })
  });
}), vl = "_textarea_1xqx6_1", pl = "_error_1xqx6_61", ha = {
  textarea: vl,
  error: pl
}, ay = Ze(({
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
    className: L("body", ha.textarea, Xt(ha, a), t),
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
}), hl = "_picture_1l4va_1", ml = "_image_1l4va_9", ma = {
  picture: hl,
  image: ml
}, We = ({
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
  return p() ? /* @__PURE__ */ P("picture", {
    className: c || ma.picture,
    id: e,
    children: [t.map((f, v) => /* @__PURE__ */ d("source", {
      srcSet: f.srcset,
      type: f.type,
      media: f.media,
      sizes: f.sizes
    }, `${e}_source_${v}`)), /* @__PURE__ */ d("img", {
      src: n,
      className: u || ma.image,
      loading: o,
      decoding: i,
      alt: s,
      width: r,
      height: a,
      fetchpriority: l
    })]
  }) : null;
}, gl = "_link_1ai8g_1", _l = "_linkText_1ai8g_13", yl = "_transparent_1ai8g_47", bl = "_decorativeOne_1ai8g_61", xl = "_decorativeTwo_1ai8g_75", Sl = "_large_1ai8g_89", Tl = "_withIconLeft_1ai8g_97", Pl = "_withIconRight_1ai8g_103", Cl = "_icon_1ai8g_111", wl = "_iconLeft_1ai8g_165", Ll = "_iconRight_1ai8g_179", we = {
  link: gl,
  linkText: _l,
  transparent: yl,
  decorativeOne: bl,
  decorativeTwo: xl,
  large: Sl,
  withIconLeft: Tl,
  withIconRight: Pl,
  icon: Cl,
  default: "_default_1ai8g_131",
  iconLeft: wl,
  iconRight: Ll
}, Oi = ({
  children: e,
  ...t
}) => /* @__PURE__ */ d("div", {
  ...t,
  children: e
}), Oe = ({
  linkComponent: e = Oi,
  children: t,
  href: n,
  target: r,
  isExternal: a,
  title: o,
  className: i,
  iconLeft: s,
  iconRight: l,
  size: c = "default",
  onSurface: u = "transparent"
}) => /* @__PURE__ */ P(a ? "a" : e, {
  to: a ? void 0 : n,
  href: a ? n : void 0,
  target: r,
  title: o,
  className: L(we.link, we[c], we[u], s && we.withIconLeft, l && we.withIconRight, i),
  children: [s && /* @__PURE__ */ d("span", {
    className: we.iconLeft,
    children: /* @__PURE__ */ d(ae, {
      icon: s,
      className: we.icon
    })
  }), /* @__PURE__ */ d("span", {
    className: we.linkText,
    children: t
  }), l && /* @__PURE__ */ d("span", {
    className: we.iconRight,
    children: /* @__PURE__ */ d(ae, {
      icon: l,
      className: we.icon
    })
  })]
}), El = "_button_1x55y_1", Nl = "_disabled_1x55y_21", Rl = "_primary_1x55y_33", Vl = "_secondary_1x55y_171", Il = "_large_1x55y_233", Al = "_small_1x55y_261", $l = "_fullWidth_1x55y_291", on = {
  button: El,
  disabled: Nl,
  primary: Rl,
  "primary-orange": "_primary-orange_1x55y_33",
  "primary-blue": "_primary-blue_1x55y_79",
  "primary-light_orange": "_primary-light_orange_1x55y_125",
  secondary: Vl,
  large: Il,
  small: Al,
  fullWidth: $l
}, Mi = ({
  className: e,
  surface: t = "primary",
  size: n = "large",
  children: r,
  fullWidth: a,
  linkComponent: o = Oi,
  href: i,
  target: s,
  title: l,
  isExternal: c,
  id: u
}) => {
  const p = L(on.button, on[n], on[t], a && on.fullWidth, e);
  return /* @__PURE__ */ d(c ? "a" : o, {
    to: c ? void 0 : i,
    href: c ? i : void 0,
    target: s,
    title: l,
    className: p,
    id: u || void 0,
    children: r
  });
}, Ol = "_moviePoster_205wm_1", Ml = "_picture_205wm_23", Dl = "_image_205wm_37", jl = "_contain_205wm_61", Xn = {
  moviePoster: Ol,
  picture: Ml,
  image: Dl,
  contain: jl
}, Zn = (e) => /* @__PURE__ */ d(Pe, {
  children: /* @__PURE__ */ d("div", {
    className: Xn.moviePoster,
    children: /* @__PURE__ */ d(We, {
      ...e,
      classNamePicture: Xn.picture,
      classNameImg: Xn.image
    })
  })
}), kl = "_outerWrapper_haeyt_1", Bl = "_table_haeyt_11", ga = {
  outerWrapper: kl,
  table: Bl
}, Fl = ({
  children: e
}) => /* @__PURE__ */ d("div", {
  className: ga.outerWrapper,
  children: /* @__PURE__ */ d("table", {
    className: ga.table,
    children: e
  })
});
var pr = function(e, t) {
  return pr = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var a in r)
      Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
  }, pr(e, t);
};
function Di(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
  pr(e, t);
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
function Wl(e) {
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
var ql = { env: { NODE_ENV: "production" } }, Ul = typeof process > "u" ? ql : process, On = Ul, Me = function(e) {
  return {
    isEnabled: function(t) {
      return e.some(function(n) {
        return !!t[n];
      });
    }
  };
}, Wt = {
  measureLayout: Me(["layout", "layoutId", "drag"]),
  animation: Me([
    "animate",
    "exit",
    "variants",
    "whileHover",
    "whileTap",
    "whileFocus",
    "whileDrag",
    "whileInView"
  ]),
  exit: Me(["exit"]),
  drag: Me(["drag", "dragControls"]),
  focus: Me(["whileFocus"]),
  hover: Me(["whileHover", "onHoverStart", "onHoverEnd"]),
  tap: Me(["whileTap", "onTap", "onTapStart", "onTapCancel"]),
  pan: Me([
    "onPan",
    "onPanStart",
    "onPanSessionStart",
    "onPanEnd"
  ]),
  inView: Me([
    "whileInView",
    "onViewportEnter",
    "onViewportLeave"
  ])
};
function zl(e) {
  for (var t in e)
    e[t] !== null && (t === "projectionNodeConstructor" ? Wt.projectionNodeConstructor = e[t] : Wt[t].Component = e[t]);
}
var Zt = function() {
}, me = function() {
};
process.env.NODE_ENV !== "production" && (Zt = function(e, t) {
  !e && typeof console < "u" && console.warn(t);
}, me = function(e, t) {
  if (!e)
    throw new Error(t);
});
var ji = Ct({ strict: !1 }), ki = Object.keys(Wt), Hl = ki.length;
function Yl(e, t, n) {
  var r = [], a = Q(ji);
  if (!t)
    return null;
  On.env.NODE_ENV !== "production" && n && a.strict && me(!1, "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.");
  for (var o = 0; o < Hl; o++) {
    var i = ki[o], s = Wt[i], l = s.isEnabled, c = s.Component;
    l(e) && c && r.push(he.createElement(c, S({ key: i }, e, { visualElement: t })));
  }
  return r;
}
var $r = Ct({
  transformPagePoint: function(e) {
    return e;
  },
  isStatic: !1,
  reducedMotion: "never"
}), Mn = Ct({});
function Gl() {
  return Q(Mn).visualElement;
}
var Jt = Ct(null), wt = typeof document < "u", Sn = wt ? Ar : G, hr = { current: null }, Bi = !1;
function Kl() {
  if (Bi = !0, !!wt)
    if (window.matchMedia) {
      var e = window.matchMedia("(prefers-reduced-motion)"), t = function() {
        return hr.current = e.matches;
      };
      e.addListener(t), t();
    } else
      hr.current = !1;
}
function Xl() {
  !Bi && Kl();
  var e = H(te(hr.current), 1), t = e[0];
  return t;
}
function Zl() {
  var e = Xl(), t = Q($r).reducedMotion;
  return t === "never" ? !1 : t === "always" ? !0 : e;
}
function Jl(e, t, n, r) {
  var a = Q(ji), o = Gl(), i = Q(Jt), s = Zl(), l = re(void 0);
  r || (r = a.renderer), !l.current && r && (l.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceId: i == null ? void 0 : i.id,
    blockInitialAnimation: (i == null ? void 0 : i.initial) === !1,
    shouldReduceMotion: s
  }));
  var c = l.current;
  return Sn(function() {
    c == null || c.syncRender();
  }), G(function() {
    var u;
    (u = c == null ? void 0 : c.animationState) === null || u === void 0 || u.animateChanges();
  }), Sn(function() {
    return function() {
      return c == null ? void 0 : c.notifyUnmount();
    };
  }, []), c;
}
function gt(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Ql(e, t, n) {
  return Ge(
    function(r) {
      var a;
      r && ((a = e.mount) === null || a === void 0 || a.call(e, r)), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : gt(n) && (n.current = r));
    },
    [t]
  );
}
function Fi(e) {
  return Array.isArray(e);
}
function xe(e) {
  return typeof e == "string" || Fi(e);
}
function ec(e) {
  var t = {};
  return e.forEachValue(function(n, r) {
    return t[r] = n.get();
  }), t;
}
function tc(e) {
  var t = {};
  return e.forEachValue(function(n, r) {
    return t[r] = n.getVelocity();
  }), t;
}
function Wi(e, t, n, r, a) {
  var o;
  return r === void 0 && (r = {}), a === void 0 && (a = {}), typeof t == "function" && (t = t(n != null ? n : e.custom, r, a)), typeof t == "string" && (t = (o = e.variants) === null || o === void 0 ? void 0 : o[t]), typeof t == "function" && (t = t(n != null ? n : e.custom, r, a)), t;
}
function Dn(e, t, n) {
  var r = e.getProps();
  return Wi(r, t, n != null ? n : r.custom, ec(e), tc(e));
}
function jn(e) {
  var t;
  return typeof ((t = e.animate) === null || t === void 0 ? void 0 : t.start) == "function" || xe(e.initial) || xe(e.animate) || xe(e.whileHover) || xe(e.whileDrag) || xe(e.whileTap) || xe(e.whileFocus) || xe(e.exit);
}
function qi(e) {
  return Boolean(jn(e) || e.variants);
}
function nc(e, t) {
  if (jn(e)) {
    var n = e.initial, r = e.animate;
    return {
      initial: n === !1 || xe(n) ? n : void 0,
      animate: xe(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function rc(e) {
  var t = nc(e, Q(Mn)), n = t.initial, r = t.animate;
  return Bt(function() {
    return { initial: n, animate: r };
  }, [_a(n), _a(r)]);
}
function _a(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
function Qt(e) {
  var t = re(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ui = 1 / 60 * 1e3, ac = typeof performance < "u" ? () => performance.now() : () => Date.now(), zi = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(ac()), Ui);
function ic(e) {
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
const oc = 40;
let mr = !0, qt = !1, gr = !1;
const bt = {
  delta: 0,
  timestamp: 0
}, en = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], kn = en.reduce((e, t) => (e[t] = ic(() => qt = !0), e), {}), Te = en.reduce((e, t) => {
  const n = kn[t];
  return e[t] = (r, a = !1, o = !1) => (qt || lc(), n.schedule(r, a, o)), e;
}, {}), Tt = en.reduce((e, t) => (e[t] = kn[t].cancel, e), {}), Jn = en.reduce((e, t) => (e[t] = () => kn[t].process(bt), e), {}), sc = (e) => kn[e].process(bt), Hi = (e) => {
  qt = !1, bt.delta = mr ? Ui : Math.max(Math.min(e - bt.timestamp, oc), 1), bt.timestamp = e, gr = !0, en.forEach(sc), gr = !1, qt && (mr = !1, zi(Hi));
}, lc = () => {
  qt = !0, mr = !0, gr || zi(Hi);
}, Tn = () => bt, Pn = (e, t, n) => Math.min(Math.max(n, e), t), Qn = 1e-3, cc = 0.01, ya = 10, uc = 0.05, dc = 1;
function fc({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let a, o;
  Zt(e <= ya * 1e3, "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = Pn(uc, dc, i), e = Pn(cc, ya, e / 1e3), i < 1 ? (a = (c) => {
    const u = c * i, p = u * e, f = u - n, v = _r(c, i), h = Math.exp(-p);
    return Qn - f / v * h;
  }, o = (c) => {
    const p = c * i * e, f = p * n + n, v = Math.pow(i, 2) * Math.pow(c, 2) * e, h = Math.exp(-p), g = _r(Math.pow(c, 2), i);
    return (-a(c) + Qn > 0 ? -1 : 1) * ((f - v) * h) / g;
  }) : (a = (c) => {
    const u = Math.exp(-c * e), p = (c - n) * e + 1;
    return -Qn + u * p;
  }, o = (c) => {
    const u = Math.exp(-c * e), p = (n - c) * (e * e);
    return u * p;
  });
  const s = 5 / e, l = pc(a, o, s);
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
const vc = 12;
function pc(e, t, n) {
  let r = n;
  for (let a = 1; a < vc; a++)
    r = r - e(r) / t(r);
  return r;
}
function _r(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const hc = ["duration", "bounce"], mc = ["stiffness", "damping", "mass"];
function ba(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function gc(e) {
  let t = Object.assign({ velocity: 0, stiffness: 100, damping: 10, mass: 1, isResolvedFromDuration: !1 }, e);
  if (!ba(e, mc) && ba(e, hc)) {
    const n = fc(e);
    t = Object.assign(Object.assign(Object.assign({}, t), n), { velocity: 0, mass: 1 }), t.isResolvedFromDuration = !0;
  }
  return t;
}
function Or(e) {
  var { from: t = 0, to: n = 1, restSpeed: r = 2, restDelta: a } = e, o = ge(e, ["from", "to", "restSpeed", "restDelta"]);
  const i = { done: !1, value: t };
  let { stiffness: s, damping: l, mass: c, velocity: u, duration: p, isResolvedFromDuration: f } = gc(o), v = xa, h = xa;
  function g() {
    const _ = u ? -(u / 1e3) : 0, x = n - t, b = l / (2 * Math.sqrt(s * c)), y = Math.sqrt(s / c) / 1e3;
    if (a === void 0 && (a = Math.min(Math.abs(n - t) / 100, 0.4)), b < 1) {
      const C = _r(y, b);
      v = (N) => {
        const O = Math.exp(-b * y * N);
        return n - O * ((_ + b * y * x) / C * Math.sin(C * N) + x * Math.cos(C * N));
      }, h = (N) => {
        const O = Math.exp(-b * y * N);
        return b * y * O * (Math.sin(C * N) * (_ + b * y * x) / C + x * Math.cos(C * N)) - O * (Math.cos(C * N) * (_ + b * y * x) - C * x * Math.sin(C * N));
      };
    } else if (b === 1)
      v = (C) => n - Math.exp(-y * C) * (x + (_ + y * x) * C);
    else {
      const C = y * Math.sqrt(b * b - 1);
      v = (N) => {
        const O = Math.exp(-b * y * N), V = Math.min(C * N, 300);
        return n - O * ((_ + b * y * x) * Math.sinh(V) + C * x * Math.cosh(V)) / C;
      };
    }
  }
  return g(), {
    next: (_) => {
      const x = v(_);
      if (f)
        i.done = _ >= p;
      else {
        const b = h(_) * 1e3, y = Math.abs(b) <= r, C = Math.abs(n - x) <= a;
        i.done = y && C;
      }
      return i.value = i.done ? n : x, i;
    },
    flipTarget: () => {
      u = -u, [t, n] = [n, t], g();
    }
  };
}
Or.needsInterpolation = (e, t) => typeof e == "string" || typeof t == "string";
const xa = (e) => 0, Ut = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, z = (e, t, n) => -n * e + n * t + e, Yi = (e, t) => (n) => Math.max(Math.min(n, t), e), At = (e) => e % 1 ? Number(e.toFixed(5)) : e, zt = /(-)?([\d]*\.?[\d])+/g, yr = /(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))/gi, _c = /^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2,3}\s*\/*\s*[\d\.]+%?\))$/i;
function tn(e) {
  return typeof e == "string";
}
const st = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, $t = Object.assign(Object.assign({}, st), { transform: Yi(0, 1) }), sn = Object.assign(Object.assign({}, st), { default: 1 }), nn = (e) => ({
  test: (t) => tn(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), He = nn("deg"), $e = nn("%"), I = nn("px"), yc = nn("vh"), bc = nn("vw"), Sa = Object.assign(Object.assign({}, $e), { parse: (e) => $e.parse(e) / 100, transform: (e) => $e.transform(e * 100) }), Mr = (e, t) => (n) => Boolean(tn(n) && _c.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Gi = (e, t, n) => (r) => {
  if (!tn(r))
    return r;
  const [a, o, i, s] = r.match(zt);
  return {
    [e]: parseFloat(a),
    [t]: parseFloat(o),
    [n]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, it = {
  test: Mr("hsl", "hue"),
  parse: Gi("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + $e.transform(At(t)) + ", " + $e.transform(At(n)) + ", " + At($t.transform(r)) + ")"
}, xc = Yi(0, 255), er = Object.assign(Object.assign({}, st), { transform: (e) => Math.round(xc(e)) }), Ke = {
  test: Mr("rgb", "red"),
  parse: Gi("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + er.transform(e) + ", " + er.transform(t) + ", " + er.transform(n) + ", " + At($t.transform(r)) + ")"
};
function Sc(e) {
  let t = "", n = "", r = "", a = "";
  return e.length > 5 ? (t = e.substr(1, 2), n = e.substr(3, 2), r = e.substr(5, 2), a = e.substr(7, 2)) : (t = e.substr(1, 1), n = e.substr(2, 1), r = e.substr(3, 1), a = e.substr(4, 1), t += t, n += n, r += r, a += a), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: a ? parseInt(a, 16) / 255 : 1
  };
}
const br = {
  test: Mr("#"),
  parse: Sc,
  transform: Ke.transform
}, ne = {
  test: (e) => Ke.test(e) || br.test(e) || it.test(e),
  parse: (e) => Ke.test(e) ? Ke.parse(e) : it.test(e) ? it.parse(e) : br.parse(e),
  transform: (e) => tn(e) ? e : e.hasOwnProperty("red") ? Ke.transform(e) : it.transform(e)
}, Ki = "${c}", Xi = "${n}";
function Tc(e) {
  var t, n, r, a;
  return isNaN(e) && tn(e) && ((n = (t = e.match(zt)) === null || t === void 0 ? void 0 : t.length) !== null && n !== void 0 ? n : 0) + ((a = (r = e.match(yr)) === null || r === void 0 ? void 0 : r.length) !== null && a !== void 0 ? a : 0) > 0;
}
function Zi(e) {
  typeof e == "number" && (e = `${e}`);
  const t = [];
  let n = 0;
  const r = e.match(yr);
  r && (n = r.length, e = e.replace(yr, Ki), t.push(...r.map(ne.parse)));
  const a = e.match(zt);
  return a && (e = e.replace(zt, Xi), t.push(...a.map(st.parse))), { values: t, numColors: n, tokenised: e };
}
function Ji(e) {
  return Zi(e).values;
}
function Qi(e) {
  const { values: t, numColors: n, tokenised: r } = Zi(e), a = t.length;
  return (o) => {
    let i = r;
    for (let s = 0; s < a; s++)
      i = i.replace(s < n ? Ki : Xi, s < n ? ne.transform(o[s]) : At(o[s]));
    return i;
  };
}
const Pc = (e) => typeof e == "number" ? 0 : e;
function Cc(e) {
  const t = Ji(e);
  return Qi(e)(t.map(Pc));
}
const ke = { test: Tc, parse: Ji, createTransformer: Qi, getAnimatableNone: Cc }, wc = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Lc(e) {
  let [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(zt) || [];
  if (!r)
    return e;
  const a = n.replace(r, "");
  let o = wc.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + a + ")";
}
const Ec = /([a-z-]*)\(.*?\)/g, xr = Object.assign(Object.assign({}, ke), { getAnimatableNone: (e) => {
  const t = e.match(Ec);
  return t ? t.map(Lc).join(" ") : e;
} });
function tr(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function Ta({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let a = 0, o = 0, i = 0;
  if (!t)
    a = o = i = n;
  else {
    const s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
    a = tr(l, s, e + 1 / 3), o = tr(l, s, e), i = tr(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(a * 255),
    green: Math.round(o * 255),
    blue: Math.round(i * 255),
    alpha: r
  };
}
const Nc = (e, t, n) => {
  const r = e * e, a = t * t;
  return Math.sqrt(Math.max(0, n * (a - r) + r));
}, Rc = [br, Ke, it], Pa = (e) => Rc.find((t) => t.test(e)), Ca = (e) => `'${e}' is not an animatable color. Use the equivalent color code instead.`, eo = (e, t) => {
  let n = Pa(e), r = Pa(t);
  me(!!n, Ca(e)), me(!!r, Ca(t));
  let a = n.parse(e), o = r.parse(t);
  n === it && (a = Ta(a), n = Ke), r === it && (o = Ta(o), r = Ke);
  const i = Object.assign({}, a);
  return (s) => {
    for (const l in i)
      l !== "alpha" && (i[l] = Nc(a[l], o[l], s));
    return i.alpha = z(a.alpha, o.alpha, s), n.transform(i);
  };
}, Sr = (e) => typeof e == "number", Vc = (e, t) => (n) => t(e(n)), Bn = (...e) => e.reduce(Vc);
function to(e, t) {
  return Sr(e) ? (n) => z(e, t, n) : ne.test(e) ? eo(e, t) : ro(e, t);
}
const no = (e, t) => {
  const n = [...e], r = n.length, a = e.map((o, i) => to(o, t[i]));
  return (o) => {
    for (let i = 0; i < r; i++)
      n[i] = a[i](o);
    return n;
  };
}, Ic = (e, t) => {
  const n = Object.assign(Object.assign({}, e), t), r = {};
  for (const a in n)
    e[a] !== void 0 && t[a] !== void 0 && (r[a] = to(e[a], t[a]));
  return (a) => {
    for (const o in r)
      n[o] = r[o](a);
    return n;
  };
};
function wa(e) {
  const t = ke.parse(e), n = t.length;
  let r = 0, a = 0, o = 0;
  for (let i = 0; i < n; i++)
    r || typeof t[i] == "number" ? r++ : t[i].hue !== void 0 ? o++ : a++;
  return { parsed: t, numNumbers: r, numRGB: a, numHSL: o };
}
const ro = (e, t) => {
  const n = ke.createTransformer(t), r = wa(e), a = wa(t);
  return r.numHSL === a.numHSL && r.numRGB === a.numRGB && r.numNumbers >= a.numNumbers ? Bn(no(r.parsed, a.parsed), n) : (Zt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), (i) => `${i > 0 ? t : e}`);
}, Ac = (e, t) => (n) => z(e, t, n);
function $c(e) {
  if (typeof e == "number")
    return Ac;
  if (typeof e == "string")
    return ne.test(e) ? eo : ro;
  if (Array.isArray(e))
    return no;
  if (typeof e == "object")
    return Ic;
}
function Oc(e, t, n) {
  const r = [], a = n || $c(e[0]), o = e.length - 1;
  for (let i = 0; i < o; i++) {
    let s = a(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] : t;
      s = Bn(l, s);
    }
    r.push(s);
  }
  return r;
}
function Mc([e, t], [n]) {
  return (r) => n(Ut(e, t, r));
}
function Dc(e, t) {
  const n = e.length, r = n - 1;
  return (a) => {
    let o = 0, i = !1;
    if (a <= e[0] ? i = !0 : a >= e[r] && (o = r - 1, i = !0), !i) {
      let l = 1;
      for (; l < n && !(e[l] > a || l === r); l++)
        ;
      o = l - 1;
    }
    const s = Ut(e[o], e[o + 1], a);
    return t[o](s);
  };
}
function ao(e, t, { clamp: n = !0, ease: r, mixer: a } = {}) {
  const o = e.length;
  me(o === t.length, "Both input and output ranges must be the same length"), me(!r || !Array.isArray(r) || r.length === o - 1, "Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."), e[0] > e[o - 1] && (e = [].concat(e), t = [].concat(t), e.reverse(), t.reverse());
  const i = Oc(t, r, a), s = o === 2 ? Mc(e, i) : Dc(e, i);
  return n ? (l) => s(Pn(e[0], e[o - 1], l)) : s;
}
const Fn = (e) => (t) => 1 - e(1 - t), Dr = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, jc = (e) => (t) => Math.pow(t, e), io = (e) => (t) => t * t * ((e + 1) * t - e), kc = (e) => {
  const t = io(e);
  return (n) => (n *= 2) < 1 ? 0.5 * t(n) : 0.5 * (2 - Math.pow(2, -10 * (n - 1)));
}, oo = 1.525, Bc = 4 / 11, Fc = 8 / 11, Wc = 9 / 10, jr = (e) => e, kr = jc(2), qc = Fn(kr), so = Dr(kr), lo = (e) => 1 - Math.sin(Math.acos(e)), Br = Fn(lo), Uc = Dr(Br), Fr = io(oo), zc = Fn(Fr), Hc = Dr(Fr), Yc = kc(oo), Gc = 4356 / 361, Kc = 35442 / 1805, Xc = 16061 / 1805, Cn = (e) => {
  if (e === 1 || e === 0)
    return e;
  const t = e * e;
  return e < Bc ? 7.5625 * t : e < Fc ? 9.075 * t - 9.9 * e + 3.4 : e < Wc ? Gc * t - Kc * e + Xc : 10.8 * e * e - 20.52 * e + 10.72;
}, Zc = Fn(Cn), Jc = (e) => e < 0.5 ? 0.5 * (1 - Cn(1 - e * 2)) : 0.5 * Cn(e * 2 - 1) + 0.5;
function Qc(e, t) {
  return e.map(() => t || so).splice(0, e.length - 1);
}
function eu(e) {
  const t = e.length;
  return e.map((n, r) => r !== 0 ? r / (t - 1) : 0);
}
function tu(e, t) {
  return e.map((n) => n * t);
}
function yn({ from: e = 0, to: t = 1, ease: n, offset: r, duration: a = 300 }) {
  const o = { done: !1, value: e }, i = Array.isArray(t) ? t : [e, t], s = tu(r && r.length === i.length ? r : eu(i), a);
  function l() {
    return ao(s, i, {
      ease: Array.isArray(n) ? n : Qc(i, n)
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
function nu({ velocity: e = 0, from: t = 0, power: n = 0.8, timeConstant: r = 350, restDelta: a = 0.5, modifyTarget: o }) {
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
const La = { keyframes: yn, spring: Or, decay: nu };
function ru(e) {
  if (Array.isArray(e.to))
    return yn;
  if (La[e.type])
    return La[e.type];
  const t = new Set(Object.keys(e));
  return t.has("ease") || t.has("duration") && !t.has("dampingRatio") ? yn : t.has("dampingRatio") || t.has("stiffness") || t.has("mass") || t.has("damping") || t.has("restSpeed") || t.has("restDelta") ? Or : yn;
}
function co(e, t, n = 0) {
  return e - t - n;
}
function au(e, t, n = 0, r = !0) {
  return r ? co(t + -e, t, n) : t - (e - t) + n;
}
function iu(e, t, n, r) {
  return r ? e >= t + n : e <= -n;
}
const ou = (e) => {
  const t = ({ delta: n }) => e(n);
  return {
    start: () => Te.update(t, !0),
    stop: () => Tt.update(t)
  };
};
function uo(e) {
  var t, n, { from: r, autoplay: a = !0, driver: o = ou, elapsed: i = 0, repeat: s = 0, repeatType: l = "loop", repeatDelay: c = 0, onPlay: u, onStop: p, onComplete: f, onRepeat: v, onUpdate: h } = e, g = ge(e, ["from", "autoplay", "driver", "elapsed", "repeat", "repeatType", "repeatDelay", "onPlay", "onStop", "onComplete", "onRepeat", "onUpdate"]);
  let { to: _ } = g, x, b = 0, y = g.duration, C, N = !1, O = !0, V;
  const A = ru(g);
  !((n = (t = A).needsInterpolation) === null || n === void 0) && n.call(t, r, _) && (V = ao([0, 100], [r, _], {
    clamp: !1
  }), r = 0, _ = 100);
  const $ = A(Object.assign(Object.assign({}, g), { from: r, to: _ }));
  function B() {
    b++, l === "reverse" ? (O = b % 2 === 0, i = au(i, y, c, O)) : (i = co(i, y, c), l === "mirror" && $.flipTarget()), N = !1, v && v();
  }
  function Y() {
    x.stop(), f && f();
  }
  function ie(oe) {
    if (O || (oe = -oe), i += oe, !N) {
      const se = $.next(Math.max(0, i));
      C = se.value, V && (C = V(C)), N = O ? se.done : i <= 0;
    }
    h == null || h(C), N && (b === 0 && (y != null || (y = i)), b < s ? iu(i, y, c, O) && B() : Y());
  }
  function Z() {
    u == null || u(), x = o(ie), x.start();
  }
  return a && Z(), {
    stop: () => {
      p == null || p(), x.stop();
    }
  };
}
function fo(e, t) {
  return t ? e * (1e3 / t) : 0;
}
function su({ from: e = 0, velocity: t = 0, min: n, max: r, power: a = 0.8, timeConstant: o = 750, bounceStiffness: i = 500, bounceDamping: s = 10, restDelta: l = 1, modifyTarget: c, driver: u, onUpdate: p, onComplete: f, onStop: v }) {
  let h;
  function g(y) {
    return n !== void 0 && y < n || r !== void 0 && y > r;
  }
  function _(y) {
    return n === void 0 ? r : r === void 0 || Math.abs(n - y) < Math.abs(r - y) ? n : r;
  }
  function x(y) {
    h == null || h.stop(), h = uo(Object.assign(Object.assign({}, y), {
      driver: u,
      onUpdate: (C) => {
        var N;
        p == null || p(C), (N = y.onUpdate) === null || N === void 0 || N.call(y, C);
      },
      onComplete: f,
      onStop: v
    }));
  }
  function b(y) {
    x(Object.assign({ type: "spring", stiffness: i, damping: s, restDelta: l }, y));
  }
  if (g(e))
    b({ from: e, velocity: t, to: _(e) });
  else {
    let y = a * t + e;
    typeof c < "u" && (y = c(y));
    const C = _(y), N = C === n ? -1 : 1;
    let O, V;
    const A = ($) => {
      O = V, V = $, t = fo($ - O, Tn().delta), (N === 1 && $ > C || N === -1 && $ < C) && b({ from: $, to: C, velocity: t });
    };
    x({
      type: "decay",
      from: e,
      velocity: t,
      timeConstant: o,
      power: a,
      restDelta: l,
      modifyTarget: c,
      onUpdate: g(y) ? A : void 0
    });
  }
  return {
    stop: () => h == null ? void 0 : h.stop()
  };
}
const Tr = (e) => e.hasOwnProperty("x") && e.hasOwnProperty("y"), Ea = (e) => Tr(e) && e.hasOwnProperty("z"), ln = (e, t) => Math.abs(e - t);
function vo(e, t) {
  if (Sr(e) && Sr(t))
    return ln(e, t);
  if (Tr(e) && Tr(t)) {
    const n = ln(e.x, t.x), r = ln(e.y, t.y), a = Ea(e) && Ea(t) ? ln(e.z, t.z) : 0;
    return Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2) + Math.pow(a, 2));
  }
}
const po = (e, t) => 1 - 3 * t + 3 * e, ho = (e, t) => 3 * t - 6 * e, mo = (e) => 3 * e, wn = (e, t, n) => ((po(t, n) * e + ho(t, n)) * e + mo(t)) * e, go = (e, t, n) => 3 * po(t, n) * e * e + 2 * ho(t, n) * e + mo(t), lu = 1e-7, cu = 10;
function uu(e, t, n, r, a) {
  let o, i, s = 0;
  do
    i = t + (n - t) / 2, o = wn(i, r, a) - e, o > 0 ? n = i : t = i;
  while (Math.abs(o) > lu && ++s < cu);
  return i;
}
const du = 8, fu = 1e-3;
function vu(e, t, n, r) {
  for (let a = 0; a < du; ++a) {
    const o = go(t, n, r);
    if (o === 0)
      return t;
    const i = wn(t, n, r) - e;
    t -= i / o;
  }
  return t;
}
const bn = 11, cn = 1 / (bn - 1);
function pu(e, t, n, r) {
  if (e === t && n === r)
    return jr;
  const a = new Float32Array(bn);
  for (let i = 0; i < bn; ++i)
    a[i] = wn(i * cn, e, n);
  function o(i) {
    let s = 0, l = 1;
    const c = bn - 1;
    for (; l !== c && a[l] <= i; ++l)
      s += cn;
    --l;
    const u = (i - a[l]) / (a[l + 1] - a[l]), p = s + u * cn, f = go(p, e, n);
    return f >= fu ? vu(i, p, e, n) : f === 0 ? p : uu(i, s, s + cn, e, n);
  }
  return (i) => i === 0 || i === 1 ? i : wn(o(i), t, r);
}
function Wr(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function qr(e, t) {
  var n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
var Ot = function() {
  function e() {
    this.subscriptions = [];
  }
  return e.prototype.add = function(t) {
    var n = this;
    return Wr(this.subscriptions, t), function() {
      return qr(n.subscriptions, t);
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
}(), hu = function(e) {
  return !isNaN(parseFloat(e));
}, mu = function() {
  function e(t) {
    var n = this;
    this.timeDelta = 0, this.lastUpdated = 0, this.updateSubscribers = new Ot(), this.velocityUpdateSubscribers = new Ot(), this.renderSubscribers = new Ot(), this.canTrackVelocity = !1, this.updateAndNotify = function(r, a) {
      a === void 0 && (a = !0), n.prev = n.current, n.current = r;
      var o = Tn(), i = o.delta, s = o.timestamp;
      n.lastUpdated !== s && (n.timeDelta = i, n.lastUpdated = s, Te.postRender(n.scheduleVelocityCheck)), n.prev !== n.current && n.updateSubscribers.notify(n.current), n.velocityUpdateSubscribers.getSize() && n.velocityUpdateSubscribers.notify(n.getVelocity()), a && n.renderSubscribers.notify(n.current);
    }, this.scheduleVelocityCheck = function() {
      return Te.postRender(n.velocityCheck);
    }, this.velocityCheck = function(r) {
      var a = r.timestamp;
      a !== n.lastUpdated && (n.prev = n.current, n.velocityUpdateSubscribers.notify(n.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = hu(this.current);
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
    return this.canTrackVelocity ? fo(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0;
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
function Pt(e) {
  return new mu(e);
}
var Be = function(e) {
  return Boolean(e !== null && typeof e == "object" && e.getVelocity);
}, Ln = function(e) {
  return e * 1e3;
}, Na = {
  linear: jr,
  easeIn: kr,
  easeInOut: so,
  easeOut: qc,
  circIn: lo,
  circInOut: Uc,
  circOut: Br,
  backIn: Fr,
  backInOut: Hc,
  backOut: zc,
  anticipate: Yc,
  bounceIn: Zc,
  bounceInOut: Jc,
  bounceOut: Cn
}, Ra = function(e) {
  if (Array.isArray(e)) {
    me(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    var t = H(e, 4), n = t[0], r = t[1], a = t[2], o = t[3];
    return pu(n, r, a, o);
  } else if (typeof e == "string")
    return me(Na[e] !== void 0, "Invalid easing type '".concat(e, "'")), Na[e];
  return e;
}, gu = function(e) {
  return Array.isArray(e) && typeof e[0] != "number";
}, Va = function(e, t) {
  return e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && ke.test(t) && !t.startsWith("url("));
}, Ht = function(e) {
  return Array.isArray(e);
}, Qe = function() {
  return {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
  };
}, un = function(e) {
  return {
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  };
}, nr = function() {
  return {
    type: "keyframes",
    ease: "linear",
    duration: 0.3
  };
}, _u = function(e) {
  return {
    type: "keyframes",
    duration: 0.8,
    values: e
  };
}, Ia = {
  x: Qe,
  y: Qe,
  z: Qe,
  rotate: Qe,
  rotateX: Qe,
  rotateY: Qe,
  rotateZ: Qe,
  scaleX: un,
  scaleY: un,
  scale: un,
  opacity: nr,
  backgroundColor: nr,
  color: nr,
  default: un
}, yu = function(e, t) {
  var n;
  return Ht(t) ? n = _u : n = Ia[e] || Ia.default, S({ to: t }, n(t));
}, Aa = S(S({}, st), { transform: Math.round }), _o = {
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
  rotate: He,
  rotateX: He,
  rotateY: He,
  rotateZ: He,
  scale: sn,
  scaleX: sn,
  scaleY: sn,
  scaleZ: sn,
  skew: He,
  skewX: He,
  skewY: He,
  distance: I,
  translateX: I,
  translateY: I,
  translateZ: I,
  x: I,
  y: I,
  z: I,
  perspective: I,
  transformPerspective: I,
  opacity: $t,
  originX: Sa,
  originY: Sa,
  originZ: I,
  zIndex: Aa,
  fillOpacity: $t,
  strokeOpacity: $t,
  numOctaves: Aa
}, bu = S(S({}, _o), {
  color: ne,
  backgroundColor: ne,
  outlineColor: ne,
  fill: ne,
  stroke: ne,
  borderColor: ne,
  borderTopColor: ne,
  borderRightColor: ne,
  borderBottomColor: ne,
  borderLeftColor: ne,
  filter: xr,
  WebkitFilter: xr
}), Ur = function(e) {
  return bu[e];
};
function zr(e, t) {
  var n, r = Ur(e);
  return r !== xr && (r = ke), (n = r.getAnimatableNone) === null || n === void 0 ? void 0 : n.call(r, t);
}
var xu = {
  current: !1
}, Su = function(e) {
  return Boolean(e && typeof e == "object" && e.mix && e.toValue);
}, yo = function(e) {
  return Ht(e) ? e[e.length - 1] || 0 : e;
};
function Tu(e) {
  e.when, e.delay, e.delayChildren, e.staggerChildren, e.staggerDirection, e.repeat, e.repeatType, e.repeatDelay, e.from;
  var t = ge(e, ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from"]);
  return !!Object.keys(t).length;
}
var $a = !1;
function Pu(e) {
  var t = e.ease, n = e.times, r = e.yoyo, a = e.flip, o = e.loop, i = ge(e, ["ease", "times", "yoyo", "flip", "loop"]), s = S({}, i);
  return n && (s.offset = n), i.duration && (s.duration = Ln(i.duration)), i.repeatDelay && (s.repeatDelay = Ln(i.repeatDelay)), t && (s.ease = gu(t) ? t.map(Ra) : Ra(t)), i.type === "tween" && (s.type = "keyframes"), (r || o || a) && (Zt(!$a, "yoyo, loop and flip have been removed from the API. Replace with repeat and repeatType options."), $a = !0, r ? s.repeatType = "reverse" : o ? s.repeatType = "loop" : a && (s.repeatType = "mirror"), s.repeat = o || r || a || i.repeat), i.type !== "spring" && (s.type = "keyframes"), s;
}
function Cu(e, t) {
  var n, r, a = Hr(e, t) || {};
  return (r = (n = a.delay) !== null && n !== void 0 ? n : e.delay) !== null && r !== void 0 ? r : 0;
}
function wu(e) {
  return Array.isArray(e.to) && e.to[0] === null && (e.to = Se([], H(e.to), !1), e.to[0] = e.from), e;
}
function Lu(e, t, n) {
  var r;
  return Array.isArray(t.to) && ((r = e.duration) !== null && r !== void 0 || (e.duration = 0.8)), wu(t), Tu(e) || (e = S(S({}, e), yu(n, t.to))), S(S({}, t), Pu(e));
}
function Eu(e, t, n, r, a) {
  var o, i = Hr(r, e), s = (o = i.from) !== null && o !== void 0 ? o : t.get(), l = Va(e, n);
  s === "none" && l && typeof n == "string" ? s = zr(e, n) : Oa(s) && typeof n == "string" ? s = Ma(n) : !Array.isArray(n) && Oa(n) && typeof s == "string" && (n = Ma(s));
  var c = Va(e, s);
  Zt(c === l, "You are trying to animate ".concat(e, ' from "').concat(s, '" to "').concat(n, '". ').concat(s, " is not an animatable value - to enable this animation set ").concat(s, " to a value animatable to ").concat(n, " via the `style` property."));
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
    return i.type === "inertia" || i.type === "decay" ? su(S(S({}, f), i)) : uo(S(S({}, Lu(i, f, e)), { onUpdate: function(v) {
      var h;
      f.onUpdate(v), (h = i.onUpdate) === null || h === void 0 || h.call(i, v);
    }, onComplete: function() {
      var v;
      f.onComplete(), (v = i.onComplete) === null || v === void 0 || v.call(i);
    } }));
  }
  function p() {
    var f, v, h = yo(n);
    return t.set(h), a(), (f = i == null ? void 0 : i.onUpdate) === null || f === void 0 || f.call(i, h), (v = i == null ? void 0 : i.onComplete) === null || v === void 0 || v.call(i), { stop: function() {
    } };
  }
  return !c || !l || i.type === !1 ? p : u;
}
function Oa(e) {
  return e === 0 || typeof e == "string" && parseFloat(e) === 0 && e.indexOf(" ") === -1;
}
function Ma(e) {
  return typeof e == "number" ? 0 : zr("", e);
}
function Hr(e, t) {
  return e[t] || e.default || e;
}
function Yr(e, t, n, r) {
  return r === void 0 && (r = {}), xu.current && (r = { type: !1 }), t.start(function(a) {
    var o, i, s = Eu(e, t, n, r, a), l = Cu(r, e), c = function() {
      return i = s();
    };
    return l ? o = window.setTimeout(c, Ln(l)) : c(), function() {
      clearTimeout(o), i == null || i.stop();
    };
  });
}
function Nu(e, t, n) {
  n === void 0 && (n = {});
  var r = Be(e) ? e : Pt(e);
  return Yr("", r, t, n), {
    stop: function() {
      return r.stop();
    },
    isAnimating: function() {
      return r.isAnimating();
    }
  };
}
var bo = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], Ru = bo.length, Da = function(e) {
  return typeof e == "string" ? parseFloat(e) : e;
}, ja = function(e) {
  return typeof e == "number" || I.test(e);
};
function Vu(e, t, n, r, a, o) {
  var i, s, l, c;
  a ? (e.opacity = z(
    0,
    (i = n.opacity) !== null && i !== void 0 ? i : 1,
    Iu(r)
  ), e.opacityExit = z((s = t.opacity) !== null && s !== void 0 ? s : 1, 0, Au(r))) : o && (e.opacity = z((l = t.opacity) !== null && l !== void 0 ? l : 1, (c = n.opacity) !== null && c !== void 0 ? c : 1, r));
  for (var u = 0; u < Ru; u++) {
    var p = "border".concat(bo[u], "Radius"), f = ka(t, p), v = ka(n, p);
    if (!(f === void 0 && v === void 0)) {
      f || (f = 0), v || (v = 0);
      var h = f === 0 || v === 0 || ja(f) === ja(v);
      h ? (e[p] = Math.max(z(Da(f), Da(v), r), 0), ($e.test(v) || $e.test(f)) && (e[p] += "%")) : e[p] = v;
    }
  }
  (t.rotate || n.rotate) && (e.rotate = z(t.rotate || 0, n.rotate || 0, r));
}
function ka(e, t) {
  var n;
  return (n = e[t]) !== null && n !== void 0 ? n : e.borderRadius;
}
var Iu = xo(0, 0.5, Br), Au = xo(0.5, 0.95, jr);
function xo(e, t, n) {
  return function(r) {
    return r < e ? 0 : r > t ? 1 : n(Ut(e, t, r));
  };
}
function Ba(e, t) {
  e.min = t.min, e.max = t.max;
}
function Le(e, t) {
  Ba(e.x, t.x), Ba(e.y, t.y);
}
function rr(e) {
  return e === void 0 || e === 1;
}
function So(e) {
  var t = e.scale, n = e.scaleX, r = e.scaleY;
  return !rr(t) || !rr(n) || !rr(r);
}
function Ye(e) {
  return So(e) || Fa(e.x) || Fa(e.y) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function Fa(e) {
  return e && e !== "0%";
}
function En(e, t, n) {
  var r = e - n, a = t * r;
  return n + a;
}
function Wa(e, t, n, r, a) {
  return a !== void 0 && (e = En(e, a, r)), En(e, n, r) + t;
}
function Pr(e, t, n, r, a) {
  t === void 0 && (t = 0), n === void 0 && (n = 1), e.min = Wa(e.min, t, n, r, a), e.max = Wa(e.max, t, n, r, a);
}
function To(e, t) {
  var n = t.x, r = t.y;
  Pr(e.x, n.translate, n.scale, n.originPoint), Pr(e.y, r.translate, r.scale, r.originPoint);
}
function $u(e, t, n, r) {
  var a, o;
  r === void 0 && (r = !1);
  var i = n.length;
  if (!!i) {
    t.x = t.y = 1;
    for (var s, l, c = 0; c < i; c++)
      s = n[c], l = s.projectionDelta, ((o = (a = s.instance) === null || a === void 0 ? void 0 : a.style) === null || o === void 0 ? void 0 : o.display) !== "contents" && (r && s.options.layoutScroll && s.scroll && s !== s.root && yt(e, { x: -s.scroll.x, y: -s.scroll.y }), l && (t.x *= l.x.scale, t.y *= l.y.scale, To(e, l)), r && Ye(s.latestValues) && yt(e, s.latestValues));
  }
}
function _t(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function qa(e, t, n) {
  var r = H(n, 3), a = r[0], o = r[1], i = r[2], s = t[i] !== void 0 ? t[i] : 0.5, l = z(e.min, e.max, s);
  Pr(e, t[a], t[o], l, t.scale);
}
var Ou = ["x", "scaleX", "originX"], Mu = ["y", "scaleY", "originY"];
function yt(e, t) {
  qa(e.x, t, Ou), qa(e.y, t, Mu);
}
function Fe(e) {
  return e.max - e.min;
}
function Ua(e, t, n) {
  return t === void 0 && (t = 0), n === void 0 && (n = 0.01), vo(e, t) < n;
}
function za(e, t, n, r) {
  r === void 0 && (r = 0.5), e.origin = r, e.originPoint = z(t.min, t.max, e.origin), e.scale = Fe(n) / Fe(t), (Ua(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = z(n.min, n.max, e.origin) - e.originPoint, (Ua(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Mt(e, t, n, r) {
  za(e.x, t.x, n.x, r == null ? void 0 : r.originX), za(e.y, t.y, n.y, r == null ? void 0 : r.originY);
}
function Ha(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Fe(t);
}
function Du(e, t, n) {
  Ha(e.x, t.x, n.x), Ha(e.y, t.y, n.y);
}
function Ya(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Fe(t);
}
function Dt(e, t, n) {
  Ya(e.x, t.x, n.x), Ya(e.y, t.y, n.y);
}
function Ga(e, t, n, r, a) {
  return e -= t, e = En(e, 1 / n, r), a !== void 0 && (e = En(e, 1 / a, r)), e;
}
function ju(e, t, n, r, a, o, i) {
  if (t === void 0 && (t = 0), n === void 0 && (n = 1), r === void 0 && (r = 0.5), o === void 0 && (o = e), i === void 0 && (i = e), $e.test(t)) {
    t = parseFloat(t);
    var s = z(i.min, i.max, t / 100);
    t = s - i.min;
  }
  if (typeof t == "number") {
    var l = z(o.min, o.max, r);
    e === o && (l -= t), e.min = Ga(e.min, t, n, l, a), e.max = Ga(e.max, t, n, l, a);
  }
}
function Ka(e, t, n, r, a) {
  var o = H(n, 3), i = o[0], s = o[1], l = o[2];
  ju(e, t[i], t[s], t[l], t.scale, r, a);
}
var ku = ["x", "scaleX", "originX"], Bu = ["y", "scaleY", "originY"];
function Xa(e, t, n, r) {
  Ka(e.x, t, ku, n == null ? void 0 : n.x, r == null ? void 0 : r.x), Ka(e.y, t, Bu, n == null ? void 0 : n.y, r == null ? void 0 : r.y);
}
var Za = function() {
  return {
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  };
}, jt = function() {
  return {
    x: Za(),
    y: Za()
  };
}, Ja = function() {
  return { min: 0, max: 0 };
}, ee = function() {
  return {
    x: Ja(),
    y: Ja()
  };
};
function Qa(e) {
  return e.translate === 0 && e.scale === 1;
}
function Po(e) {
  return Qa(e.x) && Qa(e.y);
}
function Co(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
var Fu = function() {
  function e() {
    this.members = [];
  }
  return e.prototype.add = function(t) {
    Wr(this.members, t), t.scheduleRender();
  }, e.prototype.remove = function(t) {
    if (qr(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
}(), Nn = {};
function Wu(e) {
  Object.assign(Nn, e);
}
var qu = "translate3d(0px, 0px, 0) scale(1, 1)";
function ei(e, t, n) {
  var r = e.x.translate / t.x, a = e.y.translate / t.y, o = "translate3d(".concat(r, "px, ").concat(a, "px, 0) ");
  if (n) {
    var i = n.rotate, s = n.rotateX, l = n.rotateY;
    i && (o += "rotate(".concat(i, "deg) ")), s && (o += "rotateX(".concat(s, "deg) ")), l && (o += "rotateY(".concat(l, "deg) "));
  }
  return o += "scale(".concat(e.x.scale, ", ").concat(e.y.scale, ")"), o === qu ? "none" : o;
}
function Ie(e) {
  return [e("x"), e("y")];
}
var Cr = ["", "X", "Y", "Z"], Uu = ["translate", "scale", "rotate", "skew"], Yt = ["transformPerspective", "x", "y", "z"];
Uu.forEach(function(e) {
  return Cr.forEach(function(t) {
    return Yt.push(e + t);
  });
});
function zu(e, t) {
  return Yt.indexOf(e) - Yt.indexOf(t);
}
var Hu = new Set(Yt);
function rn(e) {
  return Hu.has(e);
}
var Yu = /* @__PURE__ */ new Set(["originX", "originY", "originZ"]);
function wo(e) {
  return Yu.has(e);
}
var Gu = function(e, t) {
  return e.depth - t.depth;
}, Ku = function() {
  function e() {
    this.children = [], this.isDirty = !1;
  }
  return e.prototype.add = function(t) {
    Wr(this.children, t), this.isDirty = !0;
  }, e.prototype.remove = function(t) {
    qr(this.children, t), this.isDirty = !0;
  }, e.prototype.forEach = function(t) {
    this.isDirty && this.children.sort(Gu), this.isDirty = !1, this.children.forEach(t);
  }, e;
}();
function xn(e) {
  var t = Be(e) ? e.get() : e;
  return Su(t) ? t.toValue() : t;
}
var ti = 1e3, kt = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
};
function Lo(e) {
  var t = e.attachResizeListener, n = e.defaultParent, r = e.measureScroll, a = e.resetTransform;
  return function() {
    function o(i, s, l) {
      var c = this;
      s === void 0 && (s = {}), l === void 0 && (l = n == null ? void 0 : n()), this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.potentialNodes = /* @__PURE__ */ new Map(), this.checkUpdateFailed = function() {
        c.isUpdating && (c.isUpdating = !1, c.clearAllSnapshots());
      }, this.updateProjection = function() {
        c.nodes.forEach(td), c.nodes.forEach(nd);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.id = i, this.latestValues = s, this.root = l ? l.root || l : this, this.path = l ? Se(Se([], H(l.path), !1), [l], !1) : [], this.parent = l, this.depth = l ? l.depth + 1 : 0, i && this.root.registerPotentialNode(i, this);
      for (var u = 0; u < this.path.length; u++)
        this.path[u].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Ku());
    }
    return o.prototype.addEventListener = function(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new Ot()), this.eventHandlers.get(i).add(s);
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
            l.root.updateBlockedByResize = !0, clearTimeout(h), h = window.setTimeout(g, 250), kt.hasAnimatedSinceResize && (kt.hasAnimatedSinceResize = !1, l.nodes.forEach(ed));
          });
        }
        p && this.root.registerSharedNode(p, this), this.options.animate !== !1 && v && (p || f) && this.addEventListener("didUpdate", function(_) {
          var x, b, y, C, N, O = _.delta, V = _.hasLayoutChanged, A = _.hasRelativeTargetChanged, $ = _.layout;
          if (l.isTreeAnimationBlocked()) {
            l.target = void 0, l.relativeTarget = void 0;
            return;
          }
          var B = (b = (x = l.options.transition) !== null && x !== void 0 ? x : v.getDefaultTransition()) !== null && b !== void 0 ? b : sd, Y = v.getProps(), ie = Y.onLayoutAnimationStart, Z = Y.onLayoutAnimationComplete, oe = !l.targetLayout || !Co(l.targetLayout, $) || A, se = !V && A;
          if (((y = l.resumeFrom) === null || y === void 0 ? void 0 : y.instance) || se || V && (oe || !l.currentAnimation)) {
            l.resumeFrom && (l.resumingFrom = l.resumeFrom, l.resumingFrom.resumingFrom = void 0), l.setAnimationOrigin(O, se);
            var U = S(S({}, Hr(B, "layout")), { onPlay: ie, onComplete: Z });
            v.shouldReduceMotion && (U.delay = 0, U.type = !1), l.startAnimation(U);
          } else
            !V && l.animationProgress === 0 && l.finishAnimation(), l.isLead() && ((N = (C = l.options).onExitComplete) === null || N === void 0 || N.call(C));
          l.targetLayout = $;
        });
      }
    }, o.prototype.unmount = function() {
      var i, s;
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this), (i = this.getStack()) === null || i === void 0 || i.remove(this), (s = this.parent) === null || s === void 0 || s.children.delete(this), this.instance = void 0, Tt.preRender(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, (i = this.nodes) === null || i === void 0 || i.forEach(rd));
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
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(ni);
        return;
      }
      !this.isUpdating || (this.isUpdating = !1, this.potentialNodes.size && (this.potentialNodes.forEach(ld), this.potentialNodes.clear()), this.nodes.forEach(Qu), this.nodes.forEach(Xu), this.nodes.forEach(Zu), this.clearAllSnapshots(), Jn.update(), Jn.preRender(), Jn.render());
    }, o.prototype.clearAllSnapshots = function() {
      this.nodes.forEach(Ju), this.sharedNodes.forEach(ad);
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
        oi(s), this.snapshot = {
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
        oi(c);
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
        var s = this.isLayoutDirty || this.shouldResetTransform, l = this.projectionDelta && !Po(this.projectionDelta), c = (i = this.options.visualElement) === null || i === void 0 ? void 0 : i.getProps().transformTemplate, u = c == null ? void 0 : c(this.latestValues, ""), p = u !== this.prevTransformTemplateValue;
        s && (l || Ye(this.latestValues) || p) && (a(this.instance, u), this.shouldResetTransform = !1, this.scheduleRender());
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
        }), Ye(u.latestValues) && yt(l, u.latestValues);
      }
      return Ye(this.latestValues) && yt(l, this.latestValues), l;
    }, o.prototype.removeTransform = function(i) {
      var s, l = ee();
      Le(l, i);
      for (var c = 0; c < this.path.length; c++) {
        var u = this.path[c];
        if (!!u.instance && !!Ye(u.latestValues)) {
          So(u.latestValues) && u.updateSnapshot();
          var p = ee(), f = u.measure();
          Le(p, f), Xa(l, u.latestValues, (s = u.snapshot) === null || s === void 0 ? void 0 : s.layout, p);
        }
      }
      return Ye(this.latestValues) && Xa(l, this.latestValues), l;
    }, o.prototype.setTargetDelta = function(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection();
    }, o.prototype.setOptions = function(i) {
      var s;
      this.options = S(S(S({}, this.options), i), { crossfade: (s = i.crossfade) !== null && s !== void 0 ? s : !0 });
    }, o.prototype.clearMeasurements = function() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }, o.prototype.resolveTargetDelta = function() {
      var i, s = this.options, l = s.layout, c = s.layoutId;
      !this.layout || !(l || c) || (!this.targetDelta && !this.relativeTarget && (this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && this.relativeParent.layout && (this.relativeTarget = ee(), this.relativeTargetOrigin = ee(), Dt(this.relativeTargetOrigin, this.layout.actual, this.relativeParent.layout.actual), Le(this.relativeTarget, this.relativeTargetOrigin))), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = ee(), this.targetWithTransforms = ee()), this.relativeTarget && this.relativeTargetOrigin && ((i = this.relativeParent) === null || i === void 0 ? void 0 : i.target) ? Du(this.target, this.relativeTarget, this.relativeParent.target) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.actual) : Le(this.target, this.layout.actual), To(this.target, this.targetDelta)) : Le(this.target, this.layout.actual), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.relativeParent = this.getClosestProjectingParent(), this.relativeParent && Boolean(this.relativeParent.resumingFrom) === Boolean(this.resumingFrom) && !this.relativeParent.options.layoutScroll && this.relativeParent.target && (this.relativeTarget = ee(), this.relativeTargetOrigin = ee(), Dt(this.relativeTargetOrigin, this.target, this.relativeParent.target), Le(this.relativeTarget, this.relativeTargetOrigin)))));
    }, o.prototype.getClosestProjectingParent = function() {
      if (!(!this.parent || Ye(this.parent.latestValues)))
        return (this.parent.relativeTarget || this.parent.targetDelta) && this.parent.layout ? this.parent : this.parent.getClosestProjectingParent();
    }, o.prototype.calcProjection = function() {
      var i, s = this.options, l = s.layout, c = s.layoutId;
      if (this.isTreeAnimating = Boolean(((i = this.parent) === null || i === void 0 ? void 0 : i.isTreeAnimating) || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !(!this.layout || !(l || c))) {
        var u = this.getLead();
        Le(this.layoutCorrected, this.layout.actual), $u(this.layoutCorrected, this.treeScale, this.path, Boolean(this.resumingFrom) || this !== u);
        var p = u.target;
        if (!!p) {
          this.projectionDelta || (this.projectionDelta = jt(), this.projectionDeltaWithTransform = jt());
          var f = this.treeScale.x, v = this.treeScale.y, h = this.projectionTransform;
          Mt(this.projectionDelta, this.layoutCorrected, p, this.latestValues), this.projectionTransform = ei(this.projectionDelta, this.treeScale), (this.projectionTransform !== h || this.treeScale.x !== f || this.treeScale.y !== v) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", p));
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
      var u = this.snapshot, p = (u == null ? void 0 : u.latestValues) || {}, f = S({}, this.latestValues), v = jt();
      this.relativeTarget = this.relativeTargetOrigin = void 0, this.attemptToResolveRelativeTarget = !s;
      var h = ee(), g = u == null ? void 0 : u.isShared, _ = (((c = this.getStack()) === null || c === void 0 ? void 0 : c.members.length) || 0) <= 1, x = Boolean(g && !_ && this.options.crossfade === !0 && !this.path.some(od));
      this.animationProgress = 0, this.mixTargetDelta = function(b) {
        var y, C = b / 1e3;
        ri(v.x, i.x, C), ri(v.y, i.y, C), l.setTargetDelta(v), l.relativeTarget && l.relativeTargetOrigin && l.layout && ((y = l.relativeParent) === null || y === void 0 ? void 0 : y.layout) && (Dt(h, l.layout.actual, l.relativeParent.layout.actual), id(l.relativeTarget, l.relativeTargetOrigin, h, C)), g && (l.animationValues = f, Vu(f, p, l.latestValues, C, x, _)), l.root.scheduleUpdateProjection(), l.scheduleRender(), l.animationProgress = C;
      }, this.mixTargetDelta(0);
    }, o.prototype.startAnimation = function(i) {
      var s = this, l, c;
      this.notifyListeners("animationStart"), (l = this.currentAnimation) === null || l === void 0 || l.stop(), this.resumingFrom && ((c = this.resumingFrom.currentAnimation) === null || c === void 0 || c.stop()), this.pendingAnimation && (Tt.update(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Te.update(function() {
        kt.hasAnimatedSinceResize = !0, s.currentAnimation = Nu(0, ti, S(S({}, i), { onUpdate: function(u) {
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
      this.currentAnimation && ((i = this.mixTargetDelta) === null || i === void 0 || i.call(this, ti), this.currentAnimation.stop()), this.completeAnimation();
    }, o.prototype.applyTransformsToTarget = function() {
      var i = this.getLead(), s = i.targetWithTransforms, l = i.target, c = i.layout, u = i.latestValues;
      !s || !l || !c || (Le(s, l), yt(s, u), Mt(this.projectionDeltaWithTransform, this.layoutCorrected, s, u));
    }, o.prototype.registerSharedNode = function(i, s) {
      var l, c, u;
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new Fu());
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
        for (var s = !1, l = {}, c = 0; c < Cr.length; c++) {
          var u = Cr[c], p = "rotate" + u;
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
        return this.needsReset = !1, v.opacity = "", v.pointerEvents = xn(i.pointerEvents) || "", v.transform = h ? h(this.latestValues, "") : "none", v;
      var g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        var _ = {};
        return this.options.layoutId && (_.opacity = (l = this.latestValues.opacity) !== null && l !== void 0 ? l : 1, _.pointerEvents = xn(i.pointerEvents) || ""), this.hasProjected && !Ye(this.latestValues) && (_.transform = h ? h({}, "") : "none", this.hasProjected = !1), _;
      }
      var x = g.animationValues || g.latestValues;
      this.applyTransformsToTarget(), v.transform = ei(this.projectionDeltaWithTransform, this.treeScale, x), h && (v.transform = h(x, v.transform));
      var b = this.projectionDelta, y = b.x, C = b.y;
      v.transformOrigin = "".concat(y.origin * 100, "% ").concat(C.origin * 100, "% 0"), g.animationValues ? v.opacity = g === this ? (u = (c = x.opacity) !== null && c !== void 0 ? c : this.latestValues.opacity) !== null && u !== void 0 ? u : 1 : this.preserveOpacity ? this.latestValues.opacity : x.opacityExit : v.opacity = g === this ? (p = x.opacity) !== null && p !== void 0 ? p : "" : (f = x.opacityExit) !== null && f !== void 0 ? f : 0;
      for (var N in Nn)
        if (x[N] !== void 0) {
          var O = Nn[N], V = O.correct, A = O.applyTo, $ = V(x[N], g);
          if (A)
            for (var B = A.length, Y = 0; Y < B; Y++)
              v[A[Y]] = $;
          else
            v[N] = $;
        }
      return this.options.layoutId && (v.pointerEvents = g === this ? xn(i.pointerEvents) || "" : "none"), v;
    }, o.prototype.clearSnapshot = function() {
      this.resumeFrom = this.snapshot = void 0;
    }, o.prototype.resetTree = function() {
      this.root.nodes.forEach(function(i) {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(ni), this.root.sharedNodes.clear();
    }, o;
  }();
}
function Xu(e) {
  e.updateLayout();
}
function Zu(e) {
  var t, n, r, a, o = (n = (t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) !== null && n !== void 0 ? n : e.snapshot;
  if (e.isLead() && e.layout && o && e.hasListeners("didUpdate")) {
    var i = e.layout, s = i.actual, l = i.measured;
    e.options.animationType === "size" ? Ie(function(b) {
      var y = o.isShared ? o.measured[b] : o.layout[b], C = Fe(y);
      y.min = s[b].min, y.max = y.min + C;
    }) : e.options.animationType === "position" && Ie(function(b) {
      var y = o.isShared ? o.measured[b] : o.layout[b], C = Fe(s[b]);
      y.max = y.min + C;
    });
    var c = jt();
    Mt(c, s, o.layout);
    var u = jt();
    o.isShared ? Mt(u, e.applyTransform(l, !0), o.measured) : Mt(u, s, o.layout);
    var p = !Po(c), f = !1;
    if (!e.resumeFrom && (e.relativeParent = e.getClosestProjectingParent(), e.relativeParent && !e.relativeParent.resumeFrom)) {
      var v = e.relativeParent, h = v.snapshot, g = v.layout;
      if (h && g) {
        var _ = ee();
        Dt(_, o.layout, h.layout);
        var x = ee();
        Dt(x, s, g.actual), Co(_, x) || (f = !0);
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
function Ju(e) {
  e.clearSnapshot();
}
function ni(e) {
  e.clearMeasurements();
}
function Qu(e) {
  var t = e.options.visualElement;
  t != null && t.getProps().onBeforeLayoutMeasure && t.notifyBeforeLayoutMeasure(), e.resetTransform();
}
function ed(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0;
}
function td(e) {
  e.resolveTargetDelta();
}
function nd(e) {
  e.calcProjection();
}
function rd(e) {
  e.resetRotation();
}
function ad(e) {
  e.removeLeadSnapshot();
}
function ri(e, t, n) {
  e.translate = z(t.translate, 0, n), e.scale = z(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function ai(e, t, n, r) {
  e.min = z(t.min, n.min, r), e.max = z(t.max, n.max, r);
}
function id(e, t, n, r) {
  ai(e.x, t.x, n.x, r), ai(e.y, t.y, n.y, r);
}
function od(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
var sd = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function ld(e, t) {
  for (var n = e.root, r = e.path.length - 1; r >= 0; r--)
    if (Boolean(e.path[r].instance)) {
      n = e.path[r];
      break;
    }
  var a = n && n !== e.root ? n.instance : document, o = a.querySelector('[data-projection-id="'.concat(t, '"]'));
  o && e.mount(o, !0);
}
function ii(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function oi(e) {
  ii(e.x), ii(e.y);
}
var cd = 1;
function ud() {
  return Qt(function() {
    if (kt.hasEverUpdated)
      return cd++;
  });
}
var Gr = Ct({}), Eo = Ct({});
function dd(e, t, n, r) {
  var a, o = t.layoutId, i = t.layout, s = t.drag, l = t.dragConstraints, c = t.layoutScroll, u = Q(Eo);
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
var fd = function(e) {
  Di(t, e);
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
}(Kt.Component);
function vd(e) {
  var t = e.preloadedFeatures, n = e.createVisualElement, r = e.projectionNodeConstructor, a = e.useRender, o = e.useVisualState, i = e.Component;
  t && zl(t);
  function s(l, c) {
    var u = pd(l);
    l = S(S({}, l), { layoutId: u });
    var p = Q($r), f = null, v = rc(l), h = p.isStatic ? void 0 : ud(), g = o(l, p.isStatic);
    return !p.isStatic && wt && (v.visualElement = Jl(i, g, S(S({}, p), l), n), dd(h, l, v.visualElement, r || Wt.projectionNodeConstructor), f = Yl(l, v.visualElement, t)), he.createElement(
      fd,
      { visualElement: v.visualElement, props: S(S({}, p), l) },
      f,
      he.createElement(Mn.Provider, { value: v }, a(i, l, h, Ql(g, v.visualElement, c), g, p.isStatic, v.visualElement))
    );
  }
  return Ze(s);
}
function pd(e) {
  var t, n = e.layoutId, r = (t = Q(Gr)) === null || t === void 0 ? void 0 : t.id;
  return r && n !== void 0 ? r + "-" + n : n;
}
function hd(e) {
  function t(r, a) {
    return a === void 0 && (a = {}), vd(e(r, a));
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
var md = [
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
function Kr(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(md.indexOf(e) > -1 || /[A-Z]/.test(e));
}
function No(e, t) {
  var n = t.layout, r = t.layoutId;
  return rn(e) || wo(e) || (n || r !== void 0) && (!!Nn[e] || e === "opacity");
}
var gd = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
};
function _d(e, t, n, r) {
  var a = e.transform, o = e.transformKeys, i = t.enableHardwareAcceleration, s = i === void 0 ? !0 : i, l = t.allowTransformNone, c = l === void 0 ? !0 : l, u = "";
  o.sort(zu);
  for (var p = !1, f = o.length, v = 0; v < f; v++) {
    var h = o[v];
    u += "".concat(gd[h] || h, "(").concat(a[h], ") "), h === "z" && (p = !0);
  }
  return !p && s ? u += "translateZ(0)" : u = u.trim(), r ? u = r(a, n ? "" : u) : c && n && (u = "none"), u;
}
function yd(e) {
  var t = e.originX, n = t === void 0 ? "50%" : t, r = e.originY, a = r === void 0 ? "50%" : r, o = e.originZ, i = o === void 0 ? 0 : o;
  return "".concat(n, " ").concat(a, " ").concat(i);
}
function Ro(e) {
  return e.startsWith("--");
}
var bd = function(e, t) {
  return t && typeof e == "number" ? t.transform(e) : e;
};
function Xr(e, t, n, r) {
  var a, o = e.style, i = e.vars, s = e.transform, l = e.transformKeys, c = e.transformOrigin;
  l.length = 0;
  var u = !1, p = !1, f = !0;
  for (var v in t) {
    var h = t[v];
    if (Ro(v)) {
      i[v] = h;
      continue;
    }
    var g = _o[v], _ = bd(h, g);
    if (rn(v)) {
      if (u = !0, s[v] = _, l.push(v), !f)
        continue;
      h !== ((a = g.default) !== null && a !== void 0 ? a : 0) && (f = !1);
    } else
      wo(v) ? (c[v] = _, p = !0) : o[v] = _;
  }
  u ? o.transform = _d(e, n, f, r) : r ? o.transform = r({}, "") : !t.transform && o.transform && (o.transform = "none"), p && (o.transformOrigin = yd(c));
}
var Zr = function() {
  return {
    style: {},
    transform: {},
    transformKeys: [],
    transformOrigin: {},
    vars: {}
  };
};
function Vo(e, t, n) {
  for (var r in t)
    !Be(t[r]) && !No(r, n) && (e[r] = t[r]);
}
function xd(e, t, n) {
  var r = e.transformTemplate;
  return Bt(function() {
    var a = Zr();
    Xr(a, t, { enableHardwareAcceleration: !n }, r);
    var o = a.vars, i = a.style;
    return S(S({}, o), i);
  }, [t]);
}
function Sd(e, t, n) {
  var r = e.style || {}, a = {};
  return Vo(a, r, e), Object.assign(a, xd(e, t, n)), e.transformValues && (a = e.transformValues(a)), a;
}
function Td(e, t, n) {
  var r = {}, a = Sd(e, t, n);
  return Boolean(e.drag) && e.dragListener !== !1 && (r.draggable = !1, a.userSelect = a.WebkitUserSelect = a.WebkitTouchCallout = "none", a.touchAction = e.drag === !0 ? "none" : "pan-".concat(e.drag === "x" ? "y" : "x")), r.style = a, r;
}
var Pd = /* @__PURE__ */ new Set([
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
function Rn(e) {
  return Pd.has(e);
}
var Io = function(e) {
  return !Rn(e);
};
function Cd(e) {
  !e || (Io = function(t) {
    return t.startsWith("on") ? !Rn(t) : e(t);
  });
}
try {
  Cd(require("@emotion/is-prop-valid").default);
} catch {
}
function wd(e, t, n) {
  var r = {};
  for (var a in e)
    (Io(a) || n === !0 && Rn(a) || !t && !Rn(a) || e.draggable && a.startsWith("onDrag")) && (r[a] = e[a]);
  return r;
}
function si(e, t, n) {
  return typeof e == "string" ? e : I.transform(t + n * e);
}
function Ld(e, t, n) {
  var r = si(t, e.x, e.width), a = si(n, e.y, e.height);
  return "".concat(r, " ").concat(a);
}
var Ed = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Nd = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Rd(e, t, n, r, a) {
  n === void 0 && (n = 1), r === void 0 && (r = 0), a === void 0 && (a = !0), e.pathLength = 1;
  var o = a ? Ed : Nd;
  e[o.offset] = I.transform(-r);
  var i = I.transform(t), s = I.transform(n);
  e[o.array] = "".concat(i, " ").concat(s);
}
function Jr(e, t, n, r) {
  var a = t.attrX, o = t.attrY, i = t.originX, s = t.originY, l = t.pathLength, c = t.pathSpacing, u = c === void 0 ? 1 : c, p = t.pathOffset, f = p === void 0 ? 0 : p, v = ge(t, ["attrX", "attrY", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"]);
  Xr(e, v, n, r), e.attrs = e.style, e.style = {};
  var h = e.attrs, g = e.style, _ = e.dimensions;
  h.transform && (_ && (g.transform = h.transform), delete h.transform), _ && (i !== void 0 || s !== void 0 || g.transform) && (g.transformOrigin = Ld(_, i !== void 0 ? i : 0.5, s !== void 0 ? s : 0.5)), a !== void 0 && (h.x = a), o !== void 0 && (h.y = o), l !== void 0 && Rd(h, l, u, f, !1);
}
var Ao = function() {
  return S(S({}, Zr()), { attrs: {} });
};
function Vd(e, t) {
  var n = Bt(function() {
    var a = Ao();
    return Jr(a, t, { enableHardwareAcceleration: !1 }, e.transformTemplate), S(S({}, a.attrs), { style: S({}, a.style) });
  }, [t]);
  if (e.style) {
    var r = {};
    Vo(r, e.style, e), n.style = S(S({}, r), n.style);
  }
  return n;
}
function Id(e) {
  e === void 0 && (e = !1);
  var t = function(n, r, a, o, i, s) {
    var l = i.latestValues, c = Kr(n) ? Vd : Td, u = c(r, l, s), p = wd(r, typeof n == "string", e), f = S(S(S({}, p), u), { ref: o });
    return a && (f["data-projection-id"] = a), Ns(n, f);
  };
  return t;
}
var Ad = /([a-z])([A-Z])/g, $d = "$1-$2", $o = function(e) {
  return e.replace(Ad, $d).toLowerCase();
};
function Oo(e, t, n, r) {
  var a = t.style, o = t.vars;
  Object.assign(e.style, a, r && r.getProjectionStyles(n));
  for (var i in o)
    e.style.setProperty(i, o[i]);
}
var Mo = /* @__PURE__ */ new Set([
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
function Do(e, t, n, r) {
  Oo(e, t, void 0, r);
  for (var a in t.attrs)
    e.setAttribute(Mo.has(a) ? a : $o(a), t.attrs[a]);
}
function Qr(e) {
  var t = e.style, n = {};
  for (var r in t)
    (Be(t[r]) || No(r, e)) && (n[r] = t[r]);
  return n;
}
function jo(e) {
  var t = Qr(e);
  for (var n in e)
    if (Be(e[n])) {
      var r = n === "x" || n === "y" ? "attr" + n.toUpperCase() : n;
      t[r] = e[n];
    }
  return t;
}
function ea(e) {
  return typeof e == "object" && typeof e.start == "function";
}
function li(e, t, n, r) {
  var a = e.scrapeMotionValuesFromProps, o = e.createRenderState, i = e.onMount, s = {
    latestValues: Od(t, n, r, a),
    renderState: o()
  };
  return i && (s.mount = function(l) {
    return i(t, l, s);
  }), s;
}
var ko = function(e) {
  return function(t, n) {
    var r = Q(Mn), a = Q(Jt);
    return n ? li(e, t, r, a) : Qt(function() {
      return li(e, t, r, a);
    });
  };
};
function Od(e, t, n, r) {
  var a = {}, o = (n == null ? void 0 : n.initial) === !1, i = r(e);
  for (var s in i)
    a[s] = xn(i[s]);
  var l = e.initial, c = e.animate, u = jn(e), p = qi(e);
  t && p && !u && e.inherit !== !1 && (l != null || (l = t.initial), c != null || (c = t.animate));
  var f = o || l === !1, v = f ? c : l;
  if (v && typeof v != "boolean" && !ea(v)) {
    var h = Array.isArray(v) ? v : [v];
    h.forEach(function(g) {
      var _ = Wi(e, g);
      if (!!_) {
        var x = _.transitionEnd;
        _.transition;
        var b = ge(_, ["transitionEnd", "transition"]);
        for (var y in b) {
          var C = b[y];
          if (Array.isArray(C)) {
            var N = f ? C.length - 1 : 0;
            C = C[N];
          }
          C !== null && (a[y] = C);
        }
        for (var y in x)
          a[y] = x[y];
      }
    });
  }
  return a;
}
var Md = {
  useVisualState: ko({
    scrapeMotionValuesFromProps: jo,
    createRenderState: Ao,
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
      Jr(r, a, { enableHardwareAcceleration: !1 }, e.transformTemplate), Do(t, r);
    }
  })
}, Dd = {
  useVisualState: ko({
    scrapeMotionValuesFromProps: Qr,
    createRenderState: Zr
  })
};
function jd(e, t, n, r, a) {
  var o = t.forwardMotionProps, i = o === void 0 ? !1 : o, s = Kr(e) ? Md : Dd;
  return S(S({}, s), { preloadedFeatures: n, useRender: Id(i), createVisualElement: r, projectionNodeConstructor: a, Component: e });
}
var F;
(function(e) {
  e.Animate = "animate", e.Hover = "whileHover", e.Tap = "whileTap", e.Drag = "whileDrag", e.Focus = "whileFocus", e.InView = "whileInView", e.Exit = "exit";
})(F || (F = {}));
function ta(e, t, n, r) {
  return e.addEventListener(t, n, r), function() {
    return e.removeEventListener(t, n, r);
  };
}
function wr(e, t, n, r) {
  G(function() {
    var a = e.current;
    if (n && a)
      return ta(a, t, n, r);
  }, [e, t, n, r]);
}
function kd(e) {
  var t = e.whileFocus, n = e.visualElement, r = function() {
    var o;
    (o = n.animationState) === null || o === void 0 || o.setActive(F.Focus, !0);
  }, a = function() {
    var o;
    (o = n.animationState) === null || o === void 0 || o.setActive(F.Focus, !1);
  };
  wr(n, "focus", t ? r : void 0), wr(n, "blur", t ? a : void 0);
}
function Bo(e) {
  return typeof PointerEvent < "u" && e instanceof PointerEvent ? e.pointerType === "mouse" : e instanceof MouseEvent;
}
function Fo(e) {
  var t = !!e.touches;
  return t;
}
function Bd(e) {
  return function(t) {
    var n = t instanceof MouseEvent, r = !n || n && t.button === 0;
    r && e(t);
  };
}
var Fd = { pageX: 0, pageY: 0 };
function Wd(e, t) {
  t === void 0 && (t = "page");
  var n = e.touches[0] || e.changedTouches[0], r = n || Fd;
  return {
    x: r[t + "X"],
    y: r[t + "Y"]
  };
}
function qd(e, t) {
  return t === void 0 && (t = "page"), {
    x: e[t + "X"],
    y: e[t + "Y"]
  };
}
function na(e, t) {
  return t === void 0 && (t = "page"), {
    point: Fo(e) ? Wd(e, t) : qd(e, t)
  };
}
var Wo = function(e, t) {
  t === void 0 && (t = !1);
  var n = function(r) {
    return e(r, na(r));
  };
  return t ? Bd(n) : n;
}, Ud = function() {
  return wt && window.onpointerdown === null;
}, zd = function() {
  return wt && window.ontouchstart === null;
}, Hd = function() {
  return wt && window.onmousedown === null;
}, Yd = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, Gd = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function qo(e) {
  return Ud() ? e : zd() ? Gd[e] : Hd() ? Yd[e] : e;
}
function xt(e, t, n, r) {
  return ta(e, qo(t), Wo(n, t === "pointerdown"), r);
}
function Vn(e, t, n, r) {
  return wr(e, qo(t), n && Wo(n, t === "pointerdown"), r);
}
function Uo(e) {
  var t = null;
  return function() {
    var n = function() {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
var ci = Uo("dragHorizontal"), ui = Uo("dragVertical");
function zo(e) {
  var t = !1;
  if (e === "y")
    t = ui();
  else if (e === "x")
    t = ci();
  else {
    var n = ci(), r = ui();
    n && r ? t = function() {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function Ho() {
  var e = zo(!0);
  return e ? (e(), !1) : !0;
}
function di(e, t, n) {
  return function(r, a) {
    var o;
    !Bo(r) || Ho() || ((o = e.animationState) === null || o === void 0 || o.setActive(F.Hover, t), n == null || n(r, a));
  };
}
function Kd(e) {
  var t = e.onHoverStart, n = e.onHoverEnd, r = e.whileHover, a = e.visualElement;
  Vn(a, "pointerenter", t || r ? di(a, !0, t) : void 0), Vn(a, "pointerleave", n || r ? di(a, !1, n) : void 0);
}
var Yo = function(e, t) {
  return t ? e === t ? !0 : Yo(e, t.parentElement) : !1;
};
function ra(e) {
  return G(function() {
    return function() {
      return e();
    };
  }, []);
}
function Xd(e) {
  var t = e.onTap, n = e.onTapStart, r = e.onTapCancel, a = e.whileTap, o = e.visualElement, i = t || n || r || a, s = re(!1), l = re(null);
  function c() {
    var h;
    (h = l.current) === null || h === void 0 || h.call(l), l.current = null;
  }
  function u() {
    var h;
    return c(), s.current = !1, (h = o.animationState) === null || h === void 0 || h.setActive(F.Tap, !1), !Ho();
  }
  function p(h, g) {
    !u() || (Yo(o.getInstance(), h.target) ? t == null || t(h, g) : r == null || r(h, g));
  }
  function f(h, g) {
    !u() || r == null || r(h, g);
  }
  function v(h, g) {
    var _;
    c(), !s.current && (s.current = !0, l.current = Bn(xt(window, "pointerup", p), xt(window, "pointercancel", f)), (_ = o.animationState) === null || _ === void 0 || _.setActive(F.Tap, !0), n == null || n(h, g));
  }
  Vn(o, "pointerdown", i ? v : void 0), ra(c);
}
var fi = /* @__PURE__ */ new Set();
function Zd(e, t, n) {
  e || fi.has(t) || (console.warn(t), n && console.warn(n), fi.add(t));
}
var Lr = /* @__PURE__ */ new WeakMap(), ar = /* @__PURE__ */ new WeakMap(), Jd = function(e) {
  var t;
  (t = Lr.get(e.target)) === null || t === void 0 || t(e);
}, Qd = function(e) {
  e.forEach(Jd);
};
function ef(e) {
  var t = e.root, n = ge(e, ["root"]), r = t || document;
  ar.has(r) || ar.set(r, {});
  var a = ar.get(r), o = JSON.stringify(n);
  return a[o] || (a[o] = new IntersectionObserver(Qd, S({ root: t }, n))), a[o];
}
function tf(e, t, n) {
  var r = ef(t);
  return Lr.set(e, n), r.observe(e), function() {
    Lr.delete(e), r.unobserve(e);
  };
}
function nf(e) {
  var t = e.visualElement, n = e.whileInView, r = e.onViewportEnter, a = e.onViewportLeave, o = e.viewport, i = o === void 0 ? {} : o, s = re({
    hasEnteredView: !1,
    isInView: !1
  }), l = Boolean(n || r || a);
  i.once && s.current.hasEnteredView && (l = !1);
  var c = typeof IntersectionObserver > "u" ? of : af;
  c(l, s.current, t, i);
}
var rf = {
  some: 0,
  all: 1
};
function af(e, t, n, r) {
  var a = r.root, o = r.margin, i = r.amount, s = i === void 0 ? "some" : i, l = r.once;
  G(function() {
    if (!!e) {
      var c = {
        root: a == null ? void 0 : a.current,
        rootMargin: o,
        threshold: typeof s == "number" ? s : rf[s]
      }, u = function(p) {
        var f, v = p.isIntersecting;
        if (t.isInView !== v && (t.isInView = v, !(l && !v && t.hasEnteredView))) {
          v && (t.hasEnteredView = !0), (f = n.animationState) === null || f === void 0 || f.setActive(F.InView, v);
          var h = n.getProps(), g = v ? h.onViewportEnter : h.onViewportLeave;
          g == null || g(p);
        }
      };
      return tf(n.getInstance(), c, u);
    }
  }, [e, a, o, s]);
}
function of(e, t, n, r) {
  var a = r.fallback, o = a === void 0 ? !0 : a;
  G(function() {
    !e || !o || (On.env.NODE_ENV !== "production" && Zd(!1, "IntersectionObserver not available on this device. whileInView animations will trigger on mount."), requestAnimationFrame(function() {
      var i;
      t.hasEnteredView = !0;
      var s = n.getProps().onViewportEnter;
      s == null || s(null), (i = n.animationState) === null || i === void 0 || i.setActive(F.InView, !0);
    }));
  }, [e]);
}
var Xe = function(e) {
  return function(t) {
    return e(t), null;
  };
}, sf = {
  inView: Xe(nf),
  tap: Xe(Xd),
  focus: Xe(kd),
  hover: Xe(Kd)
}, lf = 0, cf = function() {
  return lf++;
}, Go = function() {
  return Qt(cf);
};
function Ko() {
  var e = Q(Jt);
  if (e === null)
    return [!0, null];
  var t = e.isPresent, n = e.onExitComplete, r = e.register, a = Go();
  G(function() {
    return r(a);
  }, []);
  var o = function() {
    return n == null ? void 0 : n(a);
  };
  return !t && n ? [!1, o] : [!0];
}
function Xo(e, t) {
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
var uf = function(e) {
  return /^\-?\d*\.?\d+$/.test(e);
}, df = function(e) {
  return /^0[^.\s]+$/.test(e);
}, Zo = function(e) {
  return function(t) {
    return t.test(e);
  };
}, ff = {
  test: function(e) {
    return e === "auto";
  },
  parse: function(e) {
    return e;
  }
}, Jo = [st, I, $e, He, bc, yc, ff], Et = function(e) {
  return Jo.find(Zo(e));
}, vf = Se(Se([], H(Jo), !1), [ne, ke], !1), pf = function(e) {
  return vf.find(Zo(e));
};
function hf(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Pt(n));
}
function mf(e, t) {
  var n = Dn(e, t), r = n ? e.makeTargetAnimatable(n, !1) : {}, a = r.transitionEnd, o = a === void 0 ? {} : a;
  r.transition;
  var i = ge(r, ["transitionEnd", "transition"]);
  i = S(S({}, i), o);
  for (var s in i) {
    var l = yo(i[s]);
    hf(e, s, l);
  }
}
function gf(e, t, n) {
  var r, a, o, i, s = Object.keys(t).filter(function(v) {
    return !e.hasValue(v);
  }), l = s.length;
  if (!!l)
    for (var c = 0; c < l; c++) {
      var u = s[c], p = t[u], f = null;
      Array.isArray(p) && (f = p[0]), f === null && (f = (a = (r = n[u]) !== null && r !== void 0 ? r : e.readValue(u)) !== null && a !== void 0 ? a : t[u]), f != null && (typeof f == "string" && (uf(f) || df(f)) ? f = parseFloat(f) : !pf(f) && ke.test(p) && (f = zr(u, p)), e.addValue(u, Pt(f)), (o = (i = n)[u]) !== null && o !== void 0 || (i[u] = f), e.setBaseTarget(u, f));
    }
}
function _f(e, t) {
  if (!!t) {
    var n = t[e] || t.default || t;
    return n.from;
  }
}
function yf(e, t, n) {
  var r, a, o = {};
  for (var i in e)
    o[i] = (r = _f(i, t)) !== null && r !== void 0 ? r : (a = n.getValue(i)) === null || a === void 0 ? void 0 : a.get();
  return o;
}
function bf(e, t, n) {
  n === void 0 && (n = {}), e.notifyAnimationStart(t);
  var r;
  if (Array.isArray(t)) {
    var a = t.map(function(i) {
      return Er(e, i, n);
    });
    r = Promise.all(a);
  } else if (typeof t == "string")
    r = Er(e, t, n);
  else {
    var o = typeof t == "function" ? Dn(e, t, n.custom) : t;
    r = Qo(e, o, n);
  }
  return r.then(function() {
    return e.notifyAnimationComplete(t);
  });
}
function Er(e, t, n) {
  var r;
  n === void 0 && (n = {});
  var a = Dn(e, t, n.custom), o = (a || {}).transition, i = o === void 0 ? e.getDefaultTransition() || {} : o;
  n.transitionOverride && (i = n.transitionOverride);
  var s = a ? function() {
    return Qo(e, a, n);
  } : function() {
    return Promise.resolve();
  }, l = !((r = e.variantChildren) === null || r === void 0) && r.size ? function(v) {
    v === void 0 && (v = 0);
    var h = i.delayChildren, g = h === void 0 ? 0 : h, _ = i.staggerChildren, x = i.staggerDirection;
    return xf(e, t, g + v, _, x, n);
  } : function() {
    return Promise.resolve();
  }, c = i.when;
  if (c) {
    var u = H(c === "beforeChildren" ? [s, l] : [l, s], 2), p = u[0], f = u[1];
    return p().then(f);
  } else
    return Promise.all([s(), l(n.delay)]);
}
function Qo(e, t, n) {
  var r, a = n === void 0 ? {} : n, o = a.delay, i = o === void 0 ? 0 : o, s = a.transitionOverride, l = a.type, c = e.makeTargetAnimatable(t), u = c.transition, p = u === void 0 ? e.getDefaultTransition() : u, f = c.transitionEnd, v = ge(c, ["transition", "transitionEnd"]);
  s && (p = s);
  var h = [], g = l && ((r = e.animationState) === null || r === void 0 ? void 0 : r.getState()[l]);
  for (var _ in v) {
    var x = e.getValue(_), b = v[_];
    if (!(!x || b === void 0 || g && Tf(g, _))) {
      var y = S({ delay: i }, p);
      e.shouldReduceMotion && rn(_) && (y = S(S({}, y), { type: !1, delay: 0 }));
      var C = Yr(_, x, b, y);
      h.push(C);
    }
  }
  return Promise.all(h).then(function() {
    f && mf(e, f);
  });
}
function xf(e, t, n, r, a, o) {
  n === void 0 && (n = 0), r === void 0 && (r = 0), a === void 0 && (a = 1);
  var i = [], s = (e.variantChildren.size - 1) * r, l = a === 1 ? function(c) {
    return c === void 0 && (c = 0), c * r;
  } : function(c) {
    return c === void 0 && (c = 0), s - c * r;
  };
  return Array.from(e.variantChildren).sort(Sf).forEach(function(c, u) {
    i.push(Er(c, t, S(S({}, o), { delay: n + l(u) })).then(function() {
      return c.notifyAnimationComplete(t);
    }));
  }), Promise.all(i);
}
function Sf(e, t) {
  return e.sortNodePosition(t);
}
function Tf(e, t) {
  var n = e.protectedKeys, r = e.needsAnimating, a = n.hasOwnProperty(t) && r[t] !== !0;
  return r[t] = !1, a;
}
var aa = [
  F.Animate,
  F.InView,
  F.Focus,
  F.Hover,
  F.Tap,
  F.Drag,
  F.Exit
], Pf = Se([], H(aa), !1).reverse(), Cf = aa.length;
function wf(e) {
  return function(t) {
    return Promise.all(t.map(function(n) {
      var r = n.animation, a = n.options;
      return bf(e, r, a);
    }));
  };
}
function Lf(e) {
  var t = wf(e), n = Nf(), r = {}, a = !0, o = function(u, p) {
    var f = Dn(e, p);
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
    for (var f, v = e.getProps(), h = e.getVariantContext(!0) || {}, g = [], _ = /* @__PURE__ */ new Set(), x = {}, b = 1 / 0, y = function(V) {
      var A = Pf[V], $ = n[A], B = (f = v[A]) !== null && f !== void 0 ? f : h[A], Y = xe(B), ie = A === p ? $.isActive : null;
      ie === !1 && (b = V);
      var Z = B === h[A] && B !== v[A] && Y;
      if (Z && a && e.manuallyAnimateOnMount && (Z = !1), $.protectedKeys = S({}, x), !$.isActive && ie === null || !B && !$.prevProp || ea(B) || typeof B == "boolean")
        return "continue";
      var oe = Ef($.prevProp, B), se = oe || A === p && $.isActive && !Z && Y || V > b && Y, U = Array.isArray(B) ? B : [B], _e = U.reduce(o, {});
      ie === !1 && (_e = {});
      var de = $.prevResolvedValues, ye = de === void 0 ? {} : de, lt = S(S({}, ye), _e), fe = function(R) {
        se = !0, _.delete(R), $.needsAnimating[R] = !0;
      };
      for (var X in lt) {
        var j = _e[X], w = ye[X];
        x.hasOwnProperty(X) || (j !== w ? Ht(j) && Ht(w) ? !Xo(j, w) || oe ? fe(X) : $.protectedKeys[X] = !0 : j !== void 0 ? fe(X) : _.add(X) : j !== void 0 && _.has(X) ? fe(X) : $.protectedKeys[X] = !0);
      }
      $.prevProp = B, $.prevResolvedValues = _e, $.isActive && (x = S(S({}, x), _e)), a && e.blockInitialAnimation && (se = !1), se && !Z && g.push.apply(g, Se([], H(U.map(function(R) {
        return {
          animation: R,
          options: S({ type: A }, u)
        };
      })), !1));
    }, C = 0; C < Cf; C++)
      y(C);
    if (r = S({}, x), _.size) {
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
      var x;
      return (x = _.animationState) === null || x === void 0 ? void 0 : x.setActive(u, p);
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
function Ef(e, t) {
  return typeof t == "string" ? t !== e : Fi(t) ? !Xo(t, e) : !1;
}
function et(e) {
  return e === void 0 && (e = !1), {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function Nf() {
  var e;
  return e = {}, e[F.Animate] = et(!0), e[F.InView] = et(), e[F.Hover] = et(), e[F.Tap] = et(), e[F.Drag] = et(), e[F.Focus] = et(), e[F.Exit] = et(), e;
}
var Rf = {
  animation: Xe(function(e) {
    var t = e.visualElement, n = e.animate;
    t.animationState || (t.animationState = Lf(t)), ea(n) && G(function() {
      return n.subscribe(t);
    }, [n]);
  }),
  exit: Xe(function(e) {
    var t = e.custom, n = e.visualElement, r = H(Ko(), 2), a = r[0], o = r[1], i = Q(Jt);
    G(function() {
      var s, l;
      n.isPresent = a;
      var c = (s = n.animationState) === null || s === void 0 ? void 0 : s.setActive(F.Exit, !a, { custom: (l = i == null ? void 0 : i.custom) !== null && l !== void 0 ? l : t });
      !a && (c == null || c.then(o));
    }, [a]);
  })
}, es = function() {
  function e(t, n, r) {
    var a = this, o = r === void 0 ? {} : r, i = o.transformPagePoint;
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = function() {
      if (!!(a.lastMoveEvent && a.lastMoveEventInfo)) {
        var f = or(a.lastMoveEventInfo, a.history), v = a.startEvent !== null, h = vo(f.offset, { x: 0, y: 0 }) >= 3;
        if (!(!v && !h)) {
          var g = f.point, _ = Tn().timestamp;
          a.history.push(S(S({}, g), { timestamp: _ }));
          var x = a.handlers, b = x.onStart, y = x.onMove;
          v || (b && b(a.lastMoveEvent, f), a.startEvent = a.lastMoveEvent), y && y(a.lastMoveEvent, f);
        }
      }
    }, this.handlePointerMove = function(f, v) {
      if (a.lastMoveEvent = f, a.lastMoveEventInfo = ir(v, a.transformPagePoint), Bo(f) && f.buttons === 0) {
        a.handlePointerUp(f, v);
        return;
      }
      Te.update(a.updatePoint, !0);
    }, this.handlePointerUp = function(f, v) {
      a.end();
      var h = a.handlers, g = h.onEnd, _ = h.onSessionEnd, x = or(ir(v, a.transformPagePoint), a.history);
      a.startEvent && g && g(f, x), _ && _(f, x);
    }, !(Fo(t) && t.touches.length > 1)) {
      this.handlers = n, this.transformPagePoint = i;
      var s = na(t), l = ir(s, this.transformPagePoint), c = l.point, u = Tn().timestamp;
      this.history = [S(S({}, c), { timestamp: u })];
      var p = n.onSessionStart;
      p && p(t, or(l, this.history)), this.removeListeners = Bn(xt(window, "pointermove", this.handlePointerMove), xt(window, "pointerup", this.handlePointerUp), xt(window, "pointercancel", this.handlePointerUp));
    }
  }
  return e.prototype.updateHandlers = function(t) {
    this.handlers = t;
  }, e.prototype.end = function() {
    this.removeListeners && this.removeListeners(), Tt.update(this.updatePoint);
  }, e;
}();
function ir(e, t) {
  return t ? { point: t(e.point) } : e;
}
function vi(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function or(e, t) {
  var n = e.point;
  return {
    point: n,
    delta: vi(n, ts(t)),
    offset: vi(n, Vf(t)),
    velocity: If(t, 0.1)
  };
}
function Vf(e) {
  return e[0];
}
function ts(e) {
  return e[e.length - 1];
}
function If(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  for (var n = e.length - 1, r = null, a = ts(e); n >= 0 && (r = e[n], !(a.timestamp - r.timestamp > Ln(t))); )
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
function Af(e, t, n) {
  var r = t.min, a = t.max;
  return r !== void 0 && e < r ? e = n ? z(r, e, n.min) : Math.max(e, r) : a !== void 0 && e > a && (e = n ? z(a, e, n.max) : Math.min(e, a)), e;
}
function pi(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function $f(e, t) {
  var n = t.top, r = t.left, a = t.bottom, o = t.right;
  return {
    x: pi(e.x, r, o),
    y: pi(e.y, n, a)
  };
}
function hi(e, t) {
  var n, r = t.min - e.min, a = t.max - e.max;
  return t.max - t.min < e.max - e.min && (n = H([a, r], 2), r = n[0], a = n[1]), { min: r, max: a };
}
function Of(e, t) {
  return {
    x: hi(e.x, t.x),
    y: hi(e.y, t.y)
  };
}
function Mf(e, t) {
  var n = 0.5, r = Fe(e), a = Fe(t);
  return a > r ? n = Ut(t.min, t.max - r, e.min) : r > a && (n = Ut(e.min, e.max - a, t.min)), Pn(0, 1, n);
}
function Df(e, t) {
  var n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
var Nr = 0.35;
function jf(e) {
  return e === void 0 && (e = Nr), e === !1 ? e = 0 : e === !0 && (e = Nr), {
    x: mi(e, "left", "right"),
    y: mi(e, "top", "bottom")
  };
}
function mi(e, t, n) {
  return {
    min: gi(e, t),
    max: gi(e, n)
  };
}
function gi(e, t) {
  var n;
  return typeof e == "number" ? e : (n = e[t]) !== null && n !== void 0 ? n : 0;
}
function ns(e) {
  var t = e.top, n = e.left, r = e.right, a = e.bottom;
  return {
    x: { min: n, max: r },
    y: { min: t, max: a }
  };
}
function kf(e) {
  var t = e.x, n = e.y;
  return { top: n.min, right: t.max, bottom: n.max, left: t.min };
}
function Bf(e, t) {
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
function rs(e, t) {
  return ns(Bf(e.getBoundingClientRect(), t));
}
function Ff(e, t, n) {
  var r = rs(e, n), a = t.scroll;
  return a && (_t(r.x, a.x), _t(r.y, a.y)), r;
}
var Wf = /* @__PURE__ */ new WeakMap(), qf = function() {
  function e(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ee(), this.visualElement = t;
  }
  return e.prototype.start = function(t, n) {
    var r = this, a = n === void 0 ? {} : n, o = a.snapToCursor, i = o === void 0 ? !1 : o;
    if (this.visualElement.isPresent !== !1) {
      var s = function(p) {
        r.stopAnimation(), i && r.snapToCursor(na(p, "page").point);
      }, l = function(p, f) {
        var v, h = r.getProps(), g = h.drag, _ = h.dragPropagation, x = h.onDragStart;
        g && !_ && (r.openGlobalLock && r.openGlobalLock(), r.openGlobalLock = zo(g), !r.openGlobalLock) || (r.isDragging = !0, r.currentDirection = null, r.resolveConstraints(), r.visualElement.projection && (r.visualElement.projection.isAnimationBlocked = !0, r.visualElement.projection.target = void 0), Ie(function(b) {
          var y, C, N = r.getAxisMotionValue(b).get() || 0;
          if ($e.test(N)) {
            var O = (C = (y = r.visualElement.projection) === null || y === void 0 ? void 0 : y.layout) === null || C === void 0 ? void 0 : C.actual[b];
            if (O) {
              var V = Fe(O);
              N = V * (parseFloat(N) / 100);
            }
          }
          r.originPoint[b] = N;
        }), x == null || x(p, f), (v = r.visualElement.animationState) === null || v === void 0 || v.setActive(F.Drag, !0));
      }, c = function(p, f) {
        var v = r.getProps(), h = v.dragPropagation, g = v.dragDirectionLock, _ = v.onDirectionLock, x = v.onDrag;
        if (!(!h && !r.openGlobalLock)) {
          var b = f.offset;
          if (g && r.currentDirection === null) {
            r.currentDirection = Uf(b), r.currentDirection !== null && (_ == null || _(r.currentDirection));
            return;
          }
          r.updateAxis("x", f.point, b), r.updateAxis("y", f.point, b), r.visualElement.syncRender(), x == null || x(p, f);
        }
      }, u = function(p, f) {
        return r.stop(p, f);
      };
      this.panSession = new es(t, {
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
    if (!(!r || !dn(t, a, this.currentDirection))) {
      var o = this.getAxisMotionValue(t), i = this.originPoint[t] + r[t];
      this.constraints && this.constraints[t] && (i = Af(i, this.constraints[t], this.elastic[t])), o.set(i);
    }
  }, e.prototype.resolveConstraints = function() {
    var t = this, n = this.getProps(), r = n.dragConstraints, a = n.dragElastic, o = (this.visualElement.projection || {}).layout, i = this.constraints;
    r && gt(r) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : r && o ? this.constraints = $f(o.actual, r) : this.constraints = !1, this.elastic = jf(a), i !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && Ie(function(s) {
      t.getAxisMotionValue(s) && (t.constraints[s] = Df(o.actual[s], t.constraints[s]));
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
    var i = Ff(a, o.root, this.visualElement.getTransformPagePoint()), s = Of(o.layout.actual, i);
    if (r) {
      var l = r(kf(s));
      this.hasMutatedConstraints = !!l, l && (s = ns(l));
    }
    return s;
  }, e.prototype.startAnimation = function(t) {
    var n = this, r = this.getProps(), a = r.drag, o = r.dragMomentum, i = r.dragElastic, s = r.dragTransition, l = r.dragSnapToOrigin, c = r.onDragTransitionEnd, u = this.constraints || {}, p = Ie(function(f) {
      var v;
      if (!!dn(f, a, n.currentDirection)) {
        var h = (v = u == null ? void 0 : u[f]) !== null && v !== void 0 ? v : {};
        l && (h = { min: 0, max: 0 });
        var g = i ? 200 : 1e6, _ = i ? 40 : 1e7, x = S(S({ type: "inertia", velocity: o ? t[f] : 0, bounceStiffness: g, bounceDamping: _, timeConstant: 750, restDelta: 1, restSpeed: 10 }, s), h);
        return n.startAxisValueAnimation(f, x);
      }
    });
    return Promise.all(p).then(c);
  }, e.prototype.startAxisValueAnimation = function(t, n) {
    var r = this.getAxisMotionValue(t);
    return Yr(t, r, 0, n);
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
      if (!!dn(r, a, n.currentDirection)) {
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
          s[c] = Mf({ min: p, max: p }, t.constraints[c]);
        }
      });
      var l = this.visualElement.getProps().transformTemplate;
      this.visualElement.getInstance().style.transform = l ? l({}, "") : "none", (n = i.root) === null || n === void 0 || n.updateScroll(), i.updateLayout(), this.resolveConstraints(), Ie(function(c) {
        if (!!dn(c, a, null)) {
          var u = t.getAxisMotionValue(c), p = t.constraints[c], f = p.min, v = p.max;
          u.set(z(f, v, s[c]));
        }
      });
    }
  }, e.prototype.addListeners = function() {
    var t = this, n;
    Wf.set(this.visualElement, this);
    var r = this.visualElement.getInstance(), a = xt(r, "pointerdown", function(c) {
      var u = t.getProps(), p = u.drag, f = u.dragListener, v = f === void 0 ? !0 : f;
      p && v && t.start(c);
    }), o = function() {
      var c = t.getProps().dragConstraints;
      gt(c) && (t.constraints = t.resolveRefConstraints());
    }, i = this.visualElement.projection, s = i.addEventListener("measure", o);
    i && !i.layout && ((n = i.root) === null || n === void 0 || n.updateScroll(), i.updateLayout()), o();
    var l = ta(window, "resize", function() {
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
    var t = this.visualElement.getProps(), n = t.drag, r = n === void 0 ? !1 : n, a = t.dragDirectionLock, o = a === void 0 ? !1 : a, i = t.dragPropagation, s = i === void 0 ? !1 : i, l = t.dragConstraints, c = l === void 0 ? !1 : l, u = t.dragElastic, p = u === void 0 ? Nr : u, f = t.dragMomentum, v = f === void 0 ? !0 : f;
    return S(S({}, t), { drag: r, dragDirectionLock: o, dragPropagation: s, dragConstraints: c, dragElastic: p, dragMomentum: v });
  }, e;
}();
function dn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Uf(e, t) {
  t === void 0 && (t = 10);
  var n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
function zf(e) {
  var t = e.dragControls, n = e.visualElement, r = Qt(function() {
    return new qf(n);
  });
  G(function() {
    return t && t.subscribe(r);
  }, [r, t]), G(function() {
    return r.addListeners();
  }, [r]);
}
function Hf(e) {
  var t = e.onPan, n = e.onPanStart, r = e.onPanEnd, a = e.onPanSessionStart, o = e.visualElement, i = t || n || r || a, s = re(null), l = Q($r).transformPagePoint, c = {
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
    s.current = new es(p, c, {
      transformPagePoint: l
    });
  }
  Vn(o, "pointerdown", i && u), ra(function() {
    return s.current && s.current.end();
  });
}
var Yf = {
  pan: Xe(Hf),
  drag: Xe(zf)
}, fn = [
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
function Gf() {
  var e = fn.map(function() {
    return new Ot();
  }), t = {}, n = {
    clearAllListeners: function() {
      return e.forEach(function(r) {
        return r.clear();
      });
    },
    updatePropListeners: function(r) {
      fn.forEach(function(a) {
        var o, i = "on" + a, s = r[i];
        (o = t[a]) === null || o === void 0 || o.call(t), s && (t[a] = n[i](s));
      });
    }
  };
  return e.forEach(function(r, a) {
    n["on" + fn[a]] = function(o) {
      return r.add(o);
    }, n["notify" + fn[a]] = function() {
      for (var o = [], i = 0; i < arguments.length; i++)
        o[i] = arguments[i];
      return r.notify.apply(r, Se([], H(o), !1));
    };
  }), n;
}
function Kf(e, t, n) {
  var r;
  for (var a in t) {
    var o = t[a], i = n[a];
    if (Be(o))
      e.addValue(a, o);
    else if (Be(i))
      e.addValue(a, Pt(o));
    else if (i !== o)
      if (e.hasValue(a)) {
        var s = e.getValue(a);
        !s.hasAnimated && s.set(o);
      } else
        e.addValue(a, Pt((r = e.getStaticValue(a)) !== null && r !== void 0 ? r : o));
  }
  for (var a in n)
    t[a] === void 0 && e.removeValue(a);
  return t;
}
var as = function(e) {
  var t = e.treeType, n = t === void 0 ? "" : t, r = e.build, a = e.getBaseTarget, o = e.makeTargetAnimatable, i = e.measureViewportBox, s = e.render, l = e.readValueFromInstance, c = e.removeValueFromRenderState, u = e.sortNodePosition, p = e.scrapeMotionValuesFromProps;
  return function(f, v) {
    var h = f.parent, g = f.props, _ = f.presenceId, x = f.blockInitialAnimation, b = f.visualState, y = f.shouldReduceMotion;
    v === void 0 && (v = {});
    var C = !1, N = b.latestValues, O = b.renderState, V, A = Gf(), $ = /* @__PURE__ */ new Map(), B = /* @__PURE__ */ new Map(), Y = {}, ie = S({}, N), Z;
    function oe() {
      !V || !C || (se(), s(V, O, g.style, j.projection));
    }
    function se() {
      r(j, O, N, v, g);
    }
    function U() {
      A.notifyUpdate(N);
    }
    function _e(w, R) {
      var K = R.onChange(function(ct) {
        N[w] = ct, g.onUpdate && Te.update(U, !1, !0);
      }), Je = R.onRenderRequest(j.scheduleRender);
      B.set(w, function() {
        K(), Je();
      });
    }
    var de = p(g);
    for (var ye in de) {
      var lt = de[ye];
      N[ye] !== void 0 && Be(lt) && lt.set(N[ye], !1);
    }
    var fe = jn(g), X = qi(g), j = S(S({
      treeType: n,
      current: null,
      depth: h ? h.depth + 1 : 0,
      parent: h,
      children: /* @__PURE__ */ new Set(),
      presenceId: _,
      shouldReduceMotion: y,
      variantChildren: X ? /* @__PURE__ */ new Set() : void 0,
      isVisible: void 0,
      manuallyAnimateOnMount: Boolean(h == null ? void 0 : h.isMounted()),
      blockInitialAnimation: x,
      isMounted: function() {
        return Boolean(V);
      },
      mount: function(w) {
        C = !0, V = j.current = w, j.projection && j.projection.mount(w), X && h && !fe && (Z = h == null ? void 0 : h.addVariantChild(j)), $.forEach(function(R, K) {
          return _e(K, R);
        }), h == null || h.children.add(j), j.setProps(g);
      },
      unmount: function() {
        var w;
        (w = j.projection) === null || w === void 0 || w.unmount(), Tt.update(U), Tt.render(oe), B.forEach(function(R) {
          return R();
        }), Z == null || Z(), h == null || h.children.delete(j), A.clearAllListeners(), V = void 0, C = !1;
      },
      addVariantChild: function(w) {
        var R, K = j.getClosestVariantNode();
        if (K)
          return (R = K.variantChildren) === null || R === void 0 || R.add(w), function() {
            return K.variantChildren.delete(w);
          };
      },
      sortNodePosition: function(w) {
        return !u || n !== w.treeType ? 0 : u(j.getInstance(), w.getInstance());
      },
      getClosestVariantNode: function() {
        return X ? j : h == null ? void 0 : h.getClosestVariantNode();
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
        j.isVisible !== w && (j.isVisible = w, j.scheduleRender());
      },
      makeTargetAnimatable: function(w, R) {
        return R === void 0 && (R = !0), o(j, w, g, R);
      },
      measureViewportBox: function() {
        return i(V, g);
      },
      addValue: function(w, R) {
        j.hasValue(w) && j.removeValue(w), $.set(w, R), N[w] = R.get(), _e(w, R);
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
        return K === void 0 && R !== void 0 && (K = Pt(R), j.addValue(w, K)), K;
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
          if (R !== void 0 && !Be(R))
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
        (w.transformTemplate || g.transformTemplate) && j.scheduleRender(), g = w, A.updatePropListeners(w), Y = Kf(j, p(g), Y);
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
        for (var K = {}, Je = 0; Je < Xf; Je++) {
          var ct = is[Je], Lt = g[ct];
          (xe(Lt) || Lt === !1) && (K[ct] = Lt);
        }
        return K;
      }
    });
    return j;
  };
}, is = Se(["initial"], H(aa), !1), Xf = is.length;
function Rr(e) {
  return typeof e == "string" && e.startsWith("var(--");
}
var os = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function Zf(e) {
  var t = os.exec(e);
  if (!t)
    return [,];
  var n = H(t, 3), r = n[1], a = n[2];
  return [r, a];
}
var Jf = 4;
function Vr(e, t, n) {
  n === void 0 && (n = 1), me(n <= Jf, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
  var r = H(Zf(e), 2), a = r[0], o = r[1];
  if (!!a) {
    var i = window.getComputedStyle(t).getPropertyValue(a);
    return i ? i.trim() : Rr(o) ? Vr(o, t, n + 1) : o;
  }
}
function Qf(e, t, n) {
  var r, a = ge(t, []), o = e.getInstance();
  if (!(o instanceof Element))
    return { target: a, transitionEnd: n };
  n && (n = S({}, n)), e.forEachValue(function(c) {
    var u = c.get();
    if (!!Rr(u)) {
      var p = Vr(u, o);
      p && c.set(p);
    }
  });
  for (var i in a) {
    var s = a[i];
    if (!!Rr(s)) {
      var l = Vr(s, o);
      !l || (a[i] = l, n && ((r = n[i]) !== null && r !== void 0 || (n[i] = s)));
    }
  }
  return { target: a, transitionEnd: n };
}
var ev = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y"
]), ss = function(e) {
  return ev.has(e);
}, tv = function(e) {
  return Object.keys(e).some(ss);
}, ls = function(e, t) {
  e.set(t, !1), e.set(t);
}, vn = function(e) {
  return e === st || e === I;
}, _i;
(function(e) {
  e.width = "width", e.height = "height", e.left = "left", e.right = "right", e.top = "top", e.bottom = "bottom";
})(_i || (_i = {}));
var yi = function(e, t) {
  return parseFloat(e.split(", ")[t]);
}, bi = function(e, t) {
  return function(n, r) {
    var a = r.transform;
    if (a === "none" || !a)
      return 0;
    var o = a.match(/^matrix3d\((.+)\)$/);
    if (o)
      return yi(o[1], t);
    var i = a.match(/^matrix\((.+)\)$/);
    return i ? yi(i[1], e) : 0;
  };
}, nv = /* @__PURE__ */ new Set(["x", "y", "z"]), rv = Yt.filter(function(e) {
  return !nv.has(e);
});
function av(e) {
  var t = [];
  return rv.forEach(function(n) {
    var r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t.length && e.syncRender(), t;
}
var xi = {
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
  x: bi(4, 13),
  y: bi(5, 14)
}, iv = function(e, t, n) {
  var r = t.measureViewportBox(), a = t.getInstance(), o = getComputedStyle(a), i = o.display, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), n.forEach(function(c) {
    s[c] = xi[c](r, o);
  }), t.syncRender();
  var l = t.measureViewportBox();
  return n.forEach(function(c) {
    var u = t.getValue(c);
    ls(u, s[c]), e[c] = xi[c](l, o);
  }), e;
}, ov = function(e, t, n, r) {
  n === void 0 && (n = {}), r === void 0 && (r = {}), t = S({}, t), r = S({}, r);
  var a = Object.keys(t).filter(ss), o = [], i = !1, s = [];
  if (a.forEach(function(c) {
    var u = e.getValue(c);
    if (!!e.hasValue(c)) {
      var p = n[c], f = Et(p), v = t[c], h;
      if (Ht(v)) {
        var g = v.length, _ = v[0] === null ? 1 : 0;
        p = v[_], f = Et(p);
        for (var x = _; x < g; x++)
          h ? me(Et(v[x]) === h, "All keyframes must be of the same type") : (h = Et(v[x]), me(h === f || vn(f) && vn(h), "Keyframes must be of the same dimension as the current value"));
      } else
        h = Et(v);
      if (f !== h)
        if (vn(f) && vn(h)) {
          var b = u.get();
          typeof b == "string" && u.set(parseFloat(b)), typeof v == "string" ? t[c] = parseFloat(v) : Array.isArray(v) && h === I && (t[c] = v.map(parseFloat));
        } else
          (f == null ? void 0 : f.transform) && (h == null ? void 0 : h.transform) && (p === 0 || v === 0) ? p === 0 ? u.set(h.transform(p)) : t[c] = f.transform(v) : (i || (o = av(e), i = !0), s.push(c), r[c] = r[c] !== void 0 ? r[c] : t[c], ls(u, v));
    }
  }), s.length) {
    var l = iv(t, e, s);
    return o.length && o.forEach(function(c) {
      var u = H(c, 2), p = u[0], f = u[1];
      e.getValue(p).set(f);
    }), e.syncRender(), { target: l, transitionEnd: r };
  } else
    return { target: t, transitionEnd: r };
};
function sv(e, t, n, r) {
  return tv(t) ? ov(e, t, n, r) : { target: t, transitionEnd: r };
}
var lv = function(e, t, n, r) {
  var a = Qf(e, t, r);
  return t = a.target, r = a.transitionEnd, sv(e, t, n, r);
};
function cv(e) {
  return window.getComputedStyle(e);
}
var cs = {
  treeType: "dom",
  readValueFromInstance: function(e, t) {
    if (rn(t)) {
      var n = Ur(t);
      return n && n.default || 0;
    } else {
      var r = cv(e);
      return (Ro(t) ? r.getPropertyValue(t) : r[t]) || 0;
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
    return rs(e, n);
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
    var o = t.transition, i = t.transitionEnd, s = ge(t, ["transition", "transitionEnd"]), l = yf(s, o || {}, e);
    if (a && (i && (i = a(i)), s && (s = a(s)), l && (l = a(l))), r) {
      gf(e, s, l);
      var c = lv(e, s, l, i);
      i = c.transitionEnd, s = c.target;
    }
    return S({ transition: o, transitionEnd: i }, s);
  },
  scrapeMotionValuesFromProps: Qr,
  build: function(e, t, n, r, a) {
    e.isVisible !== void 0 && (t.style.visibility = e.isVisible ? "visible" : "hidden"), Xr(t, n, r, a.transformTemplate);
  },
  render: Oo
}, uv = as(cs), dv = as(S(S({}, cs), { getBaseTarget: function(e, t) {
  return e[t];
}, readValueFromInstance: function(e, t) {
  var n;
  return rn(t) ? ((n = Ur(t)) === null || n === void 0 ? void 0 : n.default) || 0 : (t = Mo.has(t) ? t : $o(t), e.getAttribute(t));
}, scrapeMotionValuesFromProps: jo, build: function(e, t, n, r, a) {
  Jr(t, n, r, a.transformTemplate);
}, render: Do })), fv = function(e, t) {
  return Kr(e) ? dv(t, { enableHardwareAcceleration: !1 }) : uv(t, { enableHardwareAcceleration: !0 });
};
function Si(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
var Nt = {
  correct: function(e, t) {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (I.test(e))
        e = parseFloat(e);
      else
        return e;
    var n = Si(e, t.target.x), r = Si(e, t.target.y);
    return "".concat(n, "% ").concat(r, "%");
  }
}, Ti = "_$css", vv = {
  correct: function(e, t) {
    var n = t.treeScale, r = t.projectionDelta, a = e, o = e.includes("var("), i = [];
    o && (e = e.replace(os, function(g) {
      return i.push(g), Ti;
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
      v = v.replace(Ti, function() {
        var g = i[h];
        return h++, g;
      });
    }
    return v;
  }
}, pv = function(e) {
  Di(t, e);
  function t() {
    return e !== null && e.apply(this, arguments) || this;
  }
  return t.prototype.componentDidMount = function() {
    var n = this, r = this.props, a = r.visualElement, o = r.layoutGroup, i = r.switchLayoutGroup, s = r.layoutId, l = a.projection;
    Wu(mv), l && (o != null && o.group && o.group.add(l), (i == null ? void 0 : i.register) && s && i.register(l), l.root.didUpdate(), l.addEventListener("animationComplete", function() {
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
}(Kt.Component);
function hv(e) {
  var t = H(Ko(), 2), n = t[0], r = t[1], a = Q(Gr);
  return /* @__PURE__ */ d(pv, {
    ...S({}, e, {
      layoutGroup: a,
      switchLayoutGroup: Q(Eo),
      isPresent: n,
      safeToRemove: r
    })
  });
}
var mv = {
  borderRadius: S(S({}, Nt), {
    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  }),
  borderTopLeftRadius: Nt,
  borderTopRightRadius: Nt,
  borderBottomLeftRadius: Nt,
  borderBottomRightRadius: Nt,
  boxShadow: vv
}, gv = {
  measureLayout: hv
}, _v = Lo({
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
}), sr = {
  current: void 0
}, yv = Lo({
  measureScroll: function(e) {
    return {
      x: e.scrollLeft,
      y: e.scrollTop
    };
  },
  defaultParent: function() {
    if (!sr.current) {
      var e = new _v(0, {});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), sr.current = e;
    }
    return sr.current;
  },
  resetTransform: function(e, t) {
    e.style.transform = t != null ? t : "none";
  }
}), bv = S(S(S(S({}, Rf), sf), Yf), gv), Gt = /* @__PURE__ */ hd(function(e, t) {
  return jd(e, t, bv, fv, yv);
});
function us() {
  var e = re(!1);
  return Sn(function() {
    return e.current = !0, function() {
      e.current = !1;
    };
  }, []), e;
}
function xv() {
  var e = us(), t = H(te(0), 2), n = t[0], r = t[1], a = Ge(function() {
    e.current && r(n + 1);
  }, [n]), o = Ge(function() {
    return Te.postRender(a);
  }, [a]);
  return [o, n];
}
var lr = function(e) {
  var t = e.children, n = e.initial, r = e.isPresent, a = e.onExitComplete, o = e.custom, i = e.presenceAffectsLayout, s = Qt(Sv), l = Go(), c = Bt(
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
            for (var v = Wl(s.values()), h = v.next(); !h.done; h = v.next()) {
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
  return Bt(function() {
    s.forEach(function(u, p) {
      return s.set(p, !1);
    });
  }, [r]), he.useEffect(function() {
    !r && !s.size && (a == null || a());
  }, [r]), he.createElement(Jt.Provider, { value: c }, t);
};
function Sv() {
  return /* @__PURE__ */ new Map();
}
var mt = function(e) {
  return e.key || "";
}, Pi = On.env.NODE_ENV !== "production";
function Tv(e, t) {
  var n = Pi ? /* @__PURE__ */ new Set() : null;
  e.forEach(function(r) {
    var a = mt(r);
    Pi && n && n.has(a) && (console.warn('Children of AnimatePresence require unique keys. "'.concat(a, '" is a duplicate.')), n.add(a)), t.set(a, r);
  });
}
function Pv(e) {
  var t = [];
  return Vs.forEach(e, function(n) {
    Is(n) && t.push(n);
  }), t;
}
var Wn = function(e) {
  var t = e.children, n = e.custom, r = e.initial, a = r === void 0 ? !0 : r, o = e.onExitComplete, i = e.exitBeforeEnter, s = e.presenceAffectsLayout, l = s === void 0 ? !0 : s, c = H(xv(), 1), u = c[0], p = Q(Gr).forceRender;
  p && (u = p);
  var f = us(), v = Pv(t), h = v, g = /* @__PURE__ */ new Set(), _ = re(h), x = re(/* @__PURE__ */ new Map()).current, b = re(!0);
  if (Sn(function() {
    b.current = !1, Tv(v, x), _.current = h;
  }), ra(function() {
    b.current = !0, x.clear(), g.clear();
  }), b.current)
    return he.createElement(he.Fragment, null, h.map(function(A) {
      return he.createElement(lr, { key: mt(A), isPresent: !0, initial: a ? void 0 : !1, presenceAffectsLayout: l }, A);
    }));
  h = Se([], H(h), !1);
  for (var y = _.current.map(mt), C = v.map(mt), N = y.length, O = 0; O < N; O++) {
    var V = y[O];
    C.indexOf(V) === -1 && g.add(V);
  }
  return i && g.size && (h = []), g.forEach(function(A) {
    if (C.indexOf(A) === -1) {
      var $ = x.get(A);
      if (!!$) {
        var B = y.indexOf(A), Y = function() {
          x.delete(A), g.delete(A);
          var ie = _.current.findIndex(function(Z) {
            return Z.key === A;
          });
          if (_.current.splice(ie, 1), !g.size) {
            if (_.current = v, f.current === !1)
              return;
            u(), o && o();
          }
        };
        h.splice(B, 0, he.createElement(lr, { key: mt($), isPresent: !1, onExitComplete: Y, custom: n, presenceAffectsLayout: l }, $));
      }
    }
  }), h = h.map(function(A) {
    var $ = A.key;
    return g.has($) ? A : he.createElement(lr, { key: mt(A), isPresent: !0, presenceAffectsLayout: l }, A);
  }), On.env.NODE_ENV !== "production" && i && h.length > 1 && console.warn("You're attempting to animate multiple children within AnimatePresence, but its exitBeforeEnter prop is set to true. This will lead to odd visual behaviour."), he.createElement(he.Fragment, null, g.size ? h : h.map(function(A) {
    return Rs(A);
  }));
};
const Cv = "_accordionBtn_yh032_1", wv = "_label_yh032_35", Lv = "_icon_yh032_43", Ev = "_accordionBtnInnerWrapper_yh032_59", Nv = "_accordionContent_yh032_141", Rt = {
  accordionBtn: Cv,
  label: wv,
  icon: Lv,
  accordionBtnInnerWrapper: Ev,
  accordionContent: Nv
}, Rv = {
  open: {
    display: "block"
  },
  collapsed: {
    display: "none"
  }
}, Vv = ({
  id: e,
  label: t,
  description: n,
  isExpanded: r = !1,
  onAccordionBtnClick: a
}) => {
  function o() {
    a(e);
  }
  return /* @__PURE__ */ P(Pe, {
    children: [/* @__PURE__ */ d("button", {
      className: Rt.accordionBtn,
      id: `btn_${e}`,
      "aria-controls": e,
      "aria-expanded": r,
      onClick: o,
      children: /* @__PURE__ */ P("div", {
        className: Rt.accordionBtnInnerWrapper,
        children: [/* @__PURE__ */ d(ae, {
          icon: r ? "icon-x-circle" : "icon-plus-circle",
          className: Rt.icon
        }), /* @__PURE__ */ d("span", {
          className: L(Rt.label, "headingXS"),
          children: t
        })]
      })
    }), /* @__PURE__ */ d(Wn, {
      initial: !1,
      children: r && /* @__PURE__ */ d(Gt.div, {
        id: e,
        className: L(Rt.accordionContent),
        initial: "collapsed",
        animate: "open",
        exit: "collapsed",
        variants: Rv,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        },
        "aria-labelledby": `btn_${e}`,
        children: n
      })
    })]
  });
}, Iv = "_detailsBtn_1rwce_1", Av = "_label_1rwce_39", $v = "_icon_1rwce_49", Ov = "_isExpanded_1rwce_115", Mv = "_detailsContent_1rwce_157", vt = {
  detailsBtn: Iv,
  label: Av,
  icon: $v,
  isExpanded: Ov,
  detailsContent: Mv
}, Dv = {
  open: {
    opacity: 1,
    height: "auto"
  },
  collapsed: {
    opacity: 0,
    height: 0
  }
}, iy = ({
  id: e,
  label: t,
  description: n,
  isExpanded: r = !1,
  onDetailsBtnClick: a
}) => {
  function o() {
    a(e);
  }
  return /* @__PURE__ */ P(Pe, {
    children: [/* @__PURE__ */ P("button", {
      className: L(vt.detailsBtn, r && vt.isExpanded),
      id: `btn_${e}`,
      "aria-controls": e,
      "aria-expanded": r,
      onClick: o,
      children: [/* @__PURE__ */ d(ae, {
        icon: "icon-arrow-right",
        className: L(vt.icon, r && vt.isExpanded)
      }), /* @__PURE__ */ d("span", {
        className: L(vt.label, "body"),
        children: t
      })]
    }), /* @__PURE__ */ d(Wn, {
      initial: !1,
      children: r && /* @__PURE__ */ d(Gt.div, {
        id: e,
        className: L(vt.detailsContent),
        initial: "collapsed",
        animate: "open",
        exit: "collapsed",
        variants: Dv,
        transition: {
          duration: 0.5,
          ease: "easeOut"
        },
        "aria-labelledby": `btn_${e}`,
        children: n
      })
    })]
  });
}, jv = "_card_10qqn_1", kv = "_content_10qqn_35", Bv = "_center_10qqn_55", Fv = "_middleCenter_10qqn_63", Wv = "_heading_10qqn_81", qv = "_preamble_10qqn_107", Uv = "_link_10qqn_131", zv = "_picture_10qqn_139", Hv = "_image_10qqn_153", Yv = "_contain_10qqn_175", Gv = "_fill_10qqn_181", Kv = "_cover_10qqn_187", Ee = {
  card: jv,
  content: kv,
  center: Bv,
  middleCenter: Fv,
  heading: Wv,
  preamble: qv,
  link: Uv,
  picture: zv,
  image: Hv,
  contain: Yv,
  fill: Gv,
  cover: Kv
}, Xv = ({
  heading: e,
  preamble: t,
  link: n,
  image: r,
  imageFit: a
}) => /* @__PURE__ */ d("div", {
  className: Ee.card,
  children: /* @__PURE__ */ P("div", {
    className: L(Ee.content, (r || !n) && Ee.center, r && Ee.middleCenter),
    children: [r && /* @__PURE__ */ d(We, {
      ...r,
      classNamePicture: Ee.picture,
      classNameImg: L(Ee.image, a && Ee[a])
    }), !r && /* @__PURE__ */ P(Pe, {
      children: [/* @__PURE__ */ P("div", {
        children: [e && /* @__PURE__ */ d("h2", {
          className: Ee.heading,
          children: e
        }), t && /* @__PURE__ */ d("h3", {
          className: Ee.preamble,
          children: t
        })]
      }), n && /* @__PURE__ */ d(Oe, {
        ...n,
        iconRight: "icon-arrow-right",
        onSurface: "transparent",
        size: "default",
        className: Ee.link,
        children: n == null ? void 0 : n.children
      })]
    })]
  })
}), Zv = "_list_k7su0_1", Jv = {
  list: Zv
}, oy = ({
  children: e
}) => /* @__PURE__ */ d("ol", {
  className: Jv.list,
  children: e
}), Qv = "_list_16k0t_1", ep = {
  list: Qv
}, sy = ({
  children: e
}) => /* @__PURE__ */ d("ul", {
  className: ep.list,
  children: e
}), tp = "_search_1u22s_1", np = "_searchBar_1u22s_5", rp = "_searchButton_1u22s_11", ap = "_inputField_1u22s_18", ip = "_clearButton_1u22s_30", op = "_searchResults_1u22s_41", sp = "_searchResultLink_1u22s_66", lp = "_active_1u22s_73", cp = "_searchResultItem_1u22s_78", up = "_serchResultItemLabel_1u22s_83", ve = {
  search: tp,
  searchBar: np,
  searchButton: rp,
  inputField: ap,
  clearButton: ip,
  searchResults: op,
  searchResultLink: sp,
  active: lp,
  searchResultItem: cp,
  serchResultItemLabel: up
};
function ds({ onClose: e, isOpen: t, disableClose: n }) {
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
function fs({ ref: e, onClose: t, disableClose: n }) {
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
const dp = (e) => {
  const [t, n] = te({
    render: () => null,
    remove: () => null
  }), r = Ge((a) => ({
    render: ({ children: s }) => As(s, a),
    remove: () => $s(a)
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
}, fp = dp;
function vp(e, t = 0) {
  const [n, r] = te(t);
  return Ar(() => {
    function a() {
      e && e.current && r(e.current.scrollLeft);
    }
    return e && e.current && e.current.addEventListener("scroll", a), a(), () => {
      e && e.current && e.current.removeEventListener("scroll", a);
    };
  }, []), n;
}
function pp(e, t, n) {
  var i;
  const r = (i = e.current) == null ? void 0 : i.querySelectorAll('button, [href], input, select, textarea, video, [tabindex]:not([tabindex="-1"])'), a = r != null && r.length ? r[0] : null;
  Ar(() => {
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
function hp({
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
  const p = re(null), f = re(null), v = Ge(() => (r(!1), (f == null ? void 0 : f.current) && f.current.blur()), [r]), h = Ge(() => {
    r(!0), i(!0);
  }, [r, i]), g = Ge(() => {
    i(!1);
  }, [i]), _ = Ge((b) => {
    n || r(!0), o(b.target.value);
  }, [n, r, o]);
  function x() {
    return o(""), (f == null ? void 0 : f.current) && f.current.focus();
  }
  return fs({
    ref: p,
    onClose: v
  }), ds({
    onClose: v,
    isOpen: n
  }), /* @__PURE__ */ P("div", {
    ref: p,
    className: L(ve.search, e),
    children: [/* @__PURE__ */ P("div", {
      className: ve.searchBar,
      children: [/* @__PURE__ */ d(St, {
        className: ve.searchButton,
        type: "button",
        surface: "primary",
        size: "small",
        children: /* @__PURE__ */ d(ae, {
          icon: "icon-search"
        })
      }), /* @__PURE__ */ d(Ft, {
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
        onClick: x,
        tabIndex: -1,
        type: "button",
        className: ve.clearButton,
        children: /* @__PURE__ */ d(ae, {
          icon: "icon-x",
          className: "text-icon"
        })
      })]
    }), n && a && /* @__PURE__ */ d("div", {
      className: ve.searchResults,
      children: /* @__PURE__ */ P("ul", {
        "aria-labelledby": t,
        children: [s.map((b, y) => /* @__PURE__ */ d("li", {
          children: /* @__PURE__ */ P("a", {
            href: b.slug,
            className: ve.searchResultLink,
            children: [/* @__PURE__ */ d("span", {
              className: ve.serchResultItemLabel,
              children: b.label
            }), b.text && /* @__PURE__ */ d("span", {
              children: " - "
            }), /* @__PURE__ */ d("span", {
              className: ve.serchResultItemText,
              children: b.text
            })]
          })
        }, `${t}_${y}`)), s.length === 0 && a.length ? /* @__PURE__ */ d("li", {
          children: /* @__PURE__ */ P("div", {
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
const mp = "_hero_1q5bu_1", gp = "_outerWrapper_1q5bu_15", _p = "_innerWrapper_1q5bu_47", yp = "_content_1q5bu_85", bp = "_topHeading_1q5bu_135", xp = "_heading_1q5bu_143", Sp = "_preamble_1q5bu_167", Tp = "_linkButton_1q5bu_189", Pp = "_lightTheme_1q5bu_203", Cp = "_darkTheme_1q5bu_221", wp = "_picture_1q5bu_239", Lp = "_image_1q5bu_251", ue = {
  hero: mp,
  outerWrapper: gp,
  innerWrapper: _p,
  content: yp,
  "content-left": "_content-left_1q5bu_101",
  "content-right": "_content-right_1q5bu_109",
  "content-center": "_content-center_1q5bu_121",
  topHeading: bp,
  heading: xp,
  preamble: Sp,
  linkButton: Tp,
  lightTheme: Pp,
  darkTheme: Cp,
  picture: wp,
  image: Lp
};
function Ep(e = "left") {
  return ue[`content-${e}`];
}
function Np(e = "light") {
  return e === "dark" ? ue.darkTheme : ue.lightTheme;
}
const Rp = ({
  topHeading: e,
  heading: t,
  preamble: n,
  image: r,
  alignContent: a,
  link: o,
  heroTheme: i,
  fetchPriority: s,
  loading: l
}) => /* @__PURE__ */ P("section", {
  className: ue.hero,
  children: [/* @__PURE__ */ d(We, {
    ...r,
    fetchPriority: s,
    loading: l,
    classNamePicture: ue.picture,
    classNameImg: L(ue.image)
  }), /* @__PURE__ */ d("div", {
    className: ue.outerWrapper,
    children: /* @__PURE__ */ d("div", {
      className: ue.innerWrapper,
      children: /* @__PURE__ */ P("div", {
        className: L(ue.content, Ep(a), Np(i)),
        children: [(e || t) && /* @__PURE__ */ P("header", {
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
        }), o && /* @__PURE__ */ d(Mi, {
          surface: "primary",
          size: "small",
          ...o,
          className: ue.linkButton
        })]
      })
    })
  })]
}), Vp = "_cardPoster_273ug_1", Ip = "_decorativeOne_273ug_31", Ap = "_decorativeTwo_273ug_41", $p = "_content_273ug_53", Op = "_heading_273ug_83", Mp = "_preamble_273ug_109", Dp = "_description_273ug_135", jp = "_link_273ug_159", Ue = {
  cardPoster: Vp,
  decorativeOne: Ip,
  decorativeTwo: Ap,
  content: $p,
  heading: Op,
  preamble: Mp,
  description: Dp,
  link: jp
}, kp = "_picture_zpjjk_1", Bp = "_image_zpjjk_15", Fp = "_contain_zpjjk_39", Wp = "_opacityLayer_zpjjk_49", pn = {
  picture: kp,
  image: Bp,
  contain: Fp,
  opacityLayer: Wp
}, vs = ({
  image: e,
  contain: t
}) => /* @__PURE__ */ P(Pe, {
  children: [/* @__PURE__ */ d(We, {
    ...e,
    classNamePicture: pn.picture,
    classNameImg: L(pn.image, t && pn.contain)
  }), /* @__PURE__ */ d("div", {
    className: pn.opacityLayer
  })]
}), ly = ({
  image: e,
  surface: t,
  heading: n,
  preamble: r,
  description: a,
  link: o
}) => /* @__PURE__ */ P("div", {
  className: L(Ue.cardPoster, t && !e && Ue[t]),
  children: [e && /* @__PURE__ */ d(vs, {
    image: e
  }), /* @__PURE__ */ P("div", {
    className: `${Ue.content}`,
    children: [r && /* @__PURE__ */ d("h2", {
      className: Ue.preamble,
      children: r
    }), r ? /* @__PURE__ */ d("h3", {
      className: Ue.heading,
      children: n
    }) : /* @__PURE__ */ d("h2", {
      className: Ue.heading,
      children: n
    }), a && /* @__PURE__ */ d("p", {
      className: Ue.description,
      children: a
    }), o && /* @__PURE__ */ d(Oe, {
      ...o,
      iconRight: "icon-arrow-right",
      onSurface: t && !e ? t : "decorativeTwo",
      size: "default",
      className: Ue.link,
      children: o == null ? void 0 : o.children
    })]
  })]
}), qp = "_cardList_1ik58_1", Up = "_rectangular_1ik58_29", zp = "_decorativeOne_1ik58_41", Hp = "_decorativeTwo_1ik58_51", Yp = "_list_1ik58_57", Gp = "_square_1ik58_75", Kp = "_content_1ik58_85", Xp = "_heading_1ik58_99", Zp = "_preamble_1ik58_113", Jp = "_link_1ik58_267", Qp = "_largeDeviceLink_1ik58_275", eh = "_smallDeviceLink_1ik58_289", be = {
  cardList: qp,
  rectangular: Up,
  decorativeOne: zp,
  decorativeTwo: Hp,
  list: Yp,
  square: Gp,
  content: Kp,
  heading: Xp,
  preamble: Zp,
  link: Jp,
  largeDeviceLink: Qp,
  smallDeviceLink: eh
}, cy = ({
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
    children: /* @__PURE__ */ P("div", {
      className: be.content,
      children: [/* @__PURE__ */ P("div", {
        children: [/* @__PURE__ */ d("h2", {
          className: be.preamble,
          children: n
        }), /* @__PURE__ */ d("ul", {
          className: be.list,
          children: o()
        })]
      }), /* @__PURE__ */ d(Oe, {
        ...a,
        iconRight: "icon-arrow-right",
        onSurface: e,
        size: r === "1:1" ? "large" : "default",
        className: L(be.link, be.largeDeviceLink),
        children: a == null ? void 0 : a.children
      }), /* @__PURE__ */ d(Oe, {
        ...a,
        iconRight: "icon-arrow-right",
        onSurface: e,
        size: "default",
        className: L(be.link, be.smallDeviceLink),
        children: a == null ? void 0 : a.children
      })]
    })
  });
}, th = "_cardSquare_16qr4_1", nh = "_decorativeOne_16qr4_31", rh = "_decorativeTwo_16qr4_41", ah = "_transparent_16qr4_51", ih = "_content_16qr4_61", oh = "_heading_16qr4_91", sh = "_preamble_16qr4_117", lh = "_description_16qr4_145", ch = "_link_16qr4_169", uh = "_largeDeviceLink_16qr4_177", dh = "_smallDeviceLink_16qr4_191", Ne = {
  cardSquare: th,
  decorativeOne: nh,
  decorativeTwo: rh,
  transparent: ah,
  content: ih,
  heading: oh,
  preamble: sh,
  description: lh,
  link: ch,
  largeDeviceLink: uh,
  smallDeviceLink: dh
}, uy = ({
  surface: e,
  image: t,
  heading: n,
  preamble: r,
  description: a,
  link: o
}) => /* @__PURE__ */ P("div", {
  className: L(Ne.cardSquare, e && !t && Ne[e]),
  children: [t && /* @__PURE__ */ d(vs, {
    image: t
  }), /* @__PURE__ */ P("div", {
    className: Ne.content,
    children: [/* @__PURE__ */ P("div", {
      children: [r && /* @__PURE__ */ d("h2", {
        className: Ne.preamble,
        children: r
      }), /* @__PURE__ */ d("h3", {
        className: Ne.heading,
        children: n
      })]
    }), /* @__PURE__ */ P("div", {
      children: [a && /* @__PURE__ */ d("p", {
        className: Ne.description,
        children: a
      }), o && /* @__PURE__ */ P(Pe, {
        children: [/* @__PURE__ */ d(Oe, {
          ...o,
          iconRight: "icon-arrow-right",
          onSurface: e && !t ? e : t ? "decorativeTwo" : "transparent",
          size: "large",
          className: L(Ne.link, Ne.largeDeviceLink),
          children: o == null ? void 0 : o.children
        }), /* @__PURE__ */ d(Oe, {
          ...o,
          iconRight: "icon-arrow-right",
          onSurface: e && !t ? e : t ? "decorativeTwo" : "transparent",
          size: "default",
          className: L(Ne.link, Ne.smallDeviceLink),
          children: o == null ? void 0 : o.children
        })]
      })]
    })]
  })]
}), fh = "_list_1sb6r_1", vh = "_listItem_1sb6r_33", ph = "_maxColumnsThree_1sb6r_79", hh = "_maxColumnsFour_1sb6r_135", In = {
  list: fh,
  listItem: vh,
  maxColumnsThree: ph,
  maxColumnsFour: hh
};
function mh(e) {
  return e === 4 ? In.maxColumnsFour : In.maxColumnsThree;
}
const dy = ({
  list: e = [],
  maxColumns: t
}) => /* @__PURE__ */ d("ul", {
  className: In.list,
  children: e.map((n, r) => /* @__PURE__ */ d("li", {
    className: L(In.listItem, mh(t)),
    children: /* @__PURE__ */ d(Xv, {
      ...n
    })
  }, r))
}), gh = "_defaultStyleList_1jk7r_1", _h = "_horizontal_1jk7r_13", yh = "_defaultStyleListItem_1jk7r_21", bh = "_vertical_1jk7r_43", xh = "_defaultStyleRadioWrapper_1jk7r_59", Sh = "_defaultStyleRadio_1jk7r_59", Th = "_defaultStyleLabel_1jk7r_77", Ph = "_disabled_1jk7r_91", tt = {
  defaultStyleList: gh,
  horizontal: _h,
  defaultStyleListItem: yh,
  vertical: bh,
  defaultStyleRadioWrapper: xh,
  defaultStyleRadio: Sh,
  defaultStyleLabel: Th,
  disabled: Ph
}, fy = ({
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
    className: t ? L(t) : L(tt.defaultStyleList, tt[s]),
    children: i.map((l) => /* @__PURE__ */ d("li", {
      className: L(n || tt.defaultStyleListItem),
      children: /* @__PURE__ */ P("div", {
        className: L(o || tt.defaultStyleRadioWrapper),
        children: [/* @__PURE__ */ d(Ai, {
          ...l,
          className: a || tt.defaultStyleRadio
        }, l.id), /* @__PURE__ */ d("label", {
          className: L("body", r || tt.defaultStyleLabel, l.disabled && tt.disabled),
          htmlFor: l.id,
          children: l.label
        })]
      })
    }, l.id))
  })
}), Ch = "_defaultStyleList_k93x1_1", wh = "_horizontal_k93x1_13", Lh = "_defaultStyleListItem_k93x1_21", Eh = "_vertical_k93x1_43", Nh = "_defaultStyleCheckboxWrapper_k93x1_59", Rh = "_defaultStyleCheckbox_k93x1_59", Vh = "_defaultStyleLabel_k93x1_79", Ih = "_disabled_k93x1_91", nt = {
  defaultStyleList: Ch,
  horizontal: wh,
  defaultStyleListItem: Lh,
  vertical: Eh,
  defaultStyleCheckboxWrapper: Nh,
  defaultStyleCheckbox: Rh,
  defaultStyleLabel: Vh,
  disabled: Ih
}, vy = ({
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
    className: L(t || `${nt.defaultStyleList} ${nt[s]}`),
    children: i.map((l) => /* @__PURE__ */ d("li", {
      className: L(n || nt.defaultStyleListItem),
      children: /* @__PURE__ */ P("div", {
        className: L(o || nt.defaultStyleCheckboxWrapper),
        children: [/* @__PURE__ */ d($i, {
          ...l,
          className: L(a || nt.defaultStyleCheckbox)
        }), /* @__PURE__ */ d("label", {
          className: L("body", r || nt.defaultStyleLabel, l.disabled && nt.disabled),
          htmlFor: l.id,
          children: l.label
        })]
      })
    }, l.id))
  })
}), Ah = "_labelWrapper_jzsgi_1", $h = "_label_jzsgi_1", Oh = "_hasHelpText_jzsgi_21", Mh = "_helperText_jzsgi_75", Dh = "_errorText_jzsgi_83", Vt = {
  labelWrapper: Ah,
  label: $h,
  hasHelpText: Oh,
  helperText: Mh,
  errorText: Dh
}, Ir = ({
  label: e,
  formElementId: t,
  className: n,
  children: r,
  helperText: a,
  errorText: o,
  requiredText: i,
  labelRightText: s
}) => /* @__PURE__ */ P("div", {
  className: n,
  children: [/* @__PURE__ */ P("label", {
    className: Vt.labelWrapper,
    htmlFor: t,
    children: [/* @__PURE__ */ P("span", {
      className: L("body", Vt.label, a && Vt.hasHelpText),
      children: [/* @__PURE__ */ P("span", {
        children: [e, " ", i]
      }), s && /* @__PURE__ */ d("span", {
        children: s
      })]
    }), a && /* @__PURE__ */ d(ll, {
      className: Vt.helperText,
      children: a
    })]
  }), r, o && /* @__PURE__ */ d(il, {
    className: Vt.errorText,
    children: o
  })]
}), jh = "_defaultStyleLabel_1seve_1", kh = "_checkboxWrapper_1seve_13", Bh = "_disabled_1seve_23", cr = {
  defaultStyleLabel: jh,
  checkboxWrapper: kh,
  disabled: Bh
}, py = ({
  className: e,
  label: t,
  inputProps: n,
  helperText: r,
  errorText: a,
  checkboxLabel: o,
  labelRightText: i,
  visiblePassword: s = !1
}) => {
  const [l, c] = te(s);
  G(() => {
    c(s);
  }, [s]);
  function u(p) {
    c(!l);
  }
  return /* @__PURE__ */ P(Pe, {
    children: [/* @__PURE__ */ d(Ir, {
      formElementId: n.id,
      className: e,
      label: t,
      errorText: a,
      helperText: r,
      labelRightText: i,
      children: /* @__PURE__ */ d(Ft, {
        ...n,
        type: l ? "text" : "password",
        isErroneous: !!a
      })
    }), /* @__PURE__ */ P("div", {
      className: cr.checkboxWrapper,
      children: [/* @__PURE__ */ d($i, {
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
        className: L("body", cr.defaultStyleLabel, (n == null ? void 0 : n.disabled) && cr.disabled),
        children: o
      })]
    })]
  });
}, Fh = "_navigation_1m24j_1", Wh = "_navigationOpen_1m24j_17", qh = "_bar_1m24j_35", Uh = "_searchNavBar_1m24j_63", zh = "_largeDeviceMenuBar_1m24j_75", Hh = "_smallDeviceMenu_1m24j_91", Yh = "_menuButton_1m24j_91", Gh = "_open_1m24j_129", Kh = "_icon_1m24j_133", Xh = "_menuButtonInner_1m24j_153", Zh = "_largeDeviceMenu_1m24j_75", Jh = "_linkList_1m24j_195", Qh = "_link_1m24j_195", em = "_active_1m24j_261", tm = "_linkItem_1m24j_343", ce = {
  navigation: Fh,
  navigationOpen: Wh,
  bar: qh,
  searchNavBar: Uh,
  largeDeviceMenuBar: zh,
  smallDeviceMenu: Hh,
  menuButton: Yh,
  open: Gh,
  icon: Kh,
  menuButtonInner: Xh,
  largeDeviceMenu: Zh,
  linkList: Jh,
  link: Qh,
  active: em,
  linkItem: tm
}, nm = "_logoPicture_13vdd_1", rm = "_logoImg_13vdd_6", am = "_linkLogo_13vdd_14", im = "_active_13vdd_42", om = "_searchNavLinksWrapper_13vdd_55", sm = "_searchNavLink_13vdd_55", lm = "_navIcon_13vdd_88", cm = "_searchComponent_13vdd_92", um = "_innerSearchWrapper_13vdd_106", ze = {
  logoPicture: nm,
  logoImg: rm,
  linkLogo: am,
  active: im,
  searchNavLinksWrapper: om,
  searchNavLink: sm,
  navIcon: lm,
  searchComponent: cm,
  innerSearchWrapper: um
}, dm = ({
  logo: e,
  searchNavLinks: t,
  linkComponent: n,
  searchArgs: r,
  itemsToFilterOn: a
}) => {
  const [o, i] = te(!1), [s, l] = te(!1), [c, u] = te(""), [p, f] = te([]);
  return G(() => {
    let v = new RegExp(c.toLowerCase(), "i");
    f(a.filter((h) => c && h.label && v.test(h.label.toLowerCase())));
  }, [c]), /* @__PURE__ */ P(Pe, {
    children: [e && /* @__PURE__ */ d(n, {
      to: e.href,
      className: ze.linkLogo,
      children: /* @__PURE__ */ d(We, {
        ...e,
        classNamePicture: ze.logoPicture,
        classNameImg: ze.logoImg
      })
    }), /* @__PURE__ */ P("div", {
      className: ze.innerSearchWrapper,
      children: [/* @__PURE__ */ d(hp, {
        className: ze.searchComponent,
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
        className: ze.searchNavLinksWrapper,
        children: t.map((v, h) => /* @__PURE__ */ d(n, {
          to: v.href,
          className: ze.searchNavLink,
          children: /* @__PURE__ */ d(ae, {
            icon: v.navLinkType === "favorites" ? "icon-heart" : "icon-shopping-cart",
            className: ze.navIcon
          })
        }, `${v.href}-${h}`))
      })]
    })]
  });
}, fm = "_topNavBar_1jinx_1", vm = "_topNavText_1jinx_14", pm = "_navLinksWrapper_1jinx_21", hm = "_topNavLink_1jinx_27", mm = "_active_1jinx_43", gm = "_navIcon_1jinx_50", De = {
  topNavBar: fm,
  topNavText: vm,
  navLinksWrapper: pm,
  topNavLink: hm,
  active: mm,
  navIcon: gm
}, _m = ({
  topNavLinks: e,
  linkComponent: t
}) => {
  const n = e.filter((a) => a.navLinkType === "email" || a.navLinkType === "telephone"), r = e.filter((a) => a.navLinkType === "login" || a.navLinkType === "register");
  return /* @__PURE__ */ P("div", {
    className: De.topNavBar,
    children: [Array.isArray(n) && n.length && /* @__PURE__ */ d("ul", {
      className: De.navLinksWrapper,
      children: n.map((a, o) => /* @__PURE__ */ P("a", {
        href: a.navLinkType === "email" ? `mailto:${a.href}` : `tel:${a.href}`,
        className: De.topNavLink,
        children: [/* @__PURE__ */ d(ae, {
          icon: a.navLinkType === "email" ? "icon-mail" : "icon-phone",
          className: De.navIcon
        }), /* @__PURE__ */ d("span", {
          className: De.topNavText,
          children: a.children
        })]
      }, `${a.href}-${o}`))
    }), Array.isArray(r) && r.length && /* @__PURE__ */ d("ul", {
      className: De.navLinksWrapper,
      children: r.map((a, o) => /* @__PURE__ */ P(t, {
        to: a.href,
        className: De.topNavLink,
        target: "_blank",
        title: a.children,
        children: [/* @__PURE__ */ d(ae, {
          icon: a.navLinkType === "register" ? "icon-plus-circle" : "icon-user",
          className: De.navIcon
        }), /* @__PURE__ */ d("span", {
          className: De.topNavText,
          children: a.children
        })]
      }, `${a.href}-${o}`))
    })]
  });
}, Ci = ({
  links: e = [],
  linkComponent: t
}) => /* @__PURE__ */ d("ul", {
  className: ce.linkList,
  children: e.map((n, r) => /* @__PURE__ */ d("li", {
    className: ce.linkItem,
    children: /* @__PURE__ */ d(Oe, {
      ...n,
      size: "default",
      onSurface: "transparent",
      className: ce.link
    })
  }, `${n.href}-${r}`))
}), ym = ({
  topNavBar: e,
  searchNavBar: t,
  links: n,
  button: r,
  linkComponent: a
}) => {
  const [o, i] = te(!1);
  return /* @__PURE__ */ P("nav", {
    className: `${ce.navigation} ${o ? ce.navigationOpen : ""}`,
    children: [/* @__PURE__ */ d(_m, {
      ...e
    }), /* @__PURE__ */ P("div", {
      className: L(ce.bar, ce.searchNavBar),
      children: [/* @__PURE__ */ d(dm, {
        ...t
      }), /* @__PURE__ */ d("button", {
        id: "navigation-menu-btn",
        type: "button",
        "aria-label": "menu",
        "aria-controls": "navigation-menu",
        "aria-expanded": o,
        onClick: () => i(!o),
        className: L(ce.menuButton, o && ce.open),
        children: /* @__PURE__ */ d("span", {
          className: ce.menuButtonInner,
          children: /* @__PURE__ */ d(ae, {
            icon: "icon-menu",
            className: ce.icon
          })
        })
      })]
    }), n != null && n.length ? /* @__PURE__ */ d("div", {
      className: L(ce.bar, ce.largeDeviceMenuBar),
      children: /* @__PURE__ */ d(Ci, {
        links: n,
        linkComponent: a
      })
    }) : null, ((n == null ? void 0 : n.length) || r) && /* @__PURE__ */ d(Wn, {
      initial: !1,
      children: o && /* @__PURE__ */ d(Gt.div, {
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
          className: ce.smallDeviceMenu,
          children: (n == null ? void 0 : n.length) && /* @__PURE__ */ d(Ci, {
            links: n,
            linkComponent: a
          })
        })
      })
    })]
  });
};
function bm(e) {
  return !!(e.href && e.isExternal);
}
function xm(e, t) {
  return !!(e.href && t);
}
function Sm(e, t, n) {
  !e || !t || (n && (t = { value: t, sessionStorageItemValidUntil: n }), typeof t == "object" && (t = JSON.stringify(t)), sessionStorage.setItem(e, t));
}
function Tm(e) {
  let t = new Date();
  return e >= t.setMinutes(t.getMinutes());
}
function Pm(e) {
  let t = sessionStorage.getItem(e);
  if (!!t)
    return (t[0] === "{" || t[0] === "[") && (t = JSON.parse(t)), t && !t.sessionStorageItemValidUntil ? t : Cm(t, e);
}
function Cm(e, t) {
  if (Tm(e.sessionStorageItemValidUntil))
    return e.value;
  wm(t);
}
function wm(e) {
  sessionStorage.removeItem(e);
}
const Lm = "_heading_wmxrx_1", Em = "_noMarginBottom_wmxrx_15", Nm = "_preamble_wmxrx_23", Rm = "_preambleReactNode_wmxrx_45", Vm = "_list_wmxrx_87", Im = "_listItem_wmxrx_125", Am = "_listItemHeading_wmxrx_163", $m = "_listItemPreamble_wmxrx_181", Om = "_link_wmxrx_191", Re = {
  heading: Lm,
  noMarginBottom: Em,
  preamble: Nm,
  preambleReactNode: Rm,
  list: Vm,
  listItem: Im,
  listItemHeading: Am,
  listItemPreamble: $m,
  link: Om
};
function Mm(e = "") {
  const t = typeof window < "u" && e ? Pm(e) : 0;
  return t || 0;
}
const hy = ({
  heading: e,
  preamble: t,
  list: n = [],
  linkComponent: r,
  listSessionId: a
}) => {
  const o = re(null), i = vp(o, Mm(a));
  G(() => {
    o != null && o.current && (o.current.scrollLeft = i || 0);
  }, []), G(() => {
    a && Sm(a, i);
  }, [i]);
  function s(l) {
    return (l == null ? void 0 : l.link) && bm(l.link) ? /* @__PURE__ */ d("a", {
      href: l.link.href,
      target: l.link.target,
      title: l.link.title,
      className: Re.link,
      children: /* @__PURE__ */ d(Zn, {
        ...l.image
      })
    }) : (l == null ? void 0 : l.link) && xm(l.link, r) ? /* @__PURE__ */ d(r, {
      to: l.link.href,
      target: l.link.target,
      title: l.link.title,
      className: Re.link,
      children: /* @__PURE__ */ d(Zn, {
        ...l.image
      })
    }) : /* @__PURE__ */ d(Zn, {
      ...l.image
    });
  }
  return /* @__PURE__ */ P("section", {
    children: [e && /* @__PURE__ */ d("h1", {
      className: `headingS ${Re.heading} ${t ? Re.noMarginBottom : ""}`,
      children: e
    }), t && Kt.isValidElement(t) ? /* @__PURE__ */ d("div", {
      className: Re.preambleReactNode,
      children: t
    }) : /* @__PURE__ */ d("p", {
      className: Re.preamble,
      children: t
    }), /* @__PURE__ */ d("ul", {
      ref: o,
      className: Re.list,
      children: n.map((l, c) => /* @__PURE__ */ P("li", {
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
}, my = ({
  data: e
}) => /* @__PURE__ */ P(Fl, {
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
}), Dm = "_list_1eu27_1", jm = "_listItem_1eu27_11", wi = {
  list: Dm,
  listItem: jm
}, gy = ({
  list: e = [],
  onAccordionBtnClick: t
}) => /* @__PURE__ */ d("ul", {
  className: wi.list,
  children: e.map((n) => /* @__PURE__ */ d("li", {
    className: wi.listItem,
    children: /* @__PURE__ */ d(Vv, {
      ...n,
      onAccordionBtnClick: t
    })
  }, n.id))
}), km = "_outerWrapper_3qh7z_1", Bm = "_innerWrapper_3qh7z_13", Fm = "_heading_3qh7z_37", Wm = "_preamble_3qh7z_57", qm = "_linkList_3qh7z_79", Um = "_linkListItem_3qh7z_91", pt = {
  outerWrapper: km,
  innerWrapper: Bm,
  heading: Fm,
  preamble: Wm,
  linkList: qm,
  linkListItem: Um
}, _y = ({
  heading: e,
  preamble: t,
  links: n = [],
  linkComponent: r
}) => /* @__PURE__ */ d("footer", {
  className: pt.outerWrapper,
  children: /* @__PURE__ */ P("div", {
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
          children: a.children
        }) : /* @__PURE__ */ d(r, {
          to: a.href,
          children: a.children
        })
      }, `${a.children}-${o}`))
    })]
  })
}), zm = "_linkList_1twgo_1", Hm = "_vertical_1twgo_13", Ym = "_horizontal_1twgo_37", Gm = "_linkListItem_1twgo_47", hn = {
  linkList: zm,
  vertical: Hm,
  horizontal: Ym,
  linkListItem: Gm
}, yy = ({
  links: e = [],
  linkComponent: t,
  direction: n = "vertical"
}) => /* @__PURE__ */ d(Pe, {
  children: e instanceof Array && e.length && /* @__PURE__ */ d("ul", {
    className: L(hn.linkList, n === "vertical" ? hn.vertical : hn.horizontal),
    children: e.map((r, a) => /* @__PURE__ */ d("li", {
      className: hn.linkListItem,
      children: r.isExternal ? /* @__PURE__ */ d("a", {
        href: r.href,
        target: r.target,
        children: r.children
      }) : /* @__PURE__ */ d(t, {
        to: r.href,
        children: r.children
      })
    }, `${r.children}-${a}`))
  })
}), Km = "_dialog_wugmk_1", Xm = "_innerWrapper_wugmk_3", Zm = "_overlay_wugmk_29", Jm = "_content_wugmk_43", Qm = "_noPadding_wugmk_93", eg = "_closeBtn_wugmk_101", tg = "_icon_wugmk_163", rt = {
  dialog: Km,
  innerWrapper: Xm,
  overlay: Zm,
  content: Jm,
  noPadding: Qm,
  closeBtn: eg,
  icon: tg
}, Li = 0.5, ng = {
  open: {
    display: "block"
  },
  closed: {
    display: "none"
  }
}, by = ({
  id: e,
  role: t,
  children: n,
  ariaLabelledBy: r,
  ariaDescribedBy: a,
  hasOverlay: o,
  onClose: i,
  isOpen: s,
  animationVariants: l = ng,
  focusableElementInside: c,
  noPadding: u,
  hasPortal: p = !0,
  theme: f,
  className: v
}) => {
  const h = re(null), g = re(null);
  fs({
    ref: g,
    onClose: i
  }), pp(h, s, c), ds({
    onClose: i,
    isOpen: s
  });
  const _ = fp(document.querySelector("body")), x = () => /* @__PURE__ */ d(Wn, {
    initial: !1,
    children: s && /* @__PURE__ */ P("div", {
      className: L(rt.dialog, v),
      id: e || void 0,
      role: t,
      "aria-labelledby": r,
      "aria-describedby": a,
      "aria-modal": "true",
      ref: h,
      children: [o && /* @__PURE__ */ d(Gt.div, {
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
          duration: Li,
          ease: "easeOut"
        },
        children: /* @__PURE__ */ d("div", {
          className: rt.overlay
        })
      }), /* @__PURE__ */ d(Gt.div, {
        id: e,
        initial: "closed",
        animate: "open",
        exit: "closed",
        variants: l,
        transition: {
          duration: Li,
          ease: "easeOut"
        },
        children: /* @__PURE__ */ d("div", {
          className: rt.innerWrapper,
          children: /* @__PURE__ */ P("div", {
            className: L(rt.content, f, u && rt.noPadding),
            ref: g,
            children: [/* @__PURE__ */ d("button", {
              className: rt.closeBtn,
              onClick: i,
              children: /* @__PURE__ */ d(ae, {
                icon: "icon-x",
                className: rt.icon
              })
            }), n]
          })
        })
      })]
    })
  });
  return p ? /* @__PURE__ */ d(_, {
    children: x()
  }) : x();
}, rg = "_offerCard_1o3yd_1", ag = "_icon_1o3yd_13", ig = "_heading_1o3yd_18", og = "_text_1o3yd_22", mn = {
  offerCard: rg,
  icon: ag,
  heading: ig,
  text: og
}, sg = ({
  icon: e,
  heading: t,
  text: n
}) => /* @__PURE__ */ P("div", {
  className: mn.offerCard,
  children: [/* @__PURE__ */ d(ae, {
    icon: e,
    className: mn.icon
  }), /* @__PURE__ */ d("h4", {
    className: mn.heading,
    children: t
  }), /* @__PURE__ */ d("p", {
    className: L(mn.text, "body"),
    dangerouslySetInnerHTML: {
      __html: n
    }
  })]
}), lg = "_cardImageWrapper_1b0gp_1", cg = "_imageWrapper_1b0gp_14", ug = "_packageBtn_1b0gp_28", dg = "_content_1b0gp_35", fg = "_heading_1b0gp_45", vg = "_textGray_1b0gp_58", pg = "_textPurple_1b0gp_58", hg = "_cardPicture_1b0gp_79", mg = "_cardImage_1b0gp_1", je = {
  cardImageWrapper: lg,
  imageWrapper: cg,
  packageBtn: ug,
  content: dg,
  heading: fg,
  textGray: vg,
  textPurple: pg,
  cardPicture: hg,
  cardImage: mg
}, gg = "_dividerWrapper_1v86w_1", _g = "_divLeft_1v86w_16", yg = "_divCenter_1v86w_20", bg = "_divRight_1v86w_24", gn = {
  dividerWrapper: gg,
  divLeft: _g,
  divCenter: yg,
  divRight: bg
}, ps = () => /* @__PURE__ */ P("div", {
  className: gn.dividerWrapper,
  children: [/* @__PURE__ */ d("div", {
    className: gn.divLeft
  }), /* @__PURE__ */ d("div", {
    className: gn.divCenter
  }), /* @__PURE__ */ d("div", {
    className: gn.divRight
  })]
}), xg = ({
  className: e,
  image: t,
  heading: n,
  articleId: r,
  country: a,
  packaging: o,
  unitPriceStr: i,
  onClick: s
}) => /* @__PURE__ */ P("div", {
  className: `${je.cardImageWrapper} ${e || ""}`,
  children: [/* @__PURE__ */ d(St, {
    className: je.packageBtn,
    type: "button",
    surface: "tertiary",
    rounded: !0,
    onClick: s,
    children: /* @__PURE__ */ d(ae, {
      icon: "icon-layers"
    })
  }), /* @__PURE__ */ P("div", {
    className: je.imageWrapper,
    children: [/* @__PURE__ */ d(We, {
      ...t,
      classNamePicture: je.cardPicture,
      classNameImg: `${je.cardImage}`
    }), " "]
  }), /* @__PURE__ */ P("div", {
    className: `${je.content}`,
    children: [/* @__PURE__ */ d("p", {
      className: je.heading,
      children: n
    }), /* @__PURE__ */ d(ps, {}), /* @__PURE__ */ d("p", {
      className: je.textGray,
      children: `Art.nr. ${r} - ${a}`
    }), /* @__PURE__ */ d("p", {
      className: je.textPurple,
      children: `${o}: ${i} kr/st`
    })]
  })]
}), Sg = "_inputQuantityWrapper_yem4a_1", Tg = "_quantityInputField_yem4a_7", Pg = "_textContainer_yem4a_20", Cg = "_textQuantity_yem4a_27", wg = "_textPrice_yem4a_32", It = {
  inputQuantityWrapper: Sg,
  quantityInputField: Tg,
  textContainer: Pg,
  textQuantity: Cg,
  textPrice: wg
}, Lg = ({
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
  return /* @__PURE__ */ P("div", {
    className: `${It.inputQuantityWrapper} ${e || ""}`,
    children: [/* @__PURE__ */ d(Ft, {
      id: n,
      defaultValue: t,
      placeholder: "1",
      onChange: s,
      type: "number",
      className: It.quantityInputField
    }), /* @__PURE__ */ P("div", {
      className: It.textContainer,
      children: [/* @__PURE__ */ d("p", {
        className: `${It.textQuantity} bodyS`,
        children: `x ${r} (${a} stick)`
      }), /* @__PURE__ */ d("p", {
        className: `${It.textPrice} bodyS fontBold`,
        children: `Pris: (${o} kr)`
      })]
    })]
  });
}, Eg = "_productCard_y05yr_1", Ng = "_productCardInput_y05yr_9", Rg = "_productCardBtn_y05yr_13", _n = {
  productCard: Eg,
  productCardInput: Ng,
  productCardBtn: Rg
};
function ur(e) {
  return e.toFixed(2).toString().replace(".", ",");
}
const Vg = "_productVariant_1idri_1", Ig = "_imageWrapper_1idri_8", Ag = "_picture_1idri_15", $g = "_image_1idri_8", Og = "_content_1idri_36", Ve = {
  productVariant: Vg,
  imageWrapper: Ig,
  picture: Ag,
  image: $g,
  content: Og
}, Mg = ({
  image: e,
  productName: t,
  variantName: n,
  variantId: r,
  country: a,
  listPricePerUnitString: o,
  onChange: i,
  checked: s
}) => /* @__PURE__ */ P("div", {
  className: Ve.productVariant,
  children: [/* @__PURE__ */ P("div", {
    className: Ve.imageWrapper,
    children: [/* @__PURE__ */ d(We, {
      ...e,
      classNamePicture: Ve.picture,
      classNameImg: `${Ve.image}`
    }), " "]
  }), /* @__PURE__ */ P("div", {
    className: `${Ve.content}`,
    children: [/* @__PURE__ */ d("p", {
      className: Ve.heading,
      children: t
    }), /* @__PURE__ */ d("p", {
      className: Ve.heading,
      children: n
    }), /* @__PURE__ */ d(ps, {}), /* @__PURE__ */ d("p", {
      className: Ve.textGray,
      children: `Art.nr. ${r} - ${a}`
    }), /* @__PURE__ */ d("p", {
      className: Ve.textPurple,
      children: `${n}: ${o} kr/st`
    })]
  }), /* @__PURE__ */ d("div", {
    className: Ve.checkboxWrapper,
    children: /* @__PURE__ */ d(Ai, {
      id: r,
      name: `variant-radio-${t}`,
      checked: s,
      value: r,
      onChange: i
    })
  })]
}), Dg = "_variantsList_1lpnm_1", jg = "_listItem_1lpnm_15", dr = {
  variantsList: Dg,
  listItem: jg
}, kg = ({
  className: e,
  variantsList: t,
  onVariantSelect: n,
  selectedVariantId: r
}) => {
  const [a, o] = te(r);
  function i(l) {
    const c = l.currentTarget.value;
    console.log("SELECTED VARIANT ID", c), o(c);
  }
  function s() {
    const l = t.find((c) => c.variantId === a);
    n(l, t);
  }
  return /* @__PURE__ */ P("div", {
    className: e || "",
    children: [/* @__PURE__ */ d("ul", {
      className: dr.variantsList,
      children: t.map((l) => /* @__PURE__ */ d("li", {
        className: dr.listItem,
        children: /* @__PURE__ */ d(Mg, {
          ...l,
          onChange: i,
          checked: l.variantId === a
        }, l.variantId)
      }, l.variantId))
    }), /* @__PURE__ */ d(St, {
      className: dr.productCardBtn,
      type: "button",
      surface: "primary",
      fullWidth: !0,
      onClick: s,
      children: "V\xE4lj variant"
    })]
  });
};
function Bg(e, t) {
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
const Fg = ({
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
  const [f, v] = te({
    productId: e,
    productName: t,
    productImage: Bg(e, n),
    country: r,
    packaging: a,
    priceStr: o,
    price: i,
    salesUnit: s,
    itemNumberPerSalesUnit: l,
    quantity: "1",
    totalPrice: ur(i * l),
    productVariantList: c,
    selectedVariantId: e
  }), [h, g] = te(!1);
  function _(y) {
    const C = parseInt(y.target.value) || 1;
    v({
      ...f,
      quantity: C.toString(),
      totalPrice: ur(f.price * f.itemNumberPerSalesUnit * C)
    });
  }
  function x() {
    g(!0);
  }
  function b(y) {
    v({
      ...f,
      productId: y.variantId,
      productImage: y.image,
      country: y.country,
      packaging: y.variantName,
      priceStr: y.listPricePerUnitString,
      price: y.price,
      salesUnit: y.salesUnit,
      itemNumberPerSalesUnit: y.itemNumberPerSalesUnit,
      totalPrice: ur(y.price * y.itemNumberPerSalesUnit),
      selectedVariantId: y.variantId
    }), g(!1);
  }
  return h ? /* @__PURE__ */ d(kg, {
    className: _n.productCard,
    variantsList: f.productVariantList,
    onVariantSelect: b,
    selectedVariantId: f.selectedVariantId
  }) : /* @__PURE__ */ P("div", {
    className: _n.productCard,
    children: [/* @__PURE__ */ d(xg, {
      heading: f.productName,
      image: f.productImage,
      articleId: f.productId,
      country: f.country,
      packaging: f.packaging,
      unitPriceStr: f.priceStr,
      onClick: x
    }), /* @__PURE__ */ d(Lg, {
      className: _n.productCardInput,
      salesUnit: f.salesUnit,
      itemNumberPerSalesUnit: f.itemNumberPerSalesUnit,
      totalPrice: f.totalPrice,
      quantity: f.quantity,
      quantityInputId: f.productId,
      onChange: _
    }), /* @__PURE__ */ d(St, {
      ...u,
      className: _n.productCardBtn,
      fullWidth: !0,
      onClick: () => p(f),
      children: "Add to cart"
    })]
  });
}, Wg = "_tag_8tyjh_1", qg = "_rectangular_8tyjh_10", Ug = "_small_8tyjh_11", zg = "_large_8tyjh_21", Hg = "_round_8tyjh_33", fr = {
  tag: Wg,
  rectangular: qg,
  small: Ug,
  large: zg,
  round: Hg
}, hs = ({
  text: e,
  size: t,
  shape: n,
  className: r
}) => /* @__PURE__ */ d("div", {
  className: `${fr.tag} ${fr[t]} ${fr[n]} ${r || ""}`,
  children: e
}), Yg = "_teaser_1ug5q_1", Gg = "_teaserLeft_1ug5q_13", Kg = "_teaserRight_1ug5q_19", Xg = "_imageWrapper_1ug5q_26", Zg = "_tag_1ug5q_44", Jg = "_tagLeft_1ug5q_51", Qg = "_tagRight_1ug5q_55", e_ = "_picture_1ug5q_59", t_ = "_image_1ug5q_26", n_ = "_contentWrapper_1ug5q_72", r_ = "_contentLeft_1ug5q_85", a_ = "_contentRight_1ug5q_96", i_ = "_heading_1ug5q_110", o_ = "_preamble_1ug5q_115", s_ = "_linkButton_1ug5q_119", l_ = "_text_1ug5q_123", c_ = "_textRight_1ug5q_153", J = {
  teaser: Yg,
  teaserLeft: Gg,
  teaserRight: Kg,
  imageWrapper: Xg,
  tag: Zg,
  tagLeft: Jg,
  tagRight: Qg,
  picture: e_,
  image: t_,
  contentWrapper: n_,
  contentLeft: r_,
  contentRight: a_,
  heading: i_,
  preamble: o_,
  linkButton: s_,
  text: l_,
  textRight: c_
}, Ei = ({
  heading: e,
  preamble: t,
  text: n,
  image: r,
  imagePosition: a,
  tag: o,
  tagPosition: i,
  linkButton: s,
  fullWidth: l
}) => /* @__PURE__ */ P("div", {
  className: `${J.teaser} ${a === "left" ? J.teaserLeft : J.teaserRight}`,
  children: [/* @__PURE__ */ P("div", {
    className: J.imageWrapper,
    children: [/* @__PURE__ */ d(We, {
      ...r,
      classNamePicture: J.picture,
      classNameImg: J.image
    }), o && /* @__PURE__ */ d(hs, {
      ...o,
      className: `${J.tag} ${i === "left" ? J.tagLeft : J.tagRight}`
    })]
  }), /* @__PURE__ */ P("div", {
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
    }), /* @__PURE__ */ d(Mi, {
      surface: "primary",
      ...s,
      className: J.linkButton
    })]
  })]
}), u_ = "_list_4dc64_1", d_ = "_listItem_4dc64_14", Ni = {
  list: u_,
  listItem: d_
}, f_ = ({
  list: e
}) => /* @__PURE__ */ d("ul", {
  className: Ni.list,
  children: e.slice(0, 4).map((t, n) => /* @__PURE__ */ d("li", {
    className: Ni.listItem,
    children: /* @__PURE__ */ d(sg, {
      ...t
    })
  }, n))
}), v_ = "_list_1tf3m_1", p_ = "_listItem_1tf3m_13", h_ = "_maxColumnsThree_1tf3m_33", m_ = "_maxColumnsFour_1tf3m_61", An = {
  list: v_,
  listItem: p_,
  maxColumnsThree: h_,
  maxColumnsFour: m_
};
function g_(e) {
  return e === 4 ? An.maxColumnsFour : An.maxColumnsThree;
}
function __(e) {
  alert(`Adding to cart - ${e.productName} - ${e.packaging}. Quantity: ${e.quantity}, Total: ${e.totalPrice}`);
}
const xy = ({
  productCards: e,
  maxColumns: t
}) => /* @__PURE__ */ d("ul", {
  className: An.list,
  children: e.map((n) => /* @__PURE__ */ d("li", {
    className: L(An.listItem, g_(t)),
    children: /* @__PURE__ */ d(Fg, {
      ...n,
      addToCart: __
    }, n.productId)
  }, n.productId))
}), y_ = "_heroCarousel_19di5_1", b_ = "_carouselContentWrapper_19di5_8", x_ = "_carouselContent_19di5_8", S_ = "_carouselPagination_19di5_31", T_ = "_paginationIndicator_19di5_38", P_ = "_paginationIndicatorActive_19di5_52", at = {
  heroCarousel: y_,
  carouselContentWrapper: b_,
  carouselContent: x_,
  carouselPagination: S_,
  paginationIndicator: T_,
  paginationIndicatorActive: P_
};
function C_(e) {
  const [t, n] = te(0), r = 5;
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
const w_ = ({
  heroComponents: e
}) => {
  const [t, n] = te(0), [r, a] = te(!0);
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
  }, s = C_({
    onSwipedLeft: () => o(),
    onSwipedRight: () => i()
  });
  return /* @__PURE__ */ P("div", {
    className: at.heroCarousel,
    onMouseEnter: () => a(!1),
    onMouseLeave: () => a(!0),
    children: [/* @__PURE__ */ d("div", {
      className: at.carouselContentWrapper,
      ...s,
      children: /* @__PURE__ */ d("div", {
        className: at.carouselContent,
        style: {
          transform: `translateX(-${t * 100}%)`
        },
        children: e.map((l, c) => /* @__PURE__ */ d(Rp, {
          ...l,
          fetchPriority: c === 0 ? "high" : "auto",
          loading: c === 0 ? "eager" : "lazy"
        }, c))
      })
    }), /* @__PURE__ */ d("div", {
      className: at.carouselPagination,
      children: e.map((l, c) => /* @__PURE__ */ d("div", {
        className: c === t ? L(at.paginationIndicator, at.paginationIndicatorActive) : L(at.paginationIndicator),
        onClick: () => n(c)
      }, c))
    })]
  });
}, L_ = "_blogCard_1i8ux_1", E_ = "_fullWidth_1i8ux_9", N_ = "_pictureWrapper_1i8ux_17", R_ = "_smallHeight_1i8ux_28", V_ = "_picture_1i8ux_17", I_ = "_image_1i8ux_48", A_ = "_tag_1i8ux_61", $_ = "_content_1i8ux_67", O_ = "_centered_1i8ux_79", M_ = "_heading_1i8ux_87", D_ = "_text_1i8ux_92", pe = {
  blogCard: L_,
  fullWidth: E_,
  pictureWrapper: N_,
  smallHeight: R_,
  picture: V_,
  image: I_,
  tag: A_,
  content: $_,
  centered: O_,
  heading: M_,
  text: D_
}, ms = ({
  image: e,
  tag: t,
  heading: n,
  text: r,
  link: a,
  fullWidth: o
}) => /* @__PURE__ */ P("div", {
  className: L(pe.blogCard, o && pe.fullWidth),
  children: [e && /* @__PURE__ */ P("div", {
    className: L(pe.pictureWrapper, o && pe.smallHeight),
    children: [/* @__PURE__ */ d(We, {
      ...e,
      classNamePicture: pe.picture,
      classNameImg: pe.image
    }), t && /* @__PURE__ */ d(hs, {
      ...t,
      className: pe.tag
    })]
  }), /* @__PURE__ */ P("div", {
    className: L(pe.content, o && pe.centered),
    children: [/* @__PURE__ */ P("div", {
      children: [n && /* @__PURE__ */ d("h2", {
        className: pe.heading,
        children: n
      }), /* @__PURE__ */ d("p", {
        className: pe.text,
        dangerouslySetInnerHTML: {
          __html: r
        }
      })]
    }), a && /* @__PURE__ */ d(Oe, {
      ...a,
      onSurface: "transparent",
      size: "default",
      className: pe.link,
      children: a == null ? void 0 : a.children
    })]
  })]
}), j_ = "_title_8wfuh_1", k_ = "_list_8wfuh_5", B_ = "_listItem_8wfuh_18", F_ = "_maxColumnsThree_8wfuh_23", W_ = "_maxColumnsFour_8wfuh_49", ot = {
  title: j_,
  list: k_,
  listItem: B_,
  maxColumnsThree: F_,
  maxColumnsFour: W_
};
function q_(e) {
  return e === 1 ? ot.fullWidth : e === 3 ? ot.maxColumnsThree : ot.maxColumnsFour;
}
const Ri = ({
  title: e,
  blogCards: t
}) => {
  if (!Array.isArray(t) || !t.length)
    return null;
  const n = t.slice(0, 4);
  return /* @__PURE__ */ P("div", {
    className: ot.blogCardList,
    children: [e && /* @__PURE__ */ d("h3", {
      className: ot.title,
      children: e
    }), /* @__PURE__ */ d("ul", {
      className: ot.list,
      children: n.map((r, a) => /* @__PURE__ */ d("li", {
        className: L(ot.listItem, q_(n.length)),
        children: /* @__PURE__ */ d(ms, {
          ...r,
          fullWidth: n.length === 1
        })
      }, a))
    })]
  });
}, U_ = "_loginForm_1x9o9_1", z_ = "_closeButton_1x9o9_29", vr = {
  loginForm: U_,
  closeButton: z_
}, Sy = ({
  title: e,
  description: t,
  usernameLabel: n,
  username: r,
  passwordLabel: a,
  password: o,
  forgotPasswordLabel: i,
  onSubmit: s,
  primarySubmitLabel: l,
  secondarySubmitLabel: c,
  offerLinkLabel: u,
  errorMessage: p,
  onPasswordChange: f,
  onUsernameChange: v
}) => /* @__PURE__ */ P("form", {
  className: vr.loginForm,
  onSubmit: s,
  children: [/* @__PURE__ */ d(ae, {
    className: vr.closeButton,
    icon: "icon-x"
  }), /* @__PURE__ */ d("h1", {
    className: "h3",
    children: e
  }), t && /* @__PURE__ */ d("p", {
    children: t
  }), /* @__PURE__ */ d(Ir, {
    label: n,
    formElementId: "email",
    children: /* @__PURE__ */ d(Ft, {
      id: "email",
      value: r,
      autocomplete: "username",
      onChange: v
    })
  }), /* @__PURE__ */ d(Ir, {
    label: a,
    formElementId: "password",
    children: /* @__PURE__ */ d(Ft, {
      id: "password",
      type: "password",
      autocomplete: "current-password",
      value: o,
      onChange: f
    })
  }), p && /* @__PURE__ */ d("div", {
    className: L(vr.errorMessage),
    children: p
  }), /* @__PURE__ */ d(Oe, {
    onSurface: "transparent",
    size: "default",
    href: "#",
    children: i
  }), /* @__PURE__ */ d(St, {
    type: "submit",
    surface: "primary",
    surfaceVariant: "blue",
    size: "small",
    fullWidth: !0,
    children: l
  }), c && /* @__PURE__ */ d(St, {
    type: "submit",
    surface: "secondary",
    size: "small",
    fullWidth: !0,
    children: c
  }), u && /* @__PURE__ */ d(Oe, {
    onSurface: "transparent",
    size: "default",
    href: "#",
    children: u
  })]
}), H_ = "_contentWrapper_14r2p_1", Y_ = {
  contentWrapper: H_
}, G_ = ({
  children: e
}) => /* @__PURE__ */ d("div", {
  className: Y_.contentWrapper,
  children: e
}), K_ = "_maxWidth_75688_1", X_ = "_narrow_75688_8", Z_ = "_wide_75688_12", Vi = {
  maxWidth: K_,
  narrow: X_,
  wide: Z_
}, ht = ({
  children: e,
  contentMaxWidth: t
}) => /* @__PURE__ */ d("div", {
  className: L(Vi.maxWidth, Vi[t]),
  children: e
}), Ty = ({
  navigation: e,
  hero: t,
  blogList_4_Col: n,
  offerCardsList: r,
  blogFullwidth: a,
  teaserRight: o,
  blogList_3_Col: i,
  teaserLeft: s
}) => /* @__PURE__ */ P(Pe, {
  children: [/* @__PURE__ */ d(ym, {
    ...e
  }), /* @__PURE__ */ P(G_, {
    children: [/* @__PURE__ */ d(w_, {
      ...t
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "wide",
      children: /* @__PURE__ */ d(Ri, {
        ...i
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "narrow",
      children: /* @__PURE__ */ d(f_, {
        ...r
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "wide",
      children: /* @__PURE__ */ d(ms, {
        ...a
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "narrow",
      children: /* @__PURE__ */ d(Ei, {
        ...o
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "narrow",
      children: /* @__PURE__ */ d(Ei, {
        ...s
      })
    }), /* @__PURE__ */ d(ht, {
      contentMaxWidth: "wide",
      children: /* @__PURE__ */ d(Ri, {
        ...n
      })
    })]
  })]
}), J_ = "_pageLayout_lb61a_1", Q_ = {
  pageLayout: J_
}, Py = ({
  children: e
}) => /* @__PURE__ */ d("div", {
  className: Q_.pageLayout,
  children: e
});
export {
  Vv as Accordion,
  gy as AccordionList,
  Ri as BlogCardList,
  St as Button,
  xg as CardImage,
  cy as CardList,
  ly as CardPoster,
  uy as CardSquare,
  Xv as Card_16_9,
  dy as Card_16_9_List,
  $i as Checkbox,
  vy as CheckboxGroup,
  G_ as ContentWrapper,
  my as DataTable,
  iy as Details,
  by as Dialog,
  _y as Footer,
  Ir as FormGroup,
  Rp as Hero,
  w_ as HeroCarousel,
  ae as Icon,
  vs as ImageOpacityLayer,
  il as InlineErrorText,
  ll as InlineHelperText,
  ny as InputFile,
  py as InputPasswordFormGroup,
  Ft as InputText,
  Mi as LinkButton,
  yy as LinkList,
  Sy as LoginForm,
  Py as LoginPage,
  ht as MaxWidth,
  Zn as MoviePoster,
  hy as MoviePosterList,
  ym as Navigation,
  sg as OfferCard,
  f_ as OfferCardList,
  oy as OrderedList,
  We as Picture,
  Fg as ProductCard,
  xy as ProductCardList,
  Lg as ProductQuantityInput,
  Mg as ProductVariant,
  kg as ProductVariantList,
  Ai as RadioButton,
  fy as RadioButtonGroup,
  hp as Search,
  dm as SearchNavBar,
  ry as Select,
  Ty as StartPageTemplate,
  Fl as Table,
  Ei as Teaser,
  ay as Textarea,
  _m as TopNavBar,
  Oe as UILink,
  sy as UnorderedList
};
