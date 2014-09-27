!function (t) {
    var e, n, r = "0.4.2", i = "hasOwnProperty", a = /[\.\/]/, o = /\s*,\s*/, s = "*", u = function (t, e) {
        return t - e
    }, l = {n: {}}, c = function () {
        for (var t = 0, e = this.length; e > t; t++)if ("undefined" != typeof this[t])return this[t]
    }, f = function () {
        for (var t = this.length; --t;)if ("undefined" != typeof this[t])return this[t]
    }, h = function (t, r) {
        t = String(t);
        var i, a = n, o = Array.prototype.slice.call(arguments, 2), s = h.listeners(t), l = 0, d = [], p = {}, g = [], v = e;
        g.firstDefined = c, g.lastDefined = f, e = t, n = 0;
        for (var m = 0, y = s.length; y > m; m++)"zIndex"in s[m] && (d.push(s[m].zIndex), s[m].zIndex < 0 && (p[s[m].zIndex] = s[m]));
        for (d.sort(u); d[l] < 0;)if (i = p[d[l++]], g.push(i.apply(r, o)), n)return n = a, g;
        for (m = 0; y > m; m++)if (i = s[m], "zIndex"in i)if (i.zIndex == d[l]) {
            if (g.push(i.apply(r, o)), n)break;
            do if (l++, i = p[d[l]], i && g.push(i.apply(r, o)), n)break; while (i)
        } else p[i.zIndex] = i; else if (g.push(i.apply(r, o)), n)break;
        return n = a, e = v, g
    };
    h._events = l, h.listeners = function (t) {
        var e, n, r, i, o, u, c, f, h = t.split(a), d = l, p = [d], g = [];
        for (i = 0, o = h.length; o > i; i++) {
            for (f = [], u = 0, c = p.length; c > u; u++)for (d = p[u].n, n = [d[h[i]], d[s]], r = 2; r--;)e = n[r], e && (f.push(e), g = g.concat(e.f || []));
            p = f
        }
        return g
    }, h.on = function (t, e) {
        if (t = String(t), "function" != typeof e)return function () {
        };
        for (var n = t.split(o), r = 0, i = n.length; i > r; r++)!function (t) {
            for (var n, r = t.split(a), i = l, o = 0, s = r.length; s > o; o++)i = i.n, i = i.hasOwnProperty(r[o]) && i[r[o]] || (i[r[o]] = {n: {}});
            for (i.f = i.f || [], o = 0, s = i.f.length; s > o; o++)if (i.f[o] == e) {
                n = !0;
                break
            }
            !n && i.f.push(e)
        }(n[r]);
        return function (t) {
            +t == +t && (e.zIndex = +t)
        }
    }, h.f = function (t) {
        var e = [].slice.call(arguments, 1);
        return function () {
            h.apply(null, [t, null].concat(e).concat([].slice.call(arguments, 0)))
        }
    }, h.stop = function () {
        n = 1
    }, h.nt = function (t) {
        return t ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e) : e
    }, h.nts = function () {
        return e.split(a)
    }, h.off = h.unbind = function (t, e) {
        if (!t)return void(h._events = l = {n: {}});
        var n = t.split(o);
        if (n.length > 1)for (var r = 0, u = n.length; u > r; r++)h.off(n[r], e); else {
            n = t.split(a);
            var c, f, d, r, u, p, g, v = [l];
            for (r = 0, u = n.length; u > r; r++)for (p = 0; p < v.length; p += d.length - 2) {
                if (d = [p, 1], c = v[p].n, n[r] != s)c[n[r]] && d.push(c[n[r]]); else for (f in c)c[i](f) && d.push(c[f]);
                v.splice.apply(v, d)
            }
            for (r = 0, u = v.length; u > r; r++)for (c = v[r]; c.n;) {
                if (e) {
                    if (c.f) {
                        for (p = 0, g = c.f.length; g > p; p++)if (c.f[p] == e) {
                            c.f.splice(p, 1);
                            break
                        }
                        !c.f.length && delete c.f
                    }
                    for (f in c.n)if (c.n[i](f) && c.n[f].f) {
                        var m = c.n[f].f;
                        for (p = 0, g = m.length; g > p; p++)if (m[p] == e) {
                            m.splice(p, 1);
                            break
                        }
                        !m.length && delete c.n[f].f
                    }
                } else {
                    delete c.f;
                    for (f in c.n)c.n[i](f) && c.n[f].f && delete c.n[f].f
                }
                c = c.n
            }
        }
    }, h.once = function (t, e) {
        var n = function () {
            return h.unbind(t, n), e.apply(this, arguments)
        };
        return h.on(t, n)
    }, h.version = r, h.toString = function () {
        return"You are running Eve " + r
    }, "undefined" != typeof module && module.exports ? module.exports = h : "function" == typeof define && define.amd ? define("eve", [], function () {
        return h
    }) : t.eve = h
}(this), function (t, e) {
    "function" == typeof define && define.amd ? define(["eve"], function (n) {
        return e(t, n)
    }) : e(t, t.eve)
}(this, function (t, e) {
    var n = function (e) {
        var n = {}, r = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function (t) {
            setTimeout(t, 16)
        }, i = Array.isArray || function (t) {
            return t instanceof Array || "[object Array]" == Object.prototype.toString.call(t)
        }, a = 0, o = "M" + (+new Date).toString(36), s = function () {
            return o + (a++).toString(36)
        }, u = Date.now || function () {
            return+new Date
        }, l = function (t) {
            var e = this;
            if (null == t)return e.s;
            var n = e.s - t;
            e.b += e.dur * n, e.B += e.dur * n, e.s = t
        }, c = function (t) {
            var e = this;
            return null == t ? e.spd : void(e.spd = t)
        }, f = function (t) {
            var e = this;
            return null == t ? e.dur : (e.s = e.s * t / e.dur, void(e.dur = t))
        }, h = function () {
            var t = this;
            delete n[t.id], t.update(), e("mina.stop." + t.id, t)
        }, d = function () {
            var t = this;
            t.pdif || (delete n[t.id], t.update(), t.pdif = t.get() - t.b)
        }, p = function () {
            var t = this;
            t.pdif && (t.b = t.get() - t.pdif, delete t.pdif, n[t.id] = t)
        }, g = function () {
            var t, e = this;
            if (i(e.start)) {
                t = [];
                for (var n = 0, r = e.start.length; r > n; n++)t[n] = +e.start[n] + (e.end[n] - e.start[n]) * e.easing(e.s)
            } else t = +e.start + (e.end - e.start) * e.easing(e.s);
            e.set(t)
        }, v = function () {
            var t = 0;
            for (var i in n)if (n.hasOwnProperty(i)) {
                var a = n[i], o = a.get();
                t++, a.s = (o - a.b) / (a.dur / a.spd), a.s >= 1 && (delete n[i], a.s = 1, t--, function (t) {
                    setTimeout(function () {
                        e("mina.finish." + t.id, t)
                    })
                }(a)), a.update()
            }
            t && r(v)
        }, m = function (t, e, i, a, o, u, y) {
            var x = {id: s(), start: t, end: e, b: i, s: 0, dur: a - i, spd: 1, get: o, set: u, easing: y || m.linear, status: l, speed: c, duration: f, stop: h, pause: d, resume: p, update: g};
            n[x.id] = x;
            var b, w = 0;
            for (b in n)if (n.hasOwnProperty(b) && (w++, 2 == w))break;
            return 1 == w && r(v), x
        };
        return m.time = u, m.getById = function (t) {
            return n[t] || null
        }, m.linear = function (t) {
            return t
        }, m.easeout = function (t) {
            return Math.pow(t, 1.7)
        }, m.easein = function (t) {
            return Math.pow(t, .48)
        }, m.easeinout = function (t) {
            if (1 == t)return 1;
            if (0 == t)return 0;
            var e = .48 - t / 1.04, n = Math.sqrt(.1734 + e * e), r = n - e, i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1), a = -n - e, o = Math.pow(Math.abs(a), 1 / 3) * (0 > a ? -1 : 1), s = i + o + .5;
            return 3 * (1 - s) * s * s + s * s * s
        }, m.backin = function (t) {
            if (1 == t)return 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        }, m.backout = function (t) {
            if (0 == t)return 0;
            t -= 1;
            var e = 1.70158;
            return t * t * ((e + 1) * t + e) + 1
        }, m.elastic = function (t) {
            return t == !!t ? t : Math.pow(2, -10 * t) * Math.sin(2 * (t - .075) * Math.PI / .3) + 1
        }, m.bounce = function (t) {
            var e, n = 7.5625, r = 2.75;
            return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
        }, t.mina = m, m
    }("undefined" == typeof e ? function () {
    } : e), r = function () {
        function r(t, e) {
            if (t) {
                if (t.tagName)return k(t);
                if (a(t, "array") && r.set)return r.set.apply(r, t);
                if (t instanceof b)return t;
                if (null == e)return t = M.doc.querySelector(t), k(t)
            }
            return t = null == t ? "100%" : t, e = null == e ? "100%" : e, new S(t, e)
        }

        function i(t, e) {
            if (e) {
                if ("#text" == t && (t = M.doc.createTextNode(e.text || "")), "string" == typeof t && (t = i(t)), "string" == typeof e)return"xlink:" == e.substring(0, 6) ? t.getAttributeNS(Y, e.substring(6)) : "xml:" == e.substring(0, 4) ? t.getAttributeNS(W, e.substring(4)) : t.getAttribute(e);
                for (var n in e)if (e[T](n)) {
                    var r = _(e[n]);
                    r ? "xlink:" == n.substring(0, 6) ? t.setAttributeNS(Y, n.substring(6), r) : "xml:" == n.substring(0, 4) ? t.setAttributeNS(W, n.substring(4), r) : t.setAttribute(n, r) : t.removeAttribute(n)
                }
            } else t = M.doc.createElementNS(W, t);
            return t
        }

        function a(t, e) {
            return e = _.prototype.toLowerCase.call(e), "finite" == e ? isFinite(t) : "array" == e && (t instanceof Array || Array.isArray && Array.isArray(t)) ? !0 : "null" == e && null === t || e == typeof t && null !== t || "object" == e && t === Object(t) || V.call(t).slice(8, -1).toLowerCase() == e
        }

        function o(t) {
            if ("function" == typeof t || Object(t) !== t)return t;
            var e = new t.constructor;
            for (var n in t)t[T](n) && (e[n] = o(t[n]));
            return e
        }

        function s(t, e) {
            for (var n = 0, r = t.length; r > n; n++)if (t[n] === e)return t.push(t.splice(n, 1)[0])
        }

        function u(t, e, n) {
            function r() {
                var i = Array.prototype.slice.call(arguments, 0), a = i.join("␀"), o = r.cache = r.cache || {}, u = r.count = r.count || [];
                return o[T](a) ? (s(u, a), n ? n(o[a]) : o[a]) : (u.length >= 1e3 && delete o[u.shift()], u.push(a), o[a] = t.apply(e, i), n ? n(o[a]) : o[a])
            }

            return r
        }

        function l(t, e, n, r, i, a) {
            if (null == i) {
                var o = t - n, s = e - r;
                return o || s ? (180 + 180 * F.atan2(-s, -o) / P + 360) % 360 : 0
            }
            return l(t, e, i, a) - l(n, r, i, a)
        }

        function c(t) {
            return t % 360 * P / 180
        }

        function f(t) {
            return 180 * t / P % 360
        }

        function h(t) {
            var e = [];
            return t = t.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g, function (t, n, r) {
                return r = r.split(/\s*,\s*|\s+/), "rotate" == n && 1 == r.length && r.push(0, 0), "scale" == n && (r.length > 2 ? r = r.slice(0, 2) : 2 == r.length && r.push(0, 0), 1 == r.length && r.push(r[0], 0, 0)), e.push("skewX" == n ? ["m", 1, 0, F.tan(c(r[0])), 1, 0, 0] : "skewY" == n ? ["m", 1, F.tan(c(r[0])), 0, 1, 0, 0] : [n.charAt(0)].concat(r)), t
            }), e
        }

        function d(t, e) {
            var n = ie(t), i = new r.Matrix;
            if (n)for (var a = 0, o = n.length; o > a; a++) {
                var s, u, l, c, f, h = n[a], d = h.length, p = _(h[0]).toLowerCase(), g = h[0] != p, v = g ? i.invert() : 0;
                "t" == p && 2 == d ? i.translate(h[1], 0) : "t" == p && 3 == d ? g ? (s = v.x(0, 0), u = v.y(0, 0), l = v.x(h[1], h[2]), c = v.y(h[1], h[2]), i.translate(l - s, c - u)) : i.translate(h[1], h[2]) : "r" == p ? 2 == d ? (f = f || e, i.rotate(h[1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == d && (g ? (l = v.x(h[2], h[3]), c = v.y(h[2], h[3]), i.rotate(h[1], l, c)) : i.rotate(h[1], h[2], h[3])) : "s" == p ? 2 == d || 3 == d ? (f = f || e, i.scale(h[1], h[d - 1], f.x + f.width / 2, f.y + f.height / 2)) : 4 == d ? g ? (l = v.x(h[2], h[3]), c = v.y(h[2], h[3]), i.scale(h[1], h[1], l, c)) : i.scale(h[1], h[1], h[2], h[3]) : 5 == d && (g ? (l = v.x(h[3], h[4]), c = v.y(h[3], h[4]), i.scale(h[1], h[2], l, c)) : i.scale(h[1], h[2], h[3], h[4])) : "m" == p && 7 == d && i.add(h[1], h[2], h[3], h[4], h[5], h[6])
            }
            return i
        }

        function p(t, e) {
            if (null == e) {
                var n = !0;
                if (e = t.node.getAttribute("linearGradient" == t.type || "radialGradient" == t.type ? "gradientTransform" : "pattern" == t.type ? "patternTransform" : "transform"), !e)return new r.Matrix;
                e = h(e)
            } else e = r._.rgTransform.test(e) ? _(e).replace(/\.{3}|\u2026/g, t._.transform || q) : h(e), a(e, "array") && (e = r.path ? r.path.toString.call(e) : _(e)), t._.transform = e;
            var i = d(e, t.getBBox(1));
            return n ? i : void(t.matrix = i)
        }

        function v(t) {
            var e = t.node.ownerSVGElement && k(t.node.ownerSVGElement) || t.node.parentNode && k(t.node.parentNode) || r.select("svg") || r(0, 0), n = e.select("defs"), i = null == n ? !1 : n.node;
            return i || (i = C("defs", e.node).node), i
        }

        function m(t) {
            return t.node.ownerSVGElement && k(t.node.ownerSVGElement) || r.select("svg")
        }

        function y(t, e, n) {
            function r(t) {
                if (null == t)return q;
                if (t == +t)return t;
                i(l, {width: t});
                try {
                    return l.getBBox().width
                } catch (e) {
                    return 0
                }
            }

            function a(t) {
                if (null == t)return q;
                if (t == +t)return t;
                i(l, {height: t});
                try {
                    return l.getBBox().height
                } catch (e) {
                    return 0
                }
            }

            function o(r, i) {
                null == e ? u[r] = i(t.attr(r) || 0) : r == e && (u = i(null == n ? t.attr(r) || 0 : n))
            }

            var s = m(t).node, u = {}, l = s.querySelector(".svg---mgr");
            switch (l || (l = i("rect"), i(l, {x: -9e9, y: -9e9, width: 10, height: 10, "class": "svg---mgr", fill: "none"}), s.appendChild(l)), t.type) {
                case"rect":
                    o("rx", r), o("ry", a);
                case"image":
                    o("width", r), o("height", a);
                case"text":
                    o("x", r), o("y", a);
                    break;
                case"circle":
                    o("cx", r), o("cy", a), o("r", r);
                    break;
                case"ellipse":
                    o("cx", r), o("cy", a), o("rx", r), o("ry", a);
                    break;
                case"line":
                    o("x1", r), o("x2", r), o("y1", a), o("y2", a);
                    break;
                case"marker":
                    o("refX", r), o("markerWidth", r), o("refY", a), o("markerHeight", a);
                    break;
                case"radialGradient":
                    o("fx", r), o("fy", a);
                    break;
                case"tspan":
                    o("dx", r), o("dy", a);
                    break;
                default:
                    o(e, r)
            }
            return s.removeChild(l), u
        }

        function x(t) {
            a(t, "array") || (t = Array.prototype.slice.call(arguments, 0));
            for (var e = 0, n = 0, r = this.node; this[e];)delete this[e++];
            for (e = 0; e < t.length; e++)"set" == t[e].type ? t[e].forEach(function (t) {
                r.appendChild(t.node)
            }) : r.appendChild(t[e].node);
            var i = r.childNodes;
            for (e = 0; e < i.length; e++)this[n++] = k(i[e]);
            return this
        }

        function b(t) {
            if (t.snap in Z)return Z[t.snap];
            var e, n = this.id = H();
            try {
                e = t.ownerSVGElement
            } catch (r) {
            }
            if (this.node = t, e && (this.paper = new S(e)), this.type = t.tagName, this.anims = {}, this._ = {transform: []}, t.snap = n, Z[n] = this, "g" == this.type && (this.add = x), this.type in{g: 1, mask: 1, pattern: 1})for (var i in S.prototype)S.prototype[T](i) && (this[i] = S.prototype[i])
        }

        function w(t) {
            this.node = t
        }

        function C(t, e) {
            var n = i(t);
            e.appendChild(n);
            var r = k(n);
            return r
        }

        function S(t, e) {
            var n, r, a, o = S.prototype;
            if (t && "svg" == t.tagName) {
                if (t.snap in Z)return Z[t.snap];
                var s = t.ownerDocument;
                n = new b(t), r = t.getElementsByTagName("desc")[0], a = t.getElementsByTagName("defs")[0], r || (r = i("desc"), r.appendChild(s.createTextNode("Created with Snap")), n.node.appendChild(r)), a || (a = i("defs"), n.node.appendChild(a)), n.defs = a;
                for (var u in o)o[T](u) && (n[u] = o[u]);
                n.paper = n.root = n
            } else n = C("svg", M.doc.body), i(n.node, {height: e, version: 1.1, width: t, xmlns: W});
            return n
        }

        function k(t) {
            return t ? t instanceof b || t instanceof w ? t : t.tagName && "svg" == t.tagName.toLowerCase() ? new S(t) : t.tagName && "object" == t.tagName.toLowerCase() && "image/svg+xml" == t.type ? new S(t.contentDocument.getElementsByTagName("svg")[0]) : new b(t) : t
        }

        r.version = "0.3.0", r.toString = function () {
            return"Snap v" + this.version
        }, r._ = {};
        var M = {win: t, doc: t.document};
        r._.glob = M;
        var T = "hasOwnProperty", _ = String, B = parseFloat, A = parseInt, F = Math, N = F.max, j = F.min, E = F.abs, P = (F.pow, F.PI), q = (F.round, ""), L = " ", V = Object.prototype.toString, D = /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i, G = "	\n\f\r   ᠎             　\u2028\u2029", R = (r._.separator = new RegExp("[," + G + "]+"), new RegExp("[" + G + "]", "g"), new RegExp("[" + G + "]*,[" + G + "]*")), O = {hs: 1, rg: 1}, z = new RegExp("([a-z])[" + G + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + G + "]*,?[" + G + "]*)+)", "ig"), I = new RegExp("([rstm])[" + G + ",]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[" + G + "]*,?[" + G + "]*)+)", "ig"), U = new RegExp("(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[" + G + "]*,?[" + G + "]*", "ig"), X = 0, $ = "S" + (+new Date).toString(36), H = function () {
            return $ + (X++).toString(36)
        }, Y = "http://www.w3.org/1999/xlink", W = "http://www.w3.org/2000/svg", Z = {}, Q = r.url = function (t) {
            return"url('#" + t + "')"
        };
        r._.$ = i, r._.id = H, r.format = function () {
            var t = /\{([^\}]+)\}/g, e = /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g, n = function (t, n, r) {
                var i = r;
                return n.replace(e, function (t, e, n, r, a) {
                    e = e || r, i && (e in i && (i = i[e]), "function" == typeof i && a && (i = i()))
                }), i = (null == i || i == r ? t : i) + ""
            };
            return function (e, r) {
                return _(e).replace(t, function (t, e) {
                    return n(t, e, r)
                })
            }
        }(), r._.clone = o, r._.cacher = u, r.rad = c, r.deg = f, r.angle = l, r.is = a, r.snapTo = function (t, e, n) {
            if (n = a(n, "finite") ? n : 10, a(t, "array")) {
                for (var r = t.length; r--;)if (E(t[r] - e) <= n)return t[r]
            } else {
                t = +t;
                var i = e % t;
                if (n > i)return e - i;
                if (i > t - n)return e - i + t
            }
            return e
        }, r.getRGB = u(function (t) {
            if (!t || (t = _(t)).indexOf("-") + 1)return{r: -1, g: -1, b: -1, hex: "none", error: 1, toString: ee};
            if ("none" == t)return{r: -1, g: -1, b: -1, hex: "none", toString: ee};
            if (!(O[T](t.toLowerCase().substring(0, 2)) || "#" == t.charAt()) && (t = J(t)), !t)return{r: -1, g: -1, b: -1, hex: "none", error: 1, toString: ee};
            var e, n, i, o, s, u, l = t.match(D);
            return l ? (l[2] && (i = A(l[2].substring(5), 16), n = A(l[2].substring(3, 5), 16), e = A(l[2].substring(1, 3), 16)), l[3] && (i = A((s = l[3].charAt(3)) + s, 16), n = A((s = l[3].charAt(2)) + s, 16), e = A((s = l[3].charAt(1)) + s, 16)), l[4] && (u = l[4].split(R), e = B(u[0]), "%" == u[0].slice(-1) && (e *= 2.55), n = B(u[1]), "%" == u[1].slice(-1) && (n *= 2.55), i = B(u[2]), "%" == u[2].slice(-1) && (i *= 2.55), "rgba" == l[1].toLowerCase().slice(0, 4) && (o = B(u[3])), u[3] && "%" == u[3].slice(-1) && (o /= 100)), l[5] ? (u = l[5].split(R), e = B(u[0]), "%" == u[0].slice(-1) && (e /= 100), n = B(u[1]), "%" == u[1].slice(-1) && (n /= 100), i = B(u[2]), "%" == u[2].slice(-1) && (i /= 100), ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) && (e /= 360), "hsba" == l[1].toLowerCase().slice(0, 4) && (o = B(u[3])), u[3] && "%" == u[3].slice(-1) && (o /= 100), r.hsb2rgb(e, n, i, o)) : l[6] ? (u = l[6].split(R), e = B(u[0]), "%" == u[0].slice(-1) && (e /= 100), n = B(u[1]), "%" == u[1].slice(-1) && (n /= 100), i = B(u[2]), "%" == u[2].slice(-1) && (i /= 100), ("deg" == u[0].slice(-3) || "°" == u[0].slice(-1)) && (e /= 360), "hsla" == l[1].toLowerCase().slice(0, 4) && (o = B(u[3])), u[3] && "%" == u[3].slice(-1) && (o /= 100), r.hsl2rgb(e, n, i, o)) : (e = j(F.round(e), 255), n = j(F.round(n), 255), i = j(F.round(i), 255), o = j(N(o, 0), 1), l = {r: e, g: n, b: i, toString: ee}, l.hex = "#" + (16777216 | i | n << 8 | e << 16).toString(16).slice(1), l.opacity = a(o, "finite") ? o : 1, l)) : {r: -1, g: -1, b: -1, hex: "none", error: 1, toString: ee}
        }, r), r.hsb = u(function (t, e, n) {
            return r.hsb2rgb(t, e, n).hex
        }), r.hsl = u(function (t, e, n) {
            return r.hsl2rgb(t, e, n).hex
        }), r.rgb = u(function (t, e, n, r) {
            if (a(r, "finite")) {
                var i = F.round;
                return"rgba(" + [i(t), i(e), i(n), +r.toFixed(2)] + ")"
            }
            return"#" + (16777216 | n | e << 8 | t << 16).toString(16).slice(1)
        });
        var J = function (t) {
            var e = M.doc.getElementsByTagName("head")[0] || M.doc.getElementsByTagName("svg")[0], n = "rgb(255, 0, 0)";
            return(J = u(function (t) {
                if ("red" == t.toLowerCase())return n;
                e.style.color = n, e.style.color = t;
                var r = M.doc.defaultView.getComputedStyle(e, q).getPropertyValue("color");
                return r == n ? null : r
            }))(t)
        }, K = function () {
            return"hsb(" + [this.h, this.s, this.b] + ")"
        }, te = function () {
            return"hsl(" + [this.h, this.s, this.l] + ")"
        }, ee = function () {
            return 1 == this.opacity || null == this.opacity ? this.hex : "rgba(" + [this.r, this.g, this.b, this.opacity] + ")"
        }, ne = function (t, e, n) {
            if (null == e && a(t, "object") && "r"in t && "g"in t && "b"in t && (n = t.b, e = t.g, t = t.r), null == e && a(t, string)) {
                var i = r.getRGB(t);
                t = i.r, e = i.g, n = i.b
            }
            return(t > 1 || e > 1 || n > 1) && (t /= 255, e /= 255, n /= 255), [t, e, n]
        }, re = function (t, e, n, i) {
            t = F.round(255 * t), e = F.round(255 * e), n = F.round(255 * n);
            var o = {r: t, g: e, b: n, opacity: a(i, "finite") ? i : 1, hex: r.rgb(t, e, n), toString: ee};
            return a(i, "finite") && (o.opacity = i), o
        };
        r.color = function (t) {
            var e;
            return a(t, "object") && "h"in t && "s"in t && "b"in t ? (e = r.hsb2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : a(t, "object") && "h"in t && "s"in t && "l"in t ? (e = r.hsl2rgb(t), t.r = e.r, t.g = e.g, t.b = e.b, t.opacity = 1, t.hex = e.hex) : (a(t, "string") && (t = r.getRGB(t)), a(t, "object") && "r"in t && "g"in t && "b"in t && !("error"in t) ? (e = r.rgb2hsl(t), t.h = e.h, t.s = e.s, t.l = e.l, e = r.rgb2hsb(t), t.v = e.b) : (t = {hex: "none"}, t.r = t.g = t.b = t.h = t.s = t.v = t.l = -1, t.error = 1)), t.toString = ee, t
        }, r.hsb2rgb = function (t, e, n, r) {
            a(t, "object") && "h"in t && "s"in t && "b"in t && (n = t.b, e = t.s, t = t.h, r = t.o), t *= 360;
            var i, o, s, u, l;
            return t = t % 360 / 60, l = n * e, u = l * (1 - E(t % 2 - 1)), i = o = s = n - l, t = ~~t, i += [l, u, 0, 0, u, l][t], o += [u, l, l, u, 0, 0][t], s += [0, 0, u, l, l, u][t], re(i, o, s, r)
        }, r.hsl2rgb = function (t, e, n, r) {
            a(t, "object") && "h"in t && "s"in t && "l"in t && (n = t.l, e = t.s, t = t.h), (t > 1 || e > 1 || n > 1) && (t /= 360, e /= 100, n /= 100), t *= 360;
            var i, o, s, u, l;
            return t = t % 360 / 60, l = 2 * e * (.5 > n ? n : 1 - n), u = l * (1 - E(t % 2 - 1)), i = o = s = n - l / 2, t = ~~t, i += [l, u, 0, 0, u, l][t], o += [u, l, l, u, 0, 0][t], s += [0, 0, u, l, l, u][t], re(i, o, s, r)
        }, r.rgb2hsb = function (t, e, n) {
            n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
            var r, i, a, o;
            return a = N(t, e, n), o = a - j(t, e, n), r = 0 == o ? null : a == t ? (e - n) / o : a == e ? (n - t) / o + 2 : (t - e) / o + 4, r = (r + 360) % 6 * 60 / 360, i = 0 == o ? 0 : o / a, {h: r, s: i, b: a, toString: K}
        }, r.rgb2hsl = function (t, e, n) {
            n = ne(t, e, n), t = n[0], e = n[1], n = n[2];
            var r, i, a, o, s, u;
            return o = N(t, e, n), s = j(t, e, n), u = o - s, r = 0 == u ? null : o == t ? (e - n) / u : o == e ? (n - t) / u + 2 : (t - e) / u + 4, r = (r + 360) % 6 * 60 / 360, a = (o + s) / 2, i = 0 == u ? 0 : .5 > a ? u / (2 * a) : u / (2 - 2 * a), {h: r, s: i, l: a, toString: te}
        }, r.parsePathString = function (t) {
            if (!t)return null;
            var e = r.path(t);
            if (e.arr)return r.path.clone(e.arr);
            var n = {a: 7, c: 6, o: 2, h: 1, l: 2, m: 2, r: 4, q: 4, s: 4, t: 2, v: 1, u: 3, z: 0}, i = [];
            return a(t, "array") && a(t[0], "array") && (i = r.path.clone(t)), i.length || _(t).replace(z, function (t, e, r) {
                var a = [], o = e.toLowerCase();
                if (r.replace(U, function (t, e) {
                    e && a.push(+e)
                }), "m" == o && a.length > 2 && (i.push([e].concat(a.splice(0, 2))), o = "l", e = "m" == e ? "l" : "L"), "o" == o && 1 == a.length && i.push([e, a[0]]), "r" == o)i.push([e].concat(a)); else for (; a.length >= n[o] && (i.push([e].concat(a.splice(0, n[o]))), n[o]););
            }), i.toString = r.path.toString, e.arr = r.path.clone(i), i
        };
        var ie = r.parseTransformString = function (t) {
            if (!t)return null;
            var e = [];
            return a(t, "array") && a(t[0], "array") && (e = r.path.clone(t)), e.length || _(t).replace(I, function (t, n, r) {
                var i = [];
                n.toLowerCase(), r.replace(U, function (t, e) {
                    e && i.push(+e)
                }), e.push([n].concat(i))
            }), e.toString = r.path.toString, e
        };
        r._.svgTransform2string = h, r._.rgTransform = new RegExp("^[a-z][" + G + "]*-?\\.?\\d", "i"), r._.transform2matrix = d, r._unit2px = y, M.doc.contains || M.doc.compareDocumentPosition ? function (t, e) {
            var n = 9 == t.nodeType ? t.documentElement : t, r = e && e.parentNode;
            return t == r || !(!r || 1 != r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
        } : function (t, e) {
            if (e)for (; e;)if (e = e.parentNode, e == t)return!0;
            return!1
        }, r._.getSomeDefs = v, r._.getSomeSVG = m, r.select = function (t) {
            return k(M.doc.querySelector(t))
        }, r.selectAll = function (t) {
            for (var e = M.doc.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++)n.push(k(e[i]));
            return n
        }, setInterval(function () {
            for (var t in Z)if (Z[T](t)) {
                var e = Z[t], n = e.node;
                ("svg" != e.type && !n.ownerSVGElement || "svg" == e.type && (!n.parentNode || "ownerSVGElement"in n.parentNode && !n.ownerSVGElement)) && delete Z[t]
            }
        }, 1e4), function (t) {
            function o(t) {
                function e(t, e) {
                    var n = i(t.node, e);
                    n = n && n.match(o), n = n && n[2], n && "#" == n.charAt() && (n = n.substring(1), n && (u[n] = (u[n] || []).concat(function (n) {
                        var r = {};
                        r[e] = Q(n), i(t.node, r)
                    })))
                }

                function n(t) {
                    var e = i(t.node, "xlink:href");
                    e && "#" == e.charAt() && (e = e.substring(1), e && (u[e] = (u[e] || []).concat(function (e) {
                        t.attr("xlink:href", "#" + e)
                    })))
                }

                for (var r, a = t.selectAll("*"), o = /^\s*url\(("|'|)(.*)\1\)\s*$/, s = [], u = {}, l = 0, c = a.length; c > l; l++) {
                    r = a[l], e(r, "fill"), e(r, "stroke"), e(r, "filter"), e(r, "mask"), e(r, "clip-path"), n(r);
                    var f = i(r.node, "id");
                    f && (i(r.node, {id: r.id}), s.push({old: f, id: r.id}))
                }
                for (l = 0, c = s.length; c > l; l++) {
                    var h = u[s[l].old];
                    if (h)for (var d = 0, p = h.length; p > d; d++)h[d](s[l].id)
                }
            }

            function s(t, e, n) {
                return function (r) {
                    var i = r.slice(t, e);
                    return 1 == i.length && (i = i[0]), n ? n(i) : i
                }
            }

            function u(t) {
                return function () {
                    var e = t ? "<" + this.type : "", n = this.node.attributes, r = this.node.childNodes;
                    if (t)for (var i = 0, a = n.length; a > i; i++)e += " " + n[i].name + '="' + n[i].value.replace(/"/g, '\\"') + '"';
                    if (r.length) {
                        for (t && (e += ">"), i = 0, a = r.length; a > i; i++)3 == r[i].nodeType ? e += r[i].nodeValue : 1 == r[i].nodeType && (e += k(r[i]).toString());
                        t && (e += "</" + this.type + ">")
                    } else t && (e += "/>");
                    return e
                }
            }

            t.attr = function (t, n) {
                var r = this;
                if (r.node, !t)return r;
                if (a(t, "string")) {
                    if (!(arguments.length > 1))return e("snap.util.getattr." + t, r).firstDefined();
                    var i = {};
                    i[t] = n, t = i
                }
                for (var o in t)t[T](o) && e("snap.util.attr." + o, r, t[o]);
                return r
            }, t.getBBox = function (t) {
                if (!r.Matrix || !r.path)return this.node.getBBox();
                var e = this, n = new r.Matrix;
                if (e.removed)return r._.box();
                for (; "use" == e.type;)if (t || (n = n.add(e.transform().localMatrix.translate(e.attr("x") || 0, e.attr("y") || 0))), e.original)e = e.original; else {
                    var i = e.attr("xlink:href");
                    e = e.original = e.node.ownerDocument.getElementById(i.substring(i.indexOf("#") + 1))
                }
                var a = e._, o = r.path.get[e.type] || r.path.get.deflt;
                try {
                    return t ? (a.bboxwt = o ? r.path.getBBox(e.realPath = o(e)) : r._.box(e.node.getBBox()), r._.box(a.bboxwt)) : (e.realPath = o(e), e.matrix = e.transform().localMatrix, a.bbox = r.path.getBBox(r.path.map(e.realPath, n.add(e.matrix))), r._.box(a.bbox))
                } catch (s) {
                    return r._.box()
                }
            };
            var l = function () {
                return this.string
            };
            t.transform = function (t) {
                var e = this._;
                if (null == t) {
                    for (var n, a = this, o = new r.Matrix(this.node.getCTM()), s = p(this), u = [s], c = new r.Matrix, f = s.toTransformString(), h = _(s) == _(this.matrix) ? _(e.transform) : f; "svg" != a.type && (a = a.parent());)u.push(p(a));
                    for (n = u.length; n--;)c.add(u[n]);
                    return{string: h, globalMatrix: o, totalMatrix: c, localMatrix: s, diffMatrix: o.clone().add(s.invert()), global: o.toTransformString(), total: c.toTransformString(), local: f, toString: l}
                }
                return t instanceof r.Matrix ? this.matrix = t : p(this, t), this.node && ("linearGradient" == this.type || "radialGradient" == this.type ? i(this.node, {gradientTransform: this.matrix}) : "pattern" == this.type ? i(this.node, {patternTransform: this.matrix}) : i(this.node, {transform: this.matrix})), this
            }, t.parent = function () {
                return k(this.node.parentNode)
            }, t.append = t.add = function (t) {
                if (t) {
                    if ("set" == t.type) {
                        var e = this;
                        return t.forEach(function (t) {
                            e.add(t)
                        }), this
                    }
                    t = k(t), this.node.appendChild(t.node), t.paper = this.paper
                }
                return this
            }, t.appendTo = function (t) {
                return t && (t = k(t), t.append(this)), this
            }, t.prepend = function (t) {
                if (t) {
                    if ("set" == t.type) {
                        var e, n = this;
                        return t.forEach(function (t) {
                            e ? e.after(t) : n.prepend(t), e = t
                        }), this
                    }
                    t = k(t);
                    var r = t.parent();
                    this.node.insertBefore(t.node, this.node.firstChild), this.add && this.add(), t.paper = this.paper, this.parent() && this.parent().add(), r && r.add()
                }
                return this
            }, t.prependTo = function (t) {
                return t = k(t), t.prepend(this), this
            }, t.before = function (t) {
                if ("set" == t.type) {
                    var e = this;
                    return t.forEach(function (t) {
                        var n = t.parent();
                        e.node.parentNode.insertBefore(t.node, e.node), n && n.add()
                    }), this.parent().add(), this
                }
                t = k(t);
                var n = t.parent();
                return this.node.parentNode.insertBefore(t.node, this.node), this.parent() && this.parent().add(), n && n.add(), t.paper = this.paper, this
            }, t.after = function (t) {
                t = k(t);
                var e = t.parent();
                return this.node.nextSibling ? this.node.parentNode.insertBefore(t.node, this.node.nextSibling) : this.node.parentNode.appendChild(t.node), this.parent() && this.parent().add(), e && e.add(), t.paper = this.paper, this
            }, t.insertBefore = function (t) {
                t = k(t);
                var e = this.parent();
                return t.node.parentNode.insertBefore(this.node, t.node), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
            }, t.insertAfter = function (t) {
                t = k(t);
                var e = this.parent();
                return t.node.parentNode.insertBefore(this.node, t.node.nextSibling), this.paper = t.paper, e && e.add(), t.parent() && t.parent().add(), this
            }, t.remove = function () {
                var t = this.parent();
                return this.node.parentNode && this.node.parentNode.removeChild(this.node), delete this.paper, this.removed = !0, t && t.add(), this
            }, t.select = function (t) {
                return k(this.node.querySelector(t))
            }, t.selectAll = function (t) {
                for (var e = this.node.querySelectorAll(t), n = (r.set || Array)(), i = 0; i < e.length; i++)n.push(k(e[i]));
                return n
            }, t.asPX = function (t, e) {
                return null == e && (e = this.attr(t)), +y(this, t, e)
            }, t.use = function () {
                var t, e = this.node.id;
                return e || (e = this.id, i(this.node, {id: e})), t = "linearGradient" == this.type || "radialGradient" == this.type || "pattern" == this.type ? C(this.type, this.node.parentNode) : C("use", this.node.parentNode), i(t.node, {"xlink:href": "#" + e}), t.original = this, t
            };
            var c = /\S+/g;
            t.addClass = function (t) {
                var e, n, r, i, a = (t || "").match(c) || [], o = this.node, s = o.className.baseVal, u = s.match(c) || [];
                if (a.length) {
                    for (e = 0; r = a[e++];)n = u.indexOf(r), ~n || u.push(r);
                    i = u.join(" "), s != i && (o.className.baseVal = i)
                }
                return this
            }, t.removeClass = function (t) {
                var e, n, r, i, a = (t || "").match(c) || [], o = this.node, s = o.className.baseVal, u = s.match(c) || [];
                if (u.length) {
                    for (e = 0; r = a[e++];)n = u.indexOf(r), ~n && u.splice(n, 1);
                    i = u.join(" "), s != i && (o.className.baseVal = i)
                }
                return this
            }, t.hasClass = function (t) {
                var e = this.node, n = e.className.baseVal, r = n.match(c) || [];
                return!!~r.indexOf(t)
            }, t.toggleClass = function (t, e) {
                if (null != e)return e ? this.addClass(t) : this.removeClass(t);
                var n, r, i, a, o = (t || "").match(c) || [], s = this.node, u = s.className.baseVal, l = u.match(c) || [];
                for (n = 0; i = o[n++];)r = l.indexOf(i), ~r ? l.splice(r, 1) : l.push(i);
                return a = l.join(" "), u != a && (s.className.baseVal = a), this
            }, t.clone = function () {
                var t = k(this.node.cloneNode(!0));
                return i(t.node, "id") && i(t.node, {id: t.id}), o(t), t.insertAfter(this), t
            }, t.toDefs = function () {
                var t = v(this);
                return t.appendChild(this.node), this
            }, t.pattern = t.toPattern = function (t, e, n, r) {
                var o = C("pattern", v(this));
                return null == t && (t = this.getBBox()), a(t, "object") && "x"in t && (e = t.y, n = t.width, r = t.height, t = t.x), i(o.node, {x: t, y: e, width: n, height: r, patternUnits: "userSpaceOnUse", id: o.id, viewBox: [t, e, n, r].join(" ")}), o.node.appendChild(this.node), o
            }, t.marker = function (t, e, n, r, o, s) {
                var u = C("marker", v(this));
                return null == t && (t = this.getBBox()), a(t, "object") && "x"in t && (e = t.y, n = t.width, r = t.height, o = t.refX || t.cx, s = t.refY || t.cy, t = t.x), i(u.node, {viewBox: [t, e, n, r].join(L), markerWidth: n, markerHeight: r, orient: "auto", refX: o || 0, refY: s || 0, id: u.id}), u.node.appendChild(this.node), u
            };
            var f = function (t, e, r, i) {
                "function" != typeof r || r.length || (i = r, r = n.linear), this.attr = t, this.dur = e, r && (this.easing = r), i && (this.callback = i)
            };
            r._.Animation = f, r.animation = function (t, e, n, r) {
                return new f(t, e, n, r)
            }, t.inAnim = function () {
                var t = this, e = [];
                for (var n in t.anims)t.anims[T](n) && !function (t) {
                    e.push({anim: new f(t._attrs, t.dur, t.easing, t._callback), mina: t, curStatus: t.status(), status: function (e) {
                        return t.status(e)
                    }, stop: function () {
                        t.stop()
                    }})
                }(t.anims[n]);
                return e
            }, r.animate = function (t, r, i, a, o, s) {
                "function" != typeof o || o.length || (s = o, o = n.linear);
                var u = n.time(), l = n(t, r, u, u + a, n.time, i, o);
                return s && e.once("mina.finish." + l.id, s), l
            }, t.stop = function () {
                for (var t = this.inAnim(), e = 0, n = t.length; n > e; e++)t[e].stop();
                return this
            }, t.animate = function (t, r, i, o) {
                "function" != typeof i || i.length || (o = i, i = n.linear), t instanceof f && (o = t.callback, i = t.easing, r = i.dur, t = t.attr);
                var u, l, c, h, d = [], p = [], g = {}, v = this;
                for (var m in t)if (t[T](m)) {
                    v.equal ? (h = v.equal(m, _(t[m])), u = h.from, l = h.to, c = h.f) : (u = +v.attr(m), l = +t[m]);
                    var y = a(u, "array") ? u.length : 1;
                    g[m] = s(d.length, d.length + y, c), d = d.concat(u), p = p.concat(l)
                }
                var x = n.time(), b = n(d, p, x, x + r, n.time, function (t) {
                    var e = {};
                    for (var n in g)g[T](n) && (e[n] = g[n](t));
                    v.attr(e)
                }, i);
                return v.anims[b.id] = b, b._attrs = t, b._callback = o, e("snap.animcreated." + v.id, b), e.once("mina.finish." + b.id, function () {
                    delete v.anims[b.id], o && o.call(v)
                }), e.once("mina.stop." + b.id, function () {
                    delete v.anims[b.id]
                }), v
            };
            var h = {};
            t.data = function (t, n) {
                var i = h[this.id] = h[this.id] || {};
                if (0 == arguments.length)return e("snap.data.get." + this.id, this, i, null), i;
                if (1 == arguments.length) {
                    if (r.is(t, "object")) {
                        for (var a in t)t[T](a) && this.data(a, t[a]);
                        return this
                    }
                    return e("snap.data.get." + this.id, this, i[t], t), i[t]
                }
                return i[t] = n, e("snap.data.set." + this.id, this, n, t), this
            }, t.removeData = function (t) {
                return null == t ? h[this.id] = {} : h[this.id] && delete h[this.id][t], this
            }, t.outerSVG = t.toString = u(1), t.innerSVG = u()
        }(b.prototype), r.parse = function (t) {
            var e = M.doc.createDocumentFragment(), n = !0, r = M.doc.createElement("div");
            if (t = _(t), t.match(/^\s*<\s*svg(?:\s|>)/) || (t = "<svg>" + t + "</svg>", n = !1), r.innerHTML = t, t = r.getElementsByTagName("svg")[0])if (n)e = t; else for (; t.firstChild;)e.appendChild(t.firstChild);
            return r.innerHTML = q, new w(e)
        }, w.prototype.select = b.prototype.select, w.prototype.selectAll = b.prototype.selectAll, r.fragment = function () {
            for (var t = Array.prototype.slice.call(arguments, 0), e = M.doc.createDocumentFragment(), n = 0, i = t.length; i > n; n++) {
                var a = t[n];
                a.node && a.node.nodeType && e.appendChild(a.node), a.nodeType && e.appendChild(a), "string" == typeof a && e.appendChild(r.parse(a).node)
            }
            return new w(e)
        }, r._.make = C, r._.wrap = k, S.prototype.el = function (t, e) {
            var n = C(t, this.node);
            return e && n.attr(e), n
        }, e.on("snap.util.getattr", function () {
            var t = e.nt();
            t = t.substring(t.lastIndexOf(".") + 1);
            var n = t.replace(/[A-Z]/g, function (t) {
                return"-" + t.toLowerCase()
            });
            return ae[T](n) ? this.node.ownerDocument.defaultView.getComputedStyle(this.node, null).getPropertyValue(n) : i(this.node, t)
        });
        var ae = {"alignment-baseline": 0, "baseline-shift": 0, clip: 0, "clip-path": 0, "clip-rule": 0, color: 0, "color-interpolation": 0, "color-interpolation-filters": 0, "color-profile": 0, "color-rendering": 0, cursor: 0, direction: 0, display: 0, "dominant-baseline": 0, "enable-background": 0, fill: 0, "fill-opacity": 0, "fill-rule": 0, filter: 0, "flood-color": 0, "flood-opacity": 0, font: 0, "font-family": 0, "font-size": 0, "font-size-adjust": 0, "font-stretch": 0, "font-style": 0, "font-variant": 0, "font-weight": 0, "glyph-orientation-horizontal": 0, "glyph-orientation-vertical": 0, "image-rendering": 0, kerning: 0, "letter-spacing": 0, "lighting-color": 0, marker: 0, "marker-end": 0, "marker-mid": 0, "marker-start": 0, mask: 0, opacity: 0, overflow: 0, "pointer-events": 0, "shape-rendering": 0, "stop-color": 0, "stop-opacity": 0, stroke: 0, "stroke-dasharray": 0, "stroke-dashoffset": 0, "stroke-linecap": 0, "stroke-linejoin": 0, "stroke-miterlimit": 0, "stroke-opacity": 0, "stroke-width": 0, "text-anchor": 0, "text-decoration": 0, "text-rendering": 0, "unicode-bidi": 0, visibility: 0, "word-spacing": 0, "writing-mode": 0};
        e.on("snap.util.attr", function (t) {
            var n = e.nt(), r = {};
            n = n.substring(n.lastIndexOf(".") + 1), r[n] = t;
            var a = n.replace(/-(\w)/gi, function (t, e) {
                return e.toUpperCase()
            }), o = n.replace(/[A-Z]/g, function (t) {
                return"-" + t.toLowerCase()
            });
            ae[T](o) ? this.node.style[a] = null == t ? q : t : i(this.node, r)
        }), function () {
        }(S.prototype), r.ajax = function (t, n, r, i) {
            var o = new XMLHttpRequest, s = H();
            if (o) {
                if (a(n, "function"))i = r, r = n, n = null; else if (a(n, "object")) {
                    var u = [];
                    for (var l in n)n.hasOwnProperty(l) && u.push(encodeURIComponent(l) + "=" + encodeURIComponent(n[l]));
                    n = u.join("&")
                }
                return o.open(n ? "POST" : "GET", t, !0), n && (o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.setRequestHeader("Content-type", "application/x-www-form-urlencoded")), r && (e.once("snap.ajax." + s + ".0", r), e.once("snap.ajax." + s + ".200", r), e.once("snap.ajax." + s + ".304", r)), o.onreadystatechange = function () {
                    4 == o.readyState && e("snap.ajax." + s + "." + o.status, i, o)
                }, 4 == o.readyState ? o : (o.send(n), o)
            }
        }, r.load = function (t, e, n) {
            r.ajax(t, function (t) {
                var i = r.parse(t.responseText);
                n ? e.call(n, i) : e(i)
            })
        };
        var oe = function (t) {
            var e = t.getBoundingClientRect(), n = t.ownerDocument, r = n.body, i = n.documentElement, a = i.clientTop || r.clientTop || 0, o = i.clientLeft || r.clientLeft || 0, s = e.top + (g.win.pageYOffset || i.scrollTop || r.scrollTop) - a, u = e.left + (g.win.pageXOffset || i.scrollLeft || r.scrollLeft) - o;
            return{y: s, x: u}
        };
        return r.getElementByPoint = function (t, e) {
            var n = this, r = (n.canvas, M.doc.elementFromPoint(t, e));
            if (M.win.opera && "svg" == r.tagName) {
                var i = oe(r), a = r.createSVGRect();
                a.x = t - i.x, a.y = e - i.y, a.width = a.height = 1;
                var o = r.getIntersectionList(a, null);
                o.length && (r = o[o.length - 1])
            }
            return r ? k(r) : null
        }, r.plugin = function (t) {
            t(r, b, S, M, w)
        }, M.win.Snap = r, r
    }();
    return r.plugin(function (t) {
        function e(t, e, r, i, a, o) {
            return null == e && "[object SVGMatrix]" == n.call(t) ? (this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.e = t.e, void(this.f = t.f)) : void(null != t ? (this.a = +t, this.b = +e, this.c = +r, this.d = +i, this.e = +a, this.f = +o) : (this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.e = 0, this.f = 0))
        }

        var n = Object.prototype.toString, r = String, i = Math, a = "";
        !function (n) {
            function o(t) {
                return t[0] * t[0] + t[1] * t[1]
            }

            function s(t) {
                var e = i.sqrt(o(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e)
            }

            n.add = function (t, n, r, i, a, o) {
                var s, u, l, c, f = [
                    [],
                    [],
                    []
                ], h = [
                    [this.a, this.c, this.e],
                    [this.b, this.d, this.f],
                    [0, 0, 1]
                ], d = [
                    [t, r, a],
                    [n, i, o],
                    [0, 0, 1]
                ];
                for (t && t instanceof e && (d = [
                    [t.a, t.c, t.e],
                    [t.b, t.d, t.f],
                    [0, 0, 1]
                ]), s = 0; 3 > s; s++)for (u = 0; 3 > u; u++) {
                    for (c = 0, l = 0; 3 > l; l++)c += h[s][l] * d[l][u];
                    f[s][u] = c
                }
                return this.a = f[0][0], this.b = f[1][0], this.c = f[0][1], this.d = f[1][1], this.e = f[0][2], this.f = f[1][2], this
            }, n.invert = function () {
                var t = this, n = t.a * t.d - t.b * t.c;
                return new e(t.d / n, -t.b / n, -t.c / n, t.a / n, (t.c * t.f - t.d * t.e) / n, (t.b * t.e - t.a * t.f) / n)
            }, n.clone = function () {
                return new e(this.a, this.b, this.c, this.d, this.e, this.f)
            }, n.translate = function (t, e) {
                return this.add(1, 0, 0, 1, t, e)
            }, n.scale = function (t, e, n, r) {
                return null == e && (e = t), (n || r) && this.add(1, 0, 0, 1, n, r), this.add(t, 0, 0, e, 0, 0), (n || r) && this.add(1, 0, 0, 1, -n, -r), this
            }, n.rotate = function (e, n, r) {
                e = t.rad(e), n = n || 0, r = r || 0;
                var a = +i.cos(e).toFixed(9), o = +i.sin(e).toFixed(9);
                return this.add(a, o, -o, a, n, r), this.add(1, 0, 0, 1, -n, -r)
            }, n.x = function (t, e) {
                return t * this.a + e * this.c + this.e
            }, n.y = function (t, e) {
                return t * this.b + e * this.d + this.f
            }, n.get = function (t) {
                return+this[r.fromCharCode(97 + t)].toFixed(4)
            }, n.toString = function () {
                return"matrix(" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)].join() + ")"
            }, n.offset = function () {
                return[this.e.toFixed(4), this.f.toFixed(4)]
            }, n.determinant = function () {
                return this.a * this.d - this.b * this.c
            }, n.split = function () {
                var e = {};
                e.dx = this.e, e.dy = this.f;
                var n = [
                    [this.a, this.c],
                    [this.b, this.d]
                ];
                e.scalex = i.sqrt(o(n[0])), s(n[0]), e.shear = n[0][0] * n[1][0] + n[0][1] * n[1][1], n[1] = [n[1][0] - n[0][0] * e.shear, n[1][1] - n[0][1] * e.shear], e.scaley = i.sqrt(o(n[1])), s(n[1]), e.shear /= e.scaley, this.determinant() < 0 && (e.scalex = -e.scalex);
                var r = -n[0][1], a = n[1][1];
                return 0 > a ? (e.rotate = t.deg(i.acos(a)), 0 > r && (e.rotate = 360 - e.rotate)) : e.rotate = t.deg(i.asin(r)), e.isSimple = !(+e.shear.toFixed(9) || e.scalex.toFixed(9) != e.scaley.toFixed(9) && e.rotate), e.isSuperSimple = !+e.shear.toFixed(9) && e.scalex.toFixed(9) == e.scaley.toFixed(9) && !e.rotate, e.noRotation = !+e.shear.toFixed(9) && !e.rotate, e
            }, n.toTransformString = function (t) {
                var e = t || this.split();
                return+e.shear.toFixed(9) ? "m" + [this.get(0), this.get(1), this.get(2), this.get(3), this.get(4), this.get(5)] : (e.scalex = +e.scalex.toFixed(4), e.scaley = +e.scaley.toFixed(4), e.rotate = +e.rotate.toFixed(4), (e.dx || e.dy ? "t" + [+e.dx.toFixed(4), +e.dy.toFixed(4)] : a) + (1 != e.scalex || 1 != e.scaley ? "s" + [e.scalex, e.scaley, 0, 0] : a) + (e.rotate ? "r" + [+e.rotate.toFixed(4), 0, 0] : a))
            }
        }(e.prototype), t.Matrix = e, t.matrix = function (t, n, r, i, a, o) {
            return new e(t, n, r, i, a, o)
        }
    }), r.plugin(function (t, n, r, i, a) {
        function o(r) {
            return function (i) {
                if (e.stop(), i instanceof a && 1 == i.node.childNodes.length && ("radialGradient" == i.node.firstChild.tagName || "linearGradient" == i.node.firstChild.tagName || "pattern" == i.node.firstChild.tagName) && (i = i.node.firstChild, d(this).appendChild(i), i = f(i)), i instanceof n)if ("radialGradient" == i.type || "linearGradient" == i.type || "pattern" == i.type) {
                    i.node.id || g(i.node, {id: i.id});
                    var o = v(i.node.id)
                } else o = i.attr(r); else if (o = t.color(i), o.error) {
                    var s = t(d(this).ownerSVGElement).gradient(i);
                    s ? (s.node.id || g(s.node, {id: s.id}), o = v(s.node.id)) : o = i
                } else o = m(o);
                var u = {};
                u[r] = o, g(this.node, u), this.node.style[r] = x
            }
        }

        function s(t) {
            e.stop(), t == +t && (t += "px"), this.node.style.fontSize = t
        }

        function u(t) {
            for (var e = [], n = t.childNodes, r = 0, i = n.length; i > r; r++) {
                var a = n[r];
                3 == a.nodeType && e.push(a.nodeValue), "tspan" == a.tagName && e.push(1 == a.childNodes.length && 3 == a.firstChild.nodeType ? a.firstChild.nodeValue : u(a))
            }
            return e
        }

        function l() {
            return e.stop(), this.node.style.fontSize
        }

        var c = t._.make, f = t._.wrap, h = t.is, d = t._.getSomeDefs, p = /^url\(#?([^)]+)\)$/, g = t._.$, v = t.url, m = String, y = t._.separator, x = "";
        e.on("snap.util.attr.mask", function (t) {
            if (t instanceof n || t instanceof a) {
                if (e.stop(), t instanceof a && 1 == t.node.childNodes.length && (t = t.node.firstChild, d(this).appendChild(t), t = f(t)), "mask" == t.type)var r = t; else r = c("mask", d(this)), r.node.appendChild(t.node);
                !r.node.id && g(r.node, {id: r.id}), g(this.node, {mask: v(r.id)})
            }
        }), function (t) {
            e.on("snap.util.attr.clip", t), e.on("snap.util.attr.clip-path", t), e.on("snap.util.attr.clipPath", t)
        }(function (t) {
            if (t instanceof n || t instanceof a) {
                if (e.stop(), "clipPath" == t.type)var r = t; else r = c("clipPath", d(this)), r.node.appendChild(t.node), !r.node.id && g(r.node, {id: r.id});
                g(this.node, {"clip-path": v(r.id)})
            }
        }), e.on("snap.util.attr.fill", o("fill")), e.on("snap.util.attr.stroke", o("stroke"));
        var b = /^([lr])(?:\(([^)]*)\))?(.*)$/i;
        e.on("snap.util.grad.parse", function (t) {
            t = m(t);
            var e = t.match(b);
            if (!e)return null;
            var n = e[1], r = e[2], i = e[3];
            return r = r.split(/\s*,\s*/).map(function (t) {
                return+t == t ? +t : t
            }), 1 == r.length && 0 == r[0] && (r = []), i = i.split("-"), i = i.map(function (t) {
                t = t.split(":");
                var e = {color: t[0]};
                return t[1] && (e.offset = parseFloat(t[1])), e
            }), {type: n, params: r, stops: i}
        }), e.on("snap.util.attr.d", function (n) {
            e.stop(), h(n, "array") && h(n[0], "array") && (n = t.path.toString.call(n)), n = m(n), n.match(/[ruo]/i) && (n = t.path.toAbsolute(n)), g(this.node, {d: n})
        })(-1), e.on("snap.util.attr.#text", function (t) {
            e.stop(), t = m(t);
            for (var n = i.doc.createTextNode(t); this.node.firstChild;)this.node.removeChild(this.node.firstChild);
            this.node.appendChild(n)
        })(-1), e.on("snap.util.attr.path", function (t) {
            e.stop(), this.attr({d: t})
        })(-1), e.on("snap.util.attr.class", function (t) {
            e.stop(), this.node.className.baseVal = t
        })(-1), e.on("snap.util.attr.viewBox", function (t) {
            var n;
            n = h(t, "object") && "x"in t ? [t.x, t.y, t.width, t.height].join(" ") : h(t, "array") ? t.join(" ") : t, g(this.node, {viewBox: n}), e.stop()
        })(-1), e.on("snap.util.attr.transform", function (t) {
            this.transform(t), e.stop()
        })(-1), e.on("snap.util.attr.r", function (t) {
            "rect" == this.type && (e.stop(), g(this.node, {rx: t, ry: t}))
        })(-1), e.on("snap.util.attr.textpath", function (t) {
            if (e.stop(), "text" == this.type) {
                var r, i, a;
                if (!t && this.textPath) {
                    for (i = this.textPath; i.node.firstChild;)this.node.appendChild(i.node.firstChild);
                    return i.remove(), void delete this.textPath
                }
                if (h(t, "string")) {
                    var o = d(this), s = f(o.parentNode).path(t);
                    o.appendChild(s.node), r = s.id, s.attr({id: r})
                } else t = f(t), t instanceof n && (r = t.attr("id"), r || (r = t.id, t.attr({id: r})));
                if (r)if (i = this.textPath, a = this.node, i)i.attr({"xlink:href": "#" + r}); else {
                    for (i = g("textPath", {"xlink:href": "#" + r}); a.firstChild;)i.appendChild(a.firstChild);
                    a.appendChild(i), this.textPath = f(i)
                }
            }
        })(-1), e.on("snap.util.attr.text", function (t) {
            if ("text" == this.type) {
                for (var n = this.node, r = function (t) {
                    var e = g("tspan");
                    if (h(t, "array"))for (var n = 0; n < t.length; n++)e.appendChild(r(t[n])); else e.appendChild(i.doc.createTextNode(t));
                    return e.normalize && e.normalize(), e
                }; n.firstChild;)n.removeChild(n.firstChild);
                for (var a = r(t); a.firstChild;)n.appendChild(a.firstChild)
            }
            e.stop()
        })(-1), e.on("snap.util.attr.fontSize", s)(-1), e.on("snap.util.attr.font-size", s)(-1), e.on("snap.util.getattr.transform", function () {
            return e.stop(), this.transform()
        })(-1), e.on("snap.util.getattr.textpath", function () {
            return e.stop(), this.textPath
        })(-1), function () {
            function n(n) {
                return function () {
                    e.stop();
                    var r = i.doc.defaultView.getComputedStyle(this.node, null).getPropertyValue("marker-" + n);
                    return"none" == r ? r : t(i.doc.getElementById(r.match(p)[1]))
                }
            }

            function r(t) {
                return function (n) {
                    e.stop();
                    var r = "marker" + t.charAt(0).toUpperCase() + t.substring(1);
                    if ("" == n || !n)return void(this.node.style[r] = "none");
                    if ("marker" == n.type) {
                        var i = n.node.id;
                        return i || g(n.node, {id: n.id}), void(this.node.style[r] = v(i))
                    }
                }
            }

            e.on("snap.util.getattr.marker-end", n("end"))(-1), e.on("snap.util.getattr.markerEnd", n("end"))(-1), e.on("snap.util.getattr.marker-start", n("start"))(-1), e.on("snap.util.getattr.markerStart", n("start"))(-1), e.on("snap.util.getattr.marker-mid", n("mid"))(-1), e.on("snap.util.getattr.markerMid", n("mid"))(-1), e.on("snap.util.attr.marker-end", r("end"))(-1), e.on("snap.util.attr.markerEnd", r("end"))(-1), e.on("snap.util.attr.marker-start", r("start"))(-1), e.on("snap.util.attr.markerStart", r("start"))(-1), e.on("snap.util.attr.marker-mid", r("mid"))(-1), e.on("snap.util.attr.markerMid", r("mid"))(-1)
        }(), e.on("snap.util.getattr.r", function () {
            return"rect" == this.type && g(this.node, "rx") == g(this.node, "ry") ? (e.stop(), g(this.node, "rx")) : void 0
        })(-1), e.on("snap.util.getattr.text", function () {
            if ("text" == this.type || "tspan" == this.type) {
                e.stop();
                var t = u(this.node);
                return 1 == t.length ? t[0] : t
            }
        })(-1), e.on("snap.util.getattr.#text", function () {
            return this.node.textContent
        })(-1), e.on("snap.util.getattr.viewBox", function () {
            e.stop();
            var n = g(this.node, "viewBox");
            return n ? (n = n.split(y), t._.box(+n[0], +n[1], +n[2], +n[3])) : void 0
        })(-1), e.on("snap.util.getattr.points", function () {
            var t = g(this.node, "points");
            return e.stop(), t ? t.split(y) : void 0
        })(-1), e.on("snap.util.getattr.path", function () {
            var t = g(this.node, "d");
            return e.stop(), t
        })(-1), e.on("snap.util.getattr.class", function () {
            return this.node.className.baseVal
        })(-1), e.on("snap.util.getattr.fontSize", l)(-1), e.on("snap.util.getattr.font-size", l)(-1)
    }), r.plugin(function () {
        function t(t) {
            return t
        }

        function n(t) {
            return function (e) {
                return+e.toFixed(3) + t
            }
        }

        var r = {"+": function (t, e) {
            return t + e
        }, "-": function (t, e) {
            return t - e
        }, "/": function (t, e) {
            return t / e
        }, "*": function (t, e) {
            return t * e
        }}, i = String, a = /[a-z]+$/i, o = /^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;
        e.on("snap.util.attr", function (t) {
            var n = i(t).match(o);
            if (n) {
                var s = e.nt(), u = s.substring(s.lastIndexOf(".") + 1), l = this.attr(u), c = {};
                e.stop();
                var f = n[3] || "", h = l.match(a), d = r[n[1]];
                if (h && h == f ? t = d(parseFloat(l), +n[2]) : (l = this.asPX(u), t = d(this.asPX(u), this.asPX(u, n[2] + f))), isNaN(l) || isNaN(t))return;
                c[u] = t, this.attr(c)
            }
        })(-10), e.on("snap.util.equal", function (s, u) {
            var l = i(this.attr(s) || ""), c = i(u).match(o);
            if (c) {
                e.stop();
                var f = c[3] || "", h = l.match(a), d = r[c[1]];
                return h && h == f ? {from: parseFloat(l), to: d(parseFloat(l), +c[2]), f: n(h)} : (l = this.asPX(s), {from: l, to: d(l, this.asPX(s, c[2] + f)), f: t})
            }
        })(-10)
    }), r.plugin(function (t, n, r, i) {
        var a = r.prototype, o = t.is;
        a.rect = function (t, e, n, r, i, a) {
            var s;
            return null == a && (a = i), o(t, "object") && "[object Object]" == t ? s = t : null != t && (s = {x: t, y: e, width: n, height: r}, null != i && (s.rx = i, s.ry = a)), this.el("rect", s)
        }, a.circle = function (t, e, n) {
            var r;
            return o(t, "object") && "[object Object]" == t ? r = t : null != t && (r = {cx: t, cy: e, r: n}), this.el("circle", r)
        };
        var s = function () {
            function t() {
                this.parentNode.removeChild(this)
            }

            return function (e, n) {
                var r = i.doc.createElement("img"), a = i.doc.body;
                r.style.cssText = "position:absolute;left:-9999em;top:-9999em", r.onload = function () {
                    n.call(r), r.onload = r.onerror = null, a.removeChild(r)
                }, r.onerror = t, a.appendChild(r), r.src = e
            }
        }();
        a.image = function (e, n, r, i, a) {
            var u = this.el("image");
            if (o(e, "object") && "src"in e)u.attr(e); else if (null != e) {
                var l = {"xlink:href": e, preserveAspectRatio: "none"};
                null != n && null != r && (l.x = n, l.y = r), null != i && null != a ? (l.width = i, l.height = a) : s(e, function () {
                    t._.$(u.node, {width: this.offsetWidth, height: this.offsetHeight})
                }), t._.$(u.node, l)
            }
            return u
        }, a.ellipse = function (t, e, n, r) {
            var i;
            return o(t, "object") && "[object Object]" == t ? i = t : null != t && (i = {cx: t, cy: e, rx: n, ry: r}), this.el("ellipse", i)
        }, a.path = function (t) {
            var e;
            return o(t, "object") && !o(t, "array") ? e = t : t && (e = {d: t}), this.el("path", e)
        }, a.group = a.g = function (t) {
            var e = this.el("g");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, a.svg = function (t, e, n, r, i, a, s, u) {
            var l = {};
            return o(t, "object") && null == e ? l = t : (null != t && (l.x = t), null != e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), null != i && null != a && null != s && null != u && (l.viewBox = [i, a, s, u])), this.el("svg", l)
        }, a.mask = function (t) {
            var e = this.el("mask");
            return 1 == arguments.length && t && !t.type ? e.attr(t) : arguments.length && e.add(Array.prototype.slice.call(arguments, 0)), e
        }, a.ptrn = function (t, e, n, r, i, a, s, u) {
            if (o(t, "object"))var l = t; else arguments.length ? (l = {}, null != t && (l.x = t), null != e && (l.y = e), null != n && (l.width = n), null != r && (l.height = r), null != i && null != a && null != s && null != u && (l.viewBox = [i, a, s, u])) : l = {patternUnits: "userSpaceOnUse"};
            return this.el("pattern", l)
        }, a.use = function (t) {
            return null != t ? (make("use", this.node), t instanceof n && (t.attr("id") || t.attr({id: ID()}), t = t.attr("id")), this.el("use", {"xlink:href": t})) : n.prototype.use.call(this)
        }, a.text = function (t, e, n) {
            var r = {};
            return o(t, "object") ? r = t : null != t && (r = {x: t, y: e, text: n || ""}), this.el("text", r)
        }, a.line = function (t, e, n, r) {
            var i = {};
            return o(t, "object") ? i = t : null != t && (i = {x1: t, x2: n, y1: e, y2: r}), this.el("line", i)
        }, a.polyline = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polyline", e)
        }, a.polygon = function (t) {
            arguments.length > 1 && (t = Array.prototype.slice.call(arguments, 0));
            var e = {};
            return o(t, "object") && !o(t, "array") ? e = t : null != t && (e = {points: t}), this.el("polygon", e)
        }, function () {
            function n() {
                return this.selectAll("stop")
            }

            function r(e, n) {
                var r = l("stop"), i = {offset: +n + "%"};
                return e = t.color(e), i["stop-color"] = e.hex, e.opacity < 1 && (i["stop-opacity"] = e.opacity), l(r, i), this.node.appendChild(r), this
            }

            function i() {
                if ("linearGradient" == this.type) {
                    var e = l(this.node, "x1") || 0, n = l(this.node, "x2") || 1, r = l(this.node, "y1") || 0, i = l(this.node, "y2") || 0;
                    return t._.box(e, r, math.abs(n - e), math.abs(i - r))
                }
                var a = this.node.cx || .5, o = this.node.cy || .5, s = this.node.r || 0;
                return t._.box(a - s, o - s, 2 * s, 2 * s)
            }

            function o(t, n) {
                function r(t, e) {
                    for (var n = (e - f) / (t - h), r = h; t > r; r++)o[r].offset = +(+f + n * (r - h)).toFixed(2);
                    h = t, f = e
                }

                var i, a = e("snap.util.grad.parse", null, n).firstDefined();
                if (!a)return null;
                a.params.unshift(t), i = "l" == a.type.toLowerCase() ? s.apply(0, a.params) : u.apply(0, a.params), a.type != a.type.toLowerCase() && l(i.node, {gradientUnits: "userSpaceOnUse"});
                var o = a.stops, c = o.length, f = 0, h = 0;
                c--;
                for (var d = 0; c > d; d++)"offset"in o[d] && r(d, o[d].offset);
                for (o[c].offset = o[c].offset || 100, r(c, o[c].offset), d = 0; c >= d; d++) {
                    var p = o[d];
                    i.addStop(p.color, p.offset)
                }
                return i
            }

            function s(e, a, o, s, u) {
                var c = t._.make("linearGradient", e);
                return c.stops = n, c.addStop = r, c.getBBox = i, null != a && l(c.node, {x1: a, y1: o, x2: s, y2: u}), c
            }

            function u(e, a, o, s, u, c) {
                var f = t._.make("radialGradient", e);
                return f.stops = n, f.addStop = r, f.getBBox = i, null != a && l(f.node, {cx: a, cy: o, r: s}), null != u && null != c && l(f.node, {fx: u, fy: c}), f
            }

            var l = t._.$;
            a.gradient = function (t) {
                return o(this.defs, t)
            }, a.gradientLinear = function (t, e, n, r) {
                return s(this.defs, t, e, n, r)
            }, a.gradientRadial = function (t, e, n, r, i) {
                return u(this.defs, t, e, n, r, i)
            }, a.toString = function () {
                var e, n = this.node.ownerDocument, r = n.createDocumentFragment(), i = n.createElement("div"), a = this.node.cloneNode(!0);
                return r.appendChild(i), i.appendChild(a), t._.$(a, {xmlns: "http://www.w3.org/2000/svg"}), e = i.innerHTML, r.removeChild(r.firstChild), e
            }, a.clear = function () {
                for (var t, e = this.node.firstChild; e;)t = e.nextSibling, "defs" != e.tagName ? e.parentNode.removeChild(e) : a.clear.call({node: e}), e = t
            }
        }()
    }), r.plugin(function (t, e) {
        function n(t) {
            var e = n.ps = n.ps || {};
            return e[t] ? e[t].sleep = 100 : e[t] = {sleep: 100}, setTimeout(function () {
                for (var n in e)e[L](n) && n != t && (e[n].sleep--, !e[n].sleep && delete e[n])
            }), e[t]
        }

        function r(t, e, n, r) {
            return null == t && (t = e = n = r = 0), null == e && (e = t.y, n = t.width, r = t.height, t = t.x), {x: t, y: e, width: n, w: n, height: r, h: r, x2: t + n, y2: e + r, cx: t + n / 2, cy: e + r / 2, r1: G.min(n, r) / 2, r2: G.max(n, r) / 2, r0: G.sqrt(n * n + r * r) / 2, path: C(t, e, n, r), vb: [t, e, n, r].join(" ")}
        }

        function i() {
            return this.join(",").replace(V, "$1")
        }

        function a(t) {
            var e = q(t);
            return e.toString = i, e
        }

        function o(t, e, n, r, i, a, o, s, l) {
            return null == l ? d(t, e, n, r, i, a, o, s) : u(t, e, n, r, i, a, o, s, p(t, e, n, r, i, a, o, s, l))
        }

        function s(n, r) {
            function i(t) {
                return+(+t).toFixed(3)
            }

            return t._.cacher(function (t, a, s) {
                t instanceof e && (t = t.attr("d")), t = F(t);
                for (var l, c, f, h, d, p = "", g = {}, v = 0, m = 0, y = t.length; y > m; m++) {
                    if (f = t[m], "M" == f[0])l = +f[1], c = +f[2]; else {
                        if (h = o(l, c, f[1], f[2], f[3], f[4], f[5], f[6]), v + h > a) {
                            if (r && !g.start) {
                                if (d = o(l, c, f[1], f[2], f[3], f[4], f[5], f[6], a - v), p += ["C" + i(d.start.x), i(d.start.y), i(d.m.x), i(d.m.y), i(d.x), i(d.y)], s)return p;
                                g.start = p, p = ["M" + i(d.x), i(d.y) + "C" + i(d.n.x), i(d.n.y), i(d.end.x), i(d.end.y), i(f[5]), i(f[6])].join(), v += h, l = +f[5], c = +f[6];
                                continue
                            }
                            if (!n && !r)return d = o(l, c, f[1], f[2], f[3], f[4], f[5], f[6], a - v)
                        }
                        v += h, l = +f[5], c = +f[6]
                    }
                    p += f.shift() + f
                }
                return g.end = p, d = n ? v : r ? g : u(l, c, f[0], f[1], f[2], f[3], f[4], f[5], 1)
            }, null, t._.clone)
        }

        function u(t, e, n, r, i, a, o, s, u) {
            var l = 1 - u, c = I(l, 3), f = I(l, 2), h = u * u, d = h * u, p = c * t + 3 * f * u * n + 3 * l * u * u * i + d * o, g = c * e + 3 * f * u * r + 3 * l * u * u * a + d * s, v = t + 2 * u * (n - t) + h * (i - 2 * n + t), m = e + 2 * u * (r - e) + h * (a - 2 * r + e), y = n + 2 * u * (i - n) + h * (o - 2 * i + n), x = r + 2 * u * (a - r) + h * (s - 2 * a + r), b = l * t + u * n, w = l * e + u * r, C = l * i + u * o, S = l * a + u * s, k = 90 - 180 * G.atan2(v - y, m - x) / R;
            return{x: p, y: g, m: {x: v, y: m}, n: {x: y, y: x}, start: {x: b, y: w}, end: {x: C, y: S}, alpha: k}
        }

        function l(e, n, i, a, o, s, u, l) {
            t.is(e, "array") || (e = [e, n, i, a, o, s, u, l]);
            var c = A.apply(null, e);
            return r(c.min.x, c.min.y, c.max.x - c.min.x, c.max.y - c.min.y)
        }

        function c(t, e, n) {
            return e >= t.x && e <= t.x + t.width && n >= t.y && n <= t.y + t.height
        }

        function f(t, e) {
            return t = r(t), e = r(e), c(e, t.x, t.y) || c(e, t.x2, t.y) || c(e, t.x, t.y2) || c(e, t.x2, t.y2) || c(t, e.x, e.y) || c(t, e.x2, e.y) || c(t, e.x, e.y2) || c(t, e.x2, e.y2) || (t.x < e.x2 && t.x > e.x || e.x < t.x2 && e.x > t.x) && (t.y < e.y2 && t.y > e.y || e.y < t.y2 && e.y > t.y)
        }

        function h(t, e, n, r, i) {
            var a = -3 * e + 9 * n - 9 * r + 3 * i, o = t * a + 6 * e - 12 * n + 6 * r;
            return t * o - 3 * e + 3 * n
        }

        function d(t, e, n, r, i, a, o, s, u) {
            null == u && (u = 1), u = u > 1 ? 1 : 0 > u ? 0 : u;
            for (var l = u / 2, c = 12, f = [-.1252, .1252, -.3678, .3678, -.5873, .5873, -.7699, .7699, -.9041, .9041, -.9816, .9816], d = [.2491, .2491, .2335, .2335, .2032, .2032, .1601, .1601, .1069, .1069, .0472, .0472], p = 0, g = 0; c > g; g++) {
                var v = l * f[g] + l, m = h(v, t, n, i, o), y = h(v, e, r, a, s), x = m * m + y * y;
                p += d[g] * G.sqrt(x)
            }
            return l * p
        }

        function p(t, e, n, r, i, a, o, s, u) {
            if (!(0 > u || d(t, e, n, r, i, a, o, s) < u)) {
                var l, c = 1, f = c / 2, h = c - f, p = .01;
                for (l = d(t, e, n, r, i, a, o, s, h); U(l - u) > p;)f /= 2, h += (u > l ? 1 : -1) * f, l = d(t, e, n, r, i, a, o, s, h);
                return h
            }
        }

        function g(t, e, n, r, i, a, o, s) {
            if (!(z(t, n) < O(i, o) || O(t, n) > z(i, o) || z(e, r) < O(a, s) || O(e, r) > z(a, s))) {
                var u = (t * r - e * n) * (i - o) - (t - n) * (i * s - a * o), l = (t * r - e * n) * (a - s) - (e - r) * (i * s - a * o), c = (t - n) * (a - s) - (e - r) * (i - o);
                if (c) {
                    var f = u / c, h = l / c, d = +f.toFixed(2), p = +h.toFixed(2);
                    if (!(d < +O(t, n).toFixed(2) || d > +z(t, n).toFixed(2) || d < +O(i, o).toFixed(2) || d > +z(i, o).toFixed(2) || p < +O(e, r).toFixed(2) || p > +z(e, r).toFixed(2) || p < +O(a, s).toFixed(2) || p > +z(a, s).toFixed(2)))return{x: f, y: h}
                }
            }
        }

        function v(t, e, n) {
            var r = l(t), i = l(e);
            if (!f(r, i))return n ? 0 : [];
            for (var a = d.apply(0, t), o = d.apply(0, e), s = ~~(a / 8), c = ~~(o / 8), h = [], p = [], v = {}, m = n ? 0 : [], y = 0; s + 1 > y; y++) {
                var x = u.apply(0, t.concat(y / s));
                h.push({x: x.x, y: x.y, t: y / s})
            }
            for (y = 0; c + 1 > y; y++)x = u.apply(0, e.concat(y / c)), p.push({x: x.x, y: x.y, t: y / c});
            for (y = 0; s > y; y++)for (var b = 0; c > b; b++) {
                var w = h[y], C = h[y + 1], S = p[b], k = p[b + 1], M = U(C.x - w.x) < .001 ? "y" : "x", T = U(k.x - S.x) < .001 ? "y" : "x", _ = g(w.x, w.y, C.x, C.y, S.x, S.y, k.x, k.y);
                if (_) {
                    if (v[_.x.toFixed(4)] == _.y.toFixed(4))continue;
                    v[_.x.toFixed(4)] = _.y.toFixed(4);
                    var B = w.t + U((_[M] - w[M]) / (C[M] - w[M])) * (C.t - w.t), A = S.t + U((_[T] - S[T]) / (k[T] - S[T])) * (k.t - S.t);
                    B >= 0 && 1 >= B && A >= 0 && 1 >= A && (n ? m++ : m.push({x: _.x, y: _.y, t1: B, t2: A}))
                }
            }
            return m
        }

        function m(t, e) {
            return x(t, e)
        }

        function y(t, e) {
            return x(t, e, 1)
        }

        function x(t, e, n) {
            t = F(t), e = F(e);
            for (var r, i, a, o, s, u, l, c, f, h, d = n ? 0 : [], p = 0, g = t.length; g > p; p++) {
                var m = t[p];
                if ("M" == m[0])r = s = m[1], i = u = m[2]; else {
                    "C" == m[0] ? (f = [r, i].concat(m.slice(1)), r = f[6], i = f[7]) : (f = [r, i, r, i, s, u, s, u], r = s, i = u);
                    for (var y = 0, x = e.length; x > y; y++) {
                        var b = e[y];
                        if ("M" == b[0])a = l = b[1], o = c = b[2]; else {
                            "C" == b[0] ? (h = [a, o].concat(b.slice(1)), a = h[6], o = h[7]) : (h = [a, o, a, o, l, c, l, c], a = l, o = c);
                            var w = v(f, h, n);
                            if (n)d += w; else {
                                for (var C = 0, S = w.length; S > C; C++)w[C].segment1 = p, w[C].segment2 = y, w[C].bez1 = f, w[C].bez2 = h;
                                d = d.concat(w)
                            }
                        }
                    }
                }
            }
            return d
        }

        function b(t, e, n) {
            var r = w(t);
            return c(r, e, n) && x(t, [
                ["M", e, n],
                ["H", r.x2 + 10]
            ], 1) % 2 == 1
        }

        function w(t) {
            var e = n(t);
            if (e.bbox)return q(e.bbox);
            if (!t)return r();
            t = F(t);
            for (var i, a = 0, o = 0, s = [], u = [], l = 0, c = t.length; c > l; l++)if (i = t[l], "M" == i[0])a = i[1], o = i[2], s.push(a), u.push(o); else {
                var f = A(a, o, i[1], i[2], i[3], i[4], i[5], i[6]);
                s = s.concat(f.min.x, f.max.x), u = u.concat(f.min.y, f.max.y), a = i[5], o = i[6]
            }
            var h = O.apply(0, s), d = O.apply(0, u), p = z.apply(0, s), g = z.apply(0, u), v = r(h, d, p - h, g - d);
            return e.bbox = q(v), v
        }

        function C(t, e, n, r, a) {
            if (a)return[
                ["M", +t + +a, e],
                ["l", n - 2 * a, 0],
                ["a", a, a, 0, 0, 1, a, a],
                ["l", 0, r - 2 * a],
                ["a", a, a, 0, 0, 1, -a, a],
                ["l", 2 * a - n, 0],
                ["a", a, a, 0, 0, 1, -a, -a],
                ["l", 0, 2 * a - r],
                ["a", a, a, 0, 0, 1, a, -a],
                ["z"]
            ];
            var o = [
                ["M", t, e],
                ["l", n, 0],
                ["l", 0, r],
                ["l", -n, 0],
                ["z"]
            ];
            return o.toString = i, o
        }

        function S(t, e, n, r, a) {
            if (null == a && null == r && (r = n), t = +t, e = +e, n = +n, r = +r, null != a)var o = Math.PI / 180, s = t + n * Math.cos(-r * o), u = t + n * Math.cos(-a * o), l = e + n * Math.sin(-r * o), c = e + n * Math.sin(-a * o), f = [
                ["M", s, l],
                ["A", n, n, 0, +(a - r > 180), 0, u, c]
            ]; else f = [
                ["M", t, e],
                ["m", 0, -r],
                ["a", n, r, 0, 1, 1, 0, 2 * r],
                ["a", n, r, 0, 1, 1, 0, -2 * r],
                ["z"]
            ];
            return f.toString = i, f
        }

        function k(e) {
            var r = n(e), o = String.prototype.toLowerCase;
            if (r.rel)return a(r.rel);
            t.is(e, "array") && t.is(e && e[0], "array") || (e = t.parsePathString(e));
            var s = [], u = 0, l = 0, c = 0, f = 0, h = 0;
            "M" == e[0][0] && (u = e[0][1], l = e[0][2], c = u, f = l, h++, s.push(["M", u, l]));
            for (var d = h, p = e.length; p > d; d++) {
                var g = s[d] = [], v = e[d];
                if (v[0] != o.call(v[0]))switch (g[0] = o.call(v[0]), g[0]) {
                    case"a":
                        g[1] = v[1], g[2] = v[2], g[3] = v[3], g[4] = v[4], g[5] = v[5], g[6] = +(v[6] - u).toFixed(3), g[7] = +(v[7] - l).toFixed(3);
                        break;
                    case"v":
                        g[1] = +(v[1] - l).toFixed(3);
                        break;
                    case"m":
                        c = v[1], f = v[2];
                    default:
                        for (var m = 1, y = v.length; y > m; m++)g[m] = +(v[m] - (m % 2 ? u : l)).toFixed(3)
                } else {
                    g = s[d] = [], "m" == v[0] && (c = v[1] + u, f = v[2] + l);
                    for (var x = 0, b = v.length; b > x; x++)s[d][x] = v[x]
                }
                var w = s[d].length;
                switch (s[d][0]) {
                    case"z":
                        u = c, l = f;
                        break;
                    case"h":
                        u += +s[d][w - 1];
                        break;
                    case"v":
                        l += +s[d][w - 1];
                        break;
                    default:
                        u += +s[d][w - 2], l += +s[d][w - 1]
                }
            }
            return s.toString = i, r.rel = a(s), s
        }

        function M(e) {
            var r = n(e);
            if (r.abs)return a(r.abs);
            if (P(e, "array") && P(e && e[0], "array") || (e = t.parsePathString(e)), !e || !e.length)return[
                ["M", 0, 0]
            ];
            var o, s = [], u = 0, l = 0, c = 0, f = 0, h = 0;
            "M" == e[0][0] && (u = +e[0][1], l = +e[0][2], c = u, f = l, h++, s[0] = ["M", u, l]);
            for (var d, p, g = 3 == e.length && "M" == e[0][0] && "R" == e[1][0].toUpperCase() && "Z" == e[2][0].toUpperCase(), v = h, m = e.length; m > v; v++) {
                if (s.push(d = []), p = e[v], o = p[0], o != o.toUpperCase())switch (d[0] = o.toUpperCase(), d[0]) {
                    case"A":
                        d[1] = p[1], d[2] = p[2], d[3] = p[3], d[4] = p[4], d[5] = p[5], d[6] = +p[6] + u, d[7] = +p[7] + l;
                        break;
                    case"V":
                        d[1] = +p[1] + l;
                        break;
                    case"H":
                        d[1] = +p[1] + u;
                        break;
                    case"R":
                        for (var y = [u, l].concat(p.slice(1)), x = 2, b = y.length; b > x; x++)y[x] = +y[x] + u, y[++x] = +y[x] + l;
                        s.pop(), s = s.concat(j(y, g));
                        break;
                    case"O":
                        s.pop(), y = S(u, l, p[1], p[2]), y.push(y[0]), s = s.concat(y);
                        break;
                    case"U":
                        s.pop(), s = s.concat(S(u, l, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2));
                        break;
                    case"M":
                        c = +p[1] + u, f = +p[2] + l;
                    default:
                        for (x = 1, b = p.length; b > x; x++)d[x] = +p[x] + (x % 2 ? u : l)
                } else if ("R" == o)y = [u, l].concat(p.slice(1)), s.pop(), s = s.concat(j(y, g)), d = ["R"].concat(p.slice(-2)); else if ("O" == o)s.pop(), y = S(u, l, p[1], p[2]), y.push(y[0]), s = s.concat(y); else if ("U" == o)s.pop(), s = s.concat(S(u, l, p[1], p[2], p[3])), d = ["U"].concat(s[s.length - 1].slice(-2)); else for (var w = 0, C = p.length; C > w; w++)d[w] = p[w];
                if (o = o.toUpperCase(), "O" != o)switch (d[0]) {
                    case"Z":
                        u = +c, l = +f;
                        break;
                    case"H":
                        u = d[1];
                        break;
                    case"V":
                        l = d[1];
                        break;
                    case"M":
                        c = d[d.length - 2], f = d[d.length - 1];
                    default:
                        u = d[d.length - 2], l = d[d.length - 1]
                }
            }
            return s.toString = i, r.abs = a(s), s
        }

        function T(t, e, n, r) {
            return[t, e, n, r, n, r]
        }

        function _(t, e, n, r, i, a) {
            var o = 1 / 3, s = 2 / 3;
            return[o * t + s * n, o * e + s * r, o * i + s * n, o * a + s * r, i, a]
        }

        function B(e, n, r, i, a, o, s, u, l, c) {
            var f, h = 120 * R / 180, d = R / 180 * (+a || 0), p = [], g = t._.cacher(function (t, e, n) {
                var r = t * G.cos(n) - e * G.sin(n), i = t * G.sin(n) + e * G.cos(n);
                return{x: r, y: i}
            });
            if (c)k = c[0], M = c[1], C = c[2], S = c[3]; else {
                f = g(e, n, -d), e = f.x, n = f.y, f = g(u, l, -d), u = f.x, l = f.y;
                var v = (G.cos(R / 180 * a), G.sin(R / 180 * a), (e - u) / 2), m = (n - l) / 2, y = v * v / (r * r) + m * m / (i * i);
                y > 1 && (y = G.sqrt(y), r = y * r, i = y * i);
                var x = r * r, b = i * i, w = (o == s ? -1 : 1) * G.sqrt(U((x * b - x * m * m - b * v * v) / (x * m * m + b * v * v))), C = w * r * m / i + (e + u) / 2, S = w * -i * v / r + (n + l) / 2, k = G.asin(((n - S) / i).toFixed(9)), M = G.asin(((l - S) / i).toFixed(9));
                k = C > e ? R - k : k, M = C > u ? R - M : M, 0 > k && (k = 2 * R + k), 0 > M && (M = 2 * R + M), s && k > M && (k -= 2 * R), !s && M > k && (M -= 2 * R)
            }
            var T = M - k;
            if (U(T) > h) {
                var _ = M, A = u, F = l;
                M = k + h * (s && M > k ? 1 : -1), u = C + r * G.cos(M), l = S + i * G.sin(M), p = B(u, l, r, i, a, 0, s, A, F, [M, _, C, S])
            }
            T = M - k;
            var N = G.cos(k), j = G.sin(k), E = G.cos(M), P = G.sin(M), q = G.tan(T / 4), L = 4 / 3 * r * q, V = 4 / 3 * i * q, D = [e, n], O = [e + L * j, n - V * N], z = [u + L * P, l - V * E], I = [u, l];
            if (O[0] = 2 * D[0] - O[0], O[1] = 2 * D[1] - O[1], c)return[O, z, I].concat(p);
            p = [O, z, I].concat(p).join().split(",");
            for (var X = [], $ = 0, H = p.length; H > $; $++)X[$] = $ % 2 ? g(p[$ - 1], p[$], d).y : g(p[$], p[$ + 1], d).x;
            return X
        }

        function A(t, e, n, r, i, a, o, s) {
            for (var u, l, c, f, h, d, p, g, v = [], m = [
                [],
                []
            ], y = 0; 2 > y; ++y)if (0 == y ? (l = 6 * t - 12 * n + 6 * i, u = -3 * t + 9 * n - 9 * i + 3 * o, c = 3 * n - 3 * t) : (l = 6 * e - 12 * r + 6 * a, u = -3 * e + 9 * r - 9 * a + 3 * s, c = 3 * r - 3 * e), U(u) < 1e-12) {
                if (U(l) < 1e-12)continue;
                f = -c / l, f > 0 && 1 > f && v.push(f)
            } else p = l * l - 4 * c * u, g = G.sqrt(p), 0 > p || (h = (-l + g) / (2 * u), h > 0 && 1 > h && v.push(h), d = (-l - g) / (2 * u), d > 0 && 1 > d && v.push(d));
            for (var x, b = v.length, w = b; b--;)f = v[b], x = 1 - f, m[0][b] = x * x * x * t + 3 * x * x * f * n + 3 * x * f * f * i + f * f * f * o, m[1][b] = x * x * x * e + 3 * x * x * f * r + 3 * x * f * f * a + f * f * f * s;
            return m[0][w] = t, m[1][w] = e, m[0][w + 1] = o, m[1][w + 1] = s, m[0].length = m[1].length = w + 2, {min: {x: O.apply(0, m[0]), y: O.apply(0, m[1])}, max: {x: z.apply(0, m[0]), y: z.apply(0, m[1])}}
        }

        function F(t, e) {
            var r = !e && n(t);
            if (!e && r.curve)return a(r.curve);
            for (var i = M(t), o = e && M(e), s = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, u = {x: 0, y: 0, bx: 0, by: 0, X: 0, Y: 0, qx: null, qy: null}, l = (function (t, e, n) {
                var r, i;
                if (!t)return["C", e.x, e.y, e.x, e.y, e.x, e.y];
                switch (!(t[0]in{T: 1, Q: 1}) && (e.qx = e.qy = null), t[0]) {
                    case"M":
                        e.X = t[1], e.Y = t[2];
                        break;
                    case"A":
                        t = ["C"].concat(B.apply(0, [e.x, e.y].concat(t.slice(1))));
                        break;
                    case"S":
                        "C" == n || "S" == n ? (r = 2 * e.x - e.bx, i = 2 * e.y - e.by) : (r = e.x, i = e.y), t = ["C", r, i].concat(t.slice(1));
                        break;
                    case"T":
                        "Q" == n || "T" == n ? (e.qx = 2 * e.x - e.qx, e.qy = 2 * e.y - e.qy) : (e.qx = e.x, e.qy = e.y), t = ["C"].concat(_(e.x, e.y, e.qx, e.qy, t[1], t[2]));
                        break;
                    case"Q":
                        e.qx = t[1], e.qy = t[2], t = ["C"].concat(_(e.x, e.y, t[1], t[2], t[3], t[4]));
                        break;
                    case"L":
                        t = ["C"].concat(T(e.x, e.y, t[1], t[2]));
                        break;
                    case"H":
                        t = ["C"].concat(T(e.x, e.y, t[1], e.y));
                        break;
                    case"V":
                        t = ["C"].concat(T(e.x, e.y, e.x, t[1]));
                        break;
                    case"Z":
                        t = ["C"].concat(T(e.x, e.y, e.X, e.Y))
                }
                return t
            }), c = function (t, e) {
                if (t[e].length > 7) {
                    t[e].shift();
                    for (var n = t[e]; n.length;)h[e] = "A", o && (d[e] = "A"), t.splice(e++, 0, ["C"].concat(n.splice(0, 6)));
                    t.splice(e, 1), m = z(i.length, o && o.length || 0)
                }
            }, f = function (t, e, n, r, a) {
                t && e && "M" == t[a][0] && "M" != e[a][0] && (e.splice(a, 0, ["M", r.x, r.y]), n.bx = 0, n.by = 0, n.x = t[a][1], n.y = t[a][2], m = z(i.length, o && o.length || 0))
            }, h = [], d = [], p = "", g = "", v = 0, m = z(i.length, o && o.length || 0); m > v; v++) {
                i[v] && (p = i[v][0]), "C" != p && (h[v] = p, v && (g = h[v - 1])), i[v] = l(i[v], s, g), "A" != h[v] && "C" == p && (h[v] = "C"), c(i, v), o && (o[v] && (p = o[v][0]), "C" != p && (d[v] = p, v && (g = d[v - 1])), o[v] = l(o[v], u, g), "A" != d[v] && "C" == p && (d[v] = "C"), c(o, v)), f(i, o, s, u, v), f(o, i, u, s, v);
                var y = i[v], x = o && o[v], b = y.length, w = o && x.length;
                s.x = y[b - 2], s.y = y[b - 1], s.bx = D(y[b - 4]) || s.x, s.by = D(y[b - 3]) || s.y, u.bx = o && (D(x[w - 4]) || u.x), u.by = o && (D(x[w - 3]) || u.y), u.x = o && x[w - 2], u.y = o && x[w - 1]
            }
            return o || (r.curve = a(i)), o ? [i, o] : i
        }

        function N(t, e) {
            if (!e)return t;
            var n, r, i, a, o, s, u;
            for (t = F(t), i = 0, o = t.length; o > i; i++)for (u = t[i], a = 1, s = u.length; s > a; a += 2)n = e.x(u[a], u[a + 1]), r = e.y(u[a], u[a + 1]), u[a] = n, u[a + 1] = r;
            return t
        }

        function j(t, e) {
            for (var n = [], r = 0, i = t.length; i - 2 * !e > r; r += 2) {
                var a = [
                    {x: +t[r - 2], y: +t[r - 1]},
                    {x: +t[r], y: +t[r + 1]},
                    {x: +t[r + 2], y: +t[r + 3]},
                    {x: +t[r + 4], y: +t[r + 5]}
                ];
                e ? r ? i - 4 == r ? a[3] = {x: +t[0], y: +t[1]} : i - 2 == r && (a[2] = {x: +t[0], y: +t[1]}, a[3] = {x: +t[2], y: +t[3]}) : a[0] = {x: +t[i - 2], y: +t[i - 1]} : i - 4 == r ? a[3] = a[2] : r || (a[0] = {x: +t[r], y: +t[r + 1]}), n.push(["C", (-a[0].x + 6 * a[1].x + a[2].x) / 6, (-a[0].y + 6 * a[1].y + a[2].y) / 6, (a[1].x + 6 * a[2].x - a[3].x) / 6, (a[1].y + 6 * a[2].y - a[3].y) / 6, a[2].x, a[2].y])
            }
            return n
        }

        var E = e.prototype, P = t.is, q = t._.clone, L = "hasOwnProperty", V = /,?([a-z]),?/gi, D = parseFloat, G = Math, R = G.PI, O = G.min, z = G.max, I = G.pow, U = G.abs, X = s(1), $ = s(), H = s(0, 1), Y = t._unit2px, W = {path: function (t) {
            return t.attr("path")
        }, circle: function (t) {
            var e = Y(t);
            return S(e.cx, e.cy, e.r)
        }, ellipse: function (t) {
            var e = Y(t);
            return S(e.cx || 0, e.cy || 0, e.rx, e.ry)
        }, rect: function (t) {
            var e = Y(t);
            return C(e.x || 0, e.y || 0, e.width, e.height, e.rx, e.ry)
        }, image: function (t) {
            var e = Y(t);
            return C(e.x || 0, e.y || 0, e.width, e.height)
        }, line: function (t) {
            return"M" + [t.attr("x1") || 0, t.attr("y1") || 0, t.attr("x2"), t.attr("y2")]
        }, polyline: function (t) {
            return"M" + t.attr("points")
        }, polygon: function (t) {
            return"M" + t.attr("points") + "z"
        }, deflt: function (t) {
            var e = t.node.getBBox();
            return C(e.x, e.y, e.width, e.height)
        }};
        t.path = n, t.path.getTotalLength = X, t.path.getPointAtLength = $, t.path.getSubpath = function (t, e, n) {
            if (this.getTotalLength(t) - n < 1e-6)return H(t, e).end;
            var r = H(t, n, 1);
            return e ? H(r, e).end : r
        }, E.getTotalLength = function () {
            return this.node.getTotalLength ? this.node.getTotalLength() : void 0
        }, E.getPointAtLength = function (t) {
            return $(this.attr("d"), t)
        }, E.getSubpath = function (e, n) {
            return t.path.getSubpath(this.attr("d"), e, n)
        }, t._.box = r, t.path.findDotsAtSegment = u, t.path.bezierBBox = l, t.path.isPointInsideBBox = c, t.path.isBBoxIntersect = f, t.path.intersection = m, t.path.intersectionNumber = y, t.path.isPointInside = b, t.path.getBBox = w, t.path.get = W, t.path.toRelative = k, t.path.toAbsolute = M, t.path.toCubic = F, t.path.map = N, t.path.toString = i, t.path.clone = a
    }), r.plugin(function (t) {
        var r = Math.max, i = Math.min, a = function (t) {
            if (this.items = [], this.bindings = {}, this.length = 0, this.type = "set", t)for (var e = 0, n = t.length; n > e; e++)t[e] && (this[this.items.length] = this.items[this.items.length] = t[e], this.length++)
        }, o = a.prototype;
        o.push = function () {
            for (var t, e, n = 0, r = arguments.length; r > n; n++)t = arguments[n], t && (e = this.items.length, this[e] = this.items[e] = t, this.length++);
            return this
        }, o.pop = function () {
            return this.length && delete this[this.length--], this.items.pop()
        }, o.forEach = function (t, e) {
            for (var n = 0, r = this.items.length; r > n; n++)if (t.call(e, this.items[n], n) === !1)return this;
            return this
        }, o.animate = function (r, i, a, o) {
            "function" != typeof a || a.length || (o = a, a = n.linear), r instanceof t._.Animation && (o = r.callback, a = r.easing, i = a.dur, r = r.attr);
            var s = arguments;
            if (t.is(r, "array") && t.is(s[s.length - 1], "array"))var u = !0;
            var l, c = function () {
                l ? this.b = l : l = this.b
            }, f = 0, h = o && function () {
                f++ == this.length && o.call(this)
            };
            return this.forEach(function (t, n) {
                e.once("snap.animcreated." + t.id, c), u ? s[n] && t.animate.apply(t, s[n]) : t.animate(r, i, a, h)
            })
        }, o.remove = function () {
            for (; this.length;)this.pop().remove();
            return this
        }, o.bind = function (t, e, n) {
            var r = {};
            if ("function" == typeof e)this.bindings[t] = e; else {
                var i = n || t;
                this.bindings[t] = function (t) {
                    r[i] = t, e.attr(r)
                }
            }
            return this
        }, o.attr = function (t) {
            var e = {};
            for (var n in t)this.bindings[n] ? this.bindings[n](t[n]) : e[n] = t[n];
            for (var r = 0, i = this.items.length; i > r; r++)this.items[r].attr(e);
            return this
        }, o.clear = function () {
            for (; this.length;)this.pop()
        }, o.splice = function (t, e) {
            t = 0 > t ? r(this.length + t, 0) : t, e = r(0, i(this.length - t, e));
            var n, o = [], s = [], u = [];
            for (n = 2; n < arguments.length; n++)u.push(arguments[n]);
            for (n = 0; e > n; n++)s.push(this[t + n]);
            for (; n < this.length - t; n++)o.push(this[t + n]);
            var l = u.length;
            for (n = 0; n < l + o.length; n++)this.items[t + n] = this[t + n] = l > n ? u[n] : o[n - l];
            for (n = this.items.length = this.length -= e - l; this[n];)delete this[n++];
            return new a(s)
        }, o.exclude = function (t) {
            for (var e = 0, n = this.length; n > e; e++)if (this[e] == t)return this.splice(e, 1), !0;
            return!1
        }, o.insertAfter = function (t) {
            for (var e = this.items.length; e--;)this.items[e].insertAfter(t);
            return this
        }, o.getBBox = function () {
            for (var t = [], e = [], n = [], a = [], o = this.items.length; o--;)if (!this.items[o].removed) {
                var s = this.items[o].getBBox();
                t.push(s.x), e.push(s.y), n.push(s.x + s.width), a.push(s.y + s.height)
            }
            return t = i.apply(0, t), e = i.apply(0, e), n = r.apply(0, n), a = r.apply(0, a), {x: t, y: e, x2: n, y2: a, width: n - t, height: a - e, cx: t + (n - t) / 2, cy: e + (a - e) / 2}
        }, o.clone = function (t) {
            t = new a;
            for (var e = 0, n = this.items.length; n > e; e++)t.push(this.items[e].clone());
            return t
        }, o.toString = function () {
            return"Snap‘s set"
        }, o.type = "set", t.set = function () {
            var t = new a;
            return arguments.length && t.push.apply(t, Array.prototype.slice.call(arguments, 0)), t
        }
    }), r.plugin(function (t, n) {
        function r(t) {
            var e = t[0];
            switch (e.toLowerCase()) {
                case"t":
                    return[e, 0, 0];
                case"m":
                    return[e, 1, 0, 0, 1, 0, 0];
                case"r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                case"s":
                    return 5 == t.length ? [e, 1, 1, t[3], t[4]] : 3 == t.length ? [e, 1, 1] : [e, 1]
            }
        }

        function i(e, n, i) {
            n = h(n).replace(/\.{3}|\u2026/g, e), e = t.parseTransformString(e) || [], n = t.parseTransformString(n) || [];
            for (var a, o, s, c, f = Math.max(e.length, n.length), d = [], p = [], g = 0; f > g; g++) {
                if (s = e[g] || r(n[g]), c = n[g] || r(s), s[0] != c[0] || "r" == s[0].toLowerCase() && (s[2] != c[2] || s[3] != c[3]) || "s" == s[0].toLowerCase() && (s[3] != c[3] || s[4] != c[4])) {
                    e = t._.transform2matrix(e, i()), n = t._.transform2matrix(n, i()), d = [
                        ["m", e.a, e.b, e.c, e.d, e.e, e.f]
                    ], p = [
                        ["m", n.a, n.b, n.c, n.d, n.e, n.f]
                    ];
                    break
                }
                for (d[g] = [], p[g] = [], a = 0, o = Math.max(s.length, c.length); o > a; a++)a in s && (d[g][a] = s[a]), a in c && (p[g][a] = c[a])
            }
            return{from: l(d), to: l(p), f: u(d)}
        }

        function a(t) {
            return t
        }

        function o(t) {
            return function (e) {
                return+e.toFixed(3) + t
            }
        }

        function s(e) {
            return t.rgb(e[0], e[1], e[2])
        }

        function u(t) {
            var e, n, r, i, a, o, s = 0, u = [];
            for (e = 0, n = t.length; n > e; e++) {
                for (a = "[", o = ['"' + t[e][0] + '"'], r = 1, i = t[e].length; i > r; r++)o[r] = "val[" + s++ + "]";
                a += o + "]", u[e] = a
            }
            return Function("val", "return Snap.path.toString.call([" + u + "])")
        }

        function l(t) {
            for (var e = [], n = 0, r = t.length; r > n; n++)for (var i = 1, a = t[n].length; a > i; i++)e.push(t[n][i]);
            return e
        }

        var c = {}, f = /[a-z]+$/i, h = String;
        c.stroke = c.fill = "colour", n.prototype.equal = function (t, n) {
            return e("snap.util.equal", this, t, n).firstDefined()
        }, e.on("snap.util.equal", function (e, n) {
            var r, d, p = h(this.attr(e) || ""), g = this;
            if (p == +p && n == +n)return{from: +p, to: +n, f: a};
            if ("colour" == c[e])return r = t.color(p), d = t.color(n), {from: [r.r, r.g, r.b, r.opacity], to: [d.r, d.g, d.b, d.opacity], f: s};
            if ("transform" == e || "gradientTransform" == e || "patternTransform" == e)return n instanceof t.Matrix && (n = n.toTransformString()), t._.rgTransform.test(n) || (n = t._.svgTransform2string(n)), i(p, n, function () {
                return g.getBBox(1)
            });
            if ("d" == e || "path" == e)return r = t.path.toCubic(p, n), {from: l(r[0]), to: l(r[1]), f: u(r[0])};
            if ("points" == e)return r = h(p).split(t._.separator), d = h(n).split(t._.separator), {from: r, to: d, f: function (t) {
                return t
            }};
            aUnit = p.match(f);
            var v = h(n).match(f);
            return aUnit && aUnit == v ? {from: parseFloat(p), to: parseFloat(n), f: o(aUnit)} : {from: this.asPX(e), to: this.asPX(e, n), f: a}
        })
    }), r.plugin(function (t, n, r, i) {
        for (var a = n.prototype, o = "hasOwnProperty", s = ("createTouch"in i.doc), u = ["click", "dblclick", "mousedown", "mousemove", "mouseout", "mouseover", "mouseup", "touchstart", "touchmove", "touchend", "touchcancel"], l = {mousedown: "touchstart", mousemove: "touchmove", mouseup: "touchend"}, c = (function (t, e) {
            var n = "y" == t ? "scrollTop" : "scrollLeft", r = e && e.node ? e.node.ownerDocument : i.doc;
            return r[n in r.documentElement ? "documentElement" : "body"][n]
        }), f = function () {
            this.returnValue = !1
        }, h = function () {
            return this.originalEvent.preventDefault()
        }, d = function () {
            this.cancelBubble = !0
        }, p = function () {
            return this.originalEvent.stopPropagation()
        }, g = function () {
            return i.doc.addEventListener ? function (t, e, n, r) {
                var i = s && l[e] ? l[e] : e, a = function (i) {
                    var a = c("y", r), u = c("x", r);
                    if (s && l[o](e))for (var f = 0, d = i.targetTouches && i.targetTouches.length; d > f; f++)if (i.targetTouches[f].target == t || t.contains(i.targetTouches[f].target)) {
                        var g = i;
                        i = i.targetTouches[f], i.originalEvent = g, i.preventDefault = h, i.stopPropagation = p;
                        break
                    }
                    var v = i.clientX + u, m = i.clientY + a;
                    return n.call(r, i, v, m)
                };
                return e !== i && t.addEventListener(e, a, !1), t.addEventListener(i, a, !1), function () {
                    return e !== i && t.removeEventListener(e, a, !1), t.removeEventListener(i, a, !1), !0
                }
            } : i.doc.attachEvent ? function (t, e, n, r) {
                var i = function (t) {
                    t = t || r.node.ownerDocument.window.event;
                    var e = c("y", r), i = c("x", r), a = t.clientX + i, o = t.clientY + e;
                    return t.preventDefault = t.preventDefault || f, t.stopPropagation = t.stopPropagation || d, n.call(r, t, a, o)
                };
                t.attachEvent("on" + e, i);
                var a = function () {
                    return t.detachEvent("on" + e, i), !0
                };
                return a
            } : void 0
        }(), v = [], m = function (t) {
            for (var n, r = t.clientX, i = t.clientY, a = c("y"), o = c("x"), u = v.length; u--;) {
                if (n = v[u], s) {
                    for (var l, f = t.touches && t.touches.length; f--;)if (l = t.touches[f], l.identifier == n.el._drag.id || n.el.node.contains(l.target)) {
                        r = l.clientX, i = l.clientY, (t.originalEvent ? t.originalEvent : t).preventDefault();
                        break
                    }
                } else t.preventDefault();
                var h = n.el.node;
                h.nextSibling, h.parentNode, h.style.display, r += o, i += a, e("snap.drag.move." + n.el.id, n.move_scope || n.el, r - n.el._drag.x, i - n.el._drag.y, r, i, t)
            }
        }, y = function (n) {
            t.unmousemove(m).unmouseup(y);
            for (var r, i = v.length; i--;)r = v[i], r.el._drag = {}, e("snap.drag.end." + r.el.id, r.end_scope || r.start_scope || r.move_scope || r.el, n);
            v = []
        }, x = u.length; x--;)!function (e) {
            t[e] = a[e] = function (n, r) {
                return t.is(n, "function") && (this.events = this.events || [], this.events.push({name: e, f: n, unbind: g(this.node || document, e, n, r || this)})), this
            }, t["un" + e] = a["un" + e] = function (t) {
                for (var n = this.events || [], r = n.length; r--;)if (n[r].name == e && (n[r].f == t || !t))return n[r].unbind(), n.splice(r, 1), !n.length && delete this.events, this;
                return this
            }
        }(u[x]);
        a.hover = function (t, e, n, r) {
            return this.mouseover(t, n).mouseout(e, r || n)
        }, a.unhover = function (t, e) {
            return this.unmouseover(t).unmouseout(e)
        };
        var b = [];
        a.drag = function (n, r, i, a, o, s) {
            function u(u, l, c) {
                (u.originalEvent || u).preventDefault(), this._drag.x = l, this._drag.y = c, this._drag.id = u.identifier, !v.length && t.mousemove(m).mouseup(y), v.push({el: this, move_scope: a, start_scope: o, end_scope: s}), r && e.on("snap.drag.start." + this.id, r), n && e.on("snap.drag.move." + this.id, n), i && e.on("snap.drag.end." + this.id, i), e("snap.drag.start." + this.id, o || a || this, l, c, u)
            }

            if (!arguments.length) {
                var l;
                return this.drag(function (t, e) {
                    this.attr({transform: l + (l ? "T" : "t") + [t, e]})
                }, function () {
                    l = this.transform().local
                })
            }
            return this._drag = {}, b.push({el: this, start: u}), this.mousedown(u), this
        }, a.undrag = function () {
            for (var n = b.length; n--;)b[n].el == this && (this.unmousedown(b[n].start), b.splice(n, 1), e.unbind("snap.drag.*." + this.id));
            return!b.length && t.unmousemove(m).unmouseup(y), this
        }
    }), r.plugin(function (t, n, r) {
        var i = (n.prototype, r.prototype), a = /^\s*url\((.+)\)/, o = String, s = t._.$;
        t.filter = {}, i.filter = function (e) {
            var r = this;
            "svg" != r.type && (r = r.paper);
            var i = t.parse(o(e)), a = t._.id(), u = (r.node.offsetWidth, r.node.offsetHeight, s("filter"));
            return s(u, {id: a, filterUnits: "userSpaceOnUse"}), u.appendChild(i.node), r.defs.appendChild(u), new n(u)
        }, e.on("snap.util.getattr.filter", function () {
            e.stop();
            var n = s(this.node, "filter");
            if (n) {
                var r = o(n).match(a);
                return r && t.select(r[1])
            }
        }), e.on("snap.util.attr.filter", function (r) {
            if (r instanceof n && "filter" == r.type) {
                e.stop();
                var i = r.node.id;
                i || (s(r.node, {id: r.id}), i = r.id), s(this.node, {filter: t.url(i)})
            }
            r && "none" != r || (e.stop(), this.node.removeAttribute("filter"))
        }), t.filter.blur = function (e, n) {
            null == e && (e = 2);
            var r = null == n ? e : [e, n];
            return t.format('<feGaussianBlur stdDeviation="{def}"/>', {def: r})
        }, t.filter.blur.toString = function () {
            return this()
        }, t.filter.shadow = function (e, n, r, i, a) {
            return"string" == typeof r && (i = r, a = i, r = 4), "string" != typeof i && (a = i, i = "#000"), i = i || "#000", null == r && (r = 4), null == a && (a = 1), null == e && (e = 0, n = 2), null == n && (n = e), i = t.color(i), t.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>', {color: i, dx: e, dy: n, blur: r, opacity: a})
        }, t.filter.shadow.toString = function () {
            return this()
        }, t.filter.grayscale = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>', {a: .2126 + .7874 * (1 - e), b: .7152 - .7152 * (1 - e), c: .0722 - .0722 * (1 - e), d: .2126 - .2126 * (1 - e), e: .7152 + .2848 * (1 - e), f: .0722 - .0722 * (1 - e), g: .2126 - .2126 * (1 - e), h: .0722 + .9278 * (1 - e)})
        }, t.filter.grayscale.toString = function () {
            return this()
        }, t.filter.sepia = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>', {a: .393 + .607 * (1 - e), b: .769 - .769 * (1 - e), c: .189 - .189 * (1 - e), d: .349 - .349 * (1 - e), e: .686 + .314 * (1 - e), f: .168 - .168 * (1 - e), g: .272 - .272 * (1 - e), h: .534 - .534 * (1 - e), i: .131 + .869 * (1 - e)})
        }, t.filter.sepia.toString = function () {
            return this()
        }, t.filter.saturate = function (e) {
            return null == e && (e = 1), t.format('<feColorMatrix type="saturate" values="{amount}"/>', {amount: 1 - e})
        }, t.filter.saturate.toString = function () {
            return this()
        }, t.filter.hueRotate = function (e) {
            return e = e || 0, t.format('<feColorMatrix type="hueRotate" values="{angle}"/>', {angle: e})
        }, t.filter.hueRotate.toString = function () {
            return this()
        }, t.filter.invert = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>', {amount: e, amount2: 1 - e})
        }, t.filter.invert.toString = function () {
            return this()
        }, t.filter.brightness = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>', {amount: e})
        }, t.filter.brightness.toString = function () {
            return this()
        }, t.filter.contrast = function (e) {
            return null == e && (e = 1), t.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>', {amount: e, amount2: .5 - e / 2})
        }, t.filter.contrast.toString = function () {
            return this()
        }
    }), r
});
/**
 * fullPage 2.1.8
 * https://github.com/alvarotrigo/fullPage.js
 * MIT licensed
 *
 * Copyright (C) 2013 alvarotrigo.com - A project by Alvaro Trigo
 */
