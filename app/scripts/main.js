//Browserify
//Require
//Expose Jquery Globally.
window.$ = window.jQuery = require('jquery');

// const moment = require('./moment');
// const pikaday = require('./pikaday');
const slick = require('./slick');
const sticky = require('./jquery.sticky');
const Vue = require('./vue');



//Main Nav Sticker
$(document).ready(function(){
  $('.sticker').sticky({
    topSpacing:0,
    getWidthFrom: '#wrapper',
    widthFromWrapper: true,
    responsiveWidth: true,
    zIndex: 99
  });
  $(window).resize(function(){
    $('.sticker').sticky('update');
  });
});

//Navigation
$('#mobileMenu-trigger').on('click', function(){
  $('#floatmenu').toggleClass('active');
});


//Intro Slider
$('.intro-slider').slick({
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    easing: 'ease-out'
});

$('.learn-more').on('click', function(){
  $('html,body').animate({
    scrollTop: $('#product-category').offset().top - $('#sticky-wrapper').outerHeight()
  })
});

//Smooth Scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-40
        }, 1000);
        return false;
      }
    }
  });
});


//TypeKit
(function(d) {
    var config = {
      kitId: 'sfo2ore',
      scriptTimeout: 3000,
      async: true
    },
    h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
  })(document);