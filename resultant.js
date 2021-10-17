google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Task', 'Hours per Day'],
        ['Work',     11],
        ['Eat',      2],
        ['Commute',  2],
        ['Watch TV', 2],
        ['Sleep',    7]
    ]);
    var options = {
        titleTextStyle: {fontSize : 16},
        title: 'My Daily Activities (Investment)',
        is3D: true,
    };
    var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
    var chart1 = new google.visualization.PieChart(document.getElementById('piechart_3d1'));
    chart.draw(data, options);
    chart1.draw(data, options);
}

google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
function drawStuff() {
    var data = new google.visualization.arrayToDataTable([
      ['Galaxy', 'Distance', 'Brightness'],
      ['Canis Major Dwarf', 8000, 23.3],
      ['Sagittarius Dwarf', 24000, 4.5],
      ['Ursa Major II Dwarf', 30000, 14.3],
      ['Lg. Magellanic Cloud', 50000, 0.9],
      ['Bootes I', 60000, 13.1]
    ]);

    var options = {
      chart: {
        title: 'Nearby galaxies',
        subtitle: 'distance on the left, brightness on the right'
      },
      bars: 'horizontal', // Required for Material Bar Charts.
      series: {
        0: { axis: 'distance' }, // Bind series 0 to an axis named 'distance'.
        1: { axis: 'brightness' } // Bind series 1 to an axis named 'brightness'.
      },
      axes: {
        x: {
          distance: {label: 'parsecs'}, // Bottom x-axis.
          brightness: {side: 'top', label: 'apparent magnitude'} // Top x-axis.
        }
      }
    };

  var chart = new google.charts.Bar(document.getElementById('chart_div'));
  chart.draw(data, options);
};

$(window).resize(function(){
    drawChart();
    drawStuff();
  });