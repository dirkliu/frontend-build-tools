var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

require('shelljs/global');
if (!which('git')) {
    echo('Sorry, this script requires git');
    exit(1);
}

var branch=exec('git branch');
if(branch.indexOf('master')){
    console.log('It is master!');
}

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
            }*/, {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }, {
                test: /\.scss$/,
                loaders: ["style", "css", "resolve-url", "sass"]
            }, {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loader: 'url!resolve-url!img?progressive=true'
            }
        ]
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
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js'),
        new webpack.HotModuleReplacementPlugin()
    ],

    /*devServer: {
        contentBase: './bin',
        port: 8000,
        inline: true,
        open: 'http://localhost:8000/#/'
    },*/
    devtool: "eval"
}
