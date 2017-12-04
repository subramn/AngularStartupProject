const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
	ContextReplacementPlugin
} = require('webpack');
const webpack = require('webpack');

module.exports = {
	entry: {
		'vendor': './src/vendor.ts',
		'styles': './styles.css',
		'main': './src/main.ts'

	},
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].bundle.js",
	},
	resolve: {
		extensions: ['.js', '.ts', '.html', '.css']
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		port: 8080
	},
	devtool: 'inline-source-map',
	module: {
		loaders: [{
				test: /.ts$/,
				use: ['awesome-typescript-loader', 'angular2-template-loader']

			},
			{
				test: /.html$/,
				use: 'raw-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)$/,
				loader: 'url-loader?limit=100000'
			}
		]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			filename: "index.html",
			showErrors: true,
			path: path.join(__dirname, "dist"),
			hash: true
		}),
		new ContextReplacementPlugin(
			/(.+)?angular(\\|\/)core(.+)?/,
			path.resolve(__dirname, '../src')
		)
	]

};