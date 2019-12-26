const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const htmlWebPAckPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  devServer: {
    hot: true,
    open: true,
    port: 9001
  },
  module: {
    rules: [
      {
	test: /\.css$/,
	use: [
    'style-loader',/*// nose usa mas, xq uso el minicssextractplugin,
    {
      loader: MiniCSSExtractPlugin.loader
    },*/
	  'css-loader'
	]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new htmlWebPAckPlugin({
      title: 'webpack-dev-server'
    })
    /*
    ,
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
    */
  ]
}
