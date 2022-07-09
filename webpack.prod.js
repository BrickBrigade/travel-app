const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/client/index.js',
	mode: 'production',
	devtool: 'source-map',
	stats: 'verbose',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules/'),
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader']
			}
		]	
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				template: "./src/client/html/index.html",
				filename: "./index.html"
			}
		),
		new MiniCssExtractPlugin()
	]
};