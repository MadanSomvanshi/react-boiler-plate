const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackProvideGlobalPlugin = require('webpack-provide-global-plugin');
var webpack = require('webpack');

const moduleObj = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      resolve: {
        extensions: [".js", ".jsx"]
      },
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
      test: /\.(png|jpg|gif|svg)$/,
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
  resolve: {
    extensions: ['.js', '.sass', '.scss', '.css', '.json', 'jsx']
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      sourceMap: true,
      parallel: 4
    })],
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
    }),
    new CopyWebpackPlugin([
      { from: 'src/client/assets/images', to: 'assets/images' }
    ]),
    new webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom',
      'reactstrap': 'reactstrap'
    })
  ],
  mode: 'development',
};

