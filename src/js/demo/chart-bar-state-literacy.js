// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function(n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

var statenames = [];
var values = [];
$(document).ready(function() {

  $.ajax({
    url:"http://192.168.0.10:8890/sparql?query=select%20?name%20?literacyrate%20where%20{%20?s%20%3Chttp://www.krishna-arjun.org/literacyrate%3E%20?literacyrate%20.%20?s%20%3Chttp://www.krishna-arjun.org/abbr%3E%20?abbr%20.%20?s%20%3Chttp://www.krishna-arjun.org/name%3E%20?name%20.%20}&format=json",
    dataType: 'jsonp', // Notice! JSONP <-- P (lowercase)
    success:function(data){
        processData(data);
        fillData();
    },
    error:function(){
        alert("sdgdgError");
    }      
});
});

function fillData(){


// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: statenames,
    datasets: [{
      label: "Literacy Rate",
      backgroundColor: "#4e73df",
      hoverBackgroundColor: "#2e59d9",
      borderColor: "#4e73df",
      data: values,
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'month'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 100
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        ticks: {
          min: 50,
          max: 100,
          maxTicksLimit: 100,
          padding: 20,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return value+'%';
          }
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: false
    },
    tooltips: {
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
      callbacks: {
        label: function(tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel +' ' + tooltipItem.yLabel + ' %';
        }
      }
    },
  }
});
}

function processData(allText) {
  var record_num = 2;  // or however many elements there are in each row
 // var allTextLines = allText.split(/\r\n|\n/);
 // var entries = allTextLines[0].split(',');
  var lines = [];
  lines = allText.results.bindings;
  console.log(lines.length);
 
  for(i=0;i<lines.length;i++){
    statenames[i] = lines[i]["name"]["value"];
    values[i] = lines[i]["literacyrate"]["value"];
  }
}



