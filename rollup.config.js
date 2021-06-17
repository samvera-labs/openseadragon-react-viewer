import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import pkg from "./package.json";
import { terser } from "rollup-plugin-terser";

import react from "react";
import reactDom from "react-dom";

const production = !process.env.ROLLUP_WATCH;
const NODE_ENV = process.env.NODE_ENV || "development";

// CommonJS (for Node) and ES module (for bundlers) build.
let productionRollup = {
  input: "src/main.js",

  output: [
    { file: pkg.main, format: "cjs" },
    {
      file: pkg.main.replace(/\.js$/, ".min.js"),
      format: "cjs",
      plugins: [terser()],
    },
    { file: pkg.module, format: "es" },
    {
      file: pkg.browser,
      format: "umd",
      name: "openSeadragonViewer",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "react-device-detect": "reactDeviceDetect",
        "@emotion/react": "react",
        "react-select": "Select",
        "@reglendo/canvas2image": "Canvas2Image",
        openseadragon: "OpenSeadragon",
      },
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    replace({
      "process.env.NODE_ENV": JSON.stringify(NODE_ENV),
    }),
    babel({
      babelHelpers: "runtime",
      babelrc: true,
      exclude: "node_modules/**",
    }),
    resolve(), // tells Rollup how to find packages in node_modules
    commonjs(), // converts node_modules packages to ES modules
  ],
};

//browser-friendly UMD build used for development
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
      preventAssignment: true,
    }),
    babel({
      babelHelpers: "runtime",
      babelrc: true,
      exclude: "node_modules/**",
    }),
    resolve(),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        react: Object.keys(react),
        "react-dom": Object.keys(reactDom),
        openseadragon: ["Point"],
      },
    }),
    // Serve the app and live reload
    !production && serve({ open: true, contentBase: "public" }),
    !production && livereload(),
  ],
};

export default production ? productionRollup : devRollup;
