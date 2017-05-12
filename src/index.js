/**
 * Created by sriram on 30/4/17.
 */
import {createChart} from './chart';
import {addSuite, addSuiteWithRedraw} from './bench-suites';

const chart = createChart();
const withoutRedrawSuite = addSuite(chart, $('#results'));
withoutRedrawSuite.on('complete', function() {
    addSuiteWithRedraw(chart, $('#results'));
});