(function (a) {
    a.fn.fullpage = function (b) {
        function M() {
            a(".fp-section").each(function () {
                var c = a(this).find(".fp-slide");
                c.length ? c.each(function () {
                    z(a(this))
                }) : z(a(this))
            });
            a.isFunction(b.afterRender) && b.afterRender.call(this)
        }

        function N() {
            if (!b.autoScrolling) {
                var c = a(window).scrollTop(), d = a(".fp-section").map(function () {
                    if (a(this).offset().top < c + 100)return a(this)
                }), d = d[d.length - 1];
                if (!d.hasClass("active")) {
                    var e = a(".fp-section.active").index(".fp-section") + 1;
                    F = !0;
                    var f = G(d);
                    d.addClass("active").siblings().removeClass("active");
                    var g = d.data("anchor");
                    a.isFunction(b.onLeave) && b.onLeave.call(this, e, d.index(".fp-section") + 1, f);
                    a.isFunction(b.afterLoad) && b.afterLoad.call(this, g, d.index(".fp-section") + 1);
                    H(g);
                    I(g, 0);
                    b.anchors.length && !t && (v = g, location.hash = g);
                    clearTimeout(O);
                    O = setTimeout(function () {
                        F = !1
                    }, 100)
                }
            }
        }

        function da(c) {
            var d = c.originalEvent;
            b.autoScrolling && c.preventDefault();
            if (!P(c.target) && (c = a(".fp-section.active"), !t && !p))if (d = Q(d), w = d.y, A = d.x, c.find(".fp-slides").length && Math.abs(B - A) > Math.abs(x - w))Math.abs(B - A) >
                a(window).width() / 100 * b.touchSensitivity && (B > A ? a.fn.fullpage.moveSlideRight() : a.fn.fullpage.moveSlideLeft()); else if (b.autoScrolling && (d = c.find(".fp-slides").length ? c.find(".fp-slide.active").find(".fp-scrollable") : c.find(".fp-scrollable"), Math.abs(x - w) > a(window).height() / 100 * b.touchSensitivity))if (x > w)if (0 < d.length)if (C("bottom", d))a.fn.fullpage.moveSectionDown(); else return!0; else a.fn.fullpage.moveSectionDown(); else if (w > x)if (0 < d.length)if (C("top", d))a.fn.fullpage.moveSectionUp(); else return!0;
            else a.fn.fullpage.moveSectionUp()
        }

        function P(c, d) {
            d = d || 0;
            var e = a(c).parent();
            return d < b.normalScrollElementTouchThreshold && e.is(b.normalScrollElements) ? !0 : d == b.normalScrollElementTouchThreshold ? !1 : P(e, ++d)
        }

        function ea(c) {
            c = Q(c.originalEvent);
            x = c.y;
            B = c.x
        }

        function n(c) {
            if (b.autoScrolling) {
                c = window.event || c;
                c = Math.max(-1, Math.min(1, c.wheelDelta || -c.deltaY || -c.detail));
                var d;
                d = a(".fp-section.active");
                if (!t)if (d = d.find(".fp-slides").length ? d.find(".fp-slide.active").find(".fp-scrollable") : d.find(".fp-scrollable"),
                    0 > c)if (0 < d.length)if (C("bottom", d))a.fn.fullpage.moveSectionDown(); else return!0; else a.fn.fullpage.moveSectionDown(); else if (0 < d.length)if (C("top", d))a.fn.fullpage.moveSectionUp(); else return!0; else a.fn.fullpage.moveSectionUp();
                return!1
            }
        }

        function R(c) {
            var d = a(".fp-section.active").find(".fp-slides");
            if (d.length && !p) {
                var e = d.find(".fp-slide.active"), f = null, f = "prev" === c ? e.prev(".fp-slide") : e.next(".fp-slide");
                if (!f.length) {
                    if (!b.loopHorizontal)return;
                    f = "prev" === c ? e.siblings(":last") : e.siblings(":first")
                }
                p = !0;
                q(d, f)
            }
        }

        function k(c, d, e) {
            var f = {}, g = c.position();
            if ("undefined" !== typeof g) {
                var g = g.top, y = G(c), r = c.data("anchor"), h = c.index(".fp-section"), p = c.find(".fp-slide.active"), s = a(".fp-section.active"), l = s.index(".fp-section") + 1, E = D;
                if (p.length)var n = p.data("anchor"), q = p.index();
                if (b.autoScrolling && b.continuousVertical && "undefined" !== typeof e && (!e && "up" == y || e && "down" == y)) {
                    e ? a(".fp-section.active").before(s.nextAll(".fp-section")) : a(".fp-section.active").after(s.prevAll(".fp-section").get().reverse());
                    u(a(".fp-section.active").position().top);
                    var k = s, g = c.position(), g = g.top, y = G(c)
                }
                c.addClass("active").siblings().removeClass("active");
                t = !0;
                "undefined" !== typeof r && S(q, n, r);
                b.autoScrolling ? (f.top = -g, c = "." + T) : (f.scrollTop = g, c = "html, body");
                var m = function () {
                    k && k.length && (e ? a(".fp-section:first").before(k) : a(".fp-section:last").after(k), u(a(".fp-section.active").position().top))
                };
                b.css3 && b.autoScrolling ? (a.isFunction(b.onLeave) && !E && b.onLeave.call(this, l, h + 1, y), U("translate3d(0px, -" + g + "px, 0px)", !0),
                    setTimeout(function () {
                        m();
                        a.isFunction(b.afterLoad) && !E && b.afterLoad.call(this, r, h + 1);
                        setTimeout(function () {
                            t = !1;
                            a.isFunction(d) && d.call(this)
                        }, V)
                    }, b.scrollingSpeed)) : (a.isFunction(b.onLeave) && !E && b.onLeave.call(this, l, h + 1, y), a(c).animate(f, b.scrollingSpeed, b.easing, function () {
                    m();
                    a.isFunction(b.afterLoad) && !E && b.afterLoad.call(this, r, h + 1);
                    setTimeout(function () {
                        t = !1;
                        a.isFunction(d) && d.call(this)
                    }, V)
                }));
                v = r;
                b.autoScrolling && (H(r), I(r, h))
            }
        }

        function W() {
            if (!F) {
                var c = window.location.hash.replace("#",
                    "").split("/"), a = c[0], c = c[1];
                if (a.length) {
                    var b = "undefined" === typeof v, f = "undefined" === typeof v && "undefined" === typeof c && !p;
                    (a && a !== v && !b || f || !p && J != c) && K(a, c)
                }
            }
        }

        function q(c, d) {
            var e = d.position(), f = c.find(".fp-slidesContainer").parent(), g = d.index(), h = c.closest(".fp-section"), r = h.index(".fp-section"), k = h.data("anchor"), l = h.find(".fp-slidesNav"), s = d.data("anchor"), m = D;
            if (b.onSlideLeave) {
                var n = h.find(".fp-slide.active").index(), q;
                q = n == g ? "none" : n > g ? "left" : "right";
                m || a.isFunction(b.onSlideLeave) && b.onSlideLeave.call(this,
                    k, r + 1, n, q)
            }
            d.addClass("active").siblings().removeClass("active");
            "undefined" === typeof s && (s = g);
            h.hasClass("active") && (b.loopHorizontal || (h.find(".fp-controlArrow.fp-prev").toggle(0 != g), h.find(".fp-controlArrow.fp-next").toggle(!d.is(":last-child"))), S(g, s, k));
            b.css3 ? (e = "translate3d(-" + e.left + "px, 0px, 0px)", c.find(".fp-slidesContainer").toggleClass("fp-easing", 0 < b.scrollingSpeed).css(X(e)), setTimeout(function () {
                    m || a.isFunction(b.afterSlideLoad) && b.afterSlideLoad.call(this, k, r + 1, s, g);
                    p = !1
                }, b.scrollingSpeed,
                b.easing)) : f.animate({scrollLeft: e.left}, b.scrollingSpeed, b.easing, function () {
                m || a.isFunction(b.afterSlideLoad) && b.afterSlideLoad.call(this, k, r + 1, s, g);
                p = !1
            });
            l.find(".active").removeClass("active");
            l.find("li").eq(g).find("a").addClass("active")
        }

        function fa(c, d) {
            var b = 825, f = c;
            825 > c || 900 > d ? (900 > d && (f = d, b = 900), b = (100 * f / b).toFixed(2), a("body").css("font-size", b + "%")) : a("body").css("font-size", "100%")
        }

        function I(c, d) {
            b.navigation && (a("#fp-nav").find(".active").removeClass("active"), c ? a("#fp-nav").find('a[href="#' +
                c + '"]').addClass("active") : a("#fp-nav").find("li").eq(d).find("a").addClass("active"))
        }

        function H(c) {
            b.menu && (a(b.menu).find(".active").removeClass("active"), a(b.menu).find('[data-menuanchor="' + c + '"]').addClass("active"))
        }

        function C(c, a) {
            if ("top" === c)return!a.scrollTop();
            if ("bottom" === c)return a.scrollTop() + 1 + a.innerHeight() >= a[0].scrollHeight
        }

        function G(c) {
            var b = a(".fp-section.active").index(".fp-section");
            c = c.index(".fp-section");
            return b > c ? "up" : "down"
        }

        function z(a) {
            a.css("overflow", "hidden");
            var d =
                a.closest(".fp-section"), e = a.find(".fp-scrollable");
            if (e.length)var f = e.get(0).scrollHeight; else f = a.get(0).scrollHeight, b.verticalCentered && (f = a.find(".fp-tableCell").get(0).scrollHeight);
            d = l - parseInt(d.css("padding-bottom")) - parseInt(d.css("padding-top"));
            f > d ? e.length ? e.css("height", d + "px").parent().css("height", d + "px") : (b.verticalCentered ? a.find(".fp-tableCell").wrapInner('<div class="fp-scrollable" />') : a.wrapInner('<div class="fp-scrollable" />'), a.find(".fp-scrollable").slimScroll({allowPageScroll: !0,
                height: d + "px", size: "10px", alwaysVisible: !0})) : Y(a);
            a.css("overflow", "")
        }

        function Y(a) {
            a.find(".fp-scrollable").children().first().unwrap().unwrap();
            a.find(".slimScrollBar").remove();
            a.find(".slimScrollRail").remove()
        }

        function Z(a) {
            a.addClass("fp-table").wrapInner('<div class="fp-tableCell" style="height:' + $(a) + 'px;" />')
        }

        function $(a) {
            var d = l;
            if (b.paddingTop || b.paddingBottom)d = a, d.hasClass("fp-section") || (d = a.closest(".fp-section")), a = parseInt(d.css("padding-top")) + parseInt(d.css("padding-bottom")),
                d = l - a;
            return d
        }

        function U(a, b) {
            h.toggleClass("fp-easing", b);
            h.css(X(a))
        }

        function K(c, b) {
            "undefined" === typeof b && (b = 0);
            var e = isNaN(c) ? a('[data-anchor="' + c + '"]') : a(".fp-section").eq(c - 1);
            c === v || e.hasClass("active") ? aa(e, b) : k(e, function () {
                aa(e, b)
            })
        }

        function aa(a, b) {
            if ("undefined" != typeof b) {
                var e = a.find(".fp-slides"), f = e.find('[data-anchor="' + b + '"]');
                f.length || (f = e.find(".fp-slide").eq(b));
                f.length && q(e, f)
            }
        }

        function ga(a, d) {
            a.append('<div class="fp-slidesNav"><ul></ul></div>');
            var e = a.find(".fp-slidesNav");
            e.addClass(b.slidesNavPosition);
            for (var f = 0; f < d; f++)e.find("ul").append('<li><a href="#"><span></span></a></li>');
            e.css("margin-left", "-" + e.width() / 2 + "px");
            e.find("li").first().find("a").addClass("active")
        }

        function S(a, d, e) {
            var f = "";
            b.anchors.length && (a ? ("undefined" !== typeof e && (f = e), "undefined" === typeof d && (d = a), J = d, location.hash = f + "/" + d) : ("undefined" !== typeof a && (J = d), location.hash = e))
        }

        function ha() {
            var a = document.createElement("p"), b, e = {webkitTransform: "-webkit-transform", OTransform: "-o-transform",
                msTransform: "-ms-transform", MozTransform: "-moz-transform", transform: "transform"};
            document.body.insertBefore(a, null);
            for (var f in e)void 0 !== a.style[f] && (a.style[f] = "translate3d(1px,1px,1px)", b = window.getComputedStyle(a).getPropertyValue(e[f]));
            document.body.removeChild(a);
            return void 0 !== b && 0 < b.length && "none" !== b
        }

        function ba() {
            return window.PointerEvent ? {down: "pointerdown", move: "pointermove"} : {down: "MSPointerDown", move: "MSPointerMove"}
        }

        function Q(a) {
            var b = [];
            window.navigator.msPointerEnabled ? (b.y =
                a.pageY, b.x = a.pageX) : (b.y = a.touches[0].pageY, b.x = a.touches[0].pageX);
            return b
        }

        function u(a) {
            b.css3 ? U("translate3d(0px, -" + a + "px, 0px)", !1) : h.css("top", -a)
        }

        function X(a) {
            return{"-webkit-transform": a, "-moz-transform": a, "-ms-transform": a, transform: a}
        }

        function ia() {
            u(0);
            a("#fp-nav, .fp-slidesNav, .fp-controlArrow").remove();
            a(".fp-section").css({height: "", "background-color": "", padding: ""});
            a(".fp-slide").css({width: ""});
            h.css({height: "", position: "", "-ms-touch-action": ""});
            a(".fp-section, .fp-slide").each(function () {
                Y(a(this));
                a(this).removeClass("fp-table active")
            });
            h.find(".fp-easing").removeClass("fp-easing");
            h.find(".fp-tableCell, .fp-slidesContainer, .fp-slides").each(function () {
                a(this).replaceWith(this.childNodes)
            });
            a("html, body").scrollTop(0);
            h.addClass("fullpage-used")
        }

        b = a.extend({verticalCentered: !0, resize: !0, sectionsColor: [], anchors: [], scrollingSpeed: 700, easing: "easeInQuart", menu: !1, navigation: !1, navigationPosition: "right", navigationColor: "#000", navigationTooltips: [], slidesNavigation: !1, slidesNavPosition: "bottom",
            controlArrowColor: "#fff", loopBottom: !1, loopTop: !1, loopHorizontal: !0, autoScrolling: !0, scrollOverflow: !1, css3: !1, paddingTop: 0, paddingBottom: 0, fixedElements: null, normalScrollElements: null, keyboardScrolling: !0, touchSensitivity: 5, continuousVertical: !1, animateAnchor: !0, normalScrollElementTouchThreshold: 5, sectionSelector: ".section", slideSelector: ".slide", afterLoad: null, onLeave: null, afterRender: null, afterResize: null, afterSlideLoad: null, onSlideLeave: null}, b);
        b.continuousVertical && (b.loopTop || b.loopBottom) &&
        (b.continuousVertical = !1, console && console.log && console.log("Option loopTop/loopBottom is mutually exclusive with continuousVertical; continuousVertical disabled"));
        var V = 600;
        a.fn.fullpage.setAutoScrolling = function (c) {
            b.autoScrolling = c;
            c = a(".fp-section.active");
            b.autoScrolling ? (a("html, body").css({overflow: "hidden", height: "100%"}), c.length && u(c.position().top)) : (a("html, body").css({overflow: "auto", height: "auto"}), u(0), a("html, body").scrollTop(c.position().top))
        };
        a.fn.fullpage.setScrollingSpeed =
            function (a) {
                b.scrollingSpeed = a
            };
        a.fn.fullpage.setMouseWheelScrolling = function (a) {
            a ? document.addEventListener ? (document.addEventListener("mousewheel", n, !1), document.addEventListener("wheel", n, !1)) : document.attachEvent("onmousewheel", n) : document.addEventListener ? (document.removeEventListener("mousewheel", n, !1), document.removeEventListener("wheel", n, !1)) : document.detachEvent("onmousewheel", n)
        };
        a.fn.fullpage.setAllowScrolling = function (b) {
            b ? (a.fn.fullpage.setMouseWheelScrolling(!0), L && (MSPointer = ba(),
                a(document).off("touchstart " + MSPointer.down).on("touchstart " + MSPointer.down, ea), a(document).off("touchmove " + MSPointer.move).on("touchmove " + MSPointer.move, da))) : (a.fn.fullpage.setMouseWheelScrolling(!1), L && (MSPointer = ba(), a(document).off("touchstart " + MSPointer.down), a(document).off("touchmove " + MSPointer.move)))
        };
        a.fn.fullpage.setKeyboardScrolling = function (a) {
            b.keyboardScrolling = a
        };
        var p = !1, L = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|Windows Phone|Tizen|Bada)/), h = a(this),
            l = a(window).height(), t = !1, D = !1, v, J, T = "fullpage-wrapper";
        a.fn.fullpage.setAllowScrolling(!0);
        b.css3 && (b.css3 = ha());
        a(this).length ? (h.css({height: "100%", position: "relative", "-ms-touch-action": "none"}), h.addClass(T)) : console.error("Error! Fullpage.js needs to be initialized with a selector. For example: $('#myContainer').fullpage();");
        a(b.sectionSelector).each(function () {
            a(this).addClass("fp-section")
        });
        a(b.slideSelector).each(function () {
            a(this).addClass("fp-slide")
        });
        if (b.navigation) {
            a("body").append('<div id="fp-nav"><ul></ul></div>');
            var m = a("#fp-nav");
            m.css("color", b.navigationColor);
            m.addClass(b.navigationPosition)
        }
        a(".fp-section").each(function (c) {
            var d = a(this), e = a(this).find(".fp-slide"), f = e.length;
            c || 0 !== a(".fp-section.active").length || a(this).addClass("active");
            a(this).css("height", l + "px");
            (b.paddingTop || b.paddingBottom) && a(this).css("padding", b.paddingTop + " 0 " + b.paddingBottom + " 0");
            "undefined" !== typeof b.sectionsColor[c] && a(this).css("background-color", b.sectionsColor[c]);
            "undefined" !== typeof b.anchors[c] && a(this).attr("data-anchor",
                b.anchors[c]);
            if (b.navigation) {
                var g = "";
                b.anchors.length && (g = b.anchors[c]);
                c = b.navigationTooltips[c];
                "undefined" === typeof c && (c = "");
                m.find("ul").append('<li data-tooltip="' + c + '"><a href="#' + g + '"><span></span></a></li>')
            }
            if (1 < f) {
                var g = 100 * f, h = 100 / f;
                e.wrapAll('<div class="fp-slidesContainer" />');
                e.parent().wrap('<div class="fp-slides" />');
                a(this).find(".fp-slidesContainer").css("width", g + "%");
                a(this).find(".fp-slides").after('<div class="fp-controlArrow fp-prev"></div><div class="fp-controlArrow fp-next"></div>');
                "#fff" != b.controlArrowColor && (a(this).find(".fp-controlArrow.fp-next").css("border-color", "transparent transparent transparent " + b.controlArrowColor), a(this).find(".fp-controlArrow.fp-prev").css("border-color", "transparent " + b.controlArrowColor + " transparent transparent"));
                b.loopHorizontal || a(this).find(".fp-controlArrow.fp-prev").hide();
                b.slidesNavigation && ga(a(this), f);
                e.each(function (c) {
                    c || 0 != d.find(".fp-slide.active").length || a(this).addClass("active");
                    a(this).css("width", h + "%");
                    b.verticalCentered &&
                    Z(a(this))
                })
            } else b.verticalCentered && Z(a(this))
        }).promise().done(function () {
            a.fn.fullpage.setAutoScrolling(b.autoScrolling);
            var c = a(".fp-section.active").find(".fp-slide.active");
            if (c.length && (0 != a(".fp-section.active").index(".fp-section") || 0 == a(".fp-section.active").index(".fp-section") && 0 != c.index())) {
                var d = b.scrollingSpeed;
                a.fn.fullpage.setScrollingSpeed(0);
                q(a(".fp-section.active").find(".fp-slides"), c);
                a.fn.fullpage.setScrollingSpeed(d)
            }
            b.fixedElements && b.css3 && a(b.fixedElements).appendTo("body");
            b.navigation && (m.css("margin-top", "-" + m.height() / 2 + "px"), m.find("li").eq(a(".fp-section.active").index(".fp-section")).find("a").addClass("active"));
            b.menu && b.css3 && a(b.menu).closest(".fullpage-wrapper").length && a(b.menu).appendTo("body");
            b.scrollOverflow ? (h.hasClass("fullpage-used") && M(), a(window).on("load", M)) : a.isFunction(b.afterRender) && b.afterRender.call(this);
            c = window.location.hash.replace("#", "").split("/")[0];
            c.length && (d = a('[data-anchor="' + c + '"]'), !b.animateAnchor && d.length && (b.autoScrolling ?
                u(d.position().top) : (u(0), a("html, body").scrollTop(d.position().top)), H(c), I(c, null), a.isFunction(b.afterLoad) && b.afterLoad.call(this, c, d.index(".fp-section") + 1), d.addClass("active").siblings().removeClass("active")));
            a(window).on("load", function () {
                var a = window.location.hash.replace("#", "").split("/"), b = a[0], a = a[1];
                b && K(b, a)
            })
        });
        var O, F = !1;
        a(window).on("scroll", N);
        var x = 0, B = 0, w = 0, A = 0;
        a.fn.fullpage.moveSectionUp = function () {
            var c = a(".fp-section.active").prev(".fp-section");
            c.length || !b.loopTop && !b.continuousVertical ||
            (c = a(".fp-section").last());
            c.length && k(c, null, !0)
        };
        a.fn.fullpage.moveSectionDown = function () {
            var c = a(".fp-section.active").next(".fp-section");
            c.length || !b.loopBottom && !b.continuousVertical || (c = a(".fp-section").first());
            (0 < c.length || !c.length && (b.loopBottom || b.continuousVertical)) && k(c, null, !1)
        };
        a.fn.fullpage.moveTo = function (b, d) {
            var e = "", e = isNaN(b) ? a('[data-anchor="' + b + '"]') : a(".fp-section").eq(b - 1);
            "undefined" !== typeof d ? K(b, d) : 0 < e.length && k(e)
        };
        a.fn.fullpage.moveSlideRight = function () {
            R("next")
        };
        a.fn.fullpage.moveSlideLeft = function () {
            R("prev")
        };
        a(window).on("hashchange", W);
        a(document).keydown(function (c) {
            if (b.keyboardScrolling && !t)switch (c.which) {
                case 38:
                case 33:
                    a.fn.fullpage.moveSectionUp();
                    break;
                case 40:
                case 34:
                    a.fn.fullpage.moveSectionDown();
                    break;
                case 36:
                    a.fn.fullpage.moveTo(1);
                    break;
                case 35:
                    a.fn.fullpage.moveTo(a(".fp-section").length);
                    break;
                case 37:
                    a.fn.fullpage.moveSlideLeft();
                    break;
                case 39:
                    a.fn.fullpage.moveSlideRight()
            }
        });
        a(document).on("click", "#fp-nav a", function (b) {
            b.preventDefault();
            b = a(this).parent().index();
            k(a(".fp-section").eq(b))
        });
        a(document).on({mouseenter: function () {
            var c = a(this).data("tooltip");
            a('<div class="fp-tooltip ' + b.navigationPosition + '">' + c + "</div>").hide().appendTo(a(this)).fadeIn(200)
        }, mouseleave: function () {
            a(this).find(".fp-tooltip").fadeOut().remove()
        }}, "#fp-nav li");
        b.normalScrollElements && (a(document).on("mouseover", b.normalScrollElements, function () {
            a.fn.fullpage.setMouseWheelScrolling(!1)
        }), a(document).on("mouseout", b.normalScrollElements, function () {
            a.fn.fullpage.setMouseWheelScrolling(!0)
        }));
        a(".fp-section").on("click", ".fp-controlArrow", function () {
            a(this).hasClass("fp-prev") ? a.fn.fullpage.moveSlideLeft() : a.fn.fullpage.moveSlideRight()
        });
        a(".fp-section").on("click", ".toSlide", function (b) {
            b.preventDefault();
            b = a(this).closest(".fp-section").find(".fp-slides");
            b.find(".fp-slide.active");
            var d = null, d = b.find(".fp-slide").eq(a(this).data("index") - 1);
            0 < d.length && q(b, d)
        });
        var ca;
        a(window).resize(function () {
            L ? a.fn.fullpage.reBuild() : (clearTimeout(ca), ca = setTimeout(a.fn.fullpage.reBuild, 500))
        });
        a.fn.fullpage.reBuild = function () {
            D = !0;
            var c = a(window).width();
            l = a(window).height();
            b.resize && fa(l, c);
            a(".fp-section").each(function () {
                parseInt(a(this).css("padding-bottom"));
                parseInt(a(this).css("padding-top"));
                b.verticalCentered && a(this).find(".fp-tableCell").css("height", $(a(this)) + "px");
                a(this).css("height", l + "px");
                if (b.scrollOverflow) {
                    var c = a(this).find(".fp-slide");
                    c.length ? c.each(function () {
                        z(a(this))
                    }) : z(a(this))
                }
                c = a(this).find(".fp-slides");
                c.length && q(c, c.find(".fp-slide.active"))
            });
            a(".fp-section.active").position();
            c = a(".fp-section.active");
            c.index(".fp-section") && k(c);
            D = !1;
            a.isFunction(b.afterResize) && b.afterResize.call(this)
        };
        a(document).on("click", ".fp-slidesNav a", function (b) {
            b.preventDefault();
            b = a(this).closest(".fp-section").find(".fp-slides");
            var d = b.find(".fp-slide").eq(a(this).closest("li").index());
            q(b, d)
        });
        a.fn.fullpage.destroy = function (c) {
            a.fn.fullpage.setAutoScrolling(!1);
            a.fn.fullpage.setAllowScrolling(!1);
            a.fn.fullpage.setKeyboardScrolling(!1);
            a(window).off("scroll", N).off("hashchange", W);
            a(document).off("click",
                "#fp-nav a").off("mouseenter", "#fp-nav li").off("mouseleave", "#fp-nav li").off("click", ".fp-slidesNav a").off("mouseover", b.normalScrollElements).off("mouseout", b.normalScrollElements);
            a(".fp-section").off("click", ".fp-controlArrow").off("click", ".toSlide");
            c && ia()
        }
    }
})(jQuery);
/*!
 * imagesLoaded PACKAGED v3.1.8
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function () {
    function e() {
    }

    function t(e, t) {
        for (var n = e.length; n--;)if (e[n].listener === t)return n;
        return-1
    }

    function n(e) {
        return function () {
            return this[e].apply(this, arguments)
        }
    }

    var i = e.prototype, r = this, o = r.EventEmitter;
    i.getListeners = function (e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i)i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function (e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1)n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function (e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function (e, n) {
        var i, r = this.getListenersAsObject(e), o = "object" == typeof n;
        for (i in r)r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {listener: n, once: !1});
        return this
    }, i.on = n("addListener"), i.addOnceListener = function (e, t) {
        return this.addListener(e, {listener: t, once: !0})
    }, i.once = n("addOnceListener"), i.defineEvent = function (e) {
        return this.getListeners(e), this
    }, i.defineEvents = function (e) {
        for (var t = 0; e.length > t; t += 1)this.defineEvent(e[t]);
        return this
    }, i.removeListener = function (e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o)o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function (e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function (e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function (e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener, s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)for (i = n.length; i--;)o.call(this, t, n[i]); else for (i in t)t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function (e) {
        var t, n = typeof e, i = this._getEvents();
        if ("string" === n)delete i[e]; else if ("object" === n)for (t in i)i.hasOwnProperty(t) && e.test(t) && delete i[t]; else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function (e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)if (s.hasOwnProperty(r))for (i = s[r].length; i--;)n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function (e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function (e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function () {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function () {
        return this._events || (this._events = {})
    }, e.noConflict = function () {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function () {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this), function (e) {
    function t(t) {
        var n = e.event;
        return n.target = n.target || n.srcElement || t, n
    }

    var n = document.documentElement, i = function () {
    };
    n.addEventListener ? i = function (e, t, n) {
        e.addEventListener(t, n, !1)
    } : n.attachEvent && (i = function (e, n, i) {
        e[n + i] = i.handleEvent ? function () {
            var n = t(e);
            i.handleEvent.call(i, n)
        } : function () {
            var n = t(e);
            i.call(e, n)
        }, e.attachEvent("on" + n, e[n + i])
    });
    var r = function () {
    };
    n.removeEventListener ? r = function (e, t, n) {
        e.removeEventListener(t, n, !1)
    } : n.detachEvent && (r = function (e, t, n) {
        e.detachEvent("on" + t, e[t + n]);
        try {
            delete e[t + n]
        } catch (i) {
            e[t + n] = void 0
        }
    });
    var o = {bind: i, unbind: r};
    "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
}(this), function (e, t) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function (n, i) {
        return t(e, n, i)
    }) : "object" == typeof exports ? module.exports = t(e, require("wolfy87-eventemitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
}(window, function (e, t, n) {
    function i(e, t) {
        for (var n in t)e[n] = t[n];
        return e
    }

    function r(e) {
        return"[object Array]" === d.call(e)
    }

    function o(e) {
        var t = [];
        if (r(e))t = e; else if ("number" == typeof e.length)for (var n = 0, i = e.length; i > n; n++)t.push(e[n]); else t.push(e);
        return t
    }

    function s(e, t, n) {
        if (!(this instanceof s))return new s(e, t);
        "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
        var r = this;
        setTimeout(function () {
            r.check()
        })
    }

    function f(e) {
        this.img = e
    }

    function c(e) {
        this.src = e, v[e] = this
    }

    var a = e.jQuery, u = e.console, h = u !== void 0, d = Object.prototype.toString;
    s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function () {
        this.images = [];
        for (var e = 0, t = this.elements.length; t > e; e++) {
            var n = this.elements[e];
            "IMG" === n.nodeName && this.addImage(n);
            var i = n.nodeType;
            if (i && (1 === i || 9 === i || 11 === i))for (var r = n.querySelectorAll("img"), o = 0, s = r.length; s > o; o++) {
                var f = r[o];
                this.addImage(f)
            }
        }
    }, s.prototype.addImage = function (e) {
        var t = new f(e);
        this.images.push(t)
    }, s.prototype.check = function () {
        function e(e, r) {
            return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
        }

        var t = this, n = 0, i = this.images.length;
        if (this.hasAnyBroken = !1, !i)return this.complete(), void 0;
        for (var r = 0; i > r; r++) {
            var o = this.images[r];
            o.on("confirm", e), o.check()
        }
    }, s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
        var t = this;
        setTimeout(function () {
            t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
    }, s.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var t = this;
        setTimeout(function () {
            if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                var n = t.hasAnyBroken ? "reject" : "resolve";
                t.jqDeferred[n](t)
            }
        })
    }, a && (a.fn.imagesLoaded = function (e, t) {
        var n = new s(this, e, t);
        return n.jqDeferred.promise(a(this))
    }), f.prototype = new t, f.prototype.check = function () {
        var e = v[this.img.src] || new c(this.img.src);
        if (e.isConfirmed)return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
        var t = this;
        e.on("confirm", function (e, n) {
            return t.confirm(e.isLoaded, n), !0
        }), e.check()
    }, f.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emit("confirm", this, t)
    };
    var v = {};
    return c.prototype = new t, c.prototype.check = function () {
        if (!this.isChecked) {
            var e = new Image;
            n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
        }
    }, c.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, c.prototype.onload = function (e) {
        this.confirm(!0, "onload"), this.unbindProxyEvents(e)
    }, c.prototype.onerror = function (e) {
        this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
    }, c.prototype.confirm = function (e, t) {
        this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
    }, c.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
    }, s
});
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.12
 *
 * Requires: jQuery 1.2.2+
 */
