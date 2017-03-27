var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

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
		]
	},
	plugins: [
		new CopyWebpackPlugin([
			{
				context: path.resolve(__dirname),
				from: path.join('src/index.html'),
				force: true
			}
		])
	]
};