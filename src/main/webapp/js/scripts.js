! function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function(_, t) {
    var d = [],
        f = _.document,
        u = d.slice,
        g = d.concat,
        a = d.push,
        o = d.indexOf,
        n = {},
        e = n.toString,
        m = n.hasOwnProperty,
        v = {},
        i = "1.12.0",
        T = function(t, e) {
            return new T.fn.init(t, e)
        },
        r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        s = /^-ms-/,
        l = /-([\da-z])/gi,
        c = function(t, e) {
            return e.toUpperCase()
        };

    function h(t) {
        var e = !!t && "length" in t && t.length,
            n = T.type(t);
        return "function" !== n && !T.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }
    T.fn = T.prototype = {
        jquery: i,
        constructor: T,
        selector: "",
        length: 0,
        toArray: function() {
            return u.call(this)
        },
        get: function(t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : u.call(this)
        },
        pushStack: function(t) {
            var e = T.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t) {
            return T.each(this, t)
        },
        map: function(n) {
            return this.pushStack(T.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return this.pushStack(u.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= n && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: d.sort,
        splice: d.splice
    }, T.extend = T.fn.extend = function() {
        var t, e, n, i, o, r, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[a] || {}, a++), "object" == typeof s || T.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (o = arguments[a]))
                for (i in o) t = s[i], s !== (n = o[i]) && (c && n && (T.isPlainObject(n) || (e = T.isArray(n))) ? (e ? (e = !1, r = t && T.isArray(t) ? t : []) : r = t && T.isPlainObject(t) ? t : {}, s[i] = T.extend(c, r, n)) : void 0 !== n && (s[i] = n));
        return s
    }, T.extend({
        expando: "jQuery" + (i + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === T.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === T.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            var e = t && t.toString();
            return !T.isArray(t) && 0 <= e - parseFloat(e) + 1
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function(t) {
            var e;
            if (!t || "object" !== T.type(t) || t.nodeType || T.isWindow(t)) return !1;
            try {
                if (t.constructor && !m.call(t, "constructor") && !m.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            if (!v.ownFirst)
                for (e in t) return m.call(t, e);
            for (e in t);
            return void 0 === e || m.call(t, e)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[e.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            t && T.trim(t) && (_.execScript || function(t) {
                _.eval.call(_, t)
            })(t)
        },
        camelCase: function(t) {
            return t.replace(s, "ms-").replace(l, c)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e) {
            var n, i = 0;
            if (h(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i])) break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(r, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (h(Object(t)) ? T.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)), n
        },
        inArray: function(t, e, n) {
            var i;
            if (e) {
                if (o) return o.call(e, t, n);
                for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, o = t.length; i < n;) t[o++] = e[i++];
            if (n != n)
                for (; void 0 !== e[i];) t[o++] = e[i++];
            return t.length = o, t
        },
        grep: function(t, e, n) {
            for (var i = [], o = 0, r = t.length, s = !n; o < r; o++) !e(t[o], o) !== s && i.push(t[o]);
            return i
        },
        map: function(t, e, n) {
            var i, o, r = 0,
                s = [];
            if (h(t))
                for (i = t.length; r < i; r++) null != (o = e(t[r], r, n)) && s.push(o);
            else
                for (r in t) null != (o = e(t[r], r, n)) && s.push(o);
            return g.apply([], s)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, o;
            return "string" == typeof e && (o = t[e], e = t, t = o), T.isFunction(t) ? (n = u.call(arguments, 2), (i = function() {
                return t.apply(e || this, n.concat(u.call(arguments)))
            }).guid = t.guid = t.guid || T.guid++, i) : void 0
        },
        now: function() {
            return +new Date
        },
        support: v
    }), "function" == typeof Symbol && (T.fn[Symbol.iterator] = d[Symbol.iterator]), T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        n["[object " + e + "]"] = e.toLowerCase()
    });
    var p = function(n) {
        var t, f, x, r, o, g, d, m, w, l, c, C, _, s, T, v, a, u, y, S = "sizzle" + 1 * new Date,
            b = n.document,
            E = 0,
            i = 0,
            h = rt(),
            p = rt(),
            F = rt(),
            k = function(t, e) {
                return t === e && (c = !0), 0
            },
            $ = 1 << 31,
            D = {}.hasOwnProperty,
            e = [],
            P = e.pop,
            A = e.push,
            L = e.push,
            N = e.slice,
            M = function(t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            z = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            H = "\\[" + z + "*(" + R + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + z + "*\\]",
            I = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
            q = new RegExp(z + "+", "g"),
            O = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
            B = new RegExp("^" + z + "*," + z + "*"),
            W = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
            X = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
            Y = new RegExp(I),
            V = new RegExp("^" + R + "$"),
            U = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + H),
                PSEUDO: new RegExp("^" + I),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i")
            },
            G = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            J = /[+~]/,
            tt = /'|\\/g,
            et = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
            nt = function(t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            it = function() {
                C()
            };
        try {
            L.apply(e = N.call(b.childNodes), b.childNodes), e[b.childNodes.length].nodeType
        } catch (t) {
            L = {
                apply: e.length ? function(t, e) {
                    A.apply(t, N.call(e))
                } : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }

        function ot(t, e, n, i) {
            var o, r, s, a, l, c, u, d, h = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((e ? e.ownerDocument || e : b) !== _ && C(e), e = e || _, T)) {
                if (11 !== p && (c = K.exec(t)))
                    if (o = c[1]) {
                        if (9 === p) {
                            if (!(s = e.getElementById(o))) return n;
                            if (s.id === o) return n.push(s), n
                        } else if (h && (s = h.getElementById(o)) && y(e, s) && s.id === o) return n.push(s), n
                    } else {
                        if (c[2]) return L.apply(n, e.getElementsByTagName(t)), n;
                        if ((o = c[3]) && f.getElementsByClassName && e.getElementsByClassName) return L.apply(n, e.getElementsByClassName(o)), n
                    }
                if (f.qsa && !F[t + " "] && (!v || !v.test(t))) {
                    if (1 !== p) h = e, d = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(tt, "\\$&") : e.setAttribute("id", a = S), r = (u = g(t)).length, l = V.test(a) ? "#" + a : "[id='" + a + "']"; r--;) u[r] = l + " " + gt(u[r]);
                        d = u.join(","), h = J.test(t) && pt(e.parentNode) || e
                    }
                    if (d) try {
                        return L.apply(n, h.querySelectorAll(d)), n
                    } catch (t) {} finally {
                        a === S && e.removeAttribute("id")
                    }
                }
            }
            return m(t.replace(O, "$1"), e, n, i)
        }

        function rt() {
            var i = [];
            return function t(e, n) {
                return i.push(e + " ") > x.cacheLength && delete t[i.shift()], t[e + " "] = n
            }
        }

        function st(t) {
            return t[S] = !0, t
        }

        function at(t) {
            var e = _.createElement("div");
            try {
                return !!t(e)
            } catch (t) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function lt(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) x.attrHandle[n[i]] = e
        }

        function ct(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || $) - (~t.sourceIndex || $);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function ut(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }

        function dt(n) {
            return function(t) {
                var e = t.nodeName.toLowerCase();
                return ("input" === e || "button" === e) && t.type === n
            }
        }

        function ht(s) {
            return st(function(r) {
                return r = +r, st(function(t, e) {
                    for (var n, i = s([], t.length, r), o = i.length; o--;) t[n = i[o]] && (t[n] = !(e[n] = t[n]))
                })
            })
        }

        function pt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (t in f = ot.support = {}, o = ot.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, C = ot.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : b;
                return i !== _ && 9 === i.nodeType && i.documentElement && (s = (_ = i).documentElement, T = !o(_), (n = _.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", it, !1) : n.attachEvent && n.attachEvent("onunload", it)), f.attributes = at(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), f.getElementsByTagName = at(function(t) {
                    return t.appendChild(_.createComment("")), !t.getElementsByTagName("*").length
                }), f.getElementsByClassName = Z.test(_.getElementsByClassName), f.getById = at(function(t) {
                    return s.appendChild(t).id = S, !_.getElementsByName || !_.getElementsByName(S).length
                }), f.getById ? (x.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && T) {
                        var n = e.getElementById(t);
                        return n ? [n] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(et, nt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var n = t.replace(et, nt);
                    return function(t) {
                        var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return e && e.value === n
                    }
                }), x.find.TAG = f.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var n, i = [],
                        o = 0,
                        r = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; n = r[o++];) 1 === n.nodeType && i.push(n);
                        return i
                    }
                    return r
                }, x.find.CLASS = f.getElementsByClassName && function(t, e) {
                    return void 0 !== e.getElementsByClassName && T ? e.getElementsByClassName(t) : void 0
                }, a = [], v = [], (f.qsa = Z.test(_.querySelectorAll)) && (at(function(t) {
                    s.appendChild(t).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[" + z + "*(?:value|" + j + ")"), t.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
                }), at(function(t) {
                    var e = _.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name" + z + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                })), (f.matchesSelector = Z.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && at(function(t) {
                    f.disconnectedMatch = u.call(t, "div"), u.call(t, "[s!='']:x"), a.push("!=", I)
                }), v = v.length && new RegExp(v.join("|")), a = a.length && new RegExp(a.join("|")), e = Z.test(s.compareDocumentPosition), y = e || Z.test(s.contains) ? function(t, e) {
                    var n = 9 === t.nodeType ? t.documentElement : t,
                        i = e && e.parentNode;
                    return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, k = e ? function(t, e) {
                    if (t === e) return c = !0, 0;
                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === n ? t === _ || t.ownerDocument === b && y(b, t) ? -1 : e === _ || e.ownerDocument === b && y(b, e) ? 1 : l ? M(l, t) - M(l, e) : 0 : 4 & n ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return c = !0, 0;
                    var n, i = 0,
                        o = t.parentNode,
                        r = e.parentNode,
                        s = [t],
                        a = [e];
                    if (!o || !r) return t === _ ? -1 : e === _ ? 1 : o ? -1 : r ? 1 : l ? M(l, t) - M(l, e) : 0;
                    if (o === r) return ct(t, e);
                    for (n = t; n = n.parentNode;) s.unshift(n);
                    for (n = e; n = n.parentNode;) a.unshift(n);
                    for (; s[i] === a[i];) i++;
                    return i ? ct(s[i], a[i]) : s[i] === b ? -1 : a[i] === b ? 1 : 0
                }), _
            }, ot.matches = function(t, e) {
                return ot(t, null, null, e)
            }, ot.matchesSelector = function(t, e) {
                if ((t.ownerDocument || t) !== _ && C(t), e = e.replace(X, "='$1']"), f.matchesSelector && T && !F[e + " "] && (!a || !a.test(e)) && (!v || !v.test(e))) try {
                    var n = u.call(t, e);
                    if (n || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return 0 < ot(e, _, null, [t]).length
            }, ot.contains = function(t, e) {
                return (t.ownerDocument || t) !== _ && C(t), y(t, e)
            }, ot.attr = function(t, e) {
                (t.ownerDocument || t) !== _ && C(t);
                var n = x.attrHandle[e.toLowerCase()],
                    i = n && D.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !T) : void 0;
                return void 0 !== i ? i : f.attributes || !T ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }, ot.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, ot.uniqueSort = function(t) {
                var e, n = [],
                    i = 0,
                    o = 0;
                if (c = !f.detectDuplicates, l = !f.sortStable && t.slice(0), t.sort(k), c) {
                    for (; e = t[o++];) e === t[o] && (i = n.push(o));
                    for (; i--;) t.splice(n[i], 1)
                }
                return l = null, t
            }, r = ot.getText = function(t) {
                var e, n = "",
                    i = 0,
                    o = t.nodeType;
                if (o) {
                    if (1 === o || 9 === o || 11 === o) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) n += r(t)
                    } else if (3 === o || 4 === o) return t.nodeValue
                } else
                    for (; e = t[i++];) n += r(e);
                return n
            }, (x = ot.selectors = {
                cacheLength: 50,
                createPseudo: st,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return U.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && Y.test(n) && (e = g(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(et, nt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = h[t + " "];
                        return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && h(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, i, o) {
                        return function(t) {
                            var e = ot.attr(t, n);
                            return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === o : "!=" === i ? e !== o : "^=" === i ? o && 0 === e.indexOf(o) : "*=" === i ? o && -1 < e.indexOf(o) : "$=" === i ? o && e.slice(-o.length) === o : "~=" === i ? -1 < (" " + e.replace(q, " ") + " ").indexOf(o) : "|=" === i && (e === o || e.slice(0, o.length + 1) === o + "-"))
                        }
                    },
                    CHILD: function(f, t, e, g, m) {
                        var v = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === t;
                        return 1 === g && 0 === m ? function(t) {
                            return !!t.parentNode
                        } : function(t, e, n) {
                            var i, o, r, s, a, l, c = v !== y ? "nextSibling" : "previousSibling",
                                u = t.parentNode,
                                d = b && t.nodeName.toLowerCase(),
                                h = !n && !b,
                                p = !1;
                            if (u) {
                                if (v) {
                                    for (; c;) {
                                        for (s = t; s = s[c];)
                                            if (b ? s.nodeName.toLowerCase() === d : 1 === s.nodeType) return !1;
                                        l = c = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && h) {
                                    for (p = (a = (i = (o = (r = (s = u)[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === E && i[1]) && i[2], s = a && u.childNodes[a]; s = ++a && s && s[c] || (p = a = 0) || l.pop();)
                                        if (1 === s.nodeType && ++p && s === t) {
                                            o[f] = [E, a, p];
                                            break
                                        }
                                } else if (h && (p = a = (i = (o = (r = (s = t)[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] || [])[0] === E && i[1]), !1 === p)
                                    for (;
                                        (s = ++a && s && s[c] || (p = a = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== d : 1 !== s.nodeType) || !++p || (h && ((o = (r = s[S] || (s[S] = {}))[s.uniqueID] || (r[s.uniqueID] = {}))[f] = [E, p]), s !== t)););
                                return (p -= m) === g || p % g == 0 && 0 <= p / g
                            }
                        }
                    },
                    PSEUDO: function(t, r) {
                        var e, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                        return s[S] ? s(r) : 1 < s.length ? (e = [t, t, "", r], x.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, e) {
                            for (var n, i = s(t, r), o = i.length; o--;) t[n = M(t, i[o])] = !(e[n] = i[o])
                        }) : function(t) {
                            return s(t, 0, e)
                        }) : s
                    }
                },
                pseudos: {
                    not: st(function(t) {
                        var i = [],
                            o = [],
                            a = d(t.replace(O, "$1"));
                        return a[S] ? st(function(t, e, n, i) {
                            for (var o, r = a(t, null, i, []), s = t.length; s--;)(o = r[s]) && (t[s] = !(e[s] = o))
                        }) : function(t, e, n) {
                            return i[0] = t, a(i, null, n, o), i[0] = null, !o.pop()
                        }
                    }),
                    has: st(function(e) {
                        return function(t) {
                            return 0 < ot(e, t).length
                        }
                    }),
                    contains: st(function(e) {
                        return e = e.replace(et, nt),
                            function(t) {
                                return -1 < (t.textContent || t.innerText || r(t)).indexOf(e)
                            }
                    }),
                    lang: st(function(n) {
                        return V.test(n || "") || ot.error("unsupported lang: " + n), n = n.replace(et, nt).toLowerCase(),
                            function(t) {
                                var e;
                                do {
                                    if (e = T ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
                                } while ((t = t.parentNode) && 1 === t.nodeType);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var e = n.location && n.location.hash;
                        return e && e.slice(1) === t.id
                    },
                    root: function(t) {
                        return t === s
                    },
                    focus: function(t) {
                        return t === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return Q.test(t.nodeName)
                    },
                    input: function(t) {
                        return G.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: ht(function() {
                        return [0]
                    }),
                    last: ht(function(t, e) {
                        return [e - 1]
                    }),
                    eq: ht(function(t, e, n) {
                        return [n < 0 ? n + e : n]
                    }),
                    even: ht(function(t, e) {
                        for (var n = 0; n < e; n += 2) t.push(n);
                        return t
                    }),
                    odd: ht(function(t, e) {
                        for (var n = 1; n < e; n += 2) t.push(n);
                        return t
                    }),
                    lt: ht(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
                        return t
                    }),
                    gt: ht(function(t, e, n) {
                        for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                        return t
                    })
                }
            }).pseudos.nth = x.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) x.pseudos[t] = ut(t);
        for (t in {
                submit: !0,
                reset: !0
            }) x.pseudos[t] = dt(t);

        function ft() {}

        function gt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function mt(a, t, e) {
            var l = t.dir,
                c = e && "parentNode" === l,
                u = i++;
            return t.first ? function(t, e, n) {
                for (; t = t[l];)
                    if (1 === t.nodeType || c) return a(t, e, n)
            } : function(t, e, n) {
                var i, o, r, s = [E, u];
                if (n) {
                    for (; t = t[l];)
                        if ((1 === t.nodeType || c) && a(t, e, n)) return !0
                } else
                    for (; t = t[l];)
                        if (1 === t.nodeType || c) {
                            if ((i = (o = (r = t[S] || (t[S] = {}))[t.uniqueID] || (r[t.uniqueID] = {}))[l]) && i[0] === E && i[1] === u) return s[2] = i[2];
                            if ((o[l] = s)[2] = a(t, e, n)) return !0
                        }
            }
        }

        function vt(o) {
            return 1 < o.length ? function(t, e, n) {
                for (var i = o.length; i--;)
                    if (!o[i](t, e, n)) return !1;
                return !0
            } : o[0]
        }

        function yt(t, e, n, i, o) {
            for (var r, s = [], a = 0, l = t.length, c = null != e; a < l; a++)(r = t[a]) && (!n || n(r, i, o)) && (s.push(r), c && e.push(a));
            return s
        }

        function bt(p, f, g, m, v, t) {
            return m && !m[S] && (m = bt(m)), v && !v[S] && (v = bt(v, t)), st(function(t, e, n, i) {
                var o, r, s, a = [],
                    l = [],
                    c = e.length,
                    u = t || function(t, e, n) {
                        for (var i = 0, o = e.length; i < o; i++) ot(t, e[i], n);
                        return n
                    }(f || "*", n.nodeType ? [n] : n, []),
                    d = !p || !t && f ? u : yt(u, a, p, n, i),
                    h = g ? v || (t ? p : c || m) ? [] : e : d;
                if (g && g(d, h, n, i), m)
                    for (o = yt(h, l), m(o, [], n, i), r = o.length; r--;)(s = o[r]) && (h[l[r]] = !(d[l[r]] = s));
                if (t) {
                    if (v || p) {
                        if (v) {
                            for (o = [], r = h.length; r--;)(s = h[r]) && o.push(d[r] = s);
                            v(null, h = [], o, i)
                        }
                        for (r = h.length; r--;)(s = h[r]) && -1 < (o = v ? M(t, s) : a[r]) && (t[o] = !(e[o] = s))
                    }
                } else h = yt(h === e ? h.splice(c, h.length) : h), v ? v(null, e, h, i) : L.apply(e, h)
            })
        }

        function xt(t) {
            for (var o, e, n, i = t.length, r = x.relative[t[0].type], s = r || x.relative[" "], a = r ? 1 : 0, l = mt(function(t) {
                    return t === o
                }, s, !0), c = mt(function(t) {
                    return -1 < M(o, t)
                }, s, !0), u = [function(t, e, n) {
                    var i = !r && (n || e !== w) || ((o = e).nodeType ? l(t, e, n) : c(t, e, n));
                    return o = null, i
                }]; a < i; a++)
                if (e = x.relative[t[a].type]) u = [mt(vt(u), e)];
                else {
                    if ((e = x.filter[t[a].type].apply(null, t[a].matches))[S]) {
                        for (n = ++a; n < i && !x.relative[t[n].type]; n++);
                        return bt(1 < a && vt(u), 1 < a && gt(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(O, "$1"), e, a < n && xt(t.slice(a, n)), n < i && xt(t = t.slice(n)), n < i && gt(t))
                    }
                    u.push(e)
                }
            return vt(u)
        }
        return ft.prototype = x.filters = x.pseudos, x.setFilters = new ft, g = ot.tokenize = function(t, e) {
            var n, i, o, r, s, a, l, c = p[t + " "];
            if (c) return e ? 0 : c.slice(0);
            for (s = t, a = [], l = x.preFilter; s;) {
                for (r in (!n || (i = B.exec(s))) && (i && (s = s.slice(i[0].length) || s), a.push(o = [])), n = !1, (i = W.exec(s)) && (n = i.shift(), o.push({
                        value: n,
                        type: i[0].replace(O, " ")
                    }), s = s.slice(n.length)), x.filter) !(i = U[r].exec(s)) || l[r] && !(i = l[r](i)) || (n = i.shift(), o.push({
                    value: n,
                    type: r,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return e ? s.length : s ? ot.error(t) : p(t, a).slice(0)
        }, d = ot.compile = function(t, e) {
            var n, m, v, y, b, i, o = [],
                r = [],
                s = F[t + " "];
            if (!s) {
                for (e || (e = g(t)), n = e.length; n--;)(s = xt(e[n]))[S] ? o.push(s) : r.push(s);
                (s = F(t, (m = r, y = 0 < (v = o).length, b = 0 < m.length, i = function(t, e, n, i, o) {
                    var r, s, a, l = 0,
                        c = "0",
                        u = t && [],
                        d = [],
                        h = w,
                        p = t || b && x.find.TAG("*", o),
                        f = E += null == h ? 1 : Math.random() || .1,
                        g = p.length;
                    for (o && (w = e === _ || e || o); c !== g && null != (r = p[c]); c++) {
                        if (b && r) {
                            for (s = 0, e || r.ownerDocument === _ || (C(r), n = !T); a = m[s++];)
                                if (a(r, e || _, n)) {
                                    i.push(r);
                                    break
                                }
                            o && (E = f)
                        }
                        y && ((r = !a && r) && l--, t && u.push(r))
                    }
                    if (l += c, y && c !== l) {
                        for (s = 0; a = v[s++];) a(u, d, e, n);
                        if (t) {
                            if (0 < l)
                                for (; c--;) u[c] || d[c] || (d[c] = P.call(i));
                            d = yt(d)
                        }
                        L.apply(i, d), o && !t && 0 < d.length && 1 < l + v.length && ot.uniqueSort(i)
                    }
                    return o && (E = f, w = h), u
                }, y ? st(i) : i))).selector = t
            }
            return s
        }, m = ot.select = function(t, e, n, i) {
            var o, r, s, a, l, c = "function" == typeof t && t,
                u = !i && g(t = c.selector || t);
            if (n = n || [], 1 === u.length) {
                if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (s = r[0]).type && f.getById && 9 === e.nodeType && T && x.relative[r[1].type]) {
                    if (!(e = (x.find.ID(s.matches[0].replace(et, nt), e) || [])[0])) return n;
                    c && (e = e.parentNode), t = t.slice(r.shift().value.length)
                }
                for (o = U.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !x.relative[a = s.type]);)
                    if ((l = x.find[a]) && (i = l(s.matches[0].replace(et, nt), J.test(r[0].type) && pt(e.parentNode) || e))) {
                        if (r.splice(o, 1), !(t = i.length && gt(r))) return L.apply(n, i), n;
                        break
                    }
            }
            return (c || d(t, u))(i, e, !T, n, !e || J.test(t) && pt(e.parentNode) || e), n
        }, f.sortStable = S.split("").sort(k).join("") === S, f.detectDuplicates = !!c, C(), f.sortDetached = at(function(t) {
            return 1 & t.compareDocumentPosition(_.createElement("div"))
        }), at(function(t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || lt("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), f.attributes && at(function(t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || lt("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }), at(function(t) {
            return null == t.getAttribute("disabled")
        }) || lt(j, function(t, e, n) {
            var i;
            return n ? void 0 : !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), ot
    }(_);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.uniqueSort = T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains;
    var y = function(t, e, n) {
            for (var i = [], o = void 0 !== n;
                (t = t[e]) && 9 !== t.nodeType;)
                if (1 === t.nodeType) {
                    if (o && T(t).is(n)) break;
                    i.push(t)
                }
            return i
        },
        b = function(t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        x = T.expr.match.needsContext,
        w = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        C = /^.[^:#\[\.,]*$/;

    function S(t, n, i) {
        if (T.isFunction(n)) return T.grep(t, function(t, e) {
            return !!n.call(t, e, t) !== i
        });
        if (n.nodeType) return T.grep(t, function(t) {
            return t === n !== i
        });
        if ("string" == typeof n) {
            if (C.test(n)) return T.filter(n, t, i);
            n = T.filter(n, t)
        }
        return T.grep(t, function(t) {
            return -1 < T.inArray(t, n) !== i
        })
    }
    T.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? T.find.matchesSelector(i, t) ? [i] : [] : T.find.matches(t, T.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }, T.fn.extend({
        find: function(t) {
            var e, n = [],
                i = this,
                o = i.length;
            if ("string" != typeof t) return this.pushStack(T(t).filter(function() {
                for (e = 0; e < o; e++)
                    if (T.contains(i[e], this)) return !0
            }));
            for (e = 0; e < o; e++) T.find(t, i[e], n);
            return (n = this.pushStack(1 < o ? T.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function(t) {
            return this.pushStack(S(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(S(this, t || [], !0))
        },
        is: function(t) {
            return !!S(this, "string" == typeof t && x.test(t) ? T(t) : t || [], !1).length
        }
    });
    var E, F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (T.fn.init = function(t, e, n) {
        var i, o;
        if (!t) return this;
        if (n = n || E, "string" == typeof t) {
            if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : F.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof T ? e[0] : e, T.merge(this, T.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : f, !0)), w.test(i[1]) && T.isPlainObject(e))
                    for (i in e) T.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if ((o = f.getElementById(i[2])) && o.parentNode) {
                if (o.id !== i[2]) return E.find(t);
                this.length = 1, this[0] = o
            }
            return this.context = f, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : T.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(T) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), T.makeArray(t, this))
    }).prototype = T.fn, E = T(f);
    var k = /^(?:parents|prev(?:Until|All))/,
        $ = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function D(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }
    T.fn.extend({
        has: function(t) {
            var e, n = T(t, this),
                i = n.length;
            return this.filter(function() {
                for (e = 0; e < i; e++)
                    if (T.contains(this, n[e])) return !0
            })
        },
        closest: function(t, e) {
            for (var n, i = 0, o = this.length, r = [], s = x.test(t) || "string" != typeof t ? T(t, e || this.context) : 0; i < o; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, t))) {
                        r.push(n);
                        break
                    }
            return this.pushStack(1 < r.length ? T.uniqueSort(r) : r)
        },
        index: function(t) {
            return t ? "string" == typeof t ? T.inArray(this[0], T(t)) : T.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(T.uniqueSort(T.merge(this.get(), T(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), T.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return y(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return y(t, "parentNode", n)
        },
        next: function(t) {
            return D(t, "nextSibling")
        },
        prev: function(t) {
            return D(t, "previousSibling")
        },
        nextAll: function(t) {
            return y(t, "nextSibling")
        },
        prevAll: function(t) {
            return y(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return y(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return y(t, "previousSibling", n)
        },
        siblings: function(t) {
            return b((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return b(t.firstChild)
        },
        contents: function(t) {
            return T.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : T.merge([], t.childNodes)
        }
    }, function(i, o) {
        T.fn[i] = function(t, e) {
            var n = T.map(this, o, t);
            return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = T.filter(e, n)), 1 < this.length && ($[i] || (n = T.uniqueSort(n)), k.test(i) && (n = n.reverse())), this.pushStack(n)
        }
    });
    var P, A, L = /\S+/g;

    function N() {
        f.addEventListener ? (f.removeEventListener("DOMContentLoaded", M), _.removeEventListener("load", M)) : (f.detachEvent("onreadystatechange", M), _.detachEvent("onload", M))
    }

    function M() {
        (f.addEventListener || "load" === _.event.type || "complete" === f.readyState) && (N(), T.ready())
    }
    for (A in T.Callbacks = function(i) {
            var t, n;
            i = "string" == typeof i ? (t = i, n = {}, T.each(t.match(L) || [], function(t, e) {
                n[e] = !0
            }), n) : T.extend({}, i);
            var o, e, r, s, a = [],
                l = [],
                c = -1,
                u = function() {
                    for (s = i.once, r = o = !0; l.length; c = -1)
                        for (e = l.shift(); ++c < a.length;) !1 === a[c].apply(e[0], e[1]) && i.stopOnFalse && (c = a.length, e = !1);
                    i.memory || (e = !1), o = !1, s && (a = e ? [] : "")
                },
                d = {
                    add: function() {
                        return a && (e && !o && (c = a.length - 1, l.push(e)), function n(t) {
                            T.each(t, function(t, e) {
                                T.isFunction(e) ? i.unique && d.has(e) || a.push(e) : e && e.length && "string" !== T.type(e) && n(e)
                            })
                        }(arguments), e && !o && u()), this
                    },
                    remove: function() {
                        return T.each(arguments, function(t, e) {
                            for (var n; - 1 < (n = T.inArray(e, a, n));) a.splice(n, 1), n <= c && c--
                        }), this
                    },
                    has: function(t) {
                        return t ? -1 < T.inArray(t, a) : 0 < a.length
                    },
                    empty: function() {
                        return a && (a = []), this
                    },
                    disable: function() {
                        return s = l = [], a = e = "", this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        return s = !0, e || d.disable(), this
                    },
                    locked: function() {
                        return !!s
                    },
                    fireWith: function(t, e) {
                        return s || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), o || u()), this
                    },
                    fire: function() {
                        return d.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return d
        }, T.extend({
            Deferred: function(t) {
                var r = [
                        ["resolve", "done", T.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", T.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", T.Callbacks("memory")]
                    ],
                    o = "pending",
                    s = {
                        state: function() {
                            return o
                        },
                        always: function() {
                            return a.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var o = arguments;
                            return T.Deferred(function(i) {
                                T.each(r, function(t, e) {
                                    var n = T.isFunction(o[t]) && o[t];
                                    a[e[1]](function() {
                                        var t = n && n.apply(this, arguments);
                                        t && T.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this === s ? i.promise() : this, n ? [t] : arguments)
                                    })
                                }), o = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? T.extend(t, s) : s
                        }
                    },
                    a = {};
                return s.pipe = s.then, T.each(r, function(t, e) {
                    var n = e[2],
                        i = e[3];
                    s[e[1]] = n.add, i && n.add(function() {
                        o = i
                    }, r[1 ^ t][2].disable, r[2][2].lock), a[e[0]] = function() {
                        return a[e[0] + "With"](this === a ? s : this, arguments), this
                    }, a[e[0] + "With"] = n.fireWith
                }), s.promise(a), t && t.call(a, a), a
            },
            when: function(t) {
                var o, e, n, i = 0,
                    r = u.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && T.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : T.Deferred(),
                    c = function(e, n, i) {
                        return function(t) {
                            n[e] = this, i[e] = 1 < arguments.length ? u.call(arguments) : t, i === o ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                        }
                    };
                if (1 < s)
                    for (o = new Array(s), e = new Array(s), n = new Array(s); i < s; i++) r[i] && T.isFunction(r[i].promise) ? r[i].promise().progress(c(i, e, o)).done(c(i, n, r)).fail(l.reject) : --a;
                return a || l.resolveWith(n, r), l.promise()
            }
        }), T.fn.ready = function(t) {
            return T.ready.promise().done(t), this
        }, T.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? T.readyWait++ : T.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --T.readyWait : T.isReady) || ((T.isReady = !0) !== t && 0 < --T.readyWait || (P.resolveWith(f, [T]), T.fn.triggerHandler && (T(f).triggerHandler("ready"), T(f).off("ready"))))
            }
        }), T.ready.promise = function(t) {
            if (!P)
                if (P = T.Deferred(), "complete" === f.readyState) _.setTimeout(T.ready);
                else if (f.addEventListener) f.addEventListener("DOMContentLoaded", M), _.addEventListener("load", M);
            else {
                f.attachEvent("onreadystatechange", M), _.attachEvent("onload", M);
                var n = !1;
                try {
                    n = null == _.frameElement && f.documentElement
                } catch (t) {}
                n && n.doScroll && function e() {
                    if (!T.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return _.setTimeout(e, 50)
                        }
                        N(), T.ready()
                    }
                }()
            }
            return P.promise(t)
        }, T.ready.promise(), T(v)) break;
    v.ownFirst = "0" === A, v.inlineBlockNeedsLayout = !1, T(function() {
            var t, e, n, i;
            (n = f.getElementsByTagName("body")[0]) && n.style && (e = f.createElement("div"), (i = f.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), void 0 !== e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
        }),
        function() {
            var t = f.createElement("div");
            v.deleteExpando = !0;
            try {
                delete t.test
            } catch (t) {
                v.deleteExpando = !1
            }
            t = null
        }();
    var j, z = function(t) {
            var e = T.noData[(t.nodeName + " ").toLowerCase()],
                n = +t.nodeType || 1;
            return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
        },
        R = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        H = /([A-Z])/g;

    function I(t, e, n) {
        if (void 0 === n && 1 === t.nodeType) {
            var i = "data-" + e.replace(H, "-$1").toLowerCase();
            if ("string" == typeof(n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : R.test(n) ? T.parseJSON(n) : n)
                } catch (t) {}
                T.data(t, e, n)
            } else n = void 0
        }
        return n
    }

    function q(t) {
        var e;
        for (e in t)
            if (("data" !== e || !T.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function O(t, e, n, i) {
        if (z(t)) {
            var o, r, s = T.expando,
                a = t.nodeType,
                l = a ? T.cache : t,
                c = a ? t[s] : t[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof e) return c || (c = a ? t[s] = d.pop() || T.guid++ : s), l[c] || (l[c] = a ? {} : {
                toJSON: T.noop
            }), ("object" == typeof e || "function" == typeof e) && (i ? l[c] = T.extend(l[c], e) : l[c].data = T.extend(l[c].data, e)), r = l[c], i || (r.data || (r.data = {}), r = r.data), void 0 !== n && (r[T.camelCase(e)] = n), "string" == typeof e ? null == (o = r[e]) && (o = r[T.camelCase(e)]) : o = r, o
        }
    }

    function B(t, e, n) {
        if (z(t)) {
            var i, o, r = t.nodeType,
                s = r ? T.cache : t,
                a = r ? t[T.expando] : T.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    T.isArray(e) ? e = e.concat(T.map(e, T.camelCase)) : e in i ? e = [e] : e = (e = T.camelCase(e)) in i ? [e] : e.split(" "), o = e.length;
                    for (; o--;) delete i[e[o]];
                    if (n ? !q(i) : !T.isEmptyObject(i)) return
                }(n || (delete s[a].data, q(s[a]))) && (r ? T.cleanData([t], !0) : v.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }
    T.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? T.cache[t[T.expando]] : t[T.expando]) && !q(t)
        },
        data: function(t, e, n) {
            return O(t, e, n)
        },
        removeData: function(t, e) {
            return B(t, e)
        },
        _data: function(t, e, n) {
            return O(t, e, n, !0)
        },
        _removeData: function(t, e) {
            return B(t, e, !0)
        }
    }), T.fn.extend({
        data: function(t, e) {
            var n, i, o, r = this[0],
                s = r && r.attributes;
            if (void 0 === t) {
                if (this.length && (o = T.data(r), 1 === r.nodeType && !T._data(r, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && (0 === (i = s[n].name).indexOf("data-") && I(r, i = T.camelCase(i.slice(5)), o[i]));
                    T._data(r, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof t ? this.each(function() {
                T.data(this, t)
            }) : 1 < arguments.length ? this.each(function() {
                T.data(this, t, e)
            }) : r ? I(r, t, T.data(r, t)) : void 0
        },
        removeData: function(t) {
            return this.each(function() {
                T.removeData(this, t)
            })
        }
    }), T.extend({
        queue: function(t, e, n) {
            var i;
            return t ? (e = (e || "fx") + "queue", i = T._data(t, e), n && (!i || T.isArray(n) ? i = T._data(t, e, T.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var n = T.queue(t, e),
                i = n.length,
                o = n.shift(),
                r = T._queueHooks(t, e);
            "inprogress" === o && (o = n.shift(), i--), o && ("fx" === e && n.unshift("inprogress"), delete r.stop, o.call(t, function() {
                T.dequeue(t, e)
            }, r)), !i && r && r.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return T._data(t, n) || T._data(t, n, {
                empty: T.Callbacks("once memory").add(function() {
                    T._removeData(t, e + "queue"), T._removeData(t, n)
                })
            })
        }
    }), T.fn.extend({
        queue: function(e, n) {
            var t = 2;
            return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? T.queue(this[0], e) : void 0 === n ? this : this.each(function() {
                var t = T.queue(this, e, n);
                T._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && T.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                T.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1,
                o = T.Deferred(),
                r = this,
                s = this.length,
                a = function() {
                    --i || o.resolveWith(r, [r])
                };
            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(n = T._data(r[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), o.promise(e)
        }
    }), v.shrinkWrapBlocks = function() {
        return null != j ? j : (j = !1, (e = f.getElementsByTagName("body")[0]) && e.style ? (t = f.createElement("div"), (n = f.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(f.createElement("div")).style.width = "5px", j = 3 !== t.offsetWidth), e.removeChild(n), j) : void 0);
        var t, e, n
    };
    var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        X = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
        Y = ["Top", "Right", "Bottom", "Left"],
        V = function(t, e) {
            return t = e || t, "none" === T.css(t, "display") || !T.contains(t.ownerDocument, t)
        };

    function U(t, e, n, i) {
        var o, r = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return T.css(t, e, "")
            },
            l = a(),
            c = n && n[3] || (T.cssNumber[e] ? "" : "px"),
            u = (T.cssNumber[e] || "px" !== c && +l) && X.exec(T.css(t, e));
        if (u && u[3] !== c)
            for (c = c || u[3], n = n || [], u = +l || 1; u /= r = r || ".5", T.style(t, e, u + c), r !== (r = a() / l) && 1 !== r && --s;);
        return n && (u = +u || +l || 0, o = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = c, i.start = u, i.end = o)), o
    }
    var G, Q, Z, K = function(t, e, n, i, o, r, s) {
            var a = 0,
                l = t.length,
                c = null == n;
            if ("object" === T.type(n))
                for (a in o = !0, n) K(t, e, a, n[a], !0, r, s);
            else if (void 0 !== i && (o = !0, T.isFunction(i) || (s = !0), c && (s ? (e.call(t, i), e = null) : (c = e, e = function(t, e, n) {
                    return c.call(T(t), n)
                })), e))
                for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return o ? t : c ? e.call(t) : l ? e(t[0], n) : r
        },
        J = /^(?:checkbox|radio)$/i,
        tt = /<([\w:-]+)/,
        et = /^$|\/(?:java|ecma)script/i,
        nt = /^\s+/,
        it = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";

    function ot(t) {
        var e = it.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }
    G = f.createElement("div"), Q = f.createDocumentFragment(), Z = f.createElement("input"), G.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === G.firstChild.nodeType, v.tbody = !G.getElementsByTagName("tbody").length, v.htmlSerialize = !!G.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== f.createElement("nav").cloneNode(!0).outerHTML, Z.type = "checkbox", Z.checked = !0, Q.appendChild(Z), v.appendChecked = Z.checked, G.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!G.cloneNode(!0).lastChild.defaultValue, Q.appendChild(G), (Z = f.createElement("input")).setAttribute("type", "radio"), Z.setAttribute("checked", "checked"), Z.setAttribute("name", "t"), G.appendChild(Z), v.checkClone = G.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !!G.addEventListener, G[T.expando] = 1, v.attributes = !G.getAttribute(T.expando);
    var rt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };

    function st(t, e) {
        var n, i, o = 0,
            r = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : void 0;
        if (!r)
            for (r = [], n = t.childNodes || t; null != (i = n[o]); o++) !e || T.nodeName(i, e) ? r.push(i) : T.merge(r, st(i, e));
        return void 0 === e || e && T.nodeName(t, e) ? T.merge([t], r) : r
    }

    function at(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) T._data(n, "globalEval", !e || T._data(e[i], "globalEval"))
    }
    rt.optgroup = rt.option, rt.tbody = rt.tfoot = rt.colgroup = rt.caption = rt.thead, rt.th = rt.td;
    var lt = /<|&#?\w+;/,
        ct = /<tbody/i;

    function ut(t) {
        J.test(t.type) && (t.defaultChecked = t.checked)
    }

    function dt(t, e, n, i, o) {
        for (var r, s, a, l, c, u, d, h = t.length, p = ot(e), f = [], g = 0; g < h; g++)
            if ((s = t[g]) || 0 === s)
                if ("object" === T.type(s)) T.merge(f, s.nodeType ? [s] : s);
                else if (lt.test(s)) {
            for (l = l || p.appendChild(e.createElement("div")), c = (tt.exec(s) || ["", ""])[1].toLowerCase(), d = rt[c] || rt._default, l.innerHTML = d[1] + T.htmlPrefilter(s) + d[2], r = d[0]; r--;) l = l.lastChild;
            if (!v.leadingWhitespace && nt.test(s) && f.push(e.createTextNode(nt.exec(s)[0])), !v.tbody)
                for (r = (s = "table" !== c || ct.test(s) ? "<table>" !== d[1] || ct.test(s) ? 0 : l : l.firstChild) && s.childNodes.length; r--;) T.nodeName(u = s.childNodes[r], "tbody") && !u.childNodes.length && s.removeChild(u);
            for (T.merge(f, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
            l = p.lastChild
        } else f.push(e.createTextNode(s));
        for (l && p.removeChild(l), v.appendChecked || T.grep(st(f, "input"), ut), g = 0; s = f[g++];)
            if (i && -1 < T.inArray(s, i)) o && o.push(s);
            else if (a = T.contains(s.ownerDocument, s), l = st(p.appendChild(s), "script"), a && at(l), n)
            for (r = 0; s = l[r++];) et.test(s.type || "") && n.push(s);
        return l = null, p
    }! function() {
        var t, e, n = f.createElement("div");
        for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            }) e = "on" + t, (v[t] = e in _) || (n.setAttribute(e, "t"), v[t] = !1 === n.attributes[e].expando);
        n = null
    }();
    var ht = /^(?:input|select|textarea)$/i,
        pt = /^key/,
        ft = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        gt = /^(?:focusinfocus|focusoutblur)$/,
        mt = /^([^.]*)(?:\.(.+)|)/;

    function vt() {
        return !0
    }

    function yt() {
        return !1
    }

    function bt() {
        try {
            return f.activeElement
        } catch (t) {}
    }

    function xt(t, e, n, i, o, r) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = void 0), e) xt(t, a, n, i, e[a], r);
            return t
        }
        if (null == i && null == o ? (o = n, i = n = void 0) : null == o && ("string" == typeof n ? (o = i, i = void 0) : (o = i, i = n, n = void 0)), !1 === o) o = yt;
        else if (!o) return t;
        return 1 === r && (s = o, (o = function(t) {
            return T().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = T.guid++)), t.each(function() {
            T.event.add(this, e, o, i, n)
        })
    }
    T.event = {
        global: {},
        add: function(t, e, n, i, o) {
            var r, s, a, l, c, u, d, h, p, f, g, m = T._data(t);
            if (m) {
                for (n.handler && (n = (l = n).handler, o = l.selector), n.guid || (n.guid = T.guid++), (s = m.events) || (s = m.events = {}), (u = m.handle) || ((u = m.handle = function(t) {
                        return void 0 === T || t && T.event.triggered === t.type ? void 0 : T.event.dispatch.apply(u.elem, arguments)
                    }).elem = t), a = (e = (e || "").match(L) || [""]).length; a--;) p = g = (r = mt.exec(e[a]) || [])[1], f = (r[2] || "").split(".").sort(), p && (c = T.event.special[p] || {}, p = (o ? c.delegateType : c.bindType) || p, c = T.event.special[p] || {}, d = T.extend({
                    type: p,
                    origType: g,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: o,
                    needsContext: o && T.expr.match.needsContext.test(o),
                    namespace: f.join(".")
                }, l), (h = s[p]) || ((h = s[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, i, f, u) || (t.addEventListener ? t.addEventListener(p, u, !1) : t.attachEvent && t.attachEvent("on" + p, u))), c.add && (c.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), o ? h.splice(h.delegateCount++, 0, d) : h.push(d), T.event.global[p] = !0);
                t = null
            }
        },
        remove: function(t, e, n, i, o) {
            var r, s, a, l, c, u, d, h, p, f, g, m = T.hasData(t) && T._data(t);
            if (m && (u = m.events)) {
                for (c = (e = (e || "").match(L) || [""]).length; c--;)
                    if (p = g = (a = mt.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                        for (d = T.event.special[p] || {}, h = u[p = (i ? d.delegateType : d.bindType) || p] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = h.length; r--;) s = h[r], !o && g !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(r, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(t, s));
                        l && !h.length && (d.teardown && !1 !== d.teardown.call(t, f, m.handle) || T.removeEvent(t, p, m.handle), delete u[p])
                    } else
                        for (p in u) T.event.remove(t, p + e[c], n, i, !0);
                T.isEmptyObject(u) && (delete m.handle, T._removeData(t, "events"))
            }
        },
        trigger: function(t, e, n, i) {
            var o, r, s, a, l, c, u, d = [n || f],
                h = m.call(t, "type") ? t.type : t,
                p = m.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = n = n || f, 3 !== n.nodeType && 8 !== n.nodeType && !gt.test(h + T.event.triggered) && (-1 < h.indexOf(".") && (h = (p = h.split(".")).shift(), p.sort()), r = h.indexOf(":") < 0 && "on" + h, (t = t[T.expando] ? t : new T.Event(h, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : T.makeArray(e, [t]), l = T.event.special[h] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, e))) {
                if (!i && !l.noBubble && !T.isWindow(n)) {
                    for (a = l.delegateType || h, gt.test(a + h) || (s = s.parentNode); s; s = s.parentNode) d.push(s), c = s;
                    c === (n.ownerDocument || f) && d.push(c.defaultView || c.parentWindow || _)
                }
                for (u = 0;
                    (s = d[u++]) && !t.isPropagationStopped();) t.type = 1 < u ? a : l.bindType || h, (o = (T._data(s, "events") || {})[t.type] && T._data(s, "handle")) && o.apply(s, e), (o = r && s[r]) && o.apply && z(s) && (t.result = o.apply(s, e), !1 === t.result && t.preventDefault());
                if (t.type = h, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), e)) && z(n) && r && n[h] && !T.isWindow(n)) {
                    (c = n[r]) && (n[r] = null), T.event.triggered = h;
                    try {
                        n[h]()
                    } catch (t) {}
                    T.event.triggered = void 0, c && (n[r] = c)
                }
                return t.result
            }
        },
        dispatch: function(t) {
            t = T.event.fix(t);
            var e, n, i, o, r, s = [],
                a = u.call(arguments),
                l = (T._data(this, "events") || {})[t.type] || [],
                c = T.event.special[t.type] || {};
            if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                for (s = T.event.handlers.call(this, t, l), e = 0;
                    (o = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = o.elem, n = 0;
                        (r = o.handlers[n++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(r.namespace)) && (t.handleObj = r, t.data = r.data, void 0 !== (i = ((T.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, a)) && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(t, e) {
            var n, i, o, r, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (i = [], n = 0; n < a; n++) void 0 === i[o = (r = e[n]).selector + " "] && (i[o] = r.needsContext ? -1 < T(o, this).index(l) : T.find(o, this, null, [l]).length), i[o] && i.push(r);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function(t) {
            if (t[T.expando]) return t;
            var e, n, i, o = t.type,
                r = t,
                s = this.fixHooks[o];
            for (s || (this.fixHooks[o] = s = ft.test(o) ? this.mouseHooks : pt.test(o) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new T.Event(r), e = i.length; e--;) t[n = i[e]] = r[n];
            return t.target || (t.target = r.srcElement || f), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, o, r = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (o = (i = t.target.ownerDocument || f).documentElement, n = i.body, t.pageX = e.clientX + (o && o.scrollLeft || n && n.scrollLeft || 0) - (o && o.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (o && o.scrollTop || n && n.scrollTop || 0) - (o && o.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || void 0 === r || (t.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== bt() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === bt() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return T.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(t) {
                    return T.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n) {
            var i = T.extend(new T.Event, n, {
                type: t,
                isSimulated: !0
            });
            T.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }, T.removeEvent = f.removeEventListener ? function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function(t, e, n) {
        var i = "on" + e;
        t.detachEvent && (void 0 === t[i] && (t[i] = null), t.detachEvent(i, n))
    }, T.Event = function(t, e) {
        return this instanceof T.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? vt : yt) : this.type = t, e && T.extend(this, e), this.timeStamp = t && t.timeStamp || T.now(), void(this[T.expando] = !0)) : new T.Event(t, e)
    }, T.Event.prototype = {
        constructor: T.Event,
        isDefaultPrevented: yt,
        isPropagationStopped: yt,
        isImmediatePropagationStopped: yt,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = vt, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = vt, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = vt, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, T.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, o) {
        T.event.special[t] = {
            delegateType: o,
            bindType: o,
            handle: function(t) {
                var e, n = t.relatedTarget,
                    i = t.handleObj;
                return (!n || n !== this && !T.contains(this, n)) && (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = o), e
            }
        }
    }), v.submit || (T.event.special.submit = {
        setup: function() {
            return !T.nodeName(this, "form") && void T.event.add(this, "click._submit keypress._submit", function(t) {
                var e = t.target,
                    n = T.nodeName(e, "input") || T.nodeName(e, "button") ? T.prop(e, "form") : void 0;
                n && !T._data(n, "submit") && (T.event.add(n, "submit._submit", function(t) {
                    t._submitBubble = !0
                }), T._data(n, "submit", !0))
            })
        },
        postDispatch: function(t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && T.event.simulate("submit", this.parentNode, t))
        },
        teardown: function() {
            return !T.nodeName(this, "form") && void T.event.remove(this, "._submit")
        }
    }), v.change || (T.event.special.change = {
        setup: function() {
            return ht.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (T.event.add(this, "propertychange._change", function(t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), T.event.add(this, "click._change", function(t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), T.event.simulate("change", this, t)
            })), !1) : void T.event.add(this, "beforeactivate._change", function(t) {
                var e = t.target;
                ht.test(e.nodeName) && !T._data(e, "change") && (T.event.add(e, "change._change", function(t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || T.event.simulate("change", this.parentNode, t)
                }), T._data(e, "change", !0))
            })
        },
        handle: function(t) {
            var e = t.target;
            return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return T.event.remove(this, "._change"), !ht.test(this.nodeName)
        }
    }), v.focusin || T.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        var o = function(t) {
            T.event.simulate(i, t.target, T.event.fix(t))
        };
        T.event.special[i] = {
            setup: function() {
                var t = this.ownerDocument || this,
                    e = T._data(t, i);
                e || t.addEventListener(n, o, !0), T._data(t, i, (e || 0) + 1)
            },
            teardown: function() {
                var t = this.ownerDocument || this,
                    e = T._data(t, i) - 1;
                e ? T._data(t, i, e) : (t.removeEventListener(n, o, !0), T._removeData(t, i))
            }
        }
    }), T.fn.extend({
        on: function(t, e, n, i) {
            return xt(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return xt(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, o;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, T(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (o in t) this.off(o, e, t[o]);
                return this
            }
            return (!1 === e || "function" == typeof e) && (n = e, e = void 0), !1 === n && (n = yt), this.each(function() {
                T.event.remove(this, t, n, e)
            })
        },
        trigger: function(t, e) {
            return this.each(function() {
                T.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            return n ? T.event.trigger(t, e, n, !0) : void 0
        }
    });
    var wt = / jQuery\d+="(?:null|\d+)"/g,
        Ct = new RegExp("<(?:" + it + ")[\\s/>]", "i"),
        _t = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        Tt = /<script|<style|<link/i,
        St = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Et = /^true\/(.*)/,
        Ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        kt = ot(f).appendChild(f.createElement("div"));

    function $t(t, e) {
        return T.nodeName(t, "table") && T.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function Dt(t) {
        return t.type = (null !== T.find.attr(t, "type")) + "/" + t.type, t
    }

    function Pt(t) {
        var e = Et.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function At(t, e) {
        if (1 === e.nodeType && T.hasData(t)) {
            var n, i, o, r = T._data(t),
                s = T._data(e, r),
                a = r.events;
            if (a)
                for (n in delete s.handle, s.events = {}, a)
                    for (i = 0, o = a[n].length; i < o; i++) T.event.add(e, n, a[n][i]);
            s.data && (s.data = T.extend({}, s.data))
        }
    }

    function Lt(t, e) {
        var n, i, o;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !v.noCloneEvent && e[T.expando]) {
                for (i in (o = T._data(e)).events) T.removeEvent(e, i, o.handle);
                e.removeAttribute(T.expando)
            }
            "script" === n && e.text !== t.text ? (Dt(e).text = t.text, Pt(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), v.html5Clone && t.innerHTML && !T.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && J.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
        }
    }

    function Nt(n, i, o, r) {
        i = g.apply([], i);
        var t, e, s, a, l, c, u = 0,
            d = n.length,
            h = d - 1,
            p = i[0],
            f = T.isFunction(p);
        if (f || 1 < d && "string" == typeof p && !v.checkClone && St.test(p)) return n.each(function(t) {
            var e = n.eq(t);
            f && (i[0] = p.call(this, t, e.html())), Nt(e, i, o, r)
        });
        if (d && (t = (c = dt(i, n[0].ownerDocument, !1, n, r)).firstChild, 1 === c.childNodes.length && (c = t), t || r)) {
            for (s = (a = T.map(st(c, "script"), Dt)).length; u < d; u++) e = c, u !== h && (e = T.clone(e, !0, !0), s && T.merge(a, st(e, "script"))), o.call(n[u], e, u);
            if (s)
                for (l = a[a.length - 1].ownerDocument, T.map(a, Pt), u = 0; u < s; u++) e = a[u], et.test(e.type || "") && !T._data(e, "globalEval") && T.contains(l, e) && (e.src ? T._evalUrl && T._evalUrl(e.src) : T.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Ft, "")));
            c = t = null
        }
        return n
    }

    function Mt(t, e, n) {
        for (var i, o = e ? T.filter(e, t) : t, r = 0; null != (i = o[r]); r++) n || 1 !== i.nodeType || T.cleanData(st(i)), i.parentNode && (n && T.contains(i.ownerDocument, i) && at(st(i, "script")), i.parentNode.removeChild(i));
        return t
    }
    T.extend({
        htmlPrefilter: function(t) {
            return t.replace(_t, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, o, r, s, a, l = T.contains(t.ownerDocument, t);
            if (v.html5Clone || T.isXMLDoc(t) || !Ct.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (kt.innerHTML = t.outerHTML, kt.removeChild(r = kt.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || T.isXMLDoc(t)))
                for (i = st(r), a = st(t), s = 0; null != (o = a[s]); ++s) i[s] && Lt(o, i[s]);
            if (e)
                if (n)
                    for (a = a || st(t), i = i || st(r), s = 0; null != (o = a[s]); s++) At(o, i[s]);
                else At(t, r);
            return 0 < (i = st(r, "script")).length && at(i, !l && st(t, "script")), i = a = o = null, r
        },
        cleanData: function(t, e) {
            for (var n, i, o, r, s = 0, a = T.expando, l = T.cache, c = v.attributes, u = T.event.special; null != (n = t[s]); s++)
                if ((e || z(n)) && (r = (o = n[a]) && l[o])) {
                    if (r.events)
                        for (i in r.events) u[i] ? T.event.remove(n, i) : T.removeEvent(n, i, r.handle);
                    l[o] && (delete l[o], c || void 0 === n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a), d.push(o))
                }
        }
    }), T.fn.extend({
        domManip: Nt,
        detach: function(t) {
            return Mt(this, t, !0)
        },
        remove: function(t) {
            return Mt(this, t)
        },
        text: function(t) {
            return K(this, function(t) {
                return void 0 === t ? T.text(this) : this.empty().append((this[0] && this[0].ownerDocument || f).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function() {
            return Nt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || $t(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return Nt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = $t(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return Nt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return Nt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && T.cleanData(st(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && T.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return T.clone(this, t, e)
            })
        },
        html: function(t) {
            return K(this, function(t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(wt, "") : void 0;
                if ("string" == typeof t && !Tt.test(t) && (v.htmlSerialize || !Ct.test(t)) && (v.leadingWhitespace || !nt.test(t)) && !rt[(tt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = T.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (T.cleanData(st(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return Nt(this, arguments, function(t) {
                var e = this.parentNode;
                T.inArray(this, n) < 0 && (T.cleanData(st(this)), e && e.replaceChild(t, this))
            }, n)
        }
    }), T.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, s) {
        T.fn[t] = function(t) {
            for (var e, n = 0, i = [], o = T(t), r = o.length - 1; n <= r; n++) e = n === r ? this : this.clone(!0), T(o[n])[s](e), a.apply(i, e.get());
            return this.pushStack(i)
        }
    });
    var jt, zt = {
        HTML: "block",
        BODY: "block"
    };

    function Rt(t, e) {
        var n = T(e.createElement(t)).appendTo(e.body),
            i = T.css(n[0], "display");
        return n.detach(), i
    }

    function Ht(t) {
        var e = f,
            n = zt[t];
        return n || ("none" !== (n = Rt(t, e)) && n || ((e = ((jt = (jt || T("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || jt[0].contentDocument).document).write(), e.close(), n = Rt(t, e), jt.detach()), zt[t] = n), n
    }
    var It = /^margin/,
        qt = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
        Ot = function(t, e, n, i) {
            var o, r, s = {};
            for (r in e) s[r] = t.style[r], t.style[r] = e[r];
            for (r in o = n.apply(t, i || []), e) t.style[r] = s[r];
            return o
        },
        Bt = f.documentElement;
    ! function() {
        var i, o, r, s, a, l, c = f.createElement("div"),
            u = f.createElement("div");
        if (u.style) {
            function t() {
                var t, e, n = f.documentElement;
                n.appendChild(c), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i = r = l = !1, o = a = !0, _.getComputedStyle && (e = _.getComputedStyle(u), i = "1%" !== (e || {}).top, l = "2px" === (e || {}).marginLeft, r = "4px" === (e || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", o = "4px" === (e || {
                    marginRight: "4px"
                }).marginRight, (t = u.appendChild(f.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", u.style.width = "1px", a = !parseFloat((_.getComputedStyle(t) || {}).marginRight), u.removeChild(t)), u.style.display = "none", (s = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (t = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (s = 0 === t[0].offsetHeight) && (t[0].style.display = "", t[1].style.display = "none", s = 0 === t[0].offsetHeight)), n.removeChild(c)
            }
            u.style.cssText = "float:left;opacity:.5", v.opacity = "0.5" === u.style.opacity, v.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === u.style.backgroundClip, (c = f.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", c.appendChild(u), v.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, T.extend(v, {
                reliableHiddenOffsets: function() {
                    return null == i && t(), s
                },
                boxSizingReliable: function() {
                    return null == i && t(), r
                },
                pixelMarginRight: function() {
                    return null == i && t(), o
                },
                pixelPosition: function() {
                    return null == i && t(), i
                },
                reliableMarginRight: function() {
                    return null == i && t(), a
                },
                reliableMarginLeft: function() {
                    return null == i && t(), l
                }
            })
        }
    }();
    var Wt, Xt, Yt = /^(top|right|bottom|left)$/;

    function Vt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    _.getComputedStyle ? (Wt = function(t) {
        var e = t.ownerDocument.defaultView;
        return e.opener || (e = _), e.getComputedStyle(t)
    }, Xt = function(t, e, n) {
        var i, o, r, s, a = t.style;
        return s = (n = n || Wt(t)) ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== s || T.contains(t.ownerDocument, t) || (s = T.style(t, e)), !v.pixelMarginRight() && qt.test(s) && It.test(e) && (i = a.width, o = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = o, a.maxWidth = r)), void 0 === s ? s : s + ""
    }) : Bt.currentStyle && (Wt = function(t) {
        return t.currentStyle
    }, Xt = function(t, e, n) {
        var i, o, r, s, a = t.style;
        return null == (s = (n = n || Wt(t)) ? n[e] : void 0) && a && a[e] && (s = a[e]), qt.test(s) && !Yt.test(e) && (i = a.left, (r = (o = t.runtimeStyle) && o.left) && (o.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, r && (o.left = r)), void 0 === s ? s : s + "" || "auto"
    });
    var Ut = /alpha\([^)]*\)/i,
        Gt = /opacity\s*=\s*([^)]*)/i,
        Qt = /^(none|table(?!-c[ea]).+)/,
        Zt = new RegExp("^(" + W + ")(.*)$", "i"),
        Kt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Jt = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        te = ["Webkit", "O", "Moz", "ms"],
        ee = f.createElement("div").style;

    function ne(t) {
        if (t in ee) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = te.length; n--;)
            if ((t = te[n] + e) in ee) return t
    }

    function ie(t, e) {
        for (var n, i, o, r = [], s = 0, a = t.length; s < a; s++)(i = t[s]).style && (r[s] = T._data(i, "olddisplay"), n = i.style.display, e ? (r[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && V(i) && (r[s] = T._data(i, "olddisplay", Ht(i.nodeName)))) : (o = V(i), (n && "none" !== n || !o) && T._data(i, "olddisplay", o ? n : T.css(i, "display"))));
        for (s = 0; s < a; s++)(i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? r[s] || "" : "none"));
        return t
    }

    function oe(t, e, n) {
        var i = Zt.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function re(t, e, n, i, o) {
        for (var r = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; r < 4; r += 2) "margin" === n && (s += T.css(t, n + Y[r], !0, o)), i ? ("content" === n && (s -= T.css(t, "padding" + Y[r], !0, o)), "margin" !== n && (s -= T.css(t, "border" + Y[r] + "Width", !0, o))) : (s += T.css(t, "padding" + Y[r], !0, o), "padding" !== n && (s += T.css(t, "border" + Y[r] + "Width", !0, o)));
        return s
    }

    function se(t, e, n) {
        var i = !0,
            o = "width" === e ? t.offsetWidth : t.offsetHeight,
            r = Wt(t),
            s = v.boxSizing && "border-box" === T.css(t, "boxSizing", !1, r);
        if (f.msFullscreenElement && _.top !== _ && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[e])), o <= 0 || null == o) {
            if (((o = Xt(t, e, r)) < 0 || null == o) && (o = t.style[e]), qt.test(o)) return o;
            i = s && (v.boxSizingReliable() || o === t.style[e]), o = parseFloat(o) || 0
        }
        return o + re(t, e, n || (s ? "border" : "content"), i, r) + "px"
    }

    function ae(t, e, n, i, o) {
        return new ae.prototype.init(t, e, n, i, o)
    }
    T.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = Xt(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: v.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, r, s, a = T.camelCase(e),
                    l = t.style;
                if (e = T.cssProps[a] || (T.cssProps[a] = ne(a) || a), s = T.cssHooks[e] || T.cssHooks[a], void 0 === n) return s && "get" in s && void 0 !== (o = s.get(t, !1, i)) ? o : l[e];
                if ("string" === (r = typeof n) && (o = X.exec(n)) && o[1] && (n = U(t, e, o), r = "number"), null != n && n == n && ("number" === r && (n += o && o[3] || (T.cssNumber[a] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && void 0 === (n = s.set(t, n, i))))) try {
                    l[e] = n
                } catch (t) {}
            }
        },
        css: function(t, e, n, i) {
            var o, r, s, a = T.camelCase(e);
            return e = T.cssProps[a] || (T.cssProps[a] = ne(a) || a), (s = T.cssHooks[e] || T.cssHooks[a]) && "get" in s && (r = s.get(t, !0, n)), void 0 === r && (r = Xt(t, e, i)), "normal" === r && e in Jt && (r = Jt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
        }
    }), T.each(["height", "width"], function(t, o) {
        T.cssHooks[o] = {
            get: function(t, e, n) {
                return e ? Qt.test(T.css(t, "display")) && 0 === t.offsetWidth ? Ot(t, Kt, function() {
                    return se(t, o, n)
                }) : se(t, o, n) : void 0
            },
            set: function(t, e, n) {
                var i = n && Wt(t);
                return oe(0, e, n ? re(t, o, n, v.boxSizing && "border-box" === T.css(t, "boxSizing", !1, i), i) : 0)
            }
        }
    }), v.opacity || (T.cssHooks.opacity = {
        get: function(t, e) {
            return Gt.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var n = t.style,
                i = t.currentStyle,
                o = T.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                r = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= e || "" === e) && "" === T.trim(r.replace(Ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = Ut.test(r) ? r.replace(Ut, o) : r + " " + o)
        }
    }), T.cssHooks.marginRight = Vt(v.reliableMarginRight, function(t, e) {
        return e ? Ot(t, {
            display: "inline-block"
        }, Xt, [t, "marginRight"]) : void 0
    }), T.cssHooks.marginLeft = Vt(v.reliableMarginLeft, function(t, e) {
        return e ? (parseFloat(Xt(t, "marginLeft")) || (T.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - Ot(t, {
            marginLeft: 0
        }, function() {
            return t.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }), T.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(o, r) {
        T.cssHooks[o + r] = {
            expand: function(t) {
                for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[o + Y[e] + r] = i[e] || i[e - 2] || i[0];
                return n
            }
        }, It.test(o) || (T.cssHooks[o + r].set = oe)
    }), T.fn.extend({
        css: function(t, e) {
            return K(this, function(t, e, n) {
                var i, o, r = {},
                    s = 0;
                if (T.isArray(e)) {
                    for (i = Wt(t), o = e.length; s < o; s++) r[e[s]] = T.css(t, e[s], !1, i);
                    return r
                }
                return void 0 !== n ? T.style(t, e, n) : T.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function() {
            return ie(this, !0)
        },
        hide: function() {
            return ie(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                V(this) ? T(this).show() : T(this).hide()
            })
        }
    }), ((T.Tween = ae).prototype = {
        constructor: ae,
        init: function(t, e, n, i, o, r) {
            this.elem = t, this.prop = n, this.easing = o || T.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = r || (T.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = ae.propHooks[this.prop];
            return t && t.get ? t.get(this) : ae.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = ae.propHooks[this.prop];
            return this.options.duration ? this.pos = e = T.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : ae.propHooks._default.set(this), this
        }
    }).init.prototype = ae.prototype, (ae.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = T.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                T.fx.step[t.prop] ? T.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[T.cssProps[t.prop]] && !T.cssHooks[t.prop] ? t.elem[t.prop] = t.now : T.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = ae.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, T.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, T.fx = ae.prototype.init, T.fx.step = {};
    var le, ce, ue, de, he, pe, fe, ge = /^(?:toggle|show|hide)$/,
        me = /queueHooks$/;

    function ve() {
        return _.setTimeout(function() {
            le = void 0
        }), le = T.now()
    }

    function ye(t, e) {
        var n, i = {
                height: t
            },
            o = 0;
        for (e = e ? 1 : 0; o < 4; o += 2 - e) i["margin" + (n = Y[o])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function be(t, e, n) {
        for (var i, o = (xe.tweeners[e] || []).concat(xe.tweeners["*"]), r = 0, s = o.length; r < s; r++)
            if (i = o[r].call(n, e, t)) return i
    }

    function xe(r, t, e) {
        var n, s, i = 0,
            o = xe.prefilters.length,
            a = T.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (s) return !1;
                for (var t = le || ve(), e = Math.max(0, c.startTime + c.duration - t), n = 1 - (e / c.duration || 0), i = 0, o = c.tweens.length; i < o; i++) c.tweens[i].run(n);
                return a.notifyWith(r, [c, n, e]), n < 1 && o ? e : (a.resolveWith(r, [c]), !1)
            },
            c = a.promise({
                elem: r,
                props: T.extend({}, t),
                opts: T.extend(!0, {
                    specialEasing: {},
                    easing: T.easing._default
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: le || ve(),
                duration: e.duration,
                tweens: [],
                createTween: function(t, e) {
                    var n = T.Tween(r, c.opts, t, e, c.opts.specialEasing[t] || c.opts.easing);
                    return c.tweens.push(n), n
                },
                stop: function(t) {
                    var e = 0,
                        n = t ? c.tweens.length : 0;
                    if (s) return this;
                    for (s = !0; e < n; e++) c.tweens[e].run(1);
                    return t ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, t])) : a.rejectWith(r, [c, t]), this
                }
            }),
            u = c.props;
        for (function(t, e) {
                var n, i, o, r, s;
                for (n in t)
                    if (o = e[i = T.camelCase(n)], r = t[n], T.isArray(r) && (o = r[1], r = t[n] = r[0]), n !== i && (t[i] = r, delete t[n]), (s = T.cssHooks[i]) && "expand" in s)
                        for (n in r = s.expand(r), delete t[i], r) n in t || (t[n] = r[n], e[n] = o);
                    else e[i] = o
            }(u, c.opts.specialEasing); i < o; i++)
            if (n = xe.prefilters[i].call(c, r, u, c.opts)) return T.isFunction(n.stop) && (T._queueHooks(c.elem, c.opts.queue).stop = T.proxy(n.stop, n)), n;
        return T.map(u, be, c), T.isFunction(c.opts.start) && c.opts.start.call(r, c), T.fx.timer(T.extend(l, {
            elem: r,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    T.Animation = T.extend(xe, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return U(n.elem, t, X.exec(e), n), n
            }]
        },
        tweener: function(t, e) {
            T.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(L);
            for (var n, i = 0, o = t.length; i < o; i++) n = t[i], xe.tweeners[n] = xe.tweeners[n] || [], xe.tweeners[n].unshift(e)
        },
        prefilters: [function(e, t, n) {
            var i, o, r, s, a, l, c, u = this,
                d = {},
                h = e.style,
                p = e.nodeType && V(e),
                f = T._data(e, "fxshow");
            for (i in n.queue || (null == (a = T._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || l()
                }), a.unqueued++, u.always(function() {
                    u.always(function() {
                        a.unqueued--, T.queue(e, "fx").length || a.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY], "inline" === ("none" === (c = T.css(e, "display")) ? T._data(e, "olddisplay") || Ht(e.nodeName) : c) && "none" === T.css(e, "float") && (v.inlineBlockNeedsLayout && "inline" !== Ht(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")), n.overflow && (h.overflow = "hidden", v.shrinkWrapBlocks() || u.always(function() {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), t)
                if (o = t[i], ge.exec(o)) {
                    if (delete t[i], r = r || "toggle" === o, o === (p ? "hide" : "show")) {
                        if ("show" !== o || !f || void 0 === f[i]) continue;
                        p = !0
                    }
                    d[i] = f && f[i] || T.style(e, i)
                } else c = void 0;
            if (T.isEmptyObject(d)) "inline" === ("none" === c ? Ht(e.nodeName) : c) && (h.display = c);
            else
                for (i in f ? "hidden" in f && (p = f.hidden) : f = T._data(e, "fxshow", {}), r && (f.hidden = !p), p ? T(e).show() : u.done(function() {
                        T(e).hide()
                    }), u.done(function() {
                        var t;
                        for (t in T._removeData(e, "fxshow"), d) T.style(e, t, d[t])
                    }), d) s = be(p ? f[i] : 0, i, u), i in f || (f[i] = s.start, p && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }],
        prefilter: function(t, e) {
            e ? xe.prefilters.unshift(t) : xe.prefilters.push(t)
        }
    }), T.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? T.extend({}, t) : {
            complete: n || !n && e || T.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !T.isFunction(e) && e
        };
        return i.duration = T.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in T.fx.speeds ? T.fx.speeds[i.duration] : T.fx.speeds._default, (null == i.queue || !0 === i.queue) && (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            T.isFunction(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue)
        }, i
    }, T.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(V).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(e, t, n, i) {
            var o = T.isEmptyObject(e),
                r = T.speed(t, n, i),
                s = function() {
                    var t = xe(this, T.extend({}, e), r);
                    (o || T._data(this, "finish")) && t.stop(!0)
                };
            return s.finish = s, o || !1 === r.queue ? this.each(s) : this.queue(r.queue, s)
        },
        stop: function(o, t, r) {
            var s = function(t) {
                var e = t.stop;
                delete t.stop, e(r)
            };
            return "string" != typeof o && (r = t, t = o, o = void 0), t && !1 !== o && this.queue(o || "fx", []), this.each(function() {
                var t = !0,
                    e = null != o && o + "queueHooks",
                    n = T.timers,
                    i = T._data(this);
                if (e) i[e] && i[e].stop && s(i[e]);
                else
                    for (e in i) i[e] && i[e].stop && me.test(e) && s(i[e]);
                for (e = n.length; e--;) n[e].elem !== this || null != o && n[e].queue !== o || (n[e].anim.stop(r), t = !1, n.splice(e, 1));
                (t || !r) && T.dequeue(this, o)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var t, e = T._data(this),
                    n = e[s + "queue"],
                    i = e[s + "queueHooks"],
                    o = T.timers,
                    r = n ? n.length : 0;
                for (e.finish = !0, T.queue(this, s, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === s && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < r; t++) n[t] && n[t].finish && n[t].finish.call(this);
                delete e.finish
            })
        }
    }), T.each(["toggle", "show", "hide"], function(t, i) {
        var o = T.fn[i];
        T.fn[i] = function(t, e, n) {
            return null == t || "boolean" == typeof t ? o.apply(this, arguments) : this.animate(ye(i, !0), t, e, n)
        }
    }), T.each({
        slideDown: ye("show"),
        slideUp: ye("hide"),
        slideToggle: ye("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, i) {
        T.fn[t] = function(t, e, n) {
            return this.animate(i, t, e, n)
        }
    }), T.timers = [], T.fx.tick = function() {
        var t, e = T.timers,
            n = 0;
        for (le = T.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || T.fx.stop(), le = void 0
    }, T.fx.timer = function(t) {
        T.timers.push(t), t() ? T.fx.start() : T.timers.pop()
    }, T.fx.interval = 13, T.fx.start = function() {
        ce || (ce = _.setInterval(T.fx.tick, T.fx.interval))
    }, T.fx.stop = function() {
        _.clearInterval(ce), ce = null
    }, T.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, T.fn.delay = function(i, t) {
        return i = T.fx && T.fx.speeds[i] || i, t = t || "fx", this.queue(t, function(t, e) {
            var n = _.setTimeout(t, i);
            e.stop = function() {
                _.clearTimeout(n)
            }
        })
    }, de = f.createElement("input"), he = f.createElement("div"), pe = f.createElement("select"), fe = pe.appendChild(f.createElement("option")), (he = f.createElement("div")).setAttribute("className", "t"), he.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ue = he.getElementsByTagName("a")[0], de.setAttribute("type", "checkbox"), he.appendChild(de), (ue = he.getElementsByTagName("a")[0]).style.cssText = "top:1px", v.getSetAttribute = "t" !== he.className, v.style = /top/.test(ue.getAttribute("style")), v.hrefNormalized = "/a" === ue.getAttribute("href"), v.checkOn = !!de.value, v.optSelected = fe.selected, v.enctype = !!f.createElement("form").enctype, pe.disabled = !0, v.optDisabled = !fe.disabled, (de = f.createElement("input")).setAttribute("value", ""), v.input = "" === de.getAttribute("value"), de.value = "t", de.setAttribute("type", "radio"), v.radioValue = "t" === de.value;
    var we = /\r/g;
    T.fn.extend({
        val: function(n) {
            var i, t, o, e = this[0];
            return arguments.length ? (o = T.isFunction(n), this.each(function(t) {
                var e;
                1 === this.nodeType && (null == (e = o ? n.call(this, t, T(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : T.isArray(e) && (e = T.map(e, function(t) {
                    return null == t ? "" : t + ""
                })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
            })) : e ? (i = T.valHooks[e.type] || T.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(we, "") : null == t ? "" : t : void 0
        }
    }), T.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = T.find.attr(t, "value");
                    return null != e ? e : T.trim(T.text(t))
                }
            },
            select: {
                get: function(t) {
                    for (var e, n, i = t.options, o = t.selectedIndex, r = "select-one" === t.type || o < 0, s = r ? null : [], a = r ? o + 1 : i.length, l = o < 0 ? a : r ? o : 0; l < a; l++)
                        if (((n = i[l]).selected || l === o) && (v.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !T.nodeName(n.parentNode, "optgroup"))) {
                            if (e = T(n).val(), r) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(t, e) {
                    for (var n, i, o = t.options, r = T.makeArray(e), s = o.length; s--;)
                        if (i = o[s], 0 <= T.inArray(T.valHooks.option.get(i), r)) try {
                            i.selected = n = !0
                        } catch (t) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), o
                }
            }
        }
    }), T.each(["radio", "checkbox"], function() {
        T.valHooks[this] = {
            set: function(t, e) {
                return T.isArray(e) ? t.checked = -1 < T.inArray(T(t).val(), e) : void 0
            }
        }, v.checkOn || (T.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Ce, _e, Te = T.expr.attrHandle,
        Se = /^(?:checked|selected)$/i,
        Ee = v.getSetAttribute,
        Fe = v.input;
    T.fn.extend({
        attr: function(t, e) {
            return K(this, T.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                T.removeAttr(this, t)
            })
        }
    }), T.extend({
        attr: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return void 0 === t.getAttribute ? T.prop(t, e, n) : (1 === r && T.isXMLDoc(t) || (e = e.toLowerCase(), o = T.attrHooks[e] || (T.expr.match.bool.test(e) ? _e : Ce)), void 0 !== n ? null === n ? void T.removeAttr(t, e) : o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : o && "get" in o && null !== (i = o.get(t, e)) ? i : null == (i = T.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!v.radioValue && "radio" === e && T.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i, o = 0,
                r = e && e.match(L);
            if (r && 1 === t.nodeType)
                for (; n = r[o++];) i = T.propFix[n] || n, T.expr.match.bool.test(n) ? Fe && Ee || !Se.test(n) ? t[i] = !1 : t[T.camelCase("default-" + n)] = t[i] = !1 : T.attr(t, n, ""), t.removeAttribute(Ee ? n : i)
        }
    }), _e = {
        set: function(t, e, n) {
            return !1 === e ? T.removeAttr(t, n) : Fe && Ee || !Se.test(n) ? t.setAttribute(!Ee && T.propFix[n] || n, n) : t[T.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, T.each(T.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var r = Te[e] || T.find.attr;
        Fe && Ee || !Se.test(e) ? Te[e] = function(t, e, n) {
            var i, o;
            return n || (o = Te[e], Te[e] = i, i = null != r(t, e, n) ? e.toLowerCase() : null, Te[e] = o), i
        } : Te[e] = function(t, e, n) {
            return n ? void 0 : t[T.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), Fe && Ee || (T.attrHooks.value = {
        set: function(t, e, n) {
            return T.nodeName(t, "input") ? void(t.defaultValue = e) : Ce && Ce.set(t, e, n)
        }
    }), Ee || (Ce = {
        set: function(t, e, n) {
            var i = t.getAttributeNode(n);
            return i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
        }
    }, Te.id = Te.name = Te.coords = function(t, e, n) {
        var i;
        return n ? void 0 : (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, T.valHooks.button = {
        get: function(t, e) {
            var n = t.getAttributeNode(e);
            return n && n.specified ? n.value : void 0
        },
        set: Ce.set
    }, T.attrHooks.contenteditable = {
        set: function(t, e, n) {
            Ce.set(t, "" !== e && e, n)
        }
    }, T.each(["width", "height"], function(t, n) {
        T.attrHooks[n] = {
            set: function(t, e) {
                return "" === e ? (t.setAttribute(n, "auto"), e) : void 0
            }
        }
    })), v.style || (T.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || void 0
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    });
    var ke = /^(?:input|select|textarea|button|object)$/i,
        $e = /^(?:a|area)$/i;
    T.fn.extend({
        prop: function(t, e) {
            return K(this, T.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = T.propFix[t] || t, this.each(function() {
                try {
                    this[t] = void 0, delete this[t]
                } catch (t) {}
            })
        }
    }), T.extend({
        prop: function(t, e, n) {
            var i, o, r = t.nodeType;
            if (3 !== r && 8 !== r && 2 !== r) return 1 === r && T.isXMLDoc(t) || (e = T.propFix[e] || e, o = T.propHooks[e]), void 0 !== n ? o && "set" in o && void 0 !== (i = o.set(t, n, e)) ? i : t[e] = n : o && "get" in o && null !== (i = o.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = T.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ke.test(t.nodeName) || $e.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), v.hrefNormalized || T.each(["href", "src"], function(t, e) {
        T.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    }), v.optSelected || (T.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        T.propFix[this.toLowerCase()] = this
    }), v.enctype || (T.propFix.enctype = "encoding");
    var De = /[\t\r\n\f]/g;

    function Pe(t) {
        return T.attr(t, "class") || ""
    }
    T.fn.extend({
        addClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (T.isFunction(e)) return this.each(function(t) {
                T(this).addClass(e.call(this, t, Pe(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; n = this[l++];)
                    if (o = Pe(n), i = 1 === n.nodeType && (" " + o + " ").replace(De, " ")) {
                        for (s = 0; r = t[s++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        o !== (a = T.trim(i)) && T.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, o, r, s, a, l = 0;
            if (T.isFunction(e)) return this.each(function(t) {
                T(this).removeClass(e.call(this, t, Pe(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(L) || []; n = this[l++];)
                    if (o = Pe(n), i = 1 === n.nodeType && (" " + o + " ").replace(De, " ")) {
                        for (s = 0; r = t[s++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        o !== (a = T.trim(i)) && T.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(o, e) {
            var r = typeof o;
            return "boolean" == typeof e && "string" === r ? e ? this.addClass(o) : this.removeClass(o) : T.isFunction(o) ? this.each(function(t) {
                T(this).toggleClass(o.call(this, t, Pe(this), e), e)
            }) : this.each(function() {
                var t, e, n, i;
                if ("string" === r)
                    for (e = 0, n = T(this), i = o.match(L) || []; t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                else(void 0 === o || "boolean" === r) && ((t = Pe(this)) && T._data(this, "__className__", t), T.attr(this, "class", t || !1 === o ? "" : T._data(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && -1 < (" " + Pe(n) + " ").replace(De, " ").indexOf(e)) return !0;
            return !1
        }
    }), T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, n) {
        T.fn[n] = function(t, e) {
            return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
        }
    }), T.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Ae = _.location,
        Le = T.now(),
        Ne = /\?/,
        Me = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    T.parseJSON = function(t) {
        if (_.JSON && _.JSON.parse) return _.JSON.parse(t + "");
        var o, r = null,
            e = T.trim(t + "");
        return e && !T.trim(e.replace(Me, function(t, e, n, i) {
            return o && e && (r = 0), 0 === r ? t : (o = n || e, r += !i - !n, "")
        })) ? Function("return " + e)() : T.error("Invalid JSON: " + t)
    }, T.parseXML = function(t) {
        var e;
        if (!t || "string" != typeof t) return null;
        try {
            _.DOMParser ? e = (new _.DOMParser).parseFromString(t, "text/xml") : ((e = new _.ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
        } catch (t) {
            e = void 0
        }
        return e && e.documentElement && !e.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + t), e
    };
    var je = /#.*$/,
        ze = /([?&])_=[^&]*/,
        Re = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        He = /^(?:GET|HEAD)$/,
        Ie = /^\/\//,
        qe = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Oe = {},
        Be = {},
        We = "*/".concat("*"),
        Xe = Ae.href,
        Ye = qe.exec(Xe.toLowerCase()) || [];

    function Ve(r) {
        return function(t, e) {
            "string" != typeof t && (e = t, t = "*");
            var n, i = 0,
                o = t.toLowerCase().match(L) || [];
            if (T.isFunction(e))
                for (; n = o[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (r[n] = r[n] || []).unshift(e)) : (r[n] = r[n] || []).push(e)
        }
    }

    function Ue(e, o, r, s) {
        var a = {},
            l = e === Be;

        function c(t) {
            var i;
            return a[t] = !0, T.each(e[t] || [], function(t, e) {
                var n = e(o, r, s);
                return "string" != typeof n || l || a[n] ? l ? !(i = n) : void 0 : (o.dataTypes.unshift(n), c(n), !1)
            }), i
        }
        return c(o.dataTypes[0]) || !a["*"] && c("*")
    }

    function Ge(t, e) {
        var n, i, o = T.ajaxSettings.flatOptions || {};
        for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
        return n && T.extend(!0, t, n), t
    }
    T.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Xe,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ye[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": We,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": T.parseJSON,
                "text xml": T.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Ge(Ge(t, T.ajaxSettings), e) : Ge(T.ajaxSettings, t)
        },
        ajaxPrefilter: Ve(Oe),
        ajaxTransport: Ve(Be),
        ajax: function(t, e) {
            "object" == typeof t && (e = t, t = void 0), e = e || {};
            var n, i, u, d, h, p, f, o, g = T.ajaxSetup({}, e),
                m = g.context || g,
                v = g.context && (m.nodeType || m.jquery) ? T(m) : T.event,
                y = T.Deferred(),
                b = T.Callbacks("once memory"),
                x = g.statusCode || {},
                r = {},
                s = {},
                w = 0,
                a = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === w) {
                            if (!o)
                                for (o = {}; e = Re.exec(d);) o[e[1].toLowerCase()] = e[2];
                            e = o[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? d : null
                    },
                    setRequestHeader: function(t, e) {
                        var n = t.toLowerCase();
                        return w || (t = s[n] = s[n] || t, r[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return w || (g.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (w < 2)
                                for (e in t) x[e] = [x[e], t[e]];
                            else C.always(t[C.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || a;
                        return f && f.abort(e), l(0, e), this
                    }
                };
            if (y.promise(C).complete = b.add, C.success = C.done, C.error = C.fail, g.url = ((t || g.url || Xe) + "").replace(je, "").replace(Ie, Ye[1] + "//"), g.type = e.method || e.type || g.method || g.type, g.dataTypes = T.trim(g.dataType || "*").toLowerCase().match(L) || [""], null == g.crossDomain && (n = qe.exec(g.url.toLowerCase()), g.crossDomain = !(!n || n[1] === Ye[1] && n[2] === Ye[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ye[3] || ("http:" === Ye[1] ? "80" : "443")))), g.data && g.processData && "string" != typeof g.data && (g.data = T.param(g.data, g.traditional)), Ue(Oe, g, e, C), 2 === w) return C;
            for (i in (p = T.event && g.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), g.type = g.type.toUpperCase(), g.hasContent = !He.test(g.type), u = g.url, g.hasContent || (g.data && (u = g.url += (Ne.test(u) ? "&" : "?") + g.data, delete g.data), !1 === g.cache && (g.url = ze.test(u) ? u.replace(ze, "$1_=" + Le++) : u + (Ne.test(u) ? "&" : "?") + "_=" + Le++)), g.ifModified && (T.lastModified[u] && C.setRequestHeader("If-Modified-Since", T.lastModified[u]), T.etag[u] && C.setRequestHeader("If-None-Match", T.etag[u])), (g.data && g.hasContent && !1 !== g.contentType || e.contentType) && C.setRequestHeader("Content-Type", g.contentType), C.setRequestHeader("Accept", g.dataTypes[0] && g.accepts[g.dataTypes[0]] ? g.accepts[g.dataTypes[0]] + ("*" !== g.dataTypes[0] ? ", " + We + "; q=0.01" : "") : g.accepts["*"]), g.headers) C.setRequestHeader(i, g.headers[i]);
            if (g.beforeSend && (!1 === g.beforeSend.call(m, C, g) || 2 === w)) return C.abort();
            for (i in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) C[i](g[i]);
            if (f = Ue(Be, g, e, C)) {
                if (C.readyState = 1, p && v.trigger("ajaxSend", [C, g]), 2 === w) return C;
                g.async && 0 < g.timeout && (h = _.setTimeout(function() {
                    C.abort("timeout")
                }, g.timeout));
                try {
                    w = 1, f.send(r, l)
                } catch (t) {
                    if (!(w < 2)) throw t;
                    l(-1, t)
                }
            } else l(-1, "No Transport");

            function l(t, e, n, i) {
                var o, r, s, a, l, c = e;
                2 !== w && (w = 2, h && _.clearTimeout(h), f = void 0, d = i || "", C.readyState = 0 < t ? 4 : 0, o = 200 <= t && t < 300 || 304 === t, n && (a = function(t, e, n) {
                    for (var i, o, r, s, a = t.contents, l = t.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === o && (o = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (o)
                        for (s in a)
                            if (a[s] && a[s].test(o)) {
                                l.unshift(s);
                                break
                            }
                    if (l[0] in n) r = l[0];
                    else {
                        for (s in n) {
                            if (!l[0] || t.converters[s + " " + l[0]]) {
                                r = s;
                                break
                            }
                            i || (i = s)
                        }
                        r = r || i
                    }
                    return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
                }(g, C, n)), a = function(t, e, n, i) {
                    var o, r, s, a, l, c = {},
                        u = t.dataTypes.slice();
                    if (u[1])
                        for (s in t.converters) c[s.toLowerCase()] = t.converters[s];
                    for (r = u.shift(); r;)
                        if (t.responseFields[r] && (n[t.responseFields[r]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = u.shift())
                            if ("*" === r) r = l;
                            else if ("*" !== l && l !== r) {
                        if (!(s = c[l + " " + r] || c["* " + r]))
                            for (o in c)
                                if ((a = o.split(" "))[1] === r && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                                    !0 === s ? s = c[o] : !0 !== c[o] && (r = a[0], u.unshift(a[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && t.throws) e = s(e);
                            else try {
                                e = s(e)
                            } catch (t) {
                                return {
                                    state: "parsererror",
                                    error: s ? t : "No conversion from " + l + " to " + r
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: e
                    }
                }(g, a, C, o), o ? (g.ifModified && ((l = C.getResponseHeader("Last-Modified")) && (T.lastModified[u] = l), (l = C.getResponseHeader("etag")) && (T.etag[u] = l)), 204 === t || "HEAD" === g.type ? c = "nocontent" : 304 === t ? c = "notmodified" : (c = a.state, r = a.data, o = !(s = a.error))) : (s = c, (t || !c) && (c = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || c) + "", o ? y.resolveWith(m, [r, c, C]) : y.rejectWith(m, [C, c, s]), C.statusCode(x), x = void 0, p && v.trigger(o ? "ajaxSuccess" : "ajaxError", [C, g, o ? r : s]), b.fireWith(m, [C, c]), p && (v.trigger("ajaxComplete", [C, g]), --T.active || T.event.trigger("ajaxStop")))
            }
            return C
        },
        getJSON: function(t, e, n) {
            return T.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return T.get(t, void 0, e, "script")
        }
    }), T.each(["get", "post"], function(t, o) {
        T[o] = function(t, e, n, i) {
            return T.isFunction(e) && (i = i || n, n = e, e = void 0), T.ajax(T.extend({
                url: t,
                type: o,
                dataType: i,
                data: e,
                success: n
            }, T.isPlainObject(t) && t))
        }
    }), T._evalUrl = function(t) {
        return T.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, T.fn.extend({
        wrapAll: function(e) {
            if (T.isFunction(e)) return this.each(function(t) {
                T(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = T(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(n) {
            return T.isFunction(n) ? this.each(function(t) {
                T(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = T(this),
                    e = t.contents();
                e.length ? e.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(e) {
            var n = T.isFunction(e);
            return this.each(function(t) {
                T(this).wrapAll(n ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                T.nodeName(this, "body") || T(this).replaceWith(this.childNodes)
            }).end()
        }
    }), T.expr.filters.hidden = function(t) {
        return v.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : function(t) {
            for (; t && 1 === t.nodeType;) {
                if ("none" === ((e = t).style && e.style.display || T.css(e, "display")) || "hidden" === t.type) return !0;
                t = t.parentNode
            }
            var e;
            return !1
        }(t)
    }, T.expr.filters.visible = function(t) {
        return !T.expr.filters.hidden(t)
    };
    var Qe = /%20/g,
        Ze = /\[\]$/,
        Ke = /\r?\n/g,
        Je = /^(?:submit|button|image|reset|file)$/i,
        tn = /^(?:input|select|textarea|keygen)/i;

    function en(n, t, i, o) {
        var e;
        if (T.isArray(t)) T.each(t, function(t, e) {
            i || Ze.test(n) ? o(n, e) : en(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, o)
        });
        else if (i || "object" !== T.type(t)) o(n, t);
        else
            for (e in t) en(n + "[" + e + "]", t[e], i, o)
    }
    T.param = function(t, e) {
        var n, i = [],
            o = function(t, e) {
                e = T.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (void 0 === e && (e = T.ajaxSettings && T.ajaxSettings.traditional), T.isArray(t) || t.jquery && !T.isPlainObject(t)) T.each(t, function() {
            o(this.name, this.value)
        });
        else
            for (n in t) en(n, t[n], e, o);
        return i.join("&").replace(Qe, "+")
    }, T.fn.extend({
        serialize: function() {
            return T.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = T.prop(this, "elements");
                return t ? T.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !T(this).is(":disabled") && tn.test(this.nodeName) && !Je.test(t) && (this.checked || !J.test(t))
            }).map(function(t, e) {
                var n = T(this).val();
                return null == n ? null : T.isArray(n) ? T.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(Ke, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(Ke, "\r\n")
                }
            }).get()
        }
    }), T.ajaxSettings.xhr = void 0 !== _.ActiveXObject ? function() {
        return this.isLocal ? an() : 8 < f.documentMode ? sn() : /^(get|post|head|put|delete|options)$/i.test(this.type) && sn() || an()
    } : sn;
    var nn = 0,
        on = {},
        rn = T.ajaxSettings.xhr();

    function sn() {
        try {
            return new _.XMLHttpRequest
        } catch (t) {}
    }

    function an() {
        try {
            return new _.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    _.attachEvent && _.attachEvent("onunload", function() {
        for (var t in on) on[t](void 0, !0)
    }), v.cors = !!rn && "withCredentials" in rn, (rn = v.ajax = !!rn) && T.ajaxTransport(function(l) {
        var c;
        if (!l.crossDomain || v.cors) return {
            send: function(t, r) {
                var e, s = l.xhr(),
                    a = ++nn;
                if (s.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                    for (e in l.xhrFields) s[e] = l.xhrFields[e];
                for (e in l.mimeType && s.overrideMimeType && s.overrideMimeType(l.mimeType), l.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) void 0 !== t[e] && s.setRequestHeader(e, t[e] + "");
                s.send(l.hasContent && l.data || null), c = function(t, e) {
                    var n, i, o;
                    if (c && (e || 4 === s.readyState))
                        if (delete on[a], c = void 0, s.onreadystatechange = T.noop, e) 4 !== s.readyState && s.abort();
                        else {
                            o = {}, n = s.status, "string" == typeof s.responseText && (o.text = s.responseText);
                            try {
                                i = s.statusText
                            } catch (t) {
                                i = ""
                            }
                            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = o.text ? 200 : 404
                        }
                    o && r(n, i, o, s.getAllResponseHeaders())
                }, l.async ? 4 === s.readyState ? _.setTimeout(c) : s.onreadystatechange = on[a] = c : c()
            },
            abort: function() {
                c && c(void 0, !0)
            }
        }
    }), T.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }), T.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return T.globalEval(t), t
            }
        }
    }), T.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), T.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var i, o = f.head || T("head")[0] || f.documentElement;
            return {
                send: function(t, n) {
                    (i = f.createElement("script")).async = !0, e.scriptCharset && (i.charset = e.scriptCharset), i.src = e.url, i.onload = i.onreadystatechange = function(t, e) {
                        (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || n(200, "success"))
                    }, o.insertBefore(i, o.firstChild)
                },
                abort: function() {
                    i && i.onload(void 0, !0)
                }
            }
        }
    });
    var ln = [],
        cn = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = ln.pop() || T.expando + "_" + Le++;
            return this[t] = !0, t
        }
    }), T.ajaxPrefilter("json jsonp", function(t, e, n) {
        var i, o, r, s = !1 !== t.jsonp && (cn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && cn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = T.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(cn, "$1" + i) : !1 !== t.jsonp && (t.url += (Ne.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
            return r || T.error(i + " was not called"), r[0]
        }, t.dataTypes[0] = "json", o = _[i], _[i] = function() {
            r = arguments
        }, n.always(function() {
            void 0 === o ? T(_).removeProp(i) : _[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, ln.push(i)), r && T.isFunction(o) && o(r[0]), r = o = void 0
        }), "script") : void 0
    }), v.createHTMLDocument = function() {
        if (!f.implementation.createHTMLDocument) return !1;
        var t = f.implementation.createHTMLDocument("");
        return t.body.innerHTML = "<form></form><form></form>", 2 === t.body.childNodes.length
    }(), T.parseHTML = function(t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || (v.createHTMLDocument ? f.implementation.createHTMLDocument("") : f);
        var i = w.exec(t),
            o = !n && [];
        return i ? [e.createElement(i[1])] : (i = dt([t], e, o), o && o.length && T(o).remove(), T.merge([], i.childNodes))
    };
    var un = T.fn.load;

    function dn(t) {
        return T.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    T.fn.load = function(t, e, n) {
        if ("string" != typeof t && un) return un.apply(this, arguments);
        var i, o, r, s = this,
            a = t.indexOf(" ");
        return -1 < a && (i = T.trim(t.slice(a, t.length)), t = t.slice(0, a)), T.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (o = "POST"), 0 < s.length && T.ajax({
            url: t,
            type: o || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            r = arguments, s.html(i ? T("<div>").append(T.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            s.each(function() {
                n.apply(s, r || [t.responseText, e, t])
            })
        }), this
    }, T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        T.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), T.expr.filters.animated = function(e) {
        return T.grep(T.timers, function(t) {
            return e === t.elem
        }).length
    }, T.offset = {
        setOffset: function(t, e, n) {
            var i, o, r, s, a, l, c = T.css(t, "position"),
                u = T(t),
                d = {};
            "static" === c && (t.style.position = "relative"), a = u.offset(), r = T.css(t, "top"), l = T.css(t, "left"), ("absolute" === c || "fixed" === c) && -1 < T.inArray("auto", [r, l]) ? (s = (i = u.position()).top, o = i.left) : (s = parseFloat(r) || 0, o = parseFloat(l) || 0), T.isFunction(e) && (e = e.call(t, n, T.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + o), "using" in e ? e.using.call(t, d) : u.css(d)
        }
    }, T.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                T.offset.setOffset(this, e, t)
            });
            var t, n, i = {
                    top: 0,
                    left: 0
                },
                o = this[0],
                r = o && o.ownerDocument;
            return r ? (t = r.documentElement, T.contains(t, o) ? (void 0 !== o.getBoundingClientRect && (i = o.getBoundingClientRect()), n = dn(r), {
                top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : i) : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = {
                        top: 0,
                        left: 0
                    },
                    i = this[0];
                return "fixed" === T.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), T.nodeName(t[0], "html") || (n = t.offset()), n.top += T.css(t[0], "borderTopWidth", !0) - t.scrollTop(), n.left += T.css(t[0], "borderLeftWidth", !0) - t.scrollLeft()), {
                    top: e.top - n.top - T.css(i, "marginTop", !0),
                    left: e.left - n.left - T.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && !T.nodeName(t, "html") && "static" === T.css(t, "position");) t = t.offsetParent;
                return t || Bt
            })
        }
    }), T.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, o) {
        var r = /Y/.test(o);
        T.fn[e] = function(t) {
            return K(this, function(t, e, n) {
                var i = dn(t);
                return void 0 === n ? i ? o in i ? i[o] : i.document.documentElement[e] : t[e] : void(i ? i.scrollTo(r ? T(i).scrollLeft() : n, r ? n : T(i).scrollTop()) : t[e] = n)
            }, e, t, arguments.length, null)
        }
    }), T.each(["top", "left"], function(t, n) {
        T.cssHooks[n] = Vt(v.pixelPosition, function(t, e) {
            return e ? (e = Xt(t, n), qt.test(e) ? T(t).position()[n] + "px" : e) : void 0
        })
    }), T.each({
        Height: "height",
        Width: "width"
    }, function(r, s) {
        T.each({
            padding: "inner" + r,
            content: s,
            "": "outer" + r
        }, function(i, t) {
            T.fn[t] = function(t, e) {
                var n = arguments.length && (i || "boolean" != typeof t),
                    o = i || (!0 === t || !0 === e ? "margin" : "border");
                return K(this, function(t, e, n) {
                    var i;
                    return T.isWindow(t) ? t.document.documentElement["client" + r] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + r], i["scroll" + r], t.body["offset" + r], i["offset" + r], i["client" + r])) : void 0 === n ? T.css(t, e, o) : T.style(t, e, n, o)
                }, s, n ? t : void 0, n, null)
            }
        })
    }), T.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), T.fn.size = function() {
        return this.length
    }, T.fn.andSelf = T.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return T
    });
    var hn = _.jQuery,
        pn = _.$;
    return T.noConflict = function(t) {
        return _.$ === T && (_.$ = pn), t && _.jQuery === T && (_.jQuery = hn), T
    }, t || (_.jQuery = _.$ = T), T
}),
function(c, r, g, m) {
    "use strict";

    function n(t) {
        var e = t.currentTarget,
            n = t.data ? t.data.options : {},
            i = t.data ? t.data.items : [],
            o = g(e).attr("data-fancybox") || "",
            r = 0;
        t.preventDefault(), t.stopPropagation(), o ? (r = (i = i.length ? i.filter('[data-fancybox="' + o + '"]') : g('[data-fancybox="' + o + '"]')).index(e)) < 0 && (r = 0) : i = [e], g.fancybox.open(i, n, r)
    }
    if (g) {
        if (g.fn.fancybox) return g.error("fancyBox already initialized");
        var o = {
                loop: !1,
                margin: [44, 0],
                gutter: 50,
                keyboard: !0,
                arrows: !0,
                infobar: !1,
                toolbar: !0,
                buttons: ["slideShow", "fullScreen", "thumbs", "close"],
                idleTime: 4,
                smallBtn: "auto",
                protect: !1,
                modal: !1,
                image: {
                    preload: "auto"
                },
                ajax: {
                    settings: {
                        data: {
                            fancybox: !0
                        }
                    }
                },
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen allowtransparency="true" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {
                        scrolling: "auto"
                    }
                },
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><button data-fancybox-prev title="{{PREV}}" class="fancybox-button fancybox-button--left"></button><div class="fancybox-infobar__body"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><button data-fancybox-next title="{{NEXT}}" class="fancybox-button fancybox-button--right"></button></div><div class="fancybox-toolbar">{{BUTTONS}}</div><div class="fancybox-navigation"><button data-fancybox-prev title="{{PREV}}" class="fancybox-arrow fancybox-arrow--left" /><button data-fancybox-next title="{{NEXT}}" class="fancybox-arrow fancybox-arrow--right" /></div><div class="fancybox-stage"></div><div class="fancybox-caption-wrap"><div class="fancybox-caption"></div></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}<p></div>',
                btnTpl: {
                    slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
                    fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
                    thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',
                    smallBtn: '<button data-fancybox-close class="fancybox-close-small" title="{{CLOSE}}"></button>'
                },
                parentEl: "body",
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {
                    autoStart: !1
                },
                touch: {
                    vertical: !0,
                    momentum: !0
                },
                hash: null,
                media: {},
                slideShow: {
                    autoStart: !1,
                    speed: 4e3
                },
                thumbs: {
                    autoStart: !1,
                    hideOnClose: !0
                },
                onInit: g.noop,
                beforeLoad: g.noop,
                afterLoad: g.noop,
                beforeShow: g.noop,
                afterShow: g.noop,
                beforeClose: g.noop,
                afterClose: g.noop,
                onActivate: g.noop,
                onDeactivate: g.noop,
                clickContent: function(t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    clickContent: function(t, e) {
                        return "image" === t.type && "toggleControls"
                    },
                    clickSlide: function(t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    },
                    dblclickContent: function(t, e) {
                        return "image" === t.type && "zoom"
                    },
                    dblclickSlide: function(t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "Zurück",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder"
                    }
                }
            },
            u = g(c),
            s = g(r),
            a = 0,
            d = c.requestAnimationFrame || c.webkitRequestAnimationFrame || c.mozRequestAnimationFrame || c.oRequestAnimationFrame || function(t) {
                return c.setTimeout(t, 1e3 / 60)
            },
            h = function() {
                var t, e = r.createElement("fakeelement"),
                    n = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (t in n)
                    if (e.style[t] !== m) return n[t]
            }(),
            p = function(t) {
                return t && t.length && t[0].offsetHeight
            },
            i = function(t, e, n) {
                var i = this;
                i.opts = g.extend(!0, {
                    index: n
                }, o, e || {}), e && g.isArray(e.buttons) && (i.opts.buttons = e.buttons), i.id = i.opts.id || ++a, i.group = [], i.currIndex = parseInt(i.opts.index, 10) || 0, i.prevIndex = null, i.prevPos = null, i.currPos = 0, i.firstRun = null, i.createGroup(t), i.group.length && (i.$lastFocus = g(r.activeElement).blur(), i.slides = {}, i.init(t))
            };
        g.extend(i.prototype, {
            init: function() {
                var t, e, n, i = this,
                    o = i.group[i.currIndex].opts;
                i.scrollTop = s.scrollTop(), i.scrollLeft = s.scrollLeft(), g.fancybox.getInstance() || g.fancybox.isMobile || "hidden" === g("body").css("overflow") || (t = g("body").width(), g("html").addClass("fancybox-enabled"), 1 < (t = g("body").width() - t) && g("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar, .fancybox-enabled body { margin-right: ' + t + "px; }</style>")), n = "", g.each(o.buttons, function(t, e) {
                    n += o.btnTpl[e] || ""
                }), e = g(i.translate(i, o.baseTpl.replace("{{BUTTONS}}", n))).addClass("fancybox-is-hidden").attr("id", "fancybox-container-" + i.id).addClass(o.baseClass).data("FancyBox", i).prependTo(o.parentEl), i.$refs = {
                    container: e
                }, ["bg", "inner", "infobar", "toolbar", "stage", "caption"].forEach(function(t) {
                    i.$refs[t] = e.find(".fancybox-" + t)
                }), (!o.arrows || i.group.length < 2) && e.find(".fancybox-navigation").remove(), o.infobar || i.$refs.infobar.remove(), o.toolbar || i.$refs.toolbar.remove(), i.trigger("onInit"), i.activate(), i.jumpTo(i.currIndex)
            },
            translate: function(t, e) {
                var i = t.opts.i18n[t.opts.lang];
                return e.replace(/\{\{(\w+)\}\}/g, function(t, e) {
                    var n = i[e];
                    return n === m ? t : n
                })
            },
            createGroup: function(t) {
                var c = this,
                    e = g.makeArray(t);
                g.each(e, function(t, e) {
                    var n, i, o, r, s = {},
                        a = {},
                        l = [];
                    g.isPlainObject(e) ? a = (s = e).opts || e : "object" === g.type(e) && g(e).length ? (n = g(e), l = n.data(), a = "options" in l ? l.options : {}, a = "object" === g.type(a) ? a : {}, s.src = "src" in l ? l.src : a.src || n.attr("href"), ["width", "height", "thumb", "type", "filter"].forEach(function(t) {
                        t in l && (a[t] = l[t])
                    }), "srcset" in l && (a.image = {
                        srcset: l.srcset
                    }), a.$orig = n, s.type || s.src || (s.type = "inline", s.src = e)) : s = {
                        type: "html",
                        src: e + ""
                    }, s.opts = g.extend(!0, {}, c.opts, a), g.fancybox.isMobile && (s.opts = g.extend(!0, {}, s.opts, s.opts.mobile)), i = s.type || s.opts.type, o = s.src || "", !i && o && (o.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : o.match(/\.(pdf)((\?|#).*)?$/i) ? i = "pdf" : "#" === o.charAt(0) && (i = "inline")), s.type = i, s.index = c.group.length, s.opts.$orig && !s.opts.$orig.length && delete s.opts.$orig, !s.opts.$thumb && s.opts.$orig && (s.opts.$thumb = s.opts.$orig.find("img:first")), s.opts.$thumb && !s.opts.$thumb.length && delete s.opts.$thumb, "function" === g.type(s.opts.caption) ? s.opts.caption = s.opts.caption.apply(e, [c, s]) : "caption" in l && (s.opts.caption = l.caption), s.opts.caption = s.opts.caption === m ? "" : s.opts.caption + "", "ajax" === i && (1 < (r = o.split(/\s+/, 2)).length && (s.src = r.shift(), s.opts.filter = r.shift())), "auto" == s.opts.smallBtn && (-1 < g.inArray(i, ["html", "inline", "ajax"]) ? (s.opts.toolbar = !1, s.opts.smallBtn = !0) : s.opts.smallBtn = !1), "pdf" === i && (s.type = "iframe", s.opts.iframe.preload = !1), s.opts.modal && (s.opts = g.extend(!0, s.opts, {
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), c.group.push(s)
                })
            },
            addEvents: function() {
                var i = this;
                i.removeEvents(), i.$refs.container.on("click.fb-close", "[data-fancybox-close]", function(t) {
                    t.stopPropagation(), t.preventDefault(), i.close(t)
                }).on("click.fb-prev touchend.fb-prev", "[data-fancybox-prev]", function(t) {
                    t.stopPropagation(), t.preventDefault(), i.previous()
                }).on("click.fb-next touchend.fb-next", "[data-fancybox-next]", function(t) {
                    t.stopPropagation(), t.preventDefault(), i.next()
                }), u.on("orientationchange.fb resize.fb", function(t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? d(function() {
                        i.update()
                    }) : (i.$refs.stage.hide(), setTimeout(function() {
                        i.$refs.stage.show(), i.update()
                    }, 500))
                }), s.on("focusin.fb", function(t) {
                    var e = g.fancybox ? g.fancybox.getInstance() : null;
                    e.isClosing || !e.current || !e.current.opts.trapFocus || g(t.target).hasClass("fancybox-container") || g(t.target).is(r) || e && "fixed" !== g(t.target).css("position") && !e.$refs.container.has(t.target).length && (t.stopPropagation(), e.focus(), u.scrollTop(i.scrollTop).scrollLeft(i.scrollLeft))
                }), s.on("keydown.fb", function(t) {
                    var e = i.current,
                        n = t.keyCode || t.which;
                    if (e && e.opts.keyboard && !g(t.target).is("input") && !g(t.target).is("textarea")) return 8 === n || 27 === n ? (t.preventDefault(), void i.close(t)) : 37 === n || 38 === n ? (t.preventDefault(), void i.previous()) : 39 === n || 40 === n ? (t.preventDefault(), void i.next()) : void i.trigger("afterKeydown", t, n)
                }), i.group[i.currIndex].opts.idleTime && (i.idleSecondsCounter = 0, s.on("mousemove.fb-idle mouseenter.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function() {
                    i.idleSecondsCounter = 0, i.isIdle && i.showControls(), i.isIdle = !1
                }), i.idleInterval = c.setInterval(function() {
                    i.idleSecondsCounter++, i.idleSecondsCounter >= i.group[i.currIndex].opts.idleTime && (i.isIdle = !0, i.idleSecondsCounter = 0, i.hideControls())
                }, 1e3))
            },
            removeEvents: function() {
                u.off("orientationchange.fb resize.fb"), s.off("focusin.fb keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (c.clearInterval(this.idleInterval), this.idleInterval = null)
            },
            previous: function(t) {
                return this.jumpTo(this.currPos - 1, t)
            },
            next: function(t) {
                return this.jumpTo(this.currPos + 1, t)
            },
            jumpTo: function(t, i, e) {
                var n, o, r, s, a, l, c, u = this,
                    d = u.group.length;
                if (!(u.isSliding || u.isClosing || u.isAnimating && u.firstRun)) {
                    if (t = parseInt(t, 10), !(o = u.current ? u.current.opts.loop : u.opts.loop) && (t < 0 || d <= t)) return !1;
                    if (n = u.firstRun = null === u.firstRun, !(d < 2 && !n && u.isSliding)) {
                        if (s = u.current, u.prevIndex = u.currIndex, u.prevPos = u.currPos, r = u.createSlide(t), 1 < d && ((o || 0 < r.index) && u.createSlide(t - 1), (o || r.index < d - 1) && u.createSlide(t + 1)), u.current = r, u.currIndex = r.index, u.currPos = r.pos, u.trigger("beforeShow", n), u.updateControls(), l = g.fancybox.getTranslate(r.$slide), r.isMoved = (0 !== l.left || 0 !== l.top) && !r.$slide.hasClass("fancybox-animated"), r.forcedDuration = m, g.isNumeric(i) ? r.forcedDuration = i : i = r.opts[n ? "animationDuration" : "transitionDuration"], i = parseInt(i, 10), n) return r.opts.animationEffect && i && u.$refs.container.css("transition-duration", i + "ms"), u.$refs.container.removeClass("fancybox-is-hidden"), p(u.$refs.container), u.$refs.container.addClass("fancybox-is-open"), r.$slide.addClass("fancybox-slide--current"), u.loadSlide(r), void u.preload();
                        g.each(u.slides, function(t, e) {
                            g.fancybox.stop(e.$slide)
                        }), r.$slide.removeClass("fancybox-slide--next fancybox-slide--previous").addClass("fancybox-slide--current"), r.isMoved ? (a = Math.round(r.$slide.width()), g.each(u.slides, function(t, e) {
                            var n = e.pos - r.pos;
                            g.fancybox.animate(e.$slide, {
                                top: 0,
                                left: n * a + n * e.opts.gutter
                            }, i, function() {
                                e.$slide.removeAttr("style").removeClass("fancybox-slide--next fancybox-slide--previous"), e.pos === u.currPos && (r.isMoved = !1, u.complete())
                            })
                        })) : u.$refs.stage.children().removeAttr("style"), r.isLoaded ? u.revealContent(r) : u.loadSlide(r), u.preload(), s.pos !== r.pos && (c = "fancybox-slide--" + (s.pos > r.pos ? "next" : "previous"), s.$slide.removeClass("fancybox-slide--complete fancybox-slide--current fancybox-slide--next fancybox-slide--previous"), s.isComplete = !1, i && (r.isMoved || r.opts.transitionEffect) && (r.isMoved ? s.$slide.addClass(c) : (c = "fancybox-animated " + c + " fancybox-fx-" + r.opts.transitionEffect, g.fancybox.animate(s.$slide, c, i, function() {
                            s.$slide.removeClass(c).removeAttr("style")
                        }))))
                    }
                }
            },
            createSlide: function(t) {
                var e, n, i = this;
                return n = (n = t % i.group.length) < 0 ? i.group.length + n : n, !i.slides[t] && i.group[n] && (e = g('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage), i.slides[t] = g.extend(!0, {}, i.group[n], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), i.updateSlide(i.slides[t])), i.slides[t]
            },
            scaleToActual: function(t, e, n) {
                var i, o, r, s, a, l = this,
                    c = l.current,
                    u = c.$content,
                    d = parseInt(c.$slide.width(), 10),
                    h = parseInt(c.$slide.height(), 10),
                    p = c.width,
                    f = c.height;
                "image" != c.type || c.hasError || !u || l.isAnimating || (g.fancybox.stop(u), l.isAnimating = !0, t = t === m ? .5 * d : t, e = e === m ? .5 * h : e, s = p / (i = g.fancybox.getTranslate(u)).width, a = f / i.height, o = .5 * d - .5 * p, r = .5 * h - .5 * f, d < p && (0 < (o = i.left * s - (t * s - t)) && (o = 0), o < d - p && (o = d - p)), h < f && (0 < (r = i.top * a - (e * a - e)) && (r = 0), r < h - f && (r = h - f)), l.updateCursor(p, f), g.fancybox.animate(u, {
                    top: r,
                    left: o,
                    scaleX: s,
                    scaleY: a
                }, n || 330, function() {
                    l.isAnimating = !1
                }), l.SlideShow && l.SlideShow.isActive && l.SlideShow.stop())
            },
            scaleToFit: function(t) {
                var e, n = this,
                    i = n.current,
                    o = i.$content;
                "image" != i.type || i.hasError || !o || n.isAnimating || (g.fancybox.stop(o), n.isAnimating = !0, e = n.getFitPos(i), n.updateCursor(e.width, e.height), g.fancybox.animate(o, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / o.width(),
                    scaleY: e.height / o.height()
                }, t || 330, function() {
                    n.isAnimating = !1
                }))
            },
            getFitPos: function(t) {
                var e, n, i, o, r, s = t.$content,
                    a = t.width,
                    l = t.height,
                    c = t.opts.margin;
                return !(!s || !s.length || !a && !l) && ("number" === g.type(c) && (c = [c, c]), 2 == c.length && (c = [c[0], c[1], c[0], c[1]]), u.width() < 800 && (c = [0, 0, 0, 0]), e = parseInt(this.$refs.stage.width(), 10) - (c[1] + c[3]), n = parseInt(this.$refs.stage.height(), 10) - (c[0] + c[2]), i = Math.min(1, e / a, n / l), o = Math.floor(i * a), r = Math.floor(i * l), {
                    top: Math.floor(.5 * (n - r)) + c[0],
                    left: Math.floor(.5 * (e - o)) + c[3],
                    width: o,
                    height: r
                })
            },
            update: function() {
                var n = this;
                g.each(n.slides, function(t, e) {
                    n.updateSlide(e)
                })
            },
            updateSlide: function(t) {
                var e = t.$content;
                e && (t.width || t.height) && (g.fancybox.stop(e), g.fancybox.setTranslate(e, this.getFitPos(t)), t.pos === this.currPos && this.updateCursor()), t.$slide.trigger("refresh"), this.trigger("onUpdate", t)
            },
            updateCursor: function(t, e) {
                var n = this,
                    i = n.$refs.container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-drag fancybox-can-zoomOut");
                n.current && !n.isClosing && (n.isZoomable() ? (i.addClass("fancybox-is-zoomable"), (t !== m && e !== m ? t < n.current.width && e < n.current.height : n.isScaledDown()) ? i.addClass("fancybox-can-zoomIn") : n.current.opts.touch ? i.addClass("fancybox-can-drag") : i.addClass("fancybox-can-zoomOut")) : n.current.opts.touch && i.addClass("fancybox-can-drag"))
            },
            isZoomable: function() {
                var t, e = this.current;
                if (e && !this.isClosing) return !!("image" === e.type && e.isLoaded && !e.hasError && ("zoom" === e.opts.clickContent || g.isFunction(e.opts.clickContent) && "zoom" === e.opts.clickContent(e)) && (t = this.getFitPos(e), e.width > t.width || e.height > t.height))
            },
            isScaledDown: function() {
                var t = this.current,
                    e = t.$content,
                    n = !1;
                return e && (n = (n = g.fancybox.getTranslate(e)).width < t.width || n.height < t.height), n
            },
            canPan: function() {
                var t = this.current,
                    e = t.$content,
                    n = !1;
                return e && (n = this.getFitPos(t), n = 1 < Math.abs(e.width() - n.width) || 1 < Math.abs(e.height() - n.height)), n
            },
            loadSlide: function(n) {
                var t, e, i, o = this;
                if (!n.isLoading && !n.isLoaded) {
                    switch (n.isLoading = !0, o.trigger("beforeLoad", n), t = n.type, (e = n.$slide).off("refresh").trigger("onReset").addClass("fancybox-slide--" + (t || "unknown")).addClass(n.opts.slideClass), t) {
                        case "image":
                            o.setImage(n);
                            break;
                        case "iframe":
                            o.setIframe(n);
                            break;
                        case "html":
                            o.setContent(n, n.src || n.content);
                            break;
                        case "inline":
                            g(n.src).length ? o.setContent(n, g(n.src)) : o.setError(n);
                            break;
                        case "ajax":
                            o.showLoading(n), i = g.ajax(g.extend({}, n.opts.ajax.settings, {
                                url: n.src,
                                success: function(t, e) {
                                    "success" === e && o.setContent(n, t)
                                },
                                error: function(t, e) {
                                    t && "abort" !== e && o.setError(n)
                                }
                            })), e.one("onReset", function() {
                                i.abort()
                            });
                            break;
                        default:
                            o.setError(n)
                    }
                    return !0
                }
            },
            setImage: function(t) {
                var e, n, i, o, r = this,
                    s = t.opts.image.srcset;
                if (s) {
                    i = c.devicePixelRatio || 1, o = c.innerWidth * i, (n = s.split(",").map(function(t) {
                        var i = {};
                        return t.trim().split(/\s+/).forEach(function(t, e) {
                            var n = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === e ? i.url = t : void(n && (i.value = n, i.postfix = t[t.length - 1]))
                        }), i
                    })).sort(function(t, e) {
                        return t.value - e.value
                    });
                    for (var a = 0; a < n.length; a++) {
                        var l = n[a];
                        if ("w" === l.postfix && l.value >= o || "x" === l.postfix && l.value >= i) {
                            e = l;
                            break
                        }
                    }!e && n.length && (e = n[n.length - 1]), e && (t.src = e.url, t.width && t.height && "w" == e.postfix && (t.height = t.width / t.height * e.value, t.width = e.value))
                }
                t.$content = g('<div class="fancybox-image-wrap"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide), !1 !== t.opts.preload && t.opts.width && t.opts.height && (t.opts.thumb || t.opts.$thumb) ? (t.width = t.opts.width, t.height = t.opts.height, t.$ghost = g("<img />").one("error", function() {
                    g(this).remove(), t.$ghost = null, r.setBigImage(t)
                }).one("load", function() {
                    r.afterLoad(t), r.setBigImage(t)
                }).addClass("fancybox-image").appendTo(t.$content).attr("src", t.opts.thumb || t.opts.$thumb.attr("src"))) : r.setBigImage(t)
            },
            setBigImage: function(t) {
                var e = this,
                    n = g("<img />");
                t.$image = n.one("error", function() {
                    e.setError(t)
                }).one("load", function() {
                    clearTimeout(t.timouts), t.timouts = null, e.isClosing || (t.width = this.naturalWidth, t.height = this.naturalHeight, t.opts.image.srcset && n.attr("sizes", "100vw").attr("srcset", t.opts.image.srcset), e.hideLoading(t), t.$ghost ? t.timouts = setTimeout(function() {
                        t.timouts = null, t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))) : e.afterLoad(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), n[0].complete ? n.trigger("load") : n[0].error ? n.trigger("error") : t.timouts = setTimeout(function() {
                    n[0].complete || t.hasError || e.showLoading(t)
                }, 100)
            },
            setIframe: function(r) {
                var s, e = this,
                    a = r.opts.iframe,
                    t = r.$slide;
                r.$content = g('<div class="fancybox-content' + (a.preload ? " fancybox-is-hidden" : "") + '"></div>').css(a.css).appendTo(t), s = g(a.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(a.attr).appendTo(r.$content), a.preload ? (e.showLoading(r), s.on("load.fb error.fb", function(t) {
                    this.isReady = 1, r.$slide.trigger("refresh"), e.afterLoad(r)
                }), t.on("refresh.fb", function() {
                    var t, e, n, i, o = r.$content;
                    if (1 === s[0].isReady) {
                        try {
                            t = s.contents().find("body")
                        } catch (t) {}
                        t && t.length && (a.css.width === m || a.css.height === m) && (e = s[0].contentWindow.document.documentElement.scrollWidth, n = Math.ceil(t.outerWidth(!0) + (o.width() - e)), i = Math.ceil(t.outerHeight(!0)), o.css({
                            width: a.css.width === m ? n + (o.outerWidth() - o.innerWidth()) : a.css.width,
                            height: a.css.height === m ? i + (o.outerHeight() - o.innerHeight()) : a.css.height
                        })), o.removeClass("fancybox-is-hidden")
                    }
                })) : this.afterLoad(r), s.attr("src", r.src), !0 === r.opts.smallBtn && r.$content.prepend(e.translate(r, r.opts.btnTpl.smallBtn)), t.one("onReset", function() {
                    try {
                        g(this).find("iframe").hide().attr("src", "//about:blank")
                    } catch (t) {}
                    g(this).empty(), r.isLoaded = !1
                })
            },
            setContent: function(t, e) {
                var n;
                this.isClosing || (this.hideLoading(t), t.$slide.empty(), (n = e) && n.hasOwnProperty && n instanceof g && e.parent().length ? (e.parent(".fancybox-slide--inline").trigger("onReset"), t.$placeholder = g("<div></div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === g.type(e) && (3 === (e = g("<div>").append(g.trim(e)).contents())[0].nodeType && (e = g("<div>").html(e))), t.opts.filter && (e = g("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function() {
                    t.$placeholder && (t.$placeholder.after(e.hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (g(this).empty(), t.isLoaded = !1)
                }), t.$content = g(e).appendTo(t.$slide), t.opts.smallBtn && !t.$smallBtn && (t.$smallBtn = g(this.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), this.afterLoad(t))
            },
            setError: function(t) {
                t.hasError = !0, t.$slide.removeClass("fancybox-slide--" + t.type), this.setContent(t, this.translate(t, t.opts.errorTpl))
            },
            showLoading: function(t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = g(this.opts.spinnerTpl).appendTo(t.$slide))
            },
            hideLoading: function(t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.remove(), delete t.$spinner)
            },
            afterLoad: function(t) {
                this.isClosing || (t.isLoading = !1, t.isLoaded = !0, this.trigger("afterLoad", t), this.hideLoading(t), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function(t) {
                    return 2 == t.button && t.preventDefault(), !0
                }), "image" === t.type && g('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), this.revealContent(t))
            },
            revealContent: function(e) {
                var t, n, i, o, r, s = this,
                    a = e.$slide,
                    l = !1;
                return t = e.opts[s.firstRun ? "animationEffect" : "transitionEffect"], i = e.opts[s.firstRun ? "animationDuration" : "transitionDuration"], i = parseInt(e.forcedDuration === m ? i : e.forcedDuration, 10), !e.isMoved && e.pos === s.currPos && i || (t = !1), "zoom" !== t || e.pos === s.currPos && i && "image" === e.type && !e.hasError && (l = s.getThumbPos(e)) || (t = "fade"), "zoom" === t ? ((r = s.getFitPos(e)).scaleX = Math.round(r.width / l.width * 100) / 100, r.scaleY = Math.round(r.height / l.height * 100) / 100, delete r.width, delete r.height, "auto" == (o = e.opts.zoomOpacity) && (o = .1 < Math.abs(e.width / e.height - l.width / l.height)), o && (l.opacity = .1, r.opacity = 1), g.fancybox.setTranslate(e.$content.removeClass("fancybox-is-hidden"), l), p(e.$content), void g.fancybox.animate(e.$content, r, i, function() {
                    s.complete()
                })) : (s.updateSlide(e), t ? (g.fancybox.stop(a), n = "fancybox-animated fancybox-slide--" + (e.pos > s.prevPos ? "next" : "previous") + " fancybox-fx-" + t, a.removeAttr("style").removeClass("fancybox-slide--current fancybox-slide--next fancybox-slide--previous").addClass(n), e.$content.removeClass("fancybox-is-hidden"), p(a), void g.fancybox.animate(a, "fancybox-slide--current", i, function(t) {
                    a.removeClass(n).removeAttr("style"), e.pos === s.currPos && s.complete()
                }, !0)) : (p(a), e.$content.removeClass("fancybox-is-hidden"), void(e.pos === s.currPos && s.complete())))
            },
            getThumbPos: function(t) {
                var e, n = !1,
                    i = t.opts.$thumb,
                    o = i ? i.offset() : 0;
                return o && i[0].ownerDocument === r && function(t) {
                    for (var e = t[0], i = e.getBoundingClientRect(), n = []; null !== e.parentElement;) "hidden" !== g(e.parentElement).css("overflow") && "auto" !== g(e.parentElement).css("overflow") || n.push(e.parentElement.getBoundingClientRect()), e = e.parentElement;
                    return n.every(function(t) {
                        var e = Math.min(i.right, t.right) - Math.max(i.left, t.left),
                            n = Math.min(i.bottom, t.bottom) - Math.max(i.top, t.top);
                        return 0 < e && 0 < n
                    }) && 0 < i.bottom && 0 < i.right && i.left < g(c).width() && i.top < g(c).height()
                }(i) && (e = this.$refs.stage.offset(), n = {
                    top: o.top - e.top + parseFloat(i.css("border-top-width") || 0),
                    left: o.left - e.left + parseFloat(i.css("border-left-width") || 0),
                    width: i.width(),
                    height: i.height(),
                    scaleX: 1,
                    scaleY: 1
                }), n
            },
            complete: function() {
                var n = this,
                    t = n.current,
                    i = {};
                t.isMoved || !t.isLoaded || t.isComplete || (t.isComplete = !0, t.$slide.siblings().trigger("onReset"), p(t.$slide), t.$slide.addClass("fancybox-slide--complete"), g.each(n.slides, function(t, e) {
                    e.pos >= n.currPos - 1 && e.pos <= n.currPos + 1 ? i[e.pos] = e : e && (g.fancybox.stop(e.$slide), e.$slide.unbind().remove())
                }), n.slides = i, n.updateCursor(), n.trigger("afterShow"), (g(r.activeElement).is("[disabled]") || t.opts.autoFocus && "image" != t.type && "iframe" !== t.type) && n.focus())
            },
            preload: function() {
                var t, e, n = this;
                n.group.length < 2 || (t = n.slides[n.currPos + 1], e = n.slides[n.currPos - 1], t && "image" === t.type && n.loadSlide(t), e && "image" === e.type && n.loadSlide(e))
            },
            focus: function() {
                var t, e = this.current;
                this.isClosing || (t = (t = e && e.isComplete ? e.$slide.find("button,:input,[tabindex],a").filter(":not([disabled]):visible:first") : null) && t.length ? t : this.$refs.container).focus()
            },
            activate: function() {
                var e = this;
                g(".fancybox-container").each(function() {
                    var t = g(this).data("FancyBox");
                    t && t.uid !== e.uid && !t.isClosing && t.trigger("onDeactivate")
                }), e.current && (0 < e.$refs.container.index() && e.$refs.container.prependTo(r.body), e.updateControls()), e.trigger("onActivate"), e.addEvents()
            },
            close: function(t, e) {
                var n, i, o, r, s, a, l = this,
                    c = l.current,
                    u = function() {
                        l.cleanUp(t)
                    };
                return !l.isClosing && (l.isClosing = !0, !1 === l.trigger("beforeClose", t) ? (l.isClosing = !1, d(function() {
                    l.update()
                }), !1) : (l.removeEvents(), c.timouts && clearTimeout(c.timouts), o = c.$content, n = c.opts.animationEffect, i = g.isNumeric(e) ? e : n ? c.opts.animationDuration : 0, c.$slide.off(h).removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), c.$slide.siblings().trigger("onReset").remove(), i && l.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing"), l.hideLoading(c), l.hideControls(), l.updateCursor(), "zoom" !== n || !0 !== t && o && i && "image" === c.type && !c.hasError && (a = l.getThumbPos(c)) || (n = "fade"), "zoom" === n ? (g.fancybox.stop(o), (s = g.fancybox.getTranslate(o)).width = s.width * s.scaleX, s.height = s.height * s.scaleY, "auto" == (r = c.opts.zoomOpacity) && (r = .1 < Math.abs(c.width / c.height - a.width / a.height)), r && (a.opacity = 0), s.scaleX = s.width / a.width, s.scaleY = s.height / a.height, s.width = a.width, s.height = a.height, g.fancybox.setTranslate(c.$content, s), g.fancybox.animate(c.$content, a, i, u)) : n && i ? !0 === t ? setTimeout(u, i) : g.fancybox.animate(c.$slide.removeClass("fancybox-slide--current"), "fancybox-animated fancybox-slide--previous fancybox-fx-" + n, i, u) : u(), !0))
            },
            cleanUp: function(t) {
                var e, n = this;
                n.current.$slide.trigger("onReset"), n.$refs.container.empty().remove(), n.trigger("afterClose", t), n.$lastFocus && !n.current.focusBack && n.$lastFocus.focus(), n.current = null, (e = g.fancybox.getInstance()) ? e.activate() : (u.scrollTop(n.scrollTop).scrollLeft(n.scrollLeft), g("html").removeClass("fancybox-enabled"), g("#fancybox-style-noscroll").remove())
            },
            trigger: function(t, e) {
                var n, i = Array.prototype.slice.call(arguments, 1),
                    o = e && e.opts ? e : this.current;
                return o ? i.unshift(o) : o = this, i.unshift(this), g.isFunction(o.opts[t]) && (n = o.opts[t].apply(o, i)), !1 === n ? n : void("afterClose" === t ? s.trigger(t + ".fb", i) : this.$refs.container.trigger(t + ".fb", i))
            },
            updateControls: function(t) {
                var e = this,
                    n = e.current,
                    i = n.index,
                    o = n.opts,
                    r = o.caption,
                    s = e.$refs.caption;
                n.$slide.trigger("refresh"), e.$caption = r && r.length ? s.html(r) : null, e.isHiddenControls || e.showControls(), g("[data-fancybox-count]").html(e.group.length), g("[data-fancybox-index]").html(i + 1), g("[data-fancybox-prev]").prop("disabled", !o.loop && i <= 0), g("[data-fancybox-next]").prop("disabled", !o.loop && i >= e.group.length - 1)
            },
            hideControls: function() {
                this.isHiddenControls = !0, this.$refs.container.removeClass("fancybox-show-infobar fancybox-show-toolbar fancybox-show-caption fancybox-show-nav")
            },
            showControls: function() {
                var t = this,
                    e = t.current ? t.current.opts : t.opts,
                    n = t.$refs.container;
                t.isHiddenControls = !1, t.idleSecondsCounter = 0, n.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && 1 < t.group.length)).toggleClass("fancybox-show-nav", !!(e.arrows && 1 < t.group.length)).toggleClass("fancybox-is-modal", !!e.modal), t.$caption ? n.addClass("fancybox-show-caption ") : n.removeClass("fancybox-show-caption")
            },
            toggleControls: function() {
                this.isHiddenControls ? this.showControls() : this.hideControls()
            }
        }), g.fancybox = {
            version: "3.1.20",
            defaults: o,
            getInstance: function(t) {
                var e = g('.fancybox-container:not(".fancybox-is-closing"):first').data("FancyBox"),
                    n = Array.prototype.slice.call(arguments, 1);
                return e instanceof i && ("string" === g.type(t) ? e[t].apply(e, n) : "function" === g.type(t) && t.apply(e, n), e)
            },
            open: function(t, e, n) {
                return new i(t, e, n)
            },
            close: function(t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close())
            },
            destroy: function() {
                this.close(!0), s.off("click.fb-start")
            },
            isMobile: r.createTouch !== m && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent),
            use3d: (t = r.createElement("div"), c.getComputedStyle && c.getComputedStyle(t).getPropertyValue("transform") && !(r.documentMode && r.documentMode < 11)),
            getTranslate: function(t) {
                var e;
                if (!t || !t.length) return !1;
                if ((e = t.eq(0).css("transform")) && -1 !== e.indexOf("matrix") ? e = (e = (e = e.split("(")[1]).split(")")[0]).split(",") : e = [], e.length) e = (e = 10 < e.length ? [e[13], e[12], e[0], e[5]] : [e[5], e[4], e[0], e[3]]).map(parseFloat);
                else {
                    e = [0, 0, 1, 1];
                    var n = /\.*translate\((.*)px,(.*)px\)/i.exec(t.eq(0).attr("style"));
                    n && (e[0] = parseFloat(n[2]), e[1] = parseFloat(n[1]))
                }
                return {
                    top: e[0],
                    left: e[1],
                    scaleX: e[2],
                    scaleY: e[3],
                    opacity: parseFloat(t.css("opacity")),
                    width: t.width(),
                    height: t.height()
                }
            },
            setTranslate: function(t, e) {
                var n = "",
                    i = {};
                if (t && e) return e.left === m && e.top === m || (n = (e.left === m ? t.position().left : e.left) + "px, " + (e.top === m ? t.position().top : e.top) + "px", n = this.use3d ? "translate3d(" + n + ", 0px)" : "translate(" + n + ")"), e.scaleX !== m && e.scaleY !== m && (n = (n.length ? n + " " : "") + "scale(" + e.scaleX + ", " + e.scaleY + ")"), n.length && (i.transform = n), e.opacity !== m && (i.opacity = e.opacity), e.width !== m && (i.width = e.width), e.height !== m && (i.height = e.height), t.css(i)
            },
            animate: function(e, n, t, i, o) {
                var r = h || "transitionend";
                g.isFunction(t) && (i = t, t = null), g.isPlainObject(n) || e.removeAttr("style"), e.on(r, function(t) {
                    (!t || !t.originalEvent || e.is(t.originalEvent.target) && "z-index" != t.originalEvent.propertyName) && (e.off(r), g.isPlainObject(n) ? n.scaleX !== m && n.scaleY !== m && (e.css("transition-duration", "0ms"), n.width = e.width() * n.scaleX, n.height = e.height() * n.scaleY, n.scaleX = 1, n.scaleY = 1, g.fancybox.setTranslate(e, n)) : !0 !== o && e.removeClass(n), g.isFunction(i) && i(t))
                }), g.isNumeric(t) && e.css("transition-duration", t + "ms"), g.isPlainObject(n) ? g.fancybox.setTranslate(e, n) : e.addClass(n), e.data("timer", setTimeout(function() {
                    e.trigger("transitionend")
                }, t + 16))
            },
            stop: function(t) {
                clearTimeout(t.data("timer")), t.off(h)
            }
        }, g.fn.fancybox = function(t) {
            var e;
            return (e = (t = t || {}).selector || !1) ? g("body").off("click.fb-start", e).on("click.fb-start", e, {
                items: g(e),
                options: t
            }, n) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, n), this
        }, s.on("click.fb-start", "[data-fancybox]", n)
    }
    var t
}(window, document, window.jQuery),
function(p) {
    "use strict";
    var f = function(n, t, e) {
            if (n) return e = e || "", "object" === p.type(e) && (e = p.param(e, !0)), p.each(t, function(t, e) {
                n = n.replace("$" + t, e || "")
            }), e.length && (n += (0 < n.indexOf("?") ? "&" : "?") + e), n
        },
        n = {
            youtube: {
                matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
                params: {
                    autoplay: 1,
                    autohide: 1,
                    fs: 1,
                    rel: 0,
                    hd: 1,
                    wmode: "transparent",
                    enablejsapi: 1,
                    html5: 1
                },
                paramPlace: 8,
                type: "iframe",
                url: "//www.youtube.com/embed/$4",
                thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
            },
            vimeo: {
                matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
                params: {
                    autoplay: 1,
                    hd: 1,
                    show_title: 1,
                    show_byline: 1,
                    show_portrait: 0,
                    fullscreen: 1,
                    api: 1
                },
                paramPlace: 3,
                type: "iframe",
                url: "//player.vimeo.com/video/$2"
            },
            metacafe: {
                matcher: /metacafe.com\/watch\/(\d+)\/(.*)?/,
                type: "iframe",
                url: "//www.metacafe.com/embed/$1/?ap=1"
            },
            dailymotion: {
                matcher: /dailymotion.com\/video\/(.*)\/?(.*)/,
                params: {
                    additionalInfos: 0,
                    autoStart: 1
                },
                type: "iframe",
                url: "//www.dailymotion.com/embed/video/$1"
            },
            vine: {
                matcher: /vine.co\/v\/([a-zA-Z0-9\?\=\-]+)/,
                type: "iframe",
                url: "//vine.co/v/$1/embed/simple"
            },
            instagram: {
                matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
                type: "image",
                url: "//$1/p/$2/media/?size=l"
            },
            google_maps: {
                matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
                type: "iframe",
                url: function(t) {
                    return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12]) + "&output=" + (t[12] && 0 < t[12].indexOf("layer=c") ? "svembed" : "embed")
                }
            }
        };
    p(document).on("onInit.fb", function(t, e) {
        p.each(e.group, function(t, o) {
            var e, r, s, a, l, c, u, d = o.src || "",
                h = !1;
            o.type || (e = p.extend(!0, {}, n, o.opts.media), p.each(e, function(t, e) {
                if (s = d.match(e.matcher), c = {}, u = t, s) {
                    if (h = e.type, e.paramPlace && s[e.paramPlace]) {
                        "?" == (l = s[e.paramPlace])[0] && (l = l.substring(1)), l = l.split("&");
                        for (var n = 0; n < l.length; ++n) {
                            var i = l[n].split("=", 2);
                            2 == i.length && (c[i[0]] = decodeURIComponent(i[1].replace(/\+/g, " ")))
                        }
                    }
                    return a = p.extend(!0, {}, e.params, o.opts[t], c), d = "function" === p.type(e.url) ? e.url.call(this, s, a, o) : f(e.url, s, a), r = "function" === p.type(e.thumb) ? e.thumb.call(this, s, a, o) : f(e.thumb, s), "vimeo" === u && (d = d.replace("&%23", "#")), !1
                }
            }), h ? (o.src = d, o.type = h, o.opts.thumb || o.opts.$thumb && o.opts.$thumb.length || (o.opts.thumb = r), "iframe" === h && (p.extend(!0, o.opts, {
                iframe: {
                    preload: !1,
                    attr: {
                        scrolling: "no"
                    }
                }
            }), o.contentProvider = u, o.opts.slideClass += " fancybox-slide--" + ("google_maps" == u ? "map" : "video"))) : o.type = "image")
        })
    })
}(window.jQuery),
function(f, a, g) {
    "use strict";
    var m = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.oRequestAnimationFrame || function(t) {
            return f.setTimeout(t, 1e3 / 60)
        },
        v = f.cancelAnimationFrame || f.webkitCancelAnimationFrame || f.mozCancelAnimationFrame || f.oCancelAnimationFrame || function(t) {
            f.clearTimeout(t)
        },
        u = function(t) {
            var e = [];
            for (var n in t = (t = t.originalEvent || t || f.e).touches && t.touches.length ? t.touches : t.changedTouches && t.changedTouches.length ? t.changedTouches : [t]) t[n].pageX ? e.push({
                x: t[n].pageX,
                y: t[n].pageY
            }) : t[n].clientX && e.push({
                x: t[n].clientX,
                y: t[n].clientY
            });
            return e
        },
        y = function(t, e, n) {
            return e && t ? "x" === n ? t.x - e.x : "y" === n ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        },
        l = function(t) {
            if (t.is("a,button,input,select,textarea") || g.isFunction(t.get(0).onclick)) return !0;
            for (var e = 0, n = t[0].attributes, i = n.length; e < i; e++)
                if ("data-fancybox-" === n[e].nodeName.substr(0, 14)) return !0;
            return !1
        },
        c = function(t) {
            for (var e = !1;
                (n = t.get(0), void 0, i = f.getComputedStyle(n)["overflow-y"], o = f.getComputedStyle(n)["overflow-x"], r = ("scroll" === i || "auto" === i) && n.scrollHeight > n.clientHeight, s = ("scroll" === o || "auto" === o) && n.scrollWidth > n.clientWidth, !(e = r || s)) && ((t = t.parent()).length && !t.hasClass("fancybox-stage") && !t.is("body")););
            var n, i, o, r, s;
            return e
        },
        n = function(t) {
            var e = this;
            e.instance = t, e.$bg = t.$refs.bg, e.$stage = t.$refs.stage, e.$container = t.$refs.container, e.destroy(), e.$container.on("touchstart.fb.touch mousedown.fb.touch", g.proxy(e, "ontouchstart"))
        };
    n.prototype.destroy = function() {
        this.$container.off(".fb.touch")
    }, n.prototype.ontouchstart = function(t) {
        var e = this,
            n = g(t.target),
            i = e.instance,
            o = i.current,
            r = o.$content,
            s = "touchstart" == t.type;
        if (s && e.$container.off("mousedown.fb.touch"), !o || e.instance.isAnimating || e.instance.isClosing) return t.stopPropagation(), void t.preventDefault();
        if ((!t.originalEvent || 2 != t.originalEvent.button) && n.length && !l(n) && !l(n.parent()) && !(t.originalEvent.clientX > n[0].clientWidth + n.offset().left) && (e.startPoints = u(t), e.startPoints && !(1 < e.startPoints.length && i.isSliding))) {
            if (e.$target = n, e.$content = r, e.canTap = !0, g(a).off(".fb.touch"), g(a).on(s ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", g.proxy(e, "ontouchend")), g(a).on(s ? "touchmove.fb.touch" : "mousemove.fb.touch", g.proxy(e, "ontouchmove")), t.stopPropagation(), !i.current.opts.touch && !i.canPan() || !n.is(e.$stage) && !e.$stage.find(n).length) return void(n.is("img") && t.preventDefault());
            g.fancybox.isMobile && (c(e.$target) || c(e.$target.parent())) || t.preventDefault(), e.canvasWidth = Math.round(o.$slide[0].clientWidth), e.canvasHeight = Math.round(o.$slide[0].clientHeight), e.startTime = (new Date).getTime(), e.distanceX = e.distanceY = e.distance = 0, e.isPanning = !1, e.isSwiping = !1, e.isZooming = !1, e.sliderStartPos = e.sliderLastPos || {
                top: 0,
                left: 0
            }, e.contentStartPos = g.fancybox.getTranslate(e.$content), e.contentLastPos = null, 1 !== e.startPoints.length || e.isZooming || (e.canTap = !i.isSliding, "image" === o.type && (e.contentStartPos.width > e.canvasWidth + 1 || e.contentStartPos.height > e.canvasHeight + 1) ? (g.fancybox.stop(e.$content), e.$content.css("transition-duration", "0ms"), e.isPanning = !0) : e.isSwiping = !0, e.$container.addClass("fancybox-controls--isGrabbing")), 2 !== e.startPoints.length || i.isAnimating || o.hasError || "image" !== o.type || !o.isLoaded && !o.$ghost || (e.isZooming = !0, e.isSwiping = !1, e.isPanning = !1, g.fancybox.stop(e.$content), e.$content.css("transition-duration", "0ms"), e.centerPointStartX = .5 * (e.startPoints[0].x + e.startPoints[1].x) - g(f).scrollLeft(), e.centerPointStartY = .5 * (e.startPoints[0].y + e.startPoints[1].y) - g(f).scrollTop(), e.percentageOfImageAtPinchPointX = (e.centerPointStartX - e.contentStartPos.left) / e.contentStartPos.width, e.percentageOfImageAtPinchPointY = (e.centerPointStartY - e.contentStartPos.top) / e.contentStartPos.height, e.startDistanceBetweenFingers = y(e.startPoints[0], e.startPoints[1]))
        }
    }, n.prototype.ontouchmove = function(t) {
        var e = this;
        if (e.newPoints = u(t), g.fancybox.isMobile && (c(e.$target) || c(e.$target.parent()))) return t.stopPropagation(), void(e.canTap = !1);
        if ((e.instance.current.opts.touch || e.instance.canPan()) && e.newPoints && e.newPoints.length && (e.distanceX = y(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = y(e.newPoints[0], e.startPoints[0], "y"), e.distance = y(e.newPoints[0], e.startPoints[0]), 0 < e.distance)) {
            if (!e.$target.is(e.$stage) && !e.$stage.find(e.$target).length) return;
            t.stopPropagation(), t.preventDefault(), e.isSwiping ? e.onSwipe() : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()
        }
    }, n.prototype.onSwipe = function() {
        var t, i = this,
            e = i.isSwiping,
            n = i.sliderStartPos.left || 0;
        !0 === e ? 10 < Math.abs(i.distance) && (i.canTap = !1, i.instance.group.length < 2 && i.instance.opts.touch.vertical ? i.isSwiping = "y" : i.instance.isSliding || !1 === i.instance.opts.touch.vertical || "auto" === i.instance.opts.touch.vertical && 800 < g(f).width() ? i.isSwiping = "x" : (t = Math.abs(180 * Math.atan2(i.distanceY, i.distanceX) / Math.PI), i.isSwiping = 45 < t && t < 135 ? "y" : "x"), i.instance.isSliding = i.isSwiping, i.startPoints = i.newPoints, g.each(i.instance.slides, function(t, e) {
            g.fancybox.stop(e.$slide), e.$slide.css("transition-duration", "0ms"), e.inTransition = !1, e.pos === i.instance.current.pos && (i.sliderStartPos.left = g.fancybox.getTranslate(e.$slide).left)
        }), i.instance.SlideShow && i.instance.SlideShow.isActive && i.instance.SlideShow.stop()) : ("x" == e && (0 < i.distanceX && (i.instance.group.length < 2 || 0 === i.instance.current.index && !i.instance.current.opts.loop) ? n += Math.pow(i.distanceX, .8) : i.distanceX < 0 && (i.instance.group.length < 2 || i.instance.current.index === i.instance.group.length - 1 && !i.instance.current.opts.loop) ? n -= Math.pow(-i.distanceX, .8) : n += i.distanceX), i.sliderLastPos = {
            top: "x" == e ? 0 : i.sliderStartPos.top + i.distanceY,
            left: n
        }, i.requestId && (v(i.requestId), i.requestId = null), i.requestId = m(function() {
            i.sliderLastPos && (g.each(i.instance.slides, function(t, e) {
                var n = e.pos - i.instance.currPos;
                g.fancybox.setTranslate(e.$slide, {
                    top: i.sliderLastPos.top,
                    left: i.sliderLastPos.left + n * i.canvasWidth + n * e.opts.gutter
                })
            }), i.$container.addClass("fancybox-is-sliding"))
        }))
    }, n.prototype.onPan = function() {
        var t, e, n, i = this;
        i.canTap = !1, t = i.contentStartPos.width > i.canvasWidth ? i.contentStartPos.left + i.distanceX : i.contentStartPos.left, e = i.contentStartPos.top + i.distanceY, (n = i.limitMovement(t, e, i.contentStartPos.width, i.contentStartPos.height)).scaleX = i.contentStartPos.scaleX, n.scaleY = i.contentStartPos.scaleY, i.contentLastPos = n, i.requestId && (v(i.requestId), i.requestId = null), i.requestId = m(function() {
            g.fancybox.setTranslate(i.$content, i.contentLastPos)
        })
    }, n.prototype.limitMovement = function(t, e, n, i) {
        var o, r, s, a, l = this,
            c = l.canvasWidth,
            u = l.canvasHeight,
            d = l.contentStartPos.left,
            h = l.contentStartPos.top,
            p = l.distanceX,
            f = l.distanceY;
        return o = Math.max(0, .5 * c - .5 * n), r = Math.max(0, .5 * u - .5 * i), s = Math.min(c - n, .5 * c - .5 * n), a = Math.min(u - i, .5 * u - .5 * i), c < n && (0 < p && o < t && (t = o - 1 + Math.pow(-o + d + p, .8) || 0), p < 0 && t < s && (t = s + 1 - Math.pow(s - d - p, .8) || 0)), u < i && (0 < f && r < e && (e = r - 1 + Math.pow(-r + h + f, .8) || 0), f < 0 && e < a && (e = a + 1 - Math.pow(a - h - f, .8) || 0)), {
            top: e,
            left: t
        }
    }, n.prototype.limitPosition = function(t, e, n, i) {
        var o = this.canvasWidth,
            r = this.canvasHeight;
        return o < n ? t = (t = 0 < t ? 0 : t) < o - n ? o - n : t : t = Math.max(0, o / 2 - n / 2), r < i ? e = (e = 0 < e ? 0 : e) < r - i ? r - i : e : e = Math.max(0, r / 2 - i / 2), {
            top: e,
            left: t
        }
    }, n.prototype.onZoom = function() {
        var t = this,
            e = t.contentStartPos.width,
            n = t.contentStartPos.height,
            i = t.contentStartPos.left,
            o = t.contentStartPos.top,
            r = y(t.newPoints[0], t.newPoints[1]) / t.startDistanceBetweenFingers,
            s = Math.floor(e * r),
            a = Math.floor(n * r),
            l = (e - s) * t.percentageOfImageAtPinchPointX,
            c = (n - a) * t.percentageOfImageAtPinchPointY,
            u = (t.newPoints[0].x + t.newPoints[1].x) / 2 - g(f).scrollLeft(),
            d = (t.newPoints[0].y + t.newPoints[1].y) / 2 - g(f).scrollTop(),
            h = u - t.centerPointStartX,
            p = {
                top: o + (c + (d - t.centerPointStartY)),
                left: i + (l + h),
                scaleX: t.contentStartPos.scaleX * r,
                scaleY: t.contentStartPos.scaleY * r
            };
        t.canTap = !1, t.newWidth = s, t.newHeight = a, t.contentLastPos = p, t.requestId && (v(t.requestId), t.requestId = null), t.requestId = m(function() {
            g.fancybox.setTranslate(t.$content, t.contentLastPos)
        })
    }, n.prototype.ontouchend = function(t) {
        var e = this,
            n = Math.max((new Date).getTime() - e.startTime, 1),
            i = e.isSwiping,
            o = e.isPanning,
            r = e.isZooming;
        return e.endPoints = u(t), e.$container.removeClass("fancybox-controls--isGrabbing"), g(a).off(".fb.touch"), e.requestId && (v(e.requestId), e.requestId = null), e.isSwiping = !1, e.isPanning = !1, e.isZooming = !1, e.canTap ? e.onTap(t) : (e.speed = 366, e.velocityX = e.distanceX / n * .5, e.velocityY = e.distanceY / n * .5, e.speedX = Math.max(.5 * e.speed, Math.min(1.5 * e.speed, 1 / Math.abs(e.velocityX) * e.speed)), void(o ? e.endPanning() : r ? e.endZooming() : e.endSwiping(i)))
    }, n.prototype.endSwiping = function(t) {
        var e = this,
            n = !1;
        e.instance.isSliding = !1, e.sliderLastPos = null, "y" == t && 50 < Math.abs(e.distanceY) ? (g.fancybox.animate(e.instance.current.$slide, {
            top: e.sliderStartPos.top + e.distanceY + 150 * e.velocityY,
            opacity: 0
        }, 150), n = e.instance.close(!0, 300)) : "x" == t && 50 < e.distanceX && 1 < e.instance.group.length ? n = e.instance.previous(e.speedX) : "x" == t && e.distanceX < -50 && 1 < e.instance.group.length && (n = e.instance.next(e.speedX)), !1 !== n || "x" != t && "y" != t || e.instance.jumpTo(e.instance.current.index, 150), e.$container.removeClass("fancybox-is-sliding")
    }, n.prototype.endPanning = function() {
        var t, e, n, i = this;
        i.contentLastPos && (!1 === i.instance.current.opts.touch.momentum ? (t = i.contentLastPos.left, e = i.contentLastPos.top) : (t = i.contentLastPos.left + i.velocityX * i.speed, e = i.contentLastPos.top + i.velocityY * i.speed), (n = i.limitPosition(t, e, i.contentStartPos.width, i.contentStartPos.height)).width = i.contentStartPos.width, n.height = i.contentStartPos.height, g.fancybox.animate(i.$content, n, 330))
    }, n.prototype.endZooming = function() {
        var t, e, n, i, o = this,
            r = o.instance.current,
            s = o.newWidth,
            a = o.newHeight;
        o.contentLastPos && (t = o.contentLastPos.left, i = {
            top: e = o.contentLastPos.top,
            left: t,
            width: s,
            height: a,
            scaleX: 1,
            scaleY: 1
        }, g.fancybox.setTranslate(o.$content, i), s < o.canvasWidth && a < o.canvasHeight ? o.instance.scaleToFit(150) : s > r.width || a > r.height ? o.instance.scaleToActual(o.centerPointStartX, o.centerPointStartY, 150) : (n = o.limitPosition(t, e, s, a), g.fancybox.setTranslate(o.content, g.fancybox.getTranslate(o.$content)), g.fancybox.animate(o.$content, n, 150)))
    }, n.prototype.onTap = function(n) {
        var t, i = this,
            e = g(n.target),
            o = i.instance,
            r = o.current,
            s = n && u(n) || i.startPoints,
            a = s[0] ? s[0].x - i.$stage.offset().left : 0,
            l = s[0] ? s[0].y - i.$stage.offset().top : 0,
            c = function(t) {
                var e = r.opts[t];
                if (g.isFunction(e) && (e = e.apply(o, [r, n])), e) switch (e) {
                    case "close":
                        o.close(i.startEvent);
                        break;
                    case "toggleControls":
                        o.toggleControls(!0);
                        break;
                    case "next":
                        o.next();
                        break;
                    case "nextOrClose":
                        1 < o.group.length ? o.next() : o.close(i.startEvent);
                        break;
                    case "zoom":
                        "image" == r.type && (r.isLoaded || r.$ghost) && (o.canPan() ? o.scaleToFit() : o.isScaledDown() ? o.scaleToActual(a, l) : o.group.length < 2 && o.close(i.startEvent))
                }
            };
        if (!(n.originalEvent && 2 == n.originalEvent.button || o.isSliding || a > e[0].clientWidth + e.offset().left)) {
            if (e.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) t = "Outside";
            else if (e.is(".fancybox-slide")) t = "Slide";
            else {
                if (!o.current.$content || !o.current.$content.has(n.target).length) return;
                t = "Content"
            }
            if (i.tapped) {
                if (clearTimeout(i.tapped), i.tapped = null, 50 < Math.abs(a - i.tapX) || 50 < Math.abs(l - i.tapY) || o.isSliding) return this;
                c("dblclick" + t)
            } else i.tapX = a, i.tapY = l, r.opts["dblclick" + t] && r.opts["dblclick" + t] !== r.opts["click" + t] ? i.tapped = setTimeout(function() {
                i.tapped = null, c("click" + t)
            }, 300) : c("click" + t);
            return this
        }
    }, g(a).on("onActivate.fb", function(t, e) {
        e && !e.Guestures && (e.Guestures = new n(e))
    }), g(a).on("beforeClose.fb", function(t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, window.jQuery),
function(s, a) {
    "use strict";
    var n = function(t) {
        this.instance = t, this.init()
    };
    a.extend(n.prototype, {
        timer: null,
        isActive: !1,
        $button: null,
        speed: 3e3,
        init: function() {
            var t = this;
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function() {
                t.toggle()
            }), (t.instance.group.length < 2 || !t.instance.group[t.instance.currIndex].opts.slideShow) && t.$button.hide()
        },
        set: function() {
            var t = this;
            t.instance && t.instance.current && (t.instance.current.opts.loop || t.instance.currIndex < t.instance.group.length - 1) ? t.timer = setTimeout(function() {
                t.instance.next()
            }, t.instance.current.opts.slideShow.speed || t.speed) : (t.stop(), t.instance.idleSecondsCounter = 0, t.instance.showControls())
        },
        clear: function() {
            clearTimeout(this.timer), this.timer = null
        },
        start: function() {
            var t = this,
                e = t.instance.current;
            t.instance && e && (e.opts.loop || e.index < t.instance.group.length - 1) && (t.isActive = !0, t.$button.attr("title", e.opts.i18n[e.opts.lang].PLAY_STOP).addClass("fancybox-button--pause"), e.isComplete && t.set())
        },
        stop: function() {
            var t = this.instance.current;
            this.clear(), this.$button.attr("title", t.opts.i18n[t.opts.lang].PLAY_START).removeClass("fancybox-button--pause"), this.isActive = !1
        },
        toggle: function() {
            this.isActive ? this.stop() : this.start()
        }
    }), a(s).on({
        "onInit.fb": function(t, e) {
            e && !e.SlideShow && (e.SlideShow = new n(e))
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.SlideShow;
            i ? o && n.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        },
        "afterShow.fb": function(t, e, n) {
            var i = e && e.SlideShow;
            i && i.isActive && i.set()
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
            var r = e && e.SlideShow;
            !r || !n.opts.slideShow || 80 !== o && 32 !== o || a(s.activeElement).is("button,a,input") || (i.preventDefault(), r.toggle())
        },
        "beforeClose.fb onDeactivate.fb": function(t, e) {
            var n = e && e.SlideShow;
            n && n.stop()
        }
    }), a(s).on("visibilitychange", function() {
        var t = a.fancybox.getInstance(),
            e = t && t.SlideShow;
        e && e.isActive && (s.hidden ? e.clear() : e.set())
    })
}(document, window.jQuery),
function(r, e) {
    "use strict";
    var n = function() {
        var t, e, n, i = [
                ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
            ],
            o = {};
        for (e = 0; e < i.length; e++)
            if ((t = i[e]) && t[1] in r) {
                for (n = 0; n < t.length; n++) o[i[0][n]] = t[n];
                return o
            }
        return !1
    }();
    if (n) {
        var o = {
            request: function(t) {
                (t = t || r.documentElement)[n.requestFullscreen](t.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                r[n.exitFullscreen]()
            },
            toggle: function(t) {
                t = t || r.documentElement, this.isFullscreen() ? this.exit() : this.request(t)
            },
            isFullscreen: function() {
                return Boolean(r[n.fullscreenElement])
            },
            enabled: function() {
                return Boolean(r[n.fullscreenEnabled])
            }
        };
        e(r).on({
            "onInit.fb": function(t, e) {
                var n, i = e.$refs.toolbar.find("[data-fancybox-fullscreen]");
                e && !e.FullScreen && e.group[e.currIndex].opts.fullScreen ? ((n = e.$refs.container).on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function(t) {
                    t.stopPropagation(), t.preventDefault(), o.toggle(n[0])
                }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && o.request(n[0]), e.FullScreen = o) : i.hide()
            },
            "afterKeydown.fb": function(t, e, n, i, o) {
                e && e.FullScreen && 70 === o && (i.preventDefault(), e.FullScreen.toggle(e.$refs.container[0]))
            },
            "beforeClose.fb": function(t) {
                t && t.FullScreen && o.exit()
            }
        }), e(r).on(n.fullscreenchange, function() {
            var t = e.fancybox.getInstance();
            t.current && "image" === t.current.type && t.isAnimating && (t.current.$content.css("transition", "none"), t.isAnimating = !1, t.update(!0, !0, 0))
        })
    } else e.fancybox.defaults.btnTpl.fullScreen = !1
}(document, window.jQuery),
function(t, a) {
    "use strict";
    var n = function(t) {
        this.instance = t, this.init()
    };
    a.extend(n.prototype, {
        $button: null,
        $grid: null,
        $list: null,
        isVisible: !1,
        init: function() {
            var t = this,
                e = t.instance.group[0],
                n = t.instance.group[1];
            t.$button = t.instance.$refs.toolbar.find("[data-fancybox-thumbs]"), 1 < t.instance.group.length && t.instance.group[t.instance.currIndex].opts.thumbs && ("image" == e.type || e.opts.thumb || e.opts.$thumb) && ("image" == n.type || n.opts.thumb || n.opts.$thumb) ? (t.$button.on("click", function() {
                t.toggle()
            }), t.isActive = !0) : (t.$button.hide(), t.isActive = !1)
        },
        create: function() {
            var n, i, t = this.instance;
            this.$grid = a('<div class="fancybox-thumbs"></div>').appendTo(t.$refs.container), n = "<ul>", a.each(t.group, function(t, e) {
                (i = e.opts.thumb || (e.opts.$thumb ? e.opts.$thumb.attr("src") : null)) || "image" !== e.type || (i = e.src), i && i.length && (n += '<li data-index="' + t + '"  tabindex="0" class="fancybox-thumbs-loading"><img data-src="' + i + '" /></li>')
            }), n += "</ul>", this.$list = a(n).appendTo(this.$grid).on("click", "li", function() {
                t.jumpTo(a(this).data("index"))
            }), this.$list.find("img").hide().one("load", function() {
                var t, e, n, i, o = a(this).parent().removeClass("fancybox-thumbs-loading"),
                    r = o.outerWidth(),
                    s = o.outerHeight();
                t = this.naturalWidth || this.width, i = (e = this.naturalHeight || this.height) / s, 1 <= (n = t / r) && 1 <= i && (i < n ? (t /= i, e = s) : (t = r, e /= n)), a(this).css({
                    width: Math.floor(t),
                    height: Math.floor(e),
                    "margin-top": Math.min(0, Math.floor(.3 * s - .3 * e)),
                    "margin-left": Math.min(0, Math.floor(.5 * r - .5 * t))
                }).show()
            }).each(function() {
                this.src = a(this).data("src")
            })
        },
        focus: function() {
            this.instance.current && this.$list.children().removeClass("fancybox-thumbs-active").filter('[data-index="' + this.instance.current.index + '"]').addClass("fancybox-thumbs-active").focus()
        },
        close: function() {
            this.$grid.hide()
        },
        update: function() {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus()) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        },
        hide: function() {
            this.isVisible = !1, this.update()
        },
        show: function() {
            this.isVisible = !0, this.update()
        },
        toggle: function() {
            this.isVisible = !this.isVisible, this.update()
        }
    }), a(t).on({
        "onInit.fb": function(t, e) {
            e && !e.Thumbs && (e.Thumbs = new n(e))
        },
        "beforeShow.fb": function(t, e, n, i) {
            var o = e && e.Thumbs;
            if (o && o.isActive) {
                if (n.modal) return o.$button.hide(), void o.hide();
                i && !0 === e.opts.thumbs.autoStart && o.show(), o.isVisible && o.focus()
            }
        },
        "afterKeydown.fb": function(t, e, n, i, o) {
            var r = e && e.Thumbs;
            r && r.isActive && 71 === o && (i.preventDefault(), r.toggle())
        },
        "beforeClose.fb": function(t, e) {
            var n = e && e.Thumbs;
            n && n.isVisible && !1 !== e.opts.thumbs.hideOnClose && n.close()
        }
    })
}(document, window.jQuery),
function(r, s, a) {
    "use strict";

    function o() {
        var t = s.location.hash.substr(1),
            e = t.split("-"),
            n = 1 < e.length && /^\+?\d+$/.test(e[e.length - 1]) && parseInt(e.pop(-1), 10) || 1;
        return n < 1 && (n = 1), {
            hash: t,
            index: n,
            gallery: e.join("-")
        }
    }

    function e(t) {
        var e;
        "" !== t.gallery && ((e = a("[data-fancybox='" + a.escapeSelector(t.gallery) + "']").eq(t.index - 1)).length ? e.trigger("click") : a("#" + a.escapeSelector(t.gallery)).trigger("click"))
    }

    function l(t) {
        var e;
        return !!t && ((e = t.current ? t.current.opts : t.opts).$orig ? e.$orig.data("fancybox") : e.hash || "")
    }
    a.escapeSelector || (a.escapeSelector = function(t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    });
    var c = null,
        u = null;
    a(function() {
        setTimeout(function() {
            !1 !== a.fancybox.defaults.hash && (a(r).on({
                "onInit.fb": function(t, e) {
                    var n, i;
                    !1 !== e.group[e.currIndex].opts.hash && (n = o(), (i = l(e)) && n.gallery && i == n.gallery && (e.currIndex = n.index - 1))
                },
                "beforeShow.fb": function(t, e, n, i) {
                    var o;
                    !1 !== n.opts.hash && ((o = l(e)) && "" !== o && (s.location.hash.indexOf(o) < 0 && (e.opts.origHash = s.location.hash), c = o + (1 < e.group.length ? "-" + (n.index + 1) : ""), "replaceState" in s.history ? (u && clearTimeout(u), u = setTimeout(function() {
                        s.history[i ? "pushState" : "replaceState"]({}, r.title, s.location.pathname + s.location.search + "#" + c), u = null
                    }, 300)) : s.location.hash = c))
                },
                "beforeClose.fb": function(t, e, n) {
                    var i, o;
                    u && clearTimeout(u), !1 !== n.opts.hash && (i = l(e), o = e && e.opts.origHash ? e.opts.origHash : "", i && "" !== i && ("replaceState" in history ? s.history.replaceState({}, r.title, s.location.pathname + s.location.search + o) : (s.location.hash = o, a(s).scrollTop(e.scrollTop).scrollLeft(e.scrollLeft))), c = null)
                }
            }), a(s).on("hashchange.fb", function() {
                var t = o();
                a.fancybox.getInstance() ? !c || c === t.gallery + "-" + t.index || 1 === t.index && c == t.gallery || (c = null, a.fancybox.close()) : "" !== t.gallery && e(t)
            }), a(s).one("unload.fb popstate.fb", function() {
                a.fancybox.getInstance("close", !0, 0)
            }), e(o()))
        }, 50)
    })
}(document, window, window.jQuery),
function(t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(window.jQuery || window.Zepto)
}(function(l) {
    var s = function(r, g, m) {
        r = l(r);
        var e, v = this,
            s = r.val();
        g = "function" == typeof g ? g(r.val(), void 0, r, m) : g;
        var y = {
            invalid: [],
            getCaret: function() {
                try {
                    var t, e = 0,
                        n = r.get(0),
                        i = document.selection,
                        o = n.selectionStart;
                    return i && -1 === navigator.appVersion.indexOf("MSIE 10") ? ((t = i.createRange()).moveStart("character", r.is("input") ? -r.val().length : -r.text().length), e = t.text.length) : (o || "0" === o) && (e = o), e
                } catch (t) {}
            },
            setCaret: function(t) {
                try {
                    if (r.is(":focus")) {
                        var e, n = r.get(0);
                        n.setSelectionRange ? n.setSelectionRange(t, t) : n.createTextRange && ((e = n.createTextRange()).collapse(!0), e.moveEnd("character", t), e.moveStart("character", t), e.select())
                    }
                } catch (t) {}
            },
            events: function() {
                r.on("keyup.mask", y.behaviour).on("paste.mask drop.mask", function() {
                    setTimeout(function() {
                        r.keydown().keyup()
                    }, 100)
                }).on("change.mask", function() {
                    r.data("changed", !0)
                }).on("blur.mask", function() {
                    s === r.val() || r.data("changed") || r.trigger("change"), r.data("changed", !1)
                }).on("keydown.mask, blur.mask", function() {
                    s = r.val()
                }).on("focusout.mask", function() {
                    m.clearIfNotMatch && !e.test(y.val()) && y.val("")
                })
            },
            getRegexMask: function() {
                for (var t, e, n, i, o = [], r = 0; r < g.length; r++)(t = v.translation[g[r]]) ? (e = t.pattern.toString().replace(/.{1}$|^.{1}/g, ""), n = t.optional, (t = t.recursive) ? (o.push(g[r]), i = {
                    digit: g[r],
                    pattern: e
                }) : o.push(n || t ? e + "?" : e)) : o.push(g[r].replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"));
                return o = o.join(""), i && (o = o.replace(RegExp("(" + i.digit + "(.*" + i.digit + ")?)"), "($1)?").replace(RegExp(i.digit, "g"), i.pattern)), RegExp(o)
            },
            destroyEvents: function() {
                r.off("keydown keyup paste drop blur focusout ".split(" ").join(".mask "))
            },
            val: function(t) {
                var e = r.is("input") ? "val" : "text";
                return 0 < arguments.length ? (r[e]() !== t && r[e](t), e = r) : e = r[e](), e
            },
            getMCharsBeforeCount: function(t, e) {
                for (var n = 0, i = 0, o = g.length; i < o && i < t; i++) v.translation[g.charAt(i)] || (t = e ? t + 1 : t, n++);
                return n
            },
            caretPos: function(t, e, n, i) {
                return v.translation[g.charAt(Math.min(t - 1, g.length - 1))] ? Math.min(t + n - e - i, n) : y.caretPos(t + 1, e, n, i)
            },
            behaviour: function(t) {
                t = t || window.event, y.invalid = [];
                var e = t.keyCode || t.which;
                if (-1 === l.inArray(e, v.byPassKeys)) {
                    var n = y.getCaret(),
                        i = y.val().length,
                        o = n < i,
                        r = y.getMasked(),
                        s = r.length,
                        a = y.getMCharsBeforeCount(s - 1) - y.getMCharsBeforeCount(i - 1);
                    return y.val(r), !o || 65 === e && t.ctrlKey || (8 !== e && 46 !== e && (n = y.caretPos(n, i, s, a)), y.setCaret(n)), y.callbacks(t)
                }
            },
            getMasked: function(t) {
                var e, n, i = [],
                    o = y.val(),
                    r = 0,
                    s = g.length,
                    a = 0,
                    l = o.length,
                    c = 1,
                    u = "push",
                    d = -1;
                for (m.reverse ? (u = "unshift", c = -1, e = 0, r = s - 1, a = l - 1, n = function() {
                        return -1 < r && -1 < a
                    }) : (e = s - 1, n = function() {
                        return r < s && a < l
                    }); n();) {
                    var h = g.charAt(r),
                        p = o.charAt(a),
                        f = v.translation[h];
                    f ? (p.match(f.pattern) ? (i[u](p), f.recursive && (-1 === d ? d = r : r === e && (r = d - c), e === d && (r -= c)), r += c) : f.optional ? (r += c, a -= c) : f.fallback ? (i[u](f.fallback), r += c, a -= c) : y.invalid.push({
                        p: a,
                        v: p,
                        e: f.pattern
                    }), a += c) : (t || i[u](h), p === h && (a += c), r += c)
                }
                return t = g.charAt(e), s !== l + 1 || v.translation[t] || i.push(t), i.join("")
            },
            callbacks: function(t) {
                var e = y.val(),
                    n = e !== s,
                    i = [e, t, r, m],
                    o = function(t, e, n) {
                        "function" == typeof m[t] && e && m[t].apply(this, n)
                    };
                o("onChange", !0 === n, i), o("onKeyPress", !0 === n, i), o("onComplete", e.length === g.length, i), o("onInvalid", 0 < y.invalid.length, [e, t, r, y.invalid, m])
            }
        };
        v.mask = g, v.options = m, v.remove = function() {
            var t = y.getCaret();
            return y.destroyEvents(), y.val(v.getCleanVal()), y.setCaret(t - y.getMCharsBeforeCount(t)), r
        }, v.getCleanVal = function() {
            return y.getMasked(!0)
        }, v.init = function(t) {
            t = t || !1, m = m || {}, v.byPassKeys = l.jMaskGlobals.byPassKeys, v.translation = l.jMaskGlobals.translation, v.translation = l.extend({}, v.translation, m.translation), v = l.extend(!0, {}, v, m), e = y.getRegexMask(), !1 === t ? (m.placeholder && r.attr("placeholder", m.placeholder), r.attr("autocomplete", "off"), y.destroyEvents(), y.events(), t = y.getCaret(), y.val(y.getMasked()), y.setCaret(t + y.getMCharsBeforeCount(t, !0))) : (y.events(), y.val(y.getMasked()))
        }, v.init(!r.is("input"))
    };
    l.maskWatchers = {};
    var t = function() {
            var t = l(this),
                e = {},
                n = t.attr("data-mask");
            if (t.attr("data-mask-reverse") && (e.reverse = !0), t.attr("data-mask-clearifnotmatch") && (e.clearIfNotMatch = !0), a(t, n, e)) return t.data("mask", new s(this, n, e))
        },
        a = function(t, e, n) {
            n = n || {};
            var i = l(t).data("mask"),
                o = JSON.stringify;
            t = l(t).val() || l(t).text();
            try {
                return "function" == typeof e && (e = e(t)), "object" != typeof i || o(i.options) !== o(n) || i.mask !== e
            } catch (t) {}
        };
    l.fn.mask = function(t, e) {
        e = e || {};
        var n = this.selector,
            i = l.jMaskGlobals,
            o = l.jMaskGlobals.watchInterval,
            r = function() {
                if (a(this, t, e)) return l(this).data("mask", new s(this, t, e))
            };
        l(this).each(r), n && "" !== n && i.watchInputs && (clearInterval(l.maskWatchers[n]), l.maskWatchers[n] = setInterval(function() {
            l(document).find(n).each(r)
        }, o))
    }, l.fn.unmask = function() {
        return clearInterval(l.maskWatchers[this.selector]), delete l.maskWatchers[this.selector], this.each(function() {
            var t = l(this).data("mask");
            t && t.remove().removeData("mask")
        })
    }, l.fn.cleanVal = function() {
        return this.data("mask").getCleanVal()
    };
    var e = {
        maskElements: "input,td,span,div",
        dataMaskAttr: "*[data-mask]",
        dataMask: !0,
        watchInterval: 300,
        watchInputs: !0,
        watchDataMask: !1,
        byPassKeys: [9, 16, 17, 18, 36, 37, 38, 39, 40, 91],
        translation: {
            0: {
                pattern: /\d/
            },
            9: {
                pattern: /\d/,
                optional: !0
            },
            "#": {
                pattern: /\d/,
                recursive: !0
            },
            A: {
                pattern: /[a-zA-Z0-9]/
            },
            S: {
                pattern: /[a-zA-Z]/
            }
        }
    };
    l.jMaskGlobals = l.jMaskGlobals || {}, (e = l.jMaskGlobals = l.extend(!0, {}, e, l.jMaskGlobals)).dataMask && l(e.dataMaskAttr).each(t), setInterval(function() {
        l.jMaskGlobals.watchDataMask && l(document).find(l.jMaskGlobals.maskElements).filter(e.dataMaskAttr).each(t)
    }, e.watchInterval)
}), window.Modernizr = function(i, d, s) {
        function n(t) {
            g.cssText = t
        }

        function r(t, e) {
            return typeof t === e
        }

        function o(t, e) {
            return !!~("" + t).indexOf(e)
        }

        function a(t, e) {
            for (var n in t) {
                var i = t[n];
                if (!o(i, "-") && g[i] !== s) return "pfx" != e || i
            }
            return !1
        }

        function l(t, e, n) {
            var i = t.charAt(0).toUpperCase() + t.slice(1),
                o = (t + " " + w.join(i + " ") + i).split(" ");
            return r(e, "string") || r(e, "undefined") ? a(o, e) : function(t, e, n) {
                for (var i in t) {
                    var o = e[t[i]];
                    if (o !== s) return !1 === n ? t[i] : r(o, "function") ? o.bind(n || e) : o
                }
                return !1
            }(o = (t + " " + C.join(i + " ") + i).split(" "), e, n)
        }
        var t, c, u, h = {},
            p = d.documentElement,
            f = "modernizr",
            e = d.createElement(f),
            g = e.style,
            m = d.createElement("input"),
            v = ":)",
            y = {}.toString,
            b = " -webkit- -moz- -o- -ms- ".split(" "),
            x = "Webkit Moz O ms",
            w = x.split(" "),
            C = x.toLowerCase().split(" "),
            _ = "http://www.w3.org/2000/svg",
            T = {},
            S = {},
            E = {},
            F = [],
            k = F.slice,
            $ = function(t, e, n, i) {
                var o, r, s, a, l = d.createElement("div"),
                    c = d.body,
                    u = c || d.createElement("body");
                if (parseInt(n, 10))
                    for (; n--;)(s = d.createElement("div")).id = i ? i[n] : f + (n + 1), l.appendChild(s);
                return o = ["&#173;", '<style id="s', f, '">', t, "</style>"].join(""), l.id = f, (c ? l : u).innerHTML += o, u.appendChild(l), c || (u.style.background = "", u.style.overflow = "hidden", a = p.style.overflow, p.style.overflow = "hidden", p.appendChild(u)), r = e(l, t), c ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u), p.style.overflow = a), !!r
            },
            D = (u = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            }, function(t, e) {
                e = e || d.createElement(u[t] || "div");
                var n = (t = "on" + t) in e;
                return n || (e.setAttribute || (e = d.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(t, ""), n = r(e[t], "function"), r(e[t], "undefined") || (e[t] = s), e.removeAttribute(t))), e = null, n
            }),
            P = {}.hasOwnProperty;
        for (var A in c = r(P, "undefined") || r(P.call, "undefined") ? function(t, e) {
                return e in t && r(t.constructor.prototype[e], "undefined")
            } : function(t, e) {
                return P.call(t, e)
            }, Function.prototype.bind || (Function.prototype.bind = function(i) {
                var o = this;
                if ("function" != typeof o) throw new TypeError;
                var r = k.call(arguments, 1),
                    s = function() {
                        if (this instanceof s) {
                            var t = function() {};
                            t.prototype = o.prototype;
                            var e = new t,
                                n = o.apply(e, r.concat(k.call(arguments)));
                            return Object(n) === n ? n : e
                        }
                        return o.apply(i, r.concat(k.call(arguments)))
                    };
                return s
            }), T.flexbox = function() {
                return l("flexWrap")
            }, T.canvas = function() {
                var t = d.createElement("canvas");
                return !!t.getContext && !!t.getContext("2d")
            }, T.canvastext = function() {
                return !!h.canvas && !!r(d.createElement("canvas").getContext("2d").fillText, "function")
            }, T.webgl = function() {
                return !!i.WebGLRenderingContext
            }, T.touch = function() {
                var e;
                return "ontouchstart" in i || i.DocumentTouch && d instanceof DocumentTouch ? e = !0 : $(["@media (", b.join("touch-enabled),("), f, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(t) {
                    e = 9 === t.offsetTop
                }), e
            }, T.geolocation = function() {
                return "geolocation" in navigator
            }, T.postmessage = function() {
                return !!i.postMessage
            }, T.websqldatabase = function() {
                return !!i.openDatabase
            }, T.indexedDB = function() {
                return !!l("indexedDB", i)
            }, T.hashchange = function() {
                return D("hashchange", i) && (d.documentMode === s || 7 < d.documentMode)
            }, T.history = function() {
                return !!i.history && !!history.pushState
            }, T.draganddrop = function() {
                var t = d.createElement("div");
                return "draggable" in t || "ondragstart" in t && "ondrop" in t
            }, T.websockets = function() {
                return "WebSocket" in i || "MozWebSocket" in i
            }, T.rgba = function() {
                return n("background-color:rgba(150,255,150,.5)"), o(g.backgroundColor, "rgba")
            }, T.hsla = function() {
                return n("background-color:hsla(120,40%,100%,.5)"), o(g.backgroundColor, "rgba") || o(g.backgroundColor, "hsla")
            }, T.multiplebgs = function() {
                return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(g.background)
            }, T.backgroundsize = function() {
                return l("backgroundSize")
            }, T.borderimage = function() {
                return l("borderImage")
            }, T.borderradius = function() {
                return l("borderRadius")
            }, T.boxshadow = function() {
                return l("boxShadow")
            }, T.textshadow = function() {
                return "" === d.createElement("div").style.textShadow
            }, T.opacity = function() {
                return t = "opacity:.55", n(b.join(t + ";") + (e || "")), /^0.55$/.test(g.opacity);
                var t, e
            }, T.cssanimations = function() {
                return l("animationName")
            }, T.csscolumns = function() {
                return l("columnCount")
            }, T.cssgradients = function() {
                var t = "background-image:";
                return n((t + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + t) + b.join("linear-gradient(left top,#9f9, white);" + t)).slice(0, -t.length)), o(g.backgroundImage, "gradient")
            }, T.cssreflections = function() {
                return l("boxReflect")
            }, T.csstransforms = function() {
                return !!l("transform")
            }, T.csstransforms3d = function() {
                var n = !!l("perspective");
                return n && "webkitPerspective" in p.style && $("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, e) {
                    n = 9 === t.offsetLeft && 3 === t.offsetHeight
                }), n
            }, T.csstransitions = function() {
                return l("transition")
            }, T.fontface = function() {
                var r;
                return $('@font-face {font-family:"font";src:url("https://")}', function(t, e) {
                    var n = d.getElementById("smodernizr"),
                        i = n.sheet || n.styleSheet,
                        o = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "";
                    r = /src/i.test(o) && 0 === o.indexOf(e.split(" ")[0])
                }), r
            }, T.generatedcontent = function() {
                var e;
                return $(["#", f, "{font:0/0 a}#", f, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
                    e = 3 <= t.offsetHeight
                }), e
            }, T.video = function() {
                var t = d.createElement("video"),
                    e = !1;
                try {
                    (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), e.h264 = t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), e.webm = t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
                } catch (t) {}
                return e
            }, T.audio = function() {
                var t = d.createElement("audio"),
                    e = !1;
                try {
                    (e = !!t.canPlayType) && ((e = new Boolean(e)).ogg = t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), e.mp3 = t.canPlayType("audio/mpeg;").replace(/^no$/, ""), e.wav = t.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), e.m4a = (t.canPlayType("audio/x-m4a;") || t.canPlayType("audio/aac;")).replace(/^no$/, ""))
                } catch (t) {}
                return e
            }, T.localstorage = function() {
                try {
                    return localStorage.setItem(f, f), localStorage.removeItem(f), !0
                } catch (t) {
                    return !1
                }
            }, T.sessionstorage = function() {
                try {
                    return sessionStorage.setItem(f, f), sessionStorage.removeItem(f), !0
                } catch (t) {
                    return !1
                }
            }, T.webworkers = function() {
                return !!i.Worker
            }, T.applicationcache = function() {
                return !!i.applicationCache
            }, T.svg = function() {
                return !!d.createElementNS && !!d.createElementNS(_, "svg").createSVGRect
            }, T.inlinesvg = function() {
                var t = d.createElement("div");
                return t.innerHTML = "<svg/>", (t.firstChild && t.firstChild.namespaceURI) == _
            }, T.smil = function() {
                return !!d.createElementNS && /SVGAnimate/.test(y.call(d.createElementNS(_, "animate")))
            }, T.svgclippaths = function() {
                return !!d.createElementNS && /SVGClipPath/.test(y.call(d.createElementNS(_, "clipPath")))
            }, T) c(T, A) && (t = A.toLowerCase(), h[t] = T[A](), F.push((h[t] ? "" : "no-") + t));
        return h.input || (h.input = function(t) {
                for (var e = 0, n = t.length; e < n; e++) E[t[e]] = t[e] in m;
                return E.list && (E.list = !!d.createElement("datalist") && !!i.HTMLDataListElement), E
            }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function(t) {
                for (var e, n, i, o = 0, r = t.length; o < r; o++) m.setAttribute("type", n = t[o]), (e = "text" !== m.type) && (m.value = v, m.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(n) && m.style.WebkitAppearance !== s ? (p.appendChild(m), e = (i = d.defaultView).getComputedStyle && "textfield" !== i.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight, p.removeChild(m)) : /^(search|tel)$/.test(n) || (e = /^(url|email)$/.test(n) ? m.checkValidity && !1 === m.checkValidity() : m.value != v)), S[t[o]] = !!e;
                return S
            }("search tel url email datetime date month week time datetime-local number range color".split(" "))), h.addTest = function(t, e) {
                if ("object" == typeof t)
                    for (var n in t) c(t, n) && h.addTest(n, t[n]);
                else {
                    if (t = t.toLowerCase(), h[t] !== s) return h;
                    e = "function" == typeof e ? e() : e, p.className += " " + (e ? "" : "no-") + t, h[t] = e
                }
                return h
            }, n(""), e = m = null,
            function(t, l) {
                function c() {
                    var t = f.elements;
                    return "string" == typeof t ? t.split(" ") : t
                }

                function u(t) {
                    var e = a[t[i]];
                    return e || (e = {}, s++, t[i] = s, a[s] = e), e
                }

                function d(t, e, n) {
                    return e || (e = l), p ? e.createElement(t) : (n || (n = u(e)), !(i = n.cache[t] ? n.cache[t].cloneNode() : r.test(t) ? (n.cache[t] = n.createElem(t)).cloneNode() : n.createElem(t)).canHaveChildren || o.test(t) || i.tagUrn ? i : n.frag.appendChild(i));
                    var i
                }

                function e(t) {
                    t || (t = l);
                    var e, n, i, o, r, s, a = u(t);
                    return f.shivCSS && !h && !a.hasCSS && (a.hasCSS = (o = "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}", r = (i = t).createElement("p"), s = i.getElementsByTagName("head")[0] || i.documentElement, r.innerHTML = "x<style>" + o + "</style>", !!s.insertBefore(r.lastChild, s.firstChild))), p || (e = t, (n = a).cache || (n.cache = {}, n.createElem = e.createElement, n.createFrag = e.createDocumentFragment, n.frag = n.createFrag()), e.createElement = function(t) {
                        return f.shivMethods ? d(t, e, n) : n.createElem(t)
                    }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/[\w\-]+/g, function(t) {
                        return n.createElem(t), n.frag.createElement(t), 'c("' + t + '")'
                    }) + ");return n}")(f, n.frag)), t
                }
                var h, p, n = t.html5 || {},
                    o = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                    r = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                    i = "_html5shiv",
                    s = 0,
                    a = {};
                ! function() {
                    try {
                        var t = l.createElement("a");
                        t.innerHTML = "<xyz></xyz>", h = "hidden" in t, p = 1 == t.childNodes.length || function() {
                            l.createElement("a");
                            var t = l.createDocumentFragment();
                            return void 0 === t.cloneNode || void 0 === t.createDocumentFragment || void 0 === t.createElement
                        }()
                    } catch (t) {
                        p = h = !0
                    }
                }();
                var f = {
                    elements: n.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                    version: "3.7.0",
                    shivCSS: !1 !== n.shivCSS,
                    supportsUnknownElements: p,
                    shivMethods: !1 !== n.shivMethods,
                    type: "default",
                    shivDocument: e,
                    createElement: d,
                    createDocumentFragment: function(t, e) {
                        if (t || (t = l), p) return t.createDocumentFragment();
                        for (var n = (e = e || u(t)).frag.cloneNode(), i = 0, o = c(), r = o.length; i < r; i++) n.createElement(o[i]);
                        return n
                    }
                };
                t.html5 = f, e(l)
            }(this, d), h._version = "2.8.3", h._prefixes = b, h._domPrefixes = C, h._cssomPrefixes = w, h.mq = function(t) {
                var e, n = i.matchMedia || i.msMatchMedia;
                return n ? n(t) && n(t).matches || !1 : ($("@media " + t + " { #" + f + " { position: absolute; } }", function(t) {
                    e = "absolute" == (i.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
                }), e)
            }, h.hasEvent = D, h.testProp = function(t) {
                return a([t])
            }, h.testAllProps = l, h.testStyles = $, h.prefixed = function(t, e, n) {
                return e ? l(t, e, n) : l(t, "pfx")
            }, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + F.join(" "), h
    }(this, this.document),
    function(t, h, a) {
        function d(t) {
            return "[object Function]" == o.call(t)
        }

        function p(t) {
            return "string" == typeof t
        }

        function f() {}

        function g(t) {
            return !t || "loaded" == t || "complete" == t || "uninitialized" == t
        }

        function m() {
            var t = x.shift();
            w = 1, t ? t.t ? y(function() {
                ("c" == t.t ? v.injectCss : v.injectJs)(t.s, 0, t.a, t.x, t.e, 1)
            }, 0) : (t(), m()) : w = 0
        }

        function e(t, e, n, i, o) {
            return w = 0, e = e || "j", p(t) ? function(n, i, t, e, o, r, s) {
                function a(t) {
                    if (!c && g(l.readyState) && (d.r = c = 1, !w && m(), l.onload = l.onreadystatechange = null, t))
                        for (var e in "img" != n && y(function() {
                                _.removeChild(l)
                            }, 50), E[i]) E[i].hasOwnProperty(e) && E[i][e].onload()
                }
                s = s || v.errorTimeout;
                var l = h.createElement(n),
                    c = 0,
                    u = 0,
                    d = {
                        t: t,
                        s: i,
                        e: o,
                        a: r,
                        x: s
                    };
                1 === E[i] && (u = 1, E[i] = []), "object" == n ? l.data = i : (l.src = i, l.type = n), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                    a.call(this, u)
                }, x.splice(e, 0, d), "img" != n && (u || 2 === E[i] ? (_.insertBefore(l, C ? null : b), y(a, s)) : E[i].push(l))
            }("c" == e ? c : s, t, e, this.i++, n, i, o) : (x.splice(this.i++, 0, t), 1 == x.length && m()), this
        }

        function l() {
            var t = v;
            return t.loader = {
                load: e,
                i: 0
            }, t
        }
        var n, v, i = h.documentElement,
            y = t.setTimeout,
            b = h.getElementsByTagName("script")[0],
            o = {}.toString,
            x = [],
            w = 0,
            r = "MozAppearance" in i.style,
            C = r && !!h.createRange().compareNode,
            _ = C ? i : b.parentNode,
            s = (i = t.opera && "[object Opera]" == o.call(t.opera), i = !!h.attachEvent && !i, r ? "object" : i ? "script" : "img"),
            c = i ? "script" : s,
            T = Array.isArray || function(t) {
                return "[object Array]" == o.call(t)
            },
            S = [],
            E = {},
            F = {
                timeout: function(t, e) {
                    return e.length && (t.timeout = e[0]), t
                }
            };
        (v = function(t) {
            function u(t, e, n, i, o) {
                var r = function(t) {
                        t = t.split("!");
                        var e, n, i, o = S.length,
                            r = t.pop(),
                            s = t.length;
                        for (r = {
                                url: r,
                                origUrl: r,
                                prefixes: t
                            }, n = 0; n < s; n++) i = t[n].split("="), (e = F[i.shift()]) && (r = e(r, i));
                        for (n = 0; n < o; n++) r = S[n](r);
                        return r
                    }(t),
                    s = r.autoCallback;
                r.url.split(".").pop().split("?").shift(), r.bypass || (e && (e = d(e) ? e : e[t] || e[i] || e[t.split("/").pop().split("?")[0]]), r.instead ? r.instead(t, e, n, i, o) : (E[r.url] ? r.noexec = !0 : E[r.url] = 1, n.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : a, r.noexec, r.attrs, r.timeout), (d(e) || d(s)) && n.load(function() {
                    l(), e && e(r.origUrl, o, i), s && s(r.origUrl, o, i), E[r.url] = 2
                })))
            }

            function e(t, e) {
                function n(n, t) {
                    if (n) {
                        if (p(n)) t || (a = function() {
                            var t = [].slice.call(arguments);
                            l.apply(this, t), c()
                        }), u(n, a, e, 0, r);
                        else if (Object(n) === n)
                            for (o in i = function() {
                                    var t, e = 0;
                                    for (t in n) n.hasOwnProperty(t) && e++;
                                    return e
                                }(), n) n.hasOwnProperty(o) && (!t && !--i && (d(a) ? a = function() {
                                var t = [].slice.call(arguments);
                                l.apply(this, t), c()
                            } : a[o] = function(e) {
                                return function() {
                                    var t = [].slice.call(arguments);
                                    e && e.apply(this, t), c()
                                }
                            }(l[o])), u(n[o], a, e, o, r))
                    } else !t && c()
                }
                var i, o, r = !!t.test,
                    s = t.load || t.both,
                    a = t.callback || f,
                    l = a,
                    c = t.complete || f;
                n(r ? t.yep : t.nope, !!s), s && n(s)
            }
            var n, i, o = this.yepnope.loader;
            if (p(t)) u(t, 0, o, 0);
            else if (T(t))
                for (n = 0; n < t.length; n++) p(i = t[n]) ? u(i, 0, o, 0) : T(i) ? v(i) : Object(i) === i && e(i, o);
            else Object(t) === t && e(t, o)
        }).addPrefix = function(t, e) {
            F[t] = e
        }, v.addFilter = function(t) {
            S.push(t)
        }, v.errorTimeout = 1e4, null == h.readyState && h.addEventListener && (h.readyState = "loading", h.addEventListener("DOMContentLoaded", n = function() {
            h.removeEventListener("DOMContentLoaded", n, 0), h.readyState = "complete"
        }, 0)), t.yepnope = l(), t.yepnope.executeStack = m, t.yepnope.injectJs = function(t, e, n, i, o, r) {
            var s, a, l = h.createElement("script");
            i = i || v.errorTimeout;
            for (a in l.src = t, n) l.setAttribute(a, n[a]);
            e = r ? m : e || f, l.onreadystatechange = l.onload = function() {
                !s && g(l.readyState) && (s = 1, e(), l.onload = l.onreadystatechange = null)
            }, y(function() {
                s || e(s = 1)
            }, i), o ? l.onload() : b.parentNode.insertBefore(l, b)
        }, t.yepnope.injectCss = function(t, e, n, i, o, r) {
            var s;
            i = h.createElement("link"), e = r ? m : e || f;
            for (s in i.href = t, i.rel = "stylesheet", i.type = "text/css", n) i.setAttribute(s, n[s]);
            o || (b.parentNode.insertBefore(i, b), y(e, 0))
        }
    }(this, document), Modernizr.load = function() {
        yepnope.apply(window, [].slice.call(arguments, 0))
    },
    function(l, n, o, r) {
        function c(t, e) {
            this.settings = null, this.options = l.extend({}, c.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            }, this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            }, l.each(["onResize", "onThrottledResize"], l.proxy(function(t, e) {
                this._handlers[e] = l.proxy(this[e], this)
            }, this)), l.each(c.Plugins, l.proxy(function(t, e) {
                this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
            }, this)), l.each(c.Workers, l.proxy(function(t, e) {
                this._pipe.push({
                    filter: e.filter,
                    run: l.proxy(e.run, this)
                })
            }, this)), this.setup(), this.initialize()
        }
        c.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: n,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        }, c.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        }, c.Type = {
            Event: "event",
            State: "state"
        }, c.Plugins = {}, c.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    n = !this.settings.autoWidth,
                    i = this.settings.rtl,
                    o = {
                        width: "auto",
                        "margin-left": i ? e : "",
                        "margin-right": i ? "" : e
                    };
                !n && this.$stage.children().css(o), t.css = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    n = null,
                    i = this._items.length,
                    o = !this.settings.autoWidth,
                    r = [];
                for (t.items = {
                        merge: !1,
                        width: e
                    }; i--;) n = this._mergers[i], n = this.settings.mergeFit && Math.min(n, this.settings.items) || n, t.items.merge = 1 < n || t.items.merge, r[i] = o ? e * n : this._items[i].width();
                this._widths = r
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var t = [],
                    e = this._items,
                    n = this.settings,
                    i = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(e.length / 2),
                    r = n.loop && e.length ? n.rewind ? i : Math.max(i, o) : 0,
                    s = "",
                    a = "";
                for (r /= 2; r--;) t.push(this.normalize(t.length / 2, !0)), s += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
                this._clones = t, l(s).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, o = 0, r = []; ++n < e;) i = r[n - 1] || 0, o = this._widths[this.relative(n)] + this.settings.margin, r.push(i + o * t);
                this._coordinates = r
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    n = {
                        width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                        "padding-left": t || "",
                        "padding-right": t || ""
                    };
                this.$stage.css(n)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    n = !this.settings.autoWidth,
                    i = this.$stage.children();
                if (n && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], i.eq(e).css(t.css);
                else n && (t.css.width = t.items.width, i.css(t.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, n, i, o = this.settings.rtl ? 1 : -1,
                    r = 2 * this.settings.stagePadding,
                    s = this.coordinates(this.current()) + r,
                    a = s + this.width() * o,
                    l = [];
                for (n = 0, i = this._coordinates.length; n < i; n++) t = this._coordinates[n - 1] || 0, e = Math.abs(this._coordinates[n]) + r * o, (this.op(t, "<=", s) && this.op(t, ">", a) || this.op(e, "<", s) && this.op(e, ">", a)) && l.push(n);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], c.prototype.initialize = function() {
            var t, e, n;
            (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r, n = this.$element.children(e).width(), t.length && n <= 0 && this.preloadAutoWidthImages(t));
            this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, c.prototype.setup = function() {
            var e = this.viewport(),
                t = this.options.responsive,
                n = -1,
                i = null;
            t ? (l.each(t, function(t) {
                t <= e && n < t && (n = Number(t))
            }), "function" == typeof(i = l.extend({}, this.options, t[n])).stagePadding && (i.stagePadding = i.stagePadding()), delete i.responsive, i.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : i = l.extend({}, this.options), this.trigger("change", {
                property: {
                    name: "settings",
                    value: i
                }
            }), this._breakpoint = n, this.settings = i, this.invalidate("settings"), this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }, c.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
        }, c.prototype.prepare = function(t) {
            var e = this.trigger("prepare", {
                content: t
            });
            return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
                content: e.data
            }), e.data
        }, c.prototype.update = function() {
            for (var t = 0, e = this._pipe.length, n = l.proxy(function(t) {
                    return this[t]
                }, this._invalidated), i = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, n).length) && this._pipe[t].run(i), t++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, c.prototype.width = function(t) {
            switch (t = t || c.Width.Default) {
                case c.Width.Inner:
                case c.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, c.prototype.refresh = function() {
            this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
        }, c.prototype.onThrottledResize = function() {
            n.clearTimeout(this.resizeTimer), this.resizeTimer = n.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }, c.prototype.onResize = function() {
            return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
        }, c.prototype.registerEventHandlers = function() {
            l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(n, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
        }, c.prototype.onDragStart = function(t) {
            var e = null;
            3 !== t.which && (l.support.transform ? e = {
                x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
                y: e[16 === e.length ? 13 : 5]
            } : (e = this.$stage.position(), e = {
                x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
                y: e.top
            }), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(o).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(o).one("mousemove.owl.core touchmove.owl.core", l.proxy(function(t) {
                var e = this.difference(this._drag.pointer, this.pointer(t));
                l(o).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, c.prototype.onDragMove = function(t) {
            var e = null,
                n = null,
                i = null,
                o = this.difference(this._drag.pointer, this.pointer(t)),
                r = this.difference(this._drag.stage.start, o);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), n = this.coordinates(this.maximum() + 1) - e, r.x = ((r.x - e) % n + n) % n + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), n = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), i = this.settings.pullDrag ? -1 * o.x / 5 : 0, r.x = Math.max(Math.min(r.x, e + i), n + i)), this._drag.stage.current = r, this.animate(r.x))
        }, c.prototype.onDragEnd = function(t) {
            var e = this.difference(this._drag.pointer, this.pointer(t)),
                n = this._drag.stage.current,
                i = 0 < e.x ^ this.settings.rtl ? "left" : "right";
            l(o).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(n.x, 0 !== e.x ? i : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = i, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
                return !1
            })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, c.prototype.closest = function(n, i) {
            var o = -1,
                r = this.width(),
                s = this.coordinates();
            return this.settings.freeDrag || l.each(s, l.proxy(function(t, e) {
                return "left" === i && e - 30 < n && n < e + 30 ? o = t : "right" === i && e - r - 30 < n && n < e - r + 30 ? o = t + 1 : this.op(n, "<", e) && this.op(n, ">", s[t + 1] || e - r) && (o = "left" === i ? t + 1 : t), -1 === o
            }, this)), this.settings.loop || (this.op(n, ">", s[this.minimum()]) ? o = n = this.minimum() : this.op(n, "<", s[this.maximum()]) && (o = n = this.maximum())), o
        }, c.prototype.animate = function(t) {
            var e = 0 < this.speed();
            this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
                transform: "translate3d(" + t + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : e ? this.$stage.animate({
                left: t + "px"
            }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: t + "px"
            })
        }, c.prototype.is = function(t) {
            return this._states.current[t] && 0 < this._states.current[t]
        }, c.prototype.current = function(t) {
            if (t === r) return this._current;
            if (0 === this._items.length) return r;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", {
                    property: {
                        name: "position",
                        value: t
                    }
                });
                e.data !== r && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }, c.prototype.invalidate = function(t) {
            return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function(t, e) {
                return e
            })
        }, c.prototype.reset = function(t) {
            (t = this.normalize(t)) !== r && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, c.prototype.normalize = function(t, e) {
            var n = this._items.length,
                i = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || n < 1 ? t = r : (t < 0 || n + i <= t) && (t = ((t - i / 2) % n + n) % n + i / 2), t
        }, c.prototype.relative = function(t) {
            return t -= this._clones.length / 2, this.normalize(t, !0)
        }, c.prototype.maximum = function(t) {
            var e, n, i, o = this.settings,
                r = this._coordinates.length;
            if (o.loop) r = this._clones.length / 2 + this._items.length - 1;
            else if (o.autoWidth || o.merge) {
                for (e = this._items.length, n = this._items[--e].width(), i = this.$element.width(); e-- && !(i < (n += this._items[e].width() + this.settings.margin)););
                r = e + 1
            } else r = o.center ? this._items.length - 1 : this._items.length - o.items;
            return t && (r -= this._clones.length / 2), Math.max(r, 0)
        }, c.prototype.minimum = function(t) {
            return t ? 0 : this._clones.length / 2
        }, c.prototype.items = function(t) {
            return t === r ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
        }, c.prototype.mergers = function(t) {
            return t === r ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
        }, c.prototype.clones = function(n) {
            var e = this._clones.length / 2,
                i = e + this._items.length,
                o = function(t) {
                    return t % 2 == 0 ? i + t / 2 : e - (t + 1) / 2
                };
            return n === r ? l.map(this._clones, function(t, e) {
                return o(e)
            }) : l.map(this._clones, function(t, e) {
                return t === n ? o(e) : null
            })
        }, c.prototype.speed = function(t) {
            return t !== r && (this._speed = t), this._speed
        }, c.prototype.coordinates = function(t) {
            var e, n = 1,
                i = t - 1;
            return t === r ? l.map(this._coordinates, l.proxy(function(t, e) {
                return this.coordinates(e)
            }, this)) : (this.settings.center ? (this.settings.rtl && (n = -1, i = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[i] || 0)) / 2 * n) : e = this._coordinates[i] || 0, e = Math.ceil(e))
        }, c.prototype.duration = function(t, e, n) {
            return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
        }, c.prototype.to = function(t, e) {
            var n = this.current(),
                i = null,
                o = t - this.relative(n),
                r = (0 < o) - (o < 0),
                s = this._items.length,
                a = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(o) > s / 2 && (o += -1 * r * s), (i = (((t = n + o) - a) % s + s) % s + a) !== t && i - o <= l && 0 < i - o && (n = i - o, t = i, this.reset(n))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(n, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, c.prototype.next = function(t) {
            t = t || !1, this.to(this.relative(this.current()) + 1, t)
        }, c.prototype.prev = function(t) {
            t = t || !1, this.to(this.relative(this.current()) - 1, t)
        }, c.prototype.onTransitionEnd = function(t) {
            if (t !== r && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, c.prototype.viewport = function() {
            var t;
            return this.options.responsiveBaseElement !== n ? t = l(this.options.responsiveBaseElement).width() : n.innerWidth ? t = n.innerWidth : o.documentElement && o.documentElement.clientWidth ? t = o.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
        }, c.prototype.replace = function(t) {
            this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
                return 1 === this.nodeType
            }).each(l.proxy(function(t, e) {
                e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
        }, c.prototype.add = function(t, e) {
            var n = this.relative(this._current);
            e = e === r ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
                content: t,
                position: e
            }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[n] && this.reset(this._items[n].index()), this.invalidate("items"), this.trigger("added", {
                content: t,
                position: e
            })
        }, c.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== r && (this.trigger("remove", {
                content: this._items[t],
                position: t
            }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
                content: null,
                position: t
            }))
        }, c.prototype.preloadAutoWidthImages = function(t) {
            t.each(l.proxy(function(t, e) {
                this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function(t) {
                    e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
            }, this))
        }, c.prototype.destroy = function() {
            for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(o).off(".owl.core"), !1 !== this.settings.responsive && (n.clearTimeout(this.resizeTimer), this.off(n, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, c.prototype.op = function(t, e, n) {
            var i = this.settings.rtl;
            switch (e) {
                case "<":
                    return i ? n < t : t < n;
                case ">":
                    return i ? t < n : n < t;
                case ">=":
                    return i ? t <= n : n <= t;
                case "<=":
                    return i ? n <= t : t <= n
            }
        }, c.prototype.on = function(t, e, n, i) {
            t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
        }, c.prototype.off = function(t, e, n, i) {
            t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
        }, c.prototype.trigger = function(t, e, n, i, o) {
            var r = {
                    item: {
                        count: this._items.length,
                        index: this.current()
                    }
                },
                s = l.camelCase(l.grep(["on", t, n], function(t) {
                    return t
                }).join("-").toLowerCase()),
                a = l.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), l.extend({
                    relatedTarget: this
                }, r, e));
            return this._supress[t] || (l.each(this._plugins, function(t, e) {
                e.onTrigger && e.onTrigger(a)
            }), this.register({
                type: c.Type.Event,
                name: t
            }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[s] && this.settings[s].call(this, a)), a
        }, c.prototype.enter = function(t) {
            l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
                this._states.current[e] === r && (this._states.current[e] = 0), this._states.current[e]++
            }, this))
        }, c.prototype.leave = function(t) {
            l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
                this._states.current[e]--
            }, this))
        }, c.prototype.register = function(n) {
            if (n.type === c.Type.Event) {
                if (l.event.special[n.name] || (l.event.special[n.name] = {}), !l.event.special[n.name].owl) {
                    var e = l.event.special[n.name]._default;
                    l.event.special[n.name]._default = function(t) {
                        return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
                    }, l.event.special[n.name].owl = !0
                }
            } else n.type === c.Type.State && (this._states.tags[n.name] ? this._states.tags[n.name] = this._states.tags[n.name].concat(n.tags) : this._states.tags[n.name] = n.tags, this._states.tags[n.name] = l.grep(this._states.tags[n.name], l.proxy(function(t, e) {
                return l.inArray(t, this._states.tags[n.name]) === e
            }, this)))
        }, c.prototype.suppress = function(t) {
            l.each(t, l.proxy(function(t, e) {
                this._supress[e] = !0
            }, this))
        }, c.prototype.release = function(t) {
            l.each(t, l.proxy(function(t, e) {
                delete this._supress[e]
            }, this))
        }, c.prototype.pointer = function(t) {
            var e = {
                x: null,
                y: null
            };
            return (t = (t = t.originalEvent || t || n.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
        }, c.prototype.isNumeric = function(t) {
            return !isNaN(parseFloat(t))
        }, c.prototype.difference = function(t, e) {
            return {
                x: t.x - e.x,
                y: t.y - e.y
            }
        }, l.fn.owlCarousel = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var t = l(this),
                    n = t.data("owl.carousel");
                n || (n = new c(this, "object" == typeof e && e), t.data("owl.carousel", n), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
                    n.register({
                        type: c.Type.Event,
                        name: e
                    }), n.$element.on(e + ".owl.carousel.core", l.proxy(function(t) {
                        t.namespace && t.relatedTarget !== this && (this.suppress([e]), n[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
                    }, n))
                })), "string" == typeof e && "_" !== e.charAt(0) && n[e].apply(n, i)
            })
        }, l.fn.owlCarousel.Constructor = c
    }(window.Zepto || window.jQuery, window, document),
    function(e, n, t, i) {
        var o = function(t) {
            this._core = t, this._interval = null, this._visible = null, this._handlers = {
                "initialized.owl.carousel": e.proxy(function(t) {
                    t.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            }, this._core.options = e.extend({}, o.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        o.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        }, o.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = n.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }, o.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
        }, o.prototype.destroy = function() {
            var t, e;
            for (t in n.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = o
    }(window.Zepto || window.jQuery, window, document),
    function(a, r, t, e) {
        var n = function(t) {
            this._core = t, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
                    if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                        for (var e = this._core.settings, n = e.center && Math.ceil(e.items / 2) || e.items, i = e.center && -1 * n || 0, o = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + i, r = this._core.clones().length, s = a.proxy(function(t, e) {
                                this.load(e)
                            }, this); i++ < n;) this.load(r / 2 + this._core.relative(o)), r && a.each(this._core.clones(this._core.relative(o)), s), o++
                }, this)
            }, this._core.options = a.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        n.Defaults = {
            lazyLoad: !1
        }, n.prototype.load = function(t) {
            var e = this._core.$stage.children().eq(t),
                n = e && e.find(".owl-lazy");
            !n || -1 < a.inArray(e.get(0), this._loaded) || (n.each(a.proxy(function(t, e) {
                var n, i = a(e),
                    o = 1 < r.devicePixelRatio && i.attr("data-src-retina") || i.attr("data-src");
                this._core.trigger("load", {
                    element: i,
                    url: o
                }, "lazy"), i.is("img") ? i.one("load.owl.lazy", a.proxy(function() {
                    i.css("opacity", 1), this._core.trigger("loaded", {
                        element: i,
                        url: o
                    }, "lazy")
                }, this)).attr("src", o) : ((n = new Image).onload = a.proxy(function() {
                    i.css({
                        "background-image": 'url("' + o + '")',
                        opacity: "1"
                    }), this._core.trigger("loaded", {
                        element: i,
                        url: o
                    }, "lazy")
                }, this), n.src = o)
            }, this)), this._loaded.push(e.get(0)))
        }, n.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, a.fn.owlCarousel.Constructor.Plugins.Lazy = n
    }(window.Zepto || window.jQuery, window, document),
    function(r, t, e, n) {
        var i = function(t) {
            this._core = t, this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": r.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": r.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
                }, this),
                "loaded.owl.lazy": r.proxy(function(t) {
                    t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            }, this._core.options = r.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        i.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        }, i.prototype.update = function() {
            var t, e = this._core._current,
                n = e + this._core.settings.items,
                i = this._core.$stage.children().toArray().slice(e, n),
                o = [];
            r.each(i, function(t, e) {
                o.push(r(e).height())
            }), t = Math.max.apply(null, o), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, r.fn.owlCarousel.Constructor.Plugins.AutoHeight = i
    }(window.Zepto || window.jQuery, window, document),
    function(u, t, e, n) {
        var i = function(t) {
            this._core = t, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": u.proxy(function(t) {
                    t.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": u.proxy(function(t) {
                    t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
                }, this),
                "refreshed.owl.carousel": u.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": u.proxy(function(t) {
                    t.namespace && "position" === t.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": u.proxy(function(t) {
                    if (t.namespace) {
                        var e = u(t.content).find(".owl-video");
                        e.length && (e.css("display", "none"), this.fetch(e, u(t.content)))
                    }
                }, this)
            }, this._core.options = u.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", u.proxy(function(t) {
                this.play(t)
            }, this))
        };
        i.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        }, i.prototype.fetch = function(t, e) {
            var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
                i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                o = t.attr("data-width") || this._core.settings.videoWidth,
                r = t.attr("data-height") || this._core.settings.videoHeight,
                s = t.attr("href");
            if (!s) throw new Error("Missing video URL.");
            if (-1 < (i = s.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) n = "youtube";
            else if (-1 < i[3].indexOf("vimeo")) n = "vimeo";
            else {
                if (!(-1 < i[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
                n = "vzaar"
            }
            i = i[6], this._videos[s] = {
                type: n,
                id: i,
                width: o,
                height: r
            }, e.attr("data-video", s), this.thumbnail(t, this._videos[s])
        }, i.prototype.thumbnail = function(e, t) {
            var n, i, o = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
                r = e.find("img"),
                s = "src",
                a = "",
                l = this._core.settings,
                c = function(t) {
                    '<div class="owl-video-play-icon"></div>',
                    n = l.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + s + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>',
                    e.after(n),
                    e.after('<div class="owl-video-play-icon"></div>')
                };
            if (e.wrap('<div class="owl-video-wrapper"' + o + "></div>"), this._core.settings.lazyLoad && (s = "data-src", a = "owl-lazy"), r.length) return c(r.attr(s)), r.remove(), !1;
            "youtube" === t.type ? (i = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", c(i)) : "vimeo" === t.type ? u.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    i = t[0].thumbnail_large, c(i)
                }
            }) : "vzaar" === t.type && u.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + t.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(t) {
                    i = t.framegrab_url, c(i)
                }
            })
        }, i.prototype.stop = function() {
            this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
        }, i.prototype.play = function(t) {
            var e, n = u(t.target).closest("." + this._core.settings.itemClass),
                i = this._videos[n.attr("data-video")],
                o = i.width || "100%",
                r = i.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), n = this._core.items(this._core.relative(n.index())), this._core.reset(n.index()), "youtube" === i.type ? e = '<iframe width="' + o + '" height="' + r + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&rel=0&v=" + i.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === i.type ? e = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + o + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === i.type && (e = '<iframe frameborder="0"height="' + r + '"width="' + o + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"></iframe>'), u('<div class="owl-video-frame">' + e + "</div>").insertAfter(n.find(".owl-video")), this._playing = n.addClass("owl-video-playing"))
        }, i.prototype.isInFullScreen = function() {
            var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
            return t && u(t).parent().hasClass("owl-video-frame")
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, u.fn.owlCarousel.Constructor.Plugins.Video = i
    }(window.Zepto || window.jQuery, window, document),
    function(s, t, e, n) {
        var i = function(t) {
            this.core = t, this.core.options = s.extend({}, i.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
                "change.owl.carousel": s.proxy(function(t) {
                    t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": s.proxy(function(t) {
                    t.namespace && (this.swapping = "translated" == t.type)
                }, this),
                "translate.owl.carousel": s.proxy(function(t) {
                    t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            }, this.core.$element.on(this.handlers)
        };
        i.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, i.prototype.swap = function() {
            if (1 === this.core.settings.items && s.support.animation && s.support.transition) {
                this.core.speed(0);
                var t, e = s.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    i = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    r = this.core.settings.animateOut;
                this.core.current() !== this.previous && (r && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(s.support.animation.end, e).css({
                    left: t + "px"
                }).addClass("animated owl-animated-out").addClass(r)), o && i.one(s.support.animation.end, e).addClass("animated owl-animated-in").addClass(o))
            }
        }, i.prototype.clear = function(t) {
            s(t.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, i.prototype.destroy = function() {
            var t, e;
            for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, s.fn.owlCarousel.Constructor.Plugins.Animate = i
    }(window.Zepto || window.jQuery, window, document),
    function(n, i, o, t) {
        var e = function(t) {
            this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
                "changed.owl.carousel": n.proxy(function(t) {
                    t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": n.proxy(function(t) {
                    t.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": n.proxy(function(t, e, n) {
                    t.namespace && this.play(e, n)
                }, this),
                "stop.owl.autoplay": n.proxy(function(t) {
                    t.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": n.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            }, this._core.$element.on(this._handlers), this._core.options = n.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        }, e.prototype.play = function(t, e) {
            this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
        }, e.prototype._getNextTimeout = function(t, e) {
            return this._timeout && i.clearTimeout(this._timeout), i.setTimeout(n.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || o.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
            }, this), t || this._core.settings.autoplayTimeout)
        }, e.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }, e.prototype.stop = function() {
            this._core.is("rotating") && (i.clearTimeout(this._timeout), this._core.leave("rotating"))
        }, e.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }, e.prototype.destroy = function() {
            var t, e;
            for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, n.fn.owlCarousel.Constructor.Plugins.autoplay = e
    }(window.Zepto || window.jQuery, window, document),
    function(r, t, e, n) {
        "use strict";
        var i = function(t) {
            this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            }, this._handlers = {
                "prepared.owl.carousel": r.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + r(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": r.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": r.proxy(function(t) {
                    t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
                }, this),
                "changed.owl.carousel": r.proxy(function(t) {
                    t.namespace && "position" == t.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": r.proxy(function(t) {
                    t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": r.proxy(function(t) {
                    t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
                }, this)
            }, this._core.options = r.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers)
        };
        i.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        }, i.prototype.initialize = function() {
            var t, n = this._core.settings;
            for (t in this._controls.$relative = (n.navContainer ? r(n.navContainer) : r("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = r("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", r.proxy(function(t) {
                    this.prev(n.navSpeed)
                }, this)), this._controls.$next = r("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", r.proxy(function(t) {
                    this.next(n.navSpeed)
                }, this)), n.dotsData || (this._templates = [r("<div>").addClass(n.dotClass).append(r("<span>")).prop("outerHTML")]), this._controls.$absolute = (n.dotsContainer ? r(n.dotsContainer) : r("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", r.proxy(function(t) {
                    var e = r(t.target).parent().is(this._controls.$absolute) ? r(t.target).index() : r(t.target).parent().index();
                    t.preventDefault(), this.to(e, n.dotsSpeed)
                }, this)), this._overrides) this._core[t] = r.proxy(this[t], this)
        }, i.prototype.destroy = function() {
            var t, e, n, i;
            for (t in this._handlers) this.$element.off(t, this._handlers[t]);
            for (e in this._controls) this._controls[e].remove();
            for (i in this.overides) this._core[i] = this._overrides[i];
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, i.prototype.update = function() {
            var t, e, n = this._core.clones().length / 2,
                i = n + this._core.items().length,
                o = this._core.maximum(!0),
                r = this._core.settings,
                s = r.center || r.autoWidth || r.dotsData ? 1 : r.dotsEach || r.items;
            if ("page" !== r.slideBy && (r.slideBy = Math.min(r.slideBy, r.items)), r.dots || "page" == r.slideBy)
                for (this._pages = [], t = n, e = 0; t < i; t++) {
                    if (s <= e || 0 === e) {
                        if (this._pages.push({
                                start: Math.min(o, t - n),
                                end: t - n + s - 1
                            }), Math.min(o, t - n) === o) break;
                        e = 0, 0
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, i.prototype.draw = function() {
            var t, e = this._core.settings,
                n = this._core.items().length <= e.items,
                i = this._core.relative(this._core.current()),
                o = e.loop || e.rewind;
            this._controls.$relative.toggleClass("disabled", !e.nav || n), e.nav && (this._controls.$previous.toggleClass("disabled", !o && i <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && i >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || n), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(r.inArray(this.current(), this._pages)).addClass("active"))
        }, i.prototype.onTrigger = function(t) {
            var e = this._core.settings;
            t.page = {
                index: r.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
            }
        }, i.prototype.current = function() {
            var n = this._core.relative(this._core.current());
            return r.grep(this._pages, r.proxy(function(t, e) {
                return t.start <= n && t.end >= n
            }, this)).pop()
        }, i.prototype.getPosition = function(t) {
            var e, n, i = this._core.settings;
            return "page" == i.slideBy ? (e = r.inArray(this.current(), this._pages), n = this._pages.length, t ? ++e : --e, e = this._pages[(e % n + n) % n].start) : (e = this._core.relative(this._core.current()), n = this._core.items().length, t ? e += i.slideBy : e -= i.slideBy), e
        }, i.prototype.next = function(t) {
            r.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
        }, i.prototype.prev = function(t) {
            r.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
        }, i.prototype.to = function(t, e, n) {
            var i;
            !n && this._pages.length ? (i = this._pages.length, r.proxy(this._overrides.to, this._core)(this._pages[(t % i + i) % i].start, e)) : r.proxy(this._overrides.to, this._core)(t, e)
        }, r.fn.owlCarousel.Constructor.Plugins.Navigation = i
    }(window.Zepto || window.jQuery, window, document),
    function(i, o, t, e) {
        "use strict";
        var n = function(t) {
            this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": i.proxy(function(t) {
                    t.namespace && "URLHash" === this._core.settings.startPosition && i(o).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": i.proxy(function(t) {
                    if (t.namespace) {
                        var e = i(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!e) return;
                        this._hashes[e] = t.content
                    }
                }, this),
                "changed.owl.carousel": i.proxy(function(t) {
                    if (t.namespace && "position" === t.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            e = i.map(this._hashes, function(t, e) {
                                return t === n ? e : null
                            }).join();
                        if (!e || o.location.hash.slice(1) === e) return;
                        o.location.hash = e
                    }
                }, this)
            }, this._core.options = i.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers), i(o).on("hashchange.owl.navigation", i.proxy(function(t) {
                var e = o.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    i = this._hashes[e] && n.index(this._hashes[e]);
                void 0 !== i && i !== this._core.current() && this._core.to(this._core.relative(i), !1, !0)
            }, this))
        };
        n.Defaults = {
            URLhashListener: !1
        }, n.prototype.destroy = function() {
            var t, e;
            for (t in i(o).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, i.fn.owlCarousel.Constructor.Plugins.Hash = n
    }(window.Zepto || window.jQuery, window, document),
    function(o, t, e, r) {
        function n(t, n) {
            var i = !1,
                e = t.charAt(0).toUpperCase() + t.slice(1);
            return o.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
                if (s[e] !== r) return i = !n || e, !1
            }), i
        }

        function i(t) {
            return n(t, !0)
        }
        var s = o("<support>").get(0).style,
            a = "Webkit Moz O ms".split(" "),
            l = {
                transition: {
                    end: {
                        WebkitTransition: "webkitTransitionEnd",
                        MozTransition: "transitionend",
                        OTransition: "oTransitionEnd",
                        transition: "transitionend"
                    }
                },
                animation: {
                    end: {
                        WebkitAnimation: "webkitAnimationEnd",
                        MozAnimation: "animationend",
                        OAnimation: "oAnimationEnd",
                        animation: "animationend"
                    }
                }
            },
            c = function() {
                return !!n("transform")
            },
            u = function() {
                return !!n("perspective")
            },
            d = function() {
                return !!n("animation")
            };
        (function() {
            return !!n("transition")
        })() && (o.support.transition = new String(i("transition")), o.support.transition.end = l.transition.end[o.support.transition]), d() && (o.support.animation = new String(i("animation")), o.support.animation.end = l.animation.end[o.support.animation]), c() && (o.support.transform = new String(i("transform")), o.support.transform3d = u())
    }(window.Zepto || window.jQuery, window, document),
    function(t) {
        "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? t(require("jquery")) : t(jQuery)
    }(function(c) {
        var t, e, n = "[object OperaMini]" === Object.prototype.toString.call(window.operamini),
            i = "placeholder" in document.createElement("input") && !n,
            o = "placeholder" in document.createElement("textarea") && !n,
            r = c.valHooks,
            s = c.propHooks,
            u = {};

        function d(t, e) {
            var n = this,
                i = c(n);
            if (n.value === i.attr("placeholder") && i.hasClass(u.customClass))
                if (n.value = "", i.removeClass(u.customClass), i.data("placeholder-password")) {
                    if (i = i.hide().nextAll('input[type="password"]:first').show().attr("id", i.removeAttr("id").data("placeholder-id")), !0 === t) return i[0].value = e;
                    i.focus()
                } else n == l() && n.select()
        }

        function a(t) {
            var e, n, i, o, r = this,
                s = c(r),
                a = r.id;
            if (t && "blur" === t.type) {
                if (s.hasClass(u.customClass)) return;
                if ("password" === r.type && 0 < (e = s.prevAll('input[type="text"]:first')).length && e.is(":visible")) return
            }
            if ("" === r.value) {
                if ("password" === r.type) {
                    if (!s.data("placeholder-textinput")) {
                        try {
                            e = s.clone().prop({
                                type: "text"
                            })
                        } catch (t) {
                            e = c("<input>").attr(c.extend((n = this, i = {}, o = /^jQuery\d+$/, c.each(n.attributes, function(t, e) {
                                e.specified && !o.test(e.name) && (i[e.name] = e.value)
                            }), i), {
                                type: "text"
                            }))
                        }
                        e.removeAttr("name").data({
                            "placeholder-enabled": !0,
                            "placeholder-password": s,
                            "placeholder-id": a
                        }).bind("focus.placeholder", d), s.data({
                            "placeholder-textinput": e,
                            "placeholder-id": a
                        }).before(e)
                    }
                    r.value = "", s = s.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id", s.data("placeholder-id")).show()
                } else {
                    var l = s.data("placeholder-password");
                    l && (l[0].value = "", s.attr("id", s.data("placeholder-id")).show().nextAll('input[type="password"]:last').hide().removeAttr("id"))
                }
                s.addClass(u.customClass), s[0].value = s.attr("placeholder")
            } else s.removeClass(u.customClass)
        }

        function l() {
            try {
                return document.activeElement
            } catch (t) {}
        }
        i && o ? ((e = c.fn.placeholder = function() {
            return this
        }).input = !0, e.textarea = !0) : ((e = c.fn.placeholder = function(t) {
            return u = c.extend({}, {
                customClass: "placeholder"
            }, t), this.filter((i ? "textarea" : ":input") + "[placeholder]").not("." + u.customClass).bind({
                "focus.placeholder": d,
                "blur.placeholder": a
            }).data("placeholder-enabled", !0).trigger("blur.placeholder")
        }).input = i, e.textarea = o, t = {
            get: function(t) {
                var e = c(t),
                    n = e.data("placeholder-password");
                return n ? n[0].value : e.data("placeholder-enabled") && e.hasClass(u.customClass) ? "" : t.value
            },
            set: function(t, e) {
                var n, i, o = c(t);
                return "" !== e && (n = o.data("placeholder-textinput"), i = o.data("placeholder-password"), n ? (d.call(n[0], !0, e) || (t.value = e), n[0].value = e) : i && (d.call(t, !0, e) || (i[0].value = e), t.value = e)), o.data("placeholder-enabled") ? "" === e ? (t.value = e, t != l() && a.call(t)) : (o.hasClass(u.customClass) && d.call(t), t.value = e) : t.value = e, o
            }
        }, i || (r.input = t, s.value = t), o || (r.textarea = t, s.value = t), c(function() {
            c(document).delegate("form", "submit.placeholder", function() {
                var t = c("." + u.customClass, this).each(function() {
                    d.call(this, !0, "")
                });
                setTimeout(function() {
                    t.each(a)
                }, 10)
            })
        }), c(window).bind("beforeunload.placeholder", function() {
            c("." + u.customClass).each(function() {
                this.value = ""
            })
        }))
    }),
    function(c) {
        c.extend(c.fn, {
            validate: function(t) {
                if (this.length) {
                    var n = c.data(this[0], "validator");
                    return n || (this.attr("novalidate", "novalidate"), n = new c.validator(t, this[0]), c.data(this[0], "validator", n), n.settings.onsubmit && (this.validateDelegate(":submit", "click", function(t) {
                        n.settings.submitHandler && (n.submitButton = t.target), c(t.target).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== c(t.target).attr("formnovalidate") && (n.cancelSubmit = !0)
                    }), this.submit(function(e) {
                        function t() {
                            var t;
                            return !n.settings.submitHandler || (n.submitButton && (t = c("<input type='hidden'/>").attr("name", n.submitButton.name).val(c(n.submitButton).val()).appendTo(n.currentForm)), n.settings.submitHandler.call(n, n.currentForm, e), n.submitButton && t.remove(), !1)
                        }
                        return n.settings.debug && e.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, t()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : t() : (n.focusInvalid(), !1)
                    })), n)
                }
                t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
            },
            valid: function() {
                if (c(this[0]).is("form")) return this.validate().form();
                var t = !0,
                    e = c(this[0].form).validate();
                return this.each(function() {
                    t = t && e.element(this)
                }), t
            },
            removeAttrs: function(t) {
                var n = {},
                    i = this;
                return c.each(t.split(/\s/), function(t, e) {
                    n[e] = i.attr(e), i.removeAttr(e)
                }), n
            },
            rules: function(t, e) {
                var n = this[0];
                if (t) {
                    var i = c.data(n.form, "validator").settings,
                        o = i.rules,
                        r = c.validator.staticRules(n);
                    switch (t) {
                        case "add":
                            c.extend(r, c.validator.normalizeRule(e)), delete r.messages, o[n.name] = r, e.messages && (i.messages[n.name] = c.extend(i.messages[n.name], e.messages));
                            break;
                        case "remove":
                            if (!e) return delete o[n.name], r;
                            var s = {};
                            return c.each(e.split(/\s/), function(t, e) {
                                s[e] = r[e], delete r[e]
                            }), s
                    }
                }
                var a = c.validator.normalizeRules(c.extend({}, c.validator.classRules(n), c.validator.attributeRules(n), c.validator.dataRules(n), c.validator.staticRules(n)), n);
                if (a.required) {
                    var l = a.required;
                    delete a.required, a = c.extend({
                        required: l
                    }, a)
                }
                return a
            }
        }), c.extend(c.expr[":"], {
            blank: function(t) {
                return !c.trim("" + c(t).val())
            },
            filled: function(t) {
                return !!c.trim("" + c(t).val())
            },
            unchecked: function(t) {
                return !c(t).prop("checked")
            }
        }), c.validator = function(t, e) {
            this.settings = c.extend(!0, {}, c.validator.defaults, t), this.currentForm = e, this.init()
        }, c.validator.format = function(n, t) {
            return 1 === arguments.length ? function() {
                var t = c.makeArray(arguments);
                return t.unshift(n), c.validator.format.apply(this, t)
            } : (2 < arguments.length && t.constructor !== Array && (t = c.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), c.each(t, function(t, e) {
                n = n.replace(RegExp("\\{" + t + "\\}", "g"), function() {
                    return e
                })
            }), n)
        }, c.extend(c.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                validClass: "valid",
                errorElement: "label",
                focusInvalid: !0,
                errorContainer: c([]),
                errorLabelContainer: c([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(t) {
                    this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
                },
                onfocusout: function(t) {
                    this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
                },
                onkeyup: function(t, e) {
                    (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
                },
                onclick: function(t) {
                    t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
                },
                highlight: function(t, e, n) {
                    "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(n) : c(t).addClass(e).removeClass(n)
                },
                unhighlight: function(t, e, n) {
                    "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(n) : c(t).removeClass(e).addClass(n)
                }
            },
            setDefaults: function(t) {
                c.extend(c.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date (ISO).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                creditcard: "Please enter a valid credit card number.",
                equalTo: "Please enter the same value again.",
                maxlength: c.validator.format("Please enter no more than {0} characters."),
                minlength: c.validator.format("Please enter at least {0} characters."),
                rangelength: c.validator.format("Please enter a value between {0} and {1} characters long."),
                range: c.validator.format("Please enter a value between {0} and {1}."),
                max: c.validator.format("Please enter a value less than or equal to {0}."),
                min: c.validator.format("Please enter a value greater than or equal to {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function t(t) {
                        var e = c.data(this[0].form, "validator"),
                            n = "on" + t.type.replace(/^validate/, "");
                        e.settings[n] && e.settings[n].call(e, this[0], t)
                    }
                    this.labelContainer = c(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || c(this.currentForm), this.containers = c(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                    var i = this.groups = {};
                    c.each(this.settings.groups, function(n, t) {
                        "string" == typeof t && (t = t.split(/\s/)), c.each(t, function(t, e) {
                            i[e] = n
                        })
                    });
                    var n = this.settings.rules;
                    c.each(n, function(t, e) {
                        n[t] = c.validator.normalizeRule(e)
                    }), c(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", t).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", t), this.settings.invalidHandler && c(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                },
                form: function() {
                    return this.checkForm(), c.extend(this.submitted, this.errorMap), this.invalid = c.extend({}, this.errorMap), this.valid() || c(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
                    return this.valid()
                },
                element: function(t) {
                    t = this.validationTargetFor(this.clean(t)), this.lastElement = t, this.prepareElement(t), this.currentElements = c(t);
                    var e = !1 !== this.check(t);
                    return e ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e
                },
                showErrors: function(e) {
                    if (e) {
                        for (var t in c.extend(this.errorMap, e), this.errorList = [], e) this.errorList.push({
                            message: e[t],
                            element: this.findByName(t)[0]
                        });
                        this.successList = c.grep(this.successList, function(t) {
                            return !(t.name in e)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    c.fn.resetForm && c(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(t) {
                    var e = 0;
                    for (var n in t) e++;
                    return e
                },
                hideErrors: function() {
                    this.addWrapper(this.toHide).hide()
                },
                valid: function() {
                    return 0 === this.size()
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        c(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var e = this.lastActive;
                    return e && 1 === c.grep(this.errorList, function(t) {
                        return t.element.name === e.name
                    }).length && e
                },
                elements: function() {
                    var t = this,
                        e = {};
                    return c(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                        return !this.name && t.settings.debug && window.console && console.error("%o has no name assigned", this), !(this.name in e || !t.objectLength(c(this).rules())) && (e[this.name] = !0)
                    })
                },
                clean: function(t) {
                    return c(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.replace(" ", ".");
                    return c(this.settings.errorElement + "." + t, this.errorContext)
                },
                reset: function() {
                    this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = c([]), this.toHide = c([]), this.currentElements = c([])
                },
                prepareForm: function() {
                    this.reset(), this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(t) {
                    this.reset(), this.toHide = this.errorsFor(t)
                },
                elementValue: function(t) {
                    var e = c(t).attr("type"),
                        n = c(t).val();
                    return "radio" === e || "checkbox" === e ? c("input[name='" + c(t).attr("name") + "']:checked").val() : "string" == typeof n ? n.replace(/\r/g, "") : n
                },
                check: function(e) {
                    e = this.validationTargetFor(this.clean(e));
                    var t, n = c(e).rules(),
                        i = !1,
                        o = this.elementValue(e);
                    for (var r in n) {
                        var s = {
                            method: r,
                            parameters: n[r]
                        };
                        try {
                            if ("dependency-mismatch" === (t = c.validator.methods[r].call(this, o, e, s.parameters))) {
                                i = !0;
                                continue
                            }
                            if (i = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                            if (!t) return this.formatAndAdd(e, s), !1
                        } catch (t) {
                            throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + s.method + "' method.", t), t
                        }
                    }
                    return i ? void 0 : (this.objectLength(n) && this.successList.push(e), !0)
                },
                customDataMessage: function(t, e) {
                    return c(t).data("msg-" + e.toLowerCase()) || t.attributes && c(t).attr("data-msg-" + e.toLowerCase())
                },
                customMessage: function(t, e) {
                    var n = this.settings.messages[t];
                    return n && (n.constructor === String ? n : n[e])
                },
                findDefined: function() {
                    for (var t = 0; arguments.length > t; t++)
                        if (void 0 !== arguments[t]) return arguments[t]
                },
                defaultMessage: function(t, e) {
                    return this.findDefined(this.customMessage(t.name, e), this.customDataMessage(t, e), !this.settings.ignoreTitle && t.title || void 0, c.validator.messages[e], "<strong>Warning: No message defined for " + t.name + "</strong>")
                },
                formatAndAdd: function(t, e) {
                    var n = this.defaultMessage(t, e.method),
                        i = /\$?\{(\d+)\}/g;
                    "function" == typeof n ? n = n.call(this, e.parameters, t) : i.test(n) && (n = c.validator.format(n.replace(i, "{$1}"), e.parameters)), this.errorList.push({
                        message: n,
                        element: t
                    }), this.errorMap[t.name] = n, this.submitted[t.name] = n
                },
                addWrapper: function(t) {
                    return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
                },
                defaultShowErrors: function() {
                    var t, e;
                    for (t = 0; this.errorList[t]; t++) {
                        var n = this.errorList[t];
                        this.settings.highlight && this.settings.highlight.call(this, n.element, this.settings.errorClass, this.settings.validClass), this.showLabel(n.element, n.message)
                    }
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
                    if (this.settings.unhighlight)
                        for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return c(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, e) {
                    var n = this.errorsFor(t);
                    n.length ? (n.removeClass(this.settings.validClass).addClass(this.settings.errorClass), n.html(e)) : (n = c("<" + this.settings.errorElement + ">").attr("for", this.idOrName(t)).addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (n = n.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(n).length || (this.settings.errorPlacement ? this.settings.errorPlacement(n, c(t)) : n.insertAfter(t))), !e && this.settings.success && (n.text(""), "string" == typeof this.settings.success ? n.addClass(this.settings.success) : this.settings.success(n, t)), this.toShow = this.toShow.add(n)
                },
                errorsFor: function(t) {
                    var e = this.idOrName(t);
                    return this.errors().filter(function() {
                        return c(this).attr("for") === e
                    })
                },
                idOrName: function(t) {
                    return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
                },
                checkable: function(t) {
                    return /radio|checkbox/i.test(t.type)
                },
                findByName: function(t) {
                    return c(this.currentForm).find("[name='" + t + "']")
                },
                getLength: function(t, e) {
                    switch (e.nodeName.toLowerCase()) {
                        case "select":
                            return c("option:selected", e).length;
                        case "input":
                            if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(t, e) {
                    return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
                },
                dependTypes: {
                    boolean: function(t) {
                        return t
                    },
                    string: function(t, e) {
                        return !!c(t, e.form).length
                    },
                    function: function(t, e) {
                        return t(e)
                    }
                },
                optional: function(t) {
                    var e = this.elementValue(t);
                    return !c.validator.methods.required.call(this, e, t) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
                },
                stopRequest: function(t, e) {
                    this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (c(this.currentForm).submit(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (c(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t) {
                    return c.data(t, "previousValue") || c.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, "remote")
                    })
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, e) {
                t.constructor === String ? this.classRuleSettings[t] = e : c.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var e = {},
                    n = c(t).attr("class");
                return n && c.each(n.split(" "), function() {
                    this in c.validator.classRuleSettings && c.extend(e, c.validator.classRuleSettings[this])
                }), e
            },
            attributeRules: function(t) {
                var e = {},
                    n = c(t),
                    i = n[0].getAttribute("type");
                for (var o in c.validator.methods) {
                    var r;
                    "required" === o ? ("" === (r = n.get(0).getAttribute(o)) && (r = !0), r = !!r) : r = n.attr(o), /min|max/.test(o) && (null === i || /number|range|text/.test(i)) && (r = Number(r)), r ? e[o] = r : i === o && "range" !== i && (e[o] = !0)
                }
                return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
            },
            dataRules: function(t) {
                var e, n, i = {},
                    o = c(t);
                for (e in c.validator.methods) void 0 !== (n = o.data("rule-" + e.toLowerCase())) && (i[e] = n);
                return i
            },
            staticRules: function(t) {
                var e = {},
                    n = c.data(t.form, "validator");
                return n.settings.rules && (e = c.validator.normalizeRule(n.settings.rules[t.name]) || {}), e
            },
            normalizeRules: function(i, o) {
                return c.each(i, function(t, e) {
                    if (!1 !== e) {
                        if (e.param || e.depends) {
                            var n = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    n = !!c(e.depends, o.form).length;
                                    break;
                                case "function":
                                    n = e.depends.call(o, o)
                            }
                            n ? i[t] = void 0 === e.param || e.param : delete i[t]
                        }
                    } else delete i[t]
                }), c.each(i, function(t, e) {
                    i[t] = c.isFunction(e) ? e(o) : e
                }), c.each(["minlength", "maxlength"], function() {
                    i[this] && (i[this] = Number(i[this]))
                }), c.each(["rangelength", "range"], function() {
                    var t;
                    i[this] && (c.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (t = i[this].split(/[\s,]+/), i[this] = [Number(t[0]), Number(t[1])]))
                }), c.validator.autoCreateRanges && (i.min && i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), i.minlength && i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
            },
            normalizeRule: function(t) {
                if ("string" == typeof t) {
                    var e = {};
                    c.each(t.split(/\s/), function() {
                        e[this] = !0
                    }), t = e
                }
                return t
            },
            addMethod: function(t, e, n) {
                c.validator.methods[t] = e, c.validator.messages[t] = void 0 !== n ? n : c.validator.messages[t], e.length < 3 && c.validator.addClassRules(t, c.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, e, n) {
                    if (!this.depend(n, e)) return "dependency-mismatch";
                    if ("select" === e.nodeName.toLowerCase()) {
                        var i = c(e).val();
                        return i && 0 < i.length
                    }
                    return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < c.trim(t).length
                },
                email: function(t, e) {
                    return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
                },
                url: function(t, e) {
                    return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
                },
                date: function(t, e) {
                    return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
                },
                dateISO: function(t, e) {
                    return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
                },
                number: function(t, e) {
                    return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
                },
                digits: function(t, e) {
                    return this.optional(e) || /^\d+$/.test(t)
                },
                creditcard: function(t, e) {
                    if (this.optional(e)) return "dependency-mismatch";
                    if (/[^0-9 \-]+/.test(t)) return !1;
                    for (var n = 0, i = 0, o = !1, r = (t = t.replace(/\D/g, "")).length - 1; 0 <= r; r--) {
                        var s = t.charAt(r);
                        i = parseInt(s, 10), o && 9 < (i *= 2) && (i -= 9), n += i, o = !o
                    }
                    return 0 == n % 10
                },
                minlength: function(t, e, n) {
                    var i = c.isArray(t) ? t.length : this.getLength(c.trim(t), e);
                    return this.optional(e) || n <= i
                },
                maxlength: function(t, e, n) {
                    var i = c.isArray(t) ? t.length : this.getLength(c.trim(t), e);
                    return this.optional(e) || i <= n
                },
                rangelength: function(t, e, n) {
                    var i = c.isArray(t) ? t.length : this.getLength(c.trim(t), e);
                    return this.optional(e) || i >= n[0] && n[1] >= i
                },
                min: function(t, e, n) {
                    return this.optional(e) || n <= t
                },
                max: function(t, e, n) {
                    return this.optional(e) || t <= n
                },
                range: function(t, e, n) {
                    return this.optional(e) || t >= n[0] && n[1] >= t
                },
                equalTo: function(t, e, n) {
                    var i = c(n);
                    return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                        c(e).valid()
                    }), t === i.val()
                },
                remote: function(r, s, t) {
                    if (this.optional(s)) return "dependency-mismatch";
                    var a = this.previousValue(s);
                    if (this.settings.messages[s.name] || (this.settings.messages[s.name] = {}), a.originalMessage = this.settings.messages[s.name].remote, this.settings.messages[s.name].remote = a.message, t = "string" == typeof t && {
                            url: t
                        } || t, a.old === r) return a.valid;
                    a.old = r;
                    var l = this;
                    this.startRequest(s);
                    var e = {};
                    return e[s.name] = r, c.ajax(c.extend(!0, {
                        url: t,
                        mode: "abort",
                        port: "validate" + s.name,
                        dataType: "json",
                        data: e,
                        success: function(t) {
                            l.settings.messages[s.name].remote = a.originalMessage;
                            var e = !0 === t || "true" === t;
                            if (e) {
                                var n = l.formSubmitted;
                                l.prepareElement(s), l.formSubmitted = n, l.successList.push(s), delete l.invalid[s.name], l.showErrors()
                            } else {
                                var i = {},
                                    o = t || l.defaultMessage(s, "remote");
                                i[s.name] = a.message = c.isFunction(o) ? o(r) : o, l.invalid[s.name] = !0, l.showErrors(i)
                            }
                            a.valid = e, l.stopRequest(s, e)
                        }
                    }, t)), "pending"
                }
            }
        }), c.format = c.validator.format
    }(jQuery),
    function(i) {
        var o = {};
        if (i.ajaxPrefilter) i.ajaxPrefilter(function(t, e, n) {
            var i = t.port;
            "abort" === t.mode && (o[i] && o[i].abort(), o[i] = n)
        });
        else {
            var r = i.ajax;
            i.ajax = function(t) {
                var e = ("mode" in t ? t : i.ajaxSettings).mode,
                    n = ("port" in t ? t : i.ajaxSettings).port;
                return "abort" === e ? (o[n] && o[n].abort(), o[n] = r.apply(this, arguments), o[n]) : r.apply(this, arguments)
            }
        }
    }(jQuery),
    function(o) {
        o.extend(o.fn, {
            validateDelegate: function(n, t, i) {
                return this.bind(t, function(t) {
                    var e = o(t.target);
                    return e.is(n) ? i.apply(e, arguments) : void 0
                })
            }
        })
    }(jQuery);
var page = {
    init: function() {
        this.geral(), this.parallax(), this.slide()
    },
    geral: function() {
        $("input, textarea").placeholder();
        var o = function(t) {
                return 11 === t.replace(/\D/g, "").length ? "(00) 00000-0000" : "(00) 0000-00009"
            },
            t = {
                onKeyPress: function(t, e, n, i) {
                    n.mask(o.apply({}, arguments), i)
                }
            };
        $(".telefone").mask(o, t), $("form").each(function() {
            $(this).validate({
                errorPlacement: function(t, e) {
                    return !0
                }
            })
        }), $("form").submit(function() {
            $(this).find("button[type='submit']").prop("disabled", !0)
        })
    },
    parallax: function() {
        1170 < $(window).width() && $(window).scroll(function() {
            var t = "50%" + -$(window).scrollTop() / $(".parallax").data("speed") + "px",
                e = $(document).scrollTop();
            $(".parallax").css("background-position", t), $(".icon--left").css({
                transform: "translateY(" + e / 20 + "%) rotate(180deg)"
            }), $(".icon--right").css({
                transform: "translateY(" + -e / 20 + "%)"
            })
        })
    },
    slide: function() {
        $(".owl-carousel").owlCarousel({
            items: 1,
            dots: !0,
            loop: !0,
            autoplay: !0,
            autoplaySpeed: 1e3,
            mouseDrag: !0,
            touchDrag: !0
        })
    }
};
page.init();