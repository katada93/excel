const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  target: isProduction ? 'browserslist' : 'web',
  entry: './src/index.ts',
  mode: isProduction ? 'production' : 'development',
  devtool: 'source-map',
  output: {
    filename: '[hash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
      minify: {
        removeComments: isProduction,
        collapseWhitespace: isProduction,
      },
    }),
    new ESLintPlugin(),
  ],
  devServer: {
    port: 3030,
    hot: true,
  },
};
