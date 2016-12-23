var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './app.js',

    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ['react', 'es2015']
            }
        }
    ],

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