# openseadragon-react-viewer

[![npm version](https://badge.fury.io/js/openseadragon-react-viewer.svg)](https://badge.fury.io/js/openseadragon-react-viewer)

## March 30, 2022:

_Note this repository will be no longer be maintained by the original developers. We encourage all users to switch to [clover-iiif](https://github.com/samvera-labs/clover-iiif), which will provide the same image viewing experience in OpenSeadragon, along with support for audio and video files in a single viewer._

### Updated viewer

- [clover-iiif Github](https://github.com/samvera-labs/clover-iiif)
- [clover-iiif NPM](https://www.npmjs.com/package/@samvera/clover-iiif)

![Image of OpenSeadragon React Viewer](https://i.imgur.com/6PbYcbE.jpg)

A React wrapper component around the OpenSeadragon viewer. Feed `OpenSeadragonViewer` a IIIF manifest URL, and it will render an OpenSeadragon viewer with:

- FontAwesome toolbar icons
- A tile source dropdown navigation menu
- Thumbnails navigation
- Download options
- Support for deep linking, and saving URL parameters

## Installation and usage

```bash
npm install openseadragon-react-viewer

// And peer dependencies
npm install @emotion/react openseadragon react-device-detect react-select
```

Then use it in your app:

```jsx
import React from "react";
import { OpenSeadragonViewer } from "openseadragon-react-viewer";

const App = () => {
  // Provide either a local IIIF manifest object
  const manifest = MY_AWESOME_MANIFEST;

  // Or, provide a publicly accessible URL of a IIIF manifest
  const manifestUrl = "https://some-manifest-url-here.json";

  // Options to show/hide extra UI features in the viewer
  // height(in pixels) option is default to 800 for wide-screens and 500 for narrow-screens
  // All other options default to 'true'
  const options = {
    showDropdown: true,
    showThumbnails: true,
    showToolbar: true,
    deepLinking: true,
    height: 800,
  };

  // Pass through any OpenSeadragon config options you'd like to override
  const openSeadragonOptions = {
    gestureSettingsMouse: {
      scrollToZoom: true,
    },
  };

  // Customize which tool bar controls are displayed
  const toolBarOptions = {
    showZoom: true,
    showFullScreen: true,
    showDownload: true,
    showPreviousNext: true,
  };

  // Note: A local manifest will take precedence over manifestUrl if both props are supplied
  return (
    <OpenSeadragonViewer
      manifest={manifest}
      manifestUrl={manifestUrl}
      options={options}
      openSeadragonOptions={openSeadragonOptions} // Optional
      toolBarOptions={toolBarOptions} // Optional
    />
  );
};

export default App;
```

### Options / Props

View [documentation](https://samvera-labs.github.io/openseadragon-react-viewer/) for all configuration options.

### Custom styling

View [documentation](https://samvera-labs.github.io/openseadragon-react-viewer/) for a list of CSS classes you can target to add custom styles.

### Getting help

If you need help with `openseadragon-react-viewer`, [submit an issue](https://github.com/samvera-labs/openseadragon-react-viewer/issues).

### Cross-site Requests

** This info pulled from the [Diva.js](https://github.com/ddmal/diva.js) package**

You may receive an error that looks something like this:

```bash
XMLHttpRequest cannot load http://example.com/demo/imagefiles.json. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8000' is therefore not allowed access.
```

This is a security precaution that all browsers use to prevent cross-site request forgeries. If you receive this message it is because your `manifestUrl` prop and the server used to serve the OpenSeadragon React Viewer are not at the same server address.

To fix this you must ensure that the OpenSeadragon React Viewer host's React application, and the location pointed to by the `manifestUrl` prop are being served by the same server, or you must create an exception using the Access-Control-Allow-Origin header on your server to explicitly white-list the `manifestUrl` location.

## Development

### Installing

1. Clone or fork this repository

2. Install project dependencies

```bash
npm install
```

### Start development environment

To spin up the development environment (which is a Styleguidiest dev environment) run:

```bash
npm run dev
```

Visit http://localhost:6060/ (Styleguidist's default port) in your browser.

See `rollup.config.js` for development and packaging configuration details. Development environment runs from a `UMD` bundled file, which is saved to the `/public` folder for local development.

### Running the tests

To run unit tests, with a full coverage report:

```bash
npm run test
```

To run tests in `watch` mode:

```bash
npm run test:watch
```

### Styleguidist development

Styleguidist, in addition to providing documentation, also offers an isolated development environment. To run the environment and test it out:

```bash
npm run dev
// or
npm run styleguide
```

To build a static html version of the docs (which Github pages uses), run:

```bash
npm run styleguide:build
```

## Deployment

To deploy your forked version of this repo, run:

```bash
npm run build
```

This will create CommoneJS, ES Module, and UMD distribution files located in the `/dist/` directory.

## Documentation

See the [Styleguidist docs](https://samvera-labs.github.io/openseadragon-react-viewer/) for documentation on the components.

## Contributing

If you're working on a PR for this project, create a feature branch off of `main`.

This repository follows the [Samvera Community Code of Conduct](https://samvera.atlassian.net/wiki/spaces/samvera/pages/405212316/Code+of+Conduct) and [language recommendations](https://github.com/samvera/maintenance/blob/master/templates/CONTRIBUTING.md#language). Please **_do not_** create a branch called `master` for this repository or as part of your pull request; the branch will either need to be removed or renamed before it can be considered for inclusion in the code base and history of this repository.

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

## Authors

- **Adam J. Arling** - UI Developer - [Northwestern University](https://github.com/adamjarling)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
