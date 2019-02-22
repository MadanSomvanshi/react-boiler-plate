const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const moduleObj = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["babel-loader"],
    },
    {
      test: /\.(sa|sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'dist/assets',
            publicPath: 'dist/assets'
          },
        },
      ],
    },
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
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
    new HtmlWebPackPlugin({
      template: 'src/client/index.html'
    })
  ],
  mode: 'development',
};

