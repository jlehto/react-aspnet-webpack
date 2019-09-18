const webpack = require('webpack')
const path = require('path')

const APP_DIR = path.resolve(__dirname, '')
const BUILD_DIR = path.resolve(__dirname, 'build')

module.exports = {
    entry: APP_DIR + '/hello.js',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    }
};

