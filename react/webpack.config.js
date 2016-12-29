var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',

    output:{
        path: './dist',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        })
    ],

    devServer:{
        contentBase: './dist',
        port: 8000,
        open: 'http://localhost/#/'
    }
}