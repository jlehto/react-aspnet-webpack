const webpack = require('webpack')
const path = require('path')

const APP_DIR = path.resolve(__dirname, 'ClientApp')
const BUILD_DIR = path.resolve(__dirname, 'build')

const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
    entry: APP_DIR + '/Client.js',
    devServer: {
        contentBase: BUILD_DIR,
        port: 8081,
        open: true,
        historyApiFallback: true
    },
    output: {
        path: BUILD_DIR,
        filename: 'clientbundle.js'
    }
}

module.exports = merge(baseConfig, config)