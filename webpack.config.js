const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'source-map',
    entry: {
        bundle: './src/index.js'
    },
    output: {
        path: path.join(__dirname, 'target'),
        filename: '[name].js',
        libraryTarget: 'umd',
        publicPath: 'target'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
