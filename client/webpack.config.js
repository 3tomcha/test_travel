var path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'),
        filename: 'bundle.js',
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
        react: path.join(__dirname, 'node_modules', 'react'),
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
        fallback: {
            fs: false,
            util: require.resolve("util/"),
            path: require.resolve("path-browserify"),
            crypto: require.resolve("crypto-browserify"),
            buffer: require.resolve("buffer/"),
            https: require.resolve("https-browserify"),
            http: require.resolve("stream-http"),
            os: require.resolve("os-browserify/browser"),
            vm: require.resolve("vm-browserify"),
            stream: require.resolve("stream-browserify"),
            constants: require.resolve("constants-browserify"),
            assert: require.resolve("assert/"),
      }
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'babel-loader',
            },
        },
        {
            test: /\.(tsx)$/,
            exclude: /node_modules/,
            use: {
            loader: 'ts-loader',
            },
        },
        {
            test: /\.css$/,
            use: [
            {
                loader: 'style-loader',
            },
            {
                loader: 'css-loader',
            },
            ],
        },
        {
            test: /\.(jpg|png)$/,
            use: [
            {
                loader: 'file-loader',
            }
            ],
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html"
        }),
        new webpack.ProvidePlugin({
            process: 'process/browser',
            Buffer: ['buffer', 'Buffer'],
        }),
        new Dotenv({ systemvars: true})
    ],
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        compress: true,
        port: 3000,
        historyApiFallback: true
    },
    mode: 'development',
    node: {
        global: true,
        __filename: 'mock',
        __dirname: 'mock',
      },
};