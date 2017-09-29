const path = require('path'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    webpack = require('webpack'),
    reactDllManifest = require('../fantasy-dll/fantasy-react-dll/dist/manifest.json')

module.exports = {
    entry: {
        vendor: ['./docs/vendor.js'],
        app: ['./docs/index.js'],
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/docs'),
        publicPath: '/fantasy-skeleton-lib/docs/',
    },
    resolve: {},
    module: {
        rules: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: [
                    'es2015',
                    'react',
                    'stage-1',
                ],
                plugins: [
                    'lodash',
                ],
            },
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader',
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader!sass-loader',
        }, {
            test: /\.(png|gif)$/,
            loader: 'url-loader?limit=100000',
        }, {
            test: /\.jpg$/,
            loader: 'file-loader',
        }, {
            test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/font-woff',
        }, {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
        }, {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file-loader',
        }, {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url-loader?limit=10000&mimetype=image/svg+xml',
        }, {
            test: /\.json$/,
            loader: 'json-loader',
        }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['manifest', 'app', 'vendor'],
            template: './docs/index.html',
            hash: true,
            filename: 'index.html',
            title: 'Fantasy Map',
            cdn: 'https://cdn.bootcss.com/',
            scripts: [{
                file: 'modernizr.min.js',
                path: 'assets/js/',
                locale: true,
            }, {
                file: 'fantasyReactDll.js',
                path: '/fantasy-react-dll/',
                locale: true,
            }, {
                file: 'fantasy-map.js',
                path: '/fantasy-map/umd/',
                locale: true,
            }],
            links: [],
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            _: 'lodash',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor', 'app'],
        }),
        new webpack.DllReferencePlugin({
            name: 'fantasyReactDll',
            sourceType: 'var',
            manifest: reactDllManifest,
        })],
    externals: [{
        'fantasy-map': 'FantasyMap',
    }],
}
