/*! For license information please see main.dc76201c.js.LICENSE.txt */
(() => {
    var e = {
            238: (e, n) => {
                "use strict";
                n.Y = function(e, n) {
                    return s(e).some((function(e) {
                        var t = e.inverse,
                            r = "all" === e.type || n.type === e.type;
                        if (r && t || !r && !t) return !1;
                        var a = e.expressions.every((function(e) {
                            var t = e.feature,
                                r = e.modifier,
                                a = e.value,
                                l = n[t];
                            if (!l) return !1;
                            switch (t) {
                                case "orientation":
                                case "scan":
                                    return l.toLowerCase() === a.toLowerCase();
                                case "width":
                                case "height":
                                case "device-width":
                                case "device-height":
                                    a = u(a), l = u(l);
                                    break;
                                case "resolution":
                                    a = c(a), l = c(l);
                                    break;
                                case "aspect-ratio":
                                case "device-aspect-ratio":
                                case "device-pixel-ratio":
                                    a = o(a), l = o(l);
                                    break;
                                case "grid":
                                case "color":
                                case "color-index":
                                case "monochrome":
                                    a = parseInt(a, 10) || 1, l = parseInt(l, 10) || 0
                            }
                            switch (r) {
                                case "min":
                                    return l >= a;
                                case "max":
                                    return l <= a;
                                default:
                                    return l === a
                            }
                        }));
                        return a && !t || !a && t
                    }))
                };
                var t = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                    r = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                    a = /^(?:(min|max)-)?(.+)/,
                    l = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                    i = /(dpi|dpcm|dppx)?$/;

                function s(e) {
                    return e.split(",").map((function(e) {
                        var n = (e = e.trim()).match(t),
                            l = n[1],
                            i = n[2],
                            s = n[3] || "",
                            o = {};
                        return o.inverse = !!l && "not" === l.toLowerCase(), o.type = i ? i.toLowerCase() : "all", s = s.match(/\([^\)]+\)/g) || [], o.expressions = s.map((function(e) {
                            var n = e.match(r),
                                t = n[1].toLowerCase().match(a);
                            return {
                                modifier: t[1],
                                feature: t[2],
                                value: n[2]
                            }
                        })), o
                    }))
                }

                function o(e) {
                    var n, t = Number(e);
                    return t || (t = (n = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / n[2]), t
                }

                function c(e) {
                    var n = parseFloat(e);
                    switch (String(e).match(i)[1]) {
                        case "dpcm":
                            return n / 2.54;
                        case "dppx":
                            return 96 * n;
                        default:
                            return n
                    }
                }

                function u(e) {
                    var n = parseFloat(e);
                    switch (String(e).match(l)[1]) {
                        case "em":
                        case "rem":
                            return 16 * n;
                        case "cm":
                            return 96 * n / 2.54;
                        case "mm":
                            return 96 * n / 2.54 / 10;
                        case "in":
                            return 96 * n;
                        case "pt":
                            return 72 * n;
                        case "pc":
                            return 72 * n / 12;
                        default:
                            return n
                    }
                }
            },
            725: (e, n, t) => {
                "use strict";
                var r = t(238).Y,
                    a = "undefined" !== typeof window ? window.matchMedia : null;

                function l(e, n, t) {
                    var l, i = this;

                    function s(e) {
                        i.matches = e.matches, i.media = e.media
                    }
                    a && !t && (l = a.call(window, e)), l ? (this.matches = l.matches, this.media = l.media, l.addListener(s)) : (this.matches = r(e, n), this.media = e), this.addListener = function(e) {
                        l && l.addListener(e)
                    }, this.removeListener = function(e) {
                        l && l.removeListener(e)
                    }, this.dispose = function() {
                        l && l.removeListener(s)
                    }
                }
                e.exports = function(e, n, t) {
                    return new l(e, n, t)
                }
            },
            497: (e, n, t) => {
                "use strict";
                var r = t(218);

                function a() {}

                function l() {}
                l.resetWarningCache = a, e.exports = function() {
                    function e(e, n, t, a, l, i) {
                        if (i !== r) {
                            var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                            throw s.name = "Invariant Violation", s
                        }
                    }

                    function n() {
                        return e
                    }
                    e.isRequired = e;
                    var t = {
                        array: e,
                        bigint: e,
                        bool: e,
                        func: e,
                        number: e,
                        object: e,
                        string: e,
                        symbol: e,
                        any: e,
                        arrayOf: n,
                        element: e,
                        elementType: e,
                        instanceOf: n,
                        node: e,
                        objectOf: n,
                        oneOf: n,
                        oneOfType: n,
                        shape: n,
                        exact: n,
                        checkPropTypes: l,
                        resetWarningCache: a
                    };
                    return t.PropTypes = t, t
                }
            },
            173: (e, n, t) => {
                e.exports = t(497)()
            },
            218: e => {
                "use strict";
                e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
            },
            730: (e, n, t) => {
                "use strict";
                var r = t(43),
                    a = t(853);

                function l(e) {
                    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
                    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var i = new Set,
                    s = {};

                function o(e, n) {
                    c(e, n), c(e + "Capture", n)
                }

                function c(e, n) {
                    for (s[e] = n, e = 0; e < n.length; e++) i.add(n[e])
                }
                var u = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = Object.prototype.hasOwnProperty,
                    h = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    f = {},
                    p = {};

                function m(e, n, t, r, a, l, i) {
                    this.acceptsBooleans = 2 === n || 3 === n || 4 === n, this.attributeName = r, this.attributeNamespace = a, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = l, this.removeEmptyString = i
                }
                var v = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    v[e] = new m(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var n = e[0];
                    v[n] = new m(n, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    v[e] = new m(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    v[e] = new m(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    v[e] = new m(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    v[e] = new m(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var x = /[\-:]([a-z])/g;

                function g(e) {
                    return e[1].toUpperCase()
                }

                function j(e, n, t, r) {
                    var a = v.hasOwnProperty(n) ? v[n] : null;
                    (null !== a ? 0 !== a.type : r || !(2 < n.length) || "o" !== n[0] && "O" !== n[0] || "n" !== n[1] && "N" !== n[1]) && (function(e, n, t, r) {
                        if (null === n || "undefined" === typeof n || function(e, n, t, r) {
                                if (null !== t && 0 === t.type) return !1;
                                switch (typeof n) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== t ? !t.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, n, t, r)) return !0;
                        if (r) return !1;
                        if (null !== t) switch (t.type) {
                            case 3:
                                return !n;
                            case 4:
                                return !1 === n;
                            case 5:
                                return isNaN(n);
                            case 6:
                                return isNaN(n) || 1 > n
                        }
                        return !1
                    }(n, t, a, r) && (t = null), r || null === a ? function(e) {
                        return !!d.call(p, e) || !d.call(f, e) && (h.test(e) ? p[e] = !0 : (f[e] = !0, !1))
                    }(n) && (null === t ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : a.mustUseProperty ? e[a.propertyName] = null === t ? 3 !== a.type && "" : t : (n = a.attributeName, r = a.attributeNamespace, null === t ? e.removeAttribute(n) : (t = 3 === (a = a.type) || 4 === a && !0 === t ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var n = e.replace(x, g);
                    v[n] = new m(n, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var n = e.replace(x, g);
                    v[n] = new m(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var n = e.replace(x, g);
                    v[n] = new m(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    b = Symbol.for("react.element"),
                    k = Symbol.for("react.portal"),
                    w = Symbol.for("react.fragment"),
                    N = Symbol.for("react.strict_mode"),
                    S = Symbol.for("react.profiler"),
                    C = Symbol.for("react.provider"),
                    M = Symbol.for("react.context"),
                    E = Symbol.for("react.forward_ref"),
                    L = Symbol.for("react.suspense"),
                    z = Symbol.for("react.suspense_list"),
                    P = Symbol.for("react.memo"),
                    _ = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var O = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var R = Symbol.iterator;

                function B(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = R && e[R] || e["@@iterator"]) ? e : null
                }
                var T, W = Object.assign;

                function D(e) {
                    if (void 0 === T) try {
                        throw Error()
                    } catch (t) {
                        var n = t.stack.trim().match(/\n( *(at )?)/);
                        T = n && n[1] || ""
                    }
                    return "\n" + T + e
                }
                var H = !1;

                function F(e, n) {
                    if (!e || H) return "";
                    H = !0;
                    var t = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (n)
                            if (n = function() {
                                    throw Error()
                                }, Object.defineProperty(n.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(n, [])
                                } catch (c) {
                                    var r = c
                                }
                                Reflect.construct(e, [], n)
                            } else {
                                try {
                                    n.call()
                                } catch (c) {
                                    r = c
                                }
                                e.call(n.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (c) {
                                r = c
                            }
                            e()
                        }
                    } catch (c) {
                        if (c && r && "string" === typeof c.stack) {
                            for (var a = c.stack.split("\n"), l = r.stack.split("\n"), i = a.length - 1, s = l.length - 1; 1 <= i && 0 <= s && a[i] !== l[s];) s--;
                            for (; 1 <= i && 0 <= s; i--, s--)
                                if (a[i] !== l[s]) {
                                    if (1 !== i || 1 !== s)
                                        do {
                                            if (i--, 0 > --s || a[i] !== l[s]) {
                                                var o = "\n" + a[i].replace(" at new ", " at ");
                                                return e.displayName && o.includes("<anonymous>") && (o = o.replace("<anonymous>", e.displayName)), o
                                            }
                                        } while (1 <= i && 0 <= s);
                                    break
                                }
                        }
                    } finally {
                        H = !1, Error.prepareStackTrace = t
                    }
                    return (e = e ? e.displayName || e.name : "") ? D(e) : ""
                }

                function I(e) {
                    switch (e.tag) {
                        case 5:
                            return D(e.type);
                        case 16:
                            return D("Lazy");
                        case 13:
                            return D("Suspense");
                        case 19:
                            return D("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = F(e.type, !1);
                        case 11:
                            return e = F(e.type.render, !1);
                        case 1:
                            return e = F(e.type, !0);
                        default:
                            return ""
                    }
                }

                function A(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case w:
                            return "Fragment";
                        case k:
                            return "Portal";
                        case S:
                            return "Profiler";
                        case N:
                            return "StrictMode";
                        case L:
                            return "Suspense";
                        case z:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case M:
                            return (e.displayName || "Context") + ".Consumer";
                        case C:
                            return (e._context.displayName || "Context") + ".Provider";
                        case E:
                            var n = e.render;
                            return (e = e.displayName) || (e = "" !== (e = n.displayName || n.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case P:
                            return null !== (n = e.displayName || null) ? n : A(e.type) || "Memo";
                        case _:
                            n = e._payload, e = e._init;
                            try {
                                return A(e(n))
                            } catch (t) {}
                    }
                    return null
                }

                function V(e) {
                    var n = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (n.displayName || "Context") + ".Consumer";
                        case 10:
                            return (n._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = n.render).displayName || e.name || "", n.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return n;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return A(n);
                        case 8:
                            return n === N ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof n) return n.displayName || n.name || null;
                            if ("string" === typeof n) return n
                    }
                    return null
                }

                function U(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function $(e) {
                    var n = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === n || "radio" === n)
                }

                function Q(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var n = $(e) ? "checked" : "value",
                            t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n),
                            r = "" + e[n];
                        if (!e.hasOwnProperty(n) && "undefined" !== typeof t && "function" === typeof t.get && "function" === typeof t.set) {
                            var a = t.get,
                                l = t.set;
                            return Object.defineProperty(e, n, {
                                configurable: !0,
                                get: function() {
                                    return a.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, l.call(this, e)
                                }
                            }), Object.defineProperty(e, n, {
                                enumerable: t.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[n]
                                }
                            }
                        }
                    }(e))
                }

                function q(e) {
                    if (!e) return !1;
                    var n = e._valueTracker;
                    if (!n) return !0;
                    var t = n.getValue(),
                        r = "";
                    return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== t && (n.setValue(e), !0)
                }

                function K(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (n) {
                        return e.body
                    }
                }

                function Y(e, n) {
                    var t = n.checked;
                    return W({}, n, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != t ? t : e._wrapperState.initialChecked
                    })
                }

                function X(e, n) {
                    var t = null == n.defaultValue ? "" : n.defaultValue,
                        r = null != n.checked ? n.checked : n.defaultChecked;
                    t = U(null != n.value ? n.value : t), e._wrapperState = {
                        initialChecked: r,
                        initialValue: t,
                        controlled: "checkbox" === n.type || "radio" === n.type ? null != n.checked : null != n.value
                    }
                }

                function G(e, n) {
                    null != (n = n.checked) && j(e, "checked", n, !1)
                }

                function Z(e, n) {
                    G(e, n);
                    var t = U(n.value),
                        r = n.type;
                    if (null != t) "number" === r ? (0 === t && "" === e.value || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    n.hasOwnProperty("value") ? ee(e, n.type, t) : n.hasOwnProperty("defaultValue") && ee(e, n.type, U(n.defaultValue)), null == n.checked && null != n.defaultChecked && (e.defaultChecked = !!n.defaultChecked)
                }

                function J(e, n, t) {
                    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
                        var r = n.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== n.value && null !== n.value)) return;
                        n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n
                    }
                    "" !== (t = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== t && (e.name = t)
                }

                function ee(e, n, t) {
                    "number" === n && K(e.ownerDocument) === e || (null == t ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
                }
                var ne = Array.isArray;

                function te(e, n, t, r) {
                    if (e = e.options, n) {
                        n = {};
                        for (var a = 0; a < t.length; a++) n["$" + t[a]] = !0;
                        for (t = 0; t < e.length; t++) a = n.hasOwnProperty("$" + e[t].value), e[t].selected !== a && (e[t].selected = a), a && r && (e[t].defaultSelected = !0)
                    } else {
                        for (t = "" + U(t), n = null, a = 0; a < e.length; a++) {
                            if (e[a].value === t) return e[a].selected = !0, void(r && (e[a].defaultSelected = !0));
                            null !== n || e[a].disabled || (n = e[a])
                        }
                        null !== n && (n.selected = !0)
                    }
                }

                function re(e, n) {
                    if (null != n.dangerouslySetInnerHTML) throw Error(l(91));
                    return W({}, n, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function ae(e, n) {
                    var t = n.value;
                    if (null == t) {
                        if (t = n.children, n = n.defaultValue, null != t) {
                            if (null != n) throw Error(l(92));
                            if (ne(t)) {
                                if (1 < t.length) throw Error(l(93));
                                t = t[0]
                            }
                            n = t
                        }
                        null == n && (n = ""), t = n
                    }
                    e._wrapperState = {
                        initialValue: U(t)
                    }
                }

                function le(e, n) {
                    var t = U(n.value),
                        r = U(n.defaultValue);
                    null != t && ((t = "" + t) !== e.value && (e.value = t), null == n.defaultValue && e.defaultValue !== t && (e.defaultValue = t)), null != r && (e.defaultValue = "" + r)
                }

                function ie(e) {
                    var n = e.textContent;
                    n === e._wrapperState.initialValue && "" !== n && null !== n && (e.value = n)
                }

                function se(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function oe(e, n) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? se(n) : "http://www.w3.org/2000/svg" === e && "foreignObject" === n ? "http://www.w3.org/1999/xhtml" : e
                }
                var ce, ue, de = (ue = function(e, n) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = n;
                    else {
                        for ((ce = ce || document.createElement("div")).innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = ce.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; n.firstChild;) e.appendChild(n.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, n, t, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ue(e, n)
                    }))
                } : ue);

                function he(e, n) {
                    if (n) {
                        var t = e.firstChild;
                        if (t && t === e.lastChild && 3 === t.nodeType) return void(t.nodeValue = n)
                    }
                    e.textContent = n
                }
                var fe = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    pe = ["Webkit", "ms", "Moz", "O"];

                function me(e, n, t) {
                    return null == n || "boolean" === typeof n || "" === n ? "" : t || "number" !== typeof n || 0 === n || fe.hasOwnProperty(e) && fe[e] ? ("" + n).trim() : n + "px"
                }

                function ve(e, n) {
                    for (var t in e = e.style, n)
                        if (n.hasOwnProperty(t)) {
                            var r = 0 === t.indexOf("--"),
                                a = me(t, n[t], r);
                            "float" === t && (t = "cssFloat"), r ? e.setProperty(t, a) : e[t] = a
                        }
                }
                Object.keys(fe).forEach((function(e) {
                    pe.forEach((function(n) {
                        n = n + e.charAt(0).toUpperCase() + e.substring(1), fe[n] = fe[e]
                    }))
                }));
                var xe = W({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function ge(e, n) {
                    if (n) {
                        if (xe[e] && (null != n.children || null != n.dangerouslySetInnerHTML)) throw Error(l(137, e));
                        if (null != n.dangerouslySetInnerHTML) {
                            if (null != n.children) throw Error(l(60));
                            if ("object" !== typeof n.dangerouslySetInnerHTML || !("__html" in n.dangerouslySetInnerHTML)) throw Error(l(61))
                        }
                        if (null != n.style && "object" !== typeof n.style) throw Error(l(62))
                    }
                }

                function je(e, n) {
                    if (-1 === e.indexOf("-")) return "string" === typeof n.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var ye = null;

                function be(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var ke = null,
                    we = null,
                    Ne = null;

                function Se(e) {
                    if (e = ja(e)) {
                        if ("function" !== typeof ke) throw Error(l(280));
                        var n = e.stateNode;
                        n && (n = ba(n), ke(e.stateNode, e.type, n))
                    }
                }

                function Ce(e) {
                    we ? Ne ? Ne.push(e) : Ne = [e] : we = e
                }

                function Me() {
                    if (we) {
                        var e = we,
                            n = Ne;
                        if (Ne = we = null, Se(e), n)
                            for (e = 0; e < n.length; e++) Se(n[e])
                    }
                }

                function Ee(e, n) {
                    return e(n)
                }

                function Le() {}
                var ze = !1;

                function Pe(e, n, t) {
                    if (ze) return e(n, t);
                    ze = !0;
                    try {
                        return Ee(e, n, t)
                    } finally {
                        ze = !1, (null !== we || null !== Ne) && (Le(), Me())
                    }
                }

                function _e(e, n) {
                    var t = e.stateNode;
                    if (null === t) return null;
                    var r = ba(t);
                    if (null === r) return null;
                    t = r[n];
                    e: switch (n) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (t && "function" !== typeof t) throw Error(l(231, n, typeof t));
                    return t
                }
                var Oe = !1;
                if (u) try {
                    var Re = {};
                    Object.defineProperty(Re, "passive", {
                        get: function() {
                            Oe = !0
                        }
                    }), window.addEventListener("test", Re, Re), window.removeEventListener("test", Re, Re)
                } catch (ue) {
                    Oe = !1
                }

                function Be(e, n, t, r, a, l, i, s, o) {
                    var c = Array.prototype.slice.call(arguments, 3);
                    try {
                        n.apply(t, c)
                    } catch (u) {
                        this.onError(u)
                    }
                }
                var Te = !1,
                    We = null,
                    De = !1,
                    He = null,
                    Fe = {
                        onError: function(e) {
                            Te = !0, We = e
                        }
                    };

                function Ie(e, n, t, r, a, l, i, s, o) {
                    Te = !1, We = null, Be.apply(Fe, arguments)
                }

                function Ae(e) {
                    var n = e,
                        t = e;
                    if (e.alternate)
                        for (; n.return;) n = n.return;
                    else {
                        e = n;
                        do {
                            0 !== (4098 & (n = e).flags) && (t = n.return), e = n.return
                        } while (e)
                    }
                    return 3 === n.tag ? t : null
                }

                function Ve(e) {
                    if (13 === e.tag) {
                        var n = e.memoizedState;
                        if (null === n && (null !== (e = e.alternate) && (n = e.memoizedState)), null !== n) return n.dehydrated
                    }
                    return null
                }

                function Ue(e) {
                    if (Ae(e) !== e) throw Error(l(188))
                }

                function $e(e) {
                    return null !== (e = function(e) {
                        var n = e.alternate;
                        if (!n) {
                            if (null === (n = Ae(e))) throw Error(l(188));
                            return n !== e ? null : e
                        }
                        for (var t = e, r = n;;) {
                            var a = t.return;
                            if (null === a) break;
                            var i = a.alternate;
                            if (null === i) {
                                if (null !== (r = a.return)) {
                                    t = r;
                                    continue
                                }
                                break
                            }
                            if (a.child === i.child) {
                                for (i = a.child; i;) {
                                    if (i === t) return Ue(a), e;
                                    if (i === r) return Ue(a), n;
                                    i = i.sibling
                                }
                                throw Error(l(188))
                            }
                            if (t.return !== r.return) t = a, r = i;
                            else {
                                for (var s = !1, o = a.child; o;) {
                                    if (o === t) {
                                        s = !0, t = a, r = i;
                                        break
                                    }
                                    if (o === r) {
                                        s = !0, r = a, t = i;
                                        break
                                    }
                                    o = o.sibling
                                }
                                if (!s) {
                                    for (o = i.child; o;) {
                                        if (o === t) {
                                            s = !0, t = i, r = a;
                                            break
                                        }
                                        if (o === r) {
                                            s = !0, r = i, t = a;
                                            break
                                        }
                                        o = o.sibling
                                    }
                                    if (!s) throw Error(l(189))
                                }
                            }
                            if (t.alternate !== r) throw Error(l(190))
                        }
                        if (3 !== t.tag) throw Error(l(188));
                        return t.stateNode.current === t ? e : n
                    }(e)) ? Qe(e) : null
                }

                function Qe(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var n = Qe(e);
                        if (null !== n) return n;
                        e = e.sibling
                    }
                    return null
                }
                var qe = a.unstable_scheduleCallback,
                    Ke = a.unstable_cancelCallback,
                    Ye = a.unstable_shouldYield,
                    Xe = a.unstable_requestPaint,
                    Ge = a.unstable_now,
                    Ze = a.unstable_getCurrentPriorityLevel,
                    Je = a.unstable_ImmediatePriority,
                    en = a.unstable_UserBlockingPriority,
                    nn = a.unstable_NormalPriority,
                    tn = a.unstable_LowPriority,
                    rn = a.unstable_IdlePriority,
                    an = null,
                    ln = null;
                var sn = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (on(e) / cn | 0) | 0
                    },
                    on = Math.log,
                    cn = Math.LN2;
                var un = 64,
                    dn = 4194304;

                function hn(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function fn(e, n) {
                    var t = e.pendingLanes;
                    if (0 === t) return 0;
                    var r = 0,
                        a = e.suspendedLanes,
                        l = e.pingedLanes,
                        i = 268435455 & t;
                    if (0 !== i) {
                        var s = i & ~a;
                        0 !== s ? r = hn(s) : 0 !== (l &= i) && (r = hn(l))
                    } else 0 !== (i = t & ~a) ? r = hn(i) : 0 !== l && (r = hn(l));
                    if (0 === r) return 0;
                    if (0 !== n && n !== r && 0 === (n & a) && ((a = r & -r) >= (l = n & -n) || 16 === a && 0 !== (4194240 & l))) return n;
                    if (0 !== (4 & r) && (r |= 16 & t), 0 !== (n = e.entangledLanes))
                        for (e = e.entanglements, n &= r; 0 < n;) a = 1 << (t = 31 - sn(n)), r |= e[t], n &= ~a;
                    return r
                }

                function pn(e, n) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return n + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return n + 5e3;
                        default:
                            return -1
                    }
                }

                function mn(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function vn() {
                    var e = un;
                    return 0 === (4194240 & (un <<= 1)) && (un = 64), e
                }

                function xn(e) {
                    for (var n = [], t = 0; 31 > t; t++) n.push(e);
                    return n
                }

                function gn(e, n, t) {
                    e.pendingLanes |= n, 536870912 !== n && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[n = 31 - sn(n)] = t
                }

                function jn(e, n) {
                    var t = e.entangledLanes |= n;
                    for (e = e.entanglements; t;) {
                        var r = 31 - sn(t),
                            a = 1 << r;
                        a & n | e[r] & n && (e[r] |= n), t &= ~a
                    }
                }
                var yn = 0;

                function bn(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var kn, wn, Nn, Sn, Cn, Mn = !1,
                    En = [],
                    Ln = null,
                    zn = null,
                    Pn = null,
                    _n = new Map,
                    On = new Map,
                    Rn = [],
                    Bn = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function Tn(e, n) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Ln = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            zn = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Pn = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            _n.delete(n.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            On.delete(n.pointerId)
                    }
                }

                function Wn(e, n, t, r, a, l) {
                    return null === e || e.nativeEvent !== l ? (e = {
                        blockedOn: n,
                        domEventName: t,
                        eventSystemFlags: r,
                        nativeEvent: l,
                        targetContainers: [a]
                    }, null !== n && (null !== (n = ja(n)) && wn(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, null !== a && -1 === n.indexOf(a) && n.push(a), e)
                }

                function Dn(e) {
                    var n = ga(e.target);
                    if (null !== n) {
                        var t = Ae(n);
                        if (null !== t)
                            if (13 === (n = t.tag)) {
                                if (null !== (n = Ve(t))) return e.blockedOn = n, void Cn(e.priority, (function() {
                                    Nn(t)
                                }))
                            } else if (3 === n && t.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === t.tag ? t.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Hn(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var n = e.targetContainers; 0 < n.length;) {
                        var t = Xn(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
                        if (null !== t) return null !== (n = ja(t)) && wn(n), e.blockedOn = t, !1;
                        var r = new(t = e.nativeEvent).constructor(t.type, t);
                        ye = r, t.target.dispatchEvent(r), ye = null, n.shift()
                    }
                    return !0
                }

                function Fn(e, n, t) {
                    Hn(e) && t.delete(n)
                }

                function In() {
                    Mn = !1, null !== Ln && Hn(Ln) && (Ln = null), null !== zn && Hn(zn) && (zn = null), null !== Pn && Hn(Pn) && (Pn = null), _n.forEach(Fn), On.forEach(Fn)
                }

                function An(e, n) {
                    e.blockedOn === n && (e.blockedOn = null, Mn || (Mn = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, In)))
                }

                function Vn(e) {
                    function n(n) {
                        return An(n, e)
                    }
                    if (0 < En.length) {
                        An(En[0], e);
                        for (var t = 1; t < En.length; t++) {
                            var r = En[t];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Ln && An(Ln, e), null !== zn && An(zn, e), null !== Pn && An(Pn, e), _n.forEach(n), On.forEach(n), t = 0; t < Rn.length; t++)(r = Rn[t]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Rn.length && null === (t = Rn[0]).blockedOn;) Dn(t), null === t.blockedOn && Rn.shift()
                }
                var Un = y.ReactCurrentBatchConfig,
                    $n = !0;

                function Qn(e, n, t, r) {
                    var a = yn,
                        l = Un.transition;
                    Un.transition = null;
                    try {
                        yn = 1, Kn(e, n, t, r)
                    } finally {
                        yn = a, Un.transition = l
                    }
                }

                function qn(e, n, t, r) {
                    var a = yn,
                        l = Un.transition;
                    Un.transition = null;
                    try {
                        yn = 4, Kn(e, n, t, r)
                    } finally {
                        yn = a, Un.transition = l
                    }
                }

                function Kn(e, n, t, r) {
                    if ($n) {
                        var a = Xn(e, n, t, r);
                        if (null === a) Ur(e, n, r, Yn, t), Tn(e, r);
                        else if (function(e, n, t, r, a) {
                                switch (n) {
                                    case "focusin":
                                        return Ln = Wn(Ln, e, n, t, r, a), !0;
                                    case "dragenter":
                                        return zn = Wn(zn, e, n, t, r, a), !0;
                                    case "mouseover":
                                        return Pn = Wn(Pn, e, n, t, r, a), !0;
                                    case "pointerover":
                                        var l = a.pointerId;
                                        return _n.set(l, Wn(_n.get(l) || null, e, n, t, r, a)), !0;
                                    case "gotpointercapture":
                                        return l = a.pointerId, On.set(l, Wn(On.get(l) || null, e, n, t, r, a)), !0
                                }
                                return !1
                            }(a, e, n, t, r)) r.stopPropagation();
                        else if (Tn(e, r), 4 & n && -1 < Bn.indexOf(e)) {
                            for (; null !== a;) {
                                var l = ja(a);
                                if (null !== l && kn(l), null === (l = Xn(e, n, t, r)) && Ur(e, n, r, Yn, t), l === a) break;
                                a = l
                            }
                            null !== a && r.stopPropagation()
                        } else Ur(e, n, r, null, t)
                    }
                }
                var Yn = null;

                function Xn(e, n, t, r) {
                    if (Yn = null, null !== (e = ga(e = be(r))))
                        if (null === (n = Ae(e))) e = null;
                        else if (13 === (t = n.tag)) {
                        if (null !== (e = Ve(n))) return e;
                        e = null
                    } else if (3 === t) {
                        if (n.stateNode.current.memoizedState.isDehydrated) return 3 === n.tag ? n.stateNode.containerInfo : null;
                        e = null
                    } else n !== e && (e = null);
                    return Yn = e, null
                }

                function Gn(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Ze()) {
                                case Je:
                                    return 1;
                                case en:
                                    return 4;
                                case nn:
                                case tn:
                                    return 16;
                                case rn:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Zn = null,
                    Jn = null,
                    et = null;

                function nt() {
                    if (et) return et;
                    var e, n, t = Jn,
                        r = t.length,
                        a = "value" in Zn ? Zn.value : Zn.textContent,
                        l = a.length;
                    for (e = 0; e < r && t[e] === a[e]; e++);
                    var i = r - e;
                    for (n = 1; n <= i && t[r - n] === a[l - n]; n++);
                    return et = a.slice(e, 1 < n ? 1 - n : void 0)
                }

                function tt(e) {
                    var n = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === n && (e = 13) : e = n, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function rt() {
                    return !0
                }

                function at() {
                    return !1
                }

                function lt(e) {
                    function n(n, t, r, a, l) {
                        for (var i in this._reactName = n, this._targetInst = r, this.type = t, this.nativeEvent = a, this.target = l, this.currentTarget = null, e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
                        return this.isDefaultPrevented = (null != a.defaultPrevented ? a.defaultPrevented : !1 === a.returnValue) ? rt : at, this.isPropagationStopped = at, this
                    }
                    return W(n.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = rt)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = rt)
                        },
                        persist: function() {},
                        isPersistent: rt
                    }), n
                }
                var it, st, ot, ct = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    ut = lt(ct),
                    dt = W({}, ct, {
                        view: 0,
                        detail: 0
                    }),
                    ht = lt(dt),
                    ft = W({}, dt, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: St,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== ot && (ot && "mousemove" === e.type ? (it = e.screenX - ot.screenX, st = e.screenY - ot.screenY) : st = it = 0, ot = e), it)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : st
                        }
                    }),
                    pt = lt(ft),
                    mt = lt(W({}, ft, {
                        dataTransfer: 0
                    })),
                    vt = lt(W({}, dt, {
                        relatedTarget: 0
                    })),
                    xt = lt(W({}, ct, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    gt = W({}, ct, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    jt = lt(gt),
                    yt = lt(W({}, ct, {
                        data: 0
                    })),
                    bt = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    kt = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    wt = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Nt(e) {
                    var n = this.nativeEvent;
                    return n.getModifierState ? n.getModifierState(e) : !!(e = wt[e]) && !!n[e]
                }

                function St() {
                    return Nt
                }
                var Ct = W({}, dt, {
                        key: function(e) {
                            if (e.key) {
                                var n = bt[e.key] || e.key;
                                if ("Unidentified" !== n) return n
                            }
                            return "keypress" === e.type ? 13 === (e = tt(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? kt[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: St,
                        charCode: function(e) {
                            return "keypress" === e.type ? tt(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tt(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Mt = lt(Ct),
                    Et = lt(W({}, ft, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    Lt = lt(W({}, dt, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: St
                    })),
                    zt = lt(W({}, ct, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Pt = W({}, ft, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    _t = lt(Pt),
                    Ot = [9, 13, 27, 32],
                    Rt = u && "CompositionEvent" in window,
                    Bt = null;
                u && "documentMode" in document && (Bt = document.documentMode);
                var Tt = u && "TextEvent" in window && !Bt,
                    Wt = u && (!Rt || Bt && 8 < Bt && 11 >= Bt),
                    Dt = String.fromCharCode(32),
                    Ht = !1;

                function Ft(e, n) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Ot.indexOf(n.keyCode);
                        case "keydown":
                            return 229 !== n.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function It(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var At = !1;
                var Vt = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Ut(e) {
                    var n = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === n ? !!Vt[e.type] : "textarea" === n
                }

                function $t(e, n, t, r) {
                    Ce(r), 0 < (n = Qr(n, "onChange")).length && (t = new ut("onChange", "change", null, t, r), e.push({
                        event: t,
                        listeners: n
                    }))
                }
                var Qt = null,
                    qt = null;

                function Kt(e) {
                    Dr(e, 0)
                }

                function Yt(e) {
                    if (q(ya(e))) return e
                }

                function Xt(e, n) {
                    if ("change" === e) return n
                }
                var Gt = !1;
                if (u) {
                    var Zt;
                    if (u) {
                        var Jt = "oninput" in document;
                        if (!Jt) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Jt = "function" === typeof er.oninput
                        }
                        Zt = Jt
                    } else Zt = !1;
                    Gt = Zt && (!document.documentMode || 9 < document.documentMode)
                }

                function nr() {
                    Qt && (Qt.detachEvent("onpropertychange", tr), qt = Qt = null)
                }

                function tr(e) {
                    if ("value" === e.propertyName && Yt(qt)) {
                        var n = [];
                        $t(n, qt, e, be(e)), Pe(Kt, n)
                    }
                }

                function rr(e, n, t) {
                    "focusin" === e ? (nr(), qt = t, (Qt = n).attachEvent("onpropertychange", tr)) : "focusout" === e && nr()
                }

                function ar(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Yt(qt)
                }

                function lr(e, n) {
                    if ("click" === e) return Yt(n)
                }

                function ir(e, n) {
                    if ("input" === e || "change" === e) return Yt(n)
                }
                var sr = "function" === typeof Object.is ? Object.is : function(e, n) {
                    return e === n && (0 !== e || 1 / e === 1 / n) || e !== e && n !== n
                };

                function or(e, n) {
                    if (sr(e, n)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof n || null === n) return !1;
                    var t = Object.keys(e),
                        r = Object.keys(n);
                    if (t.length !== r.length) return !1;
                    for (r = 0; r < t.length; r++) {
                        var a = t[r];
                        if (!d.call(n, a) || !sr(e[a], n[a])) return !1
                    }
                    return !0
                }

                function cr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function ur(e, n) {
                    var t, r = cr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (t = e + r.textContent.length, e <= n && t >= n) return {
                                node: r,
                                offset: n - e
                            };
                            e = t
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = cr(r)
                    }
                }

                function dr(e, n) {
                    return !(!e || !n) && (e === n || (!e || 3 !== e.nodeType) && (n && 3 === n.nodeType ? dr(e, n.parentNode) : "contains" in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
                }

                function hr() {
                    for (var e = window, n = K(); n instanceof e.HTMLIFrameElement;) {
                        try {
                            var t = "string" === typeof n.contentWindow.location.href
                        } catch (r) {
                            t = !1
                        }
                        if (!t) break;
                        n = K((e = n.contentWindow).document)
                    }
                    return n
                }

                function fr(e) {
                    var n = e && e.nodeName && e.nodeName.toLowerCase();
                    return n && ("input" === n && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === n || "true" === e.contentEditable)
                }

                function pr(e) {
                    var n = hr(),
                        t = e.focusedElem,
                        r = e.selectionRange;
                    if (n !== t && t && t.ownerDocument && dr(t.ownerDocument.documentElement, t)) {
                        if (null !== r && fr(t))
                            if (n = r.start, void 0 === (e = r.end) && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
                            else if ((e = (n = t.ownerDocument || document) && n.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var a = t.textContent.length,
                                l = Math.min(r.start, a);
                            r = void 0 === r.end ? l : Math.min(r.end, a), !e.extend && l > r && (a = r, r = l, l = a), a = ur(t, l);
                            var i = ur(t, r);
                            a && i && (1 !== e.rangeCount || e.anchorNode !== a.node || e.anchorOffset !== a.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && ((n = n.createRange()).setStart(a.node, a.offset), e.removeAllRanges(), l > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)))
                        }
                        for (n = [], e = t; e = e.parentNode;) 1 === e.nodeType && n.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof t.focus && t.focus(), t = 0; t < n.length; t++)(e = n[t]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var mr = u && "documentMode" in document && 11 >= document.documentMode,
                    vr = null,
                    xr = null,
                    gr = null,
                    jr = !1;

                function yr(e, n, t) {
                    var r = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                    jr || null == vr || vr !== K(r) || ("selectionStart" in (r = vr) && fr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, gr && or(gr, r) || (gr = r, 0 < (r = Qr(xr, "onSelect")).length && (n = new ut("onSelect", "select", null, n, t), e.push({
                        event: n,
                        listeners: r
                    }), n.target = vr)))
                }

                function br(e, n) {
                    var t = {};
                    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t
                }
                var kr = {
                        animationend: br("Animation", "AnimationEnd"),
                        animationiteration: br("Animation", "AnimationIteration"),
                        animationstart: br("Animation", "AnimationStart"),
                        transitionend: br("Transition", "TransitionEnd")
                    },
                    wr = {},
                    Nr = {};

                function Sr(e) {
                    if (wr[e]) return wr[e];
                    if (!kr[e]) return e;
                    var n, t = kr[e];
                    for (n in t)
                        if (t.hasOwnProperty(n) && n in Nr) return wr[e] = t[n];
                    return e
                }
                u && (Nr = document.createElement("div").style, "AnimationEvent" in window || (delete kr.animationend.animation, delete kr.animationiteration.animation, delete kr.animationstart.animation), "TransitionEvent" in window || delete kr.transitionend.transition);
                var Cr = Sr("animationend"),
                    Mr = Sr("animationiteration"),
                    Er = Sr("animationstart"),
                    Lr = Sr("transitionend"),
                    zr = new Map,
                    Pr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function _r(e, n) {
                    zr.set(e, n), o(n, [e])
                }
                for (var Or = 0; Or < Pr.length; Or++) {
                    var Rr = Pr[Or];
                    _r(Rr.toLowerCase(), "on" + (Rr[0].toUpperCase() + Rr.slice(1)))
                }
                _r(Cr, "onAnimationEnd"), _r(Mr, "onAnimationIteration"), _r(Er, "onAnimationStart"), _r("dblclick", "onDoubleClick"), _r("focusin", "onFocus"), _r("focusout", "onBlur"), _r(Lr, "onTransitionEnd"), c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), o("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), o("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), o("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), o("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), o("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Br = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Tr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));

                function Wr(e, n, t) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = t,
                        function(e, n, t, r, a, i, s, o, c) {
                            if (Ie.apply(this, arguments), Te) {
                                if (!Te) throw Error(l(198));
                                var u = We;
                                Te = !1, We = null, De || (De = !0, He = u)
                            }
                        }(r, n, void 0, e), e.currentTarget = null
                }

                function Dr(e, n) {
                    n = 0 !== (4 & n);
                    for (var t = 0; t < e.length; t++) {
                        var r = e[t],
                            a = r.event;
                        r = r.listeners;
                        e: {
                            var l = void 0;
                            if (n)
                                for (var i = r.length - 1; 0 <= i; i--) {
                                    var s = r[i],
                                        o = s.instance,
                                        c = s.currentTarget;
                                    if (s = s.listener, o !== l && a.isPropagationStopped()) break e;
                                    Wr(a, s, c), l = o
                                } else
                                    for (i = 0; i < r.length; i++) {
                                        if (o = (s = r[i]).instance, c = s.currentTarget, s = s.listener, o !== l && a.isPropagationStopped()) break e;
                                        Wr(a, s, c), l = o
                                    }
                        }
                    }
                    if (De) throw e = He, De = !1, He = null, e
                }

                function Hr(e, n) {
                    var t = n[ma];
                    void 0 === t && (t = n[ma] = new Set);
                    var r = e + "__bubble";
                    t.has(r) || (Vr(n, e, 2, !1), t.add(r))
                }

                function Fr(e, n, t) {
                    var r = 0;
                    n && (r |= 4), Vr(t, e, r, n)
                }
                var Ir = "_reactListening" + Math.random().toString(36).slice(2);

                function Ar(e) {
                    if (!e[Ir]) {
                        e[Ir] = !0, i.forEach((function(n) {
                            "selectionchange" !== n && (Tr.has(n) || Fr(n, !1, e), Fr(n, !0, e))
                        }));
                        var n = 9 === e.nodeType ? e : e.ownerDocument;
                        null === n || n[Ir] || (n[Ir] = !0, Fr("selectionchange", !1, n))
                    }
                }

                function Vr(e, n, t, r) {
                    switch (Gn(n)) {
                        case 1:
                            var a = Qn;
                            break;
                        case 4:
                            a = qn;
                            break;
                        default:
                            a = Kn
                    }
                    t = a.bind(null, n, t, e), a = void 0, !Oe || "touchstart" !== n && "touchmove" !== n && "wheel" !== n || (a = !0), r ? void 0 !== a ? e.addEventListener(n, t, {
                        capture: !0,
                        passive: a
                    }) : e.addEventListener(n, t, !0) : void 0 !== a ? e.addEventListener(n, t, {
                        passive: a
                    }) : e.addEventListener(n, t, !1)
                }

                function Ur(e, n, t, r, a) {
                    var l = r;
                    if (0 === (1 & n) && 0 === (2 & n) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var s = r.stateNode.containerInfo;
                            if (s === a || 8 === s.nodeType && s.parentNode === a) break;
                            if (4 === i)
                                for (i = r.return; null !== i;) {
                                    var o = i.tag;
                                    if ((3 === o || 4 === o) && ((o = i.stateNode.containerInfo) === a || 8 === o.nodeType && o.parentNode === a)) return;
                                    i = i.return
                                }
                            for (; null !== s;) {
                                if (null === (i = ga(s))) return;
                                if (5 === (o = i.tag) || 6 === o) {
                                    r = l = i;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                    Pe((function() {
                        var r = l,
                            a = be(t),
                            i = [];
                        e: {
                            var s = zr.get(e);
                            if (void 0 !== s) {
                                var o = ut,
                                    c = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tt(t)) break e;
                                    case "keydown":
                                    case "keyup":
                                        o = Mt;
                                        break;
                                    case "focusin":
                                        c = "focus", o = vt;
                                        break;
                                    case "focusout":
                                        c = "blur", o = vt;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        o = vt;
                                        break;
                                    case "click":
                                        if (2 === t.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        o = pt;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        o = mt;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        o = Lt;
                                        break;
                                    case Cr:
                                    case Mr:
                                    case Er:
                                        o = xt;
                                        break;
                                    case Lr:
                                        o = zt;
                                        break;
                                    case "scroll":
                                        o = ht;
                                        break;
                                    case "wheel":
                                        o = _t;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        o = jt;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        o = Et
                                }
                                var u = 0 !== (4 & n),
                                    d = !u && "scroll" === e,
                                    h = u ? null !== s ? s + "Capture" : null : s;
                                u = [];
                                for (var f, p = r; null !== p;) {
                                    var m = (f = p).stateNode;
                                    if (5 === f.tag && null !== m && (f = m, null !== h && (null != (m = _e(p, h)) && u.push($r(p, m, f)))), d) break;
                                    p = p.return
                                }
                                0 < u.length && (s = new o(s, c, null, t, a), i.push({
                                    event: s,
                                    listeners: u
                                }))
                            }
                        }
                        if (0 === (7 & n)) {
                            if (o = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || t === ye || !(c = t.relatedTarget || t.fromElement) || !ga(c) && !c[pa]) && (o || s) && (s = a.window === a ? a : (s = a.ownerDocument) ? s.defaultView || s.parentWindow : window, o ? (o = r, null !== (c = (c = t.relatedTarget || t.toElement) ? ga(c) : null) && (c !== (d = Ae(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (o = null, c = r), o !== c)) {
                                if (u = pt, m = "onMouseLeave", h = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (u = Et, m = "onPointerLeave", h = "onPointerEnter", p = "pointer"), d = null == o ? s : ya(o), f = null == c ? s : ya(c), (s = new u(m, p + "leave", o, t, a)).target = d, s.relatedTarget = f, m = null, ga(a) === r && ((u = new u(h, p + "enter", c, t, a)).target = f, u.relatedTarget = d, m = u), d = m, o && c) e: {
                                    for (h = c, p = 0, f = u = o; f; f = qr(f)) p++;
                                    for (f = 0, m = h; m; m = qr(m)) f++;
                                    for (; 0 < p - f;) u = qr(u),
                                    p--;
                                    for (; 0 < f - p;) h = qr(h),
                                    f--;
                                    for (; p--;) {
                                        if (u === h || null !== h && u === h.alternate) break e;
                                        u = qr(u), h = qr(h)
                                    }
                                    u = null
                                }
                                else u = null;
                                null !== o && Kr(i, s, o, u, !1), null !== c && null !== d && Kr(i, d, c, u, !0)
                            }
                            if ("select" === (o = (s = r ? ya(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === o && "file" === s.type) var v = Xt;
                            else if (Ut(s))
                                if (Gt) v = ir;
                                else {
                                    v = ar;
                                    var x = rr
                                }
                            else(o = s.nodeName) && "input" === o.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (v = lr);
                            switch (v && (v = v(e, r)) ? $t(i, v, t, a) : (x && x(e, s, r), "focusout" === e && (x = s._wrapperState) && x.controlled && "number" === s.type && ee(s, "number", s.value)), x = r ? ya(r) : window, e) {
                                case "focusin":
                                    (Ut(x) || "true" === x.contentEditable) && (vr = x, xr = r, gr = null);
                                    break;
                                case "focusout":
                                    gr = xr = vr = null;
                                    break;
                                case "mousedown":
                                    jr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    jr = !1, yr(i, t, a);
                                    break;
                                case "selectionchange":
                                    if (mr) break;
                                case "keydown":
                                case "keyup":
                                    yr(i, t, a)
                            }
                            var g;
                            if (Rt) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var j = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        j = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        j = "onCompositionUpdate";
                                        break e
                                }
                                j = void 0
                            }
                            else At ? Ft(e, t) && (j = "onCompositionEnd") : "keydown" === e && 229 === t.keyCode && (j = "onCompositionStart");
                            j && (Wt && "ko" !== t.locale && (At || "onCompositionStart" !== j ? "onCompositionEnd" === j && At && (g = nt()) : (Jn = "value" in (Zn = a) ? Zn.value : Zn.textContent, At = !0)), 0 < (x = Qr(r, j)).length && (j = new yt(j, e, null, t, a), i.push({
                                event: j,
                                listeners: x
                            }), g ? j.data = g : null !== (g = It(t)) && (j.data = g))), (g = Tt ? function(e, n) {
                                switch (e) {
                                    case "compositionend":
                                        return It(n);
                                    case "keypress":
                                        return 32 !== n.which ? null : (Ht = !0, Dt);
                                    case "textInput":
                                        return (e = n.data) === Dt && Ht ? null : e;
                                    default:
                                        return null
                                }
                            }(e, t) : function(e, n) {
                                if (At) return "compositionend" === e || !Rt && Ft(e, n) ? (e = nt(), et = Jn = Zn = null, At = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
                                            if (n.char && 1 < n.char.length) return n.char;
                                            if (n.which) return String.fromCharCode(n.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Wt && "ko" !== n.locale ? null : n.data
                                }
                            }(e, t)) && (0 < (r = Qr(r, "onBeforeInput")).length && (a = new yt("onBeforeInput", "beforeinput", null, t, a), i.push({
                                event: a,
                                listeners: r
                            }), a.data = g))
                        }
                        Dr(i, n)
                    }))
                }

                function $r(e, n, t) {
                    return {
                        instance: e,
                        listener: n,
                        currentTarget: t
                    }
                }

                function Qr(e, n) {
                    for (var t = n + "Capture", r = []; null !== e;) {
                        var a = e,
                            l = a.stateNode;
                        5 === a.tag && null !== l && (a = l, null != (l = _e(e, t)) && r.unshift($r(e, l, a)), null != (l = _e(e, n)) && r.push($r(e, l, a))), e = e.return
                    }
                    return r
                }

                function qr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Kr(e, n, t, r, a) {
                    for (var l = n._reactName, i = []; null !== t && t !== r;) {
                        var s = t,
                            o = s.alternate,
                            c = s.stateNode;
                        if (null !== o && o === r) break;
                        5 === s.tag && null !== c && (s = c, a ? null != (o = _e(t, l)) && i.unshift($r(t, o, s)) : a || null != (o = _e(t, l)) && i.push($r(t, o, s))), t = t.return
                    }
                    0 !== i.length && e.push({
                        event: n,
                        listeners: i
                    })
                }
                var Yr = /\r\n?/g,
                    Xr = /\u0000|\uFFFD/g;

                function Gr(e) {
                    return ("string" === typeof e ? e : "" + e).replace(Yr, "\n").replace(Xr, "")
                }

                function Zr(e, n, t) {
                    if (n = Gr(n), Gr(e) !== n && t) throw Error(l(425))
                }

                function Jr() {}
                var ea = null,
                    na = null;

                function ta(e, n) {
                    return "textarea" === e || "noscript" === e || "string" === typeof n.children || "number" === typeof n.children || "object" === typeof n.dangerouslySetInnerHTML && null !== n.dangerouslySetInnerHTML && null != n.dangerouslySetInnerHTML.__html
                }
                var ra = "function" === typeof setTimeout ? setTimeout : void 0,
                    aa = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    la = "function" === typeof Promise ? Promise : void 0,
                    ia = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof la ? function(e) {
                        return la.resolve(null).then(e).catch(sa)
                    } : ra;

                function sa(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function oa(e, n) {
                    var t = n,
                        r = 0;
                    do {
                        var a = t.nextSibling;
                        if (e.removeChild(t), a && 8 === a.nodeType)
                            if ("/$" === (t = a.data)) {
                                if (0 === r) return e.removeChild(a), void Vn(n);
                                r--
                            } else "$" !== t && "$?" !== t && "$!" !== t || r++;
                        t = a
                    } while (t);
                    Vn(n)
                }

                function ca(e) {
                    for (; null != e; e = e.nextSibling) {
                        var n = e.nodeType;
                        if (1 === n || 3 === n) break;
                        if (8 === n) {
                            if ("$" === (n = e.data) || "$!" === n || "$?" === n) break;
                            if ("/$" === n) return null
                        }
                    }
                    return e
                }

                function ua(e) {
                    e = e.previousSibling;
                    for (var n = 0; e;) {
                        if (8 === e.nodeType) {
                            var t = e.data;
                            if ("$" === t || "$!" === t || "$?" === t) {
                                if (0 === n) return e;
                                n--
                            } else "/$" === t && n++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var da = Math.random().toString(36).slice(2),
                    ha = "__reactFiber$" + da,
                    fa = "__reactProps$" + da,
                    pa = "__reactContainer$" + da,
                    ma = "__reactEvents$" + da,
                    va = "__reactListeners$" + da,
                    xa = "__reactHandles$" + da;

                function ga(e) {
                    var n = e[ha];
                    if (n) return n;
                    for (var t = e.parentNode; t;) {
                        if (n = t[pa] || t[ha]) {
                            if (t = n.alternate, null !== n.child || null !== t && null !== t.child)
                                for (e = ua(e); null !== e;) {
                                    if (t = e[ha]) return t;
                                    e = ua(e)
                                }
                            return n
                        }
                        t = (e = t).parentNode
                    }
                    return null
                }

                function ja(e) {
                    return !(e = e[ha] || e[pa]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function ya(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(l(33))
                }

                function ba(e) {
                    return e[fa] || null
                }
                var ka = [],
                    wa = -1;

                function Na(e) {
                    return {
                        current: e
                    }
                }

                function Sa(e) {
                    0 > wa || (e.current = ka[wa], ka[wa] = null, wa--)
                }

                function Ca(e, n) {
                    wa++, ka[wa] = e.current, e.current = n
                }
                var Ma = {},
                    Ea = Na(Ma),
                    La = Na(!1),
                    za = Ma;

                function Pa(e, n) {
                    var t = e.type.contextTypes;
                    if (!t) return Ma;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
                    var a, l = {};
                    for (a in t) l[a] = n[a];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l
                }

                function _a(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function Oa() {
                    Sa(La), Sa(Ea)
                }

                function Ra(e, n, t) {
                    if (Ea.current !== Ma) throw Error(l(168));
                    Ca(Ea, n), Ca(La, t)
                }

                function Ba(e, n, t) {
                    var r = e.stateNode;
                    if (n = n.childContextTypes, "function" !== typeof r.getChildContext) return t;
                    for (var a in r = r.getChildContext())
                        if (!(a in n)) throw Error(l(108, V(e) || "Unknown", a));
                    return W({}, t, r)
                }

                function Ta(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ma, za = Ea.current, Ca(Ea, e), Ca(La, La.current), !0
                }

                function Wa(e, n, t) {
                    var r = e.stateNode;
                    if (!r) throw Error(l(169));
                    t ? (e = Ba(e, n, za), r.__reactInternalMemoizedMergedChildContext = e, Sa(La), Sa(Ea), Ca(Ea, e)) : Sa(La), Ca(La, t)
                }
                var Da = null,
                    Ha = !1,
                    Fa = !1;

                function Ia(e) {
                    null === Da ? Da = [e] : Da.push(e)
                }

                function Aa() {
                    if (!Fa && null !== Da) {
                        Fa = !0;
                        var e = 0,
                            n = yn;
                        try {
                            var t = Da;
                            for (yn = 1; e < t.length; e++) {
                                var r = t[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Da = null, Ha = !1
                        } catch (a) {
                            throw null !== Da && (Da = Da.slice(e + 1)), qe(Je, Aa), a
                        } finally {
                            yn = n, Fa = !1
                        }
                    }
                    return null
                }
                var Va = [],
                    Ua = 0,
                    $a = null,
                    Qa = 0,
                    qa = [],
                    Ka = 0,
                    Ya = null,
                    Xa = 1,
                    Ga = "";

                function Za(e, n) {
                    Va[Ua++] = Qa, Va[Ua++] = $a, $a = e, Qa = n
                }

                function Ja(e, n, t) {
                    qa[Ka++] = Xa, qa[Ka++] = Ga, qa[Ka++] = Ya, Ya = e;
                    var r = Xa;
                    e = Ga;
                    var a = 32 - sn(r) - 1;
                    r &= ~(1 << a), t += 1;
                    var l = 32 - sn(n) + a;
                    if (30 < l) {
                        var i = a - a % 5;
                        l = (r & (1 << i) - 1).toString(32), r >>= i, a -= i, Xa = 1 << 32 - sn(n) + a | t << a | r, Ga = l + e
                    } else Xa = 1 << l | t << a | r, Ga = e
                }

                function el(e) {
                    null !== e.return && (Za(e, 1), Ja(e, 1, 0))
                }

                function nl(e) {
                    for (; e === $a;) $a = Va[--Ua], Va[Ua] = null, Qa = Va[--Ua], Va[Ua] = null;
                    for (; e === Ya;) Ya = qa[--Ka], qa[Ka] = null, Ga = qa[--Ka], qa[Ka] = null, Xa = qa[--Ka], qa[Ka] = null
                }
                var tl = null,
                    rl = null,
                    al = !1,
                    ll = null;

                function il(e, n) {
                    var t = Pc(5, null, null, 0);
                    t.elementType = "DELETED", t.stateNode = n, t.return = e, null === (n = e.deletions) ? (e.deletions = [t], e.flags |= 16) : n.push(t)
                }

                function sl(e, n) {
                    switch (e.tag) {
                        case 5:
                            var t = e.type;
                            return null !== (n = 1 !== n.nodeType || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n) && (e.stateNode = n, tl = e, rl = ca(n.firstChild), !0);
                        case 6:
                            return null !== (n = "" === e.pendingProps || 3 !== n.nodeType ? null : n) && (e.stateNode = n, tl = e, rl = null, !0);
                        case 13:
                            return null !== (n = 8 !== n.nodeType ? null : n) && (t = null !== Ya ? {
                                id: Xa,
                                overflow: Ga
                            } : null, e.memoizedState = {
                                dehydrated: n,
                                treeContext: t,
                                retryLane: 1073741824
                            }, (t = Pc(18, null, null, 0)).stateNode = n, t.return = e, e.child = t, tl = e, rl = null, !0);
                        default:
                            return !1
                    }
                }

                function ol(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function cl(e) {
                    if (al) {
                        var n = rl;
                        if (n) {
                            var t = n;
                            if (!sl(e, n)) {
                                if (ol(e)) throw Error(l(418));
                                n = ca(t.nextSibling);
                                var r = tl;
                                n && sl(e, n) ? il(r, t) : (e.flags = -4097 & e.flags | 2, al = !1, tl = e)
                            }
                        } else {
                            if (ol(e)) throw Error(l(418));
                            e.flags = -4097 & e.flags | 2, al = !1, tl = e
                        }
                    }
                }

                function ul(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    tl = e
                }

                function dl(e) {
                    if (e !== tl) return !1;
                    if (!al) return ul(e), al = !0, !1;
                    var n;
                    if ((n = 3 !== e.tag) && !(n = 5 !== e.tag) && (n = "head" !== (n = e.type) && "body" !== n && !ta(e.type, e.memoizedProps)), n && (n = rl)) {
                        if (ol(e)) throw hl(), Error(l(418));
                        for (; n;) il(e, n), n = ca(n.nextSibling)
                    }
                    if (ul(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(l(317));
                        e: {
                            for (e = e.nextSibling, n = 0; e;) {
                                if (8 === e.nodeType) {
                                    var t = e.data;
                                    if ("/$" === t) {
                                        if (0 === n) {
                                            rl = ca(e.nextSibling);
                                            break e
                                        }
                                        n--
                                    } else "$" !== t && "$!" !== t && "$?" !== t || n++
                                }
                                e = e.nextSibling
                            }
                            rl = null
                        }
                    } else rl = tl ? ca(e.stateNode.nextSibling) : null;
                    return !0
                }

                function hl() {
                    for (var e = rl; e;) e = ca(e.nextSibling)
                }

                function fl() {
                    rl = tl = null, al = !1
                }

                function pl(e) {
                    null === ll ? ll = [e] : ll.push(e)
                }
                var ml = y.ReactCurrentBatchConfig;

                function vl(e, n, t) {
                    if (null !== (e = t.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (t._owner) {
                            if (t = t._owner) {
                                if (1 !== t.tag) throw Error(l(309));
                                var r = t.stateNode
                            }
                            if (!r) throw Error(l(147, e));
                            var a = r,
                                i = "" + e;
                            return null !== n && null !== n.ref && "function" === typeof n.ref && n.ref._stringRef === i ? n.ref : (n = function(e) {
                                var n = a.refs;
                                null === e ? delete n[i] : n[i] = e
                            }, n._stringRef = i, n)
                        }
                        if ("string" !== typeof e) throw Error(l(284));
                        if (!t._owner) throw Error(l(290, e))
                    }
                    return e
                }

                function xl(e, n) {
                    throw e = Object.prototype.toString.call(n), Error(l(31, "[object Object]" === e ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
                }

                function gl(e) {
                    return (0, e._init)(e._payload)
                }

                function jl(e) {
                    function n(n, t) {
                        if (e) {
                            var r = n.deletions;
                            null === r ? (n.deletions = [t], n.flags |= 16) : r.push(t)
                        }
                    }

                    function t(t, r) {
                        if (!e) return null;
                        for (; null !== r;) n(t, r), r = r.sibling;
                        return null
                    }

                    function r(e, n) {
                        for (e = new Map; null !== n;) null !== n.key ? e.set(n.key, n) : e.set(n.index, n), n = n.sibling;
                        return e
                    }

                    function a(e, n) {
                        return (e = Oc(e, n)).index = 0, e.sibling = null, e
                    }

                    function i(n, t, r) {
                        return n.index = r, e ? null !== (r = n.alternate) ? (r = r.index) < t ? (n.flags |= 2, t) : r : (n.flags |= 2, t) : (n.flags |= 1048576, t)
                    }

                    function s(n) {
                        return e && null === n.alternate && (n.flags |= 2), n
                    }

                    function o(e, n, t, r) {
                        return null === n || 6 !== n.tag ? ((n = Wc(t, e.mode, r)).return = e, n) : ((n = a(n, t)).return = e, n)
                    }

                    function c(e, n, t, r) {
                        var l = t.type;
                        return l === w ? d(e, n, t.props.children, r, t.key) : null !== n && (n.elementType === l || "object" === typeof l && null !== l && l.$$typeof === _ && gl(l) === n.type) ? ((r = a(n, t.props)).ref = vl(e, n, t), r.return = e, r) : ((r = Rc(t.type, t.key, t.props, null, e.mode, r)).ref = vl(e, n, t), r.return = e, r)
                    }

                    function u(e, n, t, r) {
                        return null === n || 4 !== n.tag || n.stateNode.containerInfo !== t.containerInfo || n.stateNode.implementation !== t.implementation ? ((n = Dc(t, e.mode, r)).return = e, n) : ((n = a(n, t.children || [])).return = e, n)
                    }

                    function d(e, n, t, r, l) {
                        return null === n || 7 !== n.tag ? ((n = Bc(t, e.mode, r, l)).return = e, n) : ((n = a(n, t)).return = e, n)
                    }

                    function h(e, n, t) {
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return (n = Wc("" + n, e.mode, t)).return = e, n;
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case b:
                                    return (t = Rc(n.type, n.key, n.props, null, e.mode, t)).ref = vl(e, null, n), t.return = e, t;
                                case k:
                                    return (n = Dc(n, e.mode, t)).return = e, n;
                                case _:
                                    return h(e, (0, n._init)(n._payload), t)
                            }
                            if (ne(n) || B(n)) return (n = Bc(n, e.mode, t, null)).return = e, n;
                            xl(e, n)
                        }
                        return null
                    }

                    function f(e, n, t, r) {
                        var a = null !== n ? n.key : null;
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return null !== a ? null : o(e, n, "" + t, r);
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case b:
                                    return t.key === a ? c(e, n, t, r) : null;
                                case k:
                                    return t.key === a ? u(e, n, t, r) : null;
                                case _:
                                    return f(e, n, (a = t._init)(t._payload), r)
                            }
                            if (ne(t) || B(t)) return null !== a ? null : d(e, n, t, r, null);
                            xl(e, t)
                        }
                        return null
                    }

                    function p(e, n, t, r, a) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return o(n, e = e.get(t) || null, "" + r, a);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case b:
                                    return c(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                                case k:
                                    return u(n, e = e.get(null === r.key ? t : r.key) || null, r, a);
                                case _:
                                    return p(e, n, t, (0, r._init)(r._payload), a)
                            }
                            if (ne(r) || B(r)) return d(n, e = e.get(t) || null, r, a, null);
                            xl(n, r)
                        }
                        return null
                    }

                    function m(a, l, s, o) {
                        for (var c = null, u = null, d = l, m = l = 0, v = null; null !== d && m < s.length; m++) {
                            d.index > m ? (v = d, d = null) : v = d.sibling;
                            var x = f(a, d, s[m], o);
                            if (null === x) {
                                null === d && (d = v);
                                break
                            }
                            e && d && null === x.alternate && n(a, d), l = i(x, l, m), null === u ? c = x : u.sibling = x, u = x, d = v
                        }
                        if (m === s.length) return t(a, d), al && Za(a, m), c;
                        if (null === d) {
                            for (; m < s.length; m++) null !== (d = h(a, s[m], o)) && (l = i(d, l, m), null === u ? c = d : u.sibling = d, u = d);
                            return al && Za(a, m), c
                        }
                        for (d = r(a, d); m < s.length; m++) null !== (v = p(d, a, m, s[m], o)) && (e && null !== v.alternate && d.delete(null === v.key ? m : v.key), l = i(v, l, m), null === u ? c = v : u.sibling = v, u = v);
                        return e && d.forEach((function(e) {
                            return n(a, e)
                        })), al && Za(a, m), c
                    }

                    function v(a, s, o, c) {
                        var u = B(o);
                        if ("function" !== typeof u) throw Error(l(150));
                        if (null == (o = u.call(o))) throw Error(l(151));
                        for (var d = u = null, m = s, v = s = 0, x = null, g = o.next(); null !== m && !g.done; v++, g = o.next()) {
                            m.index > v ? (x = m, m = null) : x = m.sibling;
                            var j = f(a, m, g.value, c);
                            if (null === j) {
                                null === m && (m = x);
                                break
                            }
                            e && m && null === j.alternate && n(a, m), s = i(j, s, v), null === d ? u = j : d.sibling = j, d = j, m = x
                        }
                        if (g.done) return t(a, m), al && Za(a, v), u;
                        if (null === m) {
                            for (; !g.done; v++, g = o.next()) null !== (g = h(a, g.value, c)) && (s = i(g, s, v), null === d ? u = g : d.sibling = g, d = g);
                            return al && Za(a, v), u
                        }
                        for (m = r(a, m); !g.done; v++, g = o.next()) null !== (g = p(m, a, v, g.value, c)) && (e && null !== g.alternate && m.delete(null === g.key ? v : g.key), s = i(g, s, v), null === d ? u = g : d.sibling = g, d = g);
                        return e && m.forEach((function(e) {
                            return n(a, e)
                        })), al && Za(a, v), u
                    }
                    return function e(r, l, i, o) {
                        if ("object" === typeof i && null !== i && i.type === w && null === i.key && (i = i.props.children), "object" === typeof i && null !== i) {
                            switch (i.$$typeof) {
                                case b:
                                    e: {
                                        for (var c = i.key, u = l; null !== u;) {
                                            if (u.key === c) {
                                                if ((c = i.type) === w) {
                                                    if (7 === u.tag) {
                                                        t(r, u.sibling), (l = a(u, i.props.children)).return = r, r = l;
                                                        break e
                                                    }
                                                } else if (u.elementType === c || "object" === typeof c && null !== c && c.$$typeof === _ && gl(c) === u.type) {
                                                    t(r, u.sibling), (l = a(u, i.props)).ref = vl(r, u, i), l.return = r, r = l;
                                                    break e
                                                }
                                                t(r, u);
                                                break
                                            }
                                            n(r, u), u = u.sibling
                                        }
                                        i.type === w ? ((l = Bc(i.props.children, r.mode, o, i.key)).return = r, r = l) : ((o = Rc(i.type, i.key, i.props, null, r.mode, o)).ref = vl(r, l, i), o.return = r, r = o)
                                    }
                                    return s(r);
                                case k:
                                    e: {
                                        for (u = i.key; null !== l;) {
                                            if (l.key === u) {
                                                if (4 === l.tag && l.stateNode.containerInfo === i.containerInfo && l.stateNode.implementation === i.implementation) {
                                                    t(r, l.sibling), (l = a(l, i.children || [])).return = r, r = l;
                                                    break e
                                                }
                                                t(r, l);
                                                break
                                            }
                                            n(r, l), l = l.sibling
                                        }(l = Dc(i, r.mode, o)).return = r,
                                        r = l
                                    }
                                    return s(r);
                                case _:
                                    return e(r, l, (u = i._init)(i._payload), o)
                            }
                            if (ne(i)) return m(r, l, i, o);
                            if (B(i)) return v(r, l, i, o);
                            xl(r, i)
                        }
                        return "string" === typeof i && "" !== i || "number" === typeof i ? (i = "" + i, null !== l && 6 === l.tag ? (t(r, l.sibling), (l = a(l, i)).return = r, r = l) : (t(r, l), (l = Wc(i, r.mode, o)).return = r, r = l), s(r)) : t(r, l)
                    }
                }
                var yl = jl(!0),
                    bl = jl(!1),
                    kl = Na(null),
                    wl = null,
                    Nl = null,
                    Sl = null;

                function Cl() {
                    Sl = Nl = wl = null
                }

                function Ml(e) {
                    var n = kl.current;
                    Sa(kl), e._currentValue = n
                }

                function El(e, n, t) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & n) !== n ? (e.childLanes |= n, null !== r && (r.childLanes |= n)) : null !== r && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
                        e = e.return
                    }
                }

                function Ll(e, n) {
                    wl = e, Sl = Nl = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & n) && (gs = !0), e.firstContext = null)
                }

                function zl(e) {
                    var n = e._currentValue;
                    if (Sl !== e)
                        if (e = {
                                context: e,
                                memoizedValue: n,
                                next: null
                            }, null === Nl) {
                            if (null === wl) throw Error(l(308));
                            Nl = e, wl.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else Nl = Nl.next = e;
                    return n
                }
                var Pl = null;

                function _l(e) {
                    null === Pl ? Pl = [e] : Pl.push(e)
                }

                function Ol(e, n, t, r) {
                    var a = n.interleaved;
                    return null === a ? (t.next = t, _l(n)) : (t.next = a.next, a.next = t), n.interleaved = t, Rl(e, r)
                }

                function Rl(e, n) {
                    e.lanes |= n;
                    var t = e.alternate;
                    for (null !== t && (t.lanes |= n), t = e, e = e.return; null !== e;) e.childLanes |= n, null !== (t = e.alternate) && (t.childLanes |= n), t = e, e = e.return;
                    return 3 === t.tag ? t.stateNode : null
                }
                var Bl = !1;

                function Tl(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Wl(e, n) {
                    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Dl(e, n) {
                    return {
                        eventTime: e,
                        lane: n,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function Hl(e, n, t) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & Eo)) {
                        var a = r.pending;
                        return null === a ? n.next = n : (n.next = a.next, a.next = n), r.pending = n, Rl(e, t)
                    }
                    return null === (a = r.interleaved) ? (n.next = n, _l(r)) : (n.next = a.next, a.next = n), r.interleaved = n, Rl(e, t)
                }

                function Fl(e, n, t) {
                    if (null !== (n = n.updateQueue) && (n = n.shared, 0 !== (4194240 & t))) {
                        var r = n.lanes;
                        t |= r &= e.pendingLanes, n.lanes = t, jn(e, t)
                    }
                }

                function Il(e, n) {
                    var t = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && t === (r = r.updateQueue)) {
                        var a = null,
                            l = null;
                        if (null !== (t = t.firstBaseUpdate)) {
                            do {
                                var i = {
                                    eventTime: t.eventTime,
                                    lane: t.lane,
                                    tag: t.tag,
                                    payload: t.payload,
                                    callback: t.callback,
                                    next: null
                                };
                                null === l ? a = l = i : l = l.next = i, t = t.next
                            } while (null !== t);
                            null === l ? a = l = n : l = l.next = n
                        } else a = l = n;
                        return t = {
                            baseState: r.baseState,
                            firstBaseUpdate: a,
                            lastBaseUpdate: l,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = t)
                    }
                    null === (e = t.lastBaseUpdate) ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n
                }

                function Al(e, n, t, r) {
                    var a = e.updateQueue;
                    Bl = !1;
                    var l = a.firstBaseUpdate,
                        i = a.lastBaseUpdate,
                        s = a.shared.pending;
                    if (null !== s) {
                        a.shared.pending = null;
                        var o = s,
                            c = o.next;
                        o.next = null, null === i ? l = c : i.next = c, i = o;
                        var u = e.alternate;
                        null !== u && ((s = (u = u.updateQueue).lastBaseUpdate) !== i && (null === s ? u.firstBaseUpdate = c : s.next = c, u.lastBaseUpdate = o))
                    }
                    if (null !== l) {
                        var d = a.baseState;
                        for (i = 0, u = c = o = null, s = l;;) {
                            var h = s.lane,
                                f = s.eventTime;
                            if ((r & h) === h) {
                                null !== u && (u = u.next = {
                                    eventTime: f,
                                    lane: 0,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: s.callback,
                                    next: null
                                });
                                e: {
                                    var p = e,
                                        m = s;
                                    switch (h = n, f = t, m.tag) {
                                        case 1:
                                            if ("function" === typeof(p = m.payload)) {
                                                d = p.call(f, d, h);
                                                break e
                                            }
                                            d = p;
                                            break e;
                                        case 3:
                                            p.flags = -65537 & p.flags | 128;
                                        case 0:
                                            if (null === (h = "function" === typeof(p = m.payload) ? p.call(f, d, h) : p) || void 0 === h) break e;
                                            d = W({}, d, h);
                                            break e;
                                        case 2:
                                            Bl = !0
                                    }
                                }
                                null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (h = a.effects) ? a.effects = [s] : h.push(s))
                            } else f = {
                                eventTime: f,
                                lane: h,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            }, null === u ? (c = u = f, o = d) : u = u.next = f, i |= h;
                            if (null === (s = s.next)) {
                                if (null === (s = a.shared.pending)) break;
                                s = (h = s).next, h.next = null, a.lastBaseUpdate = h, a.shared.pending = null
                            }
                        }
                        if (null === u && (o = d), a.baseState = o, a.firstBaseUpdate = c, a.lastBaseUpdate = u, null !== (n = a.shared.interleaved)) {
                            a = n;
                            do {
                                i |= a.lane, a = a.next
                            } while (a !== n)
                        } else null === l && (a.shared.lanes = 0);
                        To |= i, e.lanes = i, e.memoizedState = d
                    }
                }

                function Vl(e, n, t) {
                    if (e = n.effects, n.effects = null, null !== e)
                        for (n = 0; n < e.length; n++) {
                            var r = e[n],
                                a = r.callback;
                            if (null !== a) {
                                if (r.callback = null, r = t, "function" !== typeof a) throw Error(l(191, a));
                                a.call(r)
                            }
                        }
                }
                var Ul = {},
                    $l = Na(Ul),
                    Ql = Na(Ul),
                    ql = Na(Ul);

                function Kl(e) {
                    if (e === Ul) throw Error(l(174));
                    return e
                }

                function Yl(e, n) {
                    switch (Ca(ql, n), Ca(Ql, e), Ca($l, Ul), e = n.nodeType) {
                        case 9:
                        case 11:
                            n = (n = n.documentElement) ? n.namespaceURI : oe(null, "");
                            break;
                        default:
                            n = oe(n = (e = 8 === e ? n.parentNode : n).namespaceURI || null, e = e.tagName)
                    }
                    Sa($l), Ca($l, n)
                }

                function Xl() {
                    Sa($l), Sa(Ql), Sa(ql)
                }

                function Gl(e) {
                    Kl(ql.current);
                    var n = Kl($l.current),
                        t = oe(n, e.type);
                    n !== t && (Ca(Ql, e), Ca($l, t))
                }

                function Zl(e) {
                    Ql.current === e && (Sa($l), Sa(Ql))
                }
                var Jl = Na(0);

                function ei(e) {
                    for (var n = e; null !== n;) {
                        if (13 === n.tag) {
                            var t = n.memoizedState;
                            if (null !== t && (null === (t = t.dehydrated) || "$?" === t.data || "$!" === t.data)) return n
                        } else if (19 === n.tag && void 0 !== n.memoizedProps.revealOrder) {
                            if (0 !== (128 & n.flags)) return n
                        } else if (null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === e) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return null;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                    return null
                }
                var ni = [];

                function ti() {
                    for (var e = 0; e < ni.length; e++) ni[e]._workInProgressVersionPrimary = null;
                    ni.length = 0
                }
                var ri = y.ReactCurrentDispatcher,
                    ai = y.ReactCurrentBatchConfig,
                    li = 0,
                    ii = null,
                    si = null,
                    oi = null,
                    ci = !1,
                    ui = !1,
                    di = 0,
                    hi = 0;

                function fi() {
                    throw Error(l(321))
                }

                function pi(e, n) {
                    if (null === n) return !1;
                    for (var t = 0; t < n.length && t < e.length; t++)
                        if (!sr(e[t], n[t])) return !1;
                    return !0
                }

                function mi(e, n, t, r, a, i) {
                    if (li = i, ii = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ri.current = null === e || null === e.memoizedState ? Zi : Ji, e = t(r, a), ui) {
                        i = 0;
                        do {
                            if (ui = !1, di = 0, 25 <= i) throw Error(l(301));
                            i += 1, oi = si = null, n.updateQueue = null, ri.current = es, e = t(r, a)
                        } while (ui)
                    }
                    if (ri.current = Gi, n = null !== si && null !== si.next, li = 0, oi = si = ii = null, ci = !1, n) throw Error(l(300));
                    return e
                }

                function vi() {
                    var e = 0 !== di;
                    return di = 0, e
                }

                function xi() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === oi ? ii.memoizedState = oi = e : oi = oi.next = e, oi
                }

                function gi() {
                    if (null === si) {
                        var e = ii.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = si.next;
                    var n = null === oi ? ii.memoizedState : oi.next;
                    if (null !== n) oi = n, si = e;
                    else {
                        if (null === e) throw Error(l(310));
                        e = {
                            memoizedState: (si = e).memoizedState,
                            baseState: si.baseState,
                            baseQueue: si.baseQueue,
                            queue: si.queue,
                            next: null
                        }, null === oi ? ii.memoizedState = oi = e : oi = oi.next = e
                    }
                    return oi
                }

                function ji(e, n) {
                    return "function" === typeof n ? n(e) : n
                }

                function yi(e) {
                    var n = gi(),
                        t = n.queue;
                    if (null === t) throw Error(l(311));
                    t.lastRenderedReducer = e;
                    var r = si,
                        a = r.baseQueue,
                        i = t.pending;
                    if (null !== i) {
                        if (null !== a) {
                            var s = a.next;
                            a.next = i.next, i.next = s
                        }
                        r.baseQueue = a = i, t.pending = null
                    }
                    if (null !== a) {
                        i = a.next, r = r.baseState;
                        var o = s = null,
                            c = null,
                            u = i;
                        do {
                            var d = u.lane;
                            if ((li & d) === d) null !== c && (c = c.next = {
                                lane: 0,
                                action: u.action,
                                hasEagerState: u.hasEagerState,
                                eagerState: u.eagerState,
                                next: null
                            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
                            else {
                                var h = {
                                    lane: d,
                                    action: u.action,
                                    hasEagerState: u.hasEagerState,
                                    eagerState: u.eagerState,
                                    next: null
                                };
                                null === c ? (o = c = h, s = r) : c = c.next = h, ii.lanes |= d, To |= d
                            }
                            u = u.next
                        } while (null !== u && u !== i);
                        null === c ? s = r : c.next = o, sr(r, n.memoizedState) || (gs = !0), n.memoizedState = r, n.baseState = s, n.baseQueue = c, t.lastRenderedState = r
                    }
                    if (null !== (e = t.interleaved)) {
                        a = e;
                        do {
                            i = a.lane, ii.lanes |= i, To |= i, a = a.next
                        } while (a !== e)
                    } else null === a && (t.lanes = 0);
                    return [n.memoizedState, t.dispatch]
                }

                function bi(e) {
                    var n = gi(),
                        t = n.queue;
                    if (null === t) throw Error(l(311));
                    t.lastRenderedReducer = e;
                    var r = t.dispatch,
                        a = t.pending,
                        i = n.memoizedState;
                    if (null !== a) {
                        t.pending = null;
                        var s = a = a.next;
                        do {
                            i = e(i, s.action), s = s.next
                        } while (s !== a);
                        sr(i, n.memoizedState) || (gs = !0), n.memoizedState = i, null === n.baseQueue && (n.baseState = i), t.lastRenderedState = i
                    }
                    return [i, r]
                }

                function ki() {}

                function wi(e, n) {
                    var t = ii,
                        r = gi(),
                        a = n(),
                        i = !sr(r.memoizedState, a);
                    if (i && (r.memoizedState = a, gs = !0), r = r.queue, Bi(Ci.bind(null, t, r, e), [e]), r.getSnapshot !== n || i || null !== oi && 1 & oi.memoizedState.tag) {
                        if (t.flags |= 2048, zi(9, Si.bind(null, t, r, a, n), void 0, null), null === Lo) throw Error(l(349));
                        0 !== (30 & li) || Ni(t, n, a)
                    }
                    return a
                }

                function Ni(e, n, t) {
                    e.flags |= 16384, e = {
                        getSnapshot: n,
                        value: t
                    }, null === (n = ii.updateQueue) ? (n = {
                        lastEffect: null,
                        stores: null
                    }, ii.updateQueue = n, n.stores = [e]) : null === (t = n.stores) ? n.stores = [e] : t.push(e)
                }

                function Si(e, n, t, r) {
                    n.value = t, n.getSnapshot = r, Mi(n) && Ei(e)
                }

                function Ci(e, n, t) {
                    return t((function() {
                        Mi(n) && Ei(e)
                    }))
                }

                function Mi(e) {
                    var n = e.getSnapshot;
                    e = e.value;
                    try {
                        var t = n();
                        return !sr(e, t)
                    } catch (r) {
                        return !0
                    }
                }

                function Ei(e) {
                    var n = Rl(e, 1);
                    null !== n && tc(n, e, 1, -1)
                }

                function Li(e) {
                    var n = xi();
                    return "function" === typeof e && (e = e()), n.memoizedState = n.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: ji,
                        lastRenderedState: e
                    }, n.queue = e, e = e.dispatch = qi.bind(null, ii, e), [n.memoizedState, e]
                }

                function zi(e, n, t, r) {
                    return e = {
                        tag: e,
                        create: n,
                        destroy: t,
                        deps: r,
                        next: null
                    }, null === (n = ii.updateQueue) ? (n = {
                        lastEffect: null,
                        stores: null
                    }, ii.updateQueue = n, n.lastEffect = e.next = e) : null === (t = n.lastEffect) ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e), e
                }

                function Pi() {
                    return gi().memoizedState
                }

                function _i(e, n, t, r) {
                    var a = xi();
                    ii.flags |= e, a.memoizedState = zi(1 | n, t, void 0, void 0 === r ? null : r)
                }

                function Oi(e, n, t, r) {
                    var a = gi();
                    r = void 0 === r ? null : r;
                    var l = void 0;
                    if (null !== si) {
                        var i = si.memoizedState;
                        if (l = i.destroy, null !== r && pi(r, i.deps)) return void(a.memoizedState = zi(n, t, l, r))
                    }
                    ii.flags |= e, a.memoizedState = zi(1 | n, t, l, r)
                }

                function Ri(e, n) {
                    return _i(8390656, 8, e, n)
                }

                function Bi(e, n) {
                    return Oi(2048, 8, e, n)
                }

                function Ti(e, n) {
                    return Oi(4, 2, e, n)
                }

                function Wi(e, n) {
                    return Oi(4, 4, e, n)
                }

                function Di(e, n) {
                    return "function" === typeof n ? (e = e(), n(e), function() {
                        n(null)
                    }) : null !== n && void 0 !== n ? (e = e(), n.current = e, function() {
                        n.current = null
                    }) : void 0
                }

                function Hi(e, n, t) {
                    return t = null !== t && void 0 !== t ? t.concat([e]) : null, Oi(4, 4, Di.bind(null, n, e), t)
                }

                function Fi() {}

                function Ii(e, n) {
                    var t = gi();
                    n = void 0 === n ? null : n;
                    var r = t.memoizedState;
                    return null !== r && null !== n && pi(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e)
                }

                function Ai(e, n) {
                    var t = gi();
                    n = void 0 === n ? null : n;
                    var r = t.memoizedState;
                    return null !== r && null !== n && pi(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e)
                }

                function Vi(e, n, t) {
                    return 0 === (21 & li) ? (e.baseState && (e.baseState = !1, gs = !0), e.memoizedState = t) : (sr(t, n) || (t = vn(), ii.lanes |= t, To |= t, e.baseState = !0), n)
                }

                function Ui(e, n) {
                    var t = yn;
                    yn = 0 !== t && 4 > t ? t : 4, e(!0);
                    var r = ai.transition;
                    ai.transition = {};
                    try {
                        e(!1), n()
                    } finally {
                        yn = t, ai.transition = r
                    }
                }

                function $i() {
                    return gi().memoizedState
                }

                function Qi(e, n, t) {
                    var r = nc(e);
                    if (t = {
                            lane: r,
                            action: t,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, Ki(e)) Yi(n, t);
                    else if (null !== (t = Ol(e, n, t, r))) {
                        tc(t, e, r, ec()), Xi(t, n, r)
                    }
                }

                function qi(e, n, t) {
                    var r = nc(e),
                        a = {
                            lane: r,
                            action: t,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (Ki(e)) Yi(n, a);
                    else {
                        var l = e.alternate;
                        if (0 === e.lanes && (null === l || 0 === l.lanes) && null !== (l = n.lastRenderedReducer)) try {
                            var i = n.lastRenderedState,
                                s = l(i, t);
                            if (a.hasEagerState = !0, a.eagerState = s, sr(s, i)) {
                                var o = n.interleaved;
                                return null === o ? (a.next = a, _l(n)) : (a.next = o.next, o.next = a), void(n.interleaved = a)
                            }
                        } catch (c) {}
                        null !== (t = Ol(e, n, a, r)) && (tc(t, e, r, a = ec()), Xi(t, n, r))
                    }
                }

                function Ki(e) {
                    var n = e.alternate;
                    return e === ii || null !== n && n === ii
                }

                function Yi(e, n) {
                    ui = ci = !0;
                    var t = e.pending;
                    null === t ? n.next = n : (n.next = t.next, t.next = n), e.pending = n
                }

                function Xi(e, n, t) {
                    if (0 !== (4194240 & t)) {
                        var r = n.lanes;
                        t |= r &= e.pendingLanes, n.lanes = t, jn(e, t)
                    }
                }
                var Gi = {
                        readContext: zl,
                        useCallback: fi,
                        useContext: fi,
                        useEffect: fi,
                        useImperativeHandle: fi,
                        useInsertionEffect: fi,
                        useLayoutEffect: fi,
                        useMemo: fi,
                        useReducer: fi,
                        useRef: fi,
                        useState: fi,
                        useDebugValue: fi,
                        useDeferredValue: fi,
                        useTransition: fi,
                        useMutableSource: fi,
                        useSyncExternalStore: fi,
                        useId: fi,
                        unstable_isNewReconciler: !1
                    },
                    Zi = {
                        readContext: zl,
                        useCallback: function(e, n) {
                            return xi().memoizedState = [e, void 0 === n ? null : n], e
                        },
                        useContext: zl,
                        useEffect: Ri,
                        useImperativeHandle: function(e, n, t) {
                            return t = null !== t && void 0 !== t ? t.concat([e]) : null, _i(4194308, 4, Di.bind(null, n, e), t)
                        },
                        useLayoutEffect: function(e, n) {
                            return _i(4194308, 4, e, n)
                        },
                        useInsertionEffect: function(e, n) {
                            return _i(4, 2, e, n)
                        },
                        useMemo: function(e, n) {
                            var t = xi();
                            return n = void 0 === n ? null : n, e = e(), t.memoizedState = [e, n], e
                        },
                        useReducer: function(e, n, t) {
                            var r = xi();
                            return n = void 0 !== t ? t(n) : n, r.memoizedState = r.baseState = n, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: n
                            }, r.queue = e, e = e.dispatch = Qi.bind(null, ii, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, xi().memoizedState = e
                        },
                        useState: Li,
                        useDebugValue: Fi,
                        useDeferredValue: function(e) {
                            return xi().memoizedState = e
                        },
                        useTransition: function() {
                            var e = Li(!1),
                                n = e[0];
                            return e = Ui.bind(null, e[1]), xi().memoizedState = e, [n, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, n, t) {
                            var r = ii,
                                a = xi();
                            if (al) {
                                if (void 0 === t) throw Error(l(407));
                                t = t()
                            } else {
                                if (t = n(), null === Lo) throw Error(l(349));
                                0 !== (30 & li) || Ni(r, n, t)
                            }
                            a.memoizedState = t;
                            var i = {
                                value: t,
                                getSnapshot: n
                            };
                            return a.queue = i, Ri(Ci.bind(null, r, i, e), [e]), r.flags |= 2048, zi(9, Si.bind(null, r, i, t, n), void 0, null), t
                        },
                        useId: function() {
                            var e = xi(),
                                n = Lo.identifierPrefix;
                            if (al) {
                                var t = Ga;
                                n = ":" + n + "R" + (t = (Xa & ~(1 << 32 - sn(Xa) - 1)).toString(32) + t), 0 < (t = di++) && (n += "H" + t.toString(32)), n += ":"
                            } else n = ":" + n + "r" + (t = hi++).toString(32) + ":";
                            return e.memoizedState = n
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ji = {
                        readContext: zl,
                        useCallback: Ii,
                        useContext: zl,
                        useEffect: Bi,
                        useImperativeHandle: Hi,
                        useInsertionEffect: Ti,
                        useLayoutEffect: Wi,
                        useMemo: Ai,
                        useReducer: yi,
                        useRef: Pi,
                        useState: function() {
                            return yi(ji)
                        },
                        useDebugValue: Fi,
                        useDeferredValue: function(e) {
                            return Vi(gi(), si.memoizedState, e)
                        },
                        useTransition: function() {
                            return [yi(ji)[0], gi().memoizedState]
                        },
                        useMutableSource: ki,
                        useSyncExternalStore: wi,
                        useId: $i,
                        unstable_isNewReconciler: !1
                    },
                    es = {
                        readContext: zl,
                        useCallback: Ii,
                        useContext: zl,
                        useEffect: Bi,
                        useImperativeHandle: Hi,
                        useInsertionEffect: Ti,
                        useLayoutEffect: Wi,
                        useMemo: Ai,
                        useReducer: bi,
                        useRef: Pi,
                        useState: function() {
                            return bi(ji)
                        },
                        useDebugValue: Fi,
                        useDeferredValue: function(e) {
                            var n = gi();
                            return null === si ? n.memoizedState = e : Vi(n, si.memoizedState, e)
                        },
                        useTransition: function() {
                            return [bi(ji)[0], gi().memoizedState]
                        },
                        useMutableSource: ki,
                        useSyncExternalStore: wi,
                        useId: $i,
                        unstable_isNewReconciler: !1
                    };

                function ns(e, n) {
                    if (e && e.defaultProps) {
                        for (var t in n = W({}, n), e = e.defaultProps) void 0 === n[t] && (n[t] = e[t]);
                        return n
                    }
                    return n
                }

                function ts(e, n, t, r) {
                    t = null === (t = t(r, n = e.memoizedState)) || void 0 === t ? n : W({}, n, t), e.memoizedState = t, 0 === e.lanes && (e.updateQueue.baseState = t)
                }
                var rs = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Ae(e) === e
                    },
                    enqueueSetState: function(e, n, t) {
                        e = e._reactInternals;
                        var r = ec(),
                            a = nc(e),
                            l = Dl(r, a);
                        l.payload = n, void 0 !== t && null !== t && (l.callback = t), null !== (n = Hl(e, l, a)) && (tc(n, e, a, r), Fl(n, e, a))
                    },
                    enqueueReplaceState: function(e, n, t) {
                        e = e._reactInternals;
                        var r = ec(),
                            a = nc(e),
                            l = Dl(r, a);
                        l.tag = 1, l.payload = n, void 0 !== t && null !== t && (l.callback = t), null !== (n = Hl(e, l, a)) && (tc(n, e, a, r), Fl(n, e, a))
                    },
                    enqueueForceUpdate: function(e, n) {
                        e = e._reactInternals;
                        var t = ec(),
                            r = nc(e),
                            a = Dl(t, r);
                        a.tag = 2, void 0 !== n && null !== n && (a.callback = n), null !== (n = Hl(e, a, r)) && (tc(n, e, r, t), Fl(n, e, r))
                    }
                };

                function as(e, n, t, r, a, l, i) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, l, i) : !n.prototype || !n.prototype.isPureReactComponent || (!or(t, r) || !or(a, l))
                }

                function ls(e, n, t) {
                    var r = !1,
                        a = Ma,
                        l = n.contextType;
                    return "object" === typeof l && null !== l ? l = zl(l) : (a = _a(n) ? za : Ea.current, l = (r = null !== (r = n.contextTypes) && void 0 !== r) ? Pa(e, a) : Ma), n = new n(t, l), e.memoizedState = null !== n.state && void 0 !== n.state ? n.state : null, n.updater = rs, e.stateNode = n, n._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = l), n
                }

                function is(e, n, t, r) {
                    e = n.state, "function" === typeof n.componentWillReceiveProps && n.componentWillReceiveProps(t, r), "function" === typeof n.UNSAFE_componentWillReceiveProps && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && rs.enqueueReplaceState(n, n.state, null)
                }

                function ss(e, n, t, r) {
                    var a = e.stateNode;
                    a.props = t, a.state = e.memoizedState, a.refs = {}, Tl(e);
                    var l = n.contextType;
                    "object" === typeof l && null !== l ? a.context = zl(l) : (l = _a(n) ? za : Ea.current, a.context = Pa(e, l)), a.state = e.memoizedState, "function" === typeof(l = n.getDerivedStateFromProps) && (ts(e, n, l, t), a.state = e.memoizedState), "function" === typeof n.getDerivedStateFromProps || "function" === typeof a.getSnapshotBeforeUpdate || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || (n = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), n !== a.state && rs.enqueueReplaceState(a, a.state, null), Al(e, t, a, r), a.state = e.memoizedState), "function" === typeof a.componentDidMount && (e.flags |= 4194308)
                }

                function os(e, n) {
                    try {
                        var t = "",
                            r = n;
                        do {
                            t += I(r), r = r.return
                        } while (r);
                        var a = t
                    } catch (l) {
                        a = "\nError generating stack: " + l.message + "\n" + l.stack
                    }
                    return {
                        value: e,
                        source: n,
                        stack: a,
                        digest: null
                    }
                }

                function cs(e, n, t) {
                    return {
                        value: e,
                        source: null,
                        stack: null != t ? t : null,
                        digest: null != n ? n : null
                    }
                }

                function us(e, n) {
                    try {
                        console.error(n.value)
                    } catch (t) {
                        setTimeout((function() {
                            throw t
                        }))
                    }
                }
                var ds = "function" === typeof WeakMap ? WeakMap : Map;

                function hs(e, n, t) {
                    (t = Dl(-1, t)).tag = 3, t.payload = {
                        element: null
                    };
                    var r = n.value;
                    return t.callback = function() {
                        Uo || (Uo = !0, $o = r), us(0, n)
                    }, t
                }

                function fs(e, n, t) {
                    (t = Dl(-1, t)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var a = n.value;
                        t.payload = function() {
                            return r(a)
                        }, t.callback = function() {
                            us(0, n)
                        }
                    }
                    var l = e.stateNode;
                    return null !== l && "function" === typeof l.componentDidCatch && (t.callback = function() {
                        us(0, n), "function" !== typeof r && (null === Qo ? Qo = new Set([this]) : Qo.add(this));
                        var e = n.stack;
                        this.componentDidCatch(n.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), t
                }

                function ps(e, n, t) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new ds;
                        var a = new Set;
                        r.set(n, a)
                    } else void 0 === (a = r.get(n)) && (a = new Set, r.set(n, a));
                    a.has(t) || (a.add(t), e = Sc.bind(null, e, n, t), n.then(e, e))
                }

                function ms(e) {
                    do {
                        var n;
                        if ((n = 13 === e.tag) && (n = null === (n = e.memoizedState) || null !== n.dehydrated), n) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function vs(e, n, t, r, a) {
                    return 0 === (1 & e.mode) ? (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, 1 === t.tag && (null === t.alternate ? t.tag = 17 : ((n = Dl(-1, 1)).tag = 2, Hl(t, n, 1))), t.lanes |= 1), e) : (e.flags |= 65536, e.lanes = a, e)
                }
                var xs = y.ReactCurrentOwner,
                    gs = !1;

                function js(e, n, t, r) {
                    n.child = null === e ? bl(n, null, t, r) : yl(n, e.child, t, r)
                }

                function ys(e, n, t, r, a) {
                    t = t.render;
                    var l = n.ref;
                    return Ll(n, a), r = mi(e, n, t, r, l, a), t = vi(), null === e || gs ? (al && t && el(n), n.flags |= 1, js(e, n, r, a), n.child) : (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Vs(e, n, a))
                }

                function bs(e, n, t, r, a) {
                    if (null === e) {
                        var l = t.type;
                        return "function" !== typeof l || _c(l) || void 0 !== l.defaultProps || null !== t.compare || void 0 !== t.defaultProps ? ((e = Rc(t.type, null, r, n, n.mode, a)).ref = n.ref, e.return = n, n.child = e) : (n.tag = 15, n.type = l, ks(e, n, l, r, a))
                    }
                    if (l = e.child, 0 === (e.lanes & a)) {
                        var i = l.memoizedProps;
                        if ((t = null !== (t = t.compare) ? t : or)(i, r) && e.ref === n.ref) return Vs(e, n, a)
                    }
                    return n.flags |= 1, (e = Oc(l, r)).ref = n.ref, e.return = n, n.child = e
                }

                function ks(e, n, t, r, a) {
                    if (null !== e) {
                        var l = e.memoizedProps;
                        if (or(l, r) && e.ref === n.ref) {
                            if (gs = !1, n.pendingProps = r = l, 0 === (e.lanes & a)) return n.lanes = e.lanes, Vs(e, n, a);
                            0 !== (131072 & e.flags) && (gs = !0)
                        }
                    }
                    return Ss(e, n, t, r, a)
                }

                function ws(e, n, t) {
                    var r = n.pendingProps,
                        a = r.children,
                        l = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & n.mode)) n.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, Ca(Oo, _o), _o |= t;
                        else {
                            if (0 === (1073741824 & t)) return e = null !== l ? l.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, n.updateQueue = null, Ca(Oo, _o), _o |= e, null;
                            n.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== l ? l.baseLanes : t, Ca(Oo, _o), _o |= r
                        }
                    else null !== l ? (r = l.baseLanes | t, n.memoizedState = null) : r = t, Ca(Oo, _o), _o |= r;
                    return js(e, n, a, t), n.child
                }

                function Ns(e, n) {
                    var t = n.ref;
                    (null === e && null !== t || null !== e && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152)
                }

                function Ss(e, n, t, r, a) {
                    var l = _a(t) ? za : Ea.current;
                    return l = Pa(n, l), Ll(n, a), t = mi(e, n, t, r, l, a), r = vi(), null === e || gs ? (al && r && el(n), n.flags |= 1, js(e, n, t, a), n.child) : (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a, Vs(e, n, a))
                }

                function Cs(e, n, t, r, a) {
                    if (_a(t)) {
                        var l = !0;
                        Ta(n)
                    } else l = !1;
                    if (Ll(n, a), null === n.stateNode) As(e, n), ls(n, t, r), ss(n, t, r, a), r = !0;
                    else if (null === e) {
                        var i = n.stateNode,
                            s = n.memoizedProps;
                        i.props = s;
                        var o = i.context,
                            c = t.contextType;
                        "object" === typeof c && null !== c ? c = zl(c) : c = Pa(n, c = _a(t) ? za : Ea.current);
                        var u = t.getDerivedStateFromProps,
                            d = "function" === typeof u || "function" === typeof i.getSnapshotBeforeUpdate;
                        d || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (s !== r || o !== c) && is(n, i, r, c), Bl = !1;
                        var h = n.memoizedState;
                        i.state = h, Al(n, r, i, a), o = n.memoizedState, s !== r || h !== o || La.current || Bl ? ("function" === typeof u && (ts(n, t, u, r), o = n.memoizedState), (s = Bl || as(n, t, s, r, h, o, c)) ? (d || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (n.flags |= 4194308)) : ("function" === typeof i.componentDidMount && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = o), i.props = r, i.state = o, i.context = c, r = s) : ("function" === typeof i.componentDidMount && (n.flags |= 4194308), r = !1)
                    } else {
                        i = n.stateNode, Wl(e, n), s = n.memoizedProps, c = n.type === n.elementType ? s : ns(n.type, s), i.props = c, d = n.pendingProps, h = i.context, "object" === typeof(o = t.contextType) && null !== o ? o = zl(o) : o = Pa(n, o = _a(t) ? za : Ea.current);
                        var f = t.getDerivedStateFromProps;
                        (u = "function" === typeof f || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (s !== d || h !== o) && is(n, i, r, o), Bl = !1, h = n.memoizedState, i.state = h, Al(n, r, i, a);
                        var p = n.memoizedState;
                        s !== d || h !== p || La.current || Bl ? ("function" === typeof f && (ts(n, t, f, r), p = n.memoizedState), (c = Bl || as(n, t, c, r, h, p, o) || !1) ? (u || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, p, o), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, p, o)), "function" === typeof i.componentDidUpdate && (n.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (n.flags |= 1024)) : ("function" !== typeof i.componentDidUpdate || s === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = p), i.props = r, i.state = p, i.context = o, r = c) : ("function" !== typeof i.componentDidUpdate || s === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || s === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1)
                    }
                    return Ms(e, n, t, r, l, a)
                }

                function Ms(e, n, t, r, a, l) {
                    Ns(e, n);
                    var i = 0 !== (128 & n.flags);
                    if (!r && !i) return a && Wa(n, t, !1), Vs(e, n, l);
                    r = n.stateNode, xs.current = n;
                    var s = i && "function" !== typeof t.getDerivedStateFromError ? null : r.render();
                    return n.flags |= 1, null !== e && i ? (n.child = yl(n, e.child, null, l), n.child = yl(n, null, s, l)) : js(e, n, s, l), n.memoizedState = r.state, a && Wa(n, t, !0), n.child
                }

                function Es(e) {
                    var n = e.stateNode;
                    n.pendingContext ? Ra(0, n.pendingContext, n.pendingContext !== n.context) : n.context && Ra(0, n.context, !1), Yl(e, n.containerInfo)
                }

                function Ls(e, n, t, r, a) {
                    return fl(), pl(a), n.flags |= 256, js(e, n, t, r), n.child
                }
                var zs, Ps, _s, Os, Rs = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function Bs(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function Ts(e, n, t) {
                    var r, a = n.pendingProps,
                        i = Jl.current,
                        s = !1,
                        o = 0 !== (128 & n.flags);
                    if ((r = o) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & i)), r ? (s = !0, n.flags &= -129) : null !== e && null === e.memoizedState || (i |= 1), Ca(Jl, 1 & i), null === e) return cl(n), null !== (e = n.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & n.mode) ? n.lanes = 1 : "$!" === e.data ? n.lanes = 8 : n.lanes = 1073741824, null) : (o = a.children, e = a.fallback, s ? (a = n.mode, s = n.child, o = {
                        mode: "hidden",
                        children: o
                    }, 0 === (1 & a) && null !== s ? (s.childLanes = 0, s.pendingProps = o) : s = Tc(o, a, 0, null), e = Bc(e, a, t, null), s.return = n, e.return = n, s.sibling = e, n.child = s, n.child.memoizedState = Bs(t), n.memoizedState = Rs, e) : Ws(n, o));
                    if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated)) return function(e, n, t, r, a, i, s) {
                        if (t) return 256 & n.flags ? (n.flags &= -257, Ds(e, n, s, r = cs(Error(l(422))))) : null !== n.memoizedState ? (n.child = e.child, n.flags |= 128, null) : (i = r.fallback, a = n.mode, r = Tc({
                            mode: "visible",
                            children: r.children
                        }, a, 0, null), (i = Bc(i, a, s, null)).flags |= 2, r.return = n, i.return = n, r.sibling = i, n.child = r, 0 !== (1 & n.mode) && yl(n, e.child, null, s), n.child.memoizedState = Bs(s), n.memoizedState = Rs, i);
                        if (0 === (1 & n.mode)) return Ds(e, n, s, null);
                        if ("$!" === a.data) {
                            if (r = a.nextSibling && a.nextSibling.dataset) var o = r.dgst;
                            return r = o, Ds(e, n, s, r = cs(i = Error(l(419)), r, void 0))
                        }
                        if (o = 0 !== (s & e.childLanes), gs || o) {
                            if (null !== (r = Lo)) {
                                switch (s & -s) {
                                    case 4:
                                        a = 2;
                                        break;
                                    case 16:
                                        a = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        a = 32;
                                        break;
                                    case 536870912:
                                        a = 268435456;
                                        break;
                                    default:
                                        a = 0
                                }
                                0 !== (a = 0 !== (a & (r.suspendedLanes | s)) ? 0 : a) && a !== i.retryLane && (i.retryLane = a, Rl(e, a), tc(r, e, a, -1))
                            }
                            return mc(), Ds(e, n, s, r = cs(Error(l(421))))
                        }
                        return "$?" === a.data ? (n.flags |= 128, n.child = e.child, n = Mc.bind(null, e), a._reactRetry = n, null) : (e = i.treeContext, rl = ca(a.nextSibling), tl = n, al = !0, ll = null, null !== e && (qa[Ka++] = Xa, qa[Ka++] = Ga, qa[Ka++] = Ya, Xa = e.id, Ga = e.overflow, Ya = n), n = Ws(n, r.children), n.flags |= 4096, n)
                    }(e, n, o, a, r, i, t);
                    if (s) {
                        s = a.fallback, o = n.mode, r = (i = e.child).sibling;
                        var c = {
                            mode: "hidden",
                            children: a.children
                        };
                        return 0 === (1 & o) && n.child !== i ? ((a = n.child).childLanes = 0, a.pendingProps = c, n.deletions = null) : (a = Oc(i, c)).subtreeFlags = 14680064 & i.subtreeFlags, null !== r ? s = Oc(r, s) : (s = Bc(s, o, t, null)).flags |= 2, s.return = n, a.return = n, a.sibling = s, n.child = a, a = s, s = n.child, o = null === (o = e.child.memoizedState) ? Bs(t) : {
                            baseLanes: o.baseLanes | t,
                            cachePool: null,
                            transitions: o.transitions
                        }, s.memoizedState = o, s.childLanes = e.childLanes & ~t, n.memoizedState = Rs, a
                    }
                    return e = (s = e.child).sibling, a = Oc(s, {
                        mode: "visible",
                        children: a.children
                    }), 0 === (1 & n.mode) && (a.lanes = t), a.return = n, a.sibling = null, null !== e && (null === (t = n.deletions) ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = a, n.memoizedState = null, a
                }

                function Ws(e, n) {
                    return (n = Tc({
                        mode: "visible",
                        children: n
                    }, e.mode, 0, null)).return = e, e.child = n
                }

                function Ds(e, n, t, r) {
                    return null !== r && pl(r), yl(n, e.child, null, t), (e = Ws(n, n.pendingProps.children)).flags |= 2, n.memoizedState = null, e
                }

                function Hs(e, n, t) {
                    e.lanes |= n;
                    var r = e.alternate;
                    null !== r && (r.lanes |= n), El(e.return, n, t)
                }

                function Fs(e, n, t, r, a) {
                    var l = e.memoizedState;
                    null === l ? e.memoizedState = {
                        isBackwards: n,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: t,
                        tailMode: a
                    } : (l.isBackwards = n, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = t, l.tailMode = a)
                }

                function Is(e, n, t) {
                    var r = n.pendingProps,
                        a = r.revealOrder,
                        l = r.tail;
                    if (js(e, n, r.children, t), 0 !== (2 & (r = Jl.current))) r = 1 & r | 2, n.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = n.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && Hs(e, t, n);
                            else if (19 === e.tag) Hs(e, t, n);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === n) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === n) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (Ca(Jl, r), 0 === (1 & n.mode)) n.memoizedState = null;
                    else switch (a) {
                        case "forwards":
                            for (t = n.child, a = null; null !== t;) null !== (e = t.alternate) && null === ei(e) && (a = t), t = t.sibling;
                            null === (t = a) ? (a = n.child, n.child = null) : (a = t.sibling, t.sibling = null), Fs(n, !1, a, t, l);
                            break;
                        case "backwards":
                            for (t = null, a = n.child, n.child = null; null !== a;) {
                                if (null !== (e = a.alternate) && null === ei(e)) {
                                    n.child = a;
                                    break
                                }
                                e = a.sibling, a.sibling = t, t = a, a = e
                            }
                            Fs(n, !0, t, null, l);
                            break;
                        case "together":
                            Fs(n, !1, null, null, void 0);
                            break;
                        default:
                            n.memoizedState = null
                    }
                    return n.child
                }

                function As(e, n) {
                    0 === (1 & n.mode) && null !== e && (e.alternate = null, n.alternate = null, n.flags |= 2)
                }

                function Vs(e, n, t) {
                    if (null !== e && (n.dependencies = e.dependencies), To |= n.lanes, 0 === (t & n.childLanes)) return null;
                    if (null !== e && n.child !== e.child) throw Error(l(153));
                    if (null !== n.child) {
                        for (t = Oc(e = n.child, e.pendingProps), n.child = t, t.return = n; null !== e.sibling;) e = e.sibling, (t = t.sibling = Oc(e, e.pendingProps)).return = n;
                        t.sibling = null
                    }
                    return n.child
                }

                function Us(e, n) {
                    if (!al) switch (e.tailMode) {
                        case "hidden":
                            n = e.tail;
                            for (var t = null; null !== n;) null !== n.alternate && (t = n), n = n.sibling;
                            null === t ? e.tail = null : t.sibling = null;
                            break;
                        case "collapsed":
                            t = e.tail;
                            for (var r = null; null !== t;) null !== t.alternate && (r = t), t = t.sibling;
                            null === r ? n || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function $s(e) {
                    var n = null !== e.alternate && e.alternate.child === e.child,
                        t = 0,
                        r = 0;
                    if (n)
                        for (var a = e.child; null !== a;) t |= a.lanes | a.childLanes, r |= 14680064 & a.subtreeFlags, r |= 14680064 & a.flags, a.return = e, a = a.sibling;
                    else
                        for (a = e.child; null !== a;) t |= a.lanes | a.childLanes, r |= a.subtreeFlags, r |= a.flags, a.return = e, a = a.sibling;
                    return e.subtreeFlags |= r, e.childLanes = t, n
                }

                function Qs(e, n, t) {
                    var r = n.pendingProps;
                    switch (nl(n), n.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return $s(n), null;
                        case 1:
                        case 17:
                            return _a(n.type) && Oa(), $s(n), null;
                        case 3:
                            return r = n.stateNode, Xl(), Sa(La), Sa(Ea), ti(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (dl(n) ? n.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & n.flags) || (n.flags |= 1024, null !== ll && (ic(ll), ll = null))), Ps(e, n), $s(n), null;
                        case 5:
                            Zl(n);
                            var a = Kl(ql.current);
                            if (t = n.type, null !== e && null != n.stateNode) _s(e, n, t, r, a), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === n.stateNode) throw Error(l(166));
                                    return $s(n), null
                                }
                                if (e = Kl($l.current), dl(n)) {
                                    r = n.stateNode, t = n.type;
                                    var i = n.memoizedProps;
                                    switch (r[ha] = n, r[fa] = i, e = 0 !== (1 & n.mode), t) {
                                        case "dialog":
                                            Hr("cancel", r), Hr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Hr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Br.length; a++) Hr(Br[a], r);
                                            break;
                                        case "source":
                                            Hr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Hr("error", r), Hr("load", r);
                                            break;
                                        case "details":
                                            Hr("toggle", r);
                                            break;
                                        case "input":
                                            X(r, i), Hr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!i.multiple
                                            }, Hr("invalid", r);
                                            break;
                                        case "textarea":
                                            ae(r, i), Hr("invalid", r)
                                    }
                                    for (var o in ge(t, i), a = null, i)
                                        if (i.hasOwnProperty(o)) {
                                            var c = i[o];
                                            "children" === o ? "string" === typeof c ? r.textContent !== c && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, c, e), a = ["children", c]) : "number" === typeof c && r.textContent !== "" + c && (!0 !== i.suppressHydrationWarning && Zr(r.textContent, c, e), a = ["children", "" + c]) : s.hasOwnProperty(o) && null != c && "onScroll" === o && Hr("scroll", r)
                                        }
                                    switch (t) {
                                        case "input":
                                            Q(r), J(r, i, !0);
                                            break;
                                        case "textarea":
                                            Q(r), ie(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof i.onClick && (r.onclick = Jr)
                                    }
                                    r = a, n.updateQueue = r, null !== r && (n.flags |= 4)
                                } else {
                                    o = 9 === a.nodeType ? a : a.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(t)), "http://www.w3.org/1999/xhtml" === e ? "script" === t ? ((e = o.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = o.createElement(t, {
                                        is: r.is
                                    }) : (e = o.createElement(t), "select" === t && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, t), e[ha] = n, e[fa] = r, zs(e, n, !1, !1), n.stateNode = e;
                                    e: {
                                        switch (o = je(t, r), t) {
                                            case "dialog":
                                                Hr("cancel", e), Hr("close", e), a = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Hr("load", e), a = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (a = 0; a < Br.length; a++) Hr(Br[a], e);
                                                a = r;
                                                break;
                                            case "source":
                                                Hr("error", e), a = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Hr("error", e), Hr("load", e), a = r;
                                                break;
                                            case "details":
                                                Hr("toggle", e), a = r;
                                                break;
                                            case "input":
                                                X(e, r), a = Y(e, r), Hr("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                a = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, a = W({}, r, {
                                                    value: void 0
                                                }), Hr("invalid", e);
                                                break;
                                            case "textarea":
                                                ae(e, r), a = re(e, r), Hr("invalid", e)
                                        }
                                        for (i in ge(t, a), c = a)
                                            if (c.hasOwnProperty(i)) {
                                                var u = c[i];
                                                "style" === i ? ve(e, u) : "dangerouslySetInnerHTML" === i ? null != (u = u ? u.__html : void 0) && de(e, u) : "children" === i ? "string" === typeof u ? ("textarea" !== t || "" !== u) && he(e, u) : "number" === typeof u && he(e, "" + u) : "suppressContentEditableWarning" !== i && "suppressHydrationWarning" !== i && "autoFocus" !== i && (s.hasOwnProperty(i) ? null != u && "onScroll" === i && Hr("scroll", e) : null != u && j(e, i, u, o))
                                            }
                                        switch (t) {
                                            case "input":
                                                Q(e), J(e, r, !1);
                                                break;
                                            case "textarea":
                                                Q(e), ie(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + U(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (i = r.value) ? te(e, !!r.multiple, i, !1) : null != r.defaultValue && te(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof a.onClick && (e.onclick = Jr)
                                        }
                                        switch (t) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (n.flags |= 4)
                                }
                                null !== n.ref && (n.flags |= 512, n.flags |= 2097152)
                            }
                            return $s(n), null;
                        case 6:
                            if (e && null != n.stateNode) Os(e, n, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === n.stateNode) throw Error(l(166));
                                if (t = Kl(ql.current), Kl($l.current), dl(n)) {
                                    if (r = n.stateNode, t = n.memoizedProps, r[ha] = n, (i = r.nodeValue !== t) && null !== (e = tl)) switch (e.tag) {
                                        case 3:
                                            Zr(r.nodeValue, t, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, t, 0 !== (1 & e.mode))
                                    }
                                    i && (n.flags |= 4)
                                } else(r = (9 === t.nodeType ? t : t.ownerDocument).createTextNode(r))[ha] = n, n.stateNode = r
                            }
                            return $s(n), null;
                        case 13:
                            if (Sa(Jl), r = n.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (al && null !== rl && 0 !== (1 & n.mode) && 0 === (128 & n.flags)) hl(), fl(), n.flags |= 98560, i = !1;
                                else if (i = dl(n), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!i) throw Error(l(318));
                                        if (!(i = null !== (i = n.memoizedState) ? i.dehydrated : null)) throw Error(l(317));
                                        i[ha] = n
                                    } else fl(), 0 === (128 & n.flags) && (n.memoizedState = null), n.flags |= 4;
                                    $s(n), i = !1
                                } else null !== ll && (ic(ll), ll = null), i = !0;
                                if (!i) return 65536 & n.flags ? n : null
                            }
                            return 0 !== (128 & n.flags) ? (n.lanes = t, n) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (n.child.flags |= 8192, 0 !== (1 & n.mode) && (null === e || 0 !== (1 & Jl.current) ? 0 === Ro && (Ro = 3) : mc())), null !== n.updateQueue && (n.flags |= 4), $s(n), null);
                        case 4:
                            return Xl(), Ps(e, n), null === e && Ar(n.stateNode.containerInfo), $s(n), null;
                        case 10:
                            return Ml(n.type._context), $s(n), null;
                        case 19:
                            if (Sa(Jl), null === (i = n.memoizedState)) return $s(n), null;
                            if (r = 0 !== (128 & n.flags), null === (o = i.rendering))
                                if (r) Us(i, !1);
                                else {
                                    if (0 !== Ro || null !== e && 0 !== (128 & e.flags))
                                        for (e = n.child; null !== e;) {
                                            if (null !== (o = ei(e))) {
                                                for (n.flags |= 128, Us(i, !1), null !== (r = o.updateQueue) && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; null !== t;) e = r, (i = t).flags &= 14680066, null === (o = i.alternate) ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), t = t.sibling;
                                                return Ca(Jl, 1 & Jl.current | 2), n.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== i.tail && Ge() > Ao && (n.flags |= 128, r = !0, Us(i, !1), n.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = ei(o))) {
                                        if (n.flags |= 128, r = !0, null !== (t = e.updateQueue) && (n.updateQueue = t, n.flags |= 4), Us(i, !0), null === i.tail && "hidden" === i.tailMode && !o.alternate && !al) return $s(n), null
                                    } else 2 * Ge() - i.renderingStartTime > Ao && 1073741824 !== t && (n.flags |= 128, r = !0, Us(i, !1), n.lanes = 4194304);
                                i.isBackwards ? (o.sibling = n.child, n.child = o) : (null !== (t = i.last) ? t.sibling = o : n.child = o, i.last = o)
                            }
                            return null !== i.tail ? (n = i.tail, i.rendering = n, i.tail = n.sibling, i.renderingStartTime = Ge(), n.sibling = null, t = Jl.current, Ca(Jl, r ? 1 & t | 2 : 1 & t), n) : ($s(n), null);
                        case 22:
                        case 23:
                            return dc(), r = null !== n.memoizedState, null !== e && null !== e.memoizedState !== r && (n.flags |= 8192), r && 0 !== (1 & n.mode) ? 0 !== (1073741824 & _o) && ($s(n), 6 & n.subtreeFlags && (n.flags |= 8192)) : $s(n), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(l(156, n.tag))
                }

                function qs(e, n) {
                    switch (nl(n), n.tag) {
                        case 1:
                            return _a(n.type) && Oa(), 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
                        case 3:
                            return Xl(), Sa(La), Sa(Ea), ti(), 0 !== (65536 & (e = n.flags)) && 0 === (128 & e) ? (n.flags = -65537 & e | 128, n) : null;
                        case 5:
                            return Zl(n), null;
                        case 13:
                            if (Sa(Jl), null !== (e = n.memoizedState) && null !== e.dehydrated) {
                                if (null === n.alternate) throw Error(l(340));
                                fl()
                            }
                            return 65536 & (e = n.flags) ? (n.flags = -65537 & e | 128, n) : null;
                        case 19:
                            return Sa(Jl), null;
                        case 4:
                            return Xl(), null;
                        case 10:
                            return Ml(n.type._context), null;
                        case 22:
                        case 23:
                            return dc(), null;
                        default:
                            return null
                    }
                }
                zs = function(e, n) {
                    for (var t = n.child; null !== t;) {
                        if (5 === t.tag || 6 === t.tag) e.appendChild(t.stateNode);
                        else if (4 !== t.tag && null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === n) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === n) return;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }, Ps = function() {}, _s = function(e, n, t, r) {
                    var a = e.memoizedProps;
                    if (a !== r) {
                        e = n.stateNode, Kl($l.current);
                        var l, i = null;
                        switch (t) {
                            case "input":
                                a = Y(e, a), r = Y(e, r), i = [];
                                break;
                            case "select":
                                a = W({}, a, {
                                    value: void 0
                                }), r = W({}, r, {
                                    value: void 0
                                }), i = [];
                                break;
                            case "textarea":
                                a = re(e, a), r = re(e, r), i = [];
                                break;
                            default:
                                "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
                        }
                        for (u in ge(t, r), t = null, a)
                            if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && null != a[u])
                                if ("style" === u) {
                                    var o = a[u];
                                    for (l in o) o.hasOwnProperty(l) && (t || (t = {}), t[l] = "")
                                } else "dangerouslySetInnerHTML" !== u && "children" !== u && "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (s.hasOwnProperty(u) ? i || (i = []) : (i = i || []).push(u, null));
                        for (u in r) {
                            var c = r[u];
                            if (o = null != a ? a[u] : void 0, r.hasOwnProperty(u) && c !== o && (null != c || null != o))
                                if ("style" === u)
                                    if (o) {
                                        for (l in o) !o.hasOwnProperty(l) || c && c.hasOwnProperty(l) || (t || (t = {}), t[l] = "");
                                        for (l in c) c.hasOwnProperty(l) && o[l] !== c[l] && (t || (t = {}), t[l] = c[l])
                                    } else t || (i || (i = []), i.push(u, t)), t = c;
                            else "dangerouslySetInnerHTML" === u ? (c = c ? c.__html : void 0, o = o ? o.__html : void 0, null != c && o !== c && (i = i || []).push(u, c)) : "children" === u ? "string" !== typeof c && "number" !== typeof c || (i = i || []).push(u, "" + c) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && (s.hasOwnProperty(u) ? (null != c && "onScroll" === u && Hr("scroll", e), i || o === c || (i = [])) : (i = i || []).push(u, c))
                        }
                        t && (i = i || []).push("style", t);
                        var u = i;
                        (n.updateQueue = u) && (n.flags |= 4)
                    }
                }, Os = function(e, n, t, r) {
                    t !== r && (n.flags |= 4)
                };
                var Ks = !1,
                    Ys = !1,
                    Xs = "function" === typeof WeakSet ? WeakSet : Set,
                    Gs = null;

                function Zs(e, n) {
                    var t = e.ref;
                    if (null !== t)
                        if ("function" === typeof t) try {
                            t(null)
                        } catch (r) {
                            Nc(e, n, r)
                        } else t.current = null
                }

                function Js(e, n, t) {
                    try {
                        t()
                    } catch (r) {
                        Nc(e, n, r)
                    }
                }
                var eo = !1;

                function no(e, n, t) {
                    var r = n.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var a = r = r.next;
                        do {
                            if ((a.tag & e) === e) {
                                var l = a.destroy;
                                a.destroy = void 0, void 0 !== l && Js(n, t, l)
                            }
                            a = a.next
                        } while (a !== r)
                    }
                }

                function to(e, n) {
                    if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
                        var t = n = n.next;
                        do {
                            if ((t.tag & e) === e) {
                                var r = t.create;
                                t.destroy = r()
                            }
                            t = t.next
                        } while (t !== n)
                    }
                }

                function ro(e) {
                    var n = e.ref;
                    if (null !== n) {
                        var t = e.stateNode;
                        e.tag, e = t, "function" === typeof n ? n(e) : n.current = e
                    }
                }

                function ao(e) {
                    var n = e.alternate;
                    null !== n && (e.alternate = null, ao(n)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (n = e.stateNode) && (delete n[ha], delete n[fa], delete n[ma], delete n[va], delete n[xa])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function lo(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function io(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || lo(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function so(e, n, t) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, n ? 8 === t.nodeType ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (8 === t.nodeType ? (n = t.parentNode).insertBefore(e, t) : (n = t).appendChild(e), null !== (t = t._reactRootContainer) && void 0 !== t || null !== n.onclick || (n.onclick = Jr));
                    else if (4 !== r && null !== (e = e.child))
                        for (so(e, n, t), e = e.sibling; null !== e;) so(e, n, t), e = e.sibling
                }

                function oo(e, n, t) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (oo(e, n, t), e = e.sibling; null !== e;) oo(e, n, t), e = e.sibling
                }
                var co = null,
                    uo = !1;

                function ho(e, n, t) {
                    for (t = t.child; null !== t;) fo(e, n, t), t = t.sibling
                }

                function fo(e, n, t) {
                    if (ln && "function" === typeof ln.onCommitFiberUnmount) try {
                        ln.onCommitFiberUnmount(an, t)
                    } catch (s) {}
                    switch (t.tag) {
                        case 5:
                            Ys || Zs(t, n);
                        case 6:
                            var r = co,
                                a = uo;
                            co = null, ho(e, n, t), uo = a, null !== (co = r) && (uo ? (e = co, t = t.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(t) : e.removeChild(t)) : co.removeChild(t.stateNode));
                            break;
                        case 18:
                            null !== co && (uo ? (e = co, t = t.stateNode, 8 === e.nodeType ? oa(e.parentNode, t) : 1 === e.nodeType && oa(e, t), Vn(e)) : oa(co, t.stateNode));
                            break;
                        case 4:
                            r = co, a = uo, co = t.stateNode.containerInfo, uo = !0, ho(e, n, t), co = r, uo = a;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Ys && (null !== (r = t.updateQueue) && null !== (r = r.lastEffect))) {
                                a = r = r.next;
                                do {
                                    var l = a,
                                        i = l.destroy;
                                    l = l.tag, void 0 !== i && (0 !== (2 & l) || 0 !== (4 & l)) && Js(t, n, i), a = a.next
                                } while (a !== r)
                            }
                            ho(e, n, t);
                            break;
                        case 1:
                            if (!Ys && (Zs(t, n), "function" === typeof(r = t.stateNode).componentWillUnmount)) try {
                                r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount()
                            } catch (s) {
                                Nc(t, n, s)
                            }
                            ho(e, n, t);
                            break;
                        case 21:
                            ho(e, n, t);
                            break;
                        case 22:
                            1 & t.mode ? (Ys = (r = Ys) || null !== t.memoizedState, ho(e, n, t), Ys = r) : ho(e, n, t);
                            break;
                        default:
                            ho(e, n, t)
                    }
                }

                function po(e) {
                    var n = e.updateQueue;
                    if (null !== n) {
                        e.updateQueue = null;
                        var t = e.stateNode;
                        null === t && (t = e.stateNode = new Xs), n.forEach((function(n) {
                            var r = Ec.bind(null, e, n);
                            t.has(n) || (t.add(n), n.then(r, r))
                        }))
                    }
                }

                function mo(e, n) {
                    var t = n.deletions;
                    if (null !== t)
                        for (var r = 0; r < t.length; r++) {
                            var a = t[r];
                            try {
                                var i = e,
                                    s = n,
                                    o = s;
                                e: for (; null !== o;) {
                                    switch (o.tag) {
                                        case 5:
                                            co = o.stateNode, uo = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            co = o.stateNode.containerInfo, uo = !0;
                                            break e
                                    }
                                    o = o.return
                                }
                                if (null === co) throw Error(l(160));
                                fo(i, s, a), co = null, uo = !1;
                                var c = a.alternate;
                                null !== c && (c.return = null), a.return = null
                            } catch (u) {
                                Nc(a, n, u)
                            }
                        }
                    if (12854 & n.subtreeFlags)
                        for (n = n.child; null !== n;) vo(n, e), n = n.sibling
                }

                function vo(e, n) {
                    var t = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (mo(n, e), xo(e), 4 & r) {
                                try {
                                    no(3, e, e.return), to(3, e)
                                } catch (v) {
                                    Nc(e, e.return, v)
                                }
                                try {
                                    no(5, e, e.return)
                                } catch (v) {
                                    Nc(e, e.return, v)
                                }
                            }
                            break;
                        case 1:
                            mo(n, e), xo(e), 512 & r && null !== t && Zs(t, t.return);
                            break;
                        case 5:
                            if (mo(n, e), xo(e), 512 & r && null !== t && Zs(t, t.return), 32 & e.flags) {
                                var a = e.stateNode;
                                try {
                                    he(a, "")
                                } catch (v) {
                                    Nc(e, e.return, v)
                                }
                            }
                            if (4 & r && null != (a = e.stateNode)) {
                                var i = e.memoizedProps,
                                    s = null !== t ? t.memoizedProps : i,
                                    o = e.type,
                                    c = e.updateQueue;
                                if (e.updateQueue = null, null !== c) try {
                                    "input" === o && "radio" === i.type && null != i.name && G(a, i), je(o, s);
                                    var u = je(o, i);
                                    for (s = 0; s < c.length; s += 2) {
                                        var d = c[s],
                                            h = c[s + 1];
                                        "style" === d ? ve(a, h) : "dangerouslySetInnerHTML" === d ? de(a, h) : "children" === d ? he(a, h) : j(a, d, h, u)
                                    }
                                    switch (o) {
                                        case "input":
                                            Z(a, i);
                                            break;
                                        case "textarea":
                                            le(a, i);
                                            break;
                                        case "select":
                                            var f = a._wrapperState.wasMultiple;
                                            a._wrapperState.wasMultiple = !!i.multiple;
                                            var p = i.value;
                                            null != p ? te(a, !!i.multiple, p, !1) : f !== !!i.multiple && (null != i.defaultValue ? te(a, !!i.multiple, i.defaultValue, !0) : te(a, !!i.multiple, i.multiple ? [] : "", !1))
                                    }
                                    a[fa] = i
                                } catch (v) {
                                    Nc(e, e.return, v)
                                }
                            }
                            break;
                        case 6:
                            if (mo(n, e), xo(e), 4 & r) {
                                if (null === e.stateNode) throw Error(l(162));
                                a = e.stateNode, i = e.memoizedProps;
                                try {
                                    a.nodeValue = i
                                } catch (v) {
                                    Nc(e, e.return, v)
                                }
                            }
                            break;
                        case 3:
                            if (mo(n, e), xo(e), 4 & r && null !== t && t.memoizedState.isDehydrated) try {
                                Vn(n.containerInfo)
                            } catch (v) {
                                Nc(e, e.return, v)
                            }
                            break;
                        case 4:
                        default:
                            mo(n, e), xo(e);
                            break;
                        case 13:
                            mo(n, e), xo(e), 8192 & (a = e.child).flags && (i = null !== a.memoizedState, a.stateNode.isHidden = i, !i || null !== a.alternate && null !== a.alternate.memoizedState || (Io = Ge())), 4 & r && po(e);
                            break;
                        case 22:
                            if (d = null !== t && null !== t.memoizedState, 1 & e.mode ? (Ys = (u = Ys) || d, mo(n, e), Ys = u) : mo(n, e), xo(e), 8192 & r) {
                                if (u = null !== e.memoizedState, (e.stateNode.isHidden = u) && !d && 0 !== (1 & e.mode))
                                    for (Gs = e, d = e.child; null !== d;) {
                                        for (h = Gs = d; null !== Gs;) {
                                            switch (p = (f = Gs).child, f.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    no(4, f, f.return);
                                                    break;
                                                case 1:
                                                    Zs(f, f.return);
                                                    var m = f.stateNode;
                                                    if ("function" === typeof m.componentWillUnmount) {
                                                        r = f, t = f.return;
                                                        try {
                                                            n = r, m.props = n.memoizedProps, m.state = n.memoizedState, m.componentWillUnmount()
                                                        } catch (v) {
                                                            Nc(r, t, v)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    Zs(f, f.return);
                                                    break;
                                                case 22:
                                                    if (null !== f.memoizedState) {
                                                        bo(h);
                                                        continue
                                                    }
                                            }
                                            null !== p ? (p.return = f, Gs = p) : bo(h)
                                        }
                                        d = d.sibling
                                    }
                                e: for (d = null, h = e;;) {
                                    if (5 === h.tag) {
                                        if (null === d) {
                                            d = h;
                                            try {
                                                a = h.stateNode, u ? "function" === typeof(i = a.style).setProperty ? i.setProperty("display", "none", "important") : i.display = "none" : (o = h.stateNode, s = void 0 !== (c = h.memoizedProps.style) && null !== c && c.hasOwnProperty("display") ? c.display : null, o.style.display = me("display", s))
                                            } catch (v) {
                                                Nc(e, e.return, v)
                                            }
                                        }
                                    } else if (6 === h.tag) {
                                        if (null === d) try {
                                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                                        } catch (v) {
                                            Nc(e, e.return, v)
                                        }
                                    } else if ((22 !== h.tag && 23 !== h.tag || null === h.memoizedState || h === e) && null !== h.child) {
                                        h.child.return = h, h = h.child;
                                        continue
                                    }
                                    if (h === e) break e;
                                    for (; null === h.sibling;) {
                                        if (null === h.return || h.return === e) break e;
                                        d === h && (d = null), h = h.return
                                    }
                                    d === h && (d = null), h.sibling.return = h.return, h = h.sibling
                                }
                            }
                            break;
                        case 19:
                            mo(n, e), xo(e), 4 & r && po(e);
                        case 21:
                    }
                }

                function xo(e) {
                    var n = e.flags;
                    if (2 & n) {
                        try {
                            e: {
                                for (var t = e.return; null !== t;) {
                                    if (lo(t)) {
                                        var r = t;
                                        break e
                                    }
                                    t = t.return
                                }
                                throw Error(l(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var a = r.stateNode;
                                    32 & r.flags && (he(a, ""), r.flags &= -33), oo(e, io(e), a);
                                    break;
                                case 3:
                                case 4:
                                    var i = r.stateNode.containerInfo;
                                    so(e, io(e), i);
                                    break;
                                default:
                                    throw Error(l(161))
                            }
                        }
                        catch (s) {
                            Nc(e, e.return, s)
                        }
                        e.flags &= -3
                    }
                    4096 & n && (e.flags &= -4097)
                }

                function go(e, n, t) {
                    Gs = e, jo(e, n, t)
                }

                function jo(e, n, t) {
                    for (var r = 0 !== (1 & e.mode); null !== Gs;) {
                        var a = Gs,
                            l = a.child;
                        if (22 === a.tag && r) {
                            var i = null !== a.memoizedState || Ks;
                            if (!i) {
                                var s = a.alternate,
                                    o = null !== s && null !== s.memoizedState || Ys;
                                s = Ks;
                                var c = Ys;
                                if (Ks = i, (Ys = o) && !c)
                                    for (Gs = a; null !== Gs;) o = (i = Gs).child, 22 === i.tag && null !== i.memoizedState ? ko(a) : null !== o ? (o.return = i, Gs = o) : ko(a);
                                for (; null !== l;) Gs = l, jo(l, n, t), l = l.sibling;
                                Gs = a, Ks = s, Ys = c
                            }
                            yo(e)
                        } else 0 !== (8772 & a.subtreeFlags) && null !== l ? (l.return = a, Gs = l) : yo(e)
                    }
                }

                function yo(e) {
                    for (; null !== Gs;) {
                        var n = Gs;
                        if (0 !== (8772 & n.flags)) {
                            var t = n.alternate;
                            try {
                                if (0 !== (8772 & n.flags)) switch (n.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ys || to(5, n);
                                        break;
                                    case 1:
                                        var r = n.stateNode;
                                        if (4 & n.flags && !Ys)
                                            if (null === t) r.componentDidMount();
                                            else {
                                                var a = n.elementType === n.type ? t.memoizedProps : ns(n.type, t.memoizedProps);
                                                r.componentDidUpdate(a, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        var i = n.updateQueue;
                                        null !== i && Vl(n, i, r);
                                        break;
                                    case 3:
                                        var s = n.updateQueue;
                                        if (null !== s) {
                                            if (t = null, null !== n.child) switch (n.child.tag) {
                                                case 5:
                                                case 1:
                                                    t = n.child.stateNode
                                            }
                                            Vl(n, s, t)
                                        }
                                        break;
                                    case 5:
                                        var o = n.stateNode;
                                        if (null === t && 4 & n.flags) {
                                            t = o;
                                            var c = n.memoizedProps;
                                            switch (n.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    c.autoFocus && t.focus();
                                                    break;
                                                case "img":
                                                    c.src && (t.src = c.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === n.memoizedState) {
                                            var u = n.alternate;
                                            if (null !== u) {
                                                var d = u.memoizedState;
                                                if (null !== d) {
                                                    var h = d.dehydrated;
                                                    null !== h && Vn(h)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(l(163))
                                }
                                Ys || 512 & n.flags && ro(n)
                            } catch (f) {
                                Nc(n, n.return, f)
                            }
                        }
                        if (n === e) {
                            Gs = null;
                            break
                        }
                        if (null !== (t = n.sibling)) {
                            t.return = n.return, Gs = t;
                            break
                        }
                        Gs = n.return
                    }
                }

                function bo(e) {
                    for (; null !== Gs;) {
                        var n = Gs;
                        if (n === e) {
                            Gs = null;
                            break
                        }
                        var t = n.sibling;
                        if (null !== t) {
                            t.return = n.return, Gs = t;
                            break
                        }
                        Gs = n.return
                    }
                }

                function ko(e) {
                    for (; null !== Gs;) {
                        var n = Gs;
                        try {
                            switch (n.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var t = n.return;
                                    try {
                                        to(4, n)
                                    } catch (o) {
                                        Nc(n, t, o)
                                    }
                                    break;
                                case 1:
                                    var r = n.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var a = n.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (o) {
                                            Nc(n, a, o)
                                        }
                                    }
                                    var l = n.return;
                                    try {
                                        ro(n)
                                    } catch (o) {
                                        Nc(n, l, o)
                                    }
                                    break;
                                case 5:
                                    var i = n.return;
                                    try {
                                        ro(n)
                                    } catch (o) {
                                        Nc(n, i, o)
                                    }
                            }
                        } catch (o) {
                            Nc(n, n.return, o)
                        }
                        if (n === e) {
                            Gs = null;
                            break
                        }
                        var s = n.sibling;
                        if (null !== s) {
                            s.return = n.return, Gs = s;
                            break
                        }
                        Gs = n.return
                    }
                }
                var wo, No = Math.ceil,
                    So = y.ReactCurrentDispatcher,
                    Co = y.ReactCurrentOwner,
                    Mo = y.ReactCurrentBatchConfig,
                    Eo = 0,
                    Lo = null,
                    zo = null,
                    Po = 0,
                    _o = 0,
                    Oo = Na(0),
                    Ro = 0,
                    Bo = null,
                    To = 0,
                    Wo = 0,
                    Do = 0,
                    Ho = null,
                    Fo = null,
                    Io = 0,
                    Ao = 1 / 0,
                    Vo = null,
                    Uo = !1,
                    $o = null,
                    Qo = null,
                    qo = !1,
                    Ko = null,
                    Yo = 0,
                    Xo = 0,
                    Go = null,
                    Zo = -1,
                    Jo = 0;

                function ec() {
                    return 0 !== (6 & Eo) ? Ge() : -1 !== Zo ? Zo : Zo = Ge()
                }

                function nc(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Eo) && 0 !== Po ? Po & -Po : null !== ml.transition ? (0 === Jo && (Jo = vn()), Jo) : 0 !== (e = yn) ? e : e = void 0 === (e = window.event) ? 16 : Gn(e.type)
                }

                function tc(e, n, t, r) {
                    if (50 < Xo) throw Xo = 0, Go = null, Error(l(185));
                    gn(e, t, r), 0 !== (2 & Eo) && e === Lo || (e === Lo && (0 === (2 & Eo) && (Wo |= t), 4 === Ro && sc(e, Po)), rc(e, r), 1 === t && 0 === Eo && 0 === (1 & n.mode) && (Ao = Ge() + 500, Ha && Aa()))
                }

                function rc(e, n) {
                    var t = e.callbackNode;
                    ! function(e, n) {
                        for (var t = e.suspendedLanes, r = e.pingedLanes, a = e.expirationTimes, l = e.pendingLanes; 0 < l;) {
                            var i = 31 - sn(l),
                                s = 1 << i,
                                o = a[i]; - 1 === o ? 0 !== (s & t) && 0 === (s & r) || (a[i] = pn(s, n)) : o <= n && (e.expiredLanes |= s), l &= ~s
                        }
                    }(e, n);
                    var r = fn(e, e === Lo ? Po : 0);
                    if (0 === r) null !== t && Ke(t), e.callbackNode = null, e.callbackPriority = 0;
                    else if (n = r & -r, e.callbackPriority !== n) {
                        if (null != t && Ke(t), 1 === n) 0 === e.tag ? function(e) {
                            Ha = !0, Ia(e)
                        }(oc.bind(null, e)) : Ia(oc.bind(null, e)), ia((function() {
                            0 === (6 & Eo) && Aa()
                        })), t = null;
                        else {
                            switch (bn(r)) {
                                case 1:
                                    t = Je;
                                    break;
                                case 4:
                                    t = en;
                                    break;
                                case 16:
                                default:
                                    t = nn;
                                    break;
                                case 536870912:
                                    t = rn
                            }
                            t = Lc(t, ac.bind(null, e))
                        }
                        e.callbackPriority = n, e.callbackNode = t
                    }
                }

                function ac(e, n) {
                    if (Zo = -1, Jo = 0, 0 !== (6 & Eo)) throw Error(l(327));
                    var t = e.callbackNode;
                    if (kc() && e.callbackNode !== t) return null;
                    var r = fn(e, e === Lo ? Po : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || n) n = vc(e, r);
                    else {
                        n = r;
                        var a = Eo;
                        Eo |= 2;
                        var i = pc();
                        for (Lo === e && Po === n || (Vo = null, Ao = Ge() + 500, hc(e, n));;) try {
                            gc();
                            break
                        } catch (o) {
                            fc(e, o)
                        }
                        Cl(), So.current = i, Eo = a, null !== zo ? n = 0 : (Lo = null, Po = 0, n = Ro)
                    }
                    if (0 !== n) {
                        if (2 === n && (0 !== (a = mn(e)) && (r = a, n = lc(e, a))), 1 === n) throw t = Bo, hc(e, 0), sc(e, r), rc(e, Ge()), t;
                        if (6 === n) sc(e, r);
                        else {
                            if (a = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                    for (var n = e;;) {
                                        if (16384 & n.flags) {
                                            var t = n.updateQueue;
                                            if (null !== t && null !== (t = t.stores))
                                                for (var r = 0; r < t.length; r++) {
                                                    var a = t[r],
                                                        l = a.getSnapshot;
                                                    a = a.value;
                                                    try {
                                                        if (!sr(l(), a)) return !1
                                                    } catch (s) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (t = n.child, 16384 & n.subtreeFlags && null !== t) t.return = n, n = t;
                                        else {
                                            if (n === e) break;
                                            for (; null === n.sibling;) {
                                                if (null === n.return || n.return === e) return !0;
                                                n = n.return
                                            }
                                            n.sibling.return = n.return, n = n.sibling
                                        }
                                    }
                                    return !0
                                }(a) && (2 === (n = vc(e, r)) && (0 !== (i = mn(e)) && (r = i, n = lc(e, i))), 1 === n)) throw t = Bo, hc(e, 0), sc(e, r), rc(e, Ge()), t;
                            switch (e.finishedWork = a, e.finishedLanes = r, n) {
                                case 0:
                                case 1:
                                    throw Error(l(345));
                                case 2:
                                case 5:
                                    bc(e, Fo, Vo);
                                    break;
                                case 3:
                                    if (sc(e, r), (130023424 & r) === r && 10 < (n = Io + 500 - Ge())) {
                                        if (0 !== fn(e, 0)) break;
                                        if (((a = e.suspendedLanes) & r) !== r) {
                                            ec(), e.pingedLanes |= e.suspendedLanes & a;
                                            break
                                        }
                                        e.timeoutHandle = ra(bc.bind(null, e, Fo, Vo), n);
                                        break
                                    }
                                    bc(e, Fo, Vo);
                                    break;
                                case 4:
                                    if (sc(e, r), (4194240 & r) === r) break;
                                    for (n = e.eventTimes, a = -1; 0 < r;) {
                                        var s = 31 - sn(r);
                                        i = 1 << s, (s = n[s]) > a && (a = s), r &= ~i
                                    }
                                    if (r = a, 10 < (r = (120 > (r = Ge() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * No(r / 1960)) - r)) {
                                        e.timeoutHandle = ra(bc.bind(null, e, Fo, Vo), r);
                                        break
                                    }
                                    bc(e, Fo, Vo);
                                    break;
                                default:
                                    throw Error(l(329))
                            }
                        }
                    }
                    return rc(e, Ge()), e.callbackNode === t ? ac.bind(null, e) : null
                }

                function lc(e, n) {
                    var t = Ho;
                    return e.current.memoizedState.isDehydrated && (hc(e, n).flags |= 256), 2 !== (e = vc(e, n)) && (n = Fo, Fo = t, null !== n && ic(n)), e
                }

                function ic(e) {
                    null === Fo ? Fo = e : Fo.push.apply(Fo, e)
                }

                function sc(e, n) {
                    for (n &= ~Do, n &= ~Wo, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n;) {
                        var t = 31 - sn(n),
                            r = 1 << t;
                        e[t] = -1, n &= ~r
                    }
                }

                function oc(e) {
                    if (0 !== (6 & Eo)) throw Error(l(327));
                    kc();
                    var n = fn(e, 0);
                    if (0 === (1 & n)) return rc(e, Ge()), null;
                    var t = vc(e, n);
                    if (0 !== e.tag && 2 === t) {
                        var r = mn(e);
                        0 !== r && (n = r, t = lc(e, r))
                    }
                    if (1 === t) throw t = Bo, hc(e, 0), sc(e, n), rc(e, Ge()), t;
                    if (6 === t) throw Error(l(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = n, bc(e, Fo, Vo), rc(e, Ge()), null
                }

                function cc(e, n) {
                    var t = Eo;
                    Eo |= 1;
                    try {
                        return e(n)
                    } finally {
                        0 === (Eo = t) && (Ao = Ge() + 500, Ha && Aa())
                    }
                }

                function uc(e) {
                    null !== Ko && 0 === Ko.tag && 0 === (6 & Eo) && kc();
                    var n = Eo;
                    Eo |= 1;
                    var t = Mo.transition,
                        r = yn;
                    try {
                        if (Mo.transition = null, yn = 1, e) return e()
                    } finally {
                        yn = r, Mo.transition = t, 0 === (6 & (Eo = n)) && Aa()
                    }
                }

                function dc() {
                    _o = Oo.current, Sa(Oo)
                }

                function hc(e, n) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var t = e.timeoutHandle;
                    if (-1 !== t && (e.timeoutHandle = -1, aa(t)), null !== zo)
                        for (t = zo.return; null !== t;) {
                            var r = t;
                            switch (nl(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Oa();
                                    break;
                                case 3:
                                    Xl(), Sa(La), Sa(Ea), ti();
                                    break;
                                case 5:
                                    Zl(r);
                                    break;
                                case 4:
                                    Xl();
                                    break;
                                case 13:
                                case 19:
                                    Sa(Jl);
                                    break;
                                case 10:
                                    Ml(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    dc()
                            }
                            t = t.return
                        }
                    if (Lo = e, zo = e = Oc(e.current, null), Po = _o = n, Ro = 0, Bo = null, Do = Wo = To = 0, Fo = Ho = null, null !== Pl) {
                        for (n = 0; n < Pl.length; n++)
                            if (null !== (r = (t = Pl[n]).interleaved)) {
                                t.interleaved = null;
                                var a = r.next,
                                    l = t.pending;
                                if (null !== l) {
                                    var i = l.next;
                                    l.next = a, r.next = i
                                }
                                t.pending = r
                            }
                        Pl = null
                    }
                    return e
                }

                function fc(e, n) {
                    for (;;) {
                        var t = zo;
                        try {
                            if (Cl(), ri.current = Gi, ci) {
                                for (var r = ii.memoizedState; null !== r;) {
                                    var a = r.queue;
                                    null !== a && (a.pending = null), r = r.next
                                }
                                ci = !1
                            }
                            if (li = 0, oi = si = ii = null, ui = !1, di = 0, Co.current = null, null === t || null === t.return) {
                                Ro = 1, Bo = n, zo = null;
                                break
                            }
                            e: {
                                var i = e,
                                    s = t.return,
                                    o = t,
                                    c = n;
                                if (n = Po, o.flags |= 32768, null !== c && "object" === typeof c && "function" === typeof c.then) {
                                    var u = c,
                                        d = o,
                                        h = d.tag;
                                    if (0 === (1 & d.mode) && (0 === h || 11 === h || 15 === h)) {
                                        var f = d.alternate;
                                        f ? (d.updateQueue = f.updateQueue, d.memoizedState = f.memoizedState, d.lanes = f.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                    }
                                    var p = ms(s);
                                    if (null !== p) {
                                        p.flags &= -257, vs(p, s, o, 0, n), 1 & p.mode && ps(i, u, n), c = u;
                                        var m = (n = p).updateQueue;
                                        if (null === m) {
                                            var v = new Set;
                                            v.add(c), n.updateQueue = v
                                        } else m.add(c);
                                        break e
                                    }
                                    if (0 === (1 & n)) {
                                        ps(i, u, n), mc();
                                        break e
                                    }
                                    c = Error(l(426))
                                } else if (al && 1 & o.mode) {
                                    var x = ms(s);
                                    if (null !== x) {
                                        0 === (65536 & x.flags) && (x.flags |= 256), vs(x, s, o, 0, n), pl(os(c, o));
                                        break e
                                    }
                                }
                                i = c = os(c, o),
                                4 !== Ro && (Ro = 2),
                                null === Ho ? Ho = [i] : Ho.push(i),
                                i = s;do {
                                    switch (i.tag) {
                                        case 3:
                                            i.flags |= 65536, n &= -n, i.lanes |= n, Il(i, hs(0, c, n));
                                            break e;
                                        case 1:
                                            o = c;
                                            var g = i.type,
                                                j = i.stateNode;
                                            if (0 === (128 & i.flags) && ("function" === typeof g.getDerivedStateFromError || null !== j && "function" === typeof j.componentDidCatch && (null === Qo || !Qo.has(j)))) {
                                                i.flags |= 65536, n &= -n, i.lanes |= n, Il(i, fs(i, o, n));
                                                break e
                                            }
                                    }
                                    i = i.return
                                } while (null !== i)
                            }
                            yc(t)
                        } catch (y) {
                            n = y, zo === t && null !== t && (zo = t = t.return);
                            continue
                        }
                        break
                    }
                }

                function pc() {
                    var e = So.current;
                    return So.current = Gi, null === e ? Gi : e
                }

                function mc() {
                    0 !== Ro && 3 !== Ro && 2 !== Ro || (Ro = 4), null === Lo || 0 === (268435455 & To) && 0 === (268435455 & Wo) || sc(Lo, Po)
                }

                function vc(e, n) {
                    var t = Eo;
                    Eo |= 2;
                    var r = pc();
                    for (Lo === e && Po === n || (Vo = null, hc(e, n));;) try {
                        xc();
                        break
                    } catch (a) {
                        fc(e, a)
                    }
                    if (Cl(), Eo = t, So.current = r, null !== zo) throw Error(l(261));
                    return Lo = null, Po = 0, Ro
                }

                function xc() {
                    for (; null !== zo;) jc(zo)
                }

                function gc() {
                    for (; null !== zo && !Ye();) jc(zo)
                }

                function jc(e) {
                    var n = wo(e.alternate, e, _o);
                    e.memoizedProps = e.pendingProps, null === n ? yc(e) : zo = n, Co.current = null
                }

                function yc(e) {
                    var n = e;
                    do {
                        var t = n.alternate;
                        if (e = n.return, 0 === (32768 & n.flags)) {
                            if (null !== (t = Qs(t, n, _o))) return void(zo = t)
                        } else {
                            if (null !== (t = qs(t, n))) return t.flags &= 32767, void(zo = t);
                            if (null === e) return Ro = 6, void(zo = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (n = n.sibling)) return void(zo = n);
                        zo = n = e
                    } while (null !== n);
                    0 === Ro && (Ro = 5)
                }

                function bc(e, n, t) {
                    var r = yn,
                        a = Mo.transition;
                    try {
                        Mo.transition = null, yn = 1,
                            function(e, n, t, r) {
                                do {
                                    kc()
                                } while (null !== Ko);
                                if (0 !== (6 & Eo)) throw Error(l(327));
                                t = e.finishedWork;
                                var a = e.finishedLanes;
                                if (null === t) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(l(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var i = t.lanes | t.childLanes;
                                if (function(e, n) {
                                        var t = e.pendingLanes & ~n;
                                        e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < t;) {
                                            var a = 31 - sn(t),
                                                l = 1 << a;
                                            n[a] = 0, r[a] = -1, e[a] = -1, t &= ~l
                                        }
                                    }(e, i), e === Lo && (zo = Lo = null, Po = 0), 0 === (2064 & t.subtreeFlags) && 0 === (2064 & t.flags) || qo || (qo = !0, Lc(nn, (function() {
                                        return kc(), null
                                    }))), i = 0 !== (15990 & t.flags), 0 !== (15990 & t.subtreeFlags) || i) {
                                    i = Mo.transition, Mo.transition = null;
                                    var s = yn;
                                    yn = 1;
                                    var o = Eo;
                                    Eo |= 4, Co.current = null,
                                        function(e, n) {
                                            if (ea = $n, fr(e = hr())) {
                                                if ("selectionStart" in e) var t = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        t = r.anchorNode;
                                                        var a = r.anchorOffset,
                                                            i = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            t.nodeType, i.nodeType
                                                        } catch (b) {
                                                            t = null;
                                                            break e
                                                        }
                                                        var s = 0,
                                                            o = -1,
                                                            c = -1,
                                                            u = 0,
                                                            d = 0,
                                                            h = e,
                                                            f = null;
                                                        n: for (;;) {
                                                            for (var p; h !== t || 0 !== a && 3 !== h.nodeType || (o = s + a), h !== i || 0 !== r && 3 !== h.nodeType || (c = s + r), 3 === h.nodeType && (s += h.nodeValue.length), null !== (p = h.firstChild);) f = h, h = p;
                                                            for (;;) {
                                                                if (h === e) break n;
                                                                if (f === t && ++u === a && (o = s), f === i && ++d === r && (c = s), null !== (p = h.nextSibling)) break;
                                                                f = (h = f).parentNode
                                                            }
                                                            h = p
                                                        }
                                                        t = -1 === o || -1 === c ? null : {
                                                            start: o,
                                                            end: c
                                                        }
                                                    } else t = null
                                                }
                                                t = t || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else t = null;
                                            for (na = {
                                                    focusedElem: e,
                                                    selectionRange: t
                                                }, $n = !1, Gs = n; null !== Gs;)
                                                if (e = (n = Gs).child, 0 !== (1028 & n.subtreeFlags) && null !== e) e.return = n, Gs = e;
                                                else
                                                    for (; null !== Gs;) {
                                                        n = Gs;
                                                        try {
                                                            var m = n.alternate;
                                                            if (0 !== (1024 & n.flags)) switch (n.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== m) {
                                                                        var v = m.memoizedProps,
                                                                            x = m.memoizedState,
                                                                            g = n.stateNode,
                                                                            j = g.getSnapshotBeforeUpdate(n.elementType === n.type ? v : ns(n.type, v), x);
                                                                        g.__reactInternalSnapshotBeforeUpdate = j
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var y = n.stateNode.containerInfo;
                                                                    1 === y.nodeType ? y.textContent = "" : 9 === y.nodeType && y.documentElement && y.removeChild(y.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(l(163))
                                                            }
                                                        } catch (b) {
                                                            Nc(n, n.return, b)
                                                        }
                                                        if (null !== (e = n.sibling)) {
                                                            e.return = n.return, Gs = e;
                                                            break
                                                        }
                                                        Gs = n.return
                                                    }
                                            m = eo, eo = !1
                                        }(e, t), vo(t, e), pr(na), $n = !!ea, na = ea = null, e.current = t, go(t, e, a), Xe(), Eo = o, yn = s, Mo.transition = i
                                } else e.current = t;
                                if (qo && (qo = !1, Ko = e, Yo = a), i = e.pendingLanes, 0 === i && (Qo = null), function(e) {
                                        if (ln && "function" === typeof ln.onCommitFiberRoot) try {
                                            ln.onCommitFiberRoot(an, e, void 0, 128 === (128 & e.current.flags))
                                        } catch (n) {}
                                    }(t.stateNode), rc(e, Ge()), null !== n)
                                    for (r = e.onRecoverableError, t = 0; t < n.length; t++) a = n[t], r(a.value, {
                                        componentStack: a.stack,
                                        digest: a.digest
                                    });
                                if (Uo) throw Uo = !1, e = $o, $o = null, e;
                                0 !== (1 & Yo) && 0 !== e.tag && kc(), i = e.pendingLanes, 0 !== (1 & i) ? e === Go ? Xo++ : (Xo = 0, Go = e) : Xo = 0, Aa()
                            }(e, n, t, r)
                    } finally {
                        Mo.transition = a, yn = r
                    }
                    return null
                }

                function kc() {
                    if (null !== Ko) {
                        var e = bn(Yo),
                            n = Mo.transition,
                            t = yn;
                        try {
                            if (Mo.transition = null, yn = 16 > e ? 16 : e, null === Ko) var r = !1;
                            else {
                                if (e = Ko, Ko = null, Yo = 0, 0 !== (6 & Eo)) throw Error(l(331));
                                var a = Eo;
                                for (Eo |= 4, Gs = e.current; null !== Gs;) {
                                    var i = Gs,
                                        s = i.child;
                                    if (0 !== (16 & Gs.flags)) {
                                        var o = i.deletions;
                                        if (null !== o) {
                                            for (var c = 0; c < o.length; c++) {
                                                var u = o[c];
                                                for (Gs = u; null !== Gs;) {
                                                    var d = Gs;
                                                    switch (d.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            no(8, d, i)
                                                    }
                                                    var h = d.child;
                                                    if (null !== h) h.return = d, Gs = h;
                                                    else
                                                        for (; null !== Gs;) {
                                                            var f = (d = Gs).sibling,
                                                                p = d.return;
                                                            if (ao(d), d === u) {
                                                                Gs = null;
                                                                break
                                                            }
                                                            if (null !== f) {
                                                                f.return = p, Gs = f;
                                                                break
                                                            }
                                                            Gs = p
                                                        }
                                                }
                                            }
                                            var m = i.alternate;
                                            if (null !== m) {
                                                var v = m.child;
                                                if (null !== v) {
                                                    m.child = null;
                                                    do {
                                                        var x = v.sibling;
                                                        v.sibling = null, v = x
                                                    } while (null !== v)
                                                }
                                            }
                                            Gs = i
                                        }
                                    }
                                    if (0 !== (2064 & i.subtreeFlags) && null !== s) s.return = i, Gs = s;
                                    else e: for (; null !== Gs;) {
                                        if (0 !== (2048 & (i = Gs).flags)) switch (i.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                no(9, i, i.return)
                                        }
                                        var g = i.sibling;
                                        if (null !== g) {
                                            g.return = i.return, Gs = g;
                                            break e
                                        }
                                        Gs = i.return
                                    }
                                }
                                var j = e.current;
                                for (Gs = j; null !== Gs;) {
                                    var y = (s = Gs).child;
                                    if (0 !== (2064 & s.subtreeFlags) && null !== y) y.return = s, Gs = y;
                                    else e: for (s = j; null !== Gs;) {
                                        if (0 !== (2048 & (o = Gs).flags)) try {
                                            switch (o.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    to(9, o)
                                            }
                                        } catch (k) {
                                            Nc(o, o.return, k)
                                        }
                                        if (o === s) {
                                            Gs = null;
                                            break e
                                        }
                                        var b = o.sibling;
                                        if (null !== b) {
                                            b.return = o.return, Gs = b;
                                            break e
                                        }
                                        Gs = o.return
                                    }
                                }
                                if (Eo = a, Aa(), ln && "function" === typeof ln.onPostCommitFiberRoot) try {
                                    ln.onPostCommitFiberRoot(an, e)
                                } catch (k) {}
                                r = !0
                            }
                            return r
                        } finally {
                            yn = t, Mo.transition = n
                        }
                    }
                    return !1
                }

                function wc(e, n, t) {
                    e = Hl(e, n = hs(0, n = os(t, n), 1), 1), n = ec(), null !== e && (gn(e, 1, n), rc(e, n))
                }

                function Nc(e, n, t) {
                    if (3 === e.tag) wc(e, e, t);
                    else
                        for (; null !== n;) {
                            if (3 === n.tag) {
                                wc(n, e, t);
                                break
                            }
                            if (1 === n.tag) {
                                var r = n.stateNode;
                                if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Qo || !Qo.has(r))) {
                                    n = Hl(n, e = fs(n, e = os(t, e), 1), 1), e = ec(), null !== n && (gn(n, 1, e), rc(n, e));
                                    break
                                }
                            }
                            n = n.return
                        }
                }

                function Sc(e, n, t) {
                    var r = e.pingCache;
                    null !== r && r.delete(n), n = ec(), e.pingedLanes |= e.suspendedLanes & t, Lo === e && (Po & t) === t && (4 === Ro || 3 === Ro && (130023424 & Po) === Po && 500 > Ge() - Io ? hc(e, 0) : Do |= t), rc(e, n)
                }

                function Cc(e, n) {
                    0 === n && (0 === (1 & e.mode) ? n = 1 : (n = dn, 0 === (130023424 & (dn <<= 1)) && (dn = 4194304)));
                    var t = ec();
                    null !== (e = Rl(e, n)) && (gn(e, n, t), rc(e, t))
                }

                function Mc(e) {
                    var n = e.memoizedState,
                        t = 0;
                    null !== n && (t = n.retryLane), Cc(e, t)
                }

                function Ec(e, n) {
                    var t = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                a = e.memoizedState;
                            null !== a && (t = a.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(l(314))
                    }
                    null !== r && r.delete(n), Cc(e, t)
                }

                function Lc(e, n) {
                    return qe(e, n)
                }

                function zc(e, n, t, r) {
                    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Pc(e, n, t, r) {
                    return new zc(e, n, t, r)
                }

                function _c(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Oc(e, n) {
                    var t = e.alternate;
                    return null === t ? ((t = Pc(e.tag, n, e.key, e.mode)).elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = 14680064 & e.flags, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = null === n ? null : {
                        lanes: n.lanes,
                        firstContext: n.firstContext
                    }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t
                }

                function Rc(e, n, t, r, a, i) {
                    var s = 2;
                    if (r = e, "function" === typeof e) _c(e) && (s = 1);
                    else if ("string" === typeof e) s = 5;
                    else e: switch (e) {
                        case w:
                            return Bc(t.children, a, i, n);
                        case N:
                            s = 8, a |= 8;
                            break;
                        case S:
                            return (e = Pc(12, t, n, 2 | a)).elementType = S, e.lanes = i, e;
                        case L:
                            return (e = Pc(13, t, n, a)).elementType = L, e.lanes = i, e;
                        case z:
                            return (e = Pc(19, t, n, a)).elementType = z, e.lanes = i, e;
                        case O:
                            return Tc(t, a, i, n);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case C:
                                    s = 10;
                                    break e;
                                case M:
                                    s = 9;
                                    break e;
                                case E:
                                    s = 11;
                                    break e;
                                case P:
                                    s = 14;
                                    break e;
                                case _:
                                    s = 16, r = null;
                                    break e
                            }
                            throw Error(l(130, null == e ? e : typeof e, ""))
                    }
                    return (n = Pc(s, t, n, a)).elementType = e, n.type = r, n.lanes = i, n
                }

                function Bc(e, n, t, r) {
                    return (e = Pc(7, e, r, n)).lanes = t, e
                }

                function Tc(e, n, t, r) {
                    return (e = Pc(22, e, r, n)).elementType = O, e.lanes = t, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function Wc(e, n, t) {
                    return (e = Pc(6, e, null, n)).lanes = t, e
                }

                function Dc(e, n, t) {
                    return (n = Pc(4, null !== e.children ? e.children : [], e.key, n)).lanes = t, n.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, n
                }

                function Hc(e, n, t, r, a) {
                    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = xn(0), this.expirationTimes = xn(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xn(0), this.identifierPrefix = r, this.onRecoverableError = a, this.mutableSourceEagerHydrationData = null
                }

                function Fc(e, n, t, r, a, l, i, s, o) {
                    return e = new Hc(e, n, t, s, o), 1 === n ? (n = 1, !0 === l && (n |= 8)) : n = 0, l = Pc(3, null, null, n), e.current = l, l.stateNode = e, l.memoizedState = {
                        element: r,
                        isDehydrated: t,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Tl(l), e
                }

                function Ic(e) {
                    if (!e) return Ma;
                    e: {
                        if (Ae(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(l(170));
                        var n = e;do {
                            switch (n.tag) {
                                case 3:
                                    n = n.stateNode.context;
                                    break e;
                                case 1:
                                    if (_a(n.type)) {
                                        n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            n = n.return
                        } while (null !== n);
                        throw Error(l(171))
                    }
                    if (1 === e.tag) {
                        var t = e.type;
                        if (_a(t)) return Ba(e, t, n)
                    }
                    return n
                }

                function Ac(e, n, t, r, a, l, i, s, o) {
                    return (e = Fc(t, r, !0, e, 0, l, 0, s, o)).context = Ic(null), t = e.current, (l = Dl(r = ec(), a = nc(t))).callback = void 0 !== n && null !== n ? n : null, Hl(t, l, a), e.current.lanes = a, gn(e, a, r), rc(e, r), e
                }

                function Vc(e, n, t, r) {
                    var a = n.current,
                        l = ec(),
                        i = nc(a);
                    return t = Ic(t), null === n.context ? n.context = t : n.pendingContext = t, (n = Dl(l, i)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (n.callback = r), null !== (e = Hl(a, n, i)) && (tc(e, a, i, l), Fl(e, a, i)), i
                }

                function Uc(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function $c(e, n) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var t = e.retryLane;
                        e.retryLane = 0 !== t && t < n ? t : n
                    }
                }

                function Qc(e, n) {
                    $c(e, n), (e = e.alternate) && $c(e, n)
                }
                wo = function(e, n, t) {
                    if (null !== e)
                        if (e.memoizedProps !== n.pendingProps || La.current) gs = !0;
                        else {
                            if (0 === (e.lanes & t) && 0 === (128 & n.flags)) return gs = !1,
                                function(e, n, t) {
                                    switch (n.tag) {
                                        case 3:
                                            Es(n), fl();
                                            break;
                                        case 5:
                                            Gl(n);
                                            break;
                                        case 1:
                                            _a(n.type) && Ta(n);
                                            break;
                                        case 4:
                                            Yl(n, n.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = n.type._context,
                                                a = n.memoizedProps.value;
                                            Ca(kl, r._currentValue), r._currentValue = a;
                                            break;
                                        case 13:
                                            if (null !== (r = n.memoizedState)) return null !== r.dehydrated ? (Ca(Jl, 1 & Jl.current), n.flags |= 128, null) : 0 !== (t & n.child.childLanes) ? Ts(e, n, t) : (Ca(Jl, 1 & Jl.current), null !== (e = Vs(e, n, t)) ? e.sibling : null);
                                            Ca(Jl, 1 & Jl.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (t & n.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return Is(e, n, t);
                                                n.flags |= 128
                                            }
                                            if (null !== (a = n.memoizedState) && (a.rendering = null, a.tail = null, a.lastEffect = null), Ca(Jl, Jl.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return n.lanes = 0, ws(e, n, t)
                                    }
                                    return Vs(e, n, t)
                                }(e, n, t);
                            gs = 0 !== (131072 & e.flags)
                        }
                    else gs = !1, al && 0 !== (1048576 & n.flags) && Ja(n, Qa, n.index);
                    switch (n.lanes = 0, n.tag) {
                        case 2:
                            var r = n.type;
                            As(e, n), e = n.pendingProps;
                            var a = Pa(n, Ea.current);
                            Ll(n, t), a = mi(null, n, r, e, a, t);
                            var i = vi();
                            return n.flags |= 1, "object" === typeof a && null !== a && "function" === typeof a.render && void 0 === a.$$typeof ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, _a(r) ? (i = !0, Ta(n)) : i = !1, n.memoizedState = null !== a.state && void 0 !== a.state ? a.state : null, Tl(n), a.updater = rs, n.stateNode = a, a._reactInternals = n, ss(n, r, e, t), n = Ms(null, n, r, !0, i, t)) : (n.tag = 0, al && i && el(n), js(null, n, a, t), n = n.child), n;
                        case 16:
                            r = n.elementType;
                            e: {
                                switch (As(e, n), e = n.pendingProps, r = (a = r._init)(r._payload), n.type = r, a = n.tag = function(e) {
                                    if ("function" === typeof e) return _c(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === E) return 11;
                                        if (e === P) return 14
                                    }
                                    return 2
                                }(r), e = ns(r, e), a) {
                                    case 0:
                                        n = Ss(null, n, r, e, t);
                                        break e;
                                    case 1:
                                        n = Cs(null, n, r, e, t);
                                        break e;
                                    case 11:
                                        n = ys(null, n, r, e, t);
                                        break e;
                                    case 14:
                                        n = bs(null, n, r, ns(r.type, e), t);
                                        break e
                                }
                                throw Error(l(306, r, ""))
                            }
                            return n;
                        case 0:
                            return r = n.type, a = n.pendingProps, Ss(e, n, r, a = n.elementType === r ? a : ns(r, a), t);
                        case 1:
                            return r = n.type, a = n.pendingProps, Cs(e, n, r, a = n.elementType === r ? a : ns(r, a), t);
                        case 3:
                            e: {
                                if (Es(n), null === e) throw Error(l(387));r = n.pendingProps,
                                a = (i = n.memoizedState).element,
                                Wl(e, n),
                                Al(n, r, null, t);
                                var s = n.memoizedState;
                                if (r = s.element, i.isDehydrated) {
                                    if (i = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: s.cache,
                                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                            transitions: s.transitions
                                        }, n.updateQueue.baseState = i, n.memoizedState = i, 256 & n.flags) {
                                        n = Ls(e, n, r, t, a = os(Error(l(423)), n));
                                        break e
                                    }
                                    if (r !== a) {
                                        n = Ls(e, n, r, t, a = os(Error(l(424)), n));
                                        break e
                                    }
                                    for (rl = ca(n.stateNode.containerInfo.firstChild), tl = n, al = !0, ll = null, t = bl(n, null, r, t), n.child = t; t;) t.flags = -3 & t.flags | 4096, t = t.sibling
                                } else {
                                    if (fl(), r === a) {
                                        n = Vs(e, n, t);
                                        break e
                                    }
                                    js(e, n, r, t)
                                }
                                n = n.child
                            }
                            return n;
                        case 5:
                            return Gl(n), null === e && cl(n), r = n.type, a = n.pendingProps, i = null !== e ? e.memoizedProps : null, s = a.children, ta(r, a) ? s = null : null !== i && ta(r, i) && (n.flags |= 32), Ns(e, n), js(e, n, s, t), n.child;
                        case 6:
                            return null === e && cl(n), null;
                        case 13:
                            return Ts(e, n, t);
                        case 4:
                            return Yl(n, n.stateNode.containerInfo), r = n.pendingProps, null === e ? n.child = yl(n, null, r, t) : js(e, n, r, t), n.child;
                        case 11:
                            return r = n.type, a = n.pendingProps, ys(e, n, r, a = n.elementType === r ? a : ns(r, a), t);
                        case 7:
                            return js(e, n, n.pendingProps, t), n.child;
                        case 8:
                        case 12:
                            return js(e, n, n.pendingProps.children, t), n.child;
                        case 10:
                            e: {
                                if (r = n.type._context, a = n.pendingProps, i = n.memoizedProps, s = a.value, Ca(kl, r._currentValue), r._currentValue = s, null !== i)
                                    if (sr(i.value, s)) {
                                        if (i.children === a.children && !La.current) {
                                            n = Vs(e, n, t);
                                            break e
                                        }
                                    } else
                                        for (null !== (i = n.child) && (i.return = n); null !== i;) {
                                            var o = i.dependencies;
                                            if (null !== o) {
                                                s = i.child;
                                                for (var c = o.firstContext; null !== c;) {
                                                    if (c.context === r) {
                                                        if (1 === i.tag) {
                                                            (c = Dl(-1, t & -t)).tag = 2;
                                                            var u = i.updateQueue;
                                                            if (null !== u) {
                                                                var d = (u = u.shared).pending;
                                                                null === d ? c.next = c : (c.next = d.next, d.next = c), u.pending = c
                                                            }
                                                        }
                                                        i.lanes |= t, null !== (c = i.alternate) && (c.lanes |= t), El(i.return, t, n), o.lanes |= t;
                                                        break
                                                    }
                                                    c = c.next
                                                }
                                            } else if (10 === i.tag) s = i.type === n.type ? null : i.child;
                                            else if (18 === i.tag) {
                                                if (null === (s = i.return)) throw Error(l(341));
                                                s.lanes |= t, null !== (o = s.alternate) && (o.lanes |= t), El(s, t, n), s = i.sibling
                                            } else s = i.child;
                                            if (null !== s) s.return = i;
                                            else
                                                for (s = i; null !== s;) {
                                                    if (s === n) {
                                                        s = null;
                                                        break
                                                    }
                                                    if (null !== (i = s.sibling)) {
                                                        i.return = s.return, s = i;
                                                        break
                                                    }
                                                    s = s.return
                                                }
                                            i = s
                                        }
                                js(e, n, a.children, t),
                                n = n.child
                            }
                            return n;
                        case 9:
                            return a = n.type, r = n.pendingProps.children, Ll(n, t), r = r(a = zl(a)), n.flags |= 1, js(e, n, r, t), n.child;
                        case 14:
                            return a = ns(r = n.type, n.pendingProps), bs(e, n, r, a = ns(r.type, a), t);
                        case 15:
                            return ks(e, n, n.type, n.pendingProps, t);
                        case 17:
                            return r = n.type, a = n.pendingProps, a = n.elementType === r ? a : ns(r, a), As(e, n), n.tag = 1, _a(r) ? (e = !0, Ta(n)) : e = !1, Ll(n, t), ls(n, r, a), ss(n, r, a, t), Ms(null, n, r, !0, e, t);
                        case 19:
                            return Is(e, n, t);
                        case 22:
                            return ws(e, n, t)
                    }
                    throw Error(l(156, n.tag))
                };
                var qc = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function Kc(e) {
                    this._internalRoot = e
                }

                function Yc(e) {
                    this._internalRoot = e
                }

                function Xc(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Gc(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Zc() {}

                function Jc(e, n, t, r, a) {
                    var l = t._reactRootContainer;
                    if (l) {
                        var i = l;
                        if ("function" === typeof a) {
                            var s = a;
                            a = function() {
                                var e = Uc(i);
                                s.call(e)
                            }
                        }
                        Vc(n, i, e, a)
                    } else i = function(e, n, t, r, a) {
                        if (a) {
                            if ("function" === typeof r) {
                                var l = r;
                                r = function() {
                                    var e = Uc(i);
                                    l.call(e)
                                }
                            }
                            var i = Ac(n, r, e, 0, null, !1, 0, "", Zc);
                            return e._reactRootContainer = i, e[pa] = i.current, Ar(8 === e.nodeType ? e.parentNode : e), uc(), i
                        }
                        for (; a = e.lastChild;) e.removeChild(a);
                        if ("function" === typeof r) {
                            var s = r;
                            r = function() {
                                var e = Uc(o);
                                s.call(e)
                            }
                        }
                        var o = Fc(e, 0, !1, null, 0, !1, 0, "", Zc);
                        return e._reactRootContainer = o, e[pa] = o.current, Ar(8 === e.nodeType ? e.parentNode : e), uc((function() {
                            Vc(n, o, t, r)
                        })), o
                    }(t, n, e, a, r);
                    return Uc(i)
                }
                Yc.prototype.render = Kc.prototype.render = function(e) {
                    var n = this._internalRoot;
                    if (null === n) throw Error(l(409));
                    Vc(e, n, null, null)
                }, Yc.prototype.unmount = Kc.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var n = e.containerInfo;
                        uc((function() {
                            Vc(null, e, null, null)
                        })), n[pa] = null
                    }
                }, Yc.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var n = Sn();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: n
                        };
                        for (var t = 0; t < Rn.length && 0 !== n && n < Rn[t].priority; t++);
                        Rn.splice(t, 0, e), 0 === t && Dn(e)
                    }
                }, kn = function(e) {
                    switch (e.tag) {
                        case 3:
                            var n = e.stateNode;
                            if (n.current.memoizedState.isDehydrated) {
                                var t = hn(n.pendingLanes);
                                0 !== t && (jn(n, 1 | t), rc(n, Ge()), 0 === (6 & Eo) && (Ao = Ge() + 500, Aa()))
                            }
                            break;
                        case 13:
                            uc((function() {
                                var n = Rl(e, 1);
                                if (null !== n) {
                                    var t = ec();
                                    tc(n, e, 1, t)
                                }
                            })), Qc(e, 1)
                    }
                }, wn = function(e) {
                    if (13 === e.tag) {
                        var n = Rl(e, 134217728);
                        if (null !== n) tc(n, e, 134217728, ec());
                        Qc(e, 134217728)
                    }
                }, Nn = function(e) {
                    if (13 === e.tag) {
                        var n = nc(e),
                            t = Rl(e, n);
                        if (null !== t) tc(t, e, n, ec());
                        Qc(e, n)
                    }
                }, Sn = function() {
                    return yn
                }, Cn = function(e, n) {
                    var t = yn;
                    try {
                        return yn = e, n()
                    } finally {
                        yn = t
                    }
                }, ke = function(e, n, t) {
                    switch (n) {
                        case "input":
                            if (Z(e, t), n = t.name, "radio" === t.type && null != n) {
                                for (t = e; t.parentNode;) t = t.parentNode;
                                for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    if (r !== e && r.form === e.form) {
                                        var a = ba(r);
                                        if (!a) throw Error(l(90));
                                        q(r), Z(r, a)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            le(e, t);
                            break;
                        case "select":
                            null != (n = t.value) && te(e, !!t.multiple, n, !1)
                    }
                }, Ee = cc, Le = uc;
                var eu = {
                        usingClientEntryPoint: !1,
                        Events: [ja, ya, ba, Ce, Me, cc]
                    },
                    nu = {
                        findFiberByHostInstance: ga,
                        bundleType: 0,
                        version: "18.3.1",
                        rendererPackageName: "react-dom"
                    },
                    tu = {
                        bundleType: nu.bundleType,
                        version: nu.version,
                        rendererPackageName: nu.rendererPackageName,
                        rendererConfig: nu.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: y.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = $e(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: nu.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var ru = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!ru.isDisabled && ru.supportsFiber) try {
                        an = ru.inject(tu), ln = ru
                    } catch (ue) {}
                }
                n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = eu, n.createPortal = function(e, n) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Xc(n)) throw Error(l(200));
                    return function(e, n, t) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: k,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: n,
                            implementation: t
                        }
                    }(e, n, null, t)
                }, n.createRoot = function(e, n) {
                    if (!Xc(e)) throw Error(l(299));
                    var t = !1,
                        r = "",
                        a = qc;
                    return null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (t = !0), void 0 !== n.identifierPrefix && (r = n.identifierPrefix), void 0 !== n.onRecoverableError && (a = n.onRecoverableError)), n = Fc(e, 1, !1, null, 0, t, 0, r, a), e[pa] = n.current, Ar(8 === e.nodeType ? e.parentNode : e), new Kc(n)
                }, n.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var n = e._reactInternals;
                    if (void 0 === n) {
                        if ("function" === typeof e.render) throw Error(l(188));
                        throw e = Object.keys(e).join(","), Error(l(268, e))
                    }
                    return e = null === (e = $e(n)) ? null : e.stateNode
                }, n.flushSync = function(e) {
                    return uc(e)
                }, n.hydrate = function(e, n, t) {
                    if (!Gc(n)) throw Error(l(200));
                    return Jc(null, e, n, !0, t)
                }, n.hydrateRoot = function(e, n, t) {
                    if (!Xc(e)) throw Error(l(405));
                    var r = null != t && t.hydratedSources || null,
                        a = !1,
                        i = "",
                        s = qc;
                    if (null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (a = !0), void 0 !== t.identifierPrefix && (i = t.identifierPrefix), void 0 !== t.onRecoverableError && (s = t.onRecoverableError)), n = Ac(n, null, e, 1, null != t ? t : null, a, 0, i, s), e[pa] = n.current, Ar(e), r)
                        for (e = 0; e < r.length; e++) a = (a = (t = r[e])._getVersion)(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, a] : n.mutableSourceEagerHydrationData.push(t, a);
                    return new Yc(n)
                }, n.render = function(e, n, t) {
                    if (!Gc(n)) throw Error(l(200));
                    return Jc(null, e, n, !1, t)
                }, n.unmountComponentAtNode = function(e) {
                    if (!Gc(e)) throw Error(l(40));
                    return !!e._reactRootContainer && (uc((function() {
                        Jc(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[pa] = null
                        }))
                    })), !0)
                }, n.unstable_batchedUpdates = cc, n.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
                    if (!Gc(t)) throw Error(l(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(l(38));
                    return Jc(e, n, t, !1, r)
                }, n.version = "18.3.1-next-f1338f8080-20240426"
            },
            391: (e, n, t) => {
                "use strict";
                var r = t(950);
                n.H = r.createRoot, r.hydrateRoot
            },
            950: (e, n, t) => {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (n) {
                        console.error(n)
                    }
                }(), e.exports = t(730)
            },
            153: (e, n, t) => {
                "use strict";
                var r = t(43),
                    a = Symbol.for("react.element"),
                    l = Symbol.for("react.fragment"),
                    i = Object.prototype.hasOwnProperty,
                    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    o = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function c(e, n, t) {
                    var r, l = {},
                        c = null,
                        u = null;
                    for (r in void 0 !== t && (c = "" + t), void 0 !== n.key && (c = "" + n.key), void 0 !== n.ref && (u = n.ref), n) i.call(n, r) && !o.hasOwnProperty(r) && (l[r] = n[r]);
                    if (e && e.defaultProps)
                        for (r in n = e.defaultProps) void 0 === l[r] && (l[r] = n[r]);
                    return {
                        $$typeof: a,
                        type: e,
                        key: c,
                        ref: u,
                        props: l,
                        _owner: s.current
                    }
                }
                n.Fragment = l, n.jsx = c, n.jsxs = c
            },
            202: (e, n) => {
                "use strict";
                var t = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    l = Symbol.for("react.strict_mode"),
                    i = Symbol.for("react.profiler"),
                    s = Symbol.for("react.provider"),
                    o = Symbol.for("react.context"),
                    c = Symbol.for("react.forward_ref"),
                    u = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    h = Symbol.for("react.lazy"),
                    f = Symbol.iterator;
                var p = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    m = Object.assign,
                    v = {};

                function x(e, n, t) {
                    this.props = e, this.context = n, this.refs = v, this.updater = t || p
                }

                function g() {}

                function j(e, n, t) {
                    this.props = e, this.context = n, this.refs = v, this.updater = t || p
                }
                x.prototype.isReactComponent = {}, x.prototype.setState = function(e, n) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, n, "setState")
                }, x.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, g.prototype = x.prototype;
                var y = j.prototype = new g;
                y.constructor = j, m(y, x.prototype), y.isPureReactComponent = !0;
                var b = Array.isArray,
                    k = Object.prototype.hasOwnProperty,
                    w = {
                        current: null
                    },
                    N = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function S(e, n, r) {
                    var a, l = {},
                        i = null,
                        s = null;
                    if (null != n)
                        for (a in void 0 !== n.ref && (s = n.ref), void 0 !== n.key && (i = "" + n.key), n) k.call(n, a) && !N.hasOwnProperty(a) && (l[a] = n[a]);
                    var o = arguments.length - 2;
                    if (1 === o) l.children = r;
                    else if (1 < o) {
                        for (var c = Array(o), u = 0; u < o; u++) c[u] = arguments[u + 2];
                        l.children = c
                    }
                    if (e && e.defaultProps)
                        for (a in o = e.defaultProps) void 0 === l[a] && (l[a] = o[a]);
                    return {
                        $$typeof: t,
                        type: e,
                        key: i,
                        ref: s,
                        props: l,
                        _owner: w.current
                    }
                }

                function C(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === t
                }
                var M = /\/+/g;

                function E(e, n) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var n = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return n[e]
                        }))
                    }("" + e.key) : n.toString(36)
                }

                function L(e, n, a, l, i) {
                    var s = typeof e;
                    "undefined" !== s && "boolean" !== s || (e = null);
                    var o = !1;
                    if (null === e) o = !0;
                    else switch (s) {
                        case "string":
                        case "number":
                            o = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case t:
                                case r:
                                    o = !0
                            }
                    }
                    if (o) return i = i(o = e), e = "" === l ? "." + E(o, 0) : l, b(i) ? (a = "", null != e && (a = e.replace(M, "$&/") + "/"), L(i, n, a, "", (function(e) {
                        return e
                    }))) : null != i && (C(i) && (i = function(e, n) {
                        return {
                            $$typeof: t,
                            type: e.type,
                            key: n,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, a + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(M, "$&/") + "/") + e)), n.push(i)), 1;
                    if (o = 0, l = "" === l ? "." : l + ":", b(e))
                        for (var c = 0; c < e.length; c++) {
                            var u = l + E(s = e[c], c);
                            o += L(s, n, a, u, i)
                        } else if (u = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = f && e[f] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof u)
                            for (e = u.call(e), c = 0; !(s = e.next()).done;) o += L(s = s.value, n, a, u = l + E(s, c++), i);
                        else if ("object" === s) throw n = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === n ? "object with keys {" + Object.keys(e).join(", ") + "}" : n) + "). If you meant to render a collection of children, use an array instead.");
                    return o
                }

                function z(e, n, t) {
                    if (null == e) return e;
                    var r = [],
                        a = 0;
                    return L(e, r, "", "", (function(e) {
                        return n.call(t, e, a++)
                    })), r
                }

                function P(e) {
                    if (-1 === e._status) {
                        var n = e._result;
                        (n = n()).then((function(n) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = n)
                        }), (function(n) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = n)
                        })), -1 === e._status && (e._status = 0, e._result = n)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var _ = {
                        current: null
                    },
                    O = {
                        transition: null
                    },
                    R = {
                        ReactCurrentDispatcher: _,
                        ReactCurrentBatchConfig: O,
                        ReactCurrentOwner: w
                    };

                function B() {
                    throw Error("act(...) is not supported in production builds of React.")
                }
                n.Children = {
                    map: z,
                    forEach: function(e, n, t) {
                        z(e, (function() {
                            n.apply(this, arguments)
                        }), t)
                    },
                    count: function(e) {
                        var n = 0;
                        return z(e, (function() {
                            n++
                        })), n
                    },
                    toArray: function(e) {
                        return z(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, n.Component = x, n.Fragment = a, n.Profiler = i, n.PureComponent = j, n.StrictMode = l, n.Suspense = u, n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, n.act = B, n.cloneElement = function(e, n, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var a = m({}, e.props),
                        l = e.key,
                        i = e.ref,
                        s = e._owner;
                    if (null != n) {
                        if (void 0 !== n.ref && (i = n.ref, s = w.current), void 0 !== n.key && (l = "" + n.key), e.type && e.type.defaultProps) var o = e.type.defaultProps;
                        for (c in n) k.call(n, c) && !N.hasOwnProperty(c) && (a[c] = void 0 === n[c] && void 0 !== o ? o[c] : n[c])
                    }
                    var c = arguments.length - 2;
                    if (1 === c) a.children = r;
                    else if (1 < c) {
                        o = Array(c);
                        for (var u = 0; u < c; u++) o[u] = arguments[u + 2];
                        a.children = o
                    }
                    return {
                        $$typeof: t,
                        type: e.type,
                        key: l,
                        ref: i,
                        props: a,
                        _owner: s
                    }
                }, n.createContext = function(e) {
                    return (e = {
                        $$typeof: o,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: s,
                        _context: e
                    }, e.Consumer = e
                }, n.createElement = S, n.createFactory = function(e) {
                    var n = S.bind(null, e);
                    return n.type = e, n
                }, n.createRef = function() {
                    return {
                        current: null
                    }
                }, n.forwardRef = function(e) {
                    return {
                        $$typeof: c,
                        render: e
                    }
                }, n.isValidElement = C, n.lazy = function(e) {
                    return {
                        $$typeof: h,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: P
                    }
                }, n.memo = function(e, n) {
                    return {
                        $$typeof: d,
                        type: e,
                        compare: void 0 === n ? null : n
                    }
                }, n.startTransition = function(e) {
                    var n = O.transition;
                    O.transition = {};
                    try {
                        e()
                    } finally {
                        O.transition = n
                    }
                }, n.unstable_act = B, n.useCallback = function(e, n) {
                    return _.current.useCallback(e, n)
                }, n.useContext = function(e) {
                    return _.current.useContext(e)
                }, n.useDebugValue = function() {}, n.useDeferredValue = function(e) {
                    return _.current.useDeferredValue(e)
                }, n.useEffect = function(e, n) {
                    return _.current.useEffect(e, n)
                }, n.useId = function() {
                    return _.current.useId()
                }, n.useImperativeHandle = function(e, n, t) {
                    return _.current.useImperativeHandle(e, n, t)
                }, n.useInsertionEffect = function(e, n) {
                    return _.current.useInsertionEffect(e, n)
                }, n.useLayoutEffect = function(e, n) {
                    return _.current.useLayoutEffect(e, n)
                }, n.useMemo = function(e, n) {
                    return _.current.useMemo(e, n)
                }, n.useReducer = function(e, n, t) {
                    return _.current.useReducer(e, n, t)
                }, n.useRef = function(e) {
                    return _.current.useRef(e)
                }, n.useState = function(e) {
                    return _.current.useState(e)
                }, n.useSyncExternalStore = function(e, n, t) {
                    return _.current.useSyncExternalStore(e, n, t)
                }, n.useTransition = function() {
                    return _.current.useTransition()
                }, n.version = "18.3.1"
            },
            43: (e, n, t) => {
                "use strict";
                e.exports = t(202)
            },
            579: (e, n, t) => {
                "use strict";
                e.exports = t(153)
            },
            234: (e, n) => {
                "use strict";

                function t(e, n) {
                    var t = e.length;
                    e.push(n);
                    e: for (; 0 < t;) {
                        var r = t - 1 >>> 1,
                            a = e[r];
                        if (!(0 < l(a, n))) break e;
                        e[r] = n, e[t] = a, t = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function a(e) {
                    if (0 === e.length) return null;
                    var n = e[0],
                        t = e.pop();
                    if (t !== n) {
                        e[0] = t;
                        e: for (var r = 0, a = e.length, i = a >>> 1; r < i;) {
                            var s = 2 * (r + 1) - 1,
                                o = e[s],
                                c = s + 1,
                                u = e[c];
                            if (0 > l(o, t)) c < a && 0 > l(u, o) ? (e[r] = u, e[c] = t, r = c) : (e[r] = o, e[s] = t, r = s);
                            else {
                                if (!(c < a && 0 > l(u, t))) break e;
                                e[r] = u, e[c] = t, r = c
                            }
                        }
                    }
                    return n
                }

                function l(e, n) {
                    var t = e.sortIndex - n.sortIndex;
                    return 0 !== t ? t : e.id - n.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var i = performance;
                    n.unstable_now = function() {
                        return i.now()
                    }
                } else {
                    var s = Date,
                        o = s.now();
                    n.unstable_now = function() {
                        return s.now() - o
                    }
                }
                var c = [],
                    u = [],
                    d = 1,
                    h = null,
                    f = 3,
                    p = !1,
                    m = !1,
                    v = !1,
                    x = "function" === typeof setTimeout ? setTimeout : null,
                    g = "function" === typeof clearTimeout ? clearTimeout : null,
                    j = "undefined" !== typeof setImmediate ? setImmediate : null;

                function y(e) {
                    for (var n = r(u); null !== n;) {
                        if (null === n.callback) a(u);
                        else {
                            if (!(n.startTime <= e)) break;
                            a(u), n.sortIndex = n.expirationTime, t(c, n)
                        }
                        n = r(u)
                    }
                }

                function b(e) {
                    if (v = !1, y(e), !m)
                        if (null !== r(c)) m = !0, O(k);
                        else {
                            var n = r(u);
                            null !== n && R(b, n.startTime - e)
                        }
                }

                function k(e, t) {
                    m = !1, v && (v = !1, g(C), C = -1), p = !0;
                    var l = f;
                    try {
                        for (y(t), h = r(c); null !== h && (!(h.expirationTime > t) || e && !L());) {
                            var i = h.callback;
                            if ("function" === typeof i) {
                                h.callback = null, f = h.priorityLevel;
                                var s = i(h.expirationTime <= t);
                                t = n.unstable_now(), "function" === typeof s ? h.callback = s : h === r(c) && a(c), y(t)
                            } else a(c);
                            h = r(c)
                        }
                        if (null !== h) var o = !0;
                        else {
                            var d = r(u);
                            null !== d && R(b, d.startTime - t), o = !1
                        }
                        return o
                    } finally {
                        h = null, f = l, p = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var w, N = !1,
                    S = null,
                    C = -1,
                    M = 5,
                    E = -1;

                function L() {
                    return !(n.unstable_now() - E < M)
                }

                function z() {
                    if (null !== S) {
                        var e = n.unstable_now();
                        E = e;
                        var t = !0;
                        try {
                            t = S(!0, e)
                        } finally {
                            t ? w() : (N = !1, S = null)
                        }
                    } else N = !1
                }
                if ("function" === typeof j) w = function() {
                    j(z)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var P = new MessageChannel,
                        _ = P.port2;
                    P.port1.onmessage = z, w = function() {
                        _.postMessage(null)
                    }
                } else w = function() {
                    x(z, 0)
                };

                function O(e) {
                    S = e, N || (N = !0, w())
                }

                function R(e, t) {
                    C = x((function() {
                        e(n.unstable_now())
                    }), t)
                }
                n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, n.unstable_continueExecution = function() {
                    m || p || (m = !0, O(k))
                }, n.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < e ? Math.floor(1e3 / e) : 5
                }, n.unstable_getCurrentPriorityLevel = function() {
                    return f
                }, n.unstable_getFirstCallbackNode = function() {
                    return r(c)
                }, n.unstable_next = function(e) {
                    switch (f) {
                        case 1:
                        case 2:
                        case 3:
                            var n = 3;
                            break;
                        default:
                            n = f
                    }
                    var t = f;
                    f = n;
                    try {
                        return e()
                    } finally {
                        f = t
                    }
                }, n.unstable_pauseExecution = function() {}, n.unstable_requestPaint = function() {}, n.unstable_runWithPriority = function(e, n) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var t = f;
                    f = e;
                    try {
                        return n()
                    } finally {
                        f = t
                    }
                }, n.unstable_scheduleCallback = function(e, a, l) {
                    var i = n.unstable_now();
                    switch ("object" === typeof l && null !== l ? l = "number" === typeof(l = l.delay) && 0 < l ? i + l : i : l = i, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: d++,
                        callback: a,
                        priorityLevel: e,
                        startTime: l,
                        expirationTime: s = l + s,
                        sortIndex: -1
                    }, l > i ? (e.sortIndex = l, t(u, e), null === r(c) && e === r(u) && (v ? (g(C), C = -1) : v = !0, R(b, l - i))) : (e.sortIndex = s, t(c, e), m || p || (m = !0, O(k))), e
                }, n.unstable_shouldYield = L, n.unstable_wrapCallback = function(e) {
                    var n = f;
                    return function() {
                        var t = f;
                        f = n;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            f = t
                        }
                    }
                }
            },
            853: (e, n, t) => {
                "use strict";
                e.exports = t(234)
            }
        },
        n = {};

    function t(r) {
        var a = n[r];
        if (void 0 !== a) return a.exports;
        var l = n[r] = {
            exports: {}
        };
        return e[r](l, l.exports, t), l.exports
    }
    t.n = e => {
        var n = e && e.__esModule ? () => e.default : () => e;
        return t.d(n, {
            a: n
        }), n
    }, (() => {
        var e, n = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        t.t = function(r, a) {
            if (1 & a && (r = this(r)), 8 & a) return r;
            if ("object" === typeof r && r) {
                if (4 & a && r.__esModule) return r;
                if (16 & a && "function" === typeof r.then) return r
            }
            var l = Object.create(null);
            t.r(l);
            var i = {};
            e = e || [null, n({}), n([]), n(n)];
            for (var s = 2 & a && r;
                "object" == typeof s && !~e.indexOf(s); s = n(s)) Object.getOwnPropertyNames(s).forEach((e => i[e] = () => r[e]));
            return i.default = () => r, t.d(l, i), l
        }
    })(), t.d = (e, n) => {
        for (var r in n) t.o(n, r) && !t.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: n[r]
        })
    }, t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n), t.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        "use strict";
        var e, n = t(43),
            r = t.t(n, 2),
            a = t(391),
            l = t(950),
            i = t.t(l, 2);

        function s() {
            return s = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }, s.apply(this, arguments)
        }! function(e) {
            e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
        }(e || (e = {}));
        const o = "popstate";

        function c(e, n) {
            if (!1 === e || null === e || "undefined" === typeof e) throw new Error(n)
        }

        function u(e, n) {
            if (!e) {
                "undefined" !== typeof console && console.warn(n);
                try {
                    throw new Error(n)
                } catch (t) {}
            }
        }

        function d(e, n) {
            return {
                usr: e.state,
                key: e.key,
                idx: n
            }
        }

        function h(e, n, t, r) {
            return void 0 === t && (t = null), s({
                pathname: "string" === typeof e ? e : e.pathname,
                search: "",
                hash: ""
            }, "string" === typeof n ? p(n) : n, {
                state: t,
                key: n && n.key || r || Math.random().toString(36).substr(2, 8)
            })
        }

        function f(e) {
            let {
                pathname: n = "/",
                search: t = "",
                hash: r = ""
            } = e;
            return t && "?" !== t && (n += "?" === t.charAt(0) ? t : "?" + t), r && "#" !== r && (n += "#" === r.charAt(0) ? r : "#" + r), n
        }

        function p(e) {
            let n = {};
            if (e) {
                let t = e.indexOf("#");
                t >= 0 && (n.hash = e.substr(t), e = e.substr(0, t));
                let r = e.indexOf("?");
                r >= 0 && (n.search = e.substr(r), e = e.substr(0, r)), e && (n.pathname = e)
            }
            return n
        }

        function m(n, t, r, a) {
            void 0 === a && (a = {});
            let {
                window: l = document.defaultView,
                v5Compat: i = !1
            } = a, u = l.history, p = e.Pop, m = null, v = x();

            function x() {
                return (u.state || {
                    idx: null
                }).idx
            }

            function g() {
                p = e.Pop;
                let n = x(),
                    t = null == n ? null : n - v;
                v = n, m && m({
                    action: p,
                    location: y.location,
                    delta: t
                })
            }

            function j(e) {
                let n = "null" !== l.location.origin ? l.location.origin : l.location.href,
                    t = "string" === typeof e ? e : f(e);
                return t = t.replace(/ $/, "%20"), c(n, "No window.location.(origin|href) available to create URL for href: " + t), new URL(t, n)
            }
            null == v && (v = 0, u.replaceState(s({}, u.state, {
                idx: v
            }), ""));
            let y = {
                get action() {
                    return p
                },
                get location() {
                    return n(l, u)
                },
                listen(e) {
                    if (m) throw new Error("A history only accepts one active listener");
                    return l.addEventListener(o, g), m = e, () => {
                        l.removeEventListener(o, g), m = null
                    }
                },
                createHref: e => t(l, e),
                createURL: j,
                encodeLocation(e) {
                    let n = j(e);
                    return {
                        pathname: n.pathname,
                        search: n.search,
                        hash: n.hash
                    }
                },
                push: function(n, t) {
                    p = e.Push;
                    let a = h(y.location, n, t);
                    r && r(a, n), v = x() + 1;
                    let s = d(a, v),
                        o = y.createHref(a);
                    try {
                        u.pushState(s, "", o)
                    } catch (c) {
                        if (c instanceof DOMException && "DataCloneError" === c.name) throw c;
                        l.location.assign(o)
                    }
                    i && m && m({
                        action: p,
                        location: y.location,
                        delta: 1
                    })
                },
                replace: function(n, t) {
                    p = e.Replace;
                    let a = h(y.location, n, t);
                    r && r(a, n), v = x();
                    let l = d(a, v),
                        s = y.createHref(a);
                    u.replaceState(l, "", s), i && m && m({
                        action: p,
                        location: y.location,
                        delta: 0
                    })
                },
                go: e => u.go(e)
            };
            return y
        }
        var v;
        ! function(e) {
            e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"
        }(v || (v = {}));
        new Set(["lazy", "caseSensitive", "path", "id", "index", "children"]);

        function x(e, n, t) {
            return void 0 === t && (t = "/"), g(e, n, t, !1)
        }

        function g(e, n, t, r) {
            let a = _(("string" === typeof n ? p(n) : n).pathname || "/", t);
            if (null == a) return null;
            let l = j(e);
            ! function(e) {
                e.sort(((e, n) => e.score !== n.score ? n.score - e.score : function(e, n) {
                    let t = e.length === n.length && e.slice(0, -1).every(((e, t) => e === n[t]));
                    return t ? e[e.length - 1] - n[n.length - 1] : 0
                }(e.routesMeta.map((e => e.childrenIndex)), n.routesMeta.map((e => e.childrenIndex)))))
            }(l);
            let i = null;
            for (let s = 0; null == i && s < l.length; ++s) {
                let e = P(a);
                i = L(l[s], e, r)
            }
            return i
        }

        function j(e, n, t, r) {
            void 0 === n && (n = []), void 0 === t && (t = []), void 0 === r && (r = "");
            let a = (e, a, l) => {
                let i = {
                    relativePath: void 0 === l ? e.path || "" : l,
                    caseSensitive: !0 === e.caseSensitive,
                    childrenIndex: a,
                    route: e
                };
                i.relativePath.startsWith("/") && (c(i.relativePath.startsWith(r), 'Absolute route path "' + i.relativePath + '" nested under path "' + r + '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'), i.relativePath = i.relativePath.slice(r.length));
                let s = W([r, i.relativePath]),
                    o = t.concat(i);
                e.children && e.children.length > 0 && (c(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "' + s + '".'), j(e.children, n, o, s)), (null != e.path || e.index) && n.push({
                    path: s,
                    score: E(s, e.index),
                    routesMeta: o
                })
            };
            return e.forEach(((e, n) => {
                var t;
                if ("" !== e.path && null != (t = e.path) && t.includes("?"))
                    for (let r of y(e.path)) a(e, n, r);
                else a(e, n)
            })), n
        }

        function y(e) {
            let n = e.split("/");
            if (0 === n.length) return [];
            let [t, ...r] = n, a = t.endsWith("?"), l = t.replace(/\?$/, "");
            if (0 === r.length) return a ? [l, ""] : [l];
            let i = y(r.join("/")),
                s = [];
            return s.push(...i.map((e => "" === e ? l : [l, e].join("/")))), a && s.push(...i), s.map((n => e.startsWith("/") && "" === n ? "/" : n))
        }
        const b = /^:[\w-]+$/,
            k = 3,
            w = 2,
            N = 1,
            S = 10,
            C = -2,
            M = e => "*" === e;

        function E(e, n) {
            let t = e.split("/"),
                r = t.length;
            return t.some(M) && (r += C), n && (r += w), t.filter((e => !M(e))).reduce(((e, n) => e + (b.test(n) ? k : "" === n ? N : S)), r)
        }

        function L(e, n, t) {
            void 0 === t && (t = !1);
            let {
                routesMeta: r
            } = e, a = {}, l = "/", i = [];
            for (let s = 0; s < r.length; ++s) {
                let e = r[s],
                    o = s === r.length - 1,
                    c = "/" === l ? n : n.slice(l.length) || "/",
                    u = z({
                        path: e.relativePath,
                        caseSensitive: e.caseSensitive,
                        end: o
                    }, c),
                    d = e.route;
                if (!u && o && t && !r[r.length - 1].route.index && (u = z({
                        path: e.relativePath,
                        caseSensitive: e.caseSensitive,
                        end: !1
                    }, c)), !u) return null;
                Object.assign(a, u.params), i.push({
                    params: a,
                    pathname: W([l, u.pathname]),
                    pathnameBase: D(W([l, u.pathnameBase])),
                    route: d
                }), "/" !== u.pathnameBase && (l = W([l, u.pathnameBase]))
            }
            return i
        }

        function z(e, n) {
            "string" === typeof e && (e = {
                path: e,
                caseSensitive: !1,
                end: !0
            });
            let [t, r] = function(e, n, t) {
                void 0 === n && (n = !1);
                void 0 === t && (t = !0);
                u("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were "' + e.replace(/\*$/, "/*") + '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' + e.replace(/\*$/, "/*") + '".');
                let r = [],
                    a = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((e, n, t) => (r.push({
                        paramName: n,
                        isOptional: null != t
                    }), t ? "/?([^\\/]+)?" : "/([^\\/]+)")));
                e.endsWith("*") ? (r.push({
                    paramName: "*"
                }), a += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : t ? a += "\\/*$" : "" !== e && "/" !== e && (a += "(?:(?=\\/|$))");
                let l = new RegExp(a, n ? void 0 : "i");
                return [l, r]
            }(e.path, e.caseSensitive, e.end), a = n.match(t);
            if (!a) return null;
            let l = a[0],
                i = l.replace(/(.)\/+$/, "$1"),
                s = a.slice(1);
            return {
                params: r.reduce(((e, n, t) => {
                    let {
                        paramName: r,
                        isOptional: a
                    } = n;
                    if ("*" === r) {
                        let e = s[t] || "";
                        i = l.slice(0, l.length - e.length).replace(/(.)\/+$/, "$1")
                    }
                    const o = s[t];
                    return e[r] = a && !o ? void 0 : (o || "").replace(/%2F/g, "/"), e
                }), {}),
                pathname: l,
                pathnameBase: i,
                pattern: e
            }
        }

        function P(e) {
            try {
                return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/")
            } catch (n) {
                return u(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' + n + ")."), e
            }
        }

        function _(e, n) {
            if ("/" === n) return e;
            if (!e.toLowerCase().startsWith(n.toLowerCase())) return null;
            let t = n.endsWith("/") ? n.length - 1 : n.length,
                r = e.charAt(t);
            return r && "/" !== r ? null : e.slice(t) || "/"
        }

        function O(e, n, t, r) {
            return "Cannot include a '" + e + "' character in a manually specified `to." + n + "` field [" + JSON.stringify(r) + "].  Please separate it out to the `to." + t + '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        }

        function R(e) {
            return e.filter(((e, n) => 0 === n || e.route.path && e.route.path.length > 0))
        }

        function B(e, n) {
            let t = R(e);
            return n ? t.map(((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase)) : t.map((e => e.pathnameBase))
        }

        function T(e, n, t, r) {
            let a;
            void 0 === r && (r = !1), "string" === typeof e ? a = p(e) : (a = s({}, e), c(!a.pathname || !a.pathname.includes("?"), O("?", "pathname", "search", a)), c(!a.pathname || !a.pathname.includes("#"), O("#", "pathname", "hash", a)), c(!a.search || !a.search.includes("#"), O("#", "search", "hash", a)));
            let l, i = "" === e || "" === a.pathname,
                o = i ? "/" : a.pathname;
            if (null == o) l = t;
            else {
                let e = n.length - 1;
                if (!r && o.startsWith("..")) {
                    let n = o.split("/");
                    for (;
                        ".." === n[0];) n.shift(), e -= 1;
                    a.pathname = n.join("/")
                }
                l = e >= 0 ? n[e] : "/"
            }
            let u = function(e, n) {
                    void 0 === n && (n = "/");
                    let {
                        pathname: t,
                        search: r = "",
                        hash: a = ""
                    } = "string" === typeof e ? p(e) : e, l = t ? t.startsWith("/") ? t : function(e, n) {
                        let t = n.replace(/\/+$/, "").split("/");
                        return e.split("/").forEach((e => {
                            ".." === e ? t.length > 1 && t.pop() : "." !== e && t.push(e)
                        })), t.length > 1 ? t.join("/") : "/"
                    }(t, n) : n;
                    return {
                        pathname: l,
                        search: H(r),
                        hash: F(a)
                    }
                }(a, l),
                d = o && "/" !== o && o.endsWith("/"),
                h = (i || "." === o) && t.endsWith("/");
            return u.pathname.endsWith("/") || !d && !h || (u.pathname += "/"), u
        }
        const W = e => e.join("/").replace(/\/\/+/g, "/"),
            D = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
            H = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
            F = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";
        Error;

        function I(e) {
            return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
        }
        const A = ["post", "put", "patch", "delete"],
            V = (new Set(A), ["get", ...A]);
        new Set(V), new Set([301, 302, 303, 307, 308]), new Set([307, 308]);
        Symbol("deferred");

        function U() {
            return U = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }, U.apply(this, arguments)
        }
        const $ = n.createContext(null);
        const Q = n.createContext(null);
        const q = n.createContext(null);
        const K = n.createContext(null);
        const Y = n.createContext({
            outlet: null,
            matches: [],
            isDataRoute: !1
        });
        const X = n.createContext(null);

        function G() {
            return null != n.useContext(K)
        }

        function Z() {
            return G() || c(!1), n.useContext(K).location
        }

        function J(e) {
            n.useContext(q).static || n.useLayoutEffect(e)
        }

        function ee() {
            let {
                isDataRoute: e
            } = n.useContext(Y);
            return e ? function() {
                let {
                    router: e
                } = ue(oe.UseNavigateStable), t = he(ce.UseNavigateStable), r = n.useRef(!1);
                return J((() => {
                    r.current = !0
                })), n.useCallback((function(n, a) {
                    void 0 === a && (a = {}), r.current && ("number" === typeof n ? e.navigate(n) : e.navigate(n, U({
                        fromRouteId: t
                    }, a)))
                }), [e, t])
            }() : function() {
                G() || c(!1);
                let e = n.useContext($),
                    {
                        basename: t,
                        future: r,
                        navigator: a
                    } = n.useContext(q),
                    {
                        matches: l
                    } = n.useContext(Y),
                    {
                        pathname: i
                    } = Z(),
                    s = JSON.stringify(B(l, r.v7_relativeSplatPath)),
                    o = n.useRef(!1);
                return J((() => {
                    o.current = !0
                })), n.useCallback((function(n, r) {
                    if (void 0 === r && (r = {}), !o.current) return;
                    if ("number" === typeof n) return void a.go(n);
                    let l = T(n, JSON.parse(s), i, "path" === r.relative);
                    null == e && "/" !== t && (l.pathname = "/" === l.pathname ? t : W([t, l.pathname])), (r.replace ? a.replace : a.push)(l, r.state, r)
                }), [t, a, s, i, e])
            }()
        }

        function ne(e, t) {
            let {
                relative: r
            } = void 0 === t ? {} : t, {
                future: a
            } = n.useContext(q), {
                matches: l
            } = n.useContext(Y), {
                pathname: i
            } = Z(), s = JSON.stringify(B(l, a.v7_relativeSplatPath));
            return n.useMemo((() => T(e, JSON.parse(s), i, "path" === r)), [e, s, i, r])
        }

        function te(t, r, a, l) {
            G() || c(!1);
            let {
                navigator: i,
                static: s
            } = n.useContext(q), {
                matches: o
            } = n.useContext(Y), u = o[o.length - 1], d = u ? u.params : {}, h = (u && u.pathname, u ? u.pathnameBase : "/");
            u && u.route;
            let f, m = Z();
            if (r) {
                var v;
                let e = "string" === typeof r ? p(r) : r;
                "/" === h || (null == (v = e.pathname) ? void 0 : v.startsWith(h)) || c(!1), f = e
            } else f = m;
            let g = f.pathname || "/",
                j = g;
            if ("/" !== h) {
                let e = h.replace(/^\//, "").split("/");
                j = "/" + g.replace(/^\//, "").split("/").slice(e.length).join("/")
            }
            let y = !s && a && a.matches && a.matches.length > 0 ? a.matches : x(t, {
                pathname: j
            });
            let b = se(y && y.map((e => Object.assign({}, e, {
                params: Object.assign({}, d, e.params),
                pathname: W([h, i.encodeLocation ? i.encodeLocation(e.pathname).pathname : e.pathname]),
                pathnameBase: "/" === e.pathnameBase ? h : W([h, i.encodeLocation ? i.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
            }))), o, a, l);
            return r && b ? n.createElement(K.Provider, {
                value: {
                    location: U({
                        pathname: "/",
                        search: "",
                        hash: "",
                        state: null,
                        key: "default"
                    }, f),
                    navigationType: e.Pop
                }
            }, b) : b
        }

        function re() {
            let e = function() {
                    var e;
                    let t = n.useContext(X),
                        r = de(ce.UseRouteError),
                        a = he(ce.UseRouteError);
                    if (void 0 !== t) return t;
                    return null == (e = r.errors) ? void 0 : e[a]
                }(),
                t = I(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
                r = e instanceof Error ? e.stack : null,
                a = "rgba(200,200,200, 0.5)",
                l = {
                    padding: "0.5rem",
                    backgroundColor: a
                };
            return n.createElement(n.Fragment, null, n.createElement("h2", null, "Unexpected Application Error!"), n.createElement("h3", {
                style: {
                    fontStyle: "italic"
                }
            }, t), r ? n.createElement("pre", {
                style: l
            }, r) : null, null)
        }
        const ae = n.createElement(re, null);
        class le extends n.Component {
            constructor(e) {
                super(e), this.state = {
                    location: e.location,
                    revalidation: e.revalidation,
                    error: e.error
                }
            }
            static getDerivedStateFromError(e) {
                return {
                    error: e
                }
            }
            static getDerivedStateFromProps(e, n) {
                return n.location !== e.location || "idle" !== n.revalidation && "idle" === e.revalidation ? {
                    error: e.error,
                    location: e.location,
                    revalidation: e.revalidation
                } : {
                    error: void 0 !== e.error ? e.error : n.error,
                    location: n.location,
                    revalidation: e.revalidation || n.revalidation
                }
            }
            componentDidCatch(e, n) {
                console.error("React Router caught the following error during render", e, n)
            }
            render() {
                return void 0 !== this.state.error ? n.createElement(Y.Provider, {
                    value: this.props.routeContext
                }, n.createElement(X.Provider, {
                    value: this.state.error,
                    children: this.props.component
                })) : this.props.children
            }
        }

        function ie(e) {
            let {
                routeContext: t,
                match: r,
                children: a
            } = e, l = n.useContext($);
            return l && l.static && l.staticContext && (r.route.errorElement || r.route.ErrorBoundary) && (l.staticContext._deepestRenderedBoundaryId = r.route.id), n.createElement(Y.Provider, {
                value: t
            }, a)
        }

        function se(e, t, r, a) {
            var l;
            if (void 0 === t && (t = []), void 0 === r && (r = null), void 0 === a && (a = null), null == e) {
                var i;
                if (!r) return null;
                if (r.errors) e = r.matches;
                else {
                    if (!(null != (i = a) && i.v7_partialHydration && 0 === t.length && !r.initialized && r.matches.length > 0)) return null;
                    e = r.matches
                }
            }
            let s = e,
                o = null == (l = r) ? void 0 : l.errors;
            if (null != o) {
                let e = s.findIndex((e => e.route.id && void 0 !== (null == o ? void 0 : o[e.route.id])));
                e >= 0 || c(!1), s = s.slice(0, Math.min(s.length, e + 1))
            }
            let u = !1,
                d = -1;
            if (r && a && a.v7_partialHydration)
                for (let n = 0; n < s.length; n++) {
                    let e = s[n];
                    if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (d = n), e.route.id) {
                        let {
                            loaderData: n,
                            errors: t
                        } = r, a = e.route.loader && void 0 === n[e.route.id] && (!t || void 0 === t[e.route.id]);
                        if (e.route.lazy || a) {
                            u = !0, s = d >= 0 ? s.slice(0, d + 1) : [s[0]];
                            break
                        }
                    }
                }
            return s.reduceRight(((e, a, l) => {
                let i, c = !1,
                    h = null,
                    f = null;
                var p;
                r && (i = o && a.route.id ? o[a.route.id] : void 0, h = a.route.errorElement || ae, u && (d < 0 && 0 === l ? (p = "route-fallback", !1 || fe[p] || (fe[p] = !0), c = !0, f = null) : d === l && (c = !0, f = a.route.hydrateFallbackElement || null)));
                let m = t.concat(s.slice(0, l + 1)),
                    v = () => {
                        let t;
                        return t = i ? h : c ? f : a.route.Component ? n.createElement(a.route.Component, null) : a.route.element ? a.route.element : e, n.createElement(ie, {
                            match: a,
                            routeContext: {
                                outlet: e,
                                matches: m,
                                isDataRoute: null != r
                            },
                            children: t
                        })
                    };
                return r && (a.route.ErrorBoundary || a.route.errorElement || 0 === l) ? n.createElement(le, {
                    location: r.location,
                    revalidation: r.revalidation,
                    component: h,
                    error: i,
                    children: v(),
                    routeContext: {
                        outlet: null,
                        matches: m,
                        isDataRoute: !0
                    }
                }) : v()
            }), null)
        }
        var oe = function(e) {
                return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e
            }(oe || {}),
            ce = function(e) {
                return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e
            }(ce || {});

        function ue(e) {
            let t = n.useContext($);
            return t || c(!1), t
        }

        function de(e) {
            let t = n.useContext(Q);
            return t || c(!1), t
        }

        function he(e) {
            let t = function() {
                    let e = n.useContext(Y);
                    return e || c(!1), e
                }(),
                r = t.matches[t.matches.length - 1];
            return r.route.id || c(!1), r.route.id
        }
        const fe = {};

        function pe(e, n) {
            null == e || e.v7_startTransition, void 0 === (null == e ? void 0 : e.v7_relativeSplatPath) && (!n || n.v7_relativeSplatPath), n && (n.v7_fetcherPersist, n.v7_normalizeFormMethod, n.v7_partialHydration, n.v7_skipActionErrorRevalidation)
        }
        r.startTransition;

        function me(e) {
            c(!1)
        }

        function ve(t) {
            let {
                basename: r = "/",
                children: a = null,
                location: l,
                navigationType: i = e.Pop,
                navigator: s,
                static: o = !1,
                future: u
            } = t;
            G() && c(!1);
            let d = r.replace(/^\/*/, "/"),
                h = n.useMemo((() => ({
                    basename: d,
                    navigator: s,
                    static: o,
                    future: U({
                        v7_relativeSplatPath: !1
                    }, u)
                })), [d, u, s, o]);
            "string" === typeof l && (l = p(l));
            let {
                pathname: f = "/",
                search: m = "",
                hash: v = "",
                state: x = null,
                key: g = "default"
            } = l, j = n.useMemo((() => {
                let e = _(f, d);
                return null == e ? null : {
                    location: {
                        pathname: e,
                        search: m,
                        hash: v,
                        state: x,
                        key: g
                    },
                    navigationType: i
                }
            }), [d, f, m, v, x, g, i]);
            return null == j ? null : n.createElement(q.Provider, {
                value: h
            }, n.createElement(K.Provider, {
                children: a,
                value: j
            }))
        }

        function xe(e) {
            let {
                children: n,
                location: t
            } = e;
            return te(ge(n), t)
        }
        new Promise((() => {}));
        n.Component;

        function ge(e, t) {
            void 0 === t && (t = []);
            let r = [];
            return n.Children.forEach(e, ((e, a) => {
                if (!n.isValidElement(e)) return;
                let l = [...t, a];
                if (e.type === n.Fragment) return void r.push.apply(r, ge(e.props.children, l));
                e.type !== me && c(!1), e.props.index && e.props.children && c(!1);
                let i = {
                    id: e.props.id || l.join("-"),
                    caseSensitive: e.props.caseSensitive,
                    element: e.props.element,
                    Component: e.props.Component,
                    index: e.props.index,
                    path: e.props.path,
                    loader: e.props.loader,
                    action: e.props.action,
                    errorElement: e.props.errorElement,
                    ErrorBoundary: e.props.ErrorBoundary,
                    hasErrorBoundary: null != e.props.ErrorBoundary || null != e.props.errorElement,
                    shouldRevalidate: e.props.shouldRevalidate,
                    handle: e.props.handle,
                    lazy: e.props.lazy
                };
                e.props.children && (i.children = ge(e.props.children, l)), r.push(i)
            })), r
        }

        function je() {
            return je = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }, je.apply(this, arguments)
        }

        function ye(e, n) {
            if (null == e) return {};
            var t, r, a = {},
                l = Object.keys(e);
            for (r = 0; r < l.length; r++) t = l[r], n.indexOf(t) >= 0 || (a[t] = e[t]);
            return a
        }
        new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);
        const be = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"];
        try {
            window.__reactRouterVersion = "6"
        } catch (Gn) {}
        new Map;
        const ke = r.startTransition;
        i.flushSync, r.useId;

        function we(e) {
            let {
                basename: t,
                children: r,
                future: a,
                window: l
            } = e, i = n.useRef();
            var s;
            null == i.current && (i.current = (void 0 === (s = {
                window: l,
                v5Compat: !0
            }) && (s = {}), m((function(e, n) {
                let {
                    pathname: t,
                    search: r,
                    hash: a
                } = e.location;
                return h("", {
                    pathname: t,
                    search: r,
                    hash: a
                }, n.state && n.state.usr || null, n.state && n.state.key || "default")
            }), (function(e, n) {
                return "string" === typeof n ? n : f(n)
            }), null, s)));
            let o = i.current,
                [c, u] = n.useState({
                    action: o.action,
                    location: o.location
                }),
                {
                    v7_startTransition: d
                } = a || {},
                p = n.useCallback((e => {
                    d && ke ? ke((() => u(e))) : u(e)
                }), [u, d]);
            return n.useLayoutEffect((() => o.listen(p)), [o, p]), n.useEffect((() => pe(a)), [a]), n.createElement(ve, {
                basename: t,
                children: r,
                location: c.location,
                navigationType: c.action,
                navigator: o,
                future: a
            })
        }
        const Ne = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement,
            Se = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
            Ce = n.forwardRef((function(e, t) {
                let r, {
                        onClick: a,
                        relative: l,
                        reloadDocument: i,
                        replace: s,
                        state: o,
                        target: u,
                        to: d,
                        preventScrollReset: h,
                        viewTransition: p
                    } = e,
                    m = ye(e, be),
                    {
                        basename: v
                    } = n.useContext(q),
                    x = !1;
                if ("string" === typeof d && Se.test(d) && (r = d, Ne)) try {
                    let e = new URL(window.location.href),
                        n = d.startsWith("//") ? new URL(e.protocol + d) : new URL(d),
                        t = _(n.pathname, v);
                    n.origin === e.origin && null != t ? d = t + n.search + n.hash : x = !0
                } catch (Gn) {}
                let g = function(e, t) {
                        let {
                            relative: r
                        } = void 0 === t ? {} : t;
                        G() || c(!1);
                        let {
                            basename: a,
                            navigator: l
                        } = n.useContext(q), {
                            hash: i,
                            pathname: s,
                            search: o
                        } = ne(e, {
                            relative: r
                        }), u = s;
                        return "/" !== a && (u = "/" === s ? a : W([a, s])), l.createHref({
                            pathname: u,
                            search: o,
                            hash: i
                        })
                    }(d, {
                        relative: l
                    }),
                    j = function(e, t) {
                        let {
                            target: r,
                            replace: a,
                            state: l,
                            preventScrollReset: i,
                            relative: s,
                            viewTransition: o
                        } = void 0 === t ? {} : t, c = ee(), u = Z(), d = ne(e, {
                            relative: s
                        });
                        return n.useCallback((n => {
                            if (function(e, n) {
                                    return 0 === e.button && (!n || "_self" === n) && ! function(e) {
                                        return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                    }(e)
                                }(n, r)) {
                                n.preventDefault();
                                let t = void 0 !== a ? a : f(u) === f(d);
                                c(e, {
                                    replace: t,
                                    state: l,
                                    preventScrollReset: i,
                                    relative: s,
                                    viewTransition: o
                                })
                            }
                        }), [u, c, d, a, l, r, e, i, s, o])
                    }(d, {
                        replace: s,
                        state: o,
                        target: u,
                        preventScrollReset: h,
                        relative: l,
                        viewTransition: p
                    });
                return n.createElement("a", je({}, m, {
                    href: r || g,
                    onClick: x || i ? a : function(e) {
                        a && a(e), e.defaultPrevented || j(e)
                    },
                    ref: t,
                    target: u
                }))
            }));
        var Me, Ee;
        (function(e) {
            e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher", e.useViewTransitionState = "useViewTransitionState"
        })(Me || (Me = {})),
        function(e) {
            e.UseFetcher = "useFetcher", e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"
        }(Ee || (Ee = {}));
        var Le = t(579);
        const ze = (0, n.createContext)(),
            Pe = {
                title: "\u5148\u751f",
                firstName: "",
                lastName: "",
                email: "",
                phoneCountry: "+852",
                phoneNumber: "",
                company: "",
                services: {
                    webDesign: !1,
                    mobileDevelopment: !1,
                    tvpTechnology: !1,
                    onlineStore: !1,
                    website: !1,
                    enterpriseSystem: !1,
                    customWeb: !1,
                    whatsappApi: !1,
                    chatbot: !1,
                    bookingSystem: !1,
                    memberSystem: !1,
                    storageSystem: !1,
                    hrSystem: !1,
                    other: !1
                },
                budget: "",
                message: ""
            },
            _e = e => {
                let {
                    children: t
                } = e;
                const [r, a] = (0, n.useState)(Pe), l = {
                    formData: r,
                    setFormData: a,
                    resetForm: () => {
                        a(Pe)
                    },
                    updateField: (e, n) => {
                        a((t => ({ ...t,
                            [e]: n
                        })))
                    },
                    toggleService: e => {
                        a((n => ({ ...n,
                            services: { ...n.services,
                                [e]: !n.services[e]
                            }
                        })))
                    }
                };
                return (0, Le.jsx)(ze.Provider, {
                    value: l,
                    children: t
                })
            },
            Oe = () => {
                const {
                    formData: e,
                    setFormData: t
                } = (() => {
                    const e = (0, n.useContext)(ze);
                    if (void 0 === e) throw new Error("useFormContext must be used within a FormProvider");
                    return e
                })(), [r, a] = n.useState({}), [l, i] = n.useState(!1), [s, o] = n.useState(!1), c = e => {
                    t((n => ({ ...n,
                        title: e
                    }))), a((e => ({ ...e,
                        title: ""
                    })))
                }, u = e => {
                    const {
                        name: n,
                        value: r,
                        type: l,
                        checked: i
                    } = e.target;
                    t("checkbox" === l ? e => ({ ...e,
                        services: { ...e.services,
                            [n]: i
                        }
                    }) : e => ({ ...e,
                        [n]: r
                    })), a((e => ({ ...e,
                        [n]: ""
                    })))
                };
                return (0, Le.jsx)("div", {
                    className: "contact-container",
                    children: (0, Le.jsxs)("div", {
                        className: "contact-form-wrapper",
                        children: [(0, Le.jsxs)("div", {
                            className: "form-header",
                            children: [(0, Le.jsx)("h1", {
                                children: "\u806f\u7d61\u6211\u5011"
                            }), (0, Le.jsx)("p", {
                                className: "form-subtitle",
                                children: "\u8b93\u6211\u5011\u4e86\u89e3\u4f60\u7684\u9700\u6c42"
                            })]
                        }), s ? (0, Le.jsxs)("div", {
                            className: "success-message-container",
                            children: [(0, Le.jsx)("h2", {
                                children: "\u8b1d\u8b1d\u60a8\u7684\u67e5\u8a62\uff01"
                            }), (0, Le.jsx)("p", {
                                children: "\u6211\u5011\u5df2\u6536\u5230\u60a8\u7684\u8a0a\u606f\uff0c\u5c07\u6703\u76e1\u5feb\u56de\u8986\u60a8\u3002"
                            }), (0, Le.jsx)("button", {
                                className: "submit-button",
                                onClick: () => {
                                    o(!1)
                                },
                                children: "\u63d0\u4ea4\u53e6\u4e00\u4efd\u8868\u55ae"
                            })]
                        }) : (0, Le.jsxs)("form", {
                            onSubmit: n => {
                                if (n.preventDefault(), (() => {
                                        const n = {};
                                        return e.title || (n.title = "\u8acb\u9078\u64c7\u7a31\u8b02"), e.firstName || (n.firstName = "\u8acb\u8f38\u5165\u540d\u5b57"), e.lastName || (n.lastName = "\u8acb\u8f38\u5165\u59d3\u6c0f"), e.email ? /\S+@\S+\.\S+/.test(e.email) || (n.email = "\u8acb\u8f38\u5165\u6709\u6548\u7684\u96fb\u90f5\u5730\u5740") : n.email = "\u8acb\u8f38\u5165\u96fb\u90f5\u5730\u5740", e.phoneNumber || (n.phoneNumber = "\u8acb\u8f38\u5165\u96fb\u8a71\u865f\u78bc"), Object.values(e.services).every((e => !e)) && (n.services = "\u8acb\u9078\u64c7\u81f3\u5c11\u4e00\u9805\u670d\u52d9"), e.message || (n.message = "\u8acb\u8f38\u5165\u7559\u8a00"), a(n), 0 === Object.keys(n).length
                                    })()) {
                                    i(!0), o(!1);
                                    const n = {
                                        access_key: "470b5f52-f4f3-41c6-8282-9a76fe08a979",
                                        title: e.title,
                                        firstName: e.firstName,
                                        lastName: e.lastName,
                                        email: e.email,
                                        phone: `${e.phoneCountry} ${e.phoneNumber}`,
                                        company: e.company || "\u672a\u63d0\u4f9b",
                                        selectedServices: Object.keys(e.services).filter((n => e.services[n])).join(", "),
                                        budget: e.budget || "\u672a\u63d0\u4f9b",
                                        message: e.message,
                                        subject: "\u7db2\u7ad9\u67e5\u8a62\u8868\u55ae",
                                        from_name: `${e.lastName}${e.firstName}`,
                                        to_name: "ZenithSoft"
                                    };
                                    fetch("https://api.web3forms.com/submit", {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json",
                                            Accept: "application/json"
                                        },
                                        body: JSON.stringify(n)
                                    }).then((e => e.json())).then((n => {
                                        n.success ? (o(!0), t({
                                            title: "\u5148\u751f",
                                            firstName: "",
                                            lastName: "",
                                            email: "",
                                            phoneCountry: "+852",
                                            phoneNumber: "",
                                            company: "",
                                            services: {
                                                webDevelopment: !1,
                                                systemDevelopment: !1,
                                                programDevelopment: !1,
                                                semSeo: !1
                                            },
                                            budget: "",
                                            message: ""
                                        }), a({}), window.dataLayer && window.dataLayer.push({
                                            event: "form_submitted",
                                            form_name: "contact_form",
                                            services_selected: Object.keys(e.services).filter((n => e.services[n])).join(", "),
                                            budget_range: e.budget || "not_specified"
                                        })) : (console.error("\u63d0\u4ea4\u5931\u6557:", n), alert("\u63d0\u4ea4\u8868\u55ae\u6642\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002"))
                                    })).catch((e => {
                                        console.error("\u63d0\u4ea4\u932f\u8aa4:", e), alert("\u63d0\u4ea4\u8868\u55ae\u6642\u767c\u751f\u932f\u8aa4\uff0c\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002")
                                    })).finally((() => {
                                        i(!1)
                                    }))
                                }
                            },
                            children: [(0, Le.jsxs)("div", {
                                className: "form-section",
                                children: [(0, Le.jsxs)("label", {
                                    className: "section-label",
                                    children: ["\u7a31\u8b02 ", (0, Le.jsx)("span", {
                                        className: "required",
                                        children: "*"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "title-options",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "title-option " + ("\u5148\u751f" === e.title ? "selected" : ""),
                                        onClick: () => c("\u5148\u751f"),
                                        children: [(0, Le.jsx)("input", {
                                            type: "radio",
                                            name: "title",
                                            value: "\u5148\u751f",
                                            checked: "\u5148\u751f" === e.title,
                                            onChange: () => c("\u5148\u751f")
                                        }), (0, Le.jsx)("span", {
                                            children: "\u5148\u751f"
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "title-option " + ("\u5973\u58eb" === e.title ? "selected" : ""),
                                        onClick: () => c("\u5973\u58eb"),
                                        children: [(0, Le.jsx)("input", {
                                            type: "radio",
                                            name: "title",
                                            value: "\u5973\u58eb",
                                            checked: "\u5973\u58eb" === e.title,
                                            onChange: () => c("\u5973\u58eb")
                                        }), (0, Le.jsx)("span", {
                                            children: "\u5973\u58eb"
                                        })]
                                    })]
                                }), r.title && (0, Le.jsx)("div", {
                                    className: "error-message",
                                    children: r.title
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "form-row",
                                children: [(0, Le.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, Le.jsxs)("label", {
                                        className: "section-label",
                                        children: ["\u540d\u5b57 ", (0, Le.jsx)("span", {
                                            className: "required",
                                            children: "*"
                                        })]
                                    }), (0, Le.jsx)("input", {
                                        type: "text",
                                        name: "firstName",
                                        className: "form-input " + (r.firstName ? "error" : ""),
                                        value: e.firstName,
                                        onChange: u,
                                        placeholder: "\u8acb\u8f38\u5165\u540d\u5b57",
                                        autoComplete: "off",
                                        autoCorrect: "off"
                                    }), r.firstName && (0, Le.jsx)("div", {
                                        className: "error-message",
                                        children: r.firstName
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, Le.jsxs)("label", {
                                        className: "section-label",
                                        children: ["\u59d3\u6c0f ", (0, Le.jsx)("span", {
                                            className: "required",
                                            children: "*"
                                        })]
                                    }), (0, Le.jsx)("input", {
                                        type: "text",
                                        name: "lastName",
                                        className: "form-input " + (r.lastName ? "error" : ""),
                                        value: e.lastName,
                                        onChange: u,
                                        placeholder: "\u8acb\u8f38\u5165\u59d3\u6c0f",
                                        autoComplete: "off",
                                        autoCorrect: "off"
                                    }), r.lastName && (0, Le.jsx)("div", {
                                        className: "error-message",
                                        children: r.lastName
                                    })]
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "form-row",
                                children: [(0, Le.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, Le.jsxs)("label", {
                                        className: "section-label",
                                        children: ["\u96fb\u90f5\u5730\u5740 ", (0, Le.jsx)("span", {
                                            className: "required",
                                            children: "*"
                                        })]
                                    }), (0, Le.jsx)("input", {
                                        type: "email",
                                        name: "email",
                                        className: "form-input " + (r.email ? "error" : ""),
                                        value: e.email,
                                        onChange: u,
                                        placeholder: "\u8acb\u8f38\u5165\u96fb\u90f5\u5730\u5740",
                                        autoComplete: "off",
                                        autoCorrect: "off"
                                    }), r.email && (0, Le.jsx)("div", {
                                        className: "error-message",
                                        children: r.email
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "form-group",
                                    children: [(0, Le.jsxs)("label", {
                                        className: "section-label",
                                        children: ["\u96fb\u8a71\u865f\u78bc ", (0, Le.jsx)("span", {
                                            className: "required",
                                            children: "*"
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "phone-group",
                                        children: [(0, Le.jsxs)("select", {
                                            className: "country-code",
                                            name: "phoneCountry",
                                            value: e.phoneCountry,
                                            onChange: u,
                                            children: [(0, Le.jsx)("option", {
                                                value: "+852",
                                                children: "+852"
                                            }), (0, Le.jsx)("option", {
                                                value: "+86",
                                                children: "+86"
                                            }), (0, Le.jsx)("option", {
                                                value: "+1",
                                                children: "+1"
                                            }), (0, Le.jsx)("option", {
                                                value: "+81",
                                                children: "+81"
                                            }), (0, Le.jsx)("option", {
                                                value: "+82",
                                                children: "+82"
                                            }), (0, Le.jsx)("option", {
                                                value: "+65",
                                                children: "+65"
                                            }), (0, Le.jsx)("option", {
                                                value: "+60",
                                                children: "+60"
                                            }), (0, Le.jsx)("option", {
                                                value: "+886",
                                                children: "+886"
                                            })]
                                        }), (0, Le.jsx)("input", {
                                            type: "tel",
                                            name: "phoneNumber",
                                            className: "form-input phone-input " + (r.phoneNumber ? "error" : ""),
                                            value: e.phoneNumber,
                                            onChange: u,
                                            placeholder: "\u8acb\u8f38\u5165\u96fb\u8a71\u865f\u78bc",
                                            autoComplete: "off",
                                            autoCorrect: "off"
                                        })]
                                    }), r.phoneNumber && (0, Le.jsx)("div", {
                                        className: "error-message",
                                        children: r.phoneNumber
                                    })]
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "form-section",
                                children: [(0, Le.jsx)("label", {
                                    className: "section-label",
                                    children: "\u516c\u53f8\u540d\u7a31"
                                }), (0, Le.jsx)("input", {
                                    type: "text",
                                    name: "company",
                                    className: "form-input",
                                    value: e.company,
                                    onChange: u,
                                    placeholder: "\u8acb\u8f38\u5165\u516c\u53f8\u540d\u7a31",
                                    autoComplete: "off",
                                    autoCorrect: "off"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "form-section",
                                children: [(0, Le.jsxs)("label", {
                                    className: "section-label",
                                    children: ["\u670d\u52d9\u9805\u76ee ", (0, Le.jsx)("span", {
                                        className: "required",
                                        children: "*"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "services-row",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "service-option " + (e.services.webDevelopment ? "selected" : ""),
                                        children: [(0, Le.jsx)("input", {
                                            type: "checkbox",
                                            name: "webDevelopment",
                                            checked: e.services.webDevelopment,
                                            onChange: u
                                        }), (0, Le.jsx)("span", {
                                            children: "\u7db2\u9801\u958b\u767c"
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "service-option " + (e.services.systemDevelopment ? "selected" : ""),
                                        children: [(0, Le.jsx)("input", {
                                            type: "checkbox",
                                            name: "systemDevelopment",
                                            checked: e.services.systemDevelopment,
                                            onChange: u
                                        }), (0, Le.jsx)("span", {
                                            children: "\u7cfb\u7d71\u958b\u767c"
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "service-option " + (e.services.programDevelopment ? "selected" : ""),
                                        children: [(0, Le.jsx)("input", {
                                            type: "checkbox",
                                            name: "programDevelopment",
                                            checked: e.services.programDevelopment,
                                            onChange: u
                                        }), (0, Le.jsx)("span", {
                                            children: "\u7a0b\u5e8f\u958b\u767c"
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "service-option " + (e.services.semSeo ? "selected" : ""),
                                        children: [(0, Le.jsx)("input", {
                                            type: "checkbox",
                                            name: "semSeo",
                                            checked: e.services.semSeo,
                                            onChange: u
                                        }), (0, Le.jsx)("span", {
                                            children: "SEM&SEO"
                                        })]
                                    })]
                                }), r.services && (0, Le.jsx)("div", {
                                    className: "error-message",
                                    children: r.services
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "form-section",
                                children: [(0, Le.jsx)("label", {
                                    className: "section-label",
                                    children: "\u9810\u7b97\u7bc4\u570d"
                                }), (0, Le.jsxs)("select", {
                                    name: "budget",
                                    className: "form-select",
                                    value: e.budget,
                                    onChange: u,
                                    children: [(0, Le.jsx)("option", {
                                        value: "",
                                        children: "\u8acb\u9078\u64c7\u9810\u7b97\u7bc4\u570d"
                                    }), (0, Le.jsx)("option", {
                                        value: "HK$5,000\u4ee5\u4e0b",
                                        children: "HK$5,000\u4ee5\u4e0b"
                                    }), (0, Le.jsx)("option", {
                                        value: "HK$5,000 - HK$10,000",
                                        children: "HK$5,000 - HK$10,000"
                                    }), (0, Le.jsx)("option", {
                                        value: "HK$10,000 - HK$30,000",
                                        children: "HK$10,000 - HK$30,000"
                                    }), (0, Le.jsx)("option", {
                                        value: "HK$30,000 - HK$50,000",
                                        children: "HK$30,000 - HK$50,000"
                                    }), (0, Le.jsx)("option", {
                                        value: "HK$50,000 - HK$100,000",
                                        children: "HK$50,000 - HK$100,000"
                                    }), (0, Le.jsx)("option", {
                                        value: "HK$100,000\u4ee5\u4e0a",
                                        children: "HK$100,000\u4ee5\u4e0a"
                                    })]
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "form-section",
                                children: [(0, Le.jsxs)("label", {
                                    className: "section-label",
                                    children: ["\u7559\u8a00 ", (0, Le.jsx)("span", {
                                        className: "required",
                                        children: "*"
                                    })]
                                }), (0, Le.jsx)("textarea", {
                                    name: "message",
                                    className: "form-textarea " + (r.message ? "error" : ""),
                                    value: e.message,
                                    onChange: u,
                                    placeholder: "\u8acb\u8f38\u5165\u7559\u8a00",
                                    autoComplete: "off",
                                    autoCorrect: "off",
                                    rows: "5"
                                }), r.message && (0, Le.jsx)("div", {
                                    className: "error-message",
                                    children: r.message
                                })]
                            }), (0, Le.jsx)("button", {
                                type: "submit",
                                className: "submit-button",
                                disabled: l,
                                children: l ? "\u63d0\u4ea4\u4e2d..." : "\u63d0\u4ea4"
                            })]
                        })]
                    })
                })
            };
        var Re = {
                color: void 0,
                size: void 0,
                className: void 0,
                style: void 0,
                attr: void 0
            },
            Be = n.createContext && n.createContext(Re),
            Te = ["attr", "size", "title"];

        function We(e, n) {
            if (null == e) return {};
            var t, r, a = function(e, n) {
                if (null == e) return {};
                var t = {};
                for (var r in e)
                    if (Object.prototype.hasOwnProperty.call(e, r)) {
                        if (n.indexOf(r) >= 0) continue;
                        t[r] = e[r]
                    }
                return t
            }(e, n);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) t = l[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (a[t] = e[t])
            }
            return a
        }

        function De() {
            return De = Object.assign ? Object.assign.bind() : function(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                }
                return e
            }, De.apply(this, arguments)
        }

        function He(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n && (r = r.filter((function(n) {
                    return Object.getOwnPropertyDescriptor(e, n).enumerable
                }))), t.push.apply(t, r)
            }
            return t
        }

        function Fe(e) {
            for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2 ? He(Object(t), !0).forEach((function(n) {
                    Ie(e, n, t[n])
                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : He(Object(t)).forEach((function(n) {
                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                }))
            }
            return e
        }

        function Ie(e, n, t) {
            return (n = function(e) {
                var n = function(e, n) {
                    if ("object" != typeof e || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, n || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === n ? String : Number)(e)
                }(e, "string");
                return "symbol" == typeof n ? n : n + ""
            }(n)) in e ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[n] = t, e
        }

        function Ae(e) {
            return e && e.map(((e, t) => n.createElement(e.tag, Fe({
                key: t
            }, e.attr), Ae(e.child))))
        }

        function Ve(e) {
            return t => n.createElement(Ue, De({
                attr: Fe({}, e.attr)
            }, t), Ae(e.child))
        }

        function Ue(e) {
            var t = t => {
                var r, {
                        attr: a,
                        size: l,
                        title: i
                    } = e,
                    s = We(e, Te),
                    o = l || t.size || "1em";
                return t.className && (r = t.className), e.className && (r = (r ? r + " " : "") + e.className), n.createElement("svg", De({
                    stroke: "currentColor",
                    fill: "currentColor",
                    strokeWidth: "0"
                }, t.attr, a, s, {
                    className: r,
                    style: Fe(Fe({
                        color: e.color || t.color
                    }, t.style), e.style),
                    height: o,
                    width: o,
                    xmlns: "http://www.w3.org/2000/svg"
                }), i && n.createElement("title", null, i), e.children)
            };
            return void 0 !== Be ? n.createElement(Be.Consumer, null, (e => t(e))) : t(Re)
        }

        function $e(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z"
                    },
                    child: []
                }]
            })(e)
        }

        function Qe(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 640 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"
                    },
                    child: []
                }]
            })(e)
        }

        function qe(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 384 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"
                    },
                    child: []
                }]
            })(e)
        }

        function Ke(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 320 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    },
                    child: []
                }]
            })(e)
        }

        function Ye(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 488 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    },
                    child: []
                }]
            })(e)
        }

        function Xe(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 384 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
                    },
                    child: []
                }]
            })(e)
        }

        function Ge(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    },
                    child: []
                }]
            })(e)
        }

        function Ze(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 384 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M277.74 312.9c9.8-6.7 23.4-12.5 23.4-12.5s-38.7 7-77.2 10.2c-47.1 3.9-97.7 4.7-123.1 1.3-60.1-8 33-30.1 33-30.1s-36.1-2.4-80.6 19c-52.5 25.4 130 37 224.5 12.1zm-85.4-32.1c-19-42.7-83.1-80.2 0-145.8C296 53.2 242.84 0 242.84 0c21.5 84.5-75.6 110.1-110.7 162.6-23.9 35.9 11.7 74.4 60.2 118.2zm114.6-176.2c.1 0-175.2 43.8-91.5 140.2 24.7 28.4-6.5 54-6.5 54s62.7-32.4 33.9-72.9c-26.9-37.8-47.5-56.6 64.1-121.3zm-6.1 270.5a12.19 12.19 0 0 1-2 2.6c128.3-33.7 81.1-118.9 19.8-97.3a17.33 17.33 0 0 0-8.2 6.3 70.45 70.45 0 0 1 11-3c31-6.5 75.5 41.5-20.6 91.4zM348 437.4s14.5 11.9-15.9 21.2c-57.9 17.5-240.8 22.8-291.6.7-18.3-7.9 16-19 26.8-21.3 11.2-2.4 17.7-2 17.7-2-20.3-14.3-131.3 28.1-56.4 40.2C232.84 509.4 401 461.3 348 437.4zM124.44 396c-78.7 22 47.9 67.4 148.1 24.5a185.89 185.89 0 0 1-28.2-13.8c-44.7 8.5-65.4 9.1-106 4.5-33.5-3.8-13.9-15.2-13.9-15.2zm179.8 97.2c-78.7 14.8-175.8 13.1-233.3 3.6 0-.1 11.8 9.7 72.4 13.6 92.2 5.9 233.8-3.3 237.1-46.9 0 0-6.4 16.5-76.2 29.7zM260.64 353c-59.2 11.4-93.5 11.1-136.8 6.6-33.5-3.5-11.6-19.7-11.6-19.7-86.8 28.8 48.2 61.4 169.5 25.9a60.37 60.37 0 0 1-21.1-12.8z"
                    },
                    child: []
                }]
            })(e)
        }

        function Je(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"
                    },
                    child: []
                }]
            })(e)
        }

        function en(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"
                    },
                    child: []
                }]
            })(e)
        }

        function nn(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M439.8 200.5c-7.7-30.9-22.3-54.2-53.4-54.2h-40.1v47.4c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3zM167.8 248.1h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4zm-6.7-142.6c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4 11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3z"
                    },
                    child: []
                }]
            })(e)
        }

        function tn(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 512 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"
                    },
                    child: []
                }]
            })(e)
        }

        function rn(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M356.9 64.3H280l-56 88.6-48-88.6H0L224 448 448 64.3h-91.1zm-301.2 32h53.8L224 294.5 338.4 96.3h53.8L224 384.5 55.7 96.3z"
                    },
                    child: []
                }]
            })(e)
        }

        function an(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 448 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                    },
                    child: []
                }]
            })(e)
        }

        function ln(e) {
            return Ve({
                tag: "svg",
                attr: {
                    viewBox: "0 0 512 512"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
                    },
                    child: []
                }]
            })(e)
        }
        const sn = e => {
                let {
                    title: n,
                    description: t,
                    image: r,
                    onLearnMore: a,
                    hideButton: l
                } = e;
                const i = ee();
                return (0, Le.jsxs)("div", {
                    className: "banner-container",
                    children: [(0, Le.jsxs)("div", {
                        className: "banner-content",
                        children: [(0, Le.jsx)("h1", {
                            className: "banner-title",
                            style: {
                                fontSize: "1.5rem"
                            },
                            children: n
                        }), (0, Le.jsx)("p", {
                            className: "banner-description",
                            style: {
                                fontSize: "0.85rem"
                            },
                            children: t
                        }), !l && (0, Le.jsx)("button", {
                            className: "banner-button",
                            onClick: a || (() => {
                                i("/contact", {
                                    replace: !0
                                })
                            }),
                            children: "\u4e86\u89e3\u66f4\u591a"
                        })]
                    }), (0, Le.jsx)("div", {
                        className: "banner-image",
                        children: (0, Le.jsx)("img", {
                            src: r || "/images/silder1.jpeg",
                            alt: "banner"
                        })
                    })]
                })
            },
            on = () => (0, Le.jsxs)("div", {
                className: "contact-page",
                children: [(0, Le.jsx)(sn, {
                    title: "\u806f\u7d61\u6211\u5011",
                    description: "\u96a8\u6642\u50be\u807d\u60a8\u7684\u8072\u97f3\uff0c\u63d0\u4f9b\u91cf\u8eab\u5b9a\u5236\u7684\u5c08\u696d\u8aee\u8a62\u8207\u6280\u8853\u652f\u63f4\u3002\u7121\u8ad6\u60a8\u662f\u521d\u5275\u4f01\u696d\u5c0b\u6c42\u6578\u4f4d\u7a81\u7834\uff0c\u6216\u6210\u719f\u54c1\u724c\u671f\u5f85\u6280\u8853\u5347\u7d1a\uff0c\u6211\u5011\u7684\u5c08\u5bb6\u5718\u968a\u5c07\u4ee5\u8c50\u5bcc\u7d93\u9a57\u8207\u5275\u65b0\u601d\u7dad\uff0c\u70ba\u60a8\u898f\u5283\u6700\u9069\u5207\u7684\u767c\u5c55\u85cd\u5716\uff0c\u5171\u5275\u6578\u4f4d\u6210\u529f\u3002",
                    image: "/images/contactBanner.jpeg",
                    hideButton: !0
                }), (0, Le.jsxs)("div", {
                    className: "contact-container",
                    children: [(0, Le.jsx)("div", {
                        className: "form-card",
                        children: (0, Le.jsx)(Oe, {})
                    }), (0, Le.jsxs)("div", {
                        className: "company-info-section",
                        children: [(0, Le.jsx)("div", {
                            className: "company-info-header text-center",
                            children: (0, Le.jsx)("h3", {
                                children: "\u516c\u53f8\u8cc7\u6599"
                            })
                        }), (0, Le.jsx)("div", {
                            className: "company-cards",
                            children: (0, Le.jsxs)("div", {
                                className: "company-card text-center",
                                children: [(0, Le.jsx)("h4", {
                                    children: "ZenithSoft Limited"
                                }), (0, Le.jsxs)("p", {
                                    children: [(0, Le.jsx)("i", {
                                        className: "fas fa-phone"
                                    }), " (852) 94429080"]
                                }), (0, Le.jsxs)("p", {
                                    children: [(0, Le.jsx)("i", {
                                        className: "fas fa-envelope"
                                    }), (0, Le.jsx)("a", {
                                        href: "mailto:info@zenithsoft.org",
                                        className: "email-link",
                                        children: "info@zenithsoft.org"
                                    })]
                                })]
                            })
                        }), (0, Le.jsxs)("div", {
                            className: "social-media-section",
                            children: [(0, Le.jsx)("h4", {
                                className: "text-center",
                                children: "\u95dc\u6ce8\u6211\u5011"
                            }), (0, Le.jsxs)("div", {
                                className: "social-icons-container",
                                children: [(0, Le.jsx)("a", {
                                    href: "https://www.facebook.com/profile.php?id=61576803092687",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-icon facebook",
                                    children: (0, Le.jsx)(Ke, {})
                                }), (0, Le.jsx)("a", {
                                    href: "https://www.instagram.com/zenithsoft_hk/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-icon instagram",
                                    children: (0, Le.jsx)(Ge, {})
                                }), (0, Le.jsx)("a", {
                                    href: "https://wa.me/85294429080",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-icon whatsapp",
                                    children: (0, Le.jsx)(an, {})
                                })]
                            })]
                        })]
                    })]
                })]
            }),
            cn = () => {
                const [e, t] = (0, n.useState)("scale"), r = e => {
                    t(e)
                }, a = [{
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        })
                    }),
                    title: "ERP\u4f01\u696d\u8cc7\u6e90\u898f\u5283\u7cfb\u7d71",
                    description: "\u6574\u5408\u4f01\u696d\u8cc7\u6e90\uff0c\u512a\u5316\u71df\u904b\u6d41\u7a0b",
                    features: ["\u71df\u904b\u6d41\u7a0b\u6574\u5408", "\u4f01\u696d\u8cc7\u6e90\u7ba1\u7406", "\u667a\u80fd\u6578\u64da\u5206\u6790"]
                }, {
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                        })
                    }),
                    title: "POS\u92b7\u552e\u7cfb\u7d71",
                    description: "\u9ad8\u6548\u92b7\u552e\u8655\u7406\uff0c\u63d0\u5347\u4ea4\u6613\u9ad4\u9a57",
                    features: ["\u5feb\u901f\u4ea4\u6613\u8655\u7406", "\u5eab\u5b58\u81ea\u52d5\u66f4\u65b0", "\u92b7\u552e\u6578\u64da\u5206\u6790"]
                }, {
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        })
                    }),
                    title: "CRM\u5ba2\u6236\u95dc\u4fc2\u7ba1\u7406\u7cfb\u7d71",
                    description: "\u6709\u6548\u7ba1\u7406\u5ba2\u6236\u8cc7\u8a0a\uff0c\u63d0\u5347\u670d\u52d9\u54c1\u8cea",
                    features: ["\u5ba2\u6236\u8cc7\u6599\u7ba1\u7406", "\u92b7\u552e\u6d41\u7a0b\u8ffd\u8e64", "\u5ba2\u6236\u670d\u52d9\u512a\u5316"]
                }, {
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        })
                    }),
                    title: "HRMS\u4eba\u529b\u8cc7\u6e90\u7ba1\u7406\u7cfb\u7d71",
                    description: "\u5168\u9762\u4eba\u624d\u7ba1\u7406\uff0c\u7e3e\u6548\u8a55\u4f30\u8ddf\u8e2a",
                    features: ["\u4eba\u54e1\u62db\u8058\u7ba1\u7406", "\u7e3e\u6548\u8a55\u4f30\u7cfb\u7d71", "\u85aa\u8cc7\u798f\u5229\u7ba1\u7406"]
                }, {
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                        })
                    }),
                    title: "IMS\u5eab\u5b58\u7ba1\u7406\u7cfb\u7d71",
                    description: "\u7cbe\u78ba\u63a7\u5236\u5eab\u5b58\uff0c\u512a\u5316\u5009\u5132\u7ba1\u7406",
                    features: ["\u5eab\u5b58\u5373\u6642\u76e3\u63a7", "\u5b58\u8ca8\u9810\u8b66\u7cfb\u7d71", "\u689d\u78bc\u6383\u63cf\u7ba1\u7406"]
                }, {
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                        })
                    }),
                    title: "OMS\u8a02\u55ae\u7ba1\u7406\u7cfb\u7d71",
                    description: "\u6709\u6548\u8655\u7406\u8a02\u55ae\u6d41\u7a0b\uff0c\u63d0\u9ad8\u5ba2\u6236\u6eff\u610f\u5ea6",
                    features: ["\u8a02\u55ae\u8ffd\u8e64\u7ba1\u7406", "\u8a02\u55ae\u8655\u7406\u81ea\u52d5\u5316", "\u5ba2\u6236\u8a02\u55ae\u67e5\u8a62"]
                }, {
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                    }),
                    title: "AFS\u6703\u8a08\u8ca1\u52d9\u7cfb\u7d71",
                    description: "\u7cbe\u78ba\u8ca1\u52d9\u63a7\u5236\uff0c\u63d0\u5347\u6c7a\u7b56\u6548\u7387",
                    features: ["\u6703\u8a08\u81ea\u52d5\u5316", "\u9810\u7b97\u7ba1\u7406", "\u8ca1\u52d9\u5831\u8868\u751f\u6210"]
                }, {
                    icon: (0, Le.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [(0, Le.jsx)("path", {
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        }), (0, Le.jsx)("path", {
                            d: "M12 8v4m0 4h.01M5 3v18m14-18v18M5 8h14M5 16h14"
                        })]
                    }),
                    title: "PMS\u5c08\u6848\u7ba1\u7406\u7cfb\u7d71",
                    description: "\u9ad8\u6548\u5c08\u6848\u5354\u4f5c\uff0c\u9032\u5ea6\u5be6\u6642\u638c\u63a7",
                    features: ["\u4efb\u52d9\u5206\u914d\u8ffd\u8e64", "\u9032\u5ea6\u76e3\u63a7\u7ba1\u7406", "\u8cc7\u6e90\u512a\u5316\u5206\u914d"]
                }, {
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        })
                    }),
                    title: "LTS\u7269\u6d41\u8ffd\u8e64\u7cfb\u7d71",
                    description: "\u5168\u7a0b\u76e3\u63a7\u7269\u6d41\u72c0\u614b\uff0c\u512a\u5316\u914d\u9001\u6548\u7387",
                    features: ["\u5be6\u6642\u8ca8\u7269\u8ffd\u8e64", "\u7269\u6d41\u8def\u7dda\u512a\u5316", "\u914d\u9001\u72c0\u614b\u901a\u77e5"]
                }, {
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        })
                    }),
                    title: "BI\u5546\u696d\u667a\u80fd\u7cfb\u7d71",
                    description: "\u6df1\u5ea6\u6578\u64da\u5206\u6790\uff0c\u652f\u63f4\u5546\u696d\u6c7a\u7b56",
                    features: ["\u6578\u64da\u53ef\u8996\u5316", "\u8da8\u52e2\u5206\u6790\u9810\u6e2c", "\u5e02\u5834\u6d1e\u5bdf\u5831\u544a"]
                }, {
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        })
                    }),
                    title: "SMS\u5b78\u6821\u7ba1\u7406\u7cfb\u7d71",
                    description: "\u5168\u9762\u6574\u5408\u6821\u52d9\u7ba1\u7406\uff0c\u63d0\u5347\u6559\u5b78\u6548\u7387",
                    features: ["\u5b78\u751f\u8cc7\u6599\u7ba1\u7406", "\u8ab2\u7a0b\u6392\u7a0b\u7cfb\u7d71", "\u6210\u7e3e\u8a55\u4f30\u5206\u6790"]
                }], l = ee(), i = () => {
                    l("/contact", {
                        replace: !0
                    })
                };
                return (0, Le.jsxs)("div", {
                    className: "systems-container",
                    children: [(0, Le.jsx)(sn, {
                        title: "\u7cfb\u7d71\u958b\u767c",
                        description: "\u5c08\u696d\u6253\u9020\u4f01\u696d\u7d1a\u5ba2\u88fd\u5316\u7cfb\u7d71\uff0c\u5f9eERP\u3001CRM\u5230\u96fb\u5546\u5e73\u53f0\u8207\u8cc7\u6599\u7ba1\u7406\u7cfb\u7d71\uff0c\u6eff\u8db3\u5404\u884c\u696d\u7279\u5b9a\u9700\u6c42\u3002\u63a1\u7528\u6700\u65b0\u6280\u8853\u67b6\u69cb\uff0c\u78ba\u4fdd\u7cfb\u7d71\u9ad8\u6548\u80fd\u3001\u9ad8\u5b89\u5168\u6027\u8207\u53ef\u64f4\u5c55\u6027\uff0c\u4e26\u652f\u63f4\u8de8\u5e73\u53f0\u81ea\u9069\u61c9\u3001\u591a\u8a9e\u8a00\u4ecb\u9762\u8207\u5168\u7403\u5316\u90e8\u7f72\uff0c\u52a9\u60a8\u7c21\u5316\u71df\u904b\u6d41\u7a0b\uff0c\u63d0\u5347\u696d\u52d9\u6548\u7387\u3002",
                        image: "/images/sysBanner.jpg"
                    }), (0, Le.jsxs)("div", {
                        className: "systems-title",
                        children: [(0, Le.jsx)("h1", {
                            children: "\u4f01\u696d\u7cfb\u7d71\u89e3\u6c7a\u65b9\u6848"
                        }), (0, Le.jsx)("p", {
                            children: "\u63d0\u4f9b\u5168\u65b9\u4f4d\u7684\u696d\u52d9\u7cfb\u7d71\uff0c\u512a\u5316\u4f01\u696d\u71df\u904b\uff0c\u63d0\u5347\u6548\u7387\u8207\u7af6\u722d\u529b"
                        })]
                    }), (0, Le.jsx)("div", {
                        className: "systems-grid",
                        children: a.map(((e, n) => (0, Le.jsxs)("div", {
                            className: "system-card",
                            children: [(0, Le.jsx)("div", {
                                className: "system-icon",
                                children: e.icon
                            }), (0, Le.jsx)("h3", {
                                className: "system-title",
                                children: e.title
                            }), (0, Le.jsx)("p", {
                                className: "system-description",
                                children: e.description
                            }), (0, Le.jsx)("ul", {
                                className: "system-features",
                                children: e.features.map(((e, n) => (0, Le.jsx)("li", {
                                    children: e
                                }, n)))
                            })]
                        }, n)))
                    }), (0, Le.jsxs)("div", {
                        className: "pricing-section",
                        children: [(0, Le.jsxs)("div", {
                            className: "pricing-header",
                            children: [(0, Le.jsx)("h2", {
                                children: "\u4f01\u696d\u7cfb\u7d71\u89e3\u6c7a\u65b9\u6848\u50f9\u76ee\u8868"
                            }), (0, Le.jsx)("p", {
                                children: "\u63d0\u4f9b\u5168\u65b9\u4f4d\u7684\u696d\u52d9\u7cfb\u7d71\uff0c\u512a\u5316\u4f01\u696d\u71df\u904b\uff0c\u63d0\u5347\u6548\u7387\u8207\u7af6\u722d\u529b"
                            }), (0, Le.jsxs)("div", {
                                className: "pricing-tabs",
                                children: [(0, Le.jsx)("button", {
                                    className: "tab-button " + ("scale" === e ? "active" : ""),
                                    onClick: () => r("scale"),
                                    children: "\u6309\u898f\u6a21\u9078\u64c7"
                                }), (0, Le.jsx)("button", {
                                    className: "tab-button " + ("industry" === e ? "active" : ""),
                                    onClick: () => r("industry"),
                                    children: "\u6309\u884c\u696d\u9078\u64c7"
                                })]
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "tab-content scale-plans",
                            style: {
                                display: "scale" === e ? "block" : "none"
                            },
                            children: (0, Le.jsxs)("div", {
                                className: "pricing-plans",
                                children: [(0, Le.jsxs)("div", {
                                    className: "pricing-plan",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "plan-header",
                                        children: [(0, Le.jsx)("h3", {
                                            children: "\u521d\u5275\u65b9\u6848"
                                        }), (0, Le.jsx)("div", {
                                            className: "plan-price",
                                            children: "$60,000 \u8d77"
                                        }), (0, Le.jsx)("div", {
                                            className: "plan-billing",
                                            children: "\u4e00\u6b21\u6027\u8cbb\u7528"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u9069\u5408\u521d\u5275\u4f01\u696d\u548c\u5c0f\u578b\u5546\u5e97\uff0c\u5feb\u901f\u5efa\u7acb\u7dda\u4e0a\u4e0a\u5e02\u8c61"
                                        })]
                                    }), (0, Le.jsxs)("ul", {
                                        className: "plan-features",
                                        children: [(0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " POS\u92b7\u552e\u7cfb\u7d71 (\u57fa\u790e\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " IMS\u5eab\u5b58\u7ba1\u7406\u7cfb\u7d71 (\u57fa\u790e\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " OMS\u8a02\u55ae\u7ba1\u7406\u7cfb\u7d71 (\u57fa\u790e\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u57fa\u672c\u696d\u52d9\u6d41\u7a0b\u81ea\u52d5\u5316"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " 5\u500b\u7528\u6236\u5e33\u865f"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u57fa\u672c\u8cc7\u6599\u532f\u5165\u529f\u80fd"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u7cfb\u7d71\u57fa\u672c\u57f9\u8a13"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " 3\u500b\u6708\u6280\u8853\u652f\u63f4"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u7cfb\u7d71\u66f4\u65b0\u7dad\u8b771\u5e74"]
                                        })]
                                    }), (0, Le.jsx)("button", {
                                        className: "plan-cta",
                                        onClick: i,
                                        children: "\u514d\u8cbb\u8aee\u8a62"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "pricing-plan featured",
                                    children: [(0, Le.jsx)("div", {
                                        className: "plan-tag",
                                        children: "\u6700\u53d7\u6b61\u8fce"
                                    }), (0, Le.jsxs)("div", {
                                        className: "plan-header",
                                        children: [(0, Le.jsx)("h3", {
                                            children: "\u5546\u696d\u65b9\u6848"
                                        }), (0, Le.jsx)("div", {
                                            className: "plan-price",
                                            children: "$180,000 \u8d77"
                                        }), (0, Le.jsx)("div", {
                                            className: "plan-billing",
                                            children: "\u4e00\u6b21\u6027\u8cbb\u7528"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u9069\u5408\u4e2d\u5c0f\u4f01\u696d\uff0c\u5efa\u7acb\u5c08\u696d\u591a\u529f\u80fd\u71df\u92b7\u524d\u5de5\u5177"
                                        })]
                                    }), (0, Le.jsxs)("ul", {
                                        className: "plan-features",
                                        children: [(0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " ERP\u4f01\u696d\u8cc7\u6e90\u898f\u5283\u7cfb\u7d71 (\u6a19\u6e96\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " CRM\u5ba2\u6236\u95dc\u4fc2\u7ba1\u7406\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " POS\u92b7\u552e\u7cfb\u7d71 (\u9032\u968e\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " IMS\u5eab\u5b58\u7ba1\u7406\u7cfb\u7d71 (\u9032\u968e\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " AFS\u6703\u8a08\u8ca1\u52d9\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u5b8c\u6574\u696d\u52d9\u6d41\u7a0b\u81ea\u52d5\u5316"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " 20\u500b\u7528\u6236\u5e33\u865f"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u6578\u64da\u532f\u5165\u8207\u540c\u6b65\u529f\u80fd"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u7cfb\u7d71\u9032\u968e\u57f9\u8a13"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " 6\u500b\u6708\u6280\u8853\u652f\u63f4"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u7cfb\u7d71\u66f4\u65b0\u7dad\u8b772\u5e74"]
                                        })]
                                    }), (0, Le.jsx)("button", {
                                        className: "plan-cta",
                                        onClick: i,
                                        children: "\u514d\u8cbb\u8aee\u8a62"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "pricing-plan",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "plan-header",
                                        children: [(0, Le.jsx)("h3", {
                                            children: "\u4f01\u696d\u65b9\u6848"
                                        }), (0, Le.jsx)("div", {
                                            className: "plan-price",
                                            children: "$450,000 \u8d77"
                                        }), (0, Le.jsx)("div", {
                                            className: "plan-billing",
                                            children: "\u4e00\u6b21\u6027\u8cbb\u7528"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u9069\u5408\u5927\u578b\u4f01\u696d\uff0c\u63d0\u4f9b\u5168\u65b9\u4f4d\u6578\u4f4d\u89e3\u6c7a\u65b9\u6848"
                                        })]
                                    }), (0, Le.jsxs)("ul", {
                                        className: "plan-features",
                                        children: [(0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " ERP\u4f01\u696d\u8cc7\u6e90\u898f\u5283\u7cfb\u7d71 (\u9ad8\u7d1a\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " CRM\u5ba2\u6236\u95dc\u4fc2\u7ba1\u7406\u7cfb\u7d71 (\u9ad8\u7d1a\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " HRMS\u4eba\u529b\u8cc7\u6e90\u7ba1\u7406\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " IMS\u5eab\u5b58\u7ba1\u7406\u7cfb\u7d71 (\u9ad8\u7d1a\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " AFS\u6703\u8a08\u8ca1\u52d9\u7cfb\u7d71 (\u9ad8\u7d1a\u7248)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " PMS\u5c08\u6848\u7ba1\u7406\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " LTS\u7269\u6d41\u8ffd\u8e64\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " BI\u5546\u696d\u667a\u80fd\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u5168\u4f01\u696d\u6d41\u7a0b\u6574\u5408\u8207\u512a\u5316"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u7121\u9650\u7528\u6236\u5e33\u865f"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u9ad8\u7d1a\u6578\u64da\u5206\u6790\u9810\u6e2c"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u7cfb\u7d71\u5168\u9762\u5b9a\u5236\u8207\u54a8\u8a62"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u4e00\u5e74\u5168\u65b9\u4f4d\u6280\u8853\u652f\u63f4"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u7cfb\u7d71\u66f4\u65b0\u7dad\u8b773\u5e74"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("span", {
                                                className: "check-icon",
                                                children: "\u2713"
                                            }), " \u5c08\u5c6c\u5ba2\u6236\u7d93\u7406\u670d\u52d9"]
                                        })]
                                    }), (0, Le.jsx)("button", {
                                        className: "plan-cta",
                                        onClick: i,
                                        children: "\u514d\u8cbb\u8aee\u8a62"
                                    })]
                                })]
                            })
                        }), (0, Le.jsxs)("div", {
                            className: "tab-content industry-plans",
                            style: {
                                display: "industry" === e ? "block" : "none"
                            },
                            children: [(0, Le.jsxs)("div", {
                                className: "industry-solution",
                                children: [(0, Le.jsx)("h2", {
                                    children: "\u96f6\u552e\u696d\u89e3\u6c7a\u65b9\u6848"
                                }), (0, Le.jsx)("p", {
                                    children: "\u7d9c\u5408\u96f6\u552e\u5e97\u8216\u3001\u96fb\u5546\u53ca\u9032\u92b7\u5b58\u7ba1\u7406\u7cfb\u7d71"
                                }), (0, Le.jsx)("div", {
                                    className: "solution-price",
                                    children: "$120,000 \u8d77"
                                }), (0, Le.jsx)("div", {
                                    className: "solution-description",
                                    children: (0, Le.jsx)("p", {
                                        children: "\u5c08\u70ba\u96f6\u552e\u696d\u91cf\u8eab\u8a02\u9020\u7684\u4e00\u9ad4\u5316\u89e3\u6c7a\u65b9\u6848\uff0c\u6574\u5408\u7dda\u4e0a\u4e0a\u7dda\u4e0b\u92b7\u552e\u6e20\u9053\uff0c\u5be6\u73fe\u5eab\u5b58\u3001\u8a02\u55ae\u3001\u5ba2\u6236\u8207\u92b7\u552e\u6578\u64da\u7684\u5354\u8abf\u7ba1\u7406\uff0c\u63d0\u5347\u696d\u52d9\u7af6\u722d\u8207\u904b\u71df\u6548\u7387\u3002"
                                    })
                                }), (0, Le.jsxs)("div", {
                                    className: "solution-systems",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsxs)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [(0, Le.jsx)("path", {
                                                    d: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                                                }), (0, Le.jsx)("path", {
                                                    d: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                                                })]
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "POS\u92b7\u552e\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u9ad8\u6548\u96f6\u552e\u6536\u9280\u7ba1\u7406"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u591a\u901a\u9053\u92b7\u552e\u7ba1\u7406"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u4e00\u9375\u6536\u9280\u7d50\u5e33\u652f\u4ed8"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u6703\u54e1\u7a4d\u5206\u7cfb\u7d71\u6574\u5408"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "IMS\u5eab\u5b58\u7ba1\u7406\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u7cbe\u78ba\u5eab\u5b58\u5168\u65b9\u4f4d\u63a7\u5236"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u591a\u6e20\u9053\u5eab\u5b58\u7ba1\u7406"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u667a\u80fd\u5eab\u5b58\u76e3\u63a7"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u5eab\u5b58\u9810\u8b66\u8207\u88dc\u8ca8\u63d0\u9192"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "CRM\u5ba2\u6236\u95dc\u4fc2\u7ba1\u7406\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u6df1\u5316\u5ba2\u6236\u95dc\u4fc2\u8207\u5fe0\u8aa0\u5ea6"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u9867\u5ba2\u8cc7\u6599\u5206\u6790\u529f\u80fd"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u6703\u54e1\u5fe0\u8aa0\u5ea6\u7ba1\u7406"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u5ba2\u6236\u5206\u985e\u7ba1\u7406"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "\u51fa\u5eab\u696d\u52d9\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u6578\u64da\u9a45\u52d5\u7684\u6c7a\u7b56\u652f\u63f4"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u92b7\u552e\u6578\u64da\u5831\u8868\u5206\u6790"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u5546\u54c1\u92b7\u91cf\u5206\u6790"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u5b63\u7bc0\u6027\u92b7\u552e\u6a21\u5f0f\u9810\u6e2c"
                                            })]
                                        })]
                                    })]
                                }), (0, Le.jsx)("button", {
                                    className: "solution-cta",
                                    onClick: i,
                                    children: "\u700f\u89bd\u7522\u54c1\u8a73\u60c5"
                                }), (0, Le.jsx)("a", {
                                    href: "#",
                                    className: "more-solutions",
                                    onClick: e => {
                                        e.preventDefault(), i()
                                    },
                                    children: "7\u500b\u66f4\u591a\u89e3\u6c7a\u65b9\u6848 \u2192"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "industry-solution",
                                children: [(0, Le.jsx)("h2", {
                                    children: "\u9280\u884c\u696d\u89e3\u6c7a\u65b9\u6848"
                                }), (0, Le.jsx)("p", {
                                    children: "\u9069\u5408\u9280\u884c\u3001\u4fe1\u7528\u5361\u3001\u4fdd\u96aa\u53ca\u91d1\u878d\u6a5f\u69cb"
                                }), (0, Le.jsx)("div", {
                                    className: "solution-price",
                                    children: "$150,000 \u8d77"
                                }), (0, Le.jsx)("div", {
                                    className: "solution-description",
                                    children: (0, Le.jsx)("p", {
                                        children: "\u5c08\u70ba\u9280\u884c\u7b49\u91d1\u878d\u884c\u696d\u8a2d\u8a08\u7684\u5275\u65b0\u7cfb\u7d71\u5316\u89e3\u6c7a\u65b9\u6848\uff0c\u6574\u5408\u5e33\u6236\u3001\u8cc7\u8a0a\u7ba1\u7406\u3001\u6de8\u5b58\u4fe1\u8cb8\u9918\u984d\u8207\u6d41\u7a0b\u7ba1\u7406\uff0c\u63d0\u5347\u670d\u52d9\u8cea\u7d20\uff0c\u6eff\u8db3\u76e3\u7ba1\u8981\u6c42\uff0c\u63d0\u9ad8\u71df\u904b\u6548\u7387\u3002"
                                    })
                                }), (0, Le.jsxs)("div", {
                                    className: "solution-systems",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "\u9910\u5ef3POS\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u9ad8\u6548\u9910\u98f2\u6d3b\u52d5\u7ba1\u7406"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u884c\u52d5\u624b\u6a5f\u9ede\u9910\u529f\u80fd"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u684c\u4f4d\u9910\u6aaf\u7ba1\u7406"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u81ea\u52a9\u9ede\u9910\u7cfb\u7d71"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "\u9810\u7d04\u7ba1\u7406\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u9810\u7d04\u6642\u9593\u667a\u80fd\u5206\u914d"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u81ea\u52d5\u9810\u7d04\u901a\u77e5(SMS)"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u6d41\u7a0b\u7ba1\u7406\u7cfb\u7d71"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u7a7a\u9918\u8cc7\u6e90\u7ba1\u7406"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "\u6703\u54e1\u8207\u5fe0\u8aa0\u5ea6\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u7528\u6236\u7fa4\u7c98\u6027\u548c\u5fe0\u8aa0\u5ea6\u63d0\u5347"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u6703\u54e1\u7a4d\u5206\u8207\u734e\u52f5"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u96fb\u5b50\u6703\u54e1\u5361(NFC)"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u5fe0\u8aa0\u8a08\u5283\u7ba1\u7406"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "\u8ca1\u52d9\u7ba1\u7406\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u6df1\u5165\u8ca1\u52d9\u5206\u6790\u53ca\u7ba1\u7406"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u6536\u64da\u7ba1\u7406\u8207\u5831\u8868"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u5f80\u4f86\u8cec\u6b3e\u8207\u5831\u7a05"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u52a0\u73ed\u8207\u4eba\u54e1\u6210\u672c\u63a7\u5236"
                                            })]
                                        })]
                                    })]
                                }), (0, Le.jsx)("button", {
                                    className: "solution-cta",
                                    onClick: i,
                                    children: "\u700f\u89bd\u7522\u54c1\u8a73\u60c5"
                                }), (0, Le.jsx)("a", {
                                    href: "#",
                                    className: "more-solutions",
                                    onClick: e => {
                                        e.preventDefault(), i()
                                    },
                                    children: "7\u500b\u66f4\u591a\u89e3\u6c7a\u65b9\u6848 \u2192"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "industry-solution",
                                children: [(0, Le.jsx)("h2", {
                                    children: "\u7269\u6d41\u8207\u904b\u8f38\u89e3\u6c7a\u65b9\u6848"
                                }), (0, Le.jsx)("p", {
                                    children: "\u63d0\u9ad8\u7269\u6d41\u6548\u7387\u3001\u7269\u54c1\u8ffd\u8e64\u53ca\u7ba1\u7406\u7cfb\u7d71"
                                }), (0, Le.jsx)("div", {
                                    className: "solution-price",
                                    children: "$200,000 \u8d77"
                                }), (0, Le.jsx)("div", {
                                    className: "solution-description",
                                    children: (0, Le.jsx)("p", {
                                        children: "\u5c08\u70ba\u7269\u6d41\u904b\u8f38\u884c\u696d\u8a2d\u8a08\u7684\u5275\u65b0\u7ba1\u7406\u7cfb\u7d71\uff0c\u63d0\u4f9b\u5168\u65b9\u4f4d\u7684\u8ffd\u8e64\u7ba1\u7406\u3001\u8def\u7dda\u512a\u5316\u3001\u8eca\u968a\u76e3\u63a7\u8207\u914d\u9001\u8ffd\u8e64\u529f\u80fd\uff0c\u5e6b\u52a9\u4f01\u696d\u63d0\u9ad8\u904b\u8f38\u6548\u7387\u3001\u964d\u4f4e\u914d\u9001\u6210\u672c\u3002"
                                    })
                                }), (0, Le.jsxs)("div", {
                                    className: "solution-systems",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsxs)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [(0, Le.jsx)("path", {
                                                    d: "M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                                                }), (0, Le.jsx)("path", {
                                                    d: "M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                                                })]
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "LTS\u7269\u6d41\u8ffd\u8e64\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u5373\u6642\u7269\u6d41\u8ffd\u8e64\u7ba1\u7406"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "GPS\u8ffd\u8e64\u7cfb\u7d71"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u96fb\u5b50\u7c3d\u6536\u529f\u80fd"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u771f\u5be6\u6642\u9593\u66f4\u65b0"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "OMS\u8a02\u55ae\u7ba1\u7406\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u9ad8\u6548\u8a02\u55ae\u8655\u7406\u8207\u8ffd\u8e64"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u8a02\u55ae\u81ea\u52d5\u8655\u7406"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u591a\u7dad\u5ea6\u8a02\u55ae\u6574\u5408"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u914d\u9001\u8def\u7dda\u512a\u5316"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "\u8eca\u968a\u7ba1\u7406\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u8eca\u968a\u6548\u7387\u8207\u6210\u672c\u7ba1\u7406"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u8eca\u8f1b\u6d88\u8017\u7d71\u8a08"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u99d5\u99db\u54e1\u884c\u70ba\u5206\u6790"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u4fdd\u990a\u53ca\u7dad\u4fee\u63d0\u9192"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "\u667a\u80fd\u8def\u7dda\u898f\u5283\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u512a\u5316\u9001\u9054\u8def\u7dda\u8207\u6642\u9593"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "AI\u8def\u7dda\u512a\u5316"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u4ea4\u901a\u72c0\u6cc1\u5be6\u6642\u8abf\u6574"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u591a\u9ede\u914d\u9001\u898f\u5283"
                                            })]
                                        })]
                                    })]
                                }), (0, Le.jsx)("button", {
                                    className: "solution-cta",
                                    onClick: i,
                                    children: "\u700f\u89bd\u7522\u54c1\u8a73\u60c5"
                                }), (0, Le.jsx)("a", {
                                    href: "#",
                                    className: "more-solutions",
                                    onClick: e => {
                                        e.preventDefault(), i()
                                    },
                                    children: "7\u500b\u66f4\u591a\u89e3\u6c7a\u65b9\u6848 \u2192"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "industry-solution",
                                children: [(0, Le.jsx)("h2", {
                                    children: "\u6559\u80b2\u6a5f\u69cb\u89e3\u6c7a\u65b9\u6848"
                                }), (0, Le.jsx)("p", {
                                    children: "\u9069\u5408\u5b78\u6821\u3001\u57f9\u8a13\u4e2d\u5fc3\u53ca\u6559\u80b2\u6a5f\u69cb"
                                }), (0, Le.jsx)("div", {
                                    className: "solution-price",
                                    children: "$180,000 \u8d77"
                                }), (0, Le.jsx)("div", {
                                    className: "solution-description",
                                    children: (0, Le.jsx)("p", {
                                        children: "\u70ba\u6559\u80b2\u6a5f\u69cb\u91cf\u8eab\u6253\u9020\u7684\u7ba1\u7406\u7cfb\u7d71\uff0c\u6574\u5408\u5b78\u751f\u7ba1\u7406\u3001\u8ab2\u7a0b\u6392\u64e0\u3001\u5b78\u7fd2\u884c\u70ba\u8207\u6821\u52d9\u7ba1\u7406\uff0c\u63d0\u5347\u6559\u5b78\u8cea\u91cf\u8207\u6539\u9769\u7ba1\u7406\uff0c\u512a\u5316\u5b78\u6821\u5e2b\u751f\u7684\u6574\u9ad4\u9ad4\u9a57\u3002"
                                    })
                                }), (0, Le.jsxs)("div", {
                                    className: "solution-systems",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                })
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "SMS\u5b78\u6821\u7ba1\u7406\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u5168\u9762\u5b78\u6821\u7ba1\u7406\u6574\u5408"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u5b78\u751f\u51fa\u5e2d\u7ba1\u7406"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u6559\u8077\u54e1\u5de5\u7ba1\u7406"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u6821\u5712\u8a2d\u65bd\u7ba1\u7406"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "system-item",
                                        children: [(0, Le.jsx)("div", {
                                            className: "system-icon",
                                            children: (0, Le.jsxs)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: [(0, Le.jsx)("path", {
                                                    d: "M12 14l9-5-9-5-9 5 9 5z"
                                                }), (0, Le.jsx)("path", {
                                                    d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                                }), (0, Le.jsx)("path", {
                                                    d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                                })]
                                            })
                                        }), (0, Le.jsx)("h4", {
                                            children: "\u5b78\u7fd2\u8a55\u4f30\u7cfb\u7d71"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u5168\u65b9\u4f4d\u5b78\u7fd2\u8a55\u4f30\u7cfb\u7d71"
                                        }), (0, Le.jsxs)("ul", {
                                            children: [(0, Le.jsx)("li", {
                                                children: "\u7dda\u4e0a\u8003\u8a66\u7cfb\u7d71"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u6210\u7e3e\u6578\u64da\u5206\u6790"
                                            }), (0, Le.jsx)("li", {
                                                children: "\u5b78\u751f\u5b78\u7fd2\u9032\u5ea6\u8ffd\u8e64"
                                            })]
                                        })]
                                    })]
                                }), (0, Le.jsx)("button", {
                                    className: "solution-cta",
                                    onClick: i,
                                    children: "\u700f\u89bd\u7522\u54c1\u8a73\u60c5"
                                }), (0, Le.jsx)("a", {
                                    href: "#",
                                    className: "more-solutions",
                                    onClick: e => {
                                        e.preventDefault(), i()
                                    },
                                    children: "7\u500b\u66f4\u591a\u89e3\u6c7a\u65b9\u6848 \u2192"
                                })]
                            })]
                        }), (0, Le.jsxs)("div", {
                            className: "custom-solution",
                            children: [(0, Le.jsx)("h3", {
                                children: "\u9700\u8981\u5b9a\u5236\u89e3\u6c7a\u65b9\u6848\uff1f"
                            }), (0, Le.jsx)("p", {
                                children: "\u6211\u5011\u63d0\u4f9b\u5b8c\u5168\u5ba2\u88fd\u5316\u7684\u7cfb\u7d71\u958b\u767c\u670d\u52d9\uff0c\u6839\u64da\u60a8\u7684\u771f\u5be6\u696d\u52d9\u9700\u6c42\u6253\u9020\u5c08\u5c6c\u7cfb\u7d71\u89e3\u6c7a\u65b9\u6848\u3002\u7121\u8ad6\u662f\u7279\u6b8a\u884c\u696d\u61c9\u7528\u9084\u662f\u5275\u65b0\u696d\u52d9\u6a21\u5f0f\uff0c\u6211\u5011\u90fd\u80fd\u70ba\u60a8\u91cf\u8eab\u5b9a\u5236\u3002"
                            }), (0, Le.jsx)("button", {
                                className: "contact-button",
                                onClick: i,
                                children: "\u806f\u7d61\u6211\u5011"
                            })]
                        })]
                    })]
                })
            },
            un = () => {
                const [e, t] = (0, n.useState)("packages"), r = [{
                    title: "\u9700\u6c42\u5206\u6790",
                    description: "\u6df1\u5165\u4e86\u89e3\u5ba2\u6236\u7684\u696d\u52d9\u6a21\u5f0f\u3001\u76ee\u6a19\u53d7\u773e\u548c\u7db2\u7ad9\u9700\u6c42",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        })
                    })
                }, {
                    title: "\u754c\u9762\u8a2d\u8a08",
                    description: "\u6839\u64da\u54c1\u724c\u5f62\u8c61\u5275\u5efa\u7368\u7279\u3001\u5438\u5f15\u4eba\u7684\u8996\u89ba\u8a2d\u8a08",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                        })
                    })
                }, {
                    title: "\u524d\u7aef\u958b\u767c",
                    description: "\u5c07\u8a2d\u8a08\u8f49\u5316\u70ba\u97ff\u61c9\u5f0f\u7db2\u9801\uff0c\u78ba\u4fdd\u826f\u597d\u7684\u7528\u6236\u9ad4\u9a57",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        })
                    })
                }, {
                    title: "\u5f8c\u7aef\u6574\u5408",
                    description: "\u958b\u767c\u529f\u80fd\u6027\u7d44\u4ef6\uff0c\u5982\u8868\u55ae\u3001\u6578\u64da\u5eab\u548c\u5167\u5bb9\u7ba1\u7406\u7cfb\u7d71",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                        })
                    })
                }, {
                    title: "\u6e2c\u8a66\u512a\u5316",
                    description: "\u78ba\u4fdd\u7db2\u7ad9\u5728\u5404\u7a2e\u8a2d\u5099\u548c\u700f\u89bd\u5668\u4e0a\u7684\u517c\u5bb9\u6027\u548c\u6027\u80fd",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        })
                    })
                }, {
                    title: "\u4e0a\u7dda\u7dad\u8b77",
                    description: "\u90e8\u7f72\u7db2\u7ad9\u4e26\u63d0\u4f9b\u6301\u7e8c\u7684\u6280\u8853\u652f\u6301\u548c\u7dad\u8b77\u670d\u52d9",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        })
                    })
                }], a = [{
                    title: "\u63d0\u5347\u54c1\u724c\u5f62\u8c61",
                    description: "\u5c08\u696d\u7684\u7db2\u7ad9\u8a2d\u8a08\u80fd\u5920\u5efa\u7acb\u4fe1\u4efb\u611f\uff0c\u63d0\u5347\u54c1\u724c\u50f9\u503c",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        })
                    })
                }, {
                    title: "\u5438\u5f15\u66f4\u591a\u5ba2\u6236",
                    description: "\u512a\u5316\u7684\u7db2\u7ad9\u80fd\u5920\u5438\u5f15\u66f4\u591a\u6f5b\u5728\u5ba2\u6236\u4e26\u63d0\u9ad8\u8f49\u5316\u7387",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        })
                    })
                }, {
                    title: "\u589e\u5f37\u7528\u6236\u9ad4\u9a57",
                    description: "\u76f4\u89c0\u7684\u754c\u9762\u8a2d\u8a08\u80fd\u63d0\u9ad8\u7528\u6236\u6eff\u610f\u5ea6\u548c\u7db2\u7ad9\u505c\u7559\u6642\u9593",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        })
                    })
                }, {
                    title: "\u63d0\u5347\u641c\u7d22\u6392\u540d",
                    description: "SEO\u512a\u5316\u7684\u7db2\u7ad9\u5728\u641c\u7d22\u5f15\u64ce\u4e2d\u7372\u5f97\u66f4\u9ad8\u7684\u66dd\u5149\u7387",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M13 10V3L4 14h7v7l9-11h-7z"
                        })
                    })
                }], l = ee(), i = () => {
                    l("/contact", {
                        replace: !0
                    })
                };
                return (0, Le.jsxs)("div", {
                    className: "webpage-container",
                    children: [(0, Le.jsx)(sn, {
                        title: "\u7db2\u7ad9\u958b\u767c",
                        description: "\u878d\u5408\u5275\u610f\u8a2d\u8a08\u8207\u524d\u6cbf\u6280\u8853\uff0c\u6253\u9020\u5f15\u4eba\u5165\u52dd\u7684\u7db2\u7ad9\u9ad4\u9a57\u3002\u5f9e\u4f01\u696d\u5b98\u7db2\u3001\u96fb\u5b50\u5546\u52d9\u5230\u6703\u54e1\u7cfb\u7d71\uff0c\u6bcf\u4e00\u500b\u9805\u76ee\u7686\u7cbe\u5fc3\u91cf\u8eab\u5b9a\u5236\uff0c\u78ba\u4fdd\u5b8c\u7f8e\u5448\u73fe\u54c1\u724c\u5f62\u8c61\u8207\u6838\u5fc3\u50f9\u503c\u3002\u63a1\u7528\u97ff\u61c9\u5f0f\u8a2d\u8a08\u5be6\u73fe\u8de8\u88dd\u7f6e\u81ea\u9069\u61c9\uff0c\u914d\u5408SEO\u512a\u5316\u3001\u591a\u8a9e\u8a00\u652f\u6301\u8207\u5168\u7403\u5316\u90e8\u7f72\uff0c\u8b93\u60a8\u7684\u7db2\u7ad9\u4e0d\u50c5\u7f8e\u89c0\u5be6\u7528\uff0c\u66f4\u80fd\u6709\u6548\u5438\u5f15\u76ee\u6a19\u5ba2\u7fa4\u4e26\u4fc3\u9032\u696d\u52d9\u589e\u9577\u3002",
                        image: "/images/webBanner.jpeg",
                        onLearnMore: i
                    }), (0, Le.jsxs)("div", {
                        className: "webpage-section service-intro-section compact",
                        children: [(0, Le.jsx)("h2", {
                            className: "section-title",
                            children: "\u7db2\u9801\u5b9a\u5236\u670d\u52d9"
                        }), (0, Le.jsxs)("div", {
                            className: "webpage-content compact",
                            children: [(0, Le.jsx)("div", {
                                className: "content-image compact",
                                children: (0, Le.jsx)("img", {
                                    src: "/images/imac-website-display.jpg",
                                    alt: "\u5c08\u696d\u7db2\u7ad9\u958b\u767c\u5c55\u793a",
                                    className: "real-device-photo"
                                })
                            }), (0, Le.jsx)("div", {
                                className: "content-text compact",
                                children: (0, Le.jsxs)("div", {
                                    className: "features-compact",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "feature-column",
                                        children: [(0, Le.jsxs)("div", {
                                            className: "feature-card",
                                            children: [(0, Le.jsx)("h3", {
                                                children: "\u5c08\u5c6c\u5ba2\u88fd\u5316\u65b9\u6848"
                                            }), (0, Le.jsx)("p", {
                                                children: "\u6839\u64da\u60a8\u4f01\u696d\u7684\u7368\u7279\u5b9a\u4f4d\u8207\u76ee\u6a19\u5ba2\u7fa4\uff0c\u6253\u9020\u5b8c\u7f8e\u5951\u5408\u696d\u52d9\u9700\u6c42\u7684\u5c08\u5c6c\u7db2\u7ad9\uff0c\u63d0\u5347\u54c1\u724c\u8b58\u5225\u5ea6\u3002"
                                            })]
                                        }), (0, Le.jsxs)("div", {
                                            className: "feature-card",
                                            children: [(0, Le.jsx)("h3", {
                                                children: "\u5f48\u6027\u958b\u767c\u6d41\u7a0b\u8207\u6210\u672c\u63a7\u5236"
                                            }), (0, Le.jsx)("p", {
                                                children: "\u5c08\u5c6c\u9805\u76ee\u7d93\u7406\u4e00\u5c0d\u4e00\u5168\u7a0b\u8ddf\u9032\uff0c\u958b\u767c\u904e\u7a0b\u9748\u6d3b\u8abf\u6574\uff0c\u78ba\u4fdd\u9805\u76ee\u9032\u5ea6\u3001\u9810\u7b97\u8207\u6210\u6548\u9054\u5230\u6700\u4f73\u5e73\u8861\u9ede\u3002"
                                            })]
                                        })]
                                    }), (0, Le.jsx)("div", {
                                        className: "feature-column",
                                        children: (0, Le.jsxs)("div", {
                                            className: "feature-card performance-card",
                                            children: [(0, Le.jsx)("h3", {
                                                children: "\u5353\u8d8a\u6027\u80fd\u8207\u6975\u81f4\u9ad4\u9a57"
                                            }), (0, Le.jsxs)("ul", {
                                                className: "feature-list-compact",
                                                children: [(0, Le.jsxs)("li", {
                                                    children: [(0, Le.jsx)("span", {
                                                        className: "feature-highlight",
                                                        children: "\u901f\u5ea6\u512a\u5316"
                                                    }), "\uff1a\u78ba\u4fdd\u7db2\u7ad9\u8fc5\u901f\u8f09\u5165"]
                                                }), (0, Le.jsxs)("li", {
                                                    children: [(0, Le.jsx)("span", {
                                                        className: "feature-highlight",
                                                        children: "\u5b89\u5168\u52a0\u56fa"
                                                    }), "\uff1a\u5168\u65b9\u4f4d\u7684\u5b89\u5168\u9632\u8b77"]
                                                }), (0, Le.jsxs)("li", {
                                                    children: [(0, Le.jsx)("span", {
                                                        className: "feature-highlight",
                                                        children: "\u7528\u6236\u5c0e\u5411"
                                                    }), "\uff1a\u8cbc\u5408\u76ee\u6a19\u53d7\u773e\u4f7f\u7528\u7fd2\u6163"]
                                                }), (0, Le.jsxs)("li", {
                                                    children: [(0, Le.jsx)("span", {
                                                        className: "feature-highlight",
                                                        children: "\u76f4\u89ba\u64cd\u4f5c"
                                                    }), "\uff1a\u7c21\u6f54\u660e\u4e86\u7684\u754c\u9762\u8a2d\u8a08"]
                                                }), (0, Le.jsxs)("li", {
                                                    children: [(0, Le.jsx)("span", {
                                                        className: "feature-highlight",
                                                        children: "\u5efa\u7acb\u4fe1\u4efb"
                                                    }), "\uff1a\u5c08\u696d\u8996\u89ba\u5448\u73fe\u8207\u6d41\u66a2\u9ad4\u9a57"]
                                                })]
                                            })]
                                        })
                                    })]
                                })
                            })]
                        })]
                    }), (0, Le.jsxs)("div", {
                        className: "webpage-section process-section",
                        children: [(0, Le.jsx)("h2", {
                            className: "section-title",
                            children: "\u6211\u5011\u7684\u7db2\u7ad9\u958b\u767c\u6d41\u7a0b"
                        }), (0, Le.jsx)("div", {
                            className: "process-flow-container",
                            children: r.map(((e, n) => (0, Le.jsxs)("div", {
                                className: "process-flow-step",
                                children: [(0, Le.jsx)("div", {
                                    className: "process-flow-icon",
                                    children: e.icon
                                }), (0, Le.jsx)("h3", {
                                    children: e.title
                                }), (0, Le.jsx)("p", {
                                    children: e.description
                                }), n < r.length - 1 && (0, Le.jsx)("div", {
                                    className: "process-flow-arrow",
                                    children: (0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        children: (0, Le.jsx)("path", {
                                            d: "M5 12h14M12 5l7 7-7 7",
                                            strokeWidth: "2",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                })]
                            }, n)))
                        })]
                    }), (0, Le.jsxs)("div", {
                        className: "webpage-section benefits-section",
                        children: [(0, Le.jsx)("h2", {
                            className: "section-title",
                            children: "\u5c08\u696d\u7db2\u7ad9\u70ba\u60a8\u5e36\u4f86\u7684\u512a\u52e2"
                        }), (0, Le.jsx)("div", {
                            className: "benefits-container",
                            children: a.map(((e, n) => (0, Le.jsxs)("div", {
                                className: "benefit-card",
                                children: [(0, Le.jsx)("div", {
                                    className: "benefit-icon",
                                    children: e.icon
                                }), (0, Le.jsx)("h3", {
                                    children: e.title
                                }), (0, Le.jsx)("p", {
                                    children: e.description
                                })]
                            }, n)))
                        })]
                    }), (0, Le.jsxs)("div", {
                        className: "webpage-section service-approach",
                        children: [(0, Le.jsx)("h2", {
                            className: "section-title",
                            children: "\u6211\u5011\u7684\u4e00\u5c0d\u4e00\u670d\u52d9\u65b9\u5f0f"
                        }), (0, Le.jsxs)("div", {
                            className: "approach-container",
                            children: [(0, Le.jsxs)("div", {
                                className: "approach-content",
                                children: [(0, Le.jsxs)("div", {
                                    className: "approach-item",
                                    children: [(0, Le.jsx)("h3", {
                                        children: "\u5c08\u5c6c\u9805\u76ee\u7d93\u7406\u5168\u7a0b\u8ddf\u9032"
                                    }), (0, Le.jsx)("p", {
                                        children: "\u5f9e\u9700\u6c42\u8a0e\u8ad6\u5230\u7db2\u7ad9\u4e0a\u7dda\uff0c\u5c08\u5c6c\u9805\u76ee\u7d93\u7406\u5168\u7a0b\u4e00\u5c0d\u4e00\u670d\u52d9\uff0c\u96a8\u6642\u89e3\u7b54\u7591\u554f"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "approach-item",
                                    children: [(0, Le.jsx)("h3", {
                                        children: "\u5b9a\u671f\u9032\u5ea6\u532f\u5831\u8207\u53cd\u994b"
                                    }), (0, Le.jsx)("p", {
                                        children: "\u958b\u767c\u904e\u7a0b\u4e2d\u5b9a\u671f\u532f\u5831\u9032\u5ea6\uff0c\u53ca\u6642\u6839\u64da\u60a8\u7684\u53cd\u994b\u9032\u884c\u8abf\u6574\uff0c\u78ba\u4fdd\u6700\u7d42\u6210\u679c\u7b26\u5408\u671f\u671b"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "approach-item",
                                    children: [(0, Le.jsx)("h3", {
                                        children: "\u4e0a\u7dda\u5f8c\u6301\u7e8c\u652f\u6301"
                                    }), (0, Le.jsx)("p", {
                                        children: "\u7db2\u7ad9\u4e0a\u7dda\u5f8c\u63d0\u4f9b\u6280\u8853\u652f\u6301\u548c\u7dad\u8b77\u670d\u52d9\uff0c\u78ba\u4fdd\u7db2\u7ad9\u7a69\u5b9a\u904b\u884c\u4e26\u4e0d\u65b7\u512a\u5316"
                                    })]
                                })]
                            }), (0, Le.jsx)("div", {
                                className: "approach-image",
                                children: (0, Le.jsx)("img", {
                                    src: "/images/one-on-one-consultation.jpg",
                                    alt: "\u5c08\u5c6c\u9805\u76ee\u7d93\u7406\u4e00\u5c0d\u4e00\u670d\u52d9",
                                    className: "service-real-photo"
                                })
                            })]
                        })]
                    }), (0, Le.jsxs)("div", {
                        className: "webpage-section pricing-section",
                        children: [(0, Le.jsx)("h2", {
                            className: "section-title",
                            children: "\u7db2\u7ad9\u958b\u767c\u670d\u52d9\u65b9\u6848"
                        }), (0, Le.jsxs)("div", {
                            className: "pricing-tabs",
                            children: [(0, Le.jsx)("button", {
                                className: "tab-button " + ("packages" === e ? "active" : ""),
                                onClick: () => t("packages"),
                                children: "\u6309\u898f\u6a21\u9078\u64c7"
                            }), (0, Le.jsx)("button", {
                                className: "tab-button " + ("industry" === e ? "active" : ""),
                                onClick: () => t("industry"),
                                children: "\u6309\u884c\u696d\u9078\u64c7"
                            })]
                        }), "packages" === e && (0, Le.jsx)("div", {
                            className: "integrated-packages",
                            children: (0, Le.jsx)("div", {
                                className: "packages-container",
                                children: [{
                                    name: "\u521d\u5275\u65b9\u6848",
                                    price: "$5888 \u8d77",
                                    description: "\u9069\u5408\u521d\u5275\u4f01\u696d\u548c\u5c0f\u578b\u7db2\u5e97\uff0c\u5feb\u901f\u5efa\u7acb\u7dda\u4e0a\u5f62\u8c61",
                                    includes: ["\u57fa\u672c\u97ff\u61c9\u5f0f\u7db2\u7ad9 (1-5\u9801)", "\u57df\u540d\u8a3b\u518a 1\u5e74 (.com/.hk)", "\u57fa\u672c\u8a17\u7ba1\u65b9\u6848 1\u5e74", "SSL\u8b49\u66f8\u5b89\u88dd", "\u57fa\u672cSEO\u512a\u5316", "\u7c21\u6613\u5167\u5bb9\u7ba1\u7406\u7cfb\u7d71", "Google Analytics\u6574\u5408", "\u806f\u7d61\u8868\u55ae\u8a2d\u7f6e"],
                                    features: {
                                        development: "\u4f7f\u7528\u73fe\u6210\u6a21\u677f\uff0c\u5feb\u901f\u5efa\u7ad9",
                                        design: "\u57fa\u672cUI\u8a2d\u8a08\uff0c\u7121UX\u898f\u5283",
                                        uniqueness: "\u4f4e\u5ea6\u5ba2\u88fd\u5316",
                                        seo: "\u57fa\u790e\u641c\u5c0b\u5f15\u64ce\u512a\u5316",
                                        maintenance: "\u57fa\u672c\u6280\u8853\u652f\u63f4 (1\u500b\u6708)",
                                        updates: "\u4e0a\u7dda\u5f8c\u53ef\u4fee\u65391\u6b21"
                                    },
                                    suitableFor: "\u5c0f\u578b\u7db2\u5e97\u3001\u521d\u5275\u4f01\u696d\u3001\u500b\u4eba\u54c1\u724c"
                                }, {
                                    name: "WordPress \u57fa\u790e\u65b9\u6848",
                                    price: "HK$2,800 \u8d77",
                                    description: "\u9069\u5408\u521d\u5275\u4f01\u696d\u8207\u500b\u4eba\uff0c\u5feb\u901f\u5efa\u7acb\u5c08\u696d\u7db2\u7ad9",
                                    includes: ["\u5c08\u696d\u97ff\u61c9\u5f0f\u7db2\u7ad9 (3\u9801)", "\u652f\u63f4\u4e00\u7a2e\u8a9e\u8a00 (\u984d\u5916\u8a9e\u8a00\u6bcf\u7a2e +30%)", "\u63d0\u4f9b1000+\u9ad8\u7d1a\u4e3b\u984c\u5ba2\u5316\u88fd\u4f5c", "\u652f\u63f4\u97ff\u61c9\u5f0f\u7db2\u9801\u8a2d\u8a08\uff08\u624b\u6a5f\u3001\u5e73\u677f\u548c\u96fb\u8166\u9069\u7528\uff09", "\u5167\u7f6e\u5f8c\u53f0 / \u5167\u5bb9\u7ba1\u7406\u7cfb\u7d71\uff08CMS\uff09", "\u652f\u63f4\u52d5\u614b\u6a6b\u984d", "\u5305\u62ec\u57fa\u672cSEO\u9801\u9762\u95dc\u9375\u5b57\u8a2d\u5b9a", "\u793e\u4ea4\u5a92\u9ad4\u6309\u9215\u9023\u7d50", "Google\u5730\u5716\u6574\u5408\u53ca\u9023\u7d50", "\u5efa\u7acb\u7d22\u5f15\u53ca\u63d0\u4ea4Google\u641c\u5c0b\u5f15\u64ce", "\u5305\u62ec\u514d\u6388\u6b0a\u5716\u7247", "\u514d\u8cbb\u9996\u5e74 .com \u57df\u540d\u8a3b\u518a\u8cbb", "\u514d\u8cbb\u9996\u5e74 SSL \u7db2\u7ad9\u5b89\u5168\u8a8d\u8b49", "\u570b\u969b\u96f2\u7aef\u7db2\u7ad9\u5bc4\u5b58\u670d\u52d9 50% \u6298\u6263"],
                                    features: {
                                        development: "WordPress\u5c08\u696d\u958b\u767c\uff0c\u5feb\u901f\u90e8\u7f72",
                                        design: "\u7cbe\u9078\u5c08\u696d\u4e3b\u984c\u8a2d\u8a08",
                                        uniqueness: "\u57fa\u672c\u5ba2\u88fd\u5316\uff0c\u7b26\u5408\u54c1\u724c\u5f62\u8c61",
                                        seo: "\u57fa\u790eSEO\u512a\u5316\u8a2d\u7f6e",
                                        maintenance: "\u6280\u8853\u652f\u6301\u8207\u7dad\u8b77 (\u4e09\u500b\u6708)"
                                    },
                                    suitableFor: "\u521d\u5275\u4f01\u696d\u3001\u500b\u4eba\u5c08\u696d\u4eba\u58eb\u3001\u5c0f\u578b\u4f01\u696d\u3001freelancer"
                                }, {
                                    name: "\u5546\u696d\u65b9\u6848",
                                    price: "$18,000 \u8d77",
                                    description: "\u9069\u5408\u4e2d\u5c0f\u578b\u4f01\u696d\uff0c\u5efa\u7acb\u5c08\u696d\u5f62\u8c61\u8207\u71df\u92b7\u5de5\u5177",
                                    includes: ["\u5c08\u696d\u97ff\u61c9\u5f0f\u7db2\u7ad9 (10-15\u9801)", "\u57df\u540d\u8a3b\u518a 1\u5e74 (.com/.hk)", "\u4f01\u696d\u8a17\u7ba1\u65b9\u6848 1\u5e74", "SSL\u8b49\u66f8\u5b89\u88dd", "Google Workspace\u57fa\u672c\u8a2d\u7f6e", "\u5167\u5bb9\u7ba1\u7406\u7cfb\u7d71", "\u8de8\u88dd\u7f6e\u6e2c\u8a66\u512a\u5316", "\u591a\u8a9e\u8a00\u652f\u6301 (2\u7a2e\u8a9e\u8a00)", "\u793e\u4ea4\u5a92\u9ad4\u6574\u5408", "\u9032\u968eSEO\u512a\u5316"],
                                    features: {
                                        development: "\u5ba2\u88fd\u5316\u958b\u767c\uff0c\u8996\u89ba\u8207\u529f\u80fd\u517c\u5177",
                                        design: "\u5c08\u696dUI/UX\u8a2d\u8a08",
                                        uniqueness: "\u4e2d\u5ea6\u5ba2\u88fd\u5316\uff0c\u7a81\u986f\u4f01\u696d\u7279\u8272",
                                        seo: "\u5b8c\u6574SEO\u7b56\u7565",
                                        maintenance: "\u6280\u8853\u652f\u6301\u8207\u7dad\u8b77 (\u516d\u500b\u6708)",
                                        updates: "\u4e0a\u7dda\u5f8c\u53ef\u4fee\u65393\u6b21\u5167\u5bb9\u66f4\u65b0"
                                    },
                                    suitableFor: "\u4e2d\u5c0f\u578b\u4f01\u696d\u3001\u5c08\u696d\u670d\u52d9\u516c\u53f8\u3001\u5730\u5340\u5546\u5bb6"
                                }].map(((e, n) => (0, Le.jsxs)("div", {
                                    className: "package-card " + (1 === n ? "featured" : ""),
                                    children: [1 === n && (0, Le.jsx)("div", {
                                        className: "featured-badge",
                                        children: "\u6700\u53d7\u6b61\u8fce"
                                    }), (0, Le.jsx)("h3", {
                                        className: "package-name",
                                        children: e.name
                                    }), (0, Le.jsx)("div", {
                                        className: "package-price",
                                        children: e.price
                                    }), (0, Le.jsx)("p", {
                                        className: "package-description",
                                        children: e.description
                                    }), (0, Le.jsx)("h4", {
                                        children: "\u5305\u542b\u670d\u52d9"
                                    }), (0, Le.jsx)("ul", {
                                        className: "package-includes",
                                        children: e.includes.map(((e, n) => (0, Le.jsx)("li", {
                                            children: e
                                        }, n)))
                                    }), (0, Le.jsx)("h4", {
                                        children: "\u65b9\u6848\u7279\u9ede"
                                    }), (0, Le.jsx)("table", {
                                        className: "package-features",
                                        children: (0, Le.jsxs)("tbody", {
                                            children: [(0, Le.jsxs)("tr", {
                                                children: [(0, Le.jsx)("td", {
                                                    children: "\u958b\u767c\u65b9\u5f0f"
                                                }), (0, Le.jsx)("td", {
                                                    children: e.features.development
                                                })]
                                            }), (0, Le.jsxs)("tr", {
                                                children: [(0, Le.jsx)("td", {
                                                    children: "\u8a2d\u8a08\u6c34\u5e73"
                                                }), (0, Le.jsx)("td", {
                                                    children: e.features.design
                                                })]
                                            }), (0, Le.jsxs)("tr", {
                                                children: [(0, Le.jsx)("td", {
                                                    children: "\u7368\u7279\u6027"
                                                }), (0, Le.jsx)("td", {
                                                    children: e.features.uniqueness
                                                })]
                                            }), (0, Le.jsxs)("tr", {
                                                children: [(0, Le.jsx)("td", {
                                                    children: "SEO\u512a\u5316"
                                                }), (0, Le.jsx)("td", {
                                                    children: e.features.seo
                                                })]
                                            }), (0, Le.jsxs)("tr", {
                                                children: [(0, Le.jsx)("td", {
                                                    children: "\u7dad\u8b77\u652f\u63f4"
                                                }), (0, Le.jsx)("td", {
                                                    children: e.features.maintenance
                                                })]
                                            }), (0, Le.jsxs)("tr", {
                                                children: [(0, Le.jsx)("td", {
                                                    children: "\u5167\u5bb9\u66f4\u65b0"
                                                }), (0, Le.jsx)("td", {
                                                    children: e.features.updates
                                                })]
                                            })]
                                        })
                                    }), (0, Le.jsxs)("div", {
                                        className: "package-suitable-for",
                                        children: [(0, Le.jsx)("h4", {
                                            children: "\u9069\u5408\u5c0d\u8c61"
                                        }), (0, Le.jsx)("p", {
                                            children: e.suitableFor
                                        })]
                                    }), (0, Le.jsx)("button", {
                                        className: "package-cta",
                                        onClick: i,
                                        children: "\u7acb\u5373\u8aee\u8a62"
                                    })]
                                }, n)))
                            })
                        }), "industry" === e && (0, Le.jsxs)("div", {
                            className: "industry-packages",
                            children: [(0, Le.jsx)("p", {
                                className: "industry-intro",
                                children: "\u6211\u5011\u91dd\u5c0d\u4e0d\u540c\u884c\u696d\u7684\u7279\u6b8a\u9700\u6c42\uff0c\u63d0\u4f9b\u5c08\u696d\u7684\u7db2\u7ad9\u89e3\u6c7a\u65b9\u6848\u3002\u6bcf\u500b\u884c\u696d\u65b9\u6848\u90fd\u5305\u542b\u57df\u540d\u8a3b\u518a\u3001\u7db2\u7ad9\u8a17\u7ba1\u3001SSL\u8b49\u66f8\u548c\u57fa\u672cSEO\u512a\u5316\uff0c\u4e26\u91dd\u5c0d\u884c\u696d\u7279\u6027\u589e\u52a0\u5c08\u5c6c\u529f\u80fd\u3002"
                            }), (0, Le.jsx)("div", {
                                className: "industry-packages-grid",
                                children: [{
                                    name: "\u9910\u5ef3\u7db2\u7ad9\u65b9\u6848",
                                    price: "$18,000 \u8d77",
                                    description: "\u5c08\u70ba\u9910\u98f2\u696d\u8a2d\u8a08\uff0c\u5c55\u793a\u83dc\u55ae\u4e26\u63a5\u6536\u8a02\u4f4d",
                                    features: ["\u5c08\u696d\u98df\u54c1\u651d\u5f71\u5c55\u793a", "\u7dda\u4e0a\u83dc\u55ae\u7cfb\u7d71", "\u8a02\u4f4d/\u5916\u8ce3\u8a02\u8cfc\u529f\u80fd", "\u9910\u5ef3\u4f4d\u7f6e\u5730\u5716\u6574\u5408", "\u9910\u5ef3\u6d3b\u52d5\u9801\u9762", "\u9867\u5ba2\u8a55\u50f9\u5c55\u793a", "\u8207\u5916\u8ce3\u5e73\u53f0\u9023\u7d50", "\u793e\u4ea4\u5a92\u9ad4\u6574\u5408"]
                                }, {
                                    name: "\u96fb\u5b50\u5546\u52d9\u65b9\u6848",
                                    price: "$38,000 \u8d77",
                                    description: "\u5c08\u696d\u7db2\u5e97\u89e3\u6c7a\u65b9\u6848\uff0c\u9ad8\u8f49\u5316\u7387\u8a2d\u8a08",
                                    features: ["\u7522\u54c1\u76ee\u9304\u7cfb\u7d71", "\u8cfc\u7269\u8eca\u8207\u7d50\u5e33\u529f\u80fd", "\u591a\u7a2e\u652f\u4ed8\u65b9\u5f0f\u6574\u5408", "\u5eab\u5b58\u7ba1\u7406\u7cfb\u7d71", "\u9867\u5ba2\u5e33\u6236\u529f\u80fd", "\u7522\u54c1\u8a55\u50f9\u7cfb\u7d71", "\u884c\u52d5\u88dd\u7f6e\u6700\u4f73\u5316\u8cfc\u7269\u9ad4\u9a57", "\u8a02\u55ae\u8ffd\u8e64\u7cfb\u7d71"]
                                }, {
                                    name: "\u5c08\u696d\u670d\u52d9\u65b9\u6848",
                                    price: "$25,000 \u8d77",
                                    description: "\u9069\u5408\u5f8b\u5e2b\u3001\u91ab\u751f\u7b49\u5c08\u696d\u670d\u52d9\u63d0\u4f9b\u8005",
                                    features: ["\u5c08\u696d\u5f62\u8c61\u5efa\u7acb", "\u670d\u52d9\u8a73\u60c5\u9801\u9762", "\u5c08\u696d\u8cc7\u683c\u8207\u8a8d\u8b49\u5c55\u793a", "\u6848\u4f8b\u7814\u7a76/\u5ba2\u6236\u898b\u8b49", "\u9810\u7d04\u7cfb\u7d71\u6574\u5408", "\u5c08\u696d\u6587\u7ae0\u767c\u5e03\u7cfb\u7d71", "\u5b89\u5168\u5ba2\u6236\u8cc7\u6599\u4fdd\u8b77", "FAQ\u8207\u77e5\u8b58\u5eab"]
                                }, {
                                    name: "\u6559\u80b2\u6a5f\u69cb\u65b9\u6848",
                                    price: "$32,000 \u8d77",
                                    description: "\u9069\u5408\u5b78\u6821\u3001\u88dc\u7fd2\u793e\u7b49\u6559\u80b2\u6a5f\u69cb",
                                    features: ["\u8ab2\u7a0b\u8207\u6d3b\u52d5\u65e5\u66c6", "\u6559\u5e2b/\u5c0e\u5e2b\u7c21\u4ecb", "\u5b78\u751f\u4f5c\u54c1\u5c55\u793a", "\u7dda\u4e0a\u5831\u540d\u7cfb\u7d71", "\u5b78\u6821\u65b0\u805e\u767c\u5e03", "\u6821\u5712\u865b\u64ec\u5c0e\u89bd", "\u5bb6\u9577/\u5b78\u751f\u5165\u53e3", "\u5167\u90e8\u901a\u8a0a\u6574\u5408"]
                                }].map(((e, n) => (0, Le.jsxs)("div", {
                                    className: "industry-package-card",
                                    children: [(0, Le.jsx)("h3", {
                                        children: e.name
                                    }), (0, Le.jsx)("div", {
                                        className: "industry-price",
                                        children: e.price
                                    }), (0, Le.jsx)("p", {
                                        className: "industry-description",
                                        children: e.description
                                    }), (0, Le.jsx)("h4", {
                                        children: "\u5c08\u5c6c\u529f\u80fd"
                                    }), (0, Le.jsx)("ul", {
                                        className: "industry-features",
                                        children: e.features.map(((e, n) => (0, Le.jsx)("li", {
                                            children: e
                                        }, n)))
                                    }), (0, Le.jsx)("button", {
                                        className: "industry-cta",
                                        onClick: i,
                                        children: "\u7372\u53d6\u8a73\u60c5"
                                    })]
                                }, n)))
                            }), (0, Le.jsxs)("div", {
                                className: "custom-industry-note",
                                children: [(0, Le.jsx)("h3", {
                                    children: "\u627e\u4e0d\u5230\u9069\u5408\u60a8\u884c\u696d\u7684\u65b9\u6848\uff1f"
                                }), (0, Le.jsx)("p", {
                                    children: "\u6211\u5011\u53ef\u70ba\u4efb\u4f55\u884c\u696d\u5b9a\u5236\u5c08\u5c6c\u7db2\u7ad9\u65b9\u6848\uff0c\u7acb\u5373\u806f\u7e6b\u6211\u5011\u8a0e\u8ad6\u60a8\u7684\u7368\u7279\u9700\u6c42\u3002"
                                }), (0, Le.jsx)("button", {
                                    className: "custom-industry-cta",
                                    onClick: i,
                                    children: "\u5b9a\u5236\u884c\u696d\u65b9\u6848"
                                })]
                            })]
                        }), (0, Le.jsxs)("div", {
                            className: "pricing-notes",
                            children: [(0, Le.jsx)("p", {
                                children: "* \u6240\u6709\u65b9\u6848\u5747\u53ef\u6839\u64da\u60a8\u7684\u5be6\u969b\u9700\u6c42\u9032\u884c\u5ba2\u88fd\u5316\u8abf\u6574"
                            }), (0, Le.jsx)("p", {
                                children: "* \u6240\u6709\u7db2\u7ad9\u65b9\u6848\u5747\u5305\u542b\u97ff\u61c9\u5f0f\u8a2d\u8a08\uff0c\u5728\u624b\u6a5f\u3001\u5e73\u677f\u548c\u96fb\u8166\u4e0a\u5747\u6709\u6700\u4f73\u986f\u793a\u6548\u679c"
                            }), (0, Le.jsx)("p", {
                                children: "* \u50f9\u683c\u53ef\u80fd\u56e0\u529f\u80fd\u8907\u96dc\u5ea6\u548c\u9700\u6c42\u8b8a\u66f4\u800c\u8abf\u6574"
                            })]
                        })]
                    })]
                })
            },
            dn = () => {
                const [e, t] = (0, n.useState)("scale"), r = [{
                    title: "\u9700\u6c42\u6e9d\u901a",
                    description: "\u6df1\u5165\u4e86\u89e3\u60a8\u7684\u696d\u52d9\u6a21\u5f0f\u8207\u9700\u6c42\uff0c\u660e\u78baAPP\u529f\u80fd\u8207\u76ee\u6a19",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u65b9\u6848\u8a2d\u8a08",
                    description: "\u63d0\u4f9b\u5c08\u696d\u6280\u8853\u89e3\u6c7a\u65b9\u6848\u8207\u5831\u50f9\uff0c\u78ba\u4fdd\u6210\u672c\u6548\u76ca\u6700\u5927\u5316",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u754c\u9762\u8a2d\u8a08",
                    description: "\u5275\u9020\u76f4\u89c0\u4e14\u5438\u5f15\u4eba\u7684\u7528\u6236\u754c\u9762\uff0c\u63d0\u5347\u7528\u6236\u9ad4\u9a57\u8207\u6eff\u610f\u5ea6",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u6280\u8853\u958b\u767c",
                    description: "\u5c08\u696d\u5718\u968a\u6839\u64da\u8a2d\u8a08\u898f\u683c\u9032\u884c\u7de8\u78bc\uff0c\u78ba\u4fdd\u529f\u80fd\u7a69\u5b9a\u8207\u5b89\u5168",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u6e2c\u8a66\u512a\u5316",
                    description: "\u5168\u9762\u6e2c\u8a66APP\u5404\u9805\u529f\u80fd\uff0c\u78ba\u4fdd\u904b\u884c\u9806\u66a2\u4e14\u7121\u7f3a\u9677",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u4e0a\u7dda\u90e8\u7f72",
                    description: "\u5354\u52a9APP\u5728\u5404\u5927\u61c9\u7528\u5546\u5e97\u4e0a\u7dda\uff0c\u8b93\u7528\u6236\u8f15\u9b06\u4e0b\u8f09\u4f7f\u7528",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M5 13l4 4L19 7",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u6301\u7e8c\u7dad\u8b77",
                    description: "\u63d0\u4f9b\u9577\u671f\u6280\u8853\u652f\u6301\u8207\u66f4\u65b0\u670d\u52d9\uff0c\u78ba\u4fddAPP\u6301\u7e8c\u7a69\u5b9a\u904b\u884c",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }], a = [{
                    title: "\u539f\u751fAPP",
                    description: "\u5c08\u70baiOS\u6216Android\u5e73\u53f0\u91cf\u8eab\u6253\u9020\u7684\u61c9\u7528\u7a0b\u5f0f",
                    features: ["\u5145\u5206\u5229\u7528\u8a2d\u5099\u786c\u4ef6\u6027\u80fd", "\u6d41\u66a2\u7684\u7528\u6236\u754c\u9762\u548c\u9ad4\u9a57", "\u66f4\u9ad8\u7684\u5b89\u5168\u6027\u8207\u7a69\u5b9a\u6027", "\u53ef\u6574\u5408\u8a2d\u5099\u7279\u6709\u529f\u80fd"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u6df7\u5408APP",
                    description: "\u4f7f\u7528Web\u6280\u8853\u958b\u767c\u4e26\u6253\u5305\u6210\u539f\u751f\u61c9\u7528",
                    features: ["\u8de8\u5e73\u53f0\u958b\u767c\uff0c\u4e00\u6b21\u7de8\u78bc\u591a\u8655\u904b\u884c", "\u958b\u767c\u6210\u672c\u8207\u6642\u9593\u8f03\u4f4e", "\u66f4\u65b0\u7dad\u8b77\u8f03\u70ba\u4fbf\u6377", "\u9069\u5408\u4e2d\u5c0f\u578b\u4f01\u696d\u61c9\u7528"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "Web APP",
                    description: "\u5728\u700f\u89bd\u5668\u4e2d\u904b\u884c\u7684\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f",
                    features: ["\u7121\u9700\u4e0b\u8f09\u5b89\u88dd\uff0c\u5373\u958b\u5373\u7528", "\u81ea\u52d5\u66f4\u65b0\uff0c\u7dad\u8b77\u7c21\u4fbf", "\u8de8\u5e73\u53f0\u517c\u5bb9\u6027\u4f73", "\u9069\u5408\u5167\u5bb9\u5c55\u793a\u578b\u61c9\u7528"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }], l = ee(), i = () => {
                    l("/contact", {
                        replace: !0
                    })
                }, s = [{
                    title: "\u96fb\u5546\u96f6\u552e",
                    price: "68,000",
                    description: "\u5c08\u70ba\u96fb\u5546\u548c\u96f6\u552e\u4f01\u696d\u6253\u9020\u7684\u79fb\u52d5\u5546\u57ce\u89e3\u6c7a\u65b9\u6848",
                    features: ["\u5b8c\u6574\u8cfc\u7269\u8eca\u8207\u652f\u4ed8\u529f\u80fd", "\u7522\u54c1\u76ee\u9304\u8207\u5206\u985e\u7ba1\u7406", "\u6703\u54e1\u7a4d\u5206\u8207\u512a\u60e0\u5238\u7cfb\u7d71", "\u8a02\u55ae\u8ffd\u8e64\u8207\u7269\u6d41\u67e5\u8a62", "\u5ba2\u6236\u8a55\u50f9\u8207\u4e92\u52d5\u529f\u80fd", "\u92b7\u552e\u6578\u64da\u5206\u6790\u5100\u8868\u677f", "\u5eab\u5b58\u7ba1\u7406\u8207\u63d0\u9192", "\u591a\u8a9e\u8a00\u8207\u8ca8\u5e63\u652f\u6301", "\u884c\u92b7\u6d3b\u52d5\u7ba1\u7406\u5de5\u5177"],
                    highlighted: !0,
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u9910\u98f2\u670d\u52d9",
                    price: "48,000",
                    description: "\u9910\u5ef3\u3001\u5496\u5561\u5ef3\u548c\u5916\u8ce3\u670d\u52d9\u7684\u5c08\u696dAPP\u89e3\u6c7a\u65b9\u6848",
                    features: ["\u5728\u7dda\u9ede\u9910\u8207\u652f\u4ed8\u529f\u80fd", "\u9910\u5ef3\u9810\u8a02\u7ba1\u7406\u7cfb\u7d71", "\u83dc\u55ae\u6578\u5b57\u5316\u5c55\u793a", "\u6703\u54e1\u7ba1\u7406\u8207\u7a4d\u5206\u734e\u52f5", "\u5916\u8ce3\u914d\u9001\u6d41\u7a0b\u8ffd\u8e64", "\u512a\u60e0\u6d3b\u52d5\u8207\u6298\u6263\u7ba1\u7406", "\u9867\u5ba2\u53cd\u994b\u8207\u8a55\u50f9\u7cfb\u7d71", "\u71df\u696d\u6578\u64da\u7d71\u8a08\u5206\u6790"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u91ab\u7642\u5065\u5eb7",
                    price: "128,000",
                    description: "\u91ab\u7642\u6a5f\u69cb\u548c\u5065\u5eb7\u670d\u52d9\u63d0\u4f9b\u5546\u7684\u5c08\u696dAPP\u89e3\u6c7a\u65b9\u6848",
                    features: ["\u7dda\u4e0a\u9810\u7d04\u8207\u639b\u865f\u7cfb\u7d71", "\u96fb\u5b50\u75c5\u6b77\u8207\u5c31\u8a3a\u7d00\u9304", "\u9060\u7a0b\u8996\u8a0a\u8a3a\u7642\u529f\u80fd", "\u8655\u65b9\u7ba1\u7406\u8207\u85e5\u7269\u63d0\u9192", "\u5065\u5eb7\u6578\u64da\u76e3\u6e2c\u8207\u8a18\u9304", "\u91ab\u60a3\u6e9d\u901a\u5373\u6642\u6d88\u606f", "\u6aa2\u67e5\u5831\u544a\u5728\u7dda\u67e5\u8a62", "\u91ab\u7642\u77e5\u8b58\u5eab\u8207\u8cc7\u8a0a", "\u96b1\u79c1\u5b89\u5168\u4fdd\u969c\u63aa\u65bd"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }];
                return (0, Le.jsxs)("div", {
                    className: "app-page-container",
                    children: [(0, Le.jsx)(sn, {
                        title: "APP\u958b\u767c",
                        description: "\u91cf\u8eab\u6253\u9020\u5c08\u5c6c\u884c\u52d5\u61c9\u7528\uff0c\u5f9e\u9700\u6c42\u5206\u6790\u3001UI/UX\u8a2d\u8a08\u5230\u529f\u80fd\u958b\u767c\u8207\u7dad\u8b77\uff0c\u4e00\u7ad9\u5f0f\u670d\u52d9\u6eff\u8db3\u5404\u985e\u5546\u696d\u9700\u6c42\u3002iOS\u8207Android\u96d9\u5e73\u53f0\u7121\u7e2b\u652f\u63f4\uff0c\u7d50\u5408\u6700\u65b0\u6280\u8853\u8207\u7528\u6236\u9ad4\u9a57\u8a2d\u8a08\uff0c\u70ba\u60a8\u7684\u54c1\u724c\u5275\u9020\u6975\u5177\u5438\u5f15\u529b\u7684\u6578\u4f4d\u8cc7\u7522\uff0c\u63d0\u5347\u7528\u6236\u9ecf\u8457\u5ea6\u8207\u8f49\u63db\u7387\u3002",
                        image: "/images/appBanner.jpeg",
                        onLearnMore: i
                    }), (0, Le.jsxs)("div", {
                        className: "app-section advantages-section",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                style: {
                                    fontSize: "1.8rem"
                                },
                                children: "\u5b9a\u5236\u958b\u767cAPP\u7684\u512a\u52e2"
                            }), (0, Le.jsx)("p", {
                                className: "section-subtitle",
                                style: {
                                    fontSize: "0.9rem"
                                },
                                children: "\u70ba\u4f55\u60a8\u7684\u4f01\u696d\u9700\u8981\u4e00\u6b3e\u5c08\u5c6cAPP\uff1f"
                            })]
                        }), (0, Le.jsxs)("div", {
                            className: "advantages-container",
                            children: [(0, Le.jsx)("div", {
                                className: "advantage-image",
                                children: (0, Le.jsxs)("div", {
                                    className: "app-showcase-gallery",
                                    children: [(0, Le.jsx)("img", {
                                        src: "/images/app-showcase1.jpg",
                                        alt: "APP\u5c55\u793a",
                                        className: "app-showcase-img single-app"
                                    }), (0, Le.jsx)("div", {
                                        className: "app-showcase-overlay"
                                    })]
                                })
                            }), (0, Le.jsxs)("div", {
                                className: "advantage-content",
                                children: [(0, Le.jsxs)("div", {
                                    className: "advantage-card",
                                    children: [(0, Le.jsx)("div", {
                                        className: "advantage-icon",
                                        children: (0, Le.jsx)("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: (0, Le.jsx)("path", {
                                                d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })
                                    }), (0, Le.jsxs)("div", {
                                        className: "advantage-text",
                                        children: [(0, Le.jsx)("h3", {
                                            children: "\u589e\u52a0\u696d\u52d9\u6536\u5165"
                                        }), (0, Le.jsx)("p", {
                                            children: "APP\u53ef\u4f5c\u70ba\u65b0\u7684\u92b7\u552e\u6e20\u9053\uff0c24\u5c0f\u6642\u4e0d\u9593\u65b7\u70ba\u4f01\u696d\u5275\u9020\u6536\u76ca\uff0c\u63d0\u9ad8\u5ba2\u6236\u8f49\u5316\u7387\u548c\u5fa9\u8cfc\u7387"
                                        })]
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "advantage-card",
                                    children: [(0, Le.jsx)("div", {
                                        className: "advantage-icon",
                                        children: (0, Le.jsx)("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: (0, Le.jsx)("path", {
                                                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })
                                    }), (0, Le.jsxs)("div", {
                                        className: "advantage-text",
                                        children: [(0, Le.jsx)("h3", {
                                            children: "\u63d0\u5347\u5ba2\u6236\u4e92\u52d5"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u901a\u904e\u63a8\u9001\u901a\u77e5\u3001\u6703\u54e1\u7a4d\u5206\u7b49\u529f\u80fd\u8207\u5ba2\u6236\u4fdd\u6301\u7dca\u5bc6\u806f\u7e6b\uff0c\u589e\u5f37\u54c1\u724c\u5fe0\u8aa0\u5ea6\u548c\u7528\u6236\u6d3b\u8e8d\u5ea6"
                                        })]
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "advantage-card",
                                    children: [(0, Le.jsx)("div", {
                                        className: "advantage-icon",
                                        children: (0, Le.jsx)("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: (0, Le.jsx)("path", {
                                                d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })
                                    }), (0, Le.jsxs)("div", {
                                        className: "advantage-text",
                                        children: [(0, Le.jsx)("h3", {
                                            children: "\u6578\u64da\u7cbe\u6e96\u5206\u6790"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u6536\u96c6\u7528\u6236\u884c\u70ba\u548c\u504f\u597d\u6578\u64da\uff0c\u70ba\u4f01\u696d\u6c7a\u7b56\u63d0\u4f9b\u6709\u529b\u652f\u6301\uff0c\u6709\u91dd\u5c0d\u6027\u5730\u512a\u5316\u7522\u54c1\u548c\u670d\u52d9"
                                        })]
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "advantage-card",
                                    children: [(0, Le.jsx)("div", {
                                        className: "advantage-icon",
                                        children: (0, Le.jsx)("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: (0, Le.jsx)("path", {
                                                d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })
                                    }), (0, Le.jsxs)("div", {
                                        className: "advantage-text",
                                        children: [(0, Le.jsx)("h3", {
                                            children: "\u6a39\u7acb\u5c08\u696d\u5f62\u8c61"
                                        }), (0, Le.jsx)("p", {
                                            children: "\u5b9a\u5236\u5316APP\u5c55\u73fe\u4f01\u696d\u5c08\u696d\u5f62\u8c61\uff0c\u63d0\u5347\u54c1\u724c\u8a8d\u77e5\u5ea6\u548c\u7f8e\u8b7d\u5ea6\uff0c\u5728\u7af6\u722d\u4e2d\u812b\u7a4e\u800c\u51fa"
                                        })]
                                    })]
                                })]
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "industry-highlights",
                            children: (0, Le.jsxs)("p", {
                                className: "highlight-text",
                                children: [(0, Le.jsx)("span", {
                                    className: "highlight",
                                    children: "\u6559\u80b2\u3001\u96fb\u5546\u3001\u91ab\u7642\u3001\u9910\u98f2\u3001\u91d1\u878d\u3001\u65c5\u904a\u3001\u623f\u7522\u3001\u6c7d\u8eca"
                                }), "\u7b49\u5404\u884c\u696d\u5747\u53ef\u901a\u904e\u5b9a\u5236APP\u5be6\u73fe\u6578\u5b57\u5316\u8f49\u578b\uff0c\u63d0\u5347\u904b\u71df\u6548\u7387"]
                            })
                        })]
                    }), (0, Le.jsxs)("div", {
                        className: "app-section types-section",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                style: {
                                    fontSize: "1.8rem"
                                },
                                children: "\u9078\u64c7\u66f4\u9069\u5408\u60a8\u7684APP\u985e\u578b"
                            }), (0, Le.jsx)("p", {
                                className: "section-subtitle",
                                style: {
                                    fontSize: "0.9rem"
                                },
                                children: "20\u5e74\u7d93\u9a57\uff0c\u70ba\u6578\u767e\u5bb6\u4f01\u696d\u63d0\u4f9b\u5c08\u5c6c\u61c9\u7528\u89e3\u6c7a\u65b9\u6848"
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "app-types-container",
                            children: a.map(((e, n) => (0, Le.jsxs)("div", {
                                className: "app-type-card",
                                children: [(0, Le.jsxs)("div", {
                                    className: "type-header",
                                    children: [(0, Le.jsx)("div", {
                                        className: "type-icon",
                                        children: e.icon
                                    }), (0, Le.jsx)("h3", {
                                        children: e.title
                                    })]
                                }), (0, Le.jsx)("p", {
                                    className: "type-description",
                                    children: e.description
                                }), (0, Le.jsx)("ul", {
                                    className: "type-features",
                                    children: e.features.map(((e, n) => (0, Le.jsx)("li", {
                                        children: e
                                    }, n)))
                                })]
                            }, n)))
                        }), (0, Le.jsxs)("div", {
                            className: "solutions-container",
                            children: [(0, Le.jsx)("div", {
                                className: "solutions-header",
                                children: (0, Le.jsx)("h3", {
                                    children: "\u6211\u5011\u63d0\u4f9b\u7684\u5b9a\u5236APP\u89e3\u6c7a\u65b9\u6848"
                                })
                            }), (0, Le.jsx)("div", {
                                className: "solutions-grid",
                                children: ["\u5546\u57ceAPP", "\u96fb\u5546\u5e73\u53f0", "\u5916\u8ce3\u9ede\u9910", "\u9810\u7d04\u7cfb\u7d71", "CRM\u5ba2\u6236\u7ba1\u7406", "OA\u8fa6\u516c\u7cfb\u7d71", "MRP\u751f\u7522\u7ba1\u7406", "\u5eab\u5b58\u7ba1\u7406", "\u793e\u4ea4\u4e92\u52d5", "\u8cc7\u8a0a\u95b1\u8b80", "\u91ab\u7642\u5065\u5eb7", "\u6559\u80b2\u57f9\u8a13"].map(((e, n) => (0, Le.jsx)("div", {
                                    className: "solution-item",
                                    children: (0, Le.jsx)("span", {
                                        children: e
                                    })
                                }, n)))
                            })]
                        })]
                    }), (0, Le.jsxs)("div", {
                        className: "app-section process-section",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                style: {
                                    fontSize: "1.8rem"
                                },
                                children: "APP\u958b\u767c\u6d41\u7a0b"
                            }), (0, Le.jsx)("p", {
                                className: "section-subtitle",
                                style: {
                                    fontSize: "0.9rem"
                                },
                                children: "\u4e00\u7ad9\u5f0f\u670d\u52d9\uff0c\u5168\u7a0b1\u5c0d1\u5c08\u4eba\u5c0d\u63a5\uff0c\u96a8\u6642\u8abf\u6574\u958b\u767c\u8a08\u756b"
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "process-timeline",
                            children: r.map(((e, n) => (0, Le.jsxs)("div", {
                                className: "process-step",
                                children: [(0, Le.jsx)("div", {
                                    className: "step-icon",
                                    children: e.icon
                                }), (0, Le.jsxs)("div", {
                                    className: "step-content",
                                    children: [(0, Le.jsx)("h3", {
                                        children: e.title
                                    }), (0, Le.jsx)("p", {
                                        children: e.description
                                    })]
                                }), (0, Le.jsx)("div", {
                                    className: "step-number",
                                    style: {
                                        display: "none"
                                    }
                                }), n < r.length - 1 && (0, Le.jsx)("div", {
                                    className: "step-connector",
                                    style: {
                                        display: "none"
                                    }
                                })]
                            }, n)))
                        }), (0, Le.jsxs)("div", {
                            className: "process-highlights",
                            children: [(0, Le.jsxs)("div", {
                                className: "process-highlight-item",
                                children: [(0, Le.jsx)("div", {
                                    className: "highlight-icon",
                                    children: (0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                }), (0, Le.jsx)("p", {
                                    children: "\u7701\u6642\u7701\u5fc3"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "process-highlight-item",
                                children: [(0, Le.jsx)("div", {
                                    className: "highlight-icon",
                                    children: (0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                }), (0, Le.jsx)("p", {
                                    children: "\u54c1\u8cea\u4fdd\u8b49"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "process-highlight-item",
                                children: [(0, Le.jsx)("div", {
                                    className: "highlight-icon",
                                    children: (0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                }), (0, Le.jsx)("p", {
                                    children: "\u6210\u672c\u53ef\u63a7"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "process-highlight-item",
                                children: [(0, Le.jsx)("div", {
                                    className: "highlight-icon",
                                    children: (0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M13 10V3L4 14h7v7l9-11h-7z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                }), (0, Le.jsx)("p", {
                                    children: "\u5feb\u901f\u4ea4\u4ed8"
                                })]
                            })]
                        })]
                    }), (0, Le.jsxs)("div", {
                        className: "app-section pricing-section",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                style: {
                                    fontSize: "1.8rem"
                                },
                                children: "\u7a0b\u5f0f\u958b\u767c\u670d\u52d9\u65b9\u6848"
                            }), (0, Le.jsx)("p", {
                                className: "section-subtitle",
                                style: {
                                    fontSize: "0.9rem"
                                },
                                children: "\u91cf\u8eab\u5b9a\u5236\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u6eff\u8db3\u4e0d\u540c\u898f\u6a21\u4f01\u696d\u7684\u7a0b\u5f0f\u958b\u767c\u9700\u6c42"
                            })]
                        }), (0, Le.jsxs)("div", {
                            className: "pricing-tabs",
                            children: [(0, Le.jsx)("button", {
                                className: "pricing-tab " + ("scale" === e ? "active" : ""),
                                onClick: () => t("scale"),
                                children: "\u6309\u898f\u6a21\u9078\u64c7"
                            }), (0, Le.jsx)("button", {
                                className: "pricing-tab " + ("industry" === e ? "active" : ""),
                                onClick: () => t("industry"),
                                children: "\u6309\u884c\u696d\u9078\u64c7"
                            })]
                        }), "scale" === e ? (0, Le.jsxs)("div", {
                            className: "pricing-cards-container",
                            children: [(0, Le.jsxs)("div", {
                                className: "pricing-card",
                                children: [(0, Le.jsxs)("div", {
                                    className: "pricing-card-header",
                                    children: [(0, Le.jsx)("h3", {
                                        children: "\u57fa\u790e\u65b9\u6848"
                                    }), (0, Le.jsxs)("div", {
                                        className: "pricing-amount",
                                        children: [(0, Le.jsx)("span", {
                                            className: "price",
                                            children: "$48,000"
                                        }), (0, Le.jsx)("span", {
                                            className: "term",
                                            children: "\u8d77"
                                        })]
                                    }), (0, Le.jsx)("p", {
                                        children: "\u9069\u5408\u5c0f\u578b\u4f01\u696d\u548c\u5275\u696d\u5718\u968a\uff0c\u5feb\u901f\u6253\u9020\u60a8\u7684\u7b2c\u4e00\u6b3eAPP"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "pricing-card-content",
                                    children: [(0, Le.jsx)("h4", {
                                        children: "\u5305\u542b\u670d\u52d9"
                                    }), (0, Le.jsxs)("ul", {
                                        className: "pricing-features",
                                        children: [(0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u5c08\u696dUI\u8a2d\u8a08 (5-8\u500b\u4e3b\u8981\u754c\u9762)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u57fa\u672c\u529f\u80fd\u958b\u767c (3-5\u500b\u6838\u5fc3\u529f\u80fd)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u7528\u6236\u8a3b\u518a\u8207\u767b\u9304\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u7c21\u6613\u7ba1\u7406\u5f8c\u53f0"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u55ae\u5e73\u53f0\u958b\u767c (iOS\u6216Android)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u57fa\u672c\u5b89\u5168\u63aa\u65bd\u8207\u4fdd\u8b77"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "APP\u5546\u5e97\u4e0a\u67b6\u5354\u52a9"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "3\u500b\u6708\u514d\u8cbb\u7dad\u8b77\u652f\u6301"]
                                        })]
                                    })]
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "pricing-card highlighted",
                                children: [(0, Le.jsx)("div", {
                                    className: "pricing-tag",
                                    children: "\u6700\u53d7\u6b61\u8fce"
                                }), (0, Le.jsxs)("div", {
                                    className: "pricing-card-header",
                                    children: [(0, Le.jsx)("h3", {
                                        children: "\u5c08\u696d\u65b9\u6848"
                                    }), (0, Le.jsxs)("div", {
                                        className: "pricing-amount",
                                        children: [(0, Le.jsx)("span", {
                                            className: "price",
                                            children: "$78,000"
                                        }), (0, Le.jsx)("span", {
                                            className: "term",
                                            children: "\u8d77"
                                        })]
                                    }), (0, Le.jsx)("p", {
                                        children: "\u9069\u5408\u4e2d\u578b\u4f01\u696d\uff0c\u63d0\u4f9b\u5168\u9762\u529f\u80fd\u8207\u96d9\u5e73\u53f0\u652f\u6301"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "pricing-card-content",
                                    children: [(0, Le.jsx)("h4", {
                                        children: "\u5305\u542b\u670d\u52d9"
                                    }), (0, Le.jsxs)("ul", {
                                        className: "pricing-features",
                                        children: [(0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u9ad8\u7d1aUI/UX\u8a2d\u8a08 (10-15\u500b\u754c\u9762)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u5168\u9762\u529f\u80fd\u958b\u767c (8-12\u500b\u529f\u80fd)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u8de8\u5e73\u53f0\u958b\u767c (iOS\u548cAndroid)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u5b8c\u6574\u5f8c\u53f0\u7ba1\u7406\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u652f\u4ed8\u7cfb\u7d71\u96c6\u6210"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u7528\u6236\u6578\u64da\u5206\u6790\u8207\u5831\u8868"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u591a\u5c64\u6b21\u5b89\u5168\u9632\u8b77\u63aa\u65bd"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u63a8\u9001\u901a\u77e5\u529f\u80fd"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "6\u500b\u6708\u514d\u8cbb\u7dad\u8b77\u652f\u6301"]
                                        })]
                                    })]
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "pricing-card",
                                children: [(0, Le.jsxs)("div", {
                                    className: "pricing-card-header",
                                    children: [(0, Le.jsx)("h3", {
                                        children: "\u4f01\u696d\u7d1a\u65b9\u6848"
                                    }), (0, Le.jsxs)("div", {
                                        className: "pricing-amount",
                                        children: [(0, Le.jsx)("span", {
                                            className: "price",
                                            children: "$128,000"
                                        }), (0, Le.jsx)("span", {
                                            className: "term",
                                            children: "\u8d77"
                                        })]
                                    }), (0, Le.jsx)("p", {
                                        children: "\u9069\u5408\u5927\u578b\u4f01\u696d\uff0c\u63d0\u4f9b\u9ad8\u6027\u80fd\u8207\u5168\u9762\u5b9a\u5236\u670d\u52d9"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "pricing-card-content",
                                    children: [(0, Le.jsx)("h4", {
                                        children: "\u5305\u542b\u670d\u52d9"
                                    }), (0, Le.jsxs)("ul", {
                                        className: "pricing-features",
                                        children: [(0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u9802\u7d1aUI/UX\u8a2d\u8a08 (\u7121\u9650\u5236\u754c\u9762)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u5168\u65b9\u4f4d\u529f\u80fd\u958b\u767c (\u7121\u9650\u5236)"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u8de8\u5e73\u53f0+\u7db2\u9801\u7248\u6574\u5408\u958b\u767c"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u9ad8\u7d1a\u5f8c\u53f0\u7ba1\u7406\u8207\u5206\u6790\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u591a\u7a2e\u652f\u4ed8\u65b9\u5f0f\u8207\u91d1\u6d41\u7cfb\u7d71"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "AI\u667a\u80fd\u63a8\u85a6\u8207\u500b\u6027\u5316"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u4f01\u696d\u7d1a\u5b89\u5168\u9632\u8b77\u8207\u8a8d\u8b49"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u7b2c\u4e09\u65b9\u7cfb\u7d71API\u6574\u5408"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "\u7dda\u4e0a\u5ba2\u670d\u8207\u804a\u5929\u529f\u80fd"]
                                        }), (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), "12\u500b\u6708\u514d\u8cbb\u7dad\u8b77\u652f\u6301"]
                                        })]
                                    })]
                                })]
                            })]
                        }) : (0, Le.jsx)("div", {
                            className: "pricing-cards-container",
                            children: s.map(((e, n) => (0, Le.jsxs)("div", {
                                className: "pricing-card " + (e.highlighted ? "highlighted" : ""),
                                children: [e.highlighted && (0, Le.jsx)("div", {
                                    className: "pricing-tag",
                                    children: "\u6700\u53d7\u6b61\u8fce"
                                }), (0, Le.jsxs)("div", {
                                    className: "pricing-card-header",
                                    children: [(0, Le.jsx)("div", {
                                        className: "industry-icon",
                                        children: e.icon
                                    }), (0, Le.jsx)("h3", {
                                        children: e.title
                                    }), (0, Le.jsxs)("div", {
                                        className: "pricing-amount",
                                        children: [(0, Le.jsxs)("span", {
                                            className: "price",
                                            children: ["$", e.price]
                                        }), (0, Le.jsx)("span", {
                                            className: "term",
                                            children: "\u8d77"
                                        })]
                                    }), (0, Le.jsx)("p", {
                                        children: e.description
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "pricing-card-content",
                                    children: [(0, Le.jsx)("h4", {
                                        children: "\u5305\u542b\u670d\u52d9"
                                    }), (0, Le.jsx)("ul", {
                                        className: "pricing-features",
                                        children: e.features.map(((e, n) => (0, Le.jsxs)("li", {
                                            children: [(0, Le.jsx)("svg", {
                                                viewBox: "0 0 24 24",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: "2",
                                                children: (0, Le.jsx)("path", {
                                                    d: "M5 13l4 4L19 7",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                })
                                            }), e]
                                        }, n)))
                                    })]
                                })]
                            }, n)))
                        }), (0, Le.jsxs)("div", {
                            className: "mobile-app-pricing-table",
                            children: [(0, Le.jsx)("h3", {
                                children: "APP\u958b\u767c\u53c3\u8003\u50f9\u683c"
                            }), (0, Le.jsx)("div", {
                                className: "table-responsive",
                                children: (0, Le.jsxs)("table", {
                                    className: "pricing-table",
                                    children: [(0, Le.jsx)("thead", {
                                        children: (0, Le.jsxs)("tr", {
                                            children: [(0, Le.jsx)("th", {
                                                children: "\u5c08\u6848\u985e\u578b"
                                            }), (0, Le.jsx)("th", {
                                                children: "\u50f9\u683c\u7bc4\u570d (HKD)"
                                            }), (0, Le.jsx)("th", {
                                                children: "\u958b\u767c\u6642\u9593"
                                            }), (0, Le.jsx)("th", {
                                                children: "\u5099\u8a3b"
                                            })]
                                        })
                                    }), (0, Le.jsxs)("tbody", {
                                        children: [(0, Le.jsxs)("tr", {
                                            children: [(0, Le.jsx)("td", {
                                                children: "\u57fa\u672c\u61c9\u7528 (\u55ae\u5e73\u53f0)"
                                            }), (0, Le.jsx)("td", {
                                                children: "$80,000-$150,000"
                                            }), (0, Le.jsx)("td", {
                                                children: "8-12\u9031"
                                            }), (0, Le.jsx)("td", {
                                                children: "\u7c21\u55ae\u529f\u80fd\uff0c\u57fa\u672cUI"
                                            })]
                                        }), (0, Le.jsxs)("tr", {
                                            children: [(0, Le.jsx)("td", {
                                                children: "\u4e2d\u578b\u61c9\u7528 (\u55ae\u5e73\u53f0)"
                                            }), (0, Le.jsx)("td", {
                                                children: "$150,000-$300,000"
                                            }), (0, Le.jsx)("td", {
                                                children: "12-20\u9031"
                                            }), (0, Le.jsx)("td", {
                                                children: "\u4e2d\u7b49\u8907\u96dc\u5ea6\uff0c\u81ea\u5b9a\u7fa9UI"
                                            })]
                                        }), (0, Le.jsxs)("tr", {
                                            children: [(0, Le.jsx)("td", {
                                                children: "\u8de8\u5e73\u53f0\u61c9\u7528"
                                            }), (0, Le.jsx)("td", {
                                                children: "$200,000-$500,000+"
                                            }), (0, Le.jsx)("td", {
                                                children: "16-30\u9031"
                                            }), (0, Le.jsx)("td", {
                                                children: "iOS & Android\uff0c\u5b8c\u6574\u529f\u80fd"
                                            })]
                                        }), (0, Le.jsxs)("tr", {
                                            children: [(0, Le.jsx)("td", {
                                                children: "\u4f01\u696d\u7d1a\u61c9\u7528"
                                            }), (0, Le.jsx)("td", {
                                                children: "$300,000-$800,000+"
                                            }), (0, Le.jsx)("td", {
                                                children: "20-40\u9031"
                                            }), (0, Le.jsx)("td", {
                                                children: "\u9ad8\u5b89\u5168\u6027\uff0c\u8907\u96dc\u5f8c\u7aef\u6574\u5408"
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        }), (0, Le.jsxs)("div", {
                            className: "tech-solutions-container",
                            children: [(0, Le.jsx)("h3", {
                                children: "\u6211\u5011\u64c5\u9577\u7684\u6280\u8853\u9818\u57df"
                            }), (0, Le.jsxs)("div", {
                                className: "tech-solutions-grid",
                                children: [(0, Le.jsxs)("div", {
                                    className: "tech-solution-item",
                                    children: [(0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), (0, Le.jsx)("span", {
                                        children: "\u4f01\u696dERP\u7cfb\u7d71"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-solution-item",
                                    children: [(0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), (0, Le.jsx)("span", {
                                        children: "\u96fb\u5546\u7cfb\u7d71\u958b\u767c"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-solution-item",
                                    children: [(0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), (0, Le.jsx)("span", {
                                        children: "\u652f\u4ed8\u7cfb\u7d71\u96c6\u6210"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-solution-item",
                                    children: [(0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), (0, Le.jsx)("span", {
                                        children: "\u5373\u6642\u901a\u8a0a\u61c9\u7528"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-solution-item",
                                    children: [(0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), (0, Le.jsx)("span", {
                                        children: "\u7db2\u7d61\u5b89\u5168\u65b9\u6848"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-solution-item",
                                    children: [(0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), (0, Le.jsx)("span", {
                                        children: "\u641c\u7d22\u5f15\u64ce\u958b\u767c"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-solution-item",
                                    children: [(0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), (0, Le.jsx)("span", {
                                        children: "\u6578\u64da\u5eab\u8a2d\u8a08"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-solution-item",
                                    children: [(0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    }), (0, Le.jsx)("span", {
                                        children: "\u6578\u64da\u5206\u6790\u5e73\u53f0"
                                    })]
                                })]
                            })]
                        }), (0, Le.jsxs)("div", {
                            className: "pricing-note",
                            children: [(0, Le.jsx)("p", {
                                children: "\u203b \u5be6\u969b\u50f9\u683c\u5c07\u6839\u64da\u60a8\u7684\u5177\u9ad4\u9700\u6c42\u548c\u529f\u80fd\u8907\u96dc\u5ea6\u9032\u884c\u8abf\u6574\uff0c\u8acb\u8207\u6211\u5011\u806f\u7e6b\u7372\u53d6\u7cbe\u6e96\u5831\u50f9"
                            }), (0, Le.jsxs)("button", {
                                className: "contact-quote-button",
                                onClick: i,
                                children: [(0, Le.jsx)("svg", {
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: (0, Le.jsx)("path", {
                                        d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    })
                                }), "\u7372\u53d6\u5c08\u5c6c\u5831\u50f9"]
                            })]
                        })]
                    })]
                })
            },
            hn = () => {
                const [e, t] = (0, n.useState)("seo"), r = ee(), a = () => {
                    r("/contact", {
                        replace: !0
                    })
                }, l = [{
                    title: "\u63d0\u5347\u7db2\u7ad9\u6392\u540d",
                    description: "\u8b93\u60a8\u7684\u7db2\u7ad9\u5728Google\u3001\u767e\u5ea6\u7b49\u641c\u5c0b\u5f15\u64ce\u7684\u81ea\u7136\u6392\u540d\u4e2d\u540d\u5217\u524d\u8305\uff0c\u7372\u5f97\u6e90\u6e90\u4e0d\u7d55\u7684\u514d\u8cbb\u6d41\u91cf",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u589e\u52a0\u76ee\u6a19\u8a2a\u5ba2",
                    description: "\u5438\u5f15\u771f\u6b63\u5c0d\u60a8\u7684\u7522\u54c1\u6216\u670d\u52d9\u611f\u8208\u8da3\u7684\u6f5b\u5728\u5ba2\u6236\uff0c\u63d0\u9ad8\u7db2\u7ad9\u8f49\u5316\u7387\u548c\u6295\u8cc7\u56de\u5831\u7387",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u5efa\u7acb\u54c1\u724c\u6b0a\u5a01",
                    description: "\u5728\u641c\u5c0b\u7d50\u679c\u4e2d\u7684\u512a\u52e2\u5730\u4f4d\u4e0d\u50c5\u5e36\u4f86\u6d41\u91cf\uff0c\u9084\u589e\u5f37\u4e86\u54c1\u724c\u7684\u53ef\u4fe1\u5ea6\u548c\u884c\u696d\u6b0a\u5a01\u6027",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }], i = [{
                    title: "\u7acb\u5373\u63d0\u5347\u66dd\u5149",
                    description: "\u4e0d\u540c\u65bcSEO\u9700\u8981\u6642\u9593\u7a4d\u7d2f\uff0cSEM\u5ee3\u544a\u8b93\u60a8\u7684\u7db2\u7ad9\u7acb\u523b\u51fa\u73fe\u5728\u641c\u7d22\u7d50\u679c\u7684\u6700\u986f\u773c\u4f4d\u7f6e",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M13 10V3L4 14h7v7l9-11h-7z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u7cbe\u6e96\u76ee\u6a19\u5ba2\u6236",
                    description: "\u901a\u904e\u95dc\u9375\u8a5e\u3001\u5730\u7406\u4f4d\u7f6e\u3001\u88dd\u7f6e\u3001\u6642\u9593\u7b49\u591a\u7dad\u5ea6\u5b9a\u4f4d\uff0c\u78ba\u4fdd\u5ee3\u544a\u5c55\u793a\u7d66\u6700\u6709\u53ef\u80fd\u8f49\u5316\u7684\u6f5b\u5728\u5ba2\u6236",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u7cbe\u78ba\u9810\u7b97\u63a7\u5236",
                    description: "\u5b8c\u5168\u638c\u63a7\u6bcf\u65e5\u5ee3\u544a\u652f\u51fa\uff0c\u6309\u9ede\u64ca\u4ed8\u8cbb\u6a21\u5f0f\u78ba\u4fdd\u60a8\u53ea\u70ba\u5be6\u969b\u7684\u8a2a\u5ba2\u6d41\u91cf\u4ed8\u8cbb",
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }], s = [{
                    title: "\u7db2\u7ad9\u8a3a\u65b7\u5206\u6790",
                    description: "\u5168\u9762\u8a55\u4f30\u60a8\u7db2\u7ad9\u76ee\u524d\u7684SEO\u72c0\u6cc1\uff0c\u767c\u73fe\u554f\u984c\u548c\u6a5f\u6703",
                    details: ["\u6280\u8853SEO\u5be9\u67e5\uff08\u7db2\u7ad9\u7d50\u69cb\u3001\u52a0\u8f09\u901f\u5ea6\u3001\u79fb\u52d5\u9069\u914d\u6027\uff09", "\u95dc\u9375\u8a5e\u5b9a\u4f4d\u8207\u7af6\u722d\u5206\u6790", "\u5167\u5bb9\u8cea\u91cf\u8a55\u4f30", "\u5916\u90e8\u93c8\u63a5\u6a94\u6848\u5206\u6790", "\u7528\u6236\u9ad4\u9a57\u6e2c\u8a66"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u6230\u7565\u898f\u5283\u5236\u5b9a",
                    description: "\u6839\u64da\u5206\u6790\u7d50\u679c\uff0c\u70ba\u60a8\u91cf\u8eab\u5b9a\u5236\u5168\u9762\u7684SEO\u512a\u5316\u7b56\u7565",
                    details: ["\u6838\u5fc3\u95dc\u9375\u8a5e\u9078\u64c7\u8207\u4f48\u5c40", "\u5167\u5bb9\u5275\u4f5c\u8207\u512a\u5316\u8a08\u5283", "\u6280\u8853\u554f\u984c\u4fee\u5fa9\u8def\u7dda\u5716", "\u93c8\u63a5\u5efa\u8a2d\u7b56\u7565", "\u672c\u5730SEO\uff08\u5982\u9069\u7528\uff09\u512a\u5316\u65b9\u6848"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u6280\u8853SEO\u512a\u5316",
                    description: "\u78ba\u4fdd\u60a8\u7684\u7db2\u7ad9\u5f9e\u6280\u8853\u5c64\u9762\u5b8c\u5168\u7b26\u5408\u641c\u7d22\u5f15\u64ce\u7684\u6a19\u6e96",
                    details: ["\u7db2\u7ad9\u7d50\u69cb\u512a\u5316\u8207\u7db2\u7ad9\u5730\u5716\u63d0\u4ea4", "\u9801\u9762\u52a0\u8f09\u901f\u5ea6\u512a\u5316", "\u79fb\u52d5\u7aef\u517c\u5bb9\u6027\u63d0\u5347", "HTTP\u72c0\u614b\u78bc\u4fee\u6b63", "URL\u7d50\u69cb\u512a\u5316\u8207\u91cd\u5b9a\u5411\u8a2d\u7f6e"],
                    icon: (0, Le.jsxs)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: [(0, Le.jsx)("path", {
                            d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }), (0, Le.jsx)("path", {
                            d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })]
                    })
                }, {
                    title: "\u5167\u5bb9\u512a\u5316\u8207\u5275\u4f5c",
                    description: "\u958b\u767c\u9ad8\u54c1\u8cea\u3001\u91dd\u5c0d\u95dc\u9375\u8a5e\u512a\u5316\u7684\u5167\u5bb9\uff0c\u5438\u5f15\u8a2a\u5ba2\u548c\u641c\u7d22\u5f15\u64ce",
                    details: ["\u73fe\u6709\u9801\u9762\u5167\u5bb9\u512a\u5316\uff08Meta\u6a19\u7c64\u3001\u6a19\u984c\u3001\u63cf\u8ff0\uff09", "\u9ad8\u8cea\u91cf\u539f\u5275\u6587\u7ae0\u548c\u535a\u5ba2\u64b0\u5beb", "\u591a\u5a92\u9ad4\u5167\u5bb9\uff08\u5716\u7247\u3001\u8996\u983b\u3001\u4fe1\u606f\u5716\uff09\u512a\u5316", "\u5167\u90e8\u93c8\u63a5\u7d50\u69cb\u6539\u9032", "\u7528\u6236\u610f\u5716\u5339\u914d\u5ea6\u63d0\u5347"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u5916\u90e8\u93c8\u63a5\u5efa\u8a2d",
                    description: "\u901a\u904e\u9ad8\u8cea\u91cf\u7684\u5916\u90e8\u93c8\u63a5\u63d0\u5347\u60a8\u7db2\u7ad9\u7684\u6b0a\u5a01\u6027\u548c\u53ef\u4fe1\u5ea6",
                    details: ["\u9ad8\u8cea\u91cf\u53cd\u5411\u93c8\u63a5\u7372\u53d6", "\u793e\u4ea4\u5a92\u9ad4\u4fe1\u865f\u512a\u5316", "\u884c\u696d\u76ee\u9304\u63d0\u4ea4\u8207\u7ba1\u7406", "PR\u767c\u5e03\u8207\u5a92\u9ad4\u66dd\u5149", "\u7af6\u722d\u5c0d\u624b\u93c8\u63a5\u5206\u6790\u8207\u6a5f\u6703\u628a\u63e1"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u6548\u679c\u76e3\u6e2c\u8207\u5831\u544a",
                    description: "\u6301\u7e8c\u8ffd\u8e64\u3001\u5206\u6790\u548c\u5831\u544a\u60a8\u7db2\u7ad9\u5728SEO\u65b9\u9762\u7684\u8868\u73fe",
                    details: ["\u95dc\u9375\u8a5e\u6392\u540d\u76e3\u63a7", "\u6d41\u91cf\u5206\u6790\u8207\u7528\u6236\u884c\u70ba\u7814\u7a76", "\u8f49\u5316\u7387\u8ffd\u8e64\u8207\u512a\u5316", "\u6bcf\u6708\u5c08\u696dSEO\u5831\u544a", "ROI\u5206\u6790\u8207\u7b56\u7565\u8abf\u6574"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }], o = [{
                    title: "\u5ee3\u544a\u9700\u6c42\u5206\u6790",
                    description: "\u6df1\u5165\u4e86\u89e3\u60a8\u7684\u696d\u52d9\u76ee\u6a19\u3001\u76ee\u6a19\u53d7\u773e\u548c\u95dc\u9375\u7e3e\u6548\u6307\u6a19",
                    details: ["\u696d\u52d9\u76ee\u6a19\u8207\u5ee3\u544a\u9810\u671f\u660e\u78ba\u5316", "\u76ee\u6a19\u53d7\u773e\u4eba\u7fa4\u756b\u50cf\u5206\u6790", "\u7af6\u722d\u5c0d\u624b\u5ee3\u544a\u7b56\u7565\u7814\u7a76", "\u9810\u7b97\u8a55\u4f30\u8207ROI\u76ee\u6a19\u8a2d\u5b9a", "\u5ee3\u544a\u5e73\u53f0\u9078\u64c7\u8a55\u4f30"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M8 16l2.879-2.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242zM21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u95dc\u9375\u8a5e\u7814\u7a76\u8207\u898f\u5283",
                    description: "\u767c\u6398\u9ad8\u50f9\u503c\u95dc\u9375\u8a5e\uff0c\u8a2d\u8a08\u7d50\u69cb\u5408\u7406\u7684\u5ee3\u544a\u7cfb\u5217\u67b6\u69cb",
                    details: ["\u7af6\u722d\u6027\u8207\u5546\u696d\u610f\u5716\u95dc\u9375\u8a5e\u7814\u7a76", "\u9577\u5c3e\u95dc\u9375\u8a5e\u6a5f\u6703\u767c\u6398", "\u5426\u5b9a\u95dc\u9375\u8a5e\u6e05\u55ae\u5efa\u7acb", "\u95dc\u9375\u8a5e\u5206\u7d44\u8207\u5339\u914d\u65b9\u5f0f\u7b56\u7565", "\u5ee3\u544a\u7cfb\u5217\u8207\u5ee3\u544a\u7d44\u67b6\u69cb\u8a2d\u8a08"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u5ee3\u544a\u5275\u610f\u88fd\u4f5c",
                    description: "\u958b\u767c\u5438\u5f15\u4eba\u7684\u5ee3\u544a\u6587\u6848\u3001\u6a19\u984c\u548c\u64f4\u5c55\uff0c\u63d0\u9ad8\u9ede\u64ca\u7387",
                    details: ["\u5f15\u4eba\u6ce8\u76ee\u7684\u5ee3\u544a\u6a19\u984c\u5275\u4f5c", "\u8aaa\u670d\u529b\u5f37\u7684\u5ee3\u544a\u63cf\u8ff0\u64b0\u5beb", "\u591a\u7a2e\u5ee3\u544a\u64f4\u5c55\u8a2d\u7f6e", "A/B\u6e2c\u8a66\u6587\u6848\u8a2d\u8a08", "\u7b26\u5408\u5e73\u53f0\u898f\u7bc4\u7684\u5ee3\u544a\u5275\u610f\u5be9\u6838"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u843d\u5730\u9801\u512a\u5316",
                    description: "\u78ba\u4fdd\u5ee3\u544a\u6307\u5411\u7684\u9801\u9762\u80fd\u5920\u6700\u5927\u5316\u8f49\u5316\u7387",
                    details: ["\u5ee3\u544a\u8207\u843d\u5730\u9801\u5167\u5bb9\u4e00\u81f4\u6027\u6aa2\u67e5", "\u843d\u5730\u9801\u52a0\u8f09\u901f\u5ea6\u512a\u5316", "\u884c\u52d5\u88dd\u7f6e\u9ad4\u9a57\u512a\u5316", "\u8f49\u5316\u8981\u7d20\u4f48\u5c40\u512a\u5316", "A/B\u6e2c\u8a66\u4e0d\u540c\u843d\u5730\u9801\u7248\u672c"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u7af6\u50f9\u8207\u9810\u7b97\u7ba1\u7406",
                    description: "\u512a\u5316\u7af6\u50f9\u7b56\u7565\u548c\u9810\u7b97\u5206\u914d\uff0c\u5be6\u73fe\u6700\u4f73ROI",
                    details: ["\u667a\u80fd\u51fa\u50f9\u7b56\u7565\u8a2d\u7f6e", "\u9810\u7b97\u5206\u914d\u512a\u5316", "\u7af6\u50f9\u8abf\u6574\u56e0\u7d20\u4f7f\u7528", "\u65e5\u9593/\u5468\u9593\u51fa\u50f9\u8abf\u6574", "\u8f49\u5316\u50f9\u503c\u8ffd\u8e64\u8207\u512a\u5316"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }, {
                    title: "\u5b9a\u671f\u512a\u5316\u8207\u5831\u544a",
                    description: "\u6301\u7e8c\u76e3\u63a7\u3001\u512a\u5316\u548c\u5831\u544a\u5ee3\u544a\u6d3b\u52d5\u8868\u73fe",
                    details: ["\u95dc\u9375\u6307\u6a19\u8ffd\u8e64\u8207\u5206\u6790", "\u7af6\u722d\u5c0d\u624b\u52d5\u614b\u76e3\u63a7", "\u8cea\u91cf\u5f97\u5206\u63d0\u5347\u512a\u5316", "\u5ee3\u544a\u7cfb\u5217\u6027\u80fd\u6578\u64da\u5831\u544a", "\u6301\u7e8cA/B\u6e2c\u8a66\u8207\u512a\u5316"],
                    icon: (0, Le.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        children: (0, Le.jsx)("path", {
                            d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        })
                    })
                }];
                return (0, Le.jsxs)("div", {
                    className: "seo-sem-page",
                    children: [(0, Le.jsx)(sn, {
                        title: "\u641c\u7d22\u5f15\u64ce\u71df\u92b7\u670d\u52d9",
                        description: "\u6574\u5408SEO\u81ea\u7136\u641c\u7d22\u512a\u5316\u8207SEM\u4ed8\u8cbb\u63a8\u5ee3\u7b56\u7565\uff0c\u6253\u9020\u5168\u65b9\u4f4d\u641c\u7d22\u5f15\u64ce\u884c\u92b7\u65b9\u6848\u3002\u900f\u904e\u95dc\u9375\u5b57\u5206\u6790\u3001\u7af6\u54c1\u7814\u7a76\u3001\u5167\u5bb9\u512a\u5316\u8207\u7cbe\u6e96\u6295\u653e\uff0c\u63d0\u5347\u54c1\u724c\u5728\u641c\u7d22\u7d50\u679c\u7684\u66dd\u5149\u7387\u8207\u6392\u540d\uff0c\u5c07\u6f5b\u5728\u5ba2\u6236\u5f15\u5c0e\u81f3\u60a8\u7684\u7db2\u7ad9\uff0c\u6700\u5927\u5316\u8f49\u5316\u7387\u8207\u6295\u8cc7\u56de\u5831\u3002",
                        image: "/images/SemBanner.png"
                    }), (0, Le.jsx)("div", {
                        className: "seo-stats-container",
                        children: (0, Le.jsxs)("div", {
                            className: "seo-stats-wrap",
                            children: [(0, Le.jsxs)("div", {
                                className: "stats-tabs",
                                children: [(0, Le.jsx)("button", {
                                    className: "stats-tab " + ("seo" === e ? "active" : ""),
                                    onClick: () => t("seo"),
                                    children: "SEO \u6578\u64da\u6d1e\u5bdf"
                                }), (0, Le.jsx)("button", {
                                    className: "stats-tab " + ("sem" === e ? "active" : ""),
                                    onClick: () => t("sem"),
                                    children: "SEM \u6578\u64da\u6d1e\u5bdf"
                                })]
                            }), (0, Le.jsx)("div", {
                                className: "stats-content",
                                children: "seo" === e ? (0, Le.jsx)("div", {
                                    className: "stats-grid",
                                    children: [{
                                        value: "93%",
                                        label: "\u7684\u7db2\u7d61\u9ad4\u9a57\u59cb\u65bc\u641c\u7d22\u5f15\u64ce"
                                    }, {
                                        value: "75%",
                                        label: "\u7684\u7528\u6236\u4e0d\u6703\u9ede\u64ca\u7b2c\u4e8c\u9801\u7d50\u679c"
                                    }, {
                                        value: "70-80%",
                                        label: "\u7684\u7528\u6236\u5ffd\u7565\u4ed8\u8cbb\u5ee3\u544a\uff0c\u5c08\u6ce8\u81ea\u7136\u641c\u7d22\u7d50\u679c"
                                    }, {
                                        value: "10x",
                                        label: "\u81ea\u7136\u6d41\u91cf\u8f49\u5316\u7387\u9ad8\u65bc\u793e\u4ea4\u5a92\u9ad4"
                                    }].map(((e, n) => (0, Le.jsxs)("div", {
                                        className: "seo-stat-card",
                                        children: [(0, Le.jsx)("div", {
                                            className: "stat-value",
                                            children: e.value
                                        }), (0, Le.jsx)("div", {
                                            className: "stat-label",
                                            children: e.label
                                        })]
                                    }, n)))
                                }) : (0, Le.jsx)("div", {
                                    className: "stats-grid",
                                    children: [{
                                        value: "65%",
                                        label: "\u7684\u9ad8\u5546\u696d\u610f\u5716\u95dc\u9375\u8a5e\u9ede\u64ca\u4f86\u81ea\u4ed8\u8cbb\u5ee3\u544a"
                                    }, {
                                        value: "200%",
                                        label: "\u5e73\u5747\u5ee3\u544a\u6295\u8cc7\u56de\u5831\u7387(ROAS)"
                                    }, {
                                        value: "50%",
                                        label: "\u7684\u641c\u7d22\u7528\u6236\u7121\u6cd5\u5340\u5206\u4ed8\u8cbb\u8207\u81ea\u7136\u7d50\u679c"
                                    }, {
                                        value: "2x",
                                        label: "\u7af6\u50f9\u5ee3\u544a\u53ef\u70ba\u54c1\u724c\u8a8d\u77e5\u5ea6\u63d0\u53472\u500d"
                                    }].map(((e, n) => (0, Le.jsxs)("div", {
                                        className: "seo-stat-card",
                                        children: [(0, Le.jsx)("div", {
                                            className: "stat-value",
                                            children: e.value
                                        }), (0, Le.jsx)("div", {
                                            className: "stat-label",
                                            children: e.label
                                        })]
                                    }, n)))
                                })
                            })]
                        })
                    }), (0, Le.jsxs)("section", {
                        className: "seo-sem-comparison",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                children: "SEO\u8207SEM\uff1a\u5b8c\u7f8e\u7d50\u5408\u7684\u641c\u7d22\u7b56\u7565"
                            }), (0, Le.jsx)("p", {
                                children: "\u4e86\u89e3\u9019\u5169\u7a2e\u5f37\u5927\u5de5\u5177\u7684\u5340\u5225\u548c\u5354\u540c\u6548\u61c9"
                            })]
                        }), (0, Le.jsxs)("div", {
                            className: "comparison-container",
                            children: [(0, Le.jsxs)("div", {
                                className: "comparison-header",
                                children: [(0, Le.jsx)("div", {
                                    className: "comparison-aspect",
                                    children: "\u71df\u92b7\u65b9\u9762"
                                }), (0, Le.jsx)("div", {
                                    className: "comparison-seo",
                                    children: "SEO \u81ea\u7136\u6392\u540d"
                                }), (0, Le.jsx)("div", {
                                    className: "comparison-sem",
                                    children: "SEM \u4ed8\u8cbb\u5ee3\u544a"
                                })]
                            }), [{
                                aspect: "\u898b\u6548\u6642\u9593",
                                seo: "3-6\u500b\u6708\uff0c\u9577\u671f\u7d2f\u7a4d\u6548\u679c",
                                sem: "\u5373\u6642\u751f\u6548\uff0c\u5ee3\u544a\u5feb\u901f\u4e0a\u7dda"
                            }, {
                                aspect: "\u8cbb\u7528\u6a21\u5f0f",
                                seo: "\u524d\u671f\u6295\u5165\uff0c\u9577\u671f\u53d7\u76ca",
                                sem: "\u6309\u9ede\u64ca\u4ed8\u8cbb\uff0c\u505c\u6b62\u6295\u653e\u5373\u505c\u6b62\u6548\u679c"
                            }, {
                                aspect: "\u6392\u540d\u4f4d\u7f6e",
                                seo: "\u81ea\u7136\u641c\u7d22\u7d50\u679c\u5340\u57df",
                                sem: "\u4ed8\u8cbb\u5ee3\u544a\u5340\u57df(\u9801\u9762\u9802\u90e8\u548c\u5e95\u90e8)"
                            }, {
                                aspect: "\u53ef\u63a7\u6027",
                                seo: "\u53d7\u641c\u7d22\u5f15\u64ce\u7b97\u6cd5\u5f71\u97ff\u5927",
                                sem: "\u9ad8\u5ea6\u53ef\u63a7\uff0c\u53ef\u7cbe\u6e96\u5b9a\u5411"
                            }, {
                                aspect: "\u4fe1\u4efb\u5ea6",
                                seo: "\u7528\u6236\u4fe1\u4efb\u5ea6\u8f03\u9ad8",
                                sem: "\u90e8\u5206\u7528\u6236\u53ef\u80fd\u5c0d\u5ee3\u544a\u6301\u61f7\u7591\u614b\u5ea6"
                            }, {
                                aspect: "\u9069\u7528\u5834\u666f",
                                seo: "\u9577\u671f\u54c1\u724c\u5efa\u8a2d\uff0c\u6301\u7e8c\u6d41\u91cf\u7372\u53d6",
                                sem: "\u7522\u54c1\u767c\u5e03\uff0c\u4fc3\u92b7\u6d3b\u52d5\uff0c\u5feb\u901f\u6e2c\u8a66\u5e02\u5834"
                            }].map(((e, n) => (0, Le.jsxs)("div", {
                                className: "comparison-row",
                                children: [(0, Le.jsx)("div", {
                                    className: "comparison-aspect",
                                    children: e.aspect
                                }), (0, Le.jsx)("div", {
                                    className: "comparison-seo",
                                    children: e.seo
                                }), (0, Le.jsx)("div", {
                                    className: "comparison-sem",
                                    children: e.sem
                                })]
                            }, n)))]
                        }), (0, Le.jsx)("div", {
                            className: "comparison-visual",
                            children: (0, Le.jsxs)("div", {
                                className: "serp-mockup",
                                children: [(0, Le.jsxs)("div", {
                                    className: "search-bar",
                                    children: [(0, Le.jsx)("div", {
                                        className: "search-icon",
                                        children: (0, Le.jsx)("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: (0, Le.jsx)("path", {
                                                d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })
                                    }), (0, Le.jsx)("div", {
                                        className: "search-input",
                                        children: "\u60a8\u7684\u76ee\u6a19\u95dc\u9375\u8a5e"
                                    })]
                                }), (0, Le.jsxs)("div", {
                                    className: "search-results",
                                    children: [(0, Le.jsxs)("div", {
                                        className: "search-result ad",
                                        children: [(0, Le.jsx)("div", {
                                            className: "ad-badge",
                                            children: "\u5ee3\u544a"
                                        }), (0, Le.jsx)("div", {
                                            className: "result-title",
                                            children: "\u60a8\u7684SEM\u5ee3\u544a - \u5c08\u696d\u670d\u52d9\u8207\u89e3\u6c7a\u65b9\u6848"
                                        }), (0, Le.jsx)("div", {
                                            className: "result-url",
                                            children: "www.yourwebsite.com"
                                        }), (0, Le.jsx)("div", {
                                            className: "result-desc",
                                            children: "\u5f15\u4eba\u6ce8\u76ee\u7684\u5ee3\u544a\u6587\u6848\uff0c\u5c55\u793a\u60a8\u7684\u7368\u7279\u8ce3\u9ede..."
                                        }), (0, Le.jsxs)("div", {
                                            className: "result-extensions",
                                            children: [(0, Le.jsx)("span", {
                                                children: "\u5c08\u696d\u670d\u52d9"
                                            }), " \xb7 ", (0, Le.jsx)("span", {
                                                children: "24\u5c0f\u6642\u652f\u63f4"
                                            }), " \xb7 ", (0, Le.jsx)("span", {
                                                children: "\u514d\u8cbb\u8aee\u8a62"
                                            })]
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "search-result your-site",
                                        children: [(0, Le.jsx)("div", {
                                            className: "result-title",
                                            children: "\u60a8\u7684SEO\u7d50\u679c - \u5c08\u696d\u670d\u52d9\u8207\u89e3\u6c7a\u65b9\u6848"
                                        }), (0, Le.jsx)("div", {
                                            className: "result-url",
                                            children: "www.yourwebsite.com"
                                        }), (0, Le.jsx)("div", {
                                            className: "result-desc",
                                            children: "\u5b8c\u7f8e\u5339\u914d\u7528\u6236\u641c\u7d22\u610f\u5716\u7684\u5c08\u696d\u63cf\u8ff0\uff0c\u5438\u5f15\u66f4\u591a\u9ede\u64ca..."
                                        }), (0, Le.jsx)("div", {
                                            className: "result-badge",
                                            children: "\u60a8\u7684\u7db2\u7ad9"
                                        })]
                                    }), (0, Le.jsxs)("div", {
                                        className: "search-result competitor",
                                        children: [(0, Le.jsx)("div", {
                                            className: "result-title",
                                            children: "\u7af6\u722d\u5c0d\u624b\u7db2\u7ad9"
                                        }), (0, Le.jsx)("div", {
                                            className: "result-url",
                                            children: "www.competitor.com"
                                        }), (0, Le.jsx)("div", {
                                            className: "result-desc",
                                            children: "\u7d50\u5408SEO\u548cSEM\u7b56\u7565\u7684\u7db2\u7ad9\u80fd\u5920\u6700\u5927\u5316\u641c\u7d22\u7d50\u679c\u7684\u4f54\u6709\u7387..."
                                        })]
                                    }), (0, Le.jsx)("div", {
                                        className: "search-overlay",
                                        children: (0, Le.jsxs)("div", {
                                            className: "search-overlay-content",
                                            children: [(0, Le.jsx)("h3", {
                                                children: "\u4f54\u64da\u66f4\u591a\u641c\u7d22\u7d50\u679c\u7248\u9762"
                                            }), (0, Le.jsx)("p", {
                                                children: "\u540c\u6642\u4f7f\u7528SEO\u548cSEM\uff0c\u8b93\u60a8\u7684\u7db2\u7ad9\u5728\u641c\u7d22\u7d50\u679c\u4e2d\u7372\u5f97\u6700\u5927\u66dd\u5149"
                                            })]
                                        })
                                    })]
                                })]
                            })
                        })]
                    }), (0, Le.jsxs)("section", {
                        className: "services-benefits",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                children: "\u641c\u7d22\u5f15\u64ce\u71df\u92b7\u7684\u95dc\u9375\u512a\u52e2"
                            }), (0, Le.jsx)("p", {
                                children: "\u7d50\u5408SEO\u8207SEM\u7b56\u7565\u70ba\u60a8\u7684\u696d\u52d9\u5e36\u4f86\u5168\u65b9\u4f4d\u7dda\u4e0a\u589e\u9577"
                            })]
                        }), (0, Le.jsxs)("div", {
                            className: "services-tabs",
                            children: [(0, Le.jsx)("button", {
                                className: "service-tab " + ("seo" === e ? "active" : ""),
                                onClick: () => t("seo"),
                                children: "SEO\u512a\u52e2"
                            }), (0, Le.jsx)("button", {
                                className: "service-tab " + ("sem" === e ? "active" : ""),
                                onClick: () => t("sem"),
                                children: "SEM\u512a\u52e2"
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "benefits-container",
                            children: "seo" === e ? (0, Le.jsx)("div", {
                                className: "benefits-grid",
                                children: l.map(((e, n) => (0, Le.jsxs)("div", {
                                    className: "benefit-card",
                                    children: [(0, Le.jsx)("div", {
                                        className: "benefit-icon",
                                        children: e.icon
                                    }), (0, Le.jsx)("h3", {
                                        children: e.title
                                    }), (0, Le.jsx)("p", {
                                        children: e.description
                                    })]
                                }, n)))
                            }) : (0, Le.jsx)("div", {
                                className: "benefits-grid",
                                children: i.map(((e, n) => (0, Le.jsxs)("div", {
                                    className: "benefit-card",
                                    children: [(0, Le.jsx)("div", {
                                        className: "benefit-icon sem",
                                        children: e.icon
                                    }), (0, Le.jsx)("h3", {
                                        children: e.title
                                    }), (0, Le.jsx)("p", {
                                        children: e.description
                                    })]
                                }, n)))
                            })
                        })]
                    }), (0, Le.jsxs)("section", {
                        className: "seo-process",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                children: "\u6211\u5011\u7684\u5c08\u696d\u670d\u52d9\u6d41\u7a0b"
                            }), (0, Le.jsx)("p", {
                                children: "\u7cfb\u7d71\u5316\u65b9\u6cd5\u78ba\u4fdd\u60a8\u7684\u641c\u7d22\u71df\u92b7\u7b56\u7565\u53d6\u5f97\u6700\u4f73\u6548\u679c"
                            })]
                        }), (0, Le.jsxs)("div", {
                            className: "process-tabs",
                            children: [(0, Le.jsx)("button", {
                                className: "process-tab " + ("seo" === e ? "active" : ""),
                                onClick: () => t("seo"),
                                children: "SEO\u670d\u52d9\u6d41\u7a0b"
                            }), (0, Le.jsx)("button", {
                                className: "process-tab " + ("sem" === e ? "active" : ""),
                                onClick: () => t("sem"),
                                children: "SEM\u670d\u52d9\u6d41\u7a0b"
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "process-timeline",
                            children: "seo" === e ? s.map(((e, n) => (0, Le.jsxs)("div", {
                                className: "process-step",
                                children: [(0, Le.jsx)("div", {
                                    className: "step-icon",
                                    children: e.icon
                                }), (0, Le.jsxs)("div", {
                                    className: "step-content",
                                    children: [(0, Le.jsx)("h3", {
                                        children: e.title
                                    }), (0, Le.jsx)("p", {
                                        children: e.description
                                    }), (0, Le.jsx)("ul", {
                                        className: "step-details",
                                        children: e.details.map(((e, n) => (0, Le.jsx)("li", {
                                            children: e
                                        }, n)))
                                    })]
                                })]
                            }, n))) : o.map(((e, n) => (0, Le.jsxs)("div", {
                                className: "process-step",
                                children: [(0, Le.jsx)("div", {
                                    className: "step-icon sem",
                                    children: e.icon
                                }), (0, Le.jsxs)("div", {
                                    className: "step-content",
                                    children: [(0, Le.jsx)("h3", {
                                        children: e.title
                                    }), (0, Le.jsx)("p", {
                                        children: e.description
                                    }), (0, Le.jsx)("ul", {
                                        className: "step-details",
                                        children: e.details.map(((e, n) => (0, Le.jsx)("li", {
                                            children: e
                                        }, n)))
                                    })]
                                })]
                            }, n)))
                        })]
                    }), (0, Le.jsxs)("section", {
                        className: "seo-packages",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                children: "\u641c\u7d22\u71df\u92b7\u7d9c\u5408\u65b9\u6848"
                            }), (0, Le.jsx)("p", {
                                children: "\u7d50\u5408SEO\u8207SEM\u7684\u5b8c\u6574\u89e3\u6c7a\u65b9\u6848\uff0c\u6eff\u8db3\u4e0d\u540c\u696d\u52d9\u9700\u6c42"
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "packages-container",
                            children: [{
                                name: "\u57fa\u790e\u512a\u5316",
                                price: "3,999HKD",
                                period: "\u8d77/\u5b63\u5ea6",
                                features: ["\u6838\u5fc3\u95dc\u9375\u8a5e\u512a\u5316 (5\u500b)", "\u7db2\u7ad9\u6280\u8853\u5be9\u8a08\u8207\u57fa\u790e\u512a\u5316", "Meta\u6a19\u7c64\u512a\u5316", "Google Ads\u57fa\u790e\u8a2d\u7f6e", "\u5c0f\u9810\u7b97\u5ee3\u544a\u6e2c\u8a66", "\u6bcf\u6708SEO\u8207SEM\u8868\u73fe\u5831\u544a"],
                                isPopular: !1,
                                btnText: "\u4e86\u89e3\u8a73\u60c5"
                            }, {
                                name: "\u6a19\u6e96\u65b9\u6848",
                                price: "7,999HKD",
                                period: "\u8d77/\u5b63\u5ea6",
                                features: ["\u6838\u5fc3\u95dc\u9375\u8a5e\u512a\u5316 (15\u500b)", "\u5168\u9762\u6280\u8853SEO\u512a\u5316", "\u6bcf\u67082\u7bc7SEO\u5167\u5bb9\u5275\u4f5c", "\u5b8c\u6574Google Ads\u5e33\u6236\u642d\u5efa", "\u518d\u71df\u92b7\u6d3b\u52d5\u8a2d\u7f6e", "\u5ee3\u544aA/B\u6e2c\u8a66", "\u6bcf\u6708\u8a73\u7d30\u7e3e\u6548\u5206\u6790\u5831\u544a"],
                                isPopular: !0,
                                btnText: "\u6700\u53d7\u6b61\u8fce"
                            }, {
                                name: "\u4f01\u696d\u5b9a\u5236",
                                price: "12,999HKD",
                                period: "\u8d77/\u5b63\u5ea6",
                                features: ["\u6838\u5fc3\u95dc\u9375\u8a5e\u512a\u5316 (30+)", "\u9ad8\u7d1a\u6280\u8853SEO\u512a\u5316", "\u6bcf\u67084\u7bc7\u5c08\u696d\u5167\u5bb9\u5275\u4f5c", "\u9ad8\u8cea\u91cf\u5916\u90e8\u93c8\u63a5\u5efa\u8a2d", "\u591a\u5e73\u53f0\u641c\u7d22\u5ee3\u544a\u7ba1\u7406", "\u5ee3\u544a\u7cfb\u5217\u6301\u7e8c\u512a\u5316", "\u8f49\u5316\u7387\u512a\u5316\u5efa\u8b70", "\u5c08\u5c6cSEO\u8207SEM\u9867\u554f"],
                                isPopular: !1,
                                btnText: "\u806f\u7e6b\u6211\u5011"
                            }].map(((e, n) => (0, Le.jsxs)("div", {
                                className: "package-card " + (e.isPopular ? "popular" : ""),
                                children: [e.isPopular && (0, Le.jsx)("div", {
                                    className: "popular-badge",
                                    children: "\u6700\u4f73\u9078\u64c7"
                                }), (0, Le.jsx)("h3", {
                                    children: e.name
                                }), (0, Le.jsxs)("div", {
                                    className: "package-price",
                                    children: [(0, Le.jsx)("span", {
                                        className: "price",
                                        children: e.price
                                    }), (0, Le.jsx)("span", {
                                        className: "period",
                                        children: e.period
                                    })]
                                }), (0, Le.jsx)("div", {
                                    className: "package-features",
                                    children: e.features.map(((e, n) => (0, Le.jsx)("li", {
                                        children: e
                                    }, n)))
                                }), (0, Le.jsx)("button", {
                                    className: "package-btn " + (e.isPopular ? "primary" : "secondary"),
                                    onClick: a,
                                    children: e.btnText
                                })]
                            }, n)))
                        })]
                    }), (0, Le.jsxs)("section", {
                        className: "seo-industries",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                children: "\u9069\u7528\u65bc\u5404\u884c\u5404\u696d"
                            }), (0, Le.jsx)("p", {
                                children: "\u6211\u5011\u7684\u641c\u7d22\u71df\u92b7\u670d\u52d9\u5df2\u6210\u529f\u5e6b\u52a9\u5404\u884c\u696d\u5ba2\u6236\u63d0\u5347\u7dda\u4e0a\u8868\u73fe"
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "industries-grid",
                            children: ["\u96fb\u5b50\u5546\u52d9", "\u6559\u80b2\u6a5f\u69cb", "\u91d1\u878d\u670d\u52d9", "\u91ab\u7642\u5065\u5eb7", "\u65c5\u904a\u9152\u5e97", "\u623f\u5730\u7522", "\u79d1\u6280\u5275\u65b0", "\u6cd5\u5f8b\u670d\u52d9", "\u9910\u98f2\u670d\u52d9", "\u88fd\u9020\u696d"].map(((e, n) => (0, Le.jsx)("div", {
                                className: "industry-tag",
                                children: e
                            }, n)))
                        }), (0, Le.jsxs)("div", {
                            className: "industries-cta",
                            children: [(0, Le.jsx)("p", {
                                children: "\u7121\u8ad6\u60a8\u7684\u4f01\u696d\u898f\u6a21\u5927\u5c0f\uff0c\u6211\u5011\u90fd\u6709\u9069\u5408\u60a8\u7684\u641c\u7d22\u71df\u92b7\u89e3\u6c7a\u65b9\u6848"
                            }), (0, Le.jsx)("button", {
                                className: "seo-btn primary",
                                onClick: a,
                                children: "\u9810\u7d04\u514d\u8cbb\u54a8\u8a62"
                            })]
                        })]
                    }), (0, Le.jsxs)("section", {
                        className: "seo-faq",
                        children: [(0, Le.jsxs)("div", {
                            className: "section-header",
                            children: [(0, Le.jsx)("h2", {
                                children: "\u641c\u7d22\u71df\u92b7\u5e38\u898b\u554f\u984c"
                            }), (0, Le.jsx)("p", {
                                children: "\u5c0dSEO\u548cSEM\u9084\u6709\u7591\u554f\uff1f\u6211\u5011\u5df2\u7d93\u70ba\u60a8\u6e96\u5099\u597d\u4e86\u7b54\u6848"
                            })]
                        }), (0, Le.jsx)("div", {
                            className: "faq-container",
                            children: [{
                                question: "SEO\u548cSEM\u6709\u4ec0\u9ebc\u5340\u5225\uff1f\u6211\u61c9\u8a72\u9078\u64c7\u54ea\u500b\uff1f",
                                answer: "SEO(\u641c\u7d22\u5f15\u64ce\u512a\u5316)\u5c08\u6ce8\u65bc\u63d0\u9ad8\u7db2\u7ad9\u5728\u641c\u7d22\u5f15\u64ce\u81ea\u7136(\u514d\u8cbb)\u7d50\u679c\u4e2d\u7684\u6392\u540d\uff0c\u662f\u9577\u671f\u7b56\u7565\uff0c\u6548\u679c\u6301\u7e8c\u7a69\u5b9a\uff1bSEM(\u641c\u7d22\u5f15\u64ce\u71df\u92b7)\u4e3b\u8981\u662f\u901a\u904e\u4ed8\u8cbb\u65b9\u5f0f\u5728\u641c\u7d22\u5f15\u64ce\u4e0a\u6295\u653e\u5ee3\u544a\uff0c\u53ef\u7acb\u5373\u7372\u5f97\u6d41\u91cf\u3002\u7406\u60f3\u72c0\u614b\u662f\u5169\u8005\u7d50\u5408\u4f7f\u7528\uff1aSEM\u80fd\u5920\u5e36\u4f86\u5373\u6642\u6d41\u91cf\uff0c\u540c\u6642\u7528SEO\u5efa\u7acb\u9577\u671f\u7a69\u5b9a\u7684\u8a2a\u554f\u4f86\u6e90\u3002\u5c0d\u65bc\u65b0\u7db2\u7ad9\u6216\u7af6\u722d\u6fc0\u70c8\u7684\u884c\u696d\uff0c\u5efa\u8b70\u5148\u555f\u52d5SEM\u7372\u5f97\u5373\u6642\u66dd\u5149\uff0c\u540c\u6642\u540c\u6b65\u9032\u884cSEO\u512a\u5316\uff0c\u9010\u6b65\u5efa\u7acb\u9577\u671f\u7684\u81ea\u7136\u6d41\u91cf\u3002"
                            }, {
                                question: "SEO\u548cSEM\u9700\u8981\u591a\u9577\u6642\u9593\u624d\u80fd\u770b\u5230\u6548\u679c\uff1f",
                                answer: "SEM\u898b\u6548\u975e\u5e38\u8fc5\u901f\uff0c\u8a2d\u7f6e\u5b8c\u6210\u5f8c\u5e7e\u5c0f\u6642\u5167\u5ee3\u544a\u5373\u53ef\u4e0a\u7dda\uff0c\u7acb\u5373\u5e36\u4f86\u6d41\u91cf\u3002SEO\u5247\u662f\u9577\u671f\u7b56\u7565\uff0c\u901a\u5e38\u9700\u89813-6\u500b\u6708\u624d\u80fd\u770b\u5230\u660e\u986f\u6548\u679c\uff0c\u5177\u9ad4\u6642\u9593\u53d6\u6c7a\u65bc\u7db2\u7ad9\u73fe\u72c0\u3001\u7af6\u722d\u7a0b\u5ea6\u548c\u512a\u5316\u529b\u5ea6\u3002SEO\u521d\u671f\u6703\u9032\u884c\u6280\u8853\u512a\u5316\uff0c\u53ef\u80fd\u57281-2\u500b\u6708\u5167\u770b\u5230\u4e00\u4e9b\u6392\u540d\u63d0\u5347\uff0c\u4f46\u6301\u7e8c\u7a69\u5b9a\u7684\u6210\u6548\u9700\u8981\u66f4\u9577\u6642\u9593\u3002\u9019\u4e5f\u662f\u70ba\u4ec0\u9ebc\u6211\u5011\u901a\u5e38\u5efa\u8b70SEO\u548cSEM\u7d50\u5408\u4f7f\u7528\uff0c\u4ee5\u5e73\u8861\u77ed\u671f\u548c\u9577\u671f\u6548\u679c\u3002"
                            }, {
                                question: "\u5982\u4f55\u78ba\u5b9a\u6211\u7684\u641c\u7d22\u71df\u92b7\u9810\u7b97\u5206\u914d\uff1f",
                                answer: "\u641c\u7d22\u71df\u92b7\u9810\u7b97\u5206\u914d\u61c9\u57fa\u65bc\u60a8\u7684\u696d\u52d9\u76ee\u6a19\u3001\u884c\u696d\u7af6\u722d\u7a0b\u5ea6\u548c\u71df\u92b7\u6642\u9593\u7dda\u3002\u5c0d\u65bc\u9700\u8981\u5feb\u901f\u7d50\u679c\u7684\u4f01\u696d\uff0c\u53ef\u5c07\u8f03\u5927\u6bd4\u4f8b(\u598270%)\u5206\u914d\u7d66SEM\uff1b\u5c0d\u65bc\u8457\u773c\u9577\u671f\u767c\u5c55\u7684\u4f01\u696d\uff0c\u53ef\u5c07\u8f03\u5927\u9810\u7b97(\u598260-70%)\u5206\u914d\u7d66SEO\u3002\u7406\u60f3\u60c5\u6cc1\u4e0b\uff0c\u65b0\u696d\u52d9\u53ef\u4ee5\u5f9e50/50\u7684\u5206\u914d\u958b\u59cb\uff0c\u7136\u5f8c\u6839\u64da\u6578\u64da\u5206\u6790\u8abf\u6574\u3002\u6211\u5011\u7684\u5c08\u696d\u5718\u968a\u6703\u5206\u6790\u60a8\u7684\u5177\u9ad4\u60c5\u6cc1\uff0c\u63d0\u4f9b\u500b\u6027\u5316\u7684\u9810\u7b97\u5206\u914d\u5efa\u8b70\uff0c\u4e26\u96a8\u8457\u71df\u92b7\u6548\u679c\u4e0d\u65b7\u512a\u5316\u8cc7\u6e90\u5206\u914d\u3002"
                            }, {
                                question: "\u6211\u5011\u5df2\u7d93\u505a\u4e86SEO\uff0c\u9084\u9700\u8981\u6295\u653e\u641c\u7d22\u5ee3\u544a\u55ce\uff1f",
                                answer: "\u5373\u4f7f\u60a8\u7684SEO\u8868\u73fe\u826f\u597d\uff0cSEM\u4ecd\u7136\u53ef\u4ee5\u5e36\u4f86\u984d\u5916\u50f9\u503c\u3002\u7814\u7a76\u8868\u660e\uff0c\u540c\u6642\u51fa\u73fe\u5728\u81ea\u7136\u7d50\u679c\u548c\u4ed8\u8cbb\u5ee3\u544a\u4e2d\u7684\u54c1\u724c\uff0c\u9ede\u64ca\u7387\u6703\u63d0\u9ad845%\u4ee5\u4e0a\u3002SEM\u53ef\u4ee5\u5e6b\u52a9\u60a8\u6436\u4f54\u66f4\u591aSERP\u7248\u9762\uff0c\u6e2c\u8a66\u65b0\u95dc\u9375\u8a5e\uff0c\u4e26\u5728\u7af6\u722d\u6fc0\u70c8\u7684\u95dc\u9375\u8a5e\u4e0a\u4fdd\u6301\u53ef\u898b\u6027\u3002\u6b64\u5916\uff0cSEM\u5c0d\u65bc\u5b63\u7bc0\u6027\u4fc3\u92b7\u3001\u65b0\u7522\u54c1\u767c\u5e03\u6216\u7279\u5b9a\u71df\u92b7\u6d3b\u52d5\u5c24\u5176\u6709\u6548\uff0c\u53ef\u4ee5\u63d0\u4f9bSEO\u7121\u6cd5\u5be6\u73fe\u7684\u7cbe\u78ba\u63a7\u5236\u548c\u5373\u6642\u6027\u3002\u6700\u4f73\u7b56\u7565\u662f\u5c07SEO\u548cSEM\u8996\u70ba\u4e92\u88dc\u5de5\u5177\uff0c\u5171\u540c\u512a\u5316\u60a8\u7684\u641c\u7d22\u71df\u92b7\u6548\u679c\u3002"
                            }, {
                                question: "\u4f60\u5011\u5982\u4f55\u8861\u91cfSEO\u548cSEM\u7684\u6210\u6548\uff1f",
                                answer: "\u6211\u5011\u4f7f\u7528\u591a\u7dad\u5ea6\u6307\u6a19\u5168\u9762\u8861\u91cf\u641c\u7d22\u71df\u92b7\u6210\u6548\u3002\u5c0d\u65bcSEO\uff0c\u6211\u5011\u8ffd\u8e64\u95dc\u9375\u8a5e\u6392\u540d\u8b8a\u5316\u3001\u81ea\u7136\u6d41\u91cf\u589e\u9577\u3001\u5165\u7ad9\u93c8\u63a5\u8cea\u91cf\u3001\u9801\u9762\u505c\u7559\u6642\u9593\u4ee5\u53ca\u6700\u7d42\u8f49\u5316\u7387\u3002\u5c0d\u65bcSEM\uff0c\u6211\u5011\u95dc\u6ce8\u5ee3\u544a\u9ede\u64ca\u7387(CTR)\u3001\u5e73\u5747\u9ede\u64ca\u6210\u672c(CPC)\u3001\u8f49\u5316\u7387\u3001\u5ee3\u544a\u8cea\u91cf\u5f97\u5206\u548c\u5ee3\u544a\u6295\u8cc7\u56de\u5831\u7387(ROAS)\u3002\u6211\u5011\u63d0\u4f9b\u7d9c\u5408\u7684\u6708\u5ea6\u5831\u544a\uff0c\u4e0d\u50c5\u5c55\u793a\u9019\u4e9b\u6280\u8853\u6307\u6a19\uff0c\u9084\u5c07\u5176\u8207\u60a8\u7684\u696d\u52d9KPI\u76f8\u95dc\u806f\uff0c\u6e05\u6670\u5c55\u793a\u641c\u7d22\u71df\u92b7\u5c0d\u696d\u52d9\u589e\u9577\u7684\u8ca2\u737b\uff0c\u4e26\u63d0\u4f9b\u6301\u7e8c\u512a\u5316\u7684\u7b56\u7565\u5efa\u8b70\u3002"
                            }].map(((e, n) => (0, Le.jsxs)("div", {
                                className: "faq-item",
                                children: [(0, Le.jsxs)("div", {
                                    className: "faq-question",
                                    children: [(0, Le.jsx)("h3", {
                                        children: e.question
                                    }), (0, Le.jsx)("div", {
                                        className: "faq-toggle",
                                        children: (0, Le.jsx)("svg", {
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            children: (0, Le.jsx)("path", {
                                                d: "M19 9l-7 7-7-7",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round"
                                            })
                                        })
                                    })]
                                }), (0, Le.jsx)("div", {
                                    className: "faq-answer",
                                    children: (0, Le.jsx)("p", {
                                        children: e.answer
                                    })
                                })]
                            }, n)))
                        })]
                    })]
                })
            },
            fn = e => {
                let {
                    slides: t
                } = e;
                const [r, a] = (0, n.useState)(0), [l, i] = (0, n.useState)(!1), s = ee();
                (0, n.useEffect)((() => {
                    if (!l) {
                        const e = setInterval((() => {
                            a((e => (e + 1) % t.length))
                        }), 1e4);
                        return () => {
                            clearInterval(e)
                        }
                    }
                }), [t.length, l]);
                const o = () => {
                        s("/contact")
                    },
                    c = (0, n.useCallback)((() => {
                        i(!0)
                    }), []),
                    u = (0, n.useCallback)((() => {
                        i(!1)
                    }), []);
                return (0, Le.jsxs)("div", {
                    className: "slider-container",
                    "data-paused": l,
                    children: [t.map(((e, n) => (0, Le.jsxs)("div", {
                        className: "slide " + (n === r ? "active" : ""),
                        children: [(0, Le.jsx)("div", {
                            className: "slide-bg",
                            style: {
                                backgroundImage: `url(${e.url})`
                            }
                        }), (0, Le.jsx)("div", {
                            className: "slide-overlay"
                        }), (0, Le.jsxs)("div", {
                            className: "slide-content",
                            children: [(0, Le.jsx)("h1", {
                                children: e.title
                            }), (0, Le.jsx)("h2", {
                                children: e.subtitle
                            }), (0, Le.jsx)("div", {
                                className: "slide-price",
                                children: e.price
                            }), (0, Le.jsx)("div", {
                                className: "slide-description",
                                children: e.description
                            }), (0, Le.jsxs)("div", {
                                className: "buttons",
                                onMouseEnter: c,
                                onMouseLeave: u,
                                children: [(0, Le.jsx)("button", {
                                    className: "btn-primary",
                                    onClick: () => (e => {
                                        switch (e) {
                                            case 0:
                                            default:
                                                s("/web");
                                                break;
                                            case 1:
                                                s("/app");
                                                break;
                                            case 2:
                                                s("/system")
                                        }
                                    })(n),
                                    children: "\u77ad\u89e3\u66f4\u591a"
                                }), (0, Le.jsx)("button", {
                                    className: "btn-secondary",
                                    onClick: o,
                                    children: "\u806f\u7d61\u6211\u5011"
                                })]
                            })]
                        })]
                    }, e.id))), (0, Le.jsx)("div", {
                        className: "slider-navigation",
                        children: t.map(((e, n) => (0, Le.jsx)("button", {
                            className: "nav-dot " + (n === r ? "active" : ""),
                            onClick: () => a(n)
                        }, n)))
                    }), (0, Le.jsxs)("div", {
                        className: "slider-nav-buttons",
                        children: [(0, Le.jsx)("button", {
                            className: "slider-prev-btn",
                            onClick: () => a((e => (e - 1 + t.length) % t.length))
                        }), (0, Le.jsx)("button", {
                            className: "slider-next-btn",
                            onClick: () => a((e => (e + 1) % t.length))
                        })]
                    })]
                })
            },
            pn = e => {
                let {
                    services: n
                } = e;
                return (0, Le.jsxs)("section", {
                    className: "services-section",
                    children: [(0, Le.jsx)("h2", {
                        className: "services-title",
                        children: " ZenithSoft \u4e3b\u8981\u670d\u52d9"
                    }), (0, Le.jsx)("div", {
                        className: "services-grid",
                        children: n.map(((e, n) => (0, Le.jsxs)("div", {
                            className: "service-item",
                            children: [(0, Le.jsx)("div", {
                                className: "service-icon-wrapper",
                                children: e.icon
                            }), (0, Le.jsx)("h3", {
                                className: "service-title",
                                children: e.title
                            }), (0, Le.jsx)("p", {
                                className: "service-description",
                                children: e.description
                            })]
                        }, n)))
                    })]
                })
            },
            mn = e => {
                let {
                    cases: t
                } = e;
                const [r, a] = (0, n.useState)("\u7db2\u9801\u958b\u767c"), [l, i] = (0, n.useState)([]), [s, o] = (0, n.useState)(!1), [c, u] = (0, n.useState)(""), [d, h] = (0, n.useState)("");
                (0, n.useEffect)((() => {
                    i(t.filter((e => e.category === r)))
                }), [r, t]);
                const f = () => {
                    o(!1), u(""), h("")
                };
                return (0, Le.jsxs)(Le.Fragment, {
                    children: [s && (0, Le.jsx)("div", {
                        className: "case-dialog-overlay",
                        onClick: f,
                        children: (0, Le.jsxs)("div", {
                            className: "case-dialog",
                            onClick: e => e.stopPropagation(),
                            children: [(0, Le.jsx)("button", {
                                className: "case-dialog-close",
                                onClick: f,
                                children: "\xd7"
                            }), (0, Le.jsx)("img", {
                                src: "" + c,
                                alt: d,
                                className: "case-dialog-img"
                            }), (0, Le.jsx)("div", {
                                className: "case-dialog-title",
                                children: d
                            })]
                        })
                    }), (0, Le.jsx)("section", {
                        className: "cases-section",
                        children: (0, Le.jsxs)("div", {
                            className: "case-container",
                            children: [(0, Le.jsx)("h2", {
                                className: "case-title",
                                children: "\u7cbe\u9078\u6848\u4f8b"
                            }), (0, Le.jsx)("div", {
                                className: "case-filter",
                                children: ["\u7db2\u9801\u958b\u767c", "\u7a0b\u5f0f\u958b\u767c", "\u7cfb\u7d71\u958b\u767c"].map((e => (0, Le.jsx)("button", {
                                    className: "filter-button " + (r === e ? "active" : ""),
                                    onClick: () => a(e),
                                    children: e
                                }, e)))
                            }), (0, Le.jsx)("div", {
                                className: "case-display",
                                children: l.map(((e, n) => (0, Le.jsx)("div", {
                                    className: "case-item " + ("\u7a0b\u5f0f\u958b\u767c" === e.category || "\u7db2\u9801\u958b\u767c" === e.category ? "app-item" : ""),
                                    children: (0, Le.jsxs)("div", {
                                        className: "case-image-wrapper",
                                        children: [(0, Le.jsx)("img", {
                                            src: `${e.image}`,
                                            alt: e.title,
                                            className: "case-image"
                                        }), (0, Le.jsxs)("div", {
                                            className: "case-text-overlay",
                                            children: [(0, Le.jsx)("h3", {
                                                className: "case-item-title",
                                                children: e.title
                                            }), e.description && (0, Le.jsx)("p", {
                                                className: "case-item-description",
                                                children: e.description
                                            })]
                                        })]
                                    })
                                }, n)))
                            })]
                        })
                    })]
                })
            };
        var vn = t(725),
            xn = t.n(vn),
            gn = /[A-Z]/g,
            jn = /^ms-/,
            yn = {};

        function bn(e) {
            return "-" + e.toLowerCase()
        }
        const kn = function(e) {
            if (yn.hasOwnProperty(e)) return yn[e];
            var n = e.replace(gn, bn);
            return yn[e] = jn.test(n) ? "-" + n : n
        };

        function wn(e, n) {
            if (e === n) return !0;
            if (!e || !n) return !1;
            const t = Object.keys(e),
                r = Object.keys(n),
                a = t.length;
            if (r.length !== a) return !1;
            for (let l = 0; l < a; l++) {
                const r = t[l];
                if (e[r] !== n[r] || !Object.prototype.hasOwnProperty.call(n, r)) return !1
            }
            return !0
        }
        var Nn = t(173),
            Sn = t.n(Nn);
        const Cn = Sn().oneOfType([Sn().string, Sn().number]),
            Mn = {
                all: Sn().bool,
                grid: Sn().bool,
                aural: Sn().bool,
                braille: Sn().bool,
                handheld: Sn().bool,
                print: Sn().bool,
                projection: Sn().bool,
                screen: Sn().bool,
                tty: Sn().bool,
                tv: Sn().bool,
                embossed: Sn().bool
            },
            En = {
                orientation: Sn().oneOf(["portrait", "landscape"]),
                scan: Sn().oneOf(["progressive", "interlace"]),
                aspectRatio: Sn().string,
                deviceAspectRatio: Sn().string,
                height: Cn,
                deviceHeight: Cn,
                width: Cn,
                deviceWidth: Cn,
                color: Sn().bool,
                colorIndex: Sn().bool,
                monochrome: Sn().bool,
                resolution: Cn,
                type: Object.keys(Mn)
            },
            {
                type: Ln,
                ...zn
            } = En,
            Pn = {
                minAspectRatio: Sn().string,
                maxAspectRatio: Sn().string,
                minDeviceAspectRatio: Sn().string,
                maxDeviceAspectRatio: Sn().string,
                minHeight: Cn,
                maxHeight: Cn,
                minDeviceHeight: Cn,
                maxDeviceHeight: Cn,
                minWidth: Cn,
                maxWidth: Cn,
                minDeviceWidth: Cn,
                maxDeviceWidth: Cn,
                minColor: Sn().number,
                maxColor: Sn().number,
                minColorIndex: Sn().number,
                maxColorIndex: Sn().number,
                minMonochrome: Sn().number,
                maxMonochrome: Sn().number,
                minResolution: Cn,
                maxResolution: Cn,
                ...zn
            };
        var _n = {
            all: { ...Mn,
                ...Pn
            },
            types: Mn,
            matchers: En,
            features: Pn
        };
        const On = e => {
                const n = [];
                return Object.keys(_n.all).forEach((t => {
                    const r = e[t];
                    null != r && n.push(((e, n) => {
                        const t = kn(e);
                        return "number" === typeof n && (n = `${n}px`), !0 === n ? t : !1 === n ? `not ${t}` : `(${t}: ${n})`
                    })(t, r))
                })), n.join(" and ")
            },
            Rn = (0, n.createContext)(void 0),
            Bn = e => {
                if (!e) return;
                return Object.keys(e).reduce(((n, t) => (n[kn(t)] = e[t], n)), {})
            },
            Tn = () => {
                const e = (0, n.useRef)(!1);
                return (0, n.useEffect)((() => {
                    e.current = !0
                }), []), e.current
            },
            Wn = e => {
                const t = () => (e => e.query || On(e))(e),
                    [r, a] = (0, n.useState)(t);
                return (0, n.useEffect)((() => {
                    const e = t();
                    r !== e && a(e)
                }), [e]), r
            },
            Dn = (e, t, r) => {
                const a = (e => {
                        const t = (0, n.useContext)(Rn),
                            r = () => Bn(e) || Bn(t),
                            [a, l] = (0, n.useState)(r);
                        return (0, n.useEffect)((() => {
                            const e = r();
                            wn(a, e) || l(e)
                        }), [e, t]), a
                    })(t),
                    l = Wn(e);
                if (!l) throw new Error("Invalid or missing MediaQuery!");
                const i = ((e, t) => {
                        const r = () => xn()(e, t || {}, !!t),
                            [a, l] = (0, n.useState)(r),
                            i = Tn();
                        return (0, n.useEffect)((() => {
                            if (i) {
                                const e = r();
                                return l(e), () => {
                                    e && e.dispose()
                                }
                            }
                        }), [e, t]), a
                    })(l, a),
                    s = (e => {
                        const [t, r] = (0, n.useState)(e.matches);
                        return (0, n.useEffect)((() => {
                            const n = e => {
                                r(e.matches)
                            };
                            return e.addListener(n), r(e.matches), () => {
                                e.removeListener(n)
                            }
                        }), [e]), t
                    })(i),
                    o = Tn();
                return (0, n.useEffect)((() => {
                    o && r && r(s)
                }), [s]), (0, n.useEffect)((() => () => {
                    i && i.dispose()
                }), []), s
            },
            Hn = () => {
                const [e, t] = (0, n.useState)(!1), r = Dn({
                    maxWidth: 767
                }), a = () => {
                    r && t(!1)
                };
                return (0, n.useEffect)((() => {
                    const n = () => {
                        e && t(!1)
                    };
                    return window.addEventListener("scroll", n), () => {
                        window.removeEventListener("scroll", n)
                    }
                }), [e]), (0, Le.jsx)("nav", {
                    className: "navbar",
                    children: (0, Le.jsxs)("div", {
                        className: "nav-container",
                        children: [(0, Le.jsx)("div", {
                            className: "logo-container",
                            children: (0, Le.jsx)(Ce, {
                                to: "/",
                                className: "zenithsoft-logo",
                                onClick: a,
                                children: (0, Le.jsx)("img", {
                                    src: "../images/logo2.jpeg",
                                    alt: "Zenith Soft",
                                    className: "logo-image"
                                })
                            })
                        }), (0, Le.jsxs)("div", {
                            className: "nav-right",
                            children: [(0, Le.jsxs)("div", {
                                className: "menu-button " + (e ? "active" : ""),
                                onClick: () => t(!e),
                                "aria-label": "\u5c0e\u822a\u83dc\u55ae",
                                children: [(0, Le.jsx)("span", {}), (0, Le.jsx)("span", {}), (0, Le.jsx)("span", {})]
                            }), (0, Le.jsxs)("div", {
                                className: "nav-links " + (e ? "active" : ""),
                                children: [(0, Le.jsx)(Ce, {
                                    to: "/web",
                                    onClick: a,
                                    className: "nav-link",
                                    children: "\u7db2\u9801\u958b\u767c"
                                }), (0, Le.jsx)(Ce, {
                                    to: "/app",
                                    onClick: a,
                                    className: "nav-link",
                                    children: "APP\u958b\u767c"
                                }), (0, Le.jsx)(Ce, {
                                    to: "/system",
                                    onClick: a,
                                    className: "nav-link",
                                    children: "\u7cfb\u7d71\u958b\u767c"
                                }), (0, Le.jsx)(Ce, {
                                    to: "/seo",
                                    onClick: a,
                                    className: "nav-link",
                                    children: "SEO/SEM"
                                }), (0, Le.jsx)(Ce, {
                                    to: "/about",
                                    onClick: a,
                                    className: "nav-link",
                                    children: "\u95dc\u65bc\u6211\u5011"
                                }), (0, Le.jsx)(Ce, {
                                    to: "/contact",
                                    onClick: a,
                                    className: "nav-link contact-link",
                                    children: "\u806f\u7d61\u6211\u5011"
                                })]
                            })]
                        })]
                    })
                })
            },
            Fn = () => (0, Le.jsx)("button", {
                className: "wts-button",
                onClick: () => {
                    window.open("https://wa.me/94429080", "_blank")
                },
                children: (0, Le.jsx)("svg", {
                    viewBox: "0 0 24 24",
                    width: "24",
                    height: "24",
                    fill: "white",
                    children: (0, Le.jsx)("path", {
                        d: "M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.196-.57-.346m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    })
                })
            }),
            In = () => {
                const [e, t] = (0, n.useState)(!1), r = ee();
                return (0, Le.jsx)(Le.Fragment, {
                    children: (0, Le.jsx)("button", {
                        onClick: () => {
                            console.log("Quotation Button clicked!"), r("/contact")
                        },
                        className: "quotation-button",
                        children: "\u7372\u53d6\u5831\u50f9"
                    })
                })
            };
        const An = function() {
            const {
                pathname: e
            } = Z();
            return (0, n.useEffect)((() => {
                window.scrollTo(0, 0)
            }), [e]), (0, n.useEffect)((() => {
                const e = () => {
                    window.scrollTo(0, 0)
                };
                return document.querySelectorAll("a").forEach((n => {
                    n.addEventListener("click", e)
                })), () => {
                    document.querySelectorAll("a").forEach((n => {
                        n.removeEventListener("click", e)
                    }))
                }
            }), []), null
        };

        function Vn(e) {
            return Ve({
                tag: "svg",
                attr: {
                    role: "img",
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569-.826-.991-1.535-1.832-1.884-2.245a146 146 0 0 0-.488-.576l-.207-.245-.113-.133-.022-.032-.01-.005L12.57 0l-.609.488c-1.555 1.246-2.828 2.851-3.681 4.64-.523 1.064-.864 2.105-1.043 3.176-.047.241-.088.489-.121.738-.209-.017-.421-.028-.632-.033-.018-.001-.035-.002-.059-.003a7.46 7.46 0 0 0-2.28.274l-.317.089-.163.286c-.765 1.342-1.198 2.869-1.252 4.416-.07 2.01.477 3.954 1.583 5.625 1.082 1.633 2.61 2.882 4.42 3.611l.236.095.071.025.003-.001a9.59 9.59 0 0 0 2.941.568q.171.006.342.006c1.273 0 2.513-.249 3.69-.742l.008.004.313-.145a9.63 9.63 0 0 0 3.927-3.335c1.01-1.49 1.577-3.234 1.641-5.042.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558-1.135-1.12-1.967-2.352-2.475-3.665-.543-1.404-.87-2.74-.974-3.975.48.157.922.366 1.315.622 1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028-.771.21-1.565.302-2.369.273a8 8 0 0 1-.373-.022c.458-.394.869-.823 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398-.647-.421-1.385-.741-2.194-.95.011-.134.026-.268.043-.4.014-.113.03-.216.046-.313.133-.689.332-1.37.589-2.025.099-.25.206-.499.321-.74l.004-.008c.177-.358.376-.719.61-1.105l.092-.152-.003-.001c.544-.851 1.197-1.627 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237 1.291 1.549 2.966 3.583 3.612 4.48 1.277 1.771 1.893 3.579 1.83 5.375-.049 1.395-.461 2.755-1.195 3.933-.694 1.116-1.661 2.05-2.8 2.708-.636-.318-1.559-.839-2.539-1.599.79-1.575.952-3.28.479-5.072zm-2.575 5.397c-.725.939-1.587 1.55-2.09 1.856-.081-.029-.163-.06-.243-.093l-.065-.026c-1.49-.616-2.747-1.656-3.635-3.01-.907-1.384-1.356-2.993-1.298-4.653.041-1.19.338-2.327.882-3.379.316-.07.638-.114.96-.131l.084-.002c.162-.003.324-.003.478 0 .227.011.454.035.677.07.073 1.513.445 3.145 1.105 4.852.637 1.644 1.694 3.162 3.144 4.515z"
                    },
                    child: []
                }]
            })(e)
        }

        function Un(e) {
            return Ve({
                tag: "svg",
                attr: {
                    role: "img",
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
                    },
                    child: []
                }]
            })(e)
        }

        function $n(e) {
            return Ve({
                tag: "svg",
                attr: {
                    role: "img",
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.153zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H0c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 2.015.384 3.86.428 5.53zm4.017-4.08c-.378 2.045-.876 3.533-1.492 4.46-.482.716-1.01 1.073-1.583 1.073-.153 0-.34-.046-.566-.138v-.494c.11.017.24.026.386.026.268 0 .483-.075.647-.222.197-.18.295-.382.295-.605 0-.155-.077-.47-.23-.944L6.23 14.615h.91l.727 2.36c.164.536.233.91.205 1.123.4-1.064.678-2.227.835-3.483zm12.325 4.08h-2.63v-5.53h.885v4.85h1.745zm-3.32.135l-1.016-.5c.09-.076.177-.158.255-.25.433-.506.648-1.258.648-2.253 0-1.83-.718-2.746-2.155-2.746-.704 0-1.254.232-1.65.697-.43.508-.646 1.256-.646 2.245 0 .972.19 1.686.574 2.14.35.41.877.615 1.583.615.264 0 .506-.033.725-.098l1.325.772.36-.622zM15.5 17.588c-.225-.36-.337-.94-.337-1.736 0-1.393.424-2.09 1.27-2.09.443 0 .77.167.977.5.224.362.336.936.336 1.723 0 1.404-.424 2.108-1.27 2.108-.445 0-.77-.167-.978-.5zm-1.658-.425c0 .47-.172.856-.516 1.156-.344.3-.803.45-1.384.45-.543 0-1.064-.172-1.573-.515l.237-.476c.438.22.833.328 1.19.328.332 0 .593-.073.783-.22a.754.754 0 00.3-.615c0-.33-.23-.61-.648-.845-.388-.213-1.163-.657-1.163-.657-.422-.307-.632-.636-.632-1.177 0-.45.157-.81.47-1.085.315-.278.72-.415 1.22-.415.512 0 .98.136 1.4.41l-.213.476a2.726 2.726 0 00-1.064-.23c-.283 0-.502.068-.654.206a.685.685 0 00-.248.524c0 .328.234.61.666.85.393.215 1.187.67 1.187.67.433.305.648.63.648 1.168zm9.382-5.852c-.535-.014-.95.04-1.297.188-.1.04-.26.04-.274.167.055.053.063.14.11.214.08.134.218.313.346.407.14.11.28.216.427.31.26.16.555.255.81.416.145.094.293.213.44.313.073.05.12.14.214.172v-.02c-.046-.06-.06-.147-.105-.214-.067-.067-.134-.127-.2-.193a3.223 3.223 0 00-.695-.675c-.214-.146-.682-.35-.77-.595l-.013-.014c.146-.013.32-.066.46-.106.227-.06.435-.047.67-.106.106-.027.213-.06.32-.094v-.06c-.12-.12-.21-.283-.334-.395a8.867 8.867 0 00-1.104-.823c-.21-.134-.476-.22-.697-.334-.08-.04-.214-.06-.26-.127-.12-.146-.19-.34-.275-.514a17.69 17.69 0 01-.547-1.163c-.12-.262-.193-.523-.34-.763-.69-1.137-1.437-1.826-2.586-2.5-.247-.14-.543-.2-.856-.274-.167-.008-.334-.02-.5-.027-.11-.047-.216-.174-.31-.235-.38-.24-1.364-.76-1.644-.072-.18.434.267.862.422 1.082.115.153.26.328.34.5.047.116.06.235.107.356.106.294.207.622.347.897.073.14.153.287.247.413.054.073.146.107.167.227-.094.136-.1.334-.154.5-.24.757-.146 1.693.194 2.25.107.166.362.534.703.393.3-.12.234-.5.32-.835.02-.08.007-.133.048-.187v.015c.094.188.188.367.274.555.206.328.566.668.867.895.16.12.287.328.487.402v-.02h-.015c-.043-.058-.1-.086-.154-.133a3.445 3.445 0 01-.35-.4 8.76 8.76 0 01-.747-1.218c-.11-.21-.202-.436-.29-.643-.04-.08-.04-.2-.107-.24-.1.146-.247.273-.32.453-.127.288-.14.642-.188 1.01-.027.007-.014 0-.027.014-.214-.052-.287-.274-.367-.46-.2-.475-.233-1.238-.06-1.785.047-.14.247-.582.167-.716-.042-.127-.174-.2-.247-.303a2.478 2.478 0 01-.24-.427c-.16-.374-.24-.788-.414-1.162-.08-.173-.22-.354-.334-.513-.127-.18-.267-.307-.368-.52-.033-.073-.08-.194-.027-.274.014-.054.042-.075.094-.09.088-.072.335.022.422.062.247.1.455.194.662.334.094.066.195.193.315.226h.14c.214.047.455.014.655.073.355.114.675.28.962.46a5.953 5.953 0 012.085 2.286c.08.154.115.295.188.455.14.33.313.663.455.982.14.315.275.636.476.897.1.14.502.213.682.286.133.06.34.115.46.188.23.14.454.3.67.454.11.076.443.243.463.378z"
                    },
                    child: []
                }]
            })(e)
        }

        function Qn(e) {
            return Ve({
                tag: "svg",
                attr: {
                    role: "img",
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z"
                    },
                    child: []
                }]
            })(e)
        }

        function qn(e) {
            return Ve({
                tag: "svg",
                attr: {
                    role: "img",
                    viewBox: "0 0 24 24"
                },
                child: [{
                    tag: "path",
                    attr: {
                        d: "M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"
                    },
                    child: []
                }]
            })(e)
        }
        const Kn = () => (0, Le.jsxs)("div", {
                className: "about-page-container",
                style: {
                    minHeight: "100vh"
                },
                children: [(0, Le.jsx)(sn, {
                    title: "\u95dc\u65bc\u6211\u5011",
                    description: "\u81f4\u529b\u65bc\u79d1\u6280\u5275\u65b0\u8207\u6578\u4f4d\u8f49\u578b\u7684\u5c08\u696d\u5718\u968a\uff0c\u96c6\u7d50\u591a\u5e74\u7522\u696d\u7d93\u9a57\uff0c\u70ba\u4f01\u696d\u63d0\u4f9b\u524d\u77bb\u6027\u89e3\u6c7a\u65b9\u6848\u3002\u6211\u5011\u4e0d\u53ea\u662f\u670d\u52d9\u4f9b\u61c9\u5546\uff0c\u66f4\u662f\u60a8\u503c\u5f97\u4fe1\u8cf4\u7684\u9577\u671f\u5408\u4f5c\u5925\u4f34\uff0c\u52a9\u60a8\u5728\u77ac\u606f\u842c\u8b8a\u7684\u6578\u4f4d\u6642\u4ee3\u4fdd\u6301\u7af6\u722d\u512a\u52e2\u3002",
                    image: "/images/aboutBanner.jpeg"
                }), (0, Le.jsx)("div", {
                    className: "about-section company-intro",
                    children: (0, Le.jsxs)("div", {
                        className: "section-content",
                        children: [(0, Le.jsx)("h2", {
                            children: "\u516c\u53f8\u7c21\u4ecb"
                        }), (0, Le.jsx)("p", {
                            className: "intro-text",
                            children: "\u6211\u5011\u662f\u4e00\u5bb6\u5145\u6eff\u6d3b\u529b\u7684\u79d1\u6280\u521d\u5275\u516c\u53f8\uff0c\u5c08\u6ce8\u65bc\u70ba\u4f01\u696d\u63d0\u4f9b\u5275\u65b0\u7684\u6578\u4f4d\u89e3\u6c7a\u65b9\u6848\u3002 \u96d6\u7136\u6211\u5011\u662f\u521d\u5275\u516c\u53f8\uff0c\u4f46\u6211\u5011\u7684\u5718\u968a\u64c1\u6709\u8c50\u5bcc\u7684\u884c\u696d\u7d93\u9a57\u548c\u5c08\u696d\u77e5\u8b58\uff0c \u81f4\u529b\u65bc\u70ba\u5ba2\u6236\u63d0\u4f9b\u9ad8\u54c1\u8cea\u7684\u7db2\u7ad9\u958b\u767c\u3001\u79fb\u52d5\u61c9\u7528\u7a0b\u5f0f\u548c\u7cfb\u7d71\u6574\u5408\u670d\u52d9\u3002"
                        }), (0, Le.jsxs)("div", {
                            className: "company-stats",
                            children: [(0, Le.jsxs)("div", {
                                className: "stat-item",
                                children: [(0, Le.jsx)("h3", {
                                    children: "3+"
                                }), (0, Le.jsx)("p", {
                                    children: "\u5e74\u884c\u696d\u7d93\u9a57"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "stat-item",
                                children: [(0, Le.jsx)("h3", {
                                    children: "20+"
                                }), (0, Le.jsx)("p", {
                                    children: "\u6210\u529f\u6848\u4f8b"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "stat-item",
                                children: [(0, Le.jsx)("h3", {
                                    children: "5+"
                                }), (0, Le.jsx)("p", {
                                    children: "\u5c08\u696d\u5718\u968a"
                                })]
                            })]
                        })]
                    })
                }), (0, Le.jsx)("div", {
                    className: "about-section core-values",
                    children: (0, Le.jsxs)("div", {
                        className: "section-content",
                        children: [(0, Le.jsx)("h2", {
                            children: "\u6838\u5fc3\u50f9\u503c"
                        }), (0, Le.jsxs)("div", {
                            className: "values-grid",
                            children: [(0, Le.jsxs)("div", {
                                className: "value-item",
                                children: [(0, Le.jsx)("div", {
                                    className: "value-icon",
                                    children: (0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                }), (0, Le.jsx)("h3", {
                                    children: "\u5c08\u696d\u54c1\u8cea"
                                }), (0, Le.jsx)("p", {
                                    children: "\u5805\u6301\u9ad8\u6a19\u6e96\u7684\u958b\u767c\u898f\u7bc4\uff0c\u78ba\u4fdd\u6bcf\u500b\u9805\u76ee\u90fd\u80fd\u9054\u5230\u6700\u4f73\u54c1\u8cea"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "value-item",
                                children: [(0, Le.jsx)("div", {
                                    className: "value-icon",
                                    children: (0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M13 10V3L4 14h7v7l9-11h-7z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                }), (0, Le.jsx)("h3", {
                                    children: "\u5275\u65b0\u601d\u7dad"
                                }), (0, Le.jsx)("p", {
                                    children: "\u6301\u7e8c\u8ffd\u6c42\u6280\u8853\u5275\u65b0\uff0c\u70ba\u5ba2\u6236\u5e36\u4f86\u5177\u6709\u7af6\u722d\u529b\u7684\u89e3\u6c7a\u65b9\u6848"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "value-item",
                                children: [(0, Le.jsx)("div", {
                                    className: "value-icon",
                                    children: (0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                }), (0, Le.jsx)("h3", {
                                    children: "\u7528\u6236\u81f3\u4e0a"
                                }), (0, Le.jsx)("p", {
                                    children: "\u4ee5\u7528\u6236\u9700\u6c42\u70ba\u6838\u5fc3\uff0c\u6253\u9020\u76f4\u89c0\u4e14\u9ad8\u6548\u7684\u6578\u4f4d\u9ad4\u9a57"
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "value-item",
                                children: [(0, Le.jsx)("div", {
                                    className: "value-icon",
                                    children: (0, Le.jsx)("svg", {
                                        viewBox: "0 0 24 24",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        children: (0, Le.jsx)("path", {
                                            d: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        })
                                    })
                                }), (0, Le.jsx)("h3", {
                                    children: "\u6301\u7e8c\u6210\u9577"
                                }), (0, Le.jsx)("p", {
                                    children: "\u4e0d\u65b7\u5b78\u7fd2\u548c\u9032\u6b65\uff0c\u70ba\u5ba2\u6236\u63d0\u4f9b\u6700\u65b0\u7684\u6280\u8853\u89e3\u6c7a\u65b9\u6848"
                                })]
                            })]
                        })]
                    })
                }), (0, Le.jsx)("div", {
                    className: "about-section tech-support",
                    children: (0, Le.jsxs)("div", {
                        className: "section-content",
                        children: [(0, Le.jsx)("h2", {
                            children: "\u6280\u8853\u652f\u6301"
                        }), (0, Le.jsxs)("div", {
                            className: "tech-grid",
                            children: [(0, Le.jsxs)("div", {
                                className: "tech-category",
                                children: [(0, Le.jsx)("h3", {
                                    children: "\u524d\u7aef\u6280\u8853"
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-icons",
                                    children: [(0, Le.jsx)(Xe, {
                                        className: "tech-icon html",
                                        title: "HTML5"
                                    }), (0, Le.jsx)(qe, {
                                        className: "tech-icon css",
                                        title: "CSS3"
                                    }), (0, Le.jsx)(tn, {
                                        className: "tech-icon react",
                                        title: "React"
                                    }), (0, Le.jsx)(rn, {
                                        className: "tech-icon vue",
                                        title: "Vue.js"
                                    }), (0, Le.jsx)($e, {
                                        className: "tech-icon angular",
                                        title: "Angular"
                                    }), (0, Le.jsx)(qn, {
                                        className: "tech-icon typescript",
                                        title: "TypeScript"
                                    })]
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "tech-category",
                                children: [(0, Le.jsx)("h3", {
                                    children: "\u5f8c\u7aef\u6280\u8853"
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-icons",
                                    children: [(0, Le.jsx)(en, {
                                        className: "tech-icon nodejs",
                                        title: "Node.js"
                                    }), (0, Le.jsx)(nn, {
                                        className: "tech-icon python",
                                        title: "Python"
                                    }), (0, Le.jsx)(Ze, {
                                        className: "tech-icon java",
                                        title: "Java"
                                    })]
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "tech-category",
                                children: [(0, Le.jsx)("h3", {
                                    children: "\u6578\u64da\u5eab"
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-icons",
                                    children: [(0, Le.jsx)(Un, {
                                        className: "tech-icon mongodb",
                                        title: "MongoDB"
                                    }), (0, Le.jsx)(Qn, {
                                        className: "tech-icon postgresql",
                                        title: "PostgreSQL"
                                    }), (0, Le.jsx)($n, {
                                        className: "tech-icon mysql",
                                        title: "MySQL"
                                    }), (0, Le.jsx)(Vn, {
                                        className: "tech-icon firebase",
                                        title: "Firebase"
                                    })]
                                })]
                            }), (0, Le.jsxs)("div", {
                                className: "tech-category",
                                children: [(0, Le.jsx)("h3", {
                                    children: "\u96f2\u7aef\u670d\u52d9"
                                }), (0, Le.jsxs)("div", {
                                    className: "tech-icons",
                                    children: [(0, Le.jsx)(Qe, {
                                        className: "tech-icon aws",
                                        title: "AWS"
                                    }), (0, Le.jsx)(Ye, {
                                        className: "tech-icon gcp",
                                        title: "Google Cloud Platform"
                                    }), (0, Le.jsx)(Je, {
                                        className: "tech-icon azure",
                                        title: "Microsoft Azure"
                                    })]
                                })]
                            })]
                        })]
                    })
                })]
            }),
            Yn = () => (0, Le.jsx)("footer", {
                className: "footer",
                children: (0, Le.jsxs)("div", {
                    className: "footer-content",
                    children: [(0, Le.jsxs)("div", {
                        className: "contact-info",
                        children: [(0, Le.jsx)("h3", {
                            children: "\u806f\u7d61\u6211\u5011"
                        }), (0, Le.jsxs)("div", {
                            className: "contact-items",
                            children: [(0, Le.jsxs)("a", {
                                href: "mailto:info@zenithsoft.org",
                                className: "contact-item",
                                children: [(0, Le.jsx)(ln, {}), "info@zenithsoft.org"]
                            }), (0, Le.jsxs)("a", {
                                href: "https://instagram.com/your_instagram",
                                className: "contact-item",
                                children: [(0, Le.jsx)(Ge, {}), " @Zenithsoft"]
                            }), (0, Le.jsxs)("a", {
                                href: "https://wa.me/85294429080",
                                className: "contact-item",
                                children: [(0, Le.jsx)(an, {}), " +852 9442 9080"]
                            }), (0, Le.jsxs)("a", {
                                href: "https://facebook.com/your_facebook",
                                className: "contact-item",
                                children: [(0, Le.jsx)(Ke, {}), " Zenithsoft"]
                            })]
                        })]
                    }), (0, Le.jsx)("div", {
                        className: "copyright",
                        children: (0, Le.jsxs)("p", {
                            children: ["\xa9 ", (new Date).getFullYear(), " ZenithSoft Limited"]
                        })
                    })]
                })
            }),
            Xn = () => {
                const e = [{
                        id: 1,
                        url: "/images/silder1.jpeg",
                        title: "\u5c08\u696d\u7db2\u9801\u8a2d\u8a08\u670d\u52d9",
                        subtitle: "\u70ba\u60a8\u6253\u9020\u7368\u7279\u54c1\u724c\u5f62\u8c61\uff0c\u4f4e\u81f3 $2,800 \u8d77",
                        description: "\u97ff\u61c9\u5f0f\u8a2d\u8a08 | UI/UX\u512a\u5316 | \u54c1\u724c\u5b9a\u5236"
                    }, {
                        id: 2,
                        url: "/images/silder2.jpeg",
                        title: "\u5b9a\u5236\u5316\u624b\u6a5f\u61c9\u7528\u958b\u767c",
                        subtitle: "iOS \u53ca Android \u5168\u5e73\u53f0\u652f\u63f4\uff0c\u4f4e\u81f3 $48,000\u8d77",
                        description: "\u96d9\u5e73\u53f0\u517c\u5bb9 | \u96f2\u7aef\u540c\u6b65 | \u5c08\u4eba\u6280\u8853\u652f\u63f4"
                    }, {
                        id: 3,
                        url: "/images/silder3.jpeg",
                        title: "\u4f01\u696d\u7cfb\u7d71\u958b\u767c",
                        subtitle: "\u70ba\u60a8\u7684\u4f01\u696d\u63d0\u4f9b\u5b8c\u6574\u6280\u8853\u89e3\u6c7a\u65b9\u6848\uff0c\u5b9a\u5236\u65b9\u6848 $60,000 \u8d77",
                        description: "ERP\u7cfb\u7d71 | CRM\u5ba2\u6236\u7ba1\u7406 | \u6578\u64da\u5206\u6790"
                    }],
                    n = [{
                        icon: (0, Le.jsxs)("svg", {
                            viewBox: "0 0 24 24",
                            className: "service-icon",
                            fill: "none",
                            stroke: "currentColor",
                            children: [(0, Le.jsx)("path", {
                                d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
                                strokeWidth: "1.5"
                            }), (0, Le.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "1",
                                fill: "currentColor"
                            })]
                        }),
                        title: "\u7db2\u7ad9\u958b\u767c\u5c08\u5bb6",
                        description: "\u91cf\u8eab\u6253\u9020\u9ad8\u6548\u7db2\u9801\uff0c\u78ba\u4fdd\u7528\u6236\u9ad4\u9a57\u8207\u696d\u52d9\u76ee\u6a19\u5b8c\u7f8e\u7d50\u5408"
                    }, {
                        icon: (0, Le.jsxs)("svg", {
                            viewBox: "0 0 24 24",
                            className: "service-icon",
                            fill: "none",
                            stroke: "currentColor",
                            children: [(0, Le.jsx)("rect", {
                                x: "3",
                                y: "3",
                                width: "18",
                                height: "18",
                                rx: "2"
                            }), (0, Le.jsx)("path", {
                                d: "M7 8h10M7 12h10M7 16h10"
                            })]
                        }),
                        title: "App\u5275\u65b0\u5718\u968a",
                        description: "\u8de8\u5e73\u53f0\u61c9\u7528\u958b\u767c\uff0c\u5be6\u73fe\u60a8\u7684\u5275\u610f\u5f9e\u69cb\u601d\u5230\u4e0a\u7dda"
                    }, {
                        icon: (0, Le.jsxs)("svg", {
                            viewBox: "0 0 24 24",
                            className: "service-icon",
                            fill: "none",
                            stroke: "currentColor",
                            children: [(0, Le.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }), (0, Le.jsx)("path", {
                                d: "M12 16l4-4-4-4"
                            })]
                        }),
                        title: "\u7cfb\u7d71\u6574\u5408\u80fd\u624b",
                        description: "\u5b9a\u5236\u4f01\u696d\u7ba1\u7406\u7cfb\u7d71\uff0c\u512a\u5316\u5de5\u4f5c\u6d41\u7a0b\u63d0\u5347\u71df\u904b\u6548\u7387"
                    }, {
                        icon: (0, Le.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            className: "service-icon",
                            fill: "none",
                            stroke: "currentColor",
                            children: (0, Le.jsx)("path", {
                                d: "M12 5v14M5 12h14"
                            })
                        }),
                        title: "\u7cbe\u6e96\u884c\u92b7\u7b56\u7565",
                        description: "\u5ee3\u544a\u898f\u5283\u8207\u57f7\u884c\uff0c\u78ba\u4fdd\u6295\u653e\u7cbe\u6e96\uff0c\u6548\u679c\u500d\u589e"
                    }, {
                        icon: (0, Le.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            className: "service-icon",
                            fill: "none",
                            stroke: "currentColor",
                            children: (0, Le.jsx)("path", {
                                d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
                            })
                        }),
                        title: "\u667a\u80fd\u5316\u672a\u4f86",
                        description: "AI\u9a45\u52d5\u81ea\u52d5\u5316\u7cfb\u7d71\uff0c\u70ba\u60a8\u7684\u696d\u52d9\u6ce8\u5165\u672a\u4f86\u7af6\u722d\u529b"
                    }, {
                        icon: (0, Le.jsxs)("svg", {
                            viewBox: "0 0 24 24",
                            className: "service-icon",
                            fill: "none",
                            stroke: "currentColor",
                            children: [(0, Le.jsx)("rect", {
                                x: "3",
                                y: "3",
                                width: "18",
                                height: "18",
                                rx: "2",
                                ry: "2"
                            }), (0, Le.jsx)("path", {
                                d: "M8 12h8"
                            })]
                        }),
                        title: "\u6301\u7e8c\u512a\u5316\u627f\u8afe",
                        description: "\u5b9a\u671f\u7dad\u8b77\u66f4\u65b0\uff0c\u8b93\u60a8\u7684\u6578\u78bc\u8cc7\u7522\u6301\u7e8c\u589e\u503c"
                    }],
                    t = [{
                        title: "\u91ab\u7642\u7db2\u7ad9",
                        category: "\u7db2\u9801\u958b\u767c",
                        logo: "/images/web1.png",
                        image: "/images/web1.png"
                    }, {
                        title: "\u7522\u54c1\u92b7\u552e\u7db2\u7ad9",
                        category: "\u7db2\u9801\u958b\u767c",
                        logo: "/images/web2.png",
                        image: "/images/web2.png"
                    }, {
                        title: "\u8a00\u8a9e\u6cbb\u7642\u7db2\u7ad9",
                        category: "\u7db2\u9801\u958b\u767c",
                        logo: "/images/web3.png",
                        image: "/images/web3.png"
                    }, {
                        title: "\u6703\u8a08\u670d\u52d9\u7db2\u7ad9",
                        category: "\u7db2\u9801\u958b\u767c",
                        logo: "/images/web5.png",
                        image: "/images/web5.png"
                    }, {
                        title: "\u5834\u5730\u9810\u8a02\u7db2\u7ad9",
                        category: "\u7db2\u9801\u958b\u767c",
                        logo: "/images/web6.png",
                        image: "/images/web6.png"
                    }, {
                        title: "\u96fb\u5b50\u5546\u52d9\u7db2\u7ad9",
                        category: "\u7db2\u9801\u958b\u767c",
                        logo: "/images/web7.png",
                        image: "/images/web7.png"
                    }, {
                        title: "\u7db2\u5e97app ",
                        category: "\u7a0b\u5f0f\u958b\u767c",
                        logo: "/images/app1.jpeg",
                        image: "/images/app1.jpeg"
                    }, {
                        title: "\u5065\u5eb7app",
                        category: "\u7a0b\u5f0f\u958b\u767c",
                        logo: "/images/app2.jpeg",
                        image: "/images/app2.jpeg"
                    }, {
                        title: "\u7db2\u5e97app",
                        category: "\u7a0b\u5f0f\u958b\u767c",
                        logo: "/images/app3.jpeg",
                        image: "/images/app3.jpeg"
                    }, {
                        title: "\u7db2\u5e97app",
                        category: "\u7a0b\u5f0f\u958b\u767c",
                        logo: "/images/app4.jpeg",
                        image: "/images/app4.jpeg"
                    }, {
                        title: "ERP\u7ba1\u7406\u7cfb\u7d71",
                        category: "\u7cfb\u7d71\u958b\u767c",
                        logo: "/images/system1.jpeg",
                        image: "/images/system1.jpeg"
                    }, {
                        title: "POS\u7cfb\u7d71",
                        category: "\u7cfb\u7d71\u958b\u767c",
                        logo: "/images/system2.jpeg",
                        image: "/images/system2.jpeg"
                    }, {
                        title: "POS\u7cfb\u7d71",
                        category: "\u7cfb\u7d71\u958b\u767c",
                        logo: "/images/system3.jpeg",
                        image: "/images/system3.jpeg"
                    }, {
                        title: "CRM\u7cfb\u7d71",
                        category: "\u7cfb\u7d71\u958b\u767c",
                        logo: "/images/system4.jpeg",
                        image: "/images/system4.jpeg"
                    }],
                    r = () => (0, Le.jsxs)(Le.Fragment, {
                        children: [(0, Le.jsx)(fn, {
                            slides: e
                        }), (0, Le.jsx)(pn, {
                            services: n
                        }), (0, Le.jsx)(mn, {
                            cases: t
                        })]
                    });
                return (0, Le.jsx)(_e, {
                    children: (0, Le.jsx)(we, {
                        children: (0, Le.jsxs)("div", {
                            className: "main-container",
                            children: [(0, Le.jsx)(Hn, {}), (0, Le.jsx)(An, {}), (0, Le.jsxs)(xe, {
                                children: [(0, Le.jsx)(me, {
                                    path: "/",
                                    element: (0, Le.jsx)(r, {})
                                }), (0, Le.jsx)(me, {
                                    path: "/system",
                                    element: (0, Le.jsx)(cn, {})
                                }), (0, Le.jsx)(me, {
                                    path: "/web",
                                    element: (0, Le.jsx)(un, {})
                                }), (0, Le.jsx)(me, {
                                    path: "/app",
                                    element: (0, Le.jsx)(dn, {})
                                }), (0, Le.jsx)(me, {
                                    path: "/seo",
                                    element: (0, Le.jsx)(hn, {})
                                }), (0, Le.jsx)(me, {
                                    path: "/partners",
                                    element: (0, Le.jsx)("div", {
                                        children: "\u5408\u4f5c\u5925\u4f34\u9801\u9762"
                                    })
                                }), (0, Le.jsx)(me, {
                                    path: "/news",
                                    element: (0, Le.jsx)("div", {
                                        children: "\u6700\u65b0\u8cc7\u8a0a\u9801\u9762"
                                    })
                                }), (0, Le.jsx)(me, {
                                    path: "/contact",
                                    element: (0, Le.jsx)(on, {})
                                }), (0, Le.jsx)(me, {
                                    path: "/about",
                                    element: (0, Le.jsx)(Kn, {})
                                })]
                            }), (0, Le.jsx)(Fn, {}), (0, Le.jsx)(In, {}), (0, Le.jsx)(Yn, {})]
                        })
                    })
                })
            };
        (0, a.H)(document.getElementById("root")).render((0, Le.jsx)(n.StrictMode, {
            children: (0, Le.jsx)(_e, {
                children: (0, Le.jsx)(Xn, {})
            })
        }))
    })()
})();
//# sourceMappingURL=main.dc76201c.js.map