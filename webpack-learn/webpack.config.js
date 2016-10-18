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
            test: /\.html$/,
            loader: 'raw'
        },{
            test:/\.js$/,
            exclude:/node_modules/,
            loader:'babel-loader'
        },{
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
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
