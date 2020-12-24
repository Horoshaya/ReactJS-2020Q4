const path = require('path');
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: path.join(__dirname, '..', 'src', 'serverRenderer.js'),
  externals: [nodeExternals()],
  output: {
    filename: 'serverRenderer.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
                use: [
                {
                loader: MiniCssExtractPlugin.loader,
                },
                {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          ]
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
  plugins: [
     new MiniCssExtractPlugin({
       filename: "style.css",
     }),
   ],
   optimization: {
    minimize: true,
    minimizer: [new OptimizeCSSAssetsPlugin({})],
  }
};
