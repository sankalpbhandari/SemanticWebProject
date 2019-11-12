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
      data: [21638956.92,375584823.6,233280504.7,4198239.62,457743214.3,3078701995,276983006.9,152070977.9,7507515,44433115.5,1357464772,9957846.14,759095145.5,13746230.04,56594405.18,166908447.4,88275357.17,567229582.3,431830962.1,185862109.7,277745605,343659286.5,293856280.5,317566041.9,68781544,5221895,588521849.5,276891684.2,299938896.5,4339353.12,312548658.8,55856592.07,692257720.6,37304778.5,103481739.5,42323095.66,494453888,160825597.6,123861953.3,1284555040,571430667.5,252416177.3,246618385.1,466766794.1,198239929.1,2073838,56828809.18,290741460.1,47010296.83,379853035.2,1970358909,229026882.9,411653418.4,4441778.03,24107242.49,362965388.5,277558342.1,118330145.7,26910549.72],
      backgroundColor: '#ED553B' // green
    },
    {
      label: 'Private',
      data: [954422.68,49499821.44,29584515.68,0,6902513.15,269666119.8,27136042.12,55352524.74,42267524.46,17398252,409219476.9,0,93314571.56,302713,11546844,62786946.6,80486409.12,202314879,100860965.3,33262292.6,56586504.37,26699237.6,175565509.9,28548101.55,16788768.53,0,100439289,61591660.28,131432944.8,0,25826903.53,4754100.95,118277111.2,7458475.64,29450329.02,119010587,90248018.42,1749779,2429840.43,490128877.7,150568103.3,32436990.67,27893785.88,298540628.6,399195639,0,50698606.39,71526724.61,6709946.74,101046336.6,188854057.5,261252036,170278300.6,0,16010379.57,38698453.89,77546475.95,12834119.15,0],
      backgroundColor: '#3CAEA3' // yellow
    },
    {
      label: 'Proprietery',
      data: [1318978,92714430.14,9979398.96,0,491100825.9,564238708.7,135331183.1,73903172.56,107131522.8,3434831.16,254447285.9,0,79432311.52,0,3386017.47,13468074,8513210.99,218179388.3,54306798.3,30711253.84,39058918.17,54015196.24,11559740.19,35867925.68,8471552.96,0,58492699.8,88841489.38,43658211.91,0,3902284.94,1698667,19327361.67,1165976.89,3217981.22,2207460.8,77997247.24,6250207.91,26389907.62,227282090,79642377.62,49395342.18,21323587.62,116840773.3,218439123.3,0,4949179.6,9891027.79,20534237.06,61304196.68,204967865.2,21630094.91,99835357,0,726708.45,28928107.82,5551598.15,67277999.76,2618652],
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
          max: 4000000000,
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



