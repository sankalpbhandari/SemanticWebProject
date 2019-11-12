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
          x: 86.74,
          y: 3478.667093
        },
        {
          x: 80.62,
          y: 4007.112484
        },
        {
          x: 82.81,
          y: 4067.205583
        },
        {
          x: 81.91,
          y: 3801.076807
        },
        {
          x: 73.84,
          y: 4020.620801
        },
        {
          x: 87.08,
          y: 3691.804292
        },
        {
          x: 87.46,
          y: 3561.818535
        },
        {
          x: 66.91,
          y: 3854.251099
        },
        {
          x: 83.59,
          y: 3677.590503
        },
        {
          x: 77.06,
          y: 4026.118335
        },
        {
          x: 79.26,
          y: 3962.755809
        },
        {
          x: 77.79,
          y: 3905.605911
        },
        {
          x: 89.9,
          y: 3880.495157
        },
        {
          x: 86.24,
          y: 4063.7961
        },
        {
          x: 83.39,
          y: 3807.167221
        },
        {
          x: 89.72,
          y: 3749.448924
        },
        {
          x: 89.84,
          y: 3831.482626
        },
        {
          x: 85.66,
          y: 3863.451815
        },
        {
          x: 79.71,
          y: 3999.790011
        },
        {
          x: 87.95,
          y: 3909.719648
        },
        {
          x: 86.28,
          y: 3547.15118
        },
        {
          x: 89.79,
          y: 3860.503509
        },
        {
          x: 88.96,
          y: 3737.605576
        },
        {
          x: 92.03,
          y: 3519.568039
        },
        {
          x: 90.82,
          y: 3828.973039
        },
        {
          x: 79.17,
          y: 4359.394348
        },
        {
          x: 87.82,
          y: 3958.411792
        },
        {
          x: 83.55,
          y: 3991.161205
        },
        {
          x: 90.98,
          y: 3939.042112
        },
        {
          x: 90.29,
          y: 3723.711122
        },
        {
          x: 91.82,
          y: 2683.509894
        },
        {
          x: 79.16,
          y: 4072.910249
        },
        {
          x: 78.42,
          y: 3735.575176
        },
        {
          x: 74.74,
          y: 3602.512891
        },
        {
          x: 74.99,
          y: 4272.173228
        },
        {
          x: 88.05,
          y: 3769.02351
        },
        {
          x: 85.47,
          y: 3890.319958
        },
        {
          x: 86.12,
          y: 3685.232929
        },
        {
          x: 84.49,
          y: 3946.883497
        },
        {
          x: 86.06,
          y: 3857.618931
        },
        {
          x: 81.55,
          y: 3960.235943
        },
        {
          x: 90.25,
          y: 3672.873356
        },
        {
          x: 83.45,
          y: 4029.934954
        },
        {
          x: 77.93,
          y: 3970.863801
        },
        {
          x: 86.13,
          y: 4001.977999
        },
        {
          x: 85.18,
          y: 3890.498553
        },
        {
          x: 90.63,
          y: 3770.013892
        },
        {
          x: 87.18,
          y: 3898.382587
        },
        {
          x: 90.1,
          y: 3688.372259
        },
        {
          x: 87.77,
          y: 3829.490562
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
          display: false,
          drawBorder: false
        },
        ticks: {
          min:65,
          max:100,
          maxTicksLimit: 100
        },
        maxBarThickness: 25,
      }],
      yAxes: [{
        stacked:true,
        ticks: {
          min: 2500,
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
        label: function(tooltipItem, data) {
           var label = data.labels[tooltipItem.index];
           return label + ': \nLiteracy Rate: (' + tooltipItem.xLabel + ') \nAvg Funding: (' + tooltipItem.yLabel + ')';
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



