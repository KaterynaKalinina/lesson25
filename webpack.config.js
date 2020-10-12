const path = require('path');
const HtmlWebpackPlagin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js', './src/style.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules:[
      {
        test: /\.s?[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlagin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};