/*
Template Name: Craft - Startup Landing Page Template.
Author: GrayGrids
*/

(function () {
  //===== Prealoder

  window.onload = function () {
    window.setTimeout(fadeout, 500);
  };

  function fadeout() {
    document.querySelector(".preloader").style.opacity = "0";
    document.querySelector(".preloader").style.display = "none";
  }

  /*=====================================
    Sticky
    ======================================= */
  window.onscroll = function () {
    var header_navbar = document.querySelector(".navbar-area");
    var sticky = header_navbar.offsetTop;

    var logo = document.querySelector(".navbar-brand img");
    if (window.pageYOffset > sticky) {
      header_navbar.classList.add("sticky");
      logo.src = "assets/images/logo/logo.svg";
    } else {
      header_navbar.classList.remove("sticky");
      logo.src = "assets/images/logo/white-logo.svg";
    }

    // show or hide the back-top-top button
    var backToTo = document.querySelector(".scroll-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTo.style.display = "flex";
    } else {
      backToTo.style.display = "none";
    }
  };

  // WOW active
  new WOW().init();

  //===== mobile-menu-btn
  // let navbarToggler = document.querySelector(".mobile-menu-btn");
  // if (navbarToggler) {
  //   navbarToggler.addEventListener("onClick", function () {
  //     navbarToggler.classList.toggle("active");
  //   });
  // }

  // $(document).ready(function () {
  //   $(".list").click(function () {
  //     $(".menu").hide();
  //   });
  // });

  // const navbarToggler = document.querySelectorAll(".mobile-menu-btn");
  // navbarToggler.forEach((item) =>
  //   item.addEventListener("click", function () {
  //     this.classList.toggle("active");
  //   })
  // );
  //======= portfolio-btn active
  var elements = document.getElementsByClassName("portfolio-btn");
  for (var i = 0; i < elements.length; i++) {
    elements[i].onclick = function () {
      // remove class from sibling

      var el = elements[0];
      while (el) {
        if (el.tagName === "BUTTON") {
          //remove class
          el.classList.remove("active");
        }
        // pass to the new sibling
        el = el.nextSibling;
      }

      this.classList.add("active");
    };
  }
})();

// (function ($) {
//   "use strict";

//   $.fn.scrollingTo = function (opts) {
//     var defaults = {
//       animationTime: 1000,
//       easing: "",
//       callbackBeforeTransition: function () {},
//       callbackAfterTransition: function () {},
//     };

//     var config = $.extend({}, defaults, opts);

//     $(this).click(function (e) {
//       var eventVal = e;
//       e.preventDefault();

//       var $section = $(document).find($(this).data("section"));
//       if ($section.length < 1) {
//         return false;
//       }

//       if ($("html, body").is(":animated")) {
//         $("html, body").stop(true, true);
//       }

//       var scrollPos = $section.offset().top;

//       if ($(window).scrollTop() == scrollPos) {
//         return false;
//       }

//       config.callbackBeforeTransition(eventVal, $section);

//       $("html, body").animate(
//         {
//           scrollTop: scrollPos + "px",
//         },
//         config.animationTime,
//         config.easing,
//         function () {
//           config.callbackAfterTransition(eventVal, $section);
//         }
//       );
//     });
//   };

//   /* ========================================================================= */
//   /*   Contact Form Validating
//     /* ========================================================================= */

//   $("#contact-form").validate({
//     rules: {
//       name: {
//         required: true,
//         minlength: 4,
//       },
//       email: {
//         required: true,
//         email: true,
//       },
//       subject: {
//         required: false,
//       },
//       message: {
//         required: true,
//       },
//     },
//     messages: {
//       user_name: {
//         required: "Come on, you have a name don't you?",
//         minlength: "Your name must consist of at least 2 characters",
//       },
//       email: {
//         required: "Please put your email address",
//       },
//       message: {
//         required: "Put some messages here?",
//         minlength: "Your name must consist of at least 2 characters",
//       },
//     },
//     submitHandler: function (form) {
//       $(form).ajaxSubmit({
//         type: "POST",
//         data: $(form).serialize(),
//         url: "sendmail.php",
//         success: function () {
//           $("#contact-form #success").fadeIn();
//         },
//         error: function () {
//           $("#contact-form #error").fadeIn();
//         },
//       });
//     },
//   });
// })(jQuery);

// jQuery(document).ready(function () {
//   "use strict";
//   new WOW().init();

//   (function () {
//     jQuery(".smooth-scroll").scrollingTo();
//   })();
// });

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(window).scrollTop() > 50) {
//       $(".navbar-brand a").css("color", "#fff");
//       $(".top-bar").removeClass("animated-header");
//     } else {
//       $(".navbar-brand a").css("color", "inherit");
//       $(".top-bar").addClass("animated-header");
//     }
//   });

//   $(".clients-logo-slider").slick({
//     dots: false,
//     infinite: true,
//     speed: 300,
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   });
// });

// // fancybox
// $(".fancybox").fancybox({
//   padding: 0,

//   openEffect: "elastic",
//   openSpeed: 450,

//   closeEffect: "elastic",
//   closeSpeed: 350,

//   closeClick: true,
//   helpers: {
//     title: {
//       type: "inside",
//     },
//     overlay: {
//       css: {
//         background: "rgba(0,0,0,0.8)",
//       },
//     },
//   },
// });
