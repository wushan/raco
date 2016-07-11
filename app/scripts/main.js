//Browserify
//Require
//Expose Jquery Globally.
window.$ = window.jQuery = require('jquery');

const moment = require('./moment');
const pikaday = require('./pikaday');
const Handlebars = require('./handlebars');
const sticky = require('./jquery.sticky');

//Pikaday
var startDate = new Pikaday({ field: document.getElementById('startdate') });
var endDate = new Pikaday({ field: document.getElementById('enddate') });

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

// handlebars
var sourceSearchResultList = $('#searchresult-list').html();
var sourceSearchResultListTemplate = Handlebars.compile(sourceSearchResultList);
var sourceSearchResultItem = $('#searchresult-item').html();
var sourceSearchResultItemTemplate = Handlebars.compile(sourceSearchResultItem);


var demo = {
  'items': [
    {
      'index': '2',
      'productslug': 'AA',
      'producedate': 'xxx-xxx-xxx',
      'productline': 'LINE',
      'heatno': '000000',
      'trackno': '120248257',
      'amounttested': '4000',
      'amountpassed': '3539',
      'passedrate': '3.0%'
    },
    {
      'index': '2',
      'productslug': 'AA',
      'producedate': 'xxx-xxx-xxx',
      'productline': 'LINE',
      'heatno': '000000',
      'trackno': '120248257',
      'amounttested': '4000',
      'amountpassed': '3939',
      'passedrate': '1.0%'
    }
  ]
}

//SQM Searchform Control
$('#product-slug').on('change', function(){
  $('#product-slug-text').val($(this).val());
});

//
$('#sqm-searchform').on('submit', function(e){
  e.preventDefault();
  $.ajax({
    method: 'GET',
    url: '',
    data: $(this).serialize(),
    success: function(res) {
      //Print Results on the page
      $('#sqm-searchform').find('.results').html(sourceSearchResultListTemplate(demo));
      $('.data-tables.normal').DataTable({
        paging: true,
        'pagingType': 'full',
          rowReorder: {
          selector: 'td:first-child',
          dataSrc: 'td:first-child'
        },
        ordering: true
      });
    }
  }).fail(function(err){
    $('#results').html(err.status + ':' + err.responseText);
  })
});


//Get speicific item
$('#sqm-trackno-searchform').on('submit', function(e){
  e.preventDefault();
  $.ajax({
    method: 'GET',
    url: '',
    data: $(this).serialize(),
    success: function(res) {
      //Print Results on the page
      $('#sqm-trackno-searchform').find('.results').html(sourceSearchResultItemTemplate());
      //Trigger that chart
      ////////柏拉圖
var chartdata = {
      labels: ['NG1','NG2','NG3','NG4','NG5','NG6'],
      datasets: [{
          type: 'line',
          label: 'Acumulado',
          borderColor: '#BA1E14',
          backgroundColor: '#BA1E14',
          pointBorderWidth: 5,
          fill: false,
          data: [0.32,0.578064516, 0.771612903, 0.900645161, 0.96516129, 0.997419355],
          yAxisID: 'y-axis-2'
      },{
          type: 'bar',
          label: 'Asistencia',
          borderColor: '#0F4788',
          backgroundColor: '#0F4788',
          data: [50,40,30,20,10,5],
          yAxisID: 'y-axis-1'
      }]
  };

var options = {
    responsive : true,
    scales: {
        xAxes: [{
            stacked: true,
            scaleLabel: {
                display: true,
                labelString: 'paretochart'
            }
        }],

        yAxes: [{
            type: 'linear',
            position: 'left',
            id: 'y-axis-1',
            stacked: true,
            ticks: {
                suggestedMin: 0
            },
            scaleLabel: {
                display: true,
                labelString: 'Amount'
            }
        },{
            type: 'linear',
            position: 'right',
            id: 'y-axis-2',
            ticks: {
                suggestedMin: 0
            },
            scaleLabel: {
                display: true,
                labelString: 'something i dont know'
            }
        }]
    }
};

//統計圖
var chartdata2 = {
      labels: ['','','','','','','','','','','','',],
      datasets: [{
          type: 'bar',
          label: 'Asistencia',
          borderColor: '#0F4788',
          backgroundColor: '#0F4788',
          data: [0,0,0,10,11,14,20,12,5,0,0,0],
          yAxisID: 'y-axis-1'
      },{
          type: 'line',
          label: 'My First dataset',
          data: [{
              x: 0,
              y: 0
          },{
              x: 0,
              y: 0
          },{
              x: 0,
              y: 0
          }, {
              x: 0,
              y: 8
          }, {
              x: 0,
              y: 18
          },{
              x: 0,
              y: 25
          },{
              x: 0,
              y: 18
          },{
              x: 0,
              y: 8
          },{
              x: 0,
              y: 0
          },{
              x: 0,
              y: 0
          },{
              x: 0,
              y: 0
          },{
              x: 0,
              y: 0
          }],
          xAxisID: 'y-axis-2'
      }]

         // datasets
    }; //chartData

var options2 = {
      responsive: true,
      scales: {
        xAxes: [{
            position: 'bottom',
            stacked: true,
            id: 'y-axis-2',
            scaleLabel: {
                display: true,
                labelString: 'paretochart'
            },
            ticks: {
                suggestedMin: 0
            }
        }],

        yAxes: [{
            type: 'linear',
            position: 'left',
            id: 'y-axis-1',
            stacked: true,
            ticks: {
                suggestedMin: 0
            },
            scaleLabel: {
                display: true,
                labelString: 'Amount'
            }
        },{
            type: 'linear',
            position: 'right',
            
            ticks: {
                suggestedMin: 0
            },
            scaleLabel: {
                display: true,
                labelString: 'something i dont know'
            }
        }]
    }
}

var ctx = $('#paretochart').get(0).getContext('2d');
var ctx2 = $('#avgchart').get(0).getContext('2d');

renderChart(ctx,chartdata,options,'bar');
renderChart(ctx2,chartdata2,options2,'bar');
    }
  }).fail(function(err){
    $('#results').html(err.status + ':' + err.responseText);
  })
});

//Chart.js
function renderChart(ctx, data, options, type) {
  new Chart(ctx, {
      type: type,
      data: data,
      options: options
  });
}

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