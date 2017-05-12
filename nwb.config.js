module.exports = {
    type: 'web-app',
    webpack: {
        define: {
            __VERSION__: JSON.stringify(require('./package.json').version)
        },
        html: {
            template: 'src/benchmark.html'
        },
        extra: {
            externals:{
                'benchmark': 'Benchmark'
            }
        }
    }
}