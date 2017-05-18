var path=require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.js',

    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },

    module: {
        rules: [
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

    devServer: {
        contentBase: path.join(__dirname),
        port:80,
        open: true,
        inline:true,
        proxy: {
            "/zhutiapi/**/*": {
                target: "http://api.zhuti.qiku.com",
                pathRewrite: {"^/zhutiapi" : ""},
                changeOrigin: true,
                secure: false
            }
        }
    }
}
