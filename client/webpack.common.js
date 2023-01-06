const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
  entry: {
    app: path.resolve(__dirname, './src/index.js'),
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  stats: {
    preset: 'minimal',
    builtAt: true,
    colors: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(__dirname, 'static/index.html'),
      filename: 'index.html',
    }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx'],
  },
};

module.exports = common;