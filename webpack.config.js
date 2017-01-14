var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',

    output:{
        path: './dist',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },

    module: {
        loaders: [
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            favicon: './favicon.ico'
        })/*,
        new webpack.optimize.DedupePlugin()*/
    ],

    devServer:{
        contentBase: './dist',
        port: 8000,
        open: 'http://localhost/#/'
    }
}