module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
};