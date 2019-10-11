const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const APP_DIR = path.resolve(__dirname, 'client')
const BUILD_DIR = path.resolve(__dirname, 'public/dist/')

module.exports = () => {
  const config = {
    entry: [`${APP_DIR}/index.js`, `${APP_DIR}/styles.scss`],
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'],
            },
          },
          exclude: /node_modules/,
        },
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader', options: { includePaths: [APP_DIR] } },
            ],
          }),
        },
      ],
    },
    output: {
      path: BUILD_DIR,
      filename: 'bundle.min.js',
    },
    plugins: [new ExtractTextPlugin('main.css')],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 3030,
      proxy: { '*': { target: 'http://localhost:3000' } },
    },
  }

  return config
}
