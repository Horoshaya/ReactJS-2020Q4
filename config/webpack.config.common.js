const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '..', '/dist'),
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Best Movies',
      template: 'src/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new FaviconsWebpackPlugin(
      path.join(__dirname, '../src', '/assets/images/favicon.ico'),
    ),
  ],
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
