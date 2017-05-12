/**
 * Created by sriram on 30/4/17.
 */

import Benchmark from 'benchmark';
import {updateChart, updateSeriesData} from './chart';

export function addSuite(chart, resultContainer) {
    const suite = new Benchmark.Suite();
    resultContainer.append('<h3> Setting redraw=false </h3>');
    suite
        .add('chart.update', function() {
            // call to chart.update API
            updateChart(chart, false);
        })
        .add('chart.series.setData', function() {
            updateSeriesData(chart, false);
        })
        // add listeners
        .on('cycle', function(event) {
            chart.redraw();
            resultContainer.append('<br><span>' + String(event.target) + '</span>');
        })
        .on('complete', function() {
            const msg = 'Fastest is ' + this.filter('fastest').map('name');
            resultContainer.append('<br><span>' + msg +  '</span>');
        })
        // run async
        .run({ 'async': true });
    return suite;
}


export function addSuiteWithRedraw(chart, resultContainer) {
    resultContainer.append('<br> <h3> Setting redraw=true </h3>');
    const suite = new Benchmark.Suite();
    suite
        .add('chart.update with redraw=true', function() {
            // call to chart.update API
            updateChart(chart, true);
        })
        .add('chart.series.setData with redraw=true', function() {
            updateSeriesData(chart, true);
        })
        // add listeners
        .on('cycle', function(event) {
            chart.redraw();
            resultContainer.append('<br><span>' + String(event.target) + '</span>');
        })
        .on('complete', function() {
            const msg = 'Fastest is ' + this.filter('fastest').map('name');
            resultContainer.append('<br><span>' + msg +  '</span>');
        })
        // run async
        .run({ 'async': true });
    return suite;
}