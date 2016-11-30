var _ = require('lodash');
var path = require('path');
var webpack = require('webpack');
var argv = require('yargs').argv;

var precss       = require('precss');
var autoprefixer = require('autoprefixer');

var rootDir = path.resolve(__dirname, '../');


var node_modules = path.resolve(rootDir, 'node_modules');
var bower_components = path.resolve(rootDir, 'bower_components');

var scripts = require('./scripts');

if (argv.inline && argv.hot) {
    scripts.aliases.react = "/node_modules/react/react.js" // for better debug
}

var aliases = _.mapValues(scripts.aliases, function (scriptPath) {
    return path.resolve(rootDir + scriptPath)
});

module.exports = {
    context: rootDir,
    resolve: {
        alias: aliases
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loaders: (argv.inline && argv.hot ? [
                    'react-hot',
                    'babel?compact=false&presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread'
                ] : [

                    'babel?compact=false&presets[]=es2015&presets[]=react&plugins[]=transform-object-rest-spread'
                ] ),
                exclude: [
                    /node_modules/,
                    /bower_components/,
                ]
            }, {
                test: /\.less$/,
                loader: 'style!css!postcss!less!autoprefixer-loader?browsers=last 10 versions'

            }, {
                test: /\.css/,
                loader: "style!css!postcss"

            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=application/octet-stream'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&minetype=image/svg+xml'
            }, {
                test: /\.(png|jpg|jpeg|gif)(\?v=\d+\.\d+\.\d+)?$/i,
                loader: 'url?limit=10000'}
            , {
                test: /\.json$/,
                loader: 'json'
            }],
        noParse: _.values(_.pick(aliases, scripts.noParse))
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    plugins: [
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.optimize.CommonsChunkPlugin("vendor", "vendor.bundle.js", Infinity)
    ]
};