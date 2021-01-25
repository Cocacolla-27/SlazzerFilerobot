const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, "../public/index.html"),
  filename: "./index.html"
});


module.exports = (env, options) => {
  return {
    entry: path.join(__dirname, "../src/index.js"),
    output: {
      path: path.join(__dirname, "../examples/react/dist"),
      filename: "filerobot-image-editor.[chunkhash].js",
      chunkFilename: 'filerobot-image-editor.[name].[chunkhash].js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|tsx)$/,
          use: "babel-loader",
          exclude: /(node_modules|bower_components)\/(?!pretty-bytes\/).*/,
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
          loader: 'url-loader?limit=100000'
        }
      ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
      extensions: [".js", ".jsx", ".tsx"]
    },
    devtool: options.mode === 'production' ? 'none' : "sourcemap",
    devServer: {
      port: 3004
    }
  }
};