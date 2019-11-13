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
  type: 'scatter',
  data: {
    
   labels: ['Alaska','Alabama','Arkansas','Arizona','California','Colorado','Connecticut','DistrictofColumbia','Delaware','Florida','Georgia','Hawaii','Iowa','Idaho','Illinois','Indiana','Kansas','Kentucky','Louisiana','Massachusetts','Maryland','Maine','Michigan','Minnesota','Missouri','Mississippi','Montana','NorthCarolina','NorthDakota','Nebraska','NewHampshire','NewJersey','NewMexico','Nevada','NewYork','Ohio','Oklahoma','Oregon','Pennsylvania','RhodeIsland','SouthCarolina','SouthDakota','Tennessee','Texas','Utah','Virginia','Vermont','Washington','Wisconsin','Wyoming'],
  
    datasets: [{
      backgroundColor: "rgb(255,99,132)", // green
       label: 'States',
       data: [
        {
          "x": 3478.667093,
          "y": 86.74
        },
        {
          "x": 4007.112484,
          "y": 80.62
        },
        {
          "x": 4067.205583,
          "y": 82.81
        },
        {
          "x": 3801.076807,
          "y": 81.91
        },
        {
          "x": 4020.620801,
          "y": 73.84
        },
        {
          "x": 3691.804292,
          "y": 87.08
        },
        {
          "x": 3561.818535,
          "y": 87.46
        },
        {
          "x": 3854.251099,
          "y": 66.91
        },
        {
          "x": 3677.590503,
          "y": 83.59
        },
        {
          "x": 4026.118335,
          "y": 77.06
        },
        {
          "x": 3962.755809,
          "y": 79.26
        },
        {
          "x": 3905.605911,
          "y": 77.79
        },
        {
          "x": 3880.495157,
          "y": 89.9
        },
        {
          "x": 4063.7961,
          "y": 86.24
        },
        {
          "x": 3807.167221,
          "y": 83.39
        },
        {
          "x": 3749.448924,
          "y": 89.72
        },
        {
          "x": 3831.482626,
          "y": 89.84
        },
        {
          "x": 3863.451815,
          "y": 85.66
        },
        {
          "x": 3999.790011,
          "y": 79.71
        },
        {
          "x": 3909.719648,
          "y": 87.95
        },
        {
          "x": 3547.15118,
          "y": 86.28
        },
        {
          "x": 3860.503509,
          "y": 89.79
        },
        {
          "x": 3737.605576,
          "y": 88.96
        },
        {
          "x": 3519.568039,
          "y": 92.03
        },
        {
          "x": 3828.973039,
          "y": 90.82
        },
        {
          "x": 4359.394348,
          "y": 79.17
        },
        {
          "x": 3958.411792,
          "y": 87.82
        },
        {
          "x": 3991.161205,
          "y": 83.55
        },
        {
          "x": 3939.042112,
          "y": 90.98
        },
        {
          "x": 3723.711122,
          "y": 90.29
        },
        {
          "x": 2683.509894,
          "y": 91.82
        },
        {
          "x": 4072.910249,
          "y": 79.16
        },
        {
          "x": 3735.575176,
          "y": 78.42
        },
        {
          "x": 3602.512891,
          "y": 74.74
        },
        {
          "x": 4272.173228,
          "y": 74.99
        },
        {
          "x": 3769.02351,
          "y": 88.05
        },
        {
          "x": 3890.319958,
          "y": 85.47
        },
        {
          "x": 3685.232929,
          "y": 86.12
        },
        {
          "x": 3946.883497,
          "y": 84.49
        },
        {
          "x": 3857.618931,
          "y": 86.06
        },
        {
          "x": 3960.235943,
          "y": 81.55
        },
        {
          "x": 3672.873356,
          "y": 90.25
        },
        {
          "x": 4029.934954,
          "y": 83.45
        },
        {
          "x": 3970.863801,
          "y": 77.93
        },
        {
          "x": 4001.977999,
          "y": 86.13
        },
        {
          "x": 3890.498553,
          "y": 85.18
        },
        {
          "x": 3770.013892,
          "y": 90.63
        },
        {
          "x": 3898.382587,
          "y": 87.18
        },
        {
          "x": 3688.372259,
          "y": 90.1
        },
        {
          "x": 3829.490562,
          "y": 87.77
        }
      ]
    }]
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
          displax: false,
          drawBorder: false
        },
        ticks: {
          min:2500,
          max:5000,
          maxTicksLimit: 100
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        stacked:true,
        ticks: {
          min: 65,
          max: 100,
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
      displax: true
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
        label: function(tooltipItem, data) {
           var label = data.labels[tooltipItem.index];
           return label + ': \nLiteracy Rate: (' + tooltipItem.yLabel + ') \nAvg Funding: (' + tooltipItem.xLabel + ')';
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



