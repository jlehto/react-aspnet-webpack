const webpack = require('webpack')
const path = require('path')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'build')

 const config = {
    entry: APP_DIR + '/hello.js',
    devServer: {
        contentBase: BUILD_DIR,
        port: 8081,
        open: true
    },
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
};

module.exports = config