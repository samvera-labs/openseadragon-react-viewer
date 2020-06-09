# OpenSeadragonViewer

![Image of OpenSeadragon React Viewer](/screenshot.jpg)

A React wrapper component around the OpenSeadragon viewer. Import the component into your React application, feed it a IIIF manifest URL via props (see below for example), and it will render an OpenSeadragon viewer with:

- Alternative toolbar icons
- A searchable dropdown select menu for navigating an image with multiple tile source images.
- A custom thumbnail navigator for an image with multiple tile source images.
- Ability to download the currently zoomed canvas image, or be presented with a link to download the full-size image. _(coming soon...)_

This component is being extracted from Northwesten's Digital Collections app. For an example: https://dc.library.northwestern.edu/items/f912a581-d9e8-43d6-a7c8-a8d46eff7517

## Installation and usage

The easiest way to use `openseadragon-react-viewer` is to install the package from npm and import the component into your React app.

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

  // Options to show/hide extra UI features in the viewer
  // All options default to 'true'
  const options = {
    showDropdown: true,
    showThumbnails: false,
    showToolbar: true
  };

  return (
    <OpenSeadragonViewer manifestUrl={manifestUrl} options={options} />
  );
}

export default App;
```

### Options / Props

Props the component accepts:

- `manifestUrl` - {string} IIIF manifest url (required)
- `options` - {object} An options config object whether to use custom features or OpenSeadragon features

See the [Styleguidist docs](https://samvera-labs.github.io/openseadragon-react-viewer/docs/) for full configuration options.

## Development

### Prerequisites

You'll need to have `node` installed on your local machine. Also, preferably `yarn` installed as well. You can check either with:

```
node --version
yarn --version
```

### Installing

1. Clone or fork this repository

2. Install project dependencies

```
yarn install
```

### Start development environment

To spin up the development environment run:

```
yarn dev
```

Visit http://localhost:10001/ in your browser.

See `rollup.config.js` for development and packaging configuration details. Development environment runs from a `UMD` bundled file, which is saved to the `/public` folder for local development.

### Running the tests

To run unit tests, with a full coverage report:

```
yarn test
```

To run tests in `watch` mode:

```
yarn test:watch
```

### Styleguidist development

Styleguidist, in addition to providing documentation, also offers an isolated development environment. To run the environment and test it out:

```
yarn styleguide
```

To build a static html version of the docs (which Github pages uses), run:

```
yarn styleguide:build
```

## Deployment

To deploy your forked version of this repo, run:

```
yarn build
```

This will create CommoneJS, ES Module, and UMD distribution files located in the `/dist/` directory.

## Documentation

See the [Styleguidist docs](https://samvera-labs.github.io/openseadragon-react-viewer/docs/) for documentation on the components.

## Contributing

If you're working on PR for this project, branch off `master` and create a feature branch. Submit your PR to https://github.com/samvera-labs/openseadragon-react-viewer. You're awesome. Thanks!

## Code style

Use [Prettier](https://prettier.io/).

`.prettierrc` file contains current project coding style settings.

## Built With

- [OpenSeadragon](https://openseadragon.github.io/) - OpenSeadragon
- [IIIF](https://iiif.io/) - IIIF International Image Interoperability Framework
- [React](https://reactjs.org/) - JavaScript component library
- [Rollup](https://rollupjs.org/) - JavaScript Bundler
- [Jest](https://jestjs.io/) - Testing framework
- [Emotion](https://emotion.sh/) - CSS in JS

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your-name-or-organization/your-repository-name/tags).

## Authors

- **Adam J. Arling** - UI Developer - [Northwestern University](https://github.com/adamjarling)
- (Your name here)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
