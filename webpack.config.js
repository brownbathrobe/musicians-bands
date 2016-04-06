var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'js/bundle.js',
    path: __dirname + '/dist'
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Musician & Bands',
    template: './src/index.ejs',
    inject: 'body'
  })],
  resolve: {
   root: [__dirname + '/src']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          plugins: ['transform-decorators-legacy' ],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};
