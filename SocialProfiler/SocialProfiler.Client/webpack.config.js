var webpack = require('webpack');



module.exports = {
    context: __dirname + '/app',
    entry: {
        app: './app.js',
        vendor: ['angular','angular-bootstrap/ui-bootstrap-tpls.min']
    },
    output: {
      //  path: __dirname + '/js',
        filename: 'app.bundle.js'
    },
    watch: true,
    resolve: {
        alias: {
            'spin': 'spin.js/spin'
        }
    },
    //externals: {
    //    angular: 'angular'
    //},
    plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
    ]
};