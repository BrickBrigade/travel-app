const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
		clean: true
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules/'),
				loader: 'babel-loader'
			}
		]	
	},
	plugins: [
		new HtmlWebpackPlugin(
			{
				template: "./src/client/html/index.html",
				filename: "[name].bundle.html"
			}
		)
	]
};