const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, options) => {
  /**
   * This section indicates to webpack what html file to use as template for calculating the index.html.
   * By default, on `npm start` index-dev.html is used and on `npm build` index-prod.html is used,
   * but in `dev` the selection can be overridden by passing the `indexTemplate` environment to npm
   * `npm run start -- --env indexTemplate=foo.html`.
   */
  let index = options.mode == "production" ? "index-prod.html" : "index-dev.html"
  if (env.indexTemplate) {
    index = env.indexTemplate
  }
  let apiUrl = "http://localhost:8081"
  if (env.apiUrl) {
    apiUrl = env.apiUrl
  }
  return {
    entry: path.join(__dirname, "src", "index.tsx"),
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      /**
       * In production mode, the publicPath is set to be a URL which includes the version of the app (e.g. https://cdn/0.0.1/),
       * in dev it is set to be mounted on the root (i.e. http://localhost:8080)
       */
      publicPath:
        options.mode == "production" ? `${env.cdnUrl}/${env.appVersion}/` : "",
      clean: true,
    },
    devtool: "source-map",
    mode: process.env.NODE_ENV || "development",
    resolve: { 
      modules: [path.resolve(__dirname, "src"), "node_modules"], 
      extensions: ['...', '.tsx', '.ts'],
      roots: [__dirname]
    },
    devServer: { 
      port: 8080,
      static: path.join(__dirname, "src"),
      /**
       * The proxy configuration allows to redirect the call performed to the `/api` path to
       * another server running in the same machine at the apiUrl provided (default http://localhost:8081). 
       * This prevents to have to configure CORS in the local development, and allows to run the entirety 
       * of the application with the server component locally. 
       * The URL to the backend has to be configured at `index-dev.html`.
       */
      proxy: {
        "/api": {
          changeOrigin: true,
          cookieDomainRewrite: "localhost",
          target: apiUrl,
          pathRewrite: {
            "^/api": "" // removes the prefix `/api` before routing to other server
          }
        }
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "babel-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre",
        },
        {
          test: /\.(css|scss)$/,
          exclude: /node_modules/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpg|jpeg|png|gif|svg)$/i,
          loader: "file-loader", // interpret imports as strings that are going to be added to the src attribute
          options: {
            name: "[path][name]-[contenthash].[ext]",
          },
        },
      ],
    },
    plugins: [
      /**
       * This allows to produce an index.html with the injected bundle (added at the bottom of the body)
       */
      new HtmlWebpackPlugin({
        template: path.join(__dirname, "src", index),
        filename: "index.html",
        inject: "body",
      }),
    ],
  };
};
