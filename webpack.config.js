const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * TODO:
 * 1. 运行 dev 后自动打开浏览器
 * 2. 运行 dev 后，补充显示 url，方便点击，还要带上局域网 url，和 create-react-app 一样
 */

module.exports = function(env) {
  return {
    mode: 'development', // 先写死，晚点再写 production 的逻辑
    entry: {
      index: path.resolve(__dirname, './src/index.tsx'),
    },
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, './dist'),
    },
    devtool: 'inline-source-map',
    // target: "",
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // 这是什么？
    },
    module: {
      rules: [
        {
          test: /.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.less$/,
          exclude: /node_modules/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: '[name]__[local]__[hash:base64:5]',
                },
              },
            },
            'postcss-loader',
            'less-loader',
          ],
        },
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html'),
        chunks: ['index'],
      })
    ],
    devServer: {
      contentBase: path.join('./dist'),
      historyApiFallback: true, // 支持 SPA
      host: '127.0.0.1',
      port: '5000',
      compress: true,
      hot: true,
    }
  };
};
