var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ConstantsReplacePlugin=require('./constants-replace-plugin');

module.exports = {
    entry: {
        'index': ['./src/a.js', './src/b.js', './src/common.js'],
        'article': './src/article.js',
        'vendor': ['./src/common.js']
    },
    output: {
        path: './dist',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },

    module: {
        loaders: [
            /*{
                test: /\.html$/,
                loader: 'raw'
            }, */{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "resolve-url", "sass"]
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url!resolve-url!img?progressive=true'
            }]
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            title: 'Index page',
            favicon: './favicon.ico',
            chunks: ['vendor', 'index']
        }),
        new HtmlWebpackPlugin({
            filename: 'article.html',
            template: './article.html',
            title: 'Article page',
            favicon: './favicon.ico',
            chunks: ['vendor', 'article']
        }),
        /*new webpack.optimize.UglifyJsPlugin({
         compress: {
         warnings: false,
         },
         output: {
         comments: false,
         }
         }),*/
        new ConstantsReplacePlugin({
             holders:{

             }
        }),
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js')
    ]
}
