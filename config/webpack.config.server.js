const path = require('path');
const nodeExternals = require('webpack-node-externals');
const merge = require('webpack-merge');
const common = require('./webpack.config.common');

// module.exports = merge(common, {
//   mode: 'development',
//   target: 'node',
//   entry: path.join(__dirname, '..', 'src', 'serverRenderer.js'),
//   externals: [nodeExternals()],
//   output: {
//     filename: 'serverRenderer.js',
//     libraryTarget: 'commonjs2',
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
// });

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.join(__dirname, '..', 'src', 'serverRenderer.js'),
  externals: [nodeExternals()],
  output: {
    filename: 'serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
};
