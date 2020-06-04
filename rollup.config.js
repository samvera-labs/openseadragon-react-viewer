import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import pkg from "./package.json";

import react from "react";
import reactDom from "react-dom";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;
const NODE_ENV = process.env.NODE_ENV || "development";

// CommonJS (for Node) and ES module (for bundlers) build.
// (We could have three entries in the configuration array
// instead of two, but it's quicker to generate multiple
// builds from a single configuration where possible, using
// an array for the `output` option, where we can specify
// `file` and `format` for each target)
let productionRollup = {
  input: "src/main.js",
  external: ["react", "react-dom"],
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
    {
      file: pkg.browser,
      format: "umd",
      name: "openSeadragonViewer",
      globals: { react: "React", "react-dom": "ReactDOM" },
    },
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs(), // converts date-fns to ES modules
    //production && terser(), // minify, but only in production
  ],
};

// browser-friendly UMD build used for development
let devRollup = {
  input: "src/index.js",
  output: {
    name: "testRollupApp",
    file: "public/bundle.js",
    format: "umd",
    sourcemap: true,
  },
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    babel({
      babelHelpers: "runtime",
      babelrc: false,
      exclude: "node_modules/**",
      plugins: [
        // Need runtime here to handle async await
        [
          "@babel/plugin-transform-runtime",
          {
            helpers: true,
            regenerator: true,
          },
        ],
      ],
      presets: ["@babel/preset-env", "@babel/preset-react"],
    }),
    resolve(), // tells Rollup how to find date-fns in node_modules
    commonjs({
      include: "node_modules/**",
      namedExports: {
        react: Object.keys(react),
        "react-dom": Object.keys(reactDom),
      },
    }), // converts date-fns to ES modules
    serve({ open: true, contentBase: "public" }),
    livereload(),
  ],
};

export default production ? productionRollup : devRollup;
