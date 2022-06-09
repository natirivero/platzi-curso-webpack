const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.mjs'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      inject: 'body', //posicion de la insercion
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
};
