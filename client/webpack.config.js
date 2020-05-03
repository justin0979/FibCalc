const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: ["./src"],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  mode: "development",
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    contentBase: "dist",
    host: "0.0.0.0",
    port: 3000,
    hot: true,
    historyApiFallback: true,
    overlay: true,
    public: "client:80", // used for nginx
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: [
      ".js",
      ".jsx",
      ".css",
      ".scss",
      ".jpg",
      ".jpeg",
      ".png",
      ".svg",
      ".gif",
      ".ttf",
      ".woff",
      ".woff2",
      ".eot",
    ],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(jpe?g|png|gif|svg|ttf|woff(2)?|eot)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[path][name].[ext]",
            },
          },
          "image-webpack-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
