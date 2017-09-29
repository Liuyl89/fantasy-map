const path = require('path'),
    webpackConfig = require('./webpack.config'),
    pkg = require('./package.json'),
    webpack = require('webpack'),
    reactDllManifest = require('../fantasy-dll/fantasy-react-dll/dist/manifest.json')

module.exports = {
    entry: {
        [pkg.name]: ['./src/umd.js'],
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'var',
        library: 'FantasySkeletonLib',
        path: path.resolve(__dirname, 'dist', 'umd'),
    },
    module: {
        rules: webpackConfig.module.rules,
    },
    plugins: [new webpack.DllReferencePlugin({
        name: 'fantasyReactDll',
        sourceType: 'var',
        manifest: reactDllManifest,
    }), new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        _: 'lodash',
    })],
    externals: [],

}
