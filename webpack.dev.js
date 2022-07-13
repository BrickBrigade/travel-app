const path = require('path');
const webpack = require('webpack');
const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: ['./src/client/index.js', hotMiddlewareScript],
	mode: 'development',
	devtool: 'source-map',
	stats: 'verbose',
	devServer: {
		static: './dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: path.resolve(__dirname, 'node_modules/'),
				loader: 'babel-loader'
			},
			{
				test: /\.css$/i,
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
		new MiniCssExtractPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
		publicPath:'/'
	}
};