const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin')

const moduleObj = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    }
  ],
};


module.exports = {
  entry: {
    'client': './src/client/index.js',
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 4000
  },
  module: moduleObj,
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/client/index.html'
    })
  ],
  mode: 'development',
};

