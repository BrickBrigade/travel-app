const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	mode: 'development',
	devtool: 'source-map',
	stats: 'verbose',
	devServer: {
		port: 3000
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
				filename: "./index.html"
			}
		)
	]
};