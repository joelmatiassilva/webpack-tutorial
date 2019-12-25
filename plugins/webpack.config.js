const path = require('path');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin');
const htmlWebPAckPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/js/index.js'),
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
	test: /\.css$/,
	use: [
    //'style-loader' nose usa mas, xq uso el minicssextractplugin,
    {
      loader: MiniCSSExtractPlugin.loader
    },
	  'css-loader'
	]
      }
    ]
  },
  plugins: [
    new htmlWebPAckPlugin({
      title: 'Plugins'
    }),
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css'
    })
  ]
}
