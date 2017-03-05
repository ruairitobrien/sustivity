const path = require('path');
const webpack = require('webpack');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "3000";

module.exports = {
  devtool: 'eval-source-map',
    context: __dirname,
    entry: ['react-hot-loader/patch', 'babel-polyfill', './src/index.jsx'],
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'www'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|www\/)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        contentBase: "./www",
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        port: PORT,
        host: HOST
    }
};
