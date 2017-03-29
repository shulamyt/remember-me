var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var mockProvider = require('./mockdata/mockProvider.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: './src/remember-me.js',
	output: {
		filename: 'remember-me-bundle.js',
		path: path.resolve(__dirname, 'dist')
	},

	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.(png|jpg|svg|gif|eot|woff|ttf)(\?.*)?$/,
				loader: 'url-loader?limit=1638400'
			},

			{
			test: /\.(css|scss)$/,
			use:
				[
					'style-loader',
					'css-loader',
					'sass-loader'
				],
			},
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				context: path.resolve(__dirname),
				from: path.join('src/index.html'),
				force: true
			},
			{
				context: path.resolve(__dirname,'./src'),
				from: 'res',
				to:'res'
			}
		])
	],

	devServer: {
		contentBase: path.resolve(__dirname, './src'),
		proxy: mockProvider
	},

	devtool: 'source-map'
};