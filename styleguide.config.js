const path = require("path");

module.exports = {
  exampleMode: "expand",
  skipComponentsWithoutExample: true,
  styleguideDir: "docs",
  styles: {
    Playground: {
      preview: {
        position: "relative",
      },
    },
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: ["@babel/transform-runtime"],
            },
          },
        },
      ],
    },
  },
};
