## Updating data in Highcharts - a comparison

Some tests to compare the [chart.update](http://api.highcharts.com/highcharts/Chart.update) API with the [series.setData](http://api.highcharts.com/highcharts/Series.update) API

## Why

Building a React wrapper over Highcharts requires us to know the most efficient way to update data on a chart

## Running

1. Clone this repo 
2. Make sure you have the amazing build tool ``nwb`` installed globally (``npm i -g nwb``)
3. Run ``npm run serve`` 

## Results

* With animations off, chart.update outperforms setData
* With animations on, setData wins

## Sample run 

This was run on a Pentium Core i5-6200U CPU @ 2.30GHz × 4, 8G machine

```
Setting redraw=false


chart.update x 1,601 ops/sec ±3.65% (54 runs sampled)
chart.series.setData x 1,139 ops/sec ±2.45% (56 runs sampled)
Fastest is chart.update

Setting redraw=true


chart.update with redraw=true x 76.30 ops/sec ±3.59% (49 runs sampled)
chart.series.setData with redraw=true x 253 ops/sec ±2.39% (56 runs sampled)
Fastest is chart.series.setData with redraw=true 
```

