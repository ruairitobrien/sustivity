/*eslint-env node*/
const path = require('path');
const webpack = require('webpack');
const postcssImport = require('postcss-import');
const cssnext = require('postcss-cssnext');
const fontMagician = require('postcss-font-magician');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '3000';

const cssModulesNameFormat = '[path][name]__[local]___[hash:base64:5]';

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
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName='+cssModulesNameFormat+'!postcss-loader',
        exclude: [/node_modules/],
      },
      {
        test: /react-big-calendar\/lib\/css\/react-big-calendar\.css/,
        loader: 'style-loader!css-loader!postcss-loader',
        include: [/node_modules\/react-big-calendar/]
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader?modules',
        include: /flexboxgrid/
      },
      {
        test: /\.json$/,
        loader: 'json',
        exclude: [/node_modules/],
      },
      {
        test: /\.svg$/,
        loader: 'raw',
        exclude: [/node_modules/],
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss () {
          return [
            postcssImport,
            cssnext({features: {customProperties: {variables: {
              brandPrimary: '#3d49ba',
              bodyBackground: '#f5f5f5'
            }
            }}}),
            fontMagician()
          ];
        }
      }
    })
  ],
  devServer: {
    contentBase: './www',
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST
  }
};
