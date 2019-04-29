const path = require('path')

const webpack = require('webpack');

const htmlWebpackPlugin = require('html-webpack-plugin');

const vueLoaderPlugin = require('vue-loader/lib/plugin');


module.exports = {
    entry: path.join(__dirname, './src/main.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    devServer: {
        open: true,
        port: 3000,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        new vueLoaderPlugin()
    ],
    module: {
        rules: [
            {test: /\.css$/,use: ['style-loader', 'css-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(jpg|png|gif|jpeg)$/, use: 'url-loader'},
            {test: /\.(ttf|eot|svg|woff|woff2)$/,use: 'url-loader'},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.vue$/, use: 'vue-loader'}
        ]
    },
    // resolve: {
    //     alias: {
    //         'vue$': 'vue/dist/vue.js'
    //     }
    // }
}