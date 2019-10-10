const ExtractTextPlugin = require('extract-text-webpack-plugin')
, path = require('path')
, webpack = require('webpack');

const APP_DIR = path.resolve(__dirname, 'client')
, BUILD_DIR = path.resolve(__dirname, 'public/dist/');


module.exports = (env, argv) => {
	const config = {
		entry: [`${APP_DIR}/index.js`, `${APP_DIR}/styles.scss`],
		module: {
			rules: [
				{
					test: /\.js$/,
					use: {
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env', '@babel/preset-react']
						}
					},
					exclude: /node_modules/
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						fallback: 'style-loader',
						use: [
							{ loader: 'css-loader' },
							{ loader: 'sass-loader', options: { includePaths: [APP_DIR] } }
						]
					})
				}
			]
		},
		output: {
			path: BUILD_DIR,
			filename: 'bundle.min.js'
		},
		plugins: [
			new ExtractTextPlugin('main.css')
		]
	};

	return config;
}