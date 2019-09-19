const webpack = require('webpack')
const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'build-server')
const webpackNodeExternals = require('webpack-node-externals')
const SERVER_DIR = path.resolve(__dirname, 'ServerApp');
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
    target: 'node',
    entry: SERVER_DIR + '/Server.js',
    output: {
        path: BUILD_DIR,
        filename: 'serverbundle.js'
    },
    externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)