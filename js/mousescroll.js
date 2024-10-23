! function(e, t) {
    "function" == typeof define && define.amd ? define("smoothScroll", t(e)) : "object" == typeof exports ? module.smoothScroll = t(e) : e.smoothScroll = t(e)
}(this, function(g) {
    "use strict";

    function r(e, t, n) {
        if ("[object Object]" === Object.prototype.toString.call(e))
            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
        else
            for (var a = 0, r = e.length; a < r; a++) t.call(n, e[a], a, e)
    }

    function v(n, o) {
        var a = {};
        return r(n, function(e, t) {
            a[t] = n[t]
        }), r(o, function(e, t) {
            a[t] = o[t]
        }), a
    }

    function O(e) {
        return e.replace(/^\s+|\s+$/g, "")
    }
    var n, o = {},
        a = !!document.querySelector && !!g.addEventListener,
        y = {
            speed: 500,
            easing: "easeInOutCubic",
            offset: 0,
            updateURL: !1,
            callbackBefore: function() {},
            callbackAfter: function() {}
        };
    return o.animateScroll = function(a, r, e, t) {
        var c = v(c || y, e || {}),
            n = function(e) {
                var t = {};
                return e && (e = e.split(";")).forEach(function(e) {
                    "" !== (e = O(e)) && (e = e.split(":"), t[e[0]] = O(e[1]))
                }), t
            }(a ? a.getAttribute("data-options") : null);
        c = v(c, n);
        var o, u, l, i = document.querySelector("[data-scroll-header]"),
            f = null === i ? 0 : i.offsetHeight + i.offsetTop,
            s = g.pageYOffset,
            d = function(e, t, n) {
                var o = 0;
                if (e.offsetParent)
                    for (; o += e.offsetTop, e = e.offsetParent;);
                return 0 <= (o = o - t - n) ? o : 0
            }(document.querySelector(r), f, parseInt(c.offset, 10)),
            p = d - s,
            m = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight),
            h = 0;
        a && "a" === a.tagName.toLowerCase() && t && t.preventDefault(),
            function(e, t) {
                history.pushState && (t || "true" === t) && history.pushState({
                    pos: e.id
                }, "", e)
            }(r, c.updateURL);

        function b() {
            u = 1 < (u = (h += 16) / parseInt(c.speed, 10)) ? 1 : u, l = s + p * function(e, t) {
                    var n;
                    return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = t < .5 ? 2 * t * t : (4 - 2 * t) * t - 1), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t
                }(c.easing, u), g.scrollTo(0, Math.floor(l)),
                function(e, t, n) {
                    var o = g.pageYOffset;
                    (e == t || o == t || g.innerHeight + o >= m) && (clearInterval(n), c.callbackAfter(a, r))
                }(l, d, o)
        }
        0 === g.pageYOffset && g.scrollTo(0, 0), c.callbackBefore(a, r), o = setInterval(b, 16)
    }, o.init = function(e) {
        if (a) {
            n = v(y, e || {});
            var t = document.querySelectorAll("[data-scroll]");
            r(t, function(e) {
                e.addEventListener("click", o.animateScroll.bind(null, e, e.hash, n), !1)
            })
        }
    }, o
});