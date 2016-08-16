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


//Intro Slider
$('.intro-slider').slick({
    adaptiveHeight: true
  });

var data = {
    "greeting": true,
    "items": [
      {"id": "1"},
      {"id": "2"},
      {"id": "3"},
      {"id": "4"},
      {"id": "5"},
      {"id": "6"},
      {"id": "7"},
      {"id": "8"},
      {"id": "9"},
      {"id": "10"},
      {"id": "11"},
      {"id": "12"},
      {"id": "13"},
      {"id": "14"},
      {"id": "15"},
      {"id": "16"},
      {"id": "17"},
      {"id": "18"},
      {"id": "19"},
      {"id": "20"},
      {"id": "21"}
    ]
  }
  var data2 = {
    "items": [
      {"id": "31"},
      {"id": "223"},
      {"id": "33"},
      {"id": "4we"},
      {"id": "5"},
      {"id": "6"},
      {"id": "7"},
      {"id": "8"},
      {"id": "9"},
      {"id": "10"},
      {"id": "11"},
      {"id": "12"},
      {"id": "13"},
      {"id": "14"},
      {"id": "15"},
      {"id": "16"},
      {"id": "17"},
      {"id": "18"},
      {"id": "19"},
      {"id": "20"},
      {"id": "21joke"}
    ]
  }
  var example1 = new Vue({
    el: '#example-1',
    data: data
  });
  $('#modify').on('click', function(){
    example1.items = data2.items;
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