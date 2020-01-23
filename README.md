# OpenSeadragonViewer

A React wrapper component around the OpenSeadragon viewer. Import the component into your React application, feed it a IIIF manifest URL via props (see below for example), and it will render an OpenSeadragon viewer with:

- Alternative toolbar icons
- A searchable dropdown select menu for navigating an image with multiple tile source images.
- A custom thumbnail navigator for an image with multiple tile source images.
- Ability to download the currently zoomed canvas image, or be presented with a link to download the full-size image. _(coming soon...)_

This component is being extracted from Northwesten's Digital Collections app. For an example: https://dc.library.northwestern.edu/items/f912a581-d9e8-43d6-a7c8-a8d46eff7517

## Installation and usage

The easiest way to use `openseadragon-react-viewer` is to install it from npm and build it into your app with Webpack.

```
yarn add openseadragon-react-viewer
```

Then use it in your app:

```
import React from 'react';
import OpenSeadragonViewer from "openseadragon-react-viewer"

const App = () => {
  // Get your manifest from somewhere
  const manifestUrl = "https://some-manifest-url-here.json";

  return (
    <OpenSeadragonViewer manifestUrl={manifestUrl} />
  );
}

export default App;
```

### Props

Props the component accepts:

- `manifestUrl` - {string} IIIF manifest url (required)
- `options` - {object} (coming soon...) An options config object whether to use custom features or OpenSeadragon features

## Contributing towards development

### Prerequisites

You'll need to have `node` installed on your local machine. Also, preferably `yarn` (as a wrapper for npm commands) installed as well. You can check either with:

```
node --version
yarn --version
```

### Installing

1. Clone or fork this repository

2. Install _root_ dependencies

```
yarn install
```

3. Install _demo_ dependencies

```
cd demo
yarn install
```

For demo purposes, see `/demo/src/index.js` for an example IIIF manifest from Northwestern Libraries Digital Collections.

Note there are two environments, a bundling (`/`) and development (`/demo`) environent, each with their own `package.json` and `webpack.config.js` files.

```
package.json
webpack.config.js
...
// Edit files in the /scr directory when developing
/src

...
// A conveniece directory for working on the component
/demo
/demo/package.json
/demo/webpack.config.js
```

### More on dev environments

Application components are located in the root level `/src` directory.

The `/demo` directory is a convenience directory mocking a consuming application. View `/demo/src/index.js` to see how the demo is `@import`ing the OpenSeadragonViewer component.

### Running the demo

From within `/demo`, run

`yarn start`

and the demo app will load in the browser. Any changes made to component files in `/src` will live reload in the browser.

### Caveat

Keep in mind the `/demo` is a convenience directory for developing an _unbundled_ component. By default, it's not importing the commonjs export. See https://github.com/samvera-labs/starter-react-component-npm for more details on how to sync webpack loaders in packaging and demo environments.

## Deployment

### Bundling

The following command creates a UMD module:

```
yarn build
```

This will output to the `/lib` folder. The OpenSeadragonViewer component is now ready to be imported directly as a package from any external React app.

## Running the tests

To run the tests, with a full coverage report:

```
yarn test
```

To run tests in `watch` mode:

```
yarn test:watch
```

## Code style

Use [Prettier](https://prettier.io/).

`.prettierrc` file contains current project coding style settings.

## Built With

- [OpenSeadragon](https://openseadragon.github.io/) - OpenSeadragon
- [React](https://reactjs.org/) - JavaScript component library
- [Webpack](https://webpack.js.org/) - Webpack JavaScript bundler
- [Jest](https://jestjs.io/) - Testing framework

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your-name-or-organization/your-repository-name/tags).

## Authors

- **Adam J. Arling** - UI Developer - [Northwestern University](https://github.com/adamjarling)
- (Your name here)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
