var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

webpack({
  entry: {
    'index': './src/index.js',
    'article': './src/article.js',
    'vendor': './src/common.js'
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
      }, */
      {
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
      template: './src/index.html',
      title: 'Index page',
      favicon: './favicon.ico',
      chunks: ['vendor', 'index']
    }),
    new HtmlWebpackPlugin({
      filename: 'article.html',
      template: './src/article.html',
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

    new webpack.DefinePlugin({
      CONSTANT_A: "'test_branch'"
    }),
    //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.[hash].js')
  ]
})
