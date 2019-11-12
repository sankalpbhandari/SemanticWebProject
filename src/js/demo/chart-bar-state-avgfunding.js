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

  fillData();
});

function fillData(){


// Bar Chart Example
var ctx = document.getElementById("myBarChart");
var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['AK','AL','AR','AS','AZ','CA','CO','CT','DC','DE','FL','FM','GA','GU','HI','IA','ID','IL','IN','KS','KY','LA','MA','MD','ME','MH','MI','MN','MO','MP','MS','MT','NC','ND','NE','NH','NJ','NM','NV','NY','OH','OK','OR','PA','PR','PW','RI','SC','SD','TN','TX','UT','VA','VI','VT','WA','WI','WV','WY'],
    datasets: [ {
      label: 'Average Funding',
      data: [3478.667093,4007.112484,4067.205583,4452.003839,3801.076807,4020.620801,3691.804292,3561.818535,3854.251099,3677.590503,4026.118335,4277.425318,3962.755809,4040.535818,3905.605911,3880.495157,4063.7961,3807.167221,3749.448924,3831.482626,3863.451815,3999.790011,3909.719648,3547.15118,3860.503509,4273.236498,3737.605576,3519.568039,3828.973039,4296.389228,4359.394348,3958.411792,3991.161205,3939.042112,3723.711122,2683.509894,4072.910249,3735.575176,3602.512891,4272.173228,3769.02351,3890.319958,3685.232929,3946.883497,4445.69906,3965.273423,3857.618931,3960.235943,3672.873356,4029.934954,3970.863801,4001.977999,3890.498553,4320.795749,3770.013892,3898.382587,3688.372259,3868.421081,3829.490562],
      backgroundColor: 'green' // green
    },
   ],
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
        stacked:true,
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
        stacked:true,
        ticks: {
          min: 2000,
          max: 5000,
          maxTicksLimit: 100,
          padding: 20,
          // Include a dollar sign in the ticks
          callback: function(value, index, values) {
            return value;
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
      display: true
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
          return datasetLabel +' ' + tooltipItem.yLabel ;
        }
      }
    },
  }
});
}

function processData(allText) {
  var obj = JSON.parse(allText);
  console.log(obj);
  var record_num = 2;  // or however many elements there are in each row
 // var allTextLines = allText.split(/\r\n|\n/);
 // var entries = allTextLines[0].split(',');
  // var lines = [];
  // lines = allText.results.bindings;
  // console.log(lines.length);
 
  // for(i=0;i<lines.length;i++){
  //   statenames[i] = lines[i]["name"]["value"];
  //   values[i] = lines[i]["literacyrate"]["value"];
  // }
}



