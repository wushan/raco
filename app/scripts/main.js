//Browserify
//Require
//Expose Jquery Globally.
window.$ = window.jQuery = require('jquery');

const slick = require('./slick');
const sticky = require('./jquery.sticky');
const slidebars = require('./slidebars.min');
const vide = require('./jquery.vide.min');
const tinyMap = require('./jquery.tinyMap.min');


//Sticky //Usage: https://github.com/garand/sticky
$(document).ready(function(){
  $('#navigation').sticky({
    topSpacing:0,
    getWidthFrom: '#wrapper',
    widthFromWrapper: true,
    responsiveWidth: true,
    zIndex: 99
  });
});

//Slidebars
$.slidebars();

//Slick
$('.intro-slider').slick({
	autoplay: true,
	autoplaySpeed: 4000,
	fade: true
});

//Map
//Map
$('#map').tinyMap({
    'center': ['24.1770491','120.7112015'],
    'zoom': 16,
    'scrollwheel': false,
    'marker': [
        {
            'addr': ['24.1770491','120.7112015'],
            'text': '<h2 style="margin: 0; text-align: center;">中中親子樂園</h2><ul style="margin:0;padding:0;list-style-type: none;"><li><b>地址：</b>台中市北屯區松竹五路 172 號</li><li><b>預約電話：</b>(04)2437-1266</li><li><b>營業時間：</b>10:00~20:00 ( 週一公休 )</li></ul>',
            'newLabel': '中中親子樂園',
            'newLabelCSS': 'labels',
            // 自訂外部圖示
            'icon': {
                'url': 'images/components/map-pointer.png',
                'scaledSize': [40, 48]
            },
            // 動畫效果
            'animation': 'DROP'
        }
    ],
    'styles': [
      {
          'featureType': 'administrative',
          'elementType': 'labels.text.fill',
          'stylers': [
              {
                  'color': '#444444'
              }
          ]
      },
      {
          'featureType': 'administrative.country',
          'elementType': 'geometry.fill',
          'stylers': [
              {
                  'visibility': 'on'
              }
          ]
      },
      {
          'featureType': 'landscape',
          'elementType': 'all',
          'stylers': [
              {
                  'color': '#f2f2f2'
              }
          ]
      },
      {
          'featureType': 'poi',
          'elementType': 'all',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'road',
          'elementType': 'all',
          'stylers': [
              {
                  'saturation': -100
              },
              {
                  'lightness': 45
              }
          ]
      },
      {
          'featureType': 'road.highway',
          'elementType': 'all',
          'stylers': [
              {
                  'visibility': 'simplified'
              }
          ]
      },
      {
          'featureType': 'road.arterial',
          'elementType': 'labels.icon',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'transit',
          'elementType': 'all',
          'stylers': [
              {
                  'visibility': 'off'
              }
          ]
      },
      {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
              {
                  'color': '#4694ec'
              },
              {
                  'visibility': 'on'
              }
          ]
      }
  ]
});

//Instagram
var url = 'https://api.instagram.com/v1/tags/middlemiddlekids/media/recent?client_secret=fba9a00c391e493bba5080845f58f249&client_id=1ef4bf16979c442a8674cb1b58f79bca';

$.ajax({
    url: url,
    type: 'POST',
    crossDomain: true,
    dataType: 'jsonp'
}).done(function (data) {
    // console.log(data);
    listInstagram(data);
});

function listInstagram(data) {
  // var image = data.
  var query = data;
  var imageBlock;
  // console.log(query);
  // console.log(query.data[0].images.standard_resolution.url);
  for (var i = 0; i <= 9; i++) {
    // console.log(query.data[i].images.standard_resolution.url);
    imageBlock = '<div class=\'block\'><a href=\'https://www.instagram.com/middlemiddlekids\' target=\'_blank\'><img class=\'lazyload\' src=\'' + query.data[i].images.low_resolution.url + '\' data-src=\'' + query.data[i].images.standard_resolution.url + '\'></a></div>'
    $('#instagram .row').append(imageBlock);
  };
};

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

//Typekit Fonts
(function(d) {
	var config = {
	  kitId: 'vyk4abu',
	  scriptTimeout: 3000,
	  async: false
	},
	h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,'')+' wf-inactive';},config.scriptTimeout),tk=d.createElement('script'),f=false,s=d.getElementsByTagName('script')[0],a;h.className+=' wf-loading';tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!='complete'&&a!='loaded')return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);