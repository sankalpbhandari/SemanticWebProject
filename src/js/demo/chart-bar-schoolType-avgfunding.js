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
      label: 'Public',
      data: [3450.088795,4115.547048,4049.446338,4452.003839,3663.411079,3995.29446,3607.536005,3573.264202,3600.726619,3635.502823,3869.791387,4277.425318,3928.291255,4014.669988,3816.725464,3798.726556,3764.086524,3726.331163,3685.948326,3775.459784,3821.801538,4024.63182,3704.413187,3496.730185,3826.72438,4273.236498,3739.994849,3589.423059,3801.699661,4296.389228,4374.675048,3927.477997,3935.473847,3892.807941,3643.979841,3596.150536,4021.68323,3733.791415,3584.072263,4175.323708,3679.930627,3830.697908,3629.302819,3796.981999,4842.206376,3965.273423,3659.527927,3878.776633,3919.811292,3959.359536,3944.149227,3968.788586,3799.994631,4320.795749,3525.481499,3861.99128,3622.862205,4139.154389,3826.325852],
      backgroundColor: '#ED553B' // green
    },
    {
      label: 'Private',
      data: [4186.064386,4455.429473,4274.601312,0,4689.207303,4205.90991,3826.828673,4047.420645,4581.348847,3746.393626,4545.367954,0,4359.8828,5711.566038,4292.507063,4054.694646,4429.875564,4185.767349,4007.826644,3960.739771,4328.501826,4312.588855,4328.538212,4389.314506,4203.497379,0,3749.553478,4010.918226,3795.020495,0,4264.680239,4070.291909,4423.55865,4095.813092,3950.942986,2449.98738,4639.523875,4396.429648,4277.888081,4515.028122,4082.095793,4128.419329,4120.204709,4232.817646,4468.374476,0,4174.442683,4365.111962,3883.07103,4310.482747,4242.767288,4045.652192,3915.433801,0,4193.394335,4157.101073,3914.314065,4224.529016,0],
      backgroundColor: '#3CAEA3' // yellow
    },
    {
      label: 'Proprietery',
      data: [3526.679144,3453.051402,3905.831295,0,3928.20952,4075.77966,3848.571923,3248.491102,3644.053294,3898.786788,4158.314854,0,3873.046542,0,4253.790791,4156.812963,4252.353142,3705.366467,3815.287221,4052.151186,3583.386988,3720.311057,3686.141642,3460.48487,3541.61913,0,3693.653688,3072.292748,4144.898121,0,3848.407239,4839.507123,3657.022076,4554.597227,4525.993277,3691.40602,3840.337136,3627.514748,3637.478652,4337.692806,3880.451063,4059.446267,3839.320781,3888.988594,4102.759537,0,3337.275523,3759.417632,3161.058661,4042.745758,3995.08557,3841.25287,4262.824808,0,4082.631742,4039.674322,4088.06933,3419.987788,3862.318584],
      backgroundColor: '#20639B' // red
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
          min: 0,
          max: 6000,
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



