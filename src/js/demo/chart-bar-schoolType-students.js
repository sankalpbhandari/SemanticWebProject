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
      data: [6272,91260,57608,943,124950,770582,76779,42558,2085,12222,350785,2328,193238,3424,14828,43938,23452,152222,117156,49229,72674,85389,79326,90818,17974,1222,157359,77141,78896,1010,71445,14222,175902,9583,28398,11769,122947,43073,34559,307654,155283,65893,67952,122931,40940,523,15529,74957,11993,95938,499565,57707,108330,1028,6838,93984,76613,28588,7033],
      backgroundColor: '#ED553B' // green
    },
    {
      label: 'Private',
      data: [228,11110,6921,0,1472,64116,7091,13676,9226,4644,90030,0,21403,53,2690,15485,18169,48334,25166,8398,13073,6191,40560,6504,3994,0,26787,15356,34633,0,6056,1168,26738,1821,7454,48576,19452,398,568,108555,36885,7857,6770,70530,89338,0,12145,16386,1728,23442,44512,64576,43489,0,3818,9309,19811,3038],
      backgroundColor: '#3CAEA3' // yellow
    },
    {
      label: 'Proprietery',
      data: [374,26850,2555,0,125019,138437,35164,22750,29399,881,61190,0,20509,0,796,3240,2002,58882,14234,7579,10900,14519,3136,10365,2392,0,15836,28917,10533,0,1014,351,5285,256,711,598,20310,1723,7255,52397,20524,12168,5554,30044,53242,0,1483,2631,6496,15164,51305,5631,23420,0,178,7161,1358,19672,678],
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
          min: 0,
          max: 1000000,
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



