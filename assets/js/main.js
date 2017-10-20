// import {forms} from '/js/forms.js';

// particles-js
particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});


// Menu

$('.ui.dropdown')
  .dropdown()
;

// Animations






//
// (function($) {
//   "use strict"; // Start of use strict
//
//   // Smooth scrolling using jQuery easing
//   $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       if (target.length) {
//         $('html, body').animate({
//           scrollTop: (target.offset().top - 54)
//         }, 1000, "easeInOutExpo");
//         return false;
//       }
//     }
//   });
//
//   // Closes responsive menu when a scroll trigger link is clicked
//   $('.js-scroll-trigger').click(function() {
//     $('.navbar-collapse').collapse('hide');
//   });
//
//   // Activate scrollspy to add active class to navbar items on scroll
//   $('body').scrollspy({
//     target: '#mainNav',
//     offset: 54
//   });
//
//   // Collapse the navbar when page is scrolled
//   $(window).scroll(function() {
//     if ($("#mainNav").offset().top > 100) {
//       $("#mainNav").addClass("navbar-shrink");
//     } else {
//       $("#mainNav").removeClass("navbar-shrink");
//     }
//   });
//
// })(jQuery);




$(document)
  .ready(function() {

    // // fix menu when passed
    // $('.masthead')
    //   .visibility({
    //     once: false,
    //     onBottomPassed: function() {
    //       $('.fixed.menu').transition('fade in');
    //     },
    //     onBottomPassedReverse: function() {
    //       $('.fixed.menu').transition('fade out');
    //     }
    //   })
    // ;

    // create sidebar and attach to menu open
    $('.ui.sidebar')
      .sidebar('attach events', '.toc.item')
    ;

  })
;



// forms
$('.ui.form')
  .form({
    fields: {
      name     : {
        identifier: 'name',
        rules: [
          {
            type   : 'empty',
            prompt : 'Please enter your name'
          }
        ]
      },
      mail     : 'empty',
      message    : 'empty'
    }
  });










  $('.ui.form')
    .form({
      fields: {
        field1: {
          rules: [
            {
              type   : 'empty'
            }
          ]
        },
        field2: {
          rules: [
            {
              type   : 'exactly[dog]',
              prompt : '{name} is set to "{value}" that is totally wrong. It should be {ruleValue}'
            }
          ]
        }
      }
    })
  ;
