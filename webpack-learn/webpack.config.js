var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
    entry:'./src/entry.js',
    output:{
        path:'./bin',
        filename:'app.bundle.js'
    },
    module:{
        loaders:[{
            // HTML LOADER
            // Reference: https://github.com/webpack/raw-loader
            // Allow loading html through js
            test: /\.html$/,
            loader: 'html'
        },{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        }]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./index.html'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            }
        })
    ]
}
