jQuery(function(c) {
    "use strict";
    c(window).scroll(function(t) {
        ! function() {
            var e = [],
                t = [],
                i = c(window).scrollTop();
            c(".navbar-collapse").find(".scroll a").each(function() {
                e.push(c(c(this).attr("href")).offset().top), t.push(c(c(this).attr("href")).offset().top + c(c(this).attr("href")).height())
            }), c.each(e, function(t) {
                i > e[t] - 200 && c(".navbar-collapse li.scroll").removeClass("active").eq(t).addClass("active")
            })
        }()
    }), c(".navbar-collapse ul li a").on("click", function() {
        return c("html, body").animate({
            scrollTop: c(this.hash).offset().top - 5
        }, 1e3), !1
    }), c("#tohash").on("click", function() {
        return c("html, body").animate({
            scrollTop: c(this.hash).offset().top - 5
        }, 1e3), !1
    }), c(document).ready(function() {
        var e, i, o, t, a, n, s = 3;

        function l() {
            n = 0, t = !1, a = setInterval(r, 10)
        }

        function r() {
            !1 === t && (n += 1 / s, i.css({
                width: n + "%"
            }), 100 <= n && o.trigger("owl.next"))
        }
        c("#main-slider").find(".owl-carousel").owlCarousel({
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: !0,
            navigation: !0,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            afterInit: function(t) {
                o = t, e = c("<div>", {
                    id: "progressBar"
                }), i = c("<div>", {
                    id: "bar"
                }), e.append(i).appendTo(o), l()
            },
            afterMove: function() {
                clearTimeout(a), l()
            },
            startDragging: function() {
                t = !0
            },
            transitionStyle: "fade"
        })
    }), (new WOW).init(), smoothScroll.init(), c(window).load(function() {
        var e = c(".portfolio-filter >li>a"),
            i = c(".portfolio-items");
        i.isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows"
        }), e.on("click", function() {
            e.removeClass("active"), c(this).addClass("active");
            var t = c(this).attr("data-filter");
            return i.isotope({
                filter: t
            }), !1
        })
    }), c(document).ready(function() {
        var e, i, o, t, a, n, s = 3;

        function l() {
            n = 0, t = !1, a = setInterval(r, 10)
        }

        function r() {
            !1 === t && (n += 1 / s, i.css({
                width: n + "%"
            }), 100 <= n && o.trigger("owl.next"))
        }
        c("#main-slider1").find(".owl-carousel").owlCarousel({
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: !0,
            navigation: !0,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            afterInit: function(t) {
                o = t, e = c("<div>", {
                    id: "progressBar"
                }), i = c("<div>", {
                    id: "bar"
                }), e.append(i).appendTo(o), l()
            },
            afterMove: function() {
                clearTimeout(a), l()
            },
            startDragging: function() {
                t = !0
            },
            transitionStyle: "fade"
        })
    }), (new WOW).init(), smoothScroll.init(), c(window).load(function() {
        var e = c(".portfolio-filter >li>a"),
            i = c(".portfolio-items");
        i.isotope({
            itemSelector: ".portfolio-item",
            layoutMode: "fitRows"
        }), e.on("click", function() {
            e.removeClass("active"), c(this).addClass("active");
            var t = c(this).attr("data-filter");
            return i.isotope({
                filter: t
            }), !1
        })
    }), c(document).ready(function() {
        c(".progress-bar").bind("inview", function(t, e, i, o) {
            e && (c(this).css("width", c(this).data("width") + "%"), c(this).unbind("inview"))
        }), c.fn.animateNumbers = function(i, o, a, n) {
            return this.each(function() {
                var t = c(this),
                    e = parseInt(t.text().replace(/,/g, ""));
                o = void 0 === o || o, c({
                    value: e
                }).animate({
                    value: i
                }, {
                    duration: null == a ? 1e3 : a,
                    easing: null == n ? "swing" : n,
                    step: function() {
                        t.text(Math.floor(this.value)), o && t.text(t.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"))
                    },
                    complete: function() {
                        parseInt(t.text()) !== i && (t.text(i), o && t.text(t.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")))
                    }
                })
            })
        }, c(".business-stats").bind("inview", function(t, e, i, o) {
            var a = c(this);
            e && (a.animateNumbers(a.data("digit"), !1, a.data("duration")), a.unbind("inview"))
        })
    }), c("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: !1
    });
    var o = c("#google-map").data("latitude"),
        a = c("#google-map").data("longitude");
    google.maps.event.addDomListener(window, "load", function() {
        var t = new google.maps.LatLng(o, a),
            e = {
                zoom: 12,
                scrollwheel: !1,
                center: t
            },
            i = new google.maps.Map(document.getElementById("google-map"), e);
        new google.maps.Marker({
            position: t,
            map: i
        })
    })
});