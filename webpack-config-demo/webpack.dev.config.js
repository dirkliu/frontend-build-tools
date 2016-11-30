var _ = require('lodash');
var scripts = require('./scripts')
var baseConfig = require('./base.config')
var path = require('path');
var webpack = require('webpack');


var config = _.merge(baseConfig, {
    entry: _.merge({
        bundle: './uyun/src/main.jsx'
    },
        scripts.chunks),
    output: {
        path: path.resolve(__dirname, '../uyun/web/build'),
        publicPath: 'build/',
        filename: '[name].js',
        chunkFilename: 'chunk.[id].js',
        pathinfo: true
    },
    devServer: {
        contentBase: './uyun/web',
        devtool: 'eval',
        port: 8090,
        hot: true,
        inline: true
    },
    devtool: 'eval'

});

module.exports = config ;