!function (a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function (a) {
    function b(b) {
        var g = b || window.event, h = i.call(arguments, 1), j = 0, l = 0, m = 0, n = 0, o = 0, p = 0;
        if (b = a.event.fix(g), b.type = "mousewheel", "detail"in g && (m = -1 * g.detail), "wheelDelta"in g && (m = g.wheelDelta), "wheelDeltaY"in g && (m = g.wheelDeltaY), "wheelDeltaX"in g && (l = -1 * g.wheelDeltaX), "axis"in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY"in g && (m = -1 * g.deltaY, j = m), "deltaX"in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
            if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                j *= q, m *= q, l *= q
            } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                j *= r, m *= r, l *= r
            }
            if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
                var s = this.getBoundingClientRect();
                o = b.clientX - s.left, p = b.clientY - s.top
            }
            return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
        }
    }

    function c() {
        f = null
    }

    function d(a, b) {
        return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
    }

    var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], i = Array.prototype.slice;
    if (a.event.fixHooks)for (var j = g.length; j;)a.event.fixHooks[g[--j]] = a.event.mouseHooks;
    var k = a.event.special.mousewheel = {version: "3.1.12", setup: function () {
        if (this.addEventListener)for (var c = h.length; c;)this.addEventListener(h[--c], b, !1); else this.onmousewheel = b;
        a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
    }, teardown: function () {
        if (this.removeEventListener)for (var c = h.length; c;)this.removeEventListener(h[--c], b, !1); else this.onmousewheel = null;
        a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
    }, getLineHeight: function (b) {
        var c = a(b), d = c["offsetParent"in a.fn ? "offsetParent" : "parent"]();
        return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
    }, getPageHeight: function (b) {
        return a(b).height()
    }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}};
    a.fn.extend({mousewheel: function (a) {
        return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
    }, unmousewheel: function (a) {
        return this.unbind("mousewheel", a)
    }})
});
!function (n, t, e) {
    n.fn.sprites = function (t) {
        function o(e) {
            n(t.container).on("mousewheel", e)
        }

        function i(e) {
            n(t.container).off("mousewheel", e)
        }

        function a(n) {
            f -= n.deltaY * n.deltaFactor, r(f / u), f = Math.max(0, Math.min(u, f))
        }

        function r(e) {
            var o = Math.round(e * (d - 1)), i = Math.max(0, Math.min(d - 1, o)), a = "none";
            return i !== h ? (s.css("opacity", 0), s.eq(i).css("opacity", 1), a = i > h ? "forward" : "backward", h = i, n.isFunction(t.onProgress) && t.onProgress.call(this, h / (d - 1), a), void 0) : (h === d - 1 && o > h && n.isFunction(t.onEnd) && t.onEnd.call(this), void 0)
        }

        t = n.extend({container: null, keyboard: !0, onProgress: null, onEnd: null}, t);
        var c = n(this), s = c.children("img"), d = s.length;
        if (d) {
            var l = 40, u = l * (d - 1);
            s.css("opacity", 0).first().css("opacity", 1), t.container || (t.container = this);
            var f = 0;
            n.fn.sprites.enable = function (n) {
                "undefined" == typeof n && (n = !0), t.keyboard = n === !0, n === !0 ? o(a) : i(a)
            }, n.fn.sprites.enable();
            var h = 0;
            return n(e).keydown(function (n) {
                if (t.keyboard) {
                    var e = {deltaY: 0, deltaFactor: l};
                    return 38 === n.which && (e.deltaY += 1), 40 === n.which && (e.deltaY -= 1), e.deltaY && a(e)
                }
            }), this
        }
    }
}(jQuery, window, document);
!function (e) {
    e.fn.imagefill = function (t) {
        function i() {
            r = 0, s = 0, n.each(function () {
                var i = e(this), n = i.children("img");
                a = n.width() / n.height();
                var o = i.outerWidth(), c = i.outerHeight(), h = o / c;
                s += o, r += c;
                var u = i.data("imagefillAlign") || t.align, l = u.split(" "), f = e.grep(l, function (e) {
                    return"left" === e || "right" === e
                }), d = e.grep(l, function (e) {
                    return"top" === e || "bottom" === e
                }), g = f[0] || "center", m = d[0] || "center", p = {width: "auto", height: "auto", top: "auto", right: "auto", bottom: "auto", left: "auto"};
                a > h ? (p.height = c, p.top = 0, "center" === g ? p.left = -Math.round((c * a - o) / 2) : p[g] = 0) : (p.width = o, p.left = 0, "center" === m ? p.top = -Math.round((o / a - c) / 2) : p[m] = 0), n.css(p)
            })
        }

        t = e.extend({resize: !0, align: "center", afterRender: null, afterResize: null}, t);
        var n = this, o = n.find("img").addClass("loading").css({position: "absolute"}), a = 1, r = 0, s = 0;
        if (n.each(function () {
            var t = e(this), i = t.css("position");
            t.css({overflow: "hidden", position: "static" === i ? "relative" : i})
        }), n.imagesLoaded().always(function () {
            a = o.width() / o.height(), o.removeClass("loading"), i(), n.promise().done(function () {
                e.isFunction(t.afterRender) && t.afterRender.call(this)
            })
        }), e.fn.imagefill.checkSizeChange = function () {
            var o = 0, a = 0;
            n.each(function () {
                var t = e(this);
                a += t.outerHeight(), o += t.outerWidth()
            }), (r !== a || s !== o) && i(), n.promise().done(function () {
                e.isFunction(t.afterResize) && t.afterResize.call(this)
            })
        }, t.resize) {
            var c;
            e(window).resize(function () {
                clearTimeout(c), c = setTimeout(e.fn.imagefill.checkSizeChange, 300)
            })
        }
        return this
    }
}(jQuery);
!function (t) {
    t.fn.imagemarkers = function (i) {
        i = t.extend({imageSelector: "img.imagemarkers"}, i);
        var e = t(i.imageSelector);
        if (e.length) {
            e = e.first();
            var a = e.position();
            return a.width = e.width(), a.height = e.height(), a.original = {}, a.original.width = e.attr("width"), a.original.height = e.attr("height"), a.scale = a.width / a.original.width, this.each(function () {
                var i = t(this), e = i.data("coordinates");
                if (e) {
                    e = e.replace(/\D/g, ","), e = e.replace(/(,)(?=.*\1)/g, "");
                    var r = e.split(","), h = parseInt(r[0], 10) || 0, n = parseInt(r[1], 10) || 0, o = i.width(), g = i.height();
                    h = Math.round(h * a.scale), n = Math.round(n * a.scale), h -= Math.round(o / 2), n -= Math.round(g / 2), 0 !== a.left && (h += a.left), 0 !== a.top && (n += a.top), i.css({top: n, left: h})
                }
            }), this
        }
    }
}(jQuery);
!function (t, e, n) {
    "use strict";
    var i = function () {
        var t = n.body || n.documentElement, t = t.style;
        return"" == t.WebkitTransition ? "-webkit-" : "" == t.MozTransition ? "-moz-" : "" == t.OTransition ? "-o-" : "" == t.transition ? "" : !1
    }, o = i() === !1 ? !1 : !0, r = function (t, e, n) {
        var o = {}, r = i();
        o[r + "transform"] = "translateX(" + e + ")", o[r + "transition"] = r + "transform " + n + "s linear", t.css(o)
    }, a = "ontouchstart"in e, u = e.navigator.pointerEnabled || e.navigator.msPointerEnabled, l = function (t) {
        if (a)return!0;
        if (!u || "undefined" == typeof t || "undefined" == typeof t.pointerType)return!1;
        if ("undefined" != typeof t.MSPOINTER_TYPE_MOUSE) {
            if (t.MSPOINTER_TYPE_MOUSE != t.pointerType)return!0
        } else if ("mouse" != t.pointerType)return!0;
        return!1
    };
    t.fn.imageLightbox = function (i) {
        var i = t.extend({selector: 'id="imagelightbox"', allowedTypes: "png|jpg|jpeg|gif", animationSpeed: 250, preloadNext: !0, enableKeyboard: !0, quitOnEnd: !1, quitOnImgClick: !1, quitOnDocClick: !0, onStart: !1, onEnd: !1, onLoadStart: !1, onLoadEnd: !1}, i), d = t([]), f = t(), c = t(), p = 0, g = 0, s = 0, h = !1, v = function (e) {
            return"a" == t(e).prop("tagName").toLowerCase() && new RegExp(".(" + i.allowedTypes + ")$", "i").test(t(e).attr("href"))
        }, m = function () {
            if (!c.length)return!0;
            var n = .8 * t(e).width(), i = .9 * t(e).height(), o = new Image;
            o.src = c.attr("src"), o.onload = function () {
                if (p = o.width, g = o.height, p > n || g > i) {
                    var r = p / g > n / i ? p / n : g / i;
                    p /= r, g /= r
                }
                c.css({width: p + "px", height: g + "px", top: (t(e).height() - g) / 2 + "px", left: (t(e).width() - p) / 2 + "px"})
            }
        }, x = function (e) {
            if (h)return!1;
            if (e = "undefined" == typeof e ? !1 : "left" == e ? 1 : -1, c.length) {
                if (e !== !1 && (d.length < 2 || i.quitOnEnd === !0 && (-1 === e && 0 == d.index(f) || 1 === e && d.index(f) == d.length - 1)))return y(), !1;
                var n = {opacity: 0};
                o ? r(c, 100 * e - s + "px", i.animationSpeed / 1e3) : n.left = parseInt(c.css("left")) + 100 * e + "px", c.animate(n, i.animationSpeed, function () {
                    E()
                }), s = 0
            }
            h = !0, i.onLoadStart !== !1 && i.onLoadStart(), setTimeout(function () {
                c = t("<img " + i.selector + " />").attr("src", f.attr("href")).load(function () {
                    c.appendTo("body"), m();
                    var n = {opacity: 1};
                    if (c.css("opacity", 0), o)r(c, -100 * e + "px", 0), setTimeout(function () {
                        r(c, "0px", i.animationSpeed / 1e3)
                    }, 50); else {
                        var a = parseInt(c.css("left"));
                        n.left = a + "px", c.css("left", a - 100 * e + "px")
                    }
                    if (c.animate(n, i.animationSpeed, function () {
                        h = !1, i.onLoadEnd !== !1 && i.onLoadEnd()
                    }), i.preloadNext) {
                        var u = d.eq(d.index(f) + 1);
                        u.length || (u = d.eq(0)), t("<img />").attr("src", u.attr("href")).load()
                    }
                }).error(function () {
                    i.onLoadEnd !== !1 && i.onLoadEnd()
                });
                var n = 0, a = 0, g = 0;
                c.on(u ? "pointerup MSPointerUp" : "click",function (t) {
                    if (t.preventDefault(), i.quitOnImgClick)return y(), !1;
                    if (l(t.originalEvent))return!0;
                    var e = (t.pageX || t.originalEvent.pageX) - t.target.offsetLeft;
                    f = d.eq(d.index(f) - (p / 2 > e ? 1 : -1)), f.length || (f = d.eq(p / 2 > e ? d.length : 0)), x(p / 2 > e ? "left" : "right")
                }).on("mousemove",function (t) {
                    var e = (t.pageX || t.originalEvent.pageX) - t.target.offsetLeft;
                    c.toggleClass("lightbox-previous", p / 2 > e).toggleClass("lightbox-next", e >= p / 2)
                }).on("touchstart pointerdown MSPointerDown",function (t) {
                    return!l(t.originalEvent) || i.quitOnImgClick ? !0 : (o && (g = parseInt(c.css("left"))), n = t.originalEvent.pageX || t.originalEvent.touches[0].pageX, void 0)
                }).on("touchmove pointermove MSPointerMove",function (t) {
                    return!l(t.originalEvent) || i.quitOnImgClick ? !0 : (t.preventDefault(), a = t.originalEvent.pageX || t.originalEvent.touches[0].pageX, s = n - a, o ? r(c, -s + "px", 0) : c.css("left", g - s + "px"), void 0)
                }).on("touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel", function (t) {
                    return!l(t.originalEvent) || i.quitOnImgClick ? !0 : (Math.abs(s) > 50 ? (f = d.eq(d.index(f) - (0 > s ? 1 : -1)), f.length || (f = d.eq(0 > s ? d.length : 0)), x(s > 0 ? "right" : "left")) : o ? r(c, "0px", i.animationSpeed / 1e3) : c.animate({left: g + "px"}, i.animationSpeed / 2), void 0)
                })
            }, i.animationSpeed + 100)
        }, E = function () {
            return c.length ? (c.remove(), c = t(), void 0) : !1
        }, y = function () {
            return c.length ? (c.animate({opacity: 0}, i.animationSpeed, function () {
                E(), h = !1, i.onEnd !== !1 && i.onEnd()
            }), void 0) : !1
        };
        return t(e).on("resize", m), i.quitOnDocClick && t(n).on(a ? "touchend" : "click", function (e) {
            c.length && !t(e.target).is(c) && y()
        }), i.enableKeyboard && t(n).on("keyup", function (t) {
            return c.length ? (t.preventDefault(), 27 == t.keyCode && y(), (37 == t.keyCode || 39 == t.keyCode) && (f = d.eq(d.index(f) - (37 == t.keyCode ? 1 : -1)), f.length || (f = d.eq(37 == t.keyCode ? d.length : 0)), x(37 == t.keyCode ? "left" : "right")), void 0) : !0
        }), t(n).on("click", this.selector, function (e) {
            return v(this) ? (e.preventDefault(), h ? !1 : (h = !1, i.onStart !== !1 && i.onStart(), f = t(this), x(), void 0)) : !0
        }), this.each(function () {
            return v(this) ? (d = d.add(t(this)), void 0) : !0
        }), this.switchImageLightbox = function (t) {
            var e = d.eq(t);
            if (e.length) {
                var n = d.index(f);
                f = e, x(n > t ? "left" : "right")
            }
            return this
        }, this.quitImageLightbox = function () {
            return y(), this
        }, this
    }
}(jQuery, window, document);
/* jquery.nicescroll 3.5.4 InuYaksa*2013 MIT http://areaaperta.com/nicescroll */
(function (e) {
    "function" === typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
})(function (e) {
    var y = !1, C = !1, J = 5E3, K = 2E3, x = 0, F = ["ms", "moz", "webkit", "o"], s = window.requestAnimationFrame || !1, v = window.cancelAnimationFrame || !1;
    if (!s)for (var L in F) {
        var D = F[L];
        s || (s = window[D + "RequestAnimationFrame"]);
        v || (v = window[D + "CancelAnimationFrame"] || window[D + "CancelRequestAnimationFrame"])
    }
    var z = window.MutationObserver || window.WebKitMutationObserver || !1, G = {zindex: "auto", cursoropacitymin: 0, cursoropacitymax: 1, cursorcolor: "#424242",
        cursorwidth: "5px", cursorborder: "1px solid #fff", cursorborderradius: "5px", scrollspeed: 60, mousescrollstep: 24, touchbehavior: !1, hwacceleration: !0, usetransition: !0, boxzoom: !1, dblclickzoom: !0, gesturezoom: !0, grabcursorenabled: !0, autohidemode: !0, background: "", iframeautoresize: !0, cursorminheight: 32, preservenativescrolling: !0, railoffset: !1, bouncescroll: !0, spacebarenabled: !0, railpadding: {top: 0, right: 0, left: 0, bottom: 0}, disableoutline: !0, horizrailenabled: !0, railalign: "right", railvalign: "bottom", enabletranslate3d: !0,
        enablemousewheel: !0, enablekeyboard: !0, smoothscroll: !0, sensitiverail: !0, enablemouselockapi: !0, cursorfixedheight: !1, directionlockdeadzone: 6, hidecursordelay: 400, nativeparentscrolling: !0, enablescrollonselection: !0, overflowx: !0, overflowy: !0, cursordragspeed: 0.3, rtlmode: "auto", cursordragontouch: !1, oneaxismousemode: "auto", scriptpath: function () {
            var e = document.getElementsByTagName("script"), e = e[e.length - 1].src.split("?")[0];
            return 0 < e.split("/").length ? e.split("/").slice(0, -1).join("/") + "/" : ""
        }()}, E = !1, M = function () {
        if (E)return E;
        var e = document.createElement("DIV"), b = {haspointerlock: "pointerLockElement"in document || "mozPointerLockElement"in document || "webkitPointerLockElement"in document};
        b.isopera = "opera"in window;
        b.isopera12 = b.isopera && "getUserMedia"in navigator;
        b.isoperamini = "[object OperaMini]" === Object.prototype.toString.call(window.operamini);
        b.isie = "all"in document && "attachEvent"in e && !b.isopera;
        b.isieold = b.isie && !("msInterpolationMode"in e.style);
        b.isie7 = b.isie && !b.isieold && (!("documentMode"in document) || 7 == document.documentMode);
        b.isie8 = b.isie && "documentMode"in document && 8 == document.documentMode;
        b.isie9 = b.isie && "performance"in window && 9 <= document.documentMode;
        b.isie10 = b.isie && "performance"in window && 10 <= document.documentMode;
        b.isie9mobile = /iemobile.9/i.test(navigator.userAgent);
        b.isie9mobile && (b.isie9 = !1);
        b.isie7mobile = !b.isie9mobile && b.isie7 && /iemobile/i.test(navigator.userAgent);
        b.ismozilla = "MozAppearance"in e.style;
        b.iswebkit = "WebkitAppearance"in e.style;
        b.ischrome = "chrome"in window;
        b.ischrome22 = b.ischrome && b.haspointerlock;
        b.ischrome26 = b.ischrome && "transition"in e.style;
        b.cantouch = "ontouchstart"in document.documentElement || "ontouchstart"in window;
        b.hasmstouch = window.navigator.msPointerEnabled || !1;
        b.ismac = /^mac$/i.test(navigator.platform);
        b.isios = b.cantouch && /iphone|ipad|ipod/i.test(navigator.platform);
        b.isios4 = b.isios && !("seal"in Object);
        b.isandroid = /android/i.test(navigator.userAgent);
        b.trstyle = !1;
        b.hastransform = !1;
        b.hastranslate3d = !1;
        b.transitionstyle = !1;
        b.hastransition = !1;
        b.transitionend = !1;
        for (var h = ["transform",
            "msTransform", "webkitTransform", "MozTransform", "OTransform"], k = 0; k < h.length; k++)if ("undefined" != typeof e.style[h[k]]) {
            b.trstyle = h[k];
            break
        }
        b.hastransform = !1 != b.trstyle;
        b.hastransform && (e.style[b.trstyle] = "translate3d(1px,2px,3px)", b.hastranslate3d = /translate3d/.test(e.style[b.trstyle]));
        b.transitionstyle = !1;
        b.prefixstyle = "";
        b.transitionend = !1;
        for (var h = "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(" "), l = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "),
                 q = "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(" "), k = 0; k < h.length; k++)if (h[k]in e.style) {
            b.transitionstyle = h[k];
            b.prefixstyle = l[k];
            b.transitionend = q[k];
            break
        }
        b.ischrome26 && (b.prefixstyle = l[1]);
        b.hastransition = b.transitionstyle;
        a:{
            h = ["-moz-grab", "-webkit-grab", "grab"];
            if (b.ischrome && !b.ischrome22 || b.isie)h = [];
            for (k = 0; k < h.length; k++)if (l = h[k], e.style.cursor = l, e.style.cursor == l) {
                h = l;
                break a
            }
            h = "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize"
        }
        b.cursorgrabvalue =
            h;
        b.hasmousecapture = "setCapture"in e;
        b.hasMutationObserver = !1 !== z;
        return E = b
    }, N = function (g, b) {
        function h() {
            var c = a.win;
            if ("zIndex"in c)return c.zIndex();
            for (; 0 < c.length && 9 != c[0].nodeType;) {
                var b = c.css("zIndex");
                if (!isNaN(b) && 0 != b)return parseInt(b);
                c = c.parent()
            }
            return!1
        }

        function k(c, b, f) {
            b = c.css(b);
            c = parseFloat(b);
            return isNaN(c) ? (c = w[b] || 0, f = 3 == c ? f ? a.win.outerHeight() - a.win.innerHeight() : a.win.outerWidth() - a.win.innerWidth() : 1, a.isie8 && c && (c += 1), f ? c : 0) : c
        }

        function l(c, b, f, e) {
            a._bind(c, b, function (a) {
                a =
                    a ? a : window.event;
                var e = {original: a, target: a.target || a.srcElement, type: "wheel", deltaMode: "MozMousePixelScroll" == a.type ? 0 : 1, deltaX: 0, deltaZ: 0, preventDefault: function () {
                    a.preventDefault ? a.preventDefault() : a.returnValue = !1;
                    return!1
                }, stopImmediatePropagation: function () {
                    a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.cancelBubble = !0
                }};
                "mousewheel" == b ? (e.deltaY = -0.025 * a.wheelDelta, a.wheelDeltaX && (e.deltaX = -0.025 * a.wheelDeltaX)) : e.deltaY = a.detail;
                return f.call(c, e)
            }, e)
        }

        function q(c, b, f) {
            var e, d;
            0 == c.deltaMode ? (e = -Math.floor(c.deltaX * (a.opt.mousescrollstep / 54)), d = -Math.floor(c.deltaY * (a.opt.mousescrollstep / 54))) : 1 == c.deltaMode && (e = -Math.floor(c.deltaX * a.opt.mousescrollstep), d = -Math.floor(c.deltaY * a.opt.mousescrollstep));
            b && (a.opt.oneaxismousemode && 0 == e && d) && (e = d, d = 0);
            e && (a.scrollmom && a.scrollmom.stop(), a.lastdeltax += e, a.debounced("mousewheelx", function () {
                var c = a.lastdeltax;
                a.lastdeltax = 0;
                a.rail.drag || a.doScrollLeftBy(c)
            }, 15));
            if (d) {
                if (a.opt.nativeparentscrolling && f && !a.ispage && !a.zoomactive)if (0 >
                    d) {
                    if (a.getScrollTop() >= a.page.maxh)return!0
                } else if (0 >= a.getScrollTop())return!0;
                a.scrollmom && a.scrollmom.stop();
                a.lastdeltay += d;
                a.debounced("mousewheely", function () {
                    var c = a.lastdeltay;
                    a.lastdeltay = 0;
                    a.rail.drag || a.doScrollBy(c)
                }, 15)
            }
            c.stopImmediatePropagation();
            return c.preventDefault()
        }

        var a = this;
        this.version = "3.5.4";
        this.name = "nicescroll";
        this.me = b;
        this.opt = {doc: e("body"), win: !1};
        e.extend(this.opt, G);
        this.opt.snapbackspeed = 80;
        if (g)for (var p in a.opt)"undefined" != typeof g[p] && (a.opt[p] = g[p]);
        this.iddoc =
            (this.doc = a.opt.doc) && this.doc[0] ? this.doc[0].id || "" : "";
        this.ispage = /^BODY|HTML/.test(a.opt.win ? a.opt.win[0].nodeName : this.doc[0].nodeName);
        this.haswrapper = !1 !== a.opt.win;
        this.win = a.opt.win || (this.ispage ? e(window) : this.doc);
        this.docscroll = this.ispage && !this.haswrapper ? e(window) : this.win;
        this.body = e("body");
        this.iframe = this.isfixed = this.viewport = !1;
        this.isiframe = "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName;
        this.istextarea = "TEXTAREA" == this.win[0].nodeName;
        this.forcescreen = !1;
        this.canshowonmouseevent =
            "scroll" != a.opt.autohidemode;
        this.page = this.view = this.onzoomout = this.onzoomin = this.onscrollcancel = this.onscrollend = this.onscrollstart = this.onclick = this.ongesturezoom = this.onkeypress = this.onmousewheel = this.onmousemove = this.onmouseup = this.onmousedown = !1;
        this.scroll = {x: 0, y: 0};
        this.scrollratio = {x: 0, y: 0};
        this.cursorheight = 20;
        this.scrollvaluemax = 0;
        this.observerremover = this.observer = this.scrollmom = this.scrollrunning = this.isrtlmode = !1;
        do this.id = "ascrail" + K++; while (document.getElementById(this.id));
        this.hasmousefocus =
            this.hasfocus = this.zoomactive = this.zoom = this.selectiondrag = this.cursorfreezed = this.cursor = this.rail = !1;
        this.visibility = !0;
        this.hidden = this.locked = !1;
        this.cursoractive = !0;
        this.wheelprevented = !1;
        this.overflowx = a.opt.overflowx;
        this.overflowy = a.opt.overflowy;
        this.nativescrollingarea = !1;
        this.checkarea = 0;
        this.events = [];
        this.saved = {};
        this.delaylist = {};
        this.synclist = {};
        this.lastdeltay = this.lastdeltax = 0;
        this.detected = M();
        var d = e.extend({}, this.detected);
        this.ishwscroll = (this.canhwscroll = d.hastransform && a.opt.hwacceleration) &&
            a.haswrapper;
        this.istouchcapable = !1;
        d.cantouch && (d.ischrome && !d.isios && !d.isandroid) && (this.istouchcapable = !0, d.cantouch = !1);
        d.cantouch && (d.ismozilla && !d.isios && !d.isandroid) && (this.istouchcapable = !0, d.cantouch = !1);
        a.opt.enablemouselockapi || (d.hasmousecapture = !1, d.haspointerlock = !1);
        this.delayed = function (c, b, f, e) {
            var d = a.delaylist[c], h = (new Date).getTime();
            if (!e && d && d.tt)return!1;
            d && d.tt && clearTimeout(d.tt);
            if (d && d.last + f > h && !d.tt)a.delaylist[c] = {last: h + f, tt: setTimeout(function () {
                a && (a.delaylist[c].tt =
                    0, b.call())
            }, f)}; else if (!d || !d.tt)a.delaylist[c] = {last: h, tt: 0}, setTimeout(function () {
                b.call()
            }, 0)
        };
        this.debounced = function (c, b, f) {
            var d = a.delaylist[c];
            (new Date).getTime();
            a.delaylist[c] = b;
            d || setTimeout(function () {
                var b = a.delaylist[c];
                a.delaylist[c] = !1;
                b.call()
            }, f)
        };
        var r = !1;
        this.synched = function (c, b) {
            a.synclist[c] = b;
            (function () {
                r || (s(function () {
                    r = !1;
                    for (c in a.synclist) {
                        var b = a.synclist[c];
                        b && b.call(a);
                        a.synclist[c] = !1
                    }
                }), r = !0)
            })();
            return c
        };
        this.unsynched = function (c) {
            a.synclist[c] && (a.synclist[c] = !1)
        };
        this.css = function (c, b) {
            for (var f in b)a.saved.css.push([c, f, c.css(f)]), c.css(f, b[f])
        };
        this.scrollTop = function (c) {
            return"undefined" == typeof c ? a.getScrollTop() : a.setScrollTop(c)
        };
        this.scrollLeft = function (c) {
            return"undefined" == typeof c ? a.getScrollLeft() : a.setScrollLeft(c)
        };
        BezierClass = function (a, b, f, d, e, h, k) {
            this.st = a;
            this.ed = b;
            this.spd = f;
            this.p1 = d || 0;
            this.p2 = e || 1;
            this.p3 = h || 0;
            this.p4 = k || 1;
            this.ts = (new Date).getTime();
            this.df = this.ed - this.st
        };
        BezierClass.prototype = {B2: function (a) {
            return 3 * a * a * (1 -
                a)
        }, B3: function (a) {
            return 3 * a * (1 - a) * (1 - a)
        }, B4: function (a) {
            return(1 - a) * (1 - a) * (1 - a)
        }, getNow: function () {
            var a = 1 - ((new Date).getTime() - this.ts) / this.spd, b = this.B2(a) + this.B3(a) + this.B4(a);
            return 0 > a ? this.ed : this.st + Math.round(this.df * b)
        }, update: function (a, b) {
            this.st = this.getNow();
            this.ed = a;
            this.spd = b;
            this.ts = (new Date).getTime();
            this.df = this.ed - this.st;
            return this
        }};
        if (this.ishwscroll) {
            this.doc.translate = {x: 0, y: 0, tx: "0px", ty: "0px"};
            d.hastranslate3d && d.isios && this.doc.css("-webkit-backface-visibility",
                "hidden");
            var t = function () {
                var c = a.doc.css(d.trstyle);
                return c && "matrix" == c.substr(0, 6) ? c.replace(/^.*\((.*)\)$/g, "$1").replace(/px/g, "").split(/, +/) : !1
            };
            this.getScrollTop = function (c) {
                if (!c) {
                    if (c = t())return 16 == c.length ? -c[13] : -c[5];
                    if (a.timerscroll && a.timerscroll.bz)return a.timerscroll.bz.getNow()
                }
                return a.doc.translate.y
            };
            this.getScrollLeft = function (c) {
                if (!c) {
                    if (c = t())return 16 == c.length ? -c[12] : -c[4];
                    if (a.timerscroll && a.timerscroll.bh)return a.timerscroll.bh.getNow()
                }
                return a.doc.translate.x
            };
            this.notifyScrollEvent = document.createEvent ? function (a) {
                var b = document.createEvent("UIEvents");
                b.initUIEvent("scroll", !1, !0, window, 1);
                a.dispatchEvent(b)
            } : document.fireEvent ? function (a) {
                var b = document.createEventObject();
                a.fireEvent("onscroll");
                b.cancelBubble = !0
            } : function (a, b) {
            };
            d.hastranslate3d && a.opt.enabletranslate3d ? (this.setScrollTop = function (c, b) {
                a.doc.translate.y = c;
                a.doc.translate.ty = -1 * c + "px";
                a.doc.css(d.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                b || a.notifyScrollEvent(a.win[0])
            },
                this.setScrollLeft = function (c, b) {
                    a.doc.translate.x = c;
                    a.doc.translate.tx = -1 * c + "px";
                    a.doc.css(d.trstyle, "translate3d(" + a.doc.translate.tx + "," + a.doc.translate.ty + ",0px)");
                    b || a.notifyScrollEvent(a.win[0])
                }) : (this.setScrollTop = function (c, b) {
                a.doc.translate.y = c;
                a.doc.translate.ty = -1 * c + "px";
                a.doc.css(d.trstyle, "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                b || a.notifyScrollEvent(a.win[0])
            }, this.setScrollLeft = function (c, b) {
                a.doc.translate.x = c;
                a.doc.translate.tx = -1 * c + "px";
                a.doc.css(d.trstyle,
                    "translate(" + a.doc.translate.tx + "," + a.doc.translate.ty + ")");
                b || a.notifyScrollEvent(a.win[0])
            })
        } else this.getScrollTop = function () {
            return a.docscroll.scrollTop()
        }, this.setScrollTop = function (c) {
            return a.docscroll.scrollTop(c)
        }, this.getScrollLeft = function () {
            return a.docscroll.scrollLeft()
        }, this.setScrollLeft = function (c) {
            return a.docscroll.scrollLeft(c)
        };
        this.getTarget = function (a) {
            return!a ? !1 : a.target ? a.target : a.srcElement ? a.srcElement : !1
        };
        this.hasParent = function (a, b) {
            if (!a)return!1;
            for (var f = a.target ||
                a.srcElement || a || !1; f && f.id != b;)f = f.parentNode || !1;
            return!1 !== f
        };
        var w = {thin: 1, medium: 3, thick: 5};
        this.getOffset = function () {
            if (a.isfixed)return{top: parseFloat(a.win.css("top")), left: parseFloat(a.win.css("left"))};
            if (!a.viewport)return a.win.offset();
            var c = a.win.offset(), b = a.viewport.offset();
            return{top: c.top - b.top + a.viewport.scrollTop(), left: c.left - b.left + a.viewport.scrollLeft()}
        };
        this.updateScrollBar = function (c) {
            if (a.ishwscroll)a.rail.css({height: a.win.innerHeight()}), a.railh && a.railh.css({width: a.win.innerWidth()});
            else {
                var b = a.getOffset(), f = b.top, d = b.left, f = f + k(a.win, "border-top-width", !0);
                a.win.outerWidth();
                a.win.innerWidth();
                var d = d + (a.rail.align ? a.win.outerWidth() - k(a.win, "border-right-width") - a.rail.width : k(a.win, "border-left-width")), e = a.opt.railoffset;
                e && (e.top && (f += e.top), a.rail.align && e.left && (d += e.left));
                a.locked || a.rail.css({top: f, left: d, height: c ? c.h : a.win.innerHeight()});
                a.zoom && a.zoom.css({top: f + 1, left: 1 == a.rail.align ? d - 20 : d + a.rail.width + 4});
                a.railh && !a.locked && (f = b.top, d = b.left, c = a.railh.align ?
                    f + k(a.win, "border-top-width", !0) + a.win.innerHeight() - a.railh.height : f + k(a.win, "border-top-width", !0), d += k(a.win, "border-left-width"), a.railh.css({top: c, left: d, width: a.railh.width}))
            }
        };
        this.doRailClick = function (c, b, f) {
            var d;
            a.locked || (a.cancelEvent(c), b ? (b = f ? a.doScrollLeft : a.doScrollTop, d = f ? (c.pageX - a.railh.offset().left - a.cursorwidth / 2) * a.scrollratio.x : (c.pageY - a.rail.offset().top - a.cursorheight / 2) * a.scrollratio.y, b(d)) : (b = f ? a.doScrollLeftBy : a.doScrollBy, d = f ? a.scroll.x : a.scroll.y, c = f ? c.pageX - a.railh.offset().left :
                c.pageY - a.rail.offset().top, f = f ? a.view.w : a.view.h, d >= c ? b(f) : b(-f)))
        };
        a.hasanimationframe = s;
        a.hascancelanimationframe = v;
        a.hasanimationframe ? a.hascancelanimationframe || (v = function () {
            a.cancelAnimationFrame = !0
        }) : (s = function (a) {
            return setTimeout(a, 15 - Math.floor(+new Date / 1E3) % 16)
        }, v = clearInterval);
        this.init = function () {
            a.saved.css = [];
            if (d.isie7mobile || d.isoperamini)return!0;
            d.hasmstouch && a.css(a.ispage ? e("html") : a.win, {"-ms-touch-action": "none"});
            a.zindex = "auto";
            a.zindex = !a.ispage && "auto" == a.opt.zindex ?
                h() || "auto" : a.opt.zindex;
            !a.ispage && "auto" != a.zindex && a.zindex > x && (x = a.zindex);
            a.isie && (0 == a.zindex && "auto" == a.opt.zindex) && (a.zindex = "auto");
            if (!a.ispage || !d.cantouch && !d.isieold && !d.isie9mobile) {
                var c = a.docscroll;
                a.ispage && (c = a.haswrapper ? a.win : a.doc);
                d.isie9mobile || a.css(c, {"overflow-y": "hidden"});
                a.ispage && d.isie7 && ("BODY" == a.doc[0].nodeName ? a.css(e("html"), {"overflow-y": "hidden"}) : "HTML" == a.doc[0].nodeName && a.css(e("body"), {"overflow-y": "hidden"}));
                d.isios && (!a.ispage && !a.haswrapper) && a.css(e("body"),
                    {"-webkit-overflow-scrolling": "touch"});
                var b = e(document.createElement("div"));
                b.css({position: "relative", top: 0, "float": "right", width: a.opt.cursorwidth, height: "0px", "background-color": a.opt.cursorcolor, border: a.opt.cursorborder, "background-clip": "padding-box", "-webkit-border-radius": a.opt.cursorborderradius, "-moz-border-radius": a.opt.cursorborderradius, "border-radius": a.opt.cursorborderradius});
                b.hborder = parseFloat(b.outerHeight() - b.innerHeight());
                a.cursor = b;
                var f = e(document.createElement("div"));
                f.attr("id", a.id);
                f.addClass("nicescroll-rails");
                var u, k, g = ["left", "right"], l;
                for (l in g)k = g[l], (u = a.opt.railpadding[k]) ? f.css("padding-" + k, u + "px") : a.opt.railpadding[k] = 0;
                f.append(b);
                f.width = Math.max(parseFloat(a.opt.cursorwidth), b.outerWidth()) + a.opt.railpadding.left + a.opt.railpadding.right;
                f.css({width: f.width + "px", zIndex: a.zindex, background: a.opt.background, cursor: "default"});
                f.visibility = !0;
                f.scrollable = !0;
                f.align = "left" == a.opt.railalign ? 0 : 1;
                a.rail = f;
                b = a.rail.drag = !1;
                a.opt.boxzoom && (!a.ispage && !d.isieold) && (b = document.createElement("div"), a.bind(b, "click", a.doZoom), a.zoom = e(b), a.zoom.css({cursor: "pointer", "z-index": a.zindex, backgroundImage: "url(" + a.opt.scriptpath + "zoomico.png)", height: 18, width: 18, backgroundPosition: "0px 0px"}), a.opt.dblclickzoom && a.bind(a.win, "dblclick", a.doZoom), d.cantouch && a.opt.gesturezoom && (a.ongesturezoom = function (c) {
                    1.5 < c.scale && a.doZoomIn(c);
                    0.8 > c.scale && a.doZoomOut(c);
                    return a.cancelEvent(c)
                }, a.bind(a.win, "gestureend", a.ongesturezoom)));
                a.railh = !1;
                if (a.opt.horizrailenabled) {
                    a.css(c,
                        {"overflow-x": "hidden"});
                    b = e(document.createElement("div"));
                    b.css({position: "relative", top: 0, height: a.opt.cursorwidth, width: "0px", "background-color": a.opt.cursorcolor, border: a.opt.cursorborder, "background-clip": "padding-box", "-webkit-border-radius": a.opt.cursorborderradius, "-moz-border-radius": a.opt.cursorborderradius, "border-radius": a.opt.cursorborderradius});
                    b.wborder = parseFloat(b.outerWidth() - b.innerWidth());
                    a.cursorh = b;
                    var m = e(document.createElement("div"));
                    m.attr("id", a.id + "-hr");
                    m.addClass("nicescroll-rails");
                    m.height = Math.max(parseFloat(a.opt.cursorwidth), b.outerHeight());
                    m.css({height: m.height + "px", zIndex: a.zindex, background: a.opt.background});
                    m.append(b);
                    m.visibility = !0;
                    m.scrollable = !0;
                    m.align = "top" == a.opt.railvalign ? 0 : 1;
                    a.railh = m;
                    a.railh.drag = !1
                }
                a.ispage ? (f.css({position: "fixed", top: "0px", height: "100%"}), f.align ? f.css({right: "0px"}) : f.css({left: "0px"}), a.body.append(f), a.railh && (m.css({position: "fixed", left: "0px", width: "100%"}), m.align ? m.css({bottom: "0px"}) : m.css({top: "0px"}), a.body.append(m))) : (a.ishwscroll ?
                    ("static" == a.win.css("position") && a.css(a.win, {position: "relative"}), c = "HTML" == a.win[0].nodeName ? a.body : a.win, a.zoom && (a.zoom.css({position: "absolute", top: 1, right: 0, "margin-right": f.width + 4}), c.append(a.zoom)), f.css({position: "absolute", top: 0}), f.align ? f.css({right: 0}) : f.css({left: 0}), c.append(f), m && (m.css({position: "absolute", left: 0, bottom: 0}), m.align ? m.css({bottom: 0}) : m.css({top: 0}), c.append(m))) : (a.isfixed = "fixed" == a.win.css("position"), c = a.isfixed ? "fixed" : "absolute", a.isfixed || (a.viewport = a.getViewport(a.win[0])),
                    a.viewport && (a.body = a.viewport, !1 == /fixed|relative|absolute/.test(a.viewport.css("position")) && a.css(a.viewport, {position: "relative"})), f.css({position: c}), a.zoom && a.zoom.css({position: c}), a.updateScrollBar(), a.body.append(f), a.zoom && a.body.append(a.zoom), a.railh && (m.css({position: c}), a.body.append(m))), d.isios && a.css(a.win, {"-webkit-tap-highlight-color": "rgba(0,0,0,0)", "-webkit-touch-callout": "none"}), d.isie && a.opt.disableoutline && a.win.attr("hideFocus", "true"), d.iswebkit && a.opt.disableoutline &&
                    a.win.css({outline: "none"}));
                !1 === a.opt.autohidemode ? (a.autohidedom = !1, a.rail.css({opacity: a.opt.cursoropacitymax}), a.railh && a.railh.css({opacity: a.opt.cursoropacitymax})) : !0 === a.opt.autohidemode || "leave" === a.opt.autohidemode ? (a.autohidedom = e().add(a.rail), d.isie8 && (a.autohidedom = a.autohidedom.add(a.cursor)), a.railh && (a.autohidedom = a.autohidedom.add(a.railh)), a.railh && d.isie8 && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "scroll" == a.opt.autohidemode ? (a.autohidedom = e().add(a.rail), a.railh && (a.autohidedom =
                    a.autohidedom.add(a.railh))) : "cursor" == a.opt.autohidemode ? (a.autohidedom = e().add(a.cursor), a.railh && (a.autohidedom = a.autohidedom.add(a.cursorh))) : "hidden" == a.opt.autohidemode && (a.autohidedom = !1, a.hide(), a.locked = !1);
                if (d.isie9mobile)a.scrollmom = new H(a), a.onmangotouch = function (c) {
                    c = a.getScrollTop();
                    var b = a.getScrollLeft();
                    if (c == a.scrollmom.lastscrolly && b == a.scrollmom.lastscrollx)return!0;
                    var f = c - a.mangotouch.sy, d = b - a.mangotouch.sx;
                    if (0 != Math.round(Math.sqrt(Math.pow(d, 2) + Math.pow(f, 2)))) {
                        var n = 0 >
                            f ? -1 : 1, e = 0 > d ? -1 : 1, h = +new Date;
                        a.mangotouch.lazy && clearTimeout(a.mangotouch.lazy);
                        80 < h - a.mangotouch.tm || a.mangotouch.dry != n || a.mangotouch.drx != e ? (a.scrollmom.stop(), a.scrollmom.reset(b, c), a.mangotouch.sy = c, a.mangotouch.ly = c, a.mangotouch.sx = b, a.mangotouch.lx = b, a.mangotouch.dry = n, a.mangotouch.drx = e, a.mangotouch.tm = h) : (a.scrollmom.stop(), a.scrollmom.update(a.mangotouch.sx - d, a.mangotouch.sy - f), a.mangotouch.tm = h, f = Math.max(Math.abs(a.mangotouch.ly - c), Math.abs(a.mangotouch.lx - b)), a.mangotouch.ly = c, a.mangotouch.lx =
                            b, 2 < f && (a.mangotouch.lazy = setTimeout(function () {
                            a.mangotouch.lazy = !1;
                            a.mangotouch.dry = 0;
                            a.mangotouch.drx = 0;
                            a.mangotouch.tm = 0;
                            a.scrollmom.doMomentum(30)
                        }, 100)))
                    }
                }, f = a.getScrollTop(), m = a.getScrollLeft(), a.mangotouch = {sy: f, ly: f, dry: 0, sx: m, lx: m, drx: 0, lazy: !1, tm: 0}, a.bind(a.docscroll, "scroll", a.onmangotouch); else {
                    if (d.cantouch || a.istouchcapable || a.opt.touchbehavior || d.hasmstouch) {
                        a.scrollmom = new H(a);
                        a.ontouchstart = function (c) {
                            if (c.pointerType && 2 != c.pointerType)return!1;
                            a.hasmoving = !1;
                            if (!a.locked) {
                                if (d.hasmstouch)for (var b =
                                    c.target ? c.target : !1; b;) {
                                    var f = e(b).getNiceScroll();
                                    if (0 < f.length && f[0].me == a.me)break;
                                    if (0 < f.length)return!1;
                                    if ("DIV" == b.nodeName && b.id == a.id)break;
                                    b = b.parentNode ? b.parentNode : !1
                                }
                                a.cancelScroll();
                                if ((b = a.getTarget(c)) && /INPUT/i.test(b.nodeName) && /range/i.test(b.type))return a.stopPropagation(c);
                                !("clientX"in c) && "changedTouches"in c && (c.clientX = c.changedTouches[0].clientX, c.clientY = c.changedTouches[0].clientY);
                                a.forcescreen && (f = c, c = {original: c.original ? c.original : c}, c.clientX = f.screenX, c.clientY =
                                    f.screenY);
                                a.rail.drag = {x: c.clientX, y: c.clientY, sx: a.scroll.x, sy: a.scroll.y, st: a.getScrollTop(), sl: a.getScrollLeft(), pt: 2, dl: !1};
                                if (a.ispage || !a.opt.directionlockdeadzone)a.rail.drag.dl = "f"; else {
                                    var f = e(window).width(), n = e(window).height(), h = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth), k = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight), n = Math.max(0, k - n), f = Math.max(0, h - f);
                                    a.rail.drag.ck = !a.rail.scrollable && a.railh.scrollable ? 0 < n ? "v" : !1 : a.rail.scrollable && !a.railh.scrollable ? 0 < f ? "h" : !1 : !1;
                                    a.rail.drag.ck || (a.rail.drag.dl = "f")
                                }
                                a.opt.touchbehavior && (a.isiframe && d.isie) && (f = a.win.position(), a.rail.drag.x += f.left, a.rail.drag.y += f.top);
                                a.hasmoving = !1;
                                a.lastmouseup = !1;
                                a.scrollmom.reset(c.clientX, c.clientY);
                                if (!d.cantouch && !this.istouchcapable && !d.hasmstouch) {
                                    if (!b || !/INPUT|SELECT|TEXTAREA/i.test(b.nodeName))return!a.ispage && d.hasmousecapture && b.setCapture(), a.opt.touchbehavior ? (b.onclick && !b._onclick && (b._onclick = b.onclick, b.onclick = function (c) {
                                        if (a.hasmoving)return!1;
                                        b._onclick.call(this, c)
                                    }), a.cancelEvent(c)) : a.stopPropagation(c);
                                    /SUBMIT|CANCEL|BUTTON/i.test(e(b).attr("type")) && (pc = {tg: b, click: !1}, a.preventclick = pc)
                                }
                            }
                        };
                        a.ontouchend = function (c) {
                            if (c.pointerType && 2 != c.pointerType)return!1;
                            if (a.rail.drag && 2 == a.rail.drag.pt && (a.scrollmom.doMomentum(), a.rail.drag = !1, a.hasmoving && (a.lastmouseup = !0, a.hideCursor(), d.hasmousecapture && document.releaseCapture(), !d.cantouch)))return a.cancelEvent(c)
                        };
                        var q = a.opt.touchbehavior && a.isiframe && !d.hasmousecapture;
                        a.ontouchmove =
                            function (c, b) {
                                if (c.pointerType && 2 != c.pointerType)return!1;
                                if (a.rail.drag && 2 == a.rail.drag.pt) {
                                    if (d.cantouch && "undefined" == typeof c.original)return!0;
                                    a.hasmoving = !0;
                                    a.preventclick && !a.preventclick.click && (a.preventclick.click = a.preventclick.tg.onclick || !1, a.preventclick.tg.onclick = a.onpreventclick);
                                    c = e.extend({original: c}, c);
                                    "changedTouches"in c && (c.clientX = c.changedTouches[0].clientX, c.clientY = c.changedTouches[0].clientY);
                                    if (a.forcescreen) {
                                        var f = c;
                                        c = {original: c.original ? c.original : c};
                                        c.clientX = f.screenX;
                                        c.clientY = f.screenY
                                    }
                                    f = ofy = 0;
                                    if (q && !b) {
                                        var n = a.win.position(), f = -n.left;
                                        ofy = -n.top
                                    }
                                    var h = c.clientY + ofy, n = h - a.rail.drag.y, k = c.clientX + f, u = k - a.rail.drag.x, g = a.rail.drag.st - n;
                                    a.ishwscroll && a.opt.bouncescroll ? 0 > g ? g = Math.round(g / 2) : g > a.page.maxh && (g = a.page.maxh + Math.round((g - a.page.maxh) / 2)) : (0 > g && (h = g = 0), g > a.page.maxh && (g = a.page.maxh, h = 0));
                                    if (a.railh && a.railh.scrollable) {
                                        var l = a.rail.drag.sl - u;
                                        a.ishwscroll && a.opt.bouncescroll ? 0 > l ? l = Math.round(l / 2) : l > a.page.maxw && (l = a.page.maxw + Math.round((l - a.page.maxw) /
                                            2)) : (0 > l && (k = l = 0), l > a.page.maxw && (l = a.page.maxw, k = 0))
                                    }
                                    f = !1;
                                    if (a.rail.drag.dl)f = !0, "v" == a.rail.drag.dl ? l = a.rail.drag.sl : "h" == a.rail.drag.dl && (g = a.rail.drag.st); else {
                                        var n = Math.abs(n), u = Math.abs(u), m = a.opt.directionlockdeadzone;
                                        if ("v" == a.rail.drag.ck) {
                                            if (n > m && u <= 0.3 * n)return a.rail.drag = !1, !0;
                                            u > m && (a.rail.drag.dl = "f", e("body").scrollTop(e("body").scrollTop()))
                                        } else if ("h" == a.rail.drag.ck) {
                                            if (u > m && n <= 0.3 * u)return a.rail.drag = !1, !0;
                                            n > m && (a.rail.drag.dl = "f", e("body").scrollLeft(e("body").scrollLeft()))
                                        }
                                    }
                                    a.synched("touchmove",
                                        function () {
                                            a.rail.drag && 2 == a.rail.drag.pt && (a.prepareTransition && a.prepareTransition(0), a.rail.scrollable && a.setScrollTop(g), a.scrollmom.update(k, h), a.railh && a.railh.scrollable ? (a.setScrollLeft(l), a.showCursor(g, l)) : a.showCursor(g), d.isie10 && document.selection.clear())
                                        });
                                    d.ischrome && a.istouchcapable && (f = !1);
                                    if (f)return a.cancelEvent(c)
                                }
                            }
                    }
                    a.onmousedown = function (c, b) {
                        if (!(a.rail.drag && 1 != a.rail.drag.pt)) {
                            if (a.locked)return a.cancelEvent(c);
                            a.cancelScroll();
                            a.rail.drag = {x: c.clientX, y: c.clientY, sx: a.scroll.x,
                                sy: a.scroll.y, pt: 1, hr: !!b};
                            var f = a.getTarget(c);
                            !a.ispage && d.hasmousecapture && f.setCapture();
                            a.isiframe && !d.hasmousecapture && (a.saved.csspointerevents = a.doc.css("pointer-events"), a.css(a.doc, {"pointer-events": "none"}));
                            a.hasmoving = !1;
                            return a.cancelEvent(c)
                        }
                    };
                    a.onmouseup = function (c) {
                        if (a.rail.drag && (d.hasmousecapture && document.releaseCapture(), a.isiframe && !d.hasmousecapture && a.doc.css("pointer-events", a.saved.csspointerevents), 1 == a.rail.drag.pt))return a.rail.drag = !1, a.hasmoving && a.triggerScrollEnd(),
                            a.cancelEvent(c)
                    };
                    a.onmousemove = function (c) {
                        if (a.rail.drag && 1 == a.rail.drag.pt) {
                            if (d.ischrome && 0 == c.which)return a.onmouseup(c);
                            a.cursorfreezed = !0;
                            a.hasmoving = !0;
                            if (a.rail.drag.hr) {
                                a.scroll.x = a.rail.drag.sx + (c.clientX - a.rail.drag.x);
                                0 > a.scroll.x && (a.scroll.x = 0);
                                var b = a.scrollvaluemaxw;
                                a.scroll.x > b && (a.scroll.x = b)
                            } else a.scroll.y = a.rail.drag.sy + (c.clientY - a.rail.drag.y), 0 > a.scroll.y && (a.scroll.y = 0), b = a.scrollvaluemax, a.scroll.y > b && (a.scroll.y = b);
                            a.synched("mousemove", function () {
                                a.rail.drag && 1 == a.rail.drag.pt &&
                                (a.showCursor(), a.rail.drag.hr ? a.doScrollLeft(Math.round(a.scroll.x * a.scrollratio.x), a.opt.cursordragspeed) : a.doScrollTop(Math.round(a.scroll.y * a.scrollratio.y), a.opt.cursordragspeed))
                            });
                            return a.cancelEvent(c)
                        }
                    };
                    if (d.cantouch || a.opt.touchbehavior)a.onpreventclick = function (c) {
                        if (a.preventclick)return a.preventclick.tg.onclick = a.preventclick.click, a.preventclick = !1, a.cancelEvent(c)
                    }, a.bind(a.win, "mousedown", a.ontouchstart), a.onclick = d.isios ? !1 : function (c) {
                        return a.lastmouseup ? (a.lastmouseup = !1, a.cancelEvent(c)) :
                            !0
                    }, a.opt.grabcursorenabled && d.cursorgrabvalue && (a.css(a.ispage ? a.doc : a.win, {cursor: d.cursorgrabvalue}), a.css(a.rail, {cursor: d.cursorgrabvalue})); else {
                        var p = function (c) {
                            if (a.selectiondrag) {
                                if (c) {
                                    var b = a.win.outerHeight();
                                    c = c.pageY - a.selectiondrag.top;
                                    0 < c && c < b && (c = 0);
                                    c >= b && (c -= b);
                                    a.selectiondrag.df = c
                                }
                                0 != a.selectiondrag.df && (a.doScrollBy(2 * -Math.floor(a.selectiondrag.df / 6)), a.debounced("doselectionscroll", function () {
                                    p()
                                }, 50))
                            }
                        };
                        a.hasTextSelected = "getSelection"in document ? function () {
                            return 0 < document.getSelection().rangeCount
                        } :
                            "selection"in document ? function () {
                                return"None" != document.selection.type
                            } : function () {
                                return!1
                            };
                        a.onselectionstart = function (c) {
                            a.ispage || (a.selectiondrag = a.win.offset())
                        };
                        a.onselectionend = function (c) {
                            a.selectiondrag = !1
                        };
                        a.onselectiondrag = function (c) {
                            a.selectiondrag && a.hasTextSelected() && a.debounced("selectionscroll", function () {
                                p(c)
                            }, 250)
                        }
                    }
                    d.hasmstouch && (a.css(a.rail, {"-ms-touch-action": "none"}), a.css(a.cursor, {"-ms-touch-action": "none"}), a.bind(a.win, "MSPointerDown", a.ontouchstart), a.bind(document,
                        "MSPointerUp", a.ontouchend), a.bind(document, "MSPointerMove", a.ontouchmove), a.bind(a.cursor, "MSGestureHold", function (a) {
                        a.preventDefault()
                    }), a.bind(a.cursor, "contextmenu", function (a) {
                        a.preventDefault()
                    }));
                    this.istouchcapable && (a.bind(a.win, "touchstart", a.ontouchstart), a.bind(document, "touchend", a.ontouchend), a.bind(document, "touchcancel", a.ontouchend), a.bind(document, "touchmove", a.ontouchmove));
                    a.bind(a.cursor, "mousedown", a.onmousedown);
                    a.bind(a.cursor, "mouseup", a.onmouseup);
                    a.railh && (a.bind(a.cursorh,
                        "mousedown", function (c) {
                            a.onmousedown(c, !0)
                        }), a.bind(a.cursorh, "mouseup", a.onmouseup));
                    if (a.opt.cursordragontouch || !d.cantouch && !a.opt.touchbehavior)a.rail.css({cursor: "default"}), a.railh && a.railh.css({cursor: "default"}), a.jqbind(a.rail, "mouseenter", function () {
                        if (!a.win.is(":visible"))return!1;
                        a.canshowonmouseevent && a.showCursor();
                        a.rail.active = !0
                    }), a.jqbind(a.rail, "mouseleave", function () {
                        a.rail.active = !1;
                        a.rail.drag || a.hideCursor()
                    }), a.opt.sensitiverail && (a.bind(a.rail, "click", function (c) {
                        a.doRailClick(c,
                            !1, !1)
                    }), a.bind(a.rail, "dblclick", function (c) {
                        a.doRailClick(c, !0, !1)
                    }), a.bind(a.cursor, "click", function (c) {
                        a.cancelEvent(c)
                    }), a.bind(a.cursor, "dblclick", function (c) {
                        a.cancelEvent(c)
                    })), a.railh && (a.jqbind(a.railh, "mouseenter", function () {
                        if (!a.win.is(":visible"))return!1;
                        a.canshowonmouseevent && a.showCursor();
                        a.rail.active = !0
                    }), a.jqbind(a.railh, "mouseleave", function () {
                        a.rail.active = !1;
                        a.rail.drag || a.hideCursor()
                    }), a.opt.sensitiverail && (a.bind(a.railh, "click", function (c) {
                        a.doRailClick(c, !1, !0)
                    }), a.bind(a.railh,
                        "dblclick", function (c) {
                            a.doRailClick(c, !0, !0)
                        }), a.bind(a.cursorh, "click", function (c) {
                        a.cancelEvent(c)
                    }), a.bind(a.cursorh, "dblclick", function (c) {
                        a.cancelEvent(c)
                    })));
                    !d.cantouch && !a.opt.touchbehavior ? (a.bind(d.hasmousecapture ? a.win : document, "mouseup", a.onmouseup), a.bind(document, "mousemove", a.onmousemove), a.onclick && a.bind(document, "click", a.onclick), !a.ispage && a.opt.enablescrollonselection && (a.bind(a.win[0], "mousedown", a.onselectionstart), a.bind(document, "mouseup", a.onselectionend), a.bind(a.cursor,
                        "mouseup", a.onselectionend), a.cursorh && a.bind(a.cursorh, "mouseup", a.onselectionend), a.bind(document, "mousemove", a.onselectiondrag)), a.zoom && (a.jqbind(a.zoom, "mouseenter", function () {
                        a.canshowonmouseevent && a.showCursor();
                        a.rail.active = !0
                    }), a.jqbind(a.zoom, "mouseleave", function () {
                        a.rail.active = !1;
                        a.rail.drag || a.hideCursor()
                    }))) : (a.bind(d.hasmousecapture ? a.win : document, "mouseup", a.ontouchend), a.bind(document, "mousemove", a.ontouchmove), a.onclick && a.bind(document, "click", a.onclick), a.opt.cursordragontouch &&
                        (a.bind(a.cursor, "mousedown", a.onmousedown), a.bind(a.cursor, "mousemove", a.onmousemove), a.cursorh && a.bind(a.cursorh, "mousedown", function (c) {
                            a.onmousedown(c, !0)
                        }), a.cursorh && a.bind(a.cursorh, "mousemove", a.onmousemove)));
                    a.opt.enablemousewheel && (a.isiframe || a.bind(d.isie && a.ispage ? document : a.win, "mousewheel", a.onmousewheel), a.bind(a.rail, "mousewheel", a.onmousewheel), a.railh && a.bind(a.railh, "mousewheel", a.onmousewheelhr));
                    !a.ispage && (!d.cantouch && !/HTML|^BODY/.test(a.win[0].nodeName)) && (a.win.attr("tabindex") ||
                        a.win.attr({tabindex: J++}), a.jqbind(a.win, "focus", function (c) {
                        y = a.getTarget(c).id || !0;
                        a.hasfocus = !0;
                        a.canshowonmouseevent && a.noticeCursor()
                    }), a.jqbind(a.win, "blur", function (c) {
                        y = !1;
                        a.hasfocus = !1
                    }), a.jqbind(a.win, "mouseenter", function (c) {
                        C = a.getTarget(c).id || !0;
                        a.hasmousefocus = !0;
                        a.canshowonmouseevent && a.noticeCursor()
                    }), a.jqbind(a.win, "mouseleave", function () {
                        C = !1;
                        a.hasmousefocus = !1;
                        a.rail.drag || a.hideCursor()
                    }))
                }
                a.onkeypress = function (c) {
                    if (a.locked && 0 == a.page.maxh)return!0;
                    c = c ? c : window.e;
                    var b = a.getTarget(c);
                    if (b && /INPUT|TEXTAREA|SELECT|OPTION/.test(b.nodeName) && (!b.getAttribute("type") && !b.type || !/submit|button|cancel/i.tp) || e(b).attr("contenteditable"))return!0;
                    if (a.hasfocus || a.hasmousefocus && !y || a.ispage && !y && !C) {
                        b = c.keyCode;
                        if (a.locked && 27 != b)return a.cancelEvent(c);
                        var f = c.ctrlKey || !1, n = c.shiftKey || !1, d = !1;
                        switch (b) {
                            case 38:
                            case 63233:
                                a.doScrollBy(72);
                                d = !0;
                                break;
                            case 40:
                            case 63235:
                                a.doScrollBy(-72);
                                d = !0;
                                break;
                            case 37:
                            case 63232:
                                a.railh && (f ? a.doScrollLeft(0) : a.doScrollLeftBy(72), d = !0);
                                break;
                            case 39:
                            case 63234:
                                a.railh &&
                                (f ? a.doScrollLeft(a.page.maxw) : a.doScrollLeftBy(-72), d = !0);
                                break;
                            case 33:
                            case 63276:
                                a.doScrollBy(a.view.h);
                                d = !0;
                                break;
                            case 34:
                            case 63277:
                                a.doScrollBy(-a.view.h);
                                d = !0;
                                break;
                            case 36:
                            case 63273:
                                a.railh && f ? a.doScrollPos(0, 0) : a.doScrollTo(0);
                                d = !0;
                                break;
                            case 35:
                            case 63275:
                                a.railh && f ? a.doScrollPos(a.page.maxw, a.page.maxh) : a.doScrollTo(a.page.maxh);
                                d = !0;
                                break;
                            case 32:
                                a.opt.spacebarenabled && (n ? a.doScrollBy(a.view.h) : a.doScrollBy(-a.view.h), d = !0);
                                break;
                            case 27:
                                a.zoomactive && (a.doZoom(), d = !0)
                        }
                        if (d)return a.cancelEvent(c)
                    }
                };
                a.opt.enablekeyboard && a.bind(document, d.isopera && !d.isopera12 ? "keypress" : "keydown", a.onkeypress);
                a.bind(document, "keydown", function (c) {
                    c.ctrlKey && (a.wheelprevented = !0)
                });
                a.bind(document, "keyup", function (c) {
                    c.ctrlKey || (a.wheelprevented = !1)
                });
                a.bind(window, "resize", a.lazyResize);
                a.bind(window, "orientationchange", a.lazyResize);
                a.bind(window, "load", a.lazyResize);
                if (d.ischrome && !a.ispage && !a.haswrapper) {
                    var r = a.win.attr("style"), f = parseFloat(a.win.css("width")) + 1;
                    a.win.css("width", f);
                    a.synched("chromefix",
                        function () {
                            a.win.attr("style", r)
                        })
                }
                a.onAttributeChange = function (c) {
                    a.lazyResize(250)
                };
                !a.ispage && !a.haswrapper && (!1 !== z ? (a.observer = new z(function (c) {
                    c.forEach(a.onAttributeChange)
                }), a.observer.observe(a.win[0], {childList: !0, characterData: !1, attributes: !0, subtree: !1}), a.observerremover = new z(function (c) {
                    c.forEach(function (c) {
                        if (0 < c.removedNodes.length)for (var b in c.removedNodes)if (c.removedNodes[b] == a.win[0])return a.remove()
                    })
                }), a.observerremover.observe(a.win[0].parentNode, {childList: !0, characterData: !1,
                    attributes: !1, subtree: !1})) : (a.bind(a.win, d.isie && !d.isie9 ? "propertychange" : "DOMAttrModified", a.onAttributeChange), d.isie9 && a.win[0].attachEvent("onpropertychange", a.onAttributeChange), a.bind(a.win, "DOMNodeRemoved", function (c) {
                    c.target == a.win[0] && a.remove()
                })));
                !a.ispage && a.opt.boxzoom && a.bind(window, "resize", a.resizeZoom);
                a.istextarea && a.bind(a.win, "mouseup", a.lazyResize);
                a.lazyResize(30)
            }
            if ("IFRAME" == this.doc[0].nodeName) {
                var I = function (c) {
                    a.iframexd = !1;
                    try {
                        var b = "contentDocument"in this ? this.contentDocument :
                            this.contentWindow.document
                    } catch (f) {
                        a.iframexd = !0, b = !1
                    }
                    if (a.iframexd)return"console"in window && console.log("NiceScroll error: policy restriced iframe"), !0;
                    a.forcescreen = !0;
                    a.isiframe && (a.iframe = {doc: e(b), html: a.doc.contents().find("html")[0], body: a.doc.contents().find("body")[0]}, a.getContentSize = function () {
                        return{w: Math.max(a.iframe.html.scrollWidth, a.iframe.body.scrollWidth), h: Math.max(a.iframe.html.scrollHeight, a.iframe.body.scrollHeight)}
                    }, a.docscroll = e(a.iframe.body));
                    !d.isios && (a.opt.iframeautoresize && !a.isiframe) && (a.win.scrollTop(0), a.doc.height(""), c = Math.max(b.getElementsByTagName("html")[0].scrollHeight, b.body.scrollHeight), a.doc.height(c));
                    a.lazyResize(30);
                    d.isie7 && a.css(e(a.iframe.html), {"overflow-y": "hidden"});
                    a.css(e(a.iframe.body), {"overflow-y": "hidden"});
                    d.isios && a.haswrapper && a.css(e(b.body), {"-webkit-transform": "translate3d(0,0,0)"});
                    "contentWindow"in this ? a.bind(this.contentWindow, "scroll", a.onscroll) : a.bind(b, "scroll", a.onscroll);
                    a.opt.enablemousewheel && a.bind(b, "mousewheel", a.onmousewheel);
                    a.opt.enablekeyboard && a.bind(b, d.isopera ? "keypress" : "keydown", a.onkeypress);
                    if (d.cantouch || a.opt.touchbehavior)a.bind(b, "mousedown", a.ontouchstart), a.bind(b, "mousemove", function (c) {
                        a.ontouchmove(c, !0)
                    }), a.opt.grabcursorenabled && d.cursorgrabvalue && a.css(e(b.body), {cursor: d.cursorgrabvalue});
                    a.bind(b, "mouseup", a.ontouchend);
                    a.zoom && (a.opt.dblclickzoom && a.bind(b, "dblclick", a.doZoom), a.ongesturezoom && a.bind(b, "gestureend", a.ongesturezoom))
                };
                this.doc[0].readyState && "complete" == this.doc[0].readyState &&
                setTimeout(function () {
                    I.call(a.doc[0], !1)
                }, 500);
                a.bind(this.doc, "load", I)
            }
        };
        this.showCursor = function (c, b) {
            a.cursortimeout && (clearTimeout(a.cursortimeout), a.cursortimeout = 0);
            if (a.rail) {
                a.autohidedom && (a.autohidedom.stop().css({opacity: a.opt.cursoropacitymax}), a.cursoractive = !0);
                if (!a.rail.drag || 1 != a.rail.drag.pt)"undefined" != typeof c && !1 !== c && (a.scroll.y = Math.round(1 * c / a.scrollratio.y)), "undefined" != typeof b && (a.scroll.x = Math.round(1 * b / a.scrollratio.x));
                a.cursor.css({height: a.cursorheight, top: a.scroll.y});
                a.cursorh && (!a.rail.align && a.rail.visibility ? a.cursorh.css({width: a.cursorwidth, left: a.scroll.x + a.rail.width}) : a.cursorh.css({width: a.cursorwidth, left: a.scroll.x}), a.cursoractive = !0);
                a.zoom && a.zoom.stop().css({opacity: a.opt.cursoropacitymax})
            }
        };
        this.hideCursor = function (c) {
            !a.cursortimeout && (a.rail && a.autohidedom && !(a.hasmousefocus && "leave" == a.opt.autohidemode)) && (a.cursortimeout = setTimeout(function () {
                if (!a.rail.active || !a.showonmouseevent)a.autohidedom.stop().animate({opacity: a.opt.cursoropacitymin}),
                    a.zoom && a.zoom.stop().animate({opacity: a.opt.cursoropacitymin}), a.cursoractive = !1;
                a.cursortimeout = 0
            }, c || a.opt.hidecursordelay))
        };
        this.noticeCursor = function (c, b, f) {
            a.showCursor(b, f);
            a.rail.active || a.hideCursor(c)
        };
        this.getContentSize = a.ispage ? function () {
            return{w: Math.max(document.body.scrollWidth, document.documentElement.scrollWidth), h: Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)}
        } : a.haswrapper ? function () {
            return{w: a.doc.outerWidth() + parseInt(a.win.css("paddingLeft")) +
                parseInt(a.win.css("paddingRight")), h: a.doc.outerHeight() + parseInt(a.win.css("paddingTop")) + parseInt(a.win.css("paddingBottom"))}
        } : function () {
            return{w: a.docscroll[0].scrollWidth, h: a.docscroll[0].scrollHeight}
        };
        this.onResize = function (c, b) {
            if (!a || !a.win)return!1;
            if (!a.haswrapper && !a.ispage) {
                if ("none" == a.win.css("display"))return a.visibility && a.hideRail().hideRailHr(), !1;
                !a.hidden && !a.visibility && a.showRail().showRailHr()
            }
            var f = a.page.maxh, d = a.page.maxw, e = a.view.w;
            a.view = {w: a.ispage ? a.win.width() : parseInt(a.win[0].clientWidth),
                h: a.ispage ? a.win.height() : parseInt(a.win[0].clientHeight)};
            a.page = b ? b : a.getContentSize();
            a.page.maxh = Math.max(0, a.page.h - a.view.h);
            a.page.maxw = Math.max(0, a.page.w - a.view.w);
            if (a.page.maxh == f && a.page.maxw == d && a.view.w == e) {
                if (a.ispage)return a;
                f = a.win.offset();
                if (a.lastposition && (d = a.lastposition, d.top == f.top && d.left == f.left))return a;
                a.lastposition = f
            }
            0 == a.page.maxh ? (a.hideRail(), a.scrollvaluemax = 0, a.scroll.y = 0, a.scrollratio.y = 0, a.cursorheight = 0, a.setScrollTop(0), a.rail.scrollable = !1) : a.rail.scrollable = !0;
            0 == a.page.maxw ? (a.hideRailHr(), a.scrollvaluemaxw = 0, a.scroll.x = 0, a.scrollratio.x = 0, a.cursorwidth = 0, a.setScrollLeft(0), a.railh.scrollable = !1) : a.railh.scrollable = !0;
            a.locked = 0 == a.page.maxh && 0 == a.page.maxw;
            if (a.locked)return a.ispage || a.updateScrollBar(a.view), !1;
            !a.hidden && !a.visibility ? a.showRail().showRailHr() : !a.hidden && !a.railh.visibility && a.showRailHr();
            a.istextarea && (a.win.css("resize") && "none" != a.win.css("resize")) && (a.view.h -= 20);
            a.cursorheight = Math.min(a.view.h, Math.round(a.view.h * (a.view.h /
                a.page.h)));
            a.cursorheight = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorheight);
            a.cursorwidth = Math.min(a.view.w, Math.round(a.view.w * (a.view.w / a.page.w)));
            a.cursorwidth = a.opt.cursorfixedheight ? a.opt.cursorfixedheight : Math.max(a.opt.cursorminheight, a.cursorwidth);
            a.scrollvaluemax = a.view.h - a.cursorheight - a.cursor.hborder;
            a.railh && (a.railh.width = 0 < a.page.maxh ? a.view.w - a.rail.width : a.view.w, a.scrollvaluemaxw = a.railh.width - a.cursorwidth - a.cursorh.wborder);
            a.ispage ||
            a.updateScrollBar(a.view);
            a.scrollratio = {x: a.page.maxw / a.scrollvaluemaxw, y: a.page.maxh / a.scrollvaluemax};
            a.getScrollTop() > a.page.maxh ? a.doScrollTop(a.page.maxh) : (a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y)), a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)), a.cursoractive && a.noticeCursor());
            a.scroll.y && 0 == a.getScrollTop() && a.doScrollTo(Math.floor(a.scroll.y * a.scrollratio.y));
            return a
        };
        this.resize = a.onResize;
        this.lazyResize = function (c) {
            c = isNaN(c) ? 30 : c;
            a.delayed("resize", a.resize,
                c);
            return a
        };
        this._bind = function (c, b, f, d) {
            a.events.push({e: c, n: b, f: f, b: d, q: !1});
            c.addEventListener ? c.addEventListener(b, f, d || !1) : c.attachEvent ? c.attachEvent("on" + b, f) : c["on" + b] = f
        };
        this.jqbind = function (c, b, f) {
            a.events.push({e: c, n: b, f: f, q: !0});
            e(c).bind(b, f)
        };
        this.bind = function (c, b, f, e) {
            var h = "jquery"in c ? c[0] : c;
            "mousewheel" == b ? "onwheel"in a.win ? a._bind(h, "wheel", f, e || !1) : (c = "undefined" != typeof document.onmousewheel ? "mousewheel" : "DOMMouseScroll", l(h, c, f, e || !1), "DOMMouseScroll" == c && l(h, "MozMousePixelScroll",
                f, e || !1)) : h.addEventListener ? (d.cantouch && /mouseup|mousedown|mousemove/.test(b) && a._bind(h, "mousedown" == b ? "touchstart" : "mouseup" == b ? "touchend" : "touchmove", function (a) {
                if (a.touches) {
                    if (2 > a.touches.length) {
                        var c = a.touches.length ? a.touches[0] : a;
                        c.original = a;
                        f.call(this, c)
                    }
                } else a.changedTouches && (c = a.changedTouches[0], c.original = a, f.call(this, c))
            }, e || !1), a._bind(h, b, f, e || !1), d.cantouch && "mouseup" == b && a._bind(h, "touchcancel", f, e || !1)) : a._bind(h, b, function (c) {
                if ((c = c || window.event || !1) && c.srcElement)c.target =
                    c.srcElement;
                "pageY"in c || (c.pageX = c.clientX + document.documentElement.scrollLeft, c.pageY = c.clientY + document.documentElement.scrollTop);
                return!1 === f.call(h, c) || !1 === e ? a.cancelEvent(c) : !0
            })
        };
        this._unbind = function (a, b, f, d) {
            a.removeEventListener ? a.removeEventListener(b, f, d) : a.detachEvent ? a.detachEvent("on" + b, f) : a["on" + b] = !1
        };
        this.unbindAll = function () {
            for (var c = 0; c < a.events.length; c++) {
                var b = a.events[c];
                b.q ? b.e.unbind(b.n, b.f) : a._unbind(b.e, b.n, b.f, b.b)
            }
        };
        this.cancelEvent = function (a) {
            a = a.original ? a.original :
                a ? a : window.event || !1;
            if (!a)return!1;
            a.preventDefault && a.preventDefault();
            a.stopPropagation && a.stopPropagation();
            a.preventManipulation && a.preventManipulation();
            a.cancelBubble = !0;
            a.cancel = !0;
            return a.returnValue = !1
        };
        this.stopPropagation = function (a) {
            a = a.original ? a.original : a ? a : window.event || !1;
            if (!a)return!1;
            if (a.stopPropagation)return a.stopPropagation();
            a.cancelBubble && (a.cancelBubble = !0);
            return!1
        };
        this.showRail = function () {
            if (0 != a.page.maxh && (a.ispage || "none" != a.win.css("display")))a.visibility = !0,
                a.rail.visibility = !0, a.rail.css("display", "block");
            return a
        };
        this.showRailHr = function () {
            if (!a.railh)return a;
            if (0 != a.page.maxw && (a.ispage || "none" != a.win.css("display")))a.railh.visibility = !0, a.railh.css("display", "block");
            return a
        };
        this.hideRail = function () {
            a.visibility = !1;
            a.rail.visibility = !1;
            a.rail.css("display", "none");
            return a
        };
        this.hideRailHr = function () {
            if (!a.railh)return a;
            a.railh.visibility = !1;
            a.railh.css("display", "none");
            return a
        };
        this.show = function () {
            a.hidden = !1;
            a.locked = !1;
            return a.showRail().showRailHr()
        };
        this.hide = function () {
            a.hidden = !0;
            a.locked = !0;
            return a.hideRail().hideRailHr()
        };
        this.toggle = function () {
            return a.hidden ? a.show() : a.hide()
        };
        this.remove = function () {
            a.stop();
            a.cursortimeout && clearTimeout(a.cursortimeout);
            a.doZoomOut();
            a.unbindAll();
            d.isie9 && a.win[0].detachEvent("onpropertychange", a.onAttributeChange);
            !1 !== a.observer && a.observer.disconnect();
            !1 !== a.observerremover && a.observerremover.disconnect();
            a.events = null;
            a.cursor && a.cursor.remove();
            a.cursorh && a.cursorh.remove();
            a.rail && a.rail.remove();
            a.railh && a.railh.remove();
            a.zoom && a.zoom.remove();
            for (var c = 0; c < a.saved.css.length; c++) {
                var b = a.saved.css[c];
                b[0].css(b[1], "undefined" == typeof b[2] ? "" : b[2])
            }
            a.saved = !1;
            a.me.data("__nicescroll", "");
            var f = e.nicescroll;
            f.each(function (c) {
                if (this && this.id === a.id) {
                    delete f[c];
                    for (var b = ++c; b < f.length; b++, c++)f[c] = f[b];
                    f.length--;
                    f.length && delete f[f.length]
                }
            });
            for (var h in a)a[h] = null, delete a[h];
            a = null
        };
        this.scrollstart = function (c) {
            this.onscrollstart = c;
            return a
        };
        this.scrollend = function (c) {
            this.onscrollend =
                c;
            return a
        };
        this.scrollcancel = function (c) {
            this.onscrollcancel = c;
            return a
        };
        this.zoomin = function (c) {
            this.onzoomin = c;
            return a
        };
        this.zoomout = function (c) {
            this.onzoomout = c;
            return a
        };
        this.isScrollable = function (a) {
            a = a.target ? a.target : a;
            if ("OPTION" == a.nodeName)return!0;
            for (; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
                var b = e(a), b = b.css("overflowY") || b.css("overflowX") || b.css("overflow") || "";
                if (/scroll|auto/.test(b))return a.clientHeight != a.scrollHeight;
                a = a.parentNode ? a.parentNode : !1
            }
            return!1
        };
        this.getViewport =
            function (a) {
                for (a = a && a.parentNode ? a.parentNode : !1; a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);) {
                    var b = e(a);
                    if (/fixed|absolute/.test(b.css("position")))return b;
                    var f = b.css("overflowY") || b.css("overflowX") || b.css("overflow") || "";
                    if (/scroll|auto/.test(f) && a.clientHeight != a.scrollHeight || 0 < b.getNiceScroll().length)return b;
                    a = a.parentNode ? a.parentNode : !1
                }
                return a ? e(a) : !1
            };
        this.triggerScrollEnd = function () {
            if (a.onscrollend) {
                var c = a.getScrollLeft(), b = a.getScrollTop();
                a.onscrollend.call(a, {type: "scrollend",
                    current: {x: c, y: b}, end: {x: c, y: b}})
            }
        };
        this.onmousewheel = function (c) {
            if (!a.wheelprevented) {
                if (a.locked)return a.debounced("checkunlock", a.resize, 250), !0;
                if (a.rail.drag)return a.cancelEvent(c);
                "auto" == a.opt.oneaxismousemode && 0 != c.deltaX && (a.opt.oneaxismousemode = !1);
                if (a.opt.oneaxismousemode && 0 == c.deltaX && !a.rail.scrollable)return a.railh && a.railh.scrollable ? a.onmousewheelhr(c) : !0;
                var b = +new Date, f = !1;
                a.opt.preservenativescrolling && a.checkarea + 600 < b && (a.nativescrollingarea = a.isScrollable(c), f = !0);
                a.checkarea =
                    b;
                if (a.nativescrollingarea)return!0;
                if (c = q(c, !1, f))a.checkarea = 0;
                return c
            }
        };
        this.onmousewheelhr = function (c) {
            if (!a.wheelprevented) {
                if (a.locked || !a.railh.scrollable)return!0;
                if (a.rail.drag)return a.cancelEvent(c);
                var b = +new Date, f = !1;
                a.opt.preservenativescrolling && a.checkarea + 600 < b && (a.nativescrollingarea = a.isScrollable(c), f = !0);
                a.checkarea = b;
                return a.nativescrollingarea ? !0 : a.locked ? a.cancelEvent(c) : q(c, !0, f)
            }
        };
        this.stop = function () {
            a.cancelScroll();
            a.scrollmon && a.scrollmon.stop();
            a.cursorfreezed = !1;
            a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
            a.noticeCursor();
            return a
        };
        this.getTransitionSpeed = function (b) {
            var d = Math.round(10 * a.opt.scrollspeed);
            b = Math.min(d, Math.round(b / 20 * a.opt.scrollspeed));
            return 20 < b ? b : 0
        };
        a.opt.smoothscroll ? a.ishwscroll && d.hastransition && a.opt.usetransition ? (this.prepareTransition = function (b, e) {
            var f = e ? 20 < b ? b : 0 : a.getTransitionSpeed(b), h = f ? d.prefixstyle + "transform " + f + "ms ease-out" : "";
            if (!a.lasttransitionstyle || a.lasttransitionstyle != h)a.lasttransitionstyle =
                h, a.doc.css(d.transitionstyle, h);
            return f
        }, this.doScrollLeft = function (b, d) {
            var f = a.scrollrunning ? a.newscrolly : a.getScrollTop();
            a.doScrollPos(b, f, d)
        }, this.doScrollTop = function (b, d) {
            var f = a.scrollrunning ? a.newscrollx : a.getScrollLeft();
            a.doScrollPos(f, b, d)
        }, this.doScrollPos = function (b, e, f) {
            var h = a.getScrollTop(), g = a.getScrollLeft();
            (0 > (a.newscrolly - h) * (e - h) || 0 > (a.newscrollx - g) * (b - g)) && a.cancelScroll();
            !1 == a.opt.bouncescroll && (0 > e ? e = 0 : e > a.page.maxh && (e = a.page.maxh), 0 > b ? b = 0 : b > a.page.maxw && (b = a.page.maxw));
            if (a.scrollrunning && b == a.newscrollx && e == a.newscrolly)return!1;
            a.newscrolly = e;
            a.newscrollx = b;
            a.newscrollspeed = f || !1;
            if (a.timer)return!1;
            a.timer = setTimeout(function () {
                var f = a.getScrollTop(), h = a.getScrollLeft(), g, k;
                g = b - h;
                k = e - f;
                g = Math.round(Math.sqrt(Math.pow(g, 2) + Math.pow(k, 2)));
                g = a.newscrollspeed && 1 < a.newscrollspeed ? a.newscrollspeed : a.getTransitionSpeed(g);
                a.newscrollspeed && 1 >= a.newscrollspeed && (g *= a.newscrollspeed);
                a.prepareTransition(g, !0);
                a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
                0 < g && (!a.scrollrunning && a.onscrollstart && a.onscrollstart.call(a, {type: "scrollstart", current: {x: h, y: f}, request: {x: b, y: e}, end: {x: a.newscrollx, y: a.newscrolly}, speed: g}), d.transitionend ? a.scrollendtrapped || (a.scrollendtrapped = !0, a.bind(a.doc, d.transitionend, a.onScrollTransitionEnd, !1)) : (a.scrollendtrapped && clearTimeout(a.scrollendtrapped), a.scrollendtrapped = setTimeout(a.onScrollTransitionEnd, g)), a.timerscroll = {bz: new BezierClass(f, a.newscrolly, g, 0, 0, 0.58, 1), bh: new BezierClass(h, a.newscrollx, g, 0, 0, 0.58,
                    1)}, a.cursorfreezed || (a.timerscroll.tm = setInterval(function () {
                    a.showCursor(a.getScrollTop(), a.getScrollLeft())
                }, 60)));
                a.synched("doScroll-set", function () {
                    a.timer = 0;
                    a.scrollendtrapped && (a.scrollrunning = !0);
                    a.setScrollTop(a.newscrolly);
                    a.setScrollLeft(a.newscrollx);
                    if (!a.scrollendtrapped)a.onScrollTransitionEnd()
                })
            }, 50)
        }, this.cancelScroll = function () {
            if (!a.scrollendtrapped)return!0;
            var b = a.getScrollTop(), e = a.getScrollLeft();
            a.scrollrunning = !1;
            d.transitionend || clearTimeout(d.transitionend);
            a.scrollendtrapped = !1;
            a._unbind(a.doc, d.transitionend, a.onScrollTransitionEnd);
            a.prepareTransition(0);
            a.setScrollTop(b);
            a.railh && a.setScrollLeft(e);
            a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
            a.timerscroll = !1;
            a.cursorfreezed = !1;
            a.showCursor(b, e);
            return a
        }, this.onScrollTransitionEnd = function () {
            a.scrollendtrapped && a._unbind(a.doc, d.transitionend, a.onScrollTransitionEnd);
            a.scrollendtrapped = !1;
            a.prepareTransition(0);
            a.timerscroll && a.timerscroll.tm && clearInterval(a.timerscroll.tm);
            a.timerscroll = !1;
            var b =
                a.getScrollTop(), e = a.getScrollLeft();
            a.setScrollTop(b);
            a.railh && a.setScrollLeft(e);
            a.noticeCursor(!1, b, e);
            a.cursorfreezed = !1;
            0 > b ? b = 0 : b > a.page.maxh && (b = a.page.maxh);
            0 > e ? e = 0 : e > a.page.maxw && (e = a.page.maxw);
            if (b != a.newscrolly || e != a.newscrollx)return a.doScrollPos(e, b, a.opt.snapbackspeed);
            a.onscrollend && a.scrollrunning && a.triggerScrollEnd();
            a.scrollrunning = !1
        }) : (this.doScrollLeft = function (b, d) {
            var f = a.scrollrunning ? a.newscrolly : a.getScrollTop();
            a.doScrollPos(b, f, d)
        }, this.doScrollTop = function (b, d) {
            var f =
                a.scrollrunning ? a.newscrollx : a.getScrollLeft();
            a.doScrollPos(f, b, d)
        }, this.doScrollPos = function (b, d, f) {
            function e() {
                if (a.cancelAnimationFrame)return!0;
                a.scrollrunning = !0;
                if (p = 1 - p)return a.timer = s(e) || 1;
                var b = 0, c = sy = a.getScrollTop();
                if (a.dst.ay) {
                    var c = a.bzscroll ? a.dst.py + a.bzscroll.getNow() * a.dst.ay : a.newscrolly, f = c - sy;
                    if (0 > f && c < a.newscrolly || 0 < f && c > a.newscrolly)c = a.newscrolly;
                    a.setScrollTop(c);
                    c == a.newscrolly && (b = 1)
                } else b = 1;
                var d = sx = a.getScrollLeft();
                if (a.dst.ax) {
                    d = a.bzscroll ? a.dst.px + a.bzscroll.getNow() *
                        a.dst.ax : a.newscrollx;
                    f = d - sx;
                    if (0 > f && d < a.newscrollx || 0 < f && d > a.newscrollx)d = a.newscrollx;
                    a.setScrollLeft(d);
                    d == a.newscrollx && (b += 1)
                } else b += 1;
                2 == b ? (a.timer = 0, a.cursorfreezed = !1, a.bzscroll = !1, a.scrollrunning = !1, 0 > c ? c = 0 : c > a.page.maxh && (c = a.page.maxh), 0 > d ? d = 0 : d > a.page.maxw && (d = a.page.maxw), d != a.newscrollx || c != a.newscrolly ? a.doScrollPos(d, c) : a.onscrollend && a.triggerScrollEnd()) : a.timer = s(e) || 1
            }

            d = "undefined" == typeof d || !1 === d ? a.getScrollTop(!0) : d;
            if (a.timer && a.newscrolly == d && a.newscrollx == b)return!0;
            a.timer &&
            v(a.timer);
            a.timer = 0;
            var h = a.getScrollTop(), g = a.getScrollLeft();
            (0 > (a.newscrolly - h) * (d - h) || 0 > (a.newscrollx - g) * (b - g)) && a.cancelScroll();
            a.newscrolly = d;
            a.newscrollx = b;
            if (!a.bouncescroll || !a.rail.visibility)0 > a.newscrolly ? a.newscrolly = 0 : a.newscrolly > a.page.maxh && (a.newscrolly = a.page.maxh);
            if (!a.bouncescroll || !a.railh.visibility)0 > a.newscrollx ? a.newscrollx = 0 : a.newscrollx > a.page.maxw && (a.newscrollx = a.page.maxw);
            a.dst = {};
            a.dst.x = b - g;
            a.dst.y = d - h;
            a.dst.px = g;
            a.dst.py = h;
            var k = Math.round(Math.sqrt(Math.pow(a.dst.x,
                2) + Math.pow(a.dst.y, 2)));
            a.dst.ax = a.dst.x / k;
            a.dst.ay = a.dst.y / k;
            var l = 0, q = k;
            0 == a.dst.x ? (l = h, q = d, a.dst.ay = 1, a.dst.py = 0) : 0 == a.dst.y && (l = g, q = b, a.dst.ax = 1, a.dst.px = 0);
            k = a.getTransitionSpeed(k);
            f && 1 >= f && (k *= f);
            a.bzscroll = 0 < k ? a.bzscroll ? a.bzscroll.update(q, k) : new BezierClass(l, q, k, 0, 1, 0, 1) : !1;
            if (!a.timer) {
                (h == a.page.maxh && d >= a.page.maxh || g == a.page.maxw && b >= a.page.maxw) && a.checkContentSize();
                var p = 1;
                a.cancelAnimationFrame = !1;
                a.timer = 1;
                a.onscrollstart && !a.scrollrunning && a.onscrollstart.call(a, {type: "scrollstart",
                    current: {x: g, y: h}, request: {x: b, y: d}, end: {x: a.newscrollx, y: a.newscrolly}, speed: k});
                e();
                (h == a.page.maxh && d >= h || g == a.page.maxw && b >= g) && a.checkContentSize();
                a.noticeCursor()
            }
        }, this.cancelScroll = function () {
            a.timer && v(a.timer);
            a.timer = 0;
            a.bzscroll = !1;
            a.scrollrunning = !1;
            return a
        }) : (this.doScrollLeft = function (b, d) {
            var f = a.getScrollTop();
            a.doScrollPos(b, f, d)
        }, this.doScrollTop = function (b, d) {
            var f = a.getScrollLeft();
            a.doScrollPos(f, b, d)
        }, this.doScrollPos = function (b, d, f) {
            var e = b > a.page.maxw ? a.page.maxw : b;
            0 > e &&
            (e = 0);
            var h = d > a.page.maxh ? a.page.maxh : d;
            0 > h && (h = 0);
            a.synched("scroll", function () {
                a.setScrollTop(h);
                a.setScrollLeft(e)
            })
        }, this.cancelScroll = function () {
        });
        this.doScrollBy = function (b, d) {
            var f = 0, f = d ? Math.floor((a.scroll.y - b) * a.scrollratio.y) : (a.timer ? a.newscrolly : a.getScrollTop(!0)) - b;
            if (a.bouncescroll) {
                var e = Math.round(a.view.h / 2);
                f < -e ? f = -e : f > a.page.maxh + e && (f = a.page.maxh + e)
            }
            a.cursorfreezed = !1;
            py = a.getScrollTop(!0);
            if (0 > f && 0 >= py)return a.noticeCursor();
            if (f > a.page.maxh && py >= a.page.maxh)return a.checkContentSize(),
                a.noticeCursor();
            a.doScrollTop(f)
        };
        this.doScrollLeftBy = function (b, d) {
            var f = 0, f = d ? Math.floor((a.scroll.x - b) * a.scrollratio.x) : (a.timer ? a.newscrollx : a.getScrollLeft(!0)) - b;
            if (a.bouncescroll) {
                var e = Math.round(a.view.w / 2);
                f < -e ? f = -e : f > a.page.maxw + e && (f = a.page.maxw + e)
            }
            a.cursorfreezed = !1;
            px = a.getScrollLeft(!0);
            if (0 > f && 0 >= px || f > a.page.maxw && px >= a.page.maxw)return a.noticeCursor();
            a.doScrollLeft(f)
        };
        this.doScrollTo = function (b, d) {
            d && Math.round(b * a.scrollratio.y);
            a.cursorfreezed = !1;
            a.doScrollTop(b)
        };
        this.checkContentSize =
            function () {
                var b = a.getContentSize();
                (b.h != a.page.h || b.w != a.page.w) && a.resize(!1, b)
            };
        a.onscroll = function (b) {
            a.rail.drag || a.cursorfreezed || a.synched("scroll", function () {
                a.scroll.y = Math.round(a.getScrollTop() * (1 / a.scrollratio.y));
                a.railh && (a.scroll.x = Math.round(a.getScrollLeft() * (1 / a.scrollratio.x)));
                a.noticeCursor()
            })
        };
        a.bind(a.docscroll, "scroll", a.onscroll);
        this.doZoomIn = function (b) {
            if (!a.zoomactive) {
                a.zoomactive = !0;
                a.zoomrestore = {style: {}};
                var h = "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(" "),
                    f = a.win[0].style, g;
                for (g in h) {
                    var k = h[g];
                    a.zoomrestore.style[k] = "undefined" != typeof f[k] ? f[k] : ""
                }
                a.zoomrestore.style.width = a.win.css("width");
                a.zoomrestore.style.height = a.win.css("height");
                a.zoomrestore.padding = {w: a.win.outerWidth() - a.win.width(), h: a.win.outerHeight() - a.win.height()};
                d.isios4 && (a.zoomrestore.scrollTop = e(window).scrollTop(), e(window).scrollTop(0));
                a.win.css({position: d.isios4 ? "absolute" : "fixed", top: 0, left: 0, "z-index": x + 100, margin: "0px"});
                h = a.win.css("backgroundColor");
                ("" == h || /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(h)) &&
                a.win.css("backgroundColor", "#fff");
                a.rail.css({"z-index": x + 101});
                a.zoom.css({"z-index": x + 102});
                a.zoom.css("backgroundPosition", "0px -18px");
                a.resizeZoom();
                a.onzoomin && a.onzoomin.call(a);
                return a.cancelEvent(b)
            }
        };
        this.doZoomOut = function (b) {
            if (a.zoomactive)return a.zoomactive = !1, a.win.css("margin", ""), a.win.css(a.zoomrestore.style), d.isios4 && e(window).scrollTop(a.zoomrestore.scrollTop), a.rail.css({"z-index": a.zindex}), a.zoom.css({"z-index": a.zindex}), a.zoomrestore = !1, a.zoom.css("backgroundPosition",
                "0px 0px"), a.onResize(), a.onzoomout && a.onzoomout.call(a), a.cancelEvent(b)
        };
        this.doZoom = function (b) {
            return a.zoomactive ? a.doZoomOut(b) : a.doZoomIn(b)
        };
        this.resizeZoom = function () {
            if (a.zoomactive) {
                var b = a.getScrollTop();
                a.win.css({width: e(window).width() - a.zoomrestore.padding.w + "px", height: e(window).height() - a.zoomrestore.padding.h + "px"});
                a.onResize();
                a.setScrollTop(Math.min(a.page.maxh, b))
            }
        };
        this.init();
        e.nicescroll.push(this)
    }, H = function (e) {
        var b = this;
        this.nc = e;
        this.steptime = this.lasttime = this.speedy =
            this.speedx = this.lasty = this.lastx = 0;
        this.snapy = this.snapx = !1;
        this.demuly = this.demulx = 0;
        this.lastscrolly = this.lastscrollx = -1;
        this.timer = this.chky = this.chkx = 0;
        this.time = function () {
            return+new Date
        };
        this.reset = function (e, g) {
            b.stop();
            var l = b.time();
            b.steptime = 0;
            b.lasttime = l;
            b.speedx = 0;
            b.speedy = 0;
            b.lastx = e;
            b.lasty = g;
            b.lastscrollx = -1;
            b.lastscrolly = -1
        };
        this.update = function (e, g) {
            var l = b.time();
            b.steptime = l - b.lasttime;
            b.lasttime = l;
            var l = g - b.lasty, q = e - b.lastx, a = b.nc.getScrollTop(), p = b.nc.getScrollLeft(), a = a +
                l, p = p + q;
            b.snapx = 0 > p || p > b.nc.page.maxw;
            b.snapy = 0 > a || a > b.nc.page.maxh;
            b.speedx = q;
            b.speedy = l;
            b.lastx = e;
            b.lasty = g
        };
        this.stop = function () {
            b.nc.unsynched("domomentum2d");
            b.timer && clearTimeout(b.timer);
            b.timer = 0;
            b.lastscrollx = -1;
            b.lastscrolly = -1
        };
        this.doSnapy = function (e, g) {
            var l = !1;
            0 > g ? (g = 0, l = !0) : g > b.nc.page.maxh && (g = b.nc.page.maxh, l = !0);
            0 > e ? (e = 0, l = !0) : e > b.nc.page.maxw && (e = b.nc.page.maxw, l = !0);
            l ? b.nc.doScrollPos(e, g, b.nc.opt.snapbackspeed) : b.nc.triggerScrollEnd()
        };
        this.doMomentum = function (e) {
            var g = b.time(),
                l = e ? g + e : b.lasttime;
            e = b.nc.getScrollLeft();
            var q = b.nc.getScrollTop(), a = b.nc.page.maxh, p = b.nc.page.maxw;
            b.speedx = 0 < p ? Math.min(60, b.speedx) : 0;
            b.speedy = 0 < a ? Math.min(60, b.speedy) : 0;
            l = l && 60 >= g - l;
            if (0 > q || q > a || 0 > e || e > p)l = !1;
            e = b.speedx && l ? b.speedx : !1;
            if (b.speedy && l && b.speedy || e) {
                var d = Math.max(16, b.steptime);
                50 < d && (e = d / 50, b.speedx *= e, b.speedy *= e, d = 50);
                b.demulxy = 0;
                b.lastscrollx = b.nc.getScrollLeft();
                b.chkx = b.lastscrollx;
                b.lastscrolly = b.nc.getScrollTop();
                b.chky = b.lastscrolly;
                var r = b.lastscrollx, t = b.lastscrolly,
                    s = function () {
                        var c = 600 < b.time() - g ? 0.04 : 0.02;
                        if (b.speedx && (r = Math.floor(b.lastscrollx - b.speedx * (1 - b.demulxy)), b.lastscrollx = r, 0 > r || r > p))c = 0.1;
                        if (b.speedy && (t = Math.floor(b.lastscrolly - b.speedy * (1 - b.demulxy)), b.lastscrolly = t, 0 > t || t > a))c = 0.1;
                        b.demulxy = Math.min(1, b.demulxy + c);
                        b.nc.synched("domomentum2d", function () {
                            b.speedx && (b.nc.getScrollLeft() != b.chkx && b.stop(), b.chkx = r, b.nc.setScrollLeft(r));
                            b.speedy && (b.nc.getScrollTop() != b.chky && b.stop(), b.chky = t, b.nc.setScrollTop(t));
                            b.timer || (b.nc.hideCursor(),
                                b.doSnapy(r, t))
                        });
                        1 > b.demulxy ? b.timer = setTimeout(s, d) : (b.stop(), b.nc.hideCursor(), b.doSnapy(r, t))
                    };
                s()
            } else b.doSnapy(b.nc.getScrollLeft(), b.nc.getScrollTop())
        }
    }, w = e.fn.scrollTop;
    e.cssHooks.pageYOffset = {get: function (g, b, h) {
        return(b = e.data(g, "__nicescroll") || !1) && b.ishwscroll ? b.getScrollTop() : w.call(g)
    }, set: function (g, b) {
        var h = e.data(g, "__nicescroll") || !1;
        h && h.ishwscroll ? h.setScrollTop(parseInt(b)) : w.call(g, b);
        return this
    }};
    e.fn.scrollTop = function (g) {
        if ("undefined" == typeof g) {
            var b = this[0] ? e.data(this[0],
                "__nicescroll") || !1 : !1;
            return b && b.ishwscroll ? b.getScrollTop() : w.call(this)
        }
        return this.each(function () {
            var b = e.data(this, "__nicescroll") || !1;
            b && b.ishwscroll ? b.setScrollTop(parseInt(g)) : w.call(e(this), g)
        })
    };
    var A = e.fn.scrollLeft;
    e.cssHooks.pageXOffset = {get: function (g, b, h) {
        return(b = e.data(g, "__nicescroll") || !1) && b.ishwscroll ? b.getScrollLeft() : A.call(g)
    }, set: function (g, b) {
        var h = e.data(g, "__nicescroll") || !1;
        h && h.ishwscroll ? h.setScrollLeft(parseInt(b)) : A.call(g, b);
        return this
    }};
    e.fn.scrollLeft = function (g) {
        if ("undefined" == typeof g) {
            var b = this[0] ? e.data(this[0], "__nicescroll") || !1 : !1;
            return b && b.ishwscroll ? b.getScrollLeft() : A.call(this)
        }
        return this.each(function () {
            var b = e.data(this, "__nicescroll") || !1;
            b && b.ishwscroll ? b.setScrollLeft(parseInt(g)) : A.call(e(this), g)
        })
    };
    var B = function (g) {
        var b = this;
        this.length = 0;
        this.name = "nicescrollarray";
        this.each = function (e) {
            for (var g = 0, a = 0; g < b.length; g++)e.call(b[g], a++);
            return b
        };
        this.push = function (e) {
            b[b.length] = e;
            b.length++
        };
        this.eq = function (e) {
            return b[e]
        };
        if (g)for (var h = 0; h < g.length; h++) {
            var k =
                e.data(g[h], "__nicescroll") || !1;
            k && (this[this.length] = k, this.length++)
        }
        return this
    };
    (function (e, b, h) {
        for (var k = 0; k < b.length; k++)h(e, b[k])
    })(B.prototype, "show hide toggle onResize resize remove stop doScrollPos".split(" "), function (e, b) {
        e[b] = function () {
            var e = arguments;
            return this.each(function () {
                this[b].apply(this, e)
            })
        }
    });
    e.fn.getNiceScroll = function (g) {
        return"undefined" == typeof g ? new B(this) : this[g] && e.data(this[g], "__nicescroll") || !1
    };
    e.extend(e.expr[":"], {nicescroll: function (g) {
        return e.data(g, "__nicescroll") ?
            !0 : !1
    }});
    e.fn.niceScroll = function (g, b) {
        "undefined" == typeof b && ("object" == typeof g && !("jquery"in g)) && (b = g, g = !1);
        var h = new B;
        "undefined" == typeof b && (b = {});
        g && (b.doc = e(g), b.win = e(this));
        var k = !("doc"in b);
        !k && !("win"in b) && (b.win = e(this));
        this.each(function () {
            var g = e(this).data("__nicescroll") || !1;
            g || (b.doc = k ? e(this) : b.doc, g = new N(b, e(this)), e(this).data("__nicescroll", g));
            h.push(g)
        });
        return 1 == h.length ? h[0] : h
    };
    window.NiceScroll = {getjQuery: function () {
        return e
    }};
    e.nicescroll || (e.nicescroll = new B, e.nicescroll.options =
        G)
});

function SVGLoader(t, a) {
    return this.container = t, this.svg = a, this.snap = Snap(this.svg), this.path = this.snap.select("path"), this.path_length = this.path.getTotalLength(), this.matrices = [], this.init()
}
SVGLoader.prototype.init = function () {
    var t = this.svg.clientWidth, a = this.svg.clientHeight, i = Math.round(t / 2), e = Math.round(a / 2), h = this.path.getBBox(), n = h.cx, s = h.cy, r = Math.round(i - n), o = Math.round(e - s), p = new Snap.Matrix;
    p.translate(r, o), this.path.transform(p);
    var d = new Snap.Matrix, c = 110;
    return d.scale(c, c, n, s + 13.3), this.matrices[0] = p, this.matrices[1] = d, this.path.attr({strokeDasharray: this.path_length + " " + this.path_length, strokeDashoffset: this.path_length}), this
}, SVGLoader.prototype.addImage = function (t, a, i, e, h) {
    var n = this.snap.image(t, a, i, e, h);
    return this.path.attr({stroke: "white"}), n.attr({mask: this.path}), this
}, SVGLoader.prototype.addAdaptiveImage = function (t, a, i) {
    var e = y = 0, h = a / i, n = this.svg.clientWidth, s = this.svg.clientHeight, r = n / s;
    return h > r ? (i = s, a = Math.round(i * h), e = -(s * h - n) / 2, y = 0) : (a = n, i = Math.round(a / h), e = 0, y = -(n / h - s) / 2), this.addImage(t, e, y, a, i)
}, SVGLoader.prototype.animate = function () {
    var t = this;
    return setTimeout(function () {
        t.path.animate({strokeDashoffset: "0"}, 2e3, mina.easeinout, function () {
            return t.done()
        })
    }, 125), this
}, SVGLoader.prototype.progress = function (t, a, i) {
    a = a || 400, i = i || mina.linear;
    var e = this.path_length;
    e = 0 >= t ? this.path_length : t >= 100 ? 0 : this.path_length - this.path_length * t / 100;
    return this.path.animate({strokeDashoffset: e}, a, i), this
}, SVGLoader.prototype.hasFinished = function () {
    return 0 === parseInt(this.path.attr("strokeDashoffset")) || 0 === this.path.inAnim().length
}, SVGLoader.prototype.done = function (t, a) {
    t = t || 1e3, a = a || mina.linear;
    var i = this, e = !this.animating, h = setInterval(function () {
        e = i.hasFinished(), e && (clearInterval(h), i.path.animate({transform: i.matrices[0].add(i.matrices[1])}, t, a, function () {
            i.container.classList.add("hide"), window.scrollTo(0, 0)
        }))
    }, 100);
    return this
};
app.fpScrollingSpeed = 700, app.body_classes = null, app.scrollingDirection = null, app.scrollingTiming = {start: 150, half: 400, end: 600}, app.sectionWithViews = "", app.animationClass = {"in": "fadeIn", out: "fadeOut"}, app.fpTooltips = [], app.fpAnchors = [], app.init = function () {
    var e = this, i = document.querySelector(".svg-container"), a = document.querySelector("#svg-loader");
    if (i && a) {
        var t = new SVGLoader(i, a), s = new imagesLoaded(document.querySelector("body"));
        s.on("progress",function (i, a) {
            for (var s = 0, n = 0, o = i.images.length; o > s; s++)i.images[s].isLoaded && n++;
            var l = e.isDevice() ? 31 : 1;
            l == a.img.dataset.sprite && a.isLoaded && t.addAdaptiveImage(a.img.src, a.img.width, a.img.height), t.progress(100 * n / o)
        }).on("always", function () {
            t.done(1e3, mina.easeout)
        })
    }
    $("section").each(function () {
        var i = $(this), a = i.data("navigation");
        if (a) {
            var t = a.split("|");
            e.fpAnchors.push(t[0]), e.fpTooltips.push(t[1]), i.hasClass("section-versus") && (e.sectionWithViews = t[0])
        }
    }), $(".toReveal > *").addClass("reveal")
}, app.isMobile = function () {
    return 1 == this.is_mobile
}, app.isTablet = function () {
    return 1 == this.is_tablet
}, app.isDevice = function () {
    return this.isMobile() || this.isTablet()
}, app.isNotDevice = function () {
    return!this.isDevice()
}, app.toggleClassesStartingWith = function (e, i, a) {
    a = a || 0;
    var t = this, s = function (e, i, a) {
        return a = a || !1, $.grep(e, function (e) {
            return 0 === e.indexOf(i)
        }, a)
    };
    setTimeout(function () {
        var a = t.getBodyClasses().split(" "), n = s(a, e, !0), o = s(i, e);
        a = n.concat(o), t.setBodyClasses(a.join(" "))
    }, a)
}, app.getBodyClasses = function () {
    return this.body_classes || (this.body_classes = $("body").attr("class")), this.body_classes
}, app.toggleBodyClass = function (e, i) {
    $("body").toggleClass(e, i), this.body_classes = null
}, app.setBodyClasses = function (e) {
    $("body").attr("class", e), this.body_classes = e
}, app.updateActiveSection = function (e, i) {
    var a = this, e = e || "";
    e = e.split(" "), a.toggleClassesStartingWith("section-pagination-", e, "undefined" == typeof i ? 0 : a.scrollingTiming.half), a.toggleClassesStartingWith("section-header-", e, "undefined" == typeof i ? 0 : "up" === i ? a.scrollingTiming.start : a.scrollingTiming.end)
}, app.enableFullpage = function (e, i) {
    "undefined" == typeof e && (e = !0), "undefined" == typeof i && (i = !1), $.fn.fullpage.setAllowScrolling(e === !0), $.fn.fullpage.setKeyboardScrolling(e === !0), i === !0 && this.toggleBodyClass("section-pagination-hide", e !== !0)
}, app.getHash = function () {
    var e = window.location.hash.replace("#", "").split("/");
    return 0 === e[0].length && (e = []), e
}, app.setHash = function (e) {
    window.location.hash = e.join("/")
}, app.fullpageAfterRender = function () {
    this.isNotDevice() && this.enableFullpage(!1);
    var e = $(".fp-section.active");
    this.updateActiveSection(e.data("bodyClasses"));
    var i = this.getHash();
    i.length && 0 !== $('.fp-section[data-anchor="' + i[0] + '"]').index() || this.revealInSection(1);
    var a = $("#fp-nav li"), t = a.length / 2;
    a.slice(0, Math.floor(t)).addClass("first-half"), a.slice(Math.ceil(t)).addClass("second-half"), a.length % 2 !== 0 && a.eq(Math.floor(t)).addClass("exact-half"), $(".imagefill").imagefill({resize: !1, afterRender: function () {
        $(".marker").imagemarkers(), app.isNotDevice() && $("#sprites").sprites({container: ".section-sprites", onProgress: function (e) {
            app.enableFullpage(!1), 1 === e && $.fn.fullpage.setKeyboardScrolling(!0)
        }, onEnd: function () {
            app.enableFullpage(!0), $.fn.sprites.enable(!1)
        }})
    }, afterResize: function () {
        $(".marker").imagemarkers()
    }});
    var s = {selector: 'id="lightbox-img"', onStart: function () {
        $("#lightbox-overlay").addClass("visible show"), app.enableFullpage(!1)
    }, onEnd: function () {
        app.enableFullpage(!0);
        var e = $("#lightbox-overlay").removeClass("show");
        setTimeout(function () {
            e.removeClass("visible")
        }, 300)
    }};
    $('a[data-imagelightbox="gallery-armchairs"]').imageLightbox(s), $('a[data-imagelightbox="gallery-chairs"]').imageLightbox(s), $('a[data-imagelightbox="gallery-sofas"]').imageLightbox(s), $('a[data-imagelightbox="gallery-stools"]').imageLightbox(s);
    var n = {bouncescroll: !1, oneaxismousemode: !1, horizrailenabled: !1, cursorwidth: 10, cursorborderradius: "5px", cursoropacitymax: .1, railoffset: {left: 6, top: 0}};
    $(".scrollable-black").niceScroll($.extend(n, {cursorborder: "1px solid #000", cursorcolor: "#000"})), $(".scrollable-white").niceScroll($.extend(n, {cursorborder: "1px solid #fff", cursorcolor: "#fff"})), $("#stores").niceScroll(".stores", $.extend(n, {cursorborder: "1px solid #fff", cursorcolor: "#fff"})), $("#intro").niceScroll("#intro > article", $.extend(n, {cursorborder: "1px solid #000", cursorcolor: "#000"}))
}, app.fullpageAfterLoad = function (e, i) {
    this.revealInSection(i, !0, this.scrollingDirection), this.isNotDevice() && (1 === i ? ($.fn.sprites.enable(!0), this.enableFullpage(!1)) : ($.fn.sprites.enable(!1), this.enableFullpage(!0))), e !== app.sectionWithViews && $(".view").trigger("toggle.view", !1)
}, app.fullpageOnLeave = function (e, i, a) {
    this.scrollingDirection = a, this.revealInSection(e, !1, a);
    var t = Math.max(parseInt(i, 10) - 1, 0), s = $(".fp-section:eq(" + t + ")").data("bodyClasses") || "";
    this.isMobile() && t > 0 && (s += " section-header-hide"), this.updateActiveSection(s, a)
}, app.resize = function () {
    $.fn.imagefill.checkSizeChange(), $(".scrollable").getNiceScroll().resize()
}, app.revealInSection = function (e, i, a) {
    var t = this, s = "animated", n = "up" === a ? "Down" : "Up";
    "undefined" == typeof i && (i = !0), i = i === !0;
    var o = $(".fp-section:eq(" + (e - 1) + ")");
    if (o.length) {
        var l = s + " " + t.animationClass[i ? "in" : "out"] + n;
        o.find(i ? ".reveal" : ".revealed").removeClass("reveal revealed").addClass(l).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
            $(this).removeClass(l).toggleClass("revealed", i).toggleClass("reveal", !i)
        })
    }
}, app.init(), $("#main").fullpage({verticalCentered: !1, resize: !1, navigation: app.fpHasNavigation, navigationPosition: "right", navigationTooltips: app.fpTooltips, anchors: app.fpAnchors, easing: "swing", autoScrolling: !0, scrollingSpeed: app.fpScrollingSpeed, normalScrollElements: ".scrollable", css3: !0, sectionSelector: "section", afterRender: function () {
    app.fullpageAfterRender()
}, afterResize: function () {
    app.resize()
}, afterLoad: function (e, i) {
    app.fullpageAfterLoad(e, i)
}, onLeave: function (e, i, a) {
    app.fullpageOnLeave(e, i, a)
}}), $(".toSection").on("click", function (e) {
    e.preventDefault();
    var i = $(this).data("index");
    i >= 0 && $.fn.fullpage.moveTo(i)
}), $(".view").on("click", ".btn",function (e) {
    e.preventDefault(), $(this).closest(".view").trigger("toggle.view")
}).on("toggle.view", function (e, i) {
    var a = $(this), t = a.hasClass("active");
    "undefined" == typeof i && (i = !t);
    var s = i === !0;
    if (t !== s) {
        s ? a.addClass("active open") : (a.removeClass("open"), setTimeout(function () {
            a.removeClass("active")
        }, app.fpScrollingSpeed));
        var n = a.hasClass("view-white") ? "white" : "black";
        if ("white" === n) {
            var o = [];
            app.isMobile() && o.push("section-header-hide"), s || o.push("section-header-white"), app.toggleClassesStartingWith("section-header-", o, s ? app.scrollingTiming.end : app.scrollingTiming.start)
        }
        app.enableFullpage(!s, !0);
        var l = app.getHash(), r = l[0], p = [];
        r && r.length && (p.push(r), s && p.push(n)), app.setHash(p)
    }
});
var $lampe_markers = $(".lampe-markers").on("click", ".plus", function (e) {
    e.preventDefault(), $(this).addClass("active");
    var i = this.href.substring(this.href.lastIndexOf("#"));
    $(i).addClass("active open").find(".plus").addClass("active")
});
$(".detail").on("click", ".plus",function (e) {
    e.preventDefault(), $(e.delegateTarget).trigger("quit.detail")
}).on("quit.detail", function () {
    var e = $(this);
    e.find(".plus").removeClass("active"), e.removeClass("open"), setTimeout(function () {
        e.removeClass("active")
    }, app.fpScrollingSpeed), setTimeout(function () {
        $lampe_markers.find(".plus").removeClass("active")
    }, app.fpScrollingSpeed / 3)
}), $(document).on("keydown", function (e) {
    switch (e.which) {
        case 27:
            $(".detail").trigger("quit.detail");
            break;
        case 37:
            var i = $(".view.open");
            i.length && i.trigger("toggle.view");
            break;
        default:
            return
    }
});