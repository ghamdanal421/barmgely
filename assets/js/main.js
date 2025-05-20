!(function (e) {
  e(window).on("load", function () {
    e("[data-paroller-factor]").paroller(),
      e(".loader-wrapper").fadeOut(1e3),
      e("html").css("overflow", "auto"),
      e(".bg_img").css("background-image", function () {
        return "url(" + e(this).data("background") + ")";
      });
  }),
    e(document).ready(function () {
      e(".popup").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1,
        disableOn: 300,
      }),
        e("body").each(function () {
          e(this)
            .find(".img-pop")
            .magnificPopup({ type: "image", gallery: { enabled: !0 } });
        }),
        new WOW().init(),
        e(".faq-wrapper .faq-title").on("click", function (a) {
          var t = e(this).parent(".faq-item");
          t.hasClass("open")
            ? (t.removeClass("open"),
              t.find(".faq-content").removeClass("open"),
              t.find(".faq-content").slideUp(300, "swing"))
            : (t.addClass("open"),
              t.children(".faq-content").slideDown(300, "swing"),
              t
                .siblings(".faq-item")
                .children(".faq-content")
                .slideUp(300, "swing"),
              t.siblings(".faq-item").removeClass("open"),
              t.siblings(".faq-item").find(".faq-title").removeClass("open"),
              t
                .siblings(".faq-item")
                .find(".faq-content")
                .slideUp(300, "swing"));
        }),
        e(".faq--area .faq-title").on("click", function (a) {
          var t = e(this).parent(".faq--item");
          t.hasClass("open")
            ? (t.removeClass("open"),
              t.find(".faq-content").removeClass("open"),
              t.find(".faq-content").slideUp(300, "swing"))
            : (t.addClass("open"),
              t.children(".faq-content").slideDown(300, "swing"),
              t
                .siblings(".faq--item")
                .children(".faq-content")
                .slideUp(300, "swing"),
              t.siblings(".faq--item").removeClass("open"),
              t.siblings(".faq--item").find(".faq-title").removeClass("open"),
              t
                .siblings(".faq--item")
                .find(".faq-content")
                .slideUp(300, "swing"));
        }),
        e("ul>li>.submenu").parent("li").addClass("menu-item-has-children"),
        e(".submenu")
          .parent("li")
          .hover(function () {
            var a = e(this).find("ul");
            if (e(a).offset().right + a.width() > e(window).width()) {
              var t = -e(a).width();
              a.css({ right: t });
            }
          }),
        e(".menu li a").on("click", function (a) {
          var t = e(this).parent("li");
          t.hasClass("open")
            ? (t.removeClass("open"),
              t.find("li").removeClass("open"),
              t.find("ul").slideUp(300, "swing"))
            : (t.addClass("open"),
              t.children("ul").slideDown(300, "swing"),
              t.siblings("li").children("ul").slideUp(300, "swing"),
              t.siblings("li").removeClass("open"),
              t.siblings("li").find("li").removeClass("open"),
              t.siblings("li").find("ul").slideUp(300, "swing"));
        }),
        e(".widget-next").on("click", function () {
          owlTutu.trigger("next.owl.carousel");
        }),
        e(".widget-prev").on("click", function () {
          owlTutu.trigger("prev.owl.carousel", [300]);
        });
      var a = e(".scrollToTop");
      e(window).on("scroll", function () {
        e(this).scrollTop() < 500
          ? a.removeClass("active")
          : a.addClass("active");
      }),
        e(".scrollToTop").on("click", function () {
          return e("html, body").animate({ scrollTop: 0 }, 500), !1;
        }),
        e(".header-bar").on("click", function () {
          e(this).toggleClass("active"),
            e(".overlay").toggleClass("active"),
            e(".menu").toggleClass("active");
        }),
        e(".overlay").on("click", function () {
          e(this).removeClass("active"),
            e(".header-bar").removeClass("active"),
            e(".menu").removeClass("active");
        }),
        window.scrollY >= 1 &&
          (e(".header-bottom").addClass("active"),
          e(".header-section-2").removeClass("plan-header"));
      var t = e(".header-section");
      e(window).on("scroll", function () {
        if (
          !document
            .querySelector(".header-section .header-wrapper .menu")
            .classList.contains("active")
        ) {
          var a = document.body.scrollWidth - window.scrollY;
          t.attr("scoll") < a ? t.addClass("active") : t.removeClass("active"),
            t.attr("scoll", a);
        }
        e(this).scrollTop() < 1
          ? t.addClass("active-satic")
          : t.removeClass("active-satic");
      }),
        e(".tab ul.tab-menu li").on("click", function (a) {
          var t = e(this).closest(".tab"),
            i = e(this).closest("li").index();
          t.find("li").siblings("li").removeClass("active"),
            e(this).closest("li").addClass("active"),
            t
              .find(".tab-area")
              .find("div.tab-item")
              .not("div.tab-item:eq(" + i + ")")
              .hide(10),
            t
              .find(".tab-area")
              .find("div.tab-item:eq(" + i + ")")
              .fadeIn(10),
            a.preventDefault();
        }),
        e(".tab-up ul.tab-menu li").on("click", function (a) {
          var t = e(this).closest(".tab-up"),
            i = e(this).closest("li").index();
          t.find("li").siblings("li").removeClass("active"),
            e(this).closest("li").addClass("active"),
            t
              .find(".tab-area")
              .find("div.tab-item")
              .not("div.tab-item:eq(" + i + ")")
              .slideUp(400),
            t
              .find(".tab-area")
              .find("div.tab-item:eq(" + i + ")")
              .slideDown(400),
            a.preventDefault();
        }),
        e(".counter").countUp({ time: 1500, delay: 10 }),
        e(".social-icons li a").on("mouseover", function (a) {
          var t = e(this).parent("li");
          t.children("a").hasClass("active"),
            t.siblings("li").children("a").removeClass("active"),
            e(this).addClass("active");
        }),
        e(".testimonial-slider").owlCarousel({
          loop: !0,
          nav: !1,
          dots: !1,
          items: 1,
          autoplay: !0,
          autoplayTimeout: 2500,
          autoplayHoverPause: !0,
          margin: 0,
          mouseDrag: !1,
          touchDrag: !0,
          rtl: !0,
        });
      var i = e(".testimonial-slider");
      i.owlCarousel(),
        e(".testi-next").on("click", function () {
          i.trigger("prev.owl.carousel");
        }),
        e(".testi-prev").on("click", function () {
          i.trigger("next.owl.carousel", [300]);
        }),
        e(".mobile-slider-16").owlCarousel({
          loop: !0,
          nav: !1,
          dots: !0,
          items: 1,
          autoplay: !0,
          autoplayTimeout: 2500,
          autoplayHoverPause: !1,
          margin: 0,
          mouseDrag: !1,
          touchDrag: !1,
          rtl: !0,
        }),
        e(".mobile-slider").owlCarousel({
          loop: !0,
          nav: !1,
          dots: !1,
          items: 1,
          autoplay: !0,
          autoplayTimeout: 4e3,
          autoplayHoverPause: !1,
          margin: 0,
          mouseDrag: !1,
          touchDrag: !1,
          rtl: !0,
        });
      var o = e(".mobile-slider");
      o.owlCarousel(),
        e(".cola-next").on("click", function () {
          o.trigger("next.owl.carousel");
        }),
        e(".cola-prev").on("click", function () {
          o.trigger("prev.owl.carousel", [300]);
        }),
        e(".colaboration-slider").owlCarousel({
          loop: !0,
          nav: !1,
          dots: !1,
          items: 1,
          autoplay: !0,
          autoplayTimeout: 4e3,
          autoplayHoverPause: !1,
          margin: 0,
          mouseDrag: !1,
          touchDrag: !1,
          rtl: !0,
        });
      var s = e(".colaboration-slider");
      s.owlCarousel(),
        e(".cola-next").on("click", function () {
          s.trigger("next.owl.carousel");
        }),
        e(".cola-prev").on("click", function () {
          s.trigger("prev.owl.carousel", [300]);
        }),
        e(".banner-4-slider").owlCarousel({
          loop: !0,
          nav: !1,
          dots: !1,
          items: 1,
          autoplay: !0,
          autoplayTimeout: 4e3,
          autoplayHoverPause: !1,
          margin: 0,
          mouseDrag: !1,
          touchDrag: !0,
          rtl: !0,
        });
      var l = e(".banner-4-slider");
      l.owlCarousel(),
        e(".ban-next").on("click", function () {
          l.trigger("next.owl.carousel");
        }),
        e(".ban-prev").on("click", function () {
          l.trigger("prev.owl.carousel", [300]);
        }),
        e(".banner-1-slider").owlCarousel({
          loop: !0,
          nav: !1,
          dots: !1,
          items: 1,
          autoplay: !1,
          margin: 0,
          mouseDrag: !1,
          touchDrag: !1,
          animateOut: "fadeOut",
          animateIn: "fadeIn",
          rtl: !0,
        });
      var n = e(".banner-1-slider");
      n.owlCarousel(),
        e(".ban-click").on("click", function () {
          n.trigger("next.owl.carousel");
        }),
        e(".sponsor-slider").owlCarousel({
          loop: !0,
          margin: 0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          loop: !0,
          autoplay: !0,
          autoplayTimeout: 2e3,
          autoplayHoverPause: !0,
          rtl: !0,
          responsive: { 0: { items: 2 }, 480: { items: 3 }, 768: { items: 4 } },
        }),
        e(".sponsor-slider-two").owlCarousel({
          loop: !0,
          margin: 30,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          loop: !0,
          autoplay: !0,
          autoplayTimeout: 2e3,
          autoplayHoverPause: !0,
          rtl: !0,
          responsive: {
            0: { items: 2 },
            480: { items: 3 },
            768: { items: 5 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        }),
        e(".sponsor-slider-3").owlCarousel({
          loop: !0,
          margin: 30,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          loop: !0,
          autoplay: !0,
          autoplayTimeout: 2e3,
          autoplayHoverPause: !0,
          rtl: !0,
          responsive: {
            0: { items: 2 },
            480: { items: 3 },
            768: { items: 4 },
            992: { items: 5 },
            1200: { items: 6 },
          },
        }),
        e(".sponsor-slider-4").owlCarousel({
          loop: !0,
          margin: 30,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          loop: !0,
          autoplay: !0,
          autoplayTimeout: 2e3,
          autoplayHoverPause: !0,
          rtl: !0,
          responsive: {
            0: { items: 2 },
            480: { items: 3 },
            768: { items: 5 },
            992: { items: 6 },
            1200: { items: 7 },
          },
        }),
        e(".client-slider").owlCarousel({
          loop: !0,
          margin: 0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          loop: !0,
          autoplay: !0,
          autoplayTimeout: 2e3,
          autoplayHoverPause: !0,
          rtl: !0,
          responsive: { 0: { items: 1 }, 500: { items: 2 }, 992: { items: 3 } },
        }),
        e(".history-slider").owlCarousel({
          loop: !0,
          margin: 0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          loop: !0,
          autoplay: !0,
          autoplayTimeout: 2e3,
          autoplayHoverPause: !0,
          center: !0,
          rtl: !0,
          responsive: {
            0: { items: 1 },
            767: { items: 3 },
            1199: { items: 5 },
          },
        }),
        e(".tool-slider").owlCarousel({
          loop: !0,
          margin: 30,
          responsiveClass: !0,
          nav: !0,
          navText: [
            "<i class='flaticon-double-left-angle-arrows' aria-hidden='true'></i>",
            "<i class='flaticon-double-angle-arrow-pointing-to-right' aria-hidden='true'></i>",
          ],
          dots: !1,
          loop: !0,
          autoplay: !0,
          autoplayTimeout: 2e3,
          autoplayHoverPause: !0,
          rtl: !0,
          responsive: {
            0: { items: 1 },
            500: { items: 2 },
            768: { items: 3 },
            992: { items: 2 },
          },
        }),
        e(".feature-item-2-slider").owlCarousel({
          loop: !0,
          margin: 30,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          loop: !0,
          autoplay: !0,
          autoplayTimeout: 2e3,
          autoplayHoverPause: !0,
          rtl: !0,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1200: { items: 3 },
          },
        }),
        e(".pricing-slider").owlCarousel({
          loop: !0,
          margin: 0,
          responsiveClass: !0,
          nav: !1,
          dots: !1,
          loop: !0,
          autoplay: !0,
          autoplayTimeout: 2e3,
          autoplayHoverPause: !0,
          rtl: !0,
          responsive: {
            0: { items: 1 },
            768: { items: 2 },
            992: { items: 3 },
            1200: { items: 4 },
          },
        }),
        e(".feat-slider").length &&
          e(".feat-slider").owlCarousel({
            center: !0,
            items: 1,
            loop: !0,
            margin: 0,
            singleItem: !0,
            nav: !1,
            dots: !1,
            thumbs: !0,
            mouseDrag: !1,
            touchDrag: !0,
            thumbsPrerendered: !0,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            rtl: !0,
            autoHeight: !0,
          });
      var r = e(".feat-slider");
      e(".feat-prev").on("click", function () {
        r.trigger("prev.owl.carousel");
      }),
        e(".feat-next").on("click", function () {
          r.trigger("next.owl.carousel", [300]);
        }),
        e(".work-slider").length &&
          e(".work-slider").owlCarousel({
            items: 1,
            loop: !1,
            margin: 0,
            singleItem: !0,
            nav: !0,
            dots: !1,
            thumbs: !0,
            mouseDrag: !1,
            touchDrag: !0,
            thumbsPrerendered: !0,
            rtl: !0,
          }),
        e(".client-item-16 .client-thumb").on("mouseover", function (a) {
          var t = e(this).parent(".client-item-16");
          t.hasClass("open")
            ? (t.removeClass("open"), t.removeClass("active"))
            : (t
                .siblings(".client-item-16")
                .find(".client-content")
                .removeClass("active"),
              t.siblings(".client-item-16").removeClass("active"),
              t.children(".client-content").addClass("active"),
              t.addClass("active"));
        });
    }),
    e("ul.menu li a").on("click", function () {
      e("ul.menu").hasClass("active") &&
        (e(".header-bar").removeClass("active"),
        e(".overlay").removeClass("active"),
        e(".menu").removeClass("active"));
    }),
    e("a[href]").click(function () {
      if (
        e(this).attr("href").search(/#.+/gi) < 3 &&
        0 != e(this).attr("href").length
      )
        try {
          e("html, body").animate(
            { scrollTop: e(e(this).attr("href")).offset().top + 40 },
            1
          );
        } catch {}
    }),
    e("#clear-alert").on("click", function () {
      e(".alert-container").fadeOut(400);
    }),
    document.querySelector(
      '.header-section .header-wrapper .menu li a[data-clack="true"]'
    ) &&
      document
        .querySelector(
          '.header-section .header-wrapper .menu li a[data-clack="true"]'
        )
        .click(),
    e("#svg-services")
      .width(e("#con-services").width())
      .css({ right: e(".leftSidebar").width() + 20 + "px", display: "block" });
})(jQuery),
  $(document).ready(function () {
    $(".leftSidebar, .rightSidebar").theiaStickySidebar({
      additionalMarginTop: 30,
      topSpacing: 70,
    }),
      document
        .getElementById("sidebar")
        .addEventListener("affix.top.stickySidebar", function () {}),
      setTimeout(function () {
        document.querySelectorAll(".lizzy-loud-img").forEach(function (e) {
          e.setAttribute("data-error", 1),
            (e.src = e.getAttribute("data-src")),
            (e.onload = function () {
              e.parentElement.classList.add("loading");
            }),
            (e.onerror = function () {
              parseInt(this.getAttribute("data-error")) < 10 &&
                (this.setAttribute(
                  "data-error",
                  parseInt(this.getAttribute("data-error")) + 1
                ),
                (this.src = e.getAttribute("data-src")),
                (this.onload = function () {
                  this.parentElement.classList.add("loading");
                }));
            });
        });
      }, 1e3);
  });



//   $(document).ready(function() {
//       setTimeout(function (){
//         $.ajax({
//             type: 'GET',
//             url: 'get-api/self',
//             data: "",
//             dataType: 'json',
//             beforeSend: function() {
             
//             },
//             success: function(response) {
//                 if(response && response.location &&  response.location.calling_code && response.location.calling_code != ""){
//                  document.getElementById('calling_code').value = response.location.calling_code;

//                 }
//             }
//         });
//       }, 1000);
        

// });
