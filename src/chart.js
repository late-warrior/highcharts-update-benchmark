import Highcharts from 'highcharts/highstock';

/**
 * Generates a random array of size n with numbers
 */
export function generateArray(n=300) {
    let randArr = [];
    for (let i=0; i<n; i++) {
        randArr.push(Math.random() * 50);
    }
    return randArr;
}

export function createChart() {
    const chart = Highcharts.chart('container', {
        chart: {
            zoomType: 'x'
        },
        series: [{
            id: 'ser1',
            data: generateArray(),
            name: 'series-1'
        }],
        // ... more options - see http://api.highcharts.com/highcharts
    });
    return chart;
}

export function updateChart(chart, redraw) {
    const newData = generateArray();
    chart.update({
        series: [{
            id: 'ser1',
            data: newData
        }]
    }, redraw);
}

export function updateSeriesData(chart, redraw) {
    // Retrieve first series
    const series = chart.get('ser1');
    series.setData(generateArray(), redraw);
}

