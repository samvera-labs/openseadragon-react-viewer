# OpenSeadragon React Viewer

A React wrapper component around the OpenSeadragon viewer. Import the component into your React application, feed it a IIIF manifest URL via props (see below for example), and it will render an OpenSeadragon viewer with:

- Alternative toolbar icons
- A searchable dropdown select menu for navigating an image with multiple tile source images.
- A custom thumbnail navigator for an image with multiple tile source images.
- Ability to download the currently zoomed canvas image, or be presented with a link to download the full-size image.

## Usage

```
yarn add https://github.com/samvera-labs/openseadragon-react-viewer

```

Then in your React application...

```
// MyReactComponent.js

import OpenSeadragonReactViewer from "openseadragon-react-viewer"

<OpenSeadragonReactViewer manifestUrl="https://some-manifest-url-here.json" />
```

For testing, see `/demo/src/index.html` for an example IIIF manifest from Northwestern Libraries Digital Collections.

## Development

### Prerequisites

You'll need to have `node` installed on your local machine. Also, preferably `yarn` (as a wrapper for npm commands) installed as well. You can check either with:

```
node --version
yarn --version
```

### Installing

1. Clone or fork this repository

2. Install dependencies

```
yarn install
```

3. Start the development server

```
yarn start
```

Open up a browser and navigate to: http://localhost:3001/. Hot reloading via `webpack` is enabled, so you'll see live updates in the browser during development.

## Development

All code updates should be done to files in the `/src` directory.

The `/demo` directory contains the demo application entry point `index.html` file. `/demo/index.js` mocks your React application importing the OpenSeadragon React Viewer component.

### Component configuration

A consuming application is expected to provide the following configuration `props` passed to the OpenSeadragon React Viewer component.

| prop                   | type   | description                                                 |     |     |
| ---------------------- | ------ | ----------------------------------------------------------- | --- | --- |
| `manifestUrl`          | string | URL of a public manifest.                                   |     |     |
| `showSelectFilter`     | bool   | Whether to display the custom child images in a Work filter |     |     |
| `showCustomThumbnails` | bool   | Whether to display custom thumbnails                        |     |     |

### Example usage

```
import OpenSeadragonReactViewer from "openseadragon-react-viewer"

<OpenSeadragonReactViewer manifestUrl="https://some-manifest-url-here.json" />
```

## Commands

The following commands are available to the application via `npm scripts` located in the `package.json` file.

```
yarn clean
```

Cleans the output directory `dist`, ensuring a fresh copy of files when preparing your files for packaging.

```
yarn start
```

Starts the webpack development server in which you can view your work. http://localhost:3001/

```
yarn test
```

Runs the application's tests once, and provides a coverage report.

```
yarn test:watch
```

If you prefer to keep an open `watch` on your tests during development, run this command in a separate tab in your terminal/shell.

```
yarn transpile
```

This command prepares the React component for packaging and distribution. It moves packaged, transpiled files into the `/dist` directory. Run this command when you're happy with your development changes, before committing a branch which you wish to push to Github or import locally.

## Running the tests

To run the tests, with a full coverage report:

```
yarn test
```

To run tests in `watch` mode:

```
yarn test:watch
```

`Jest` is the configured testing framework.

### Coding style tests

There is a `prettierrc` file with project coding style settings.

## Deployment

To create a new build package which can be imported by a consuming application, run:

```
yarn transpile
```

This will create a component package in the `/dist` folder which is ready to be imported by another application.

Currently we're installing the component through a GitHub repo instead of the NPM repository, so to import the default package into your application, run:

```
yarn add https://github.com/your-name-or-organization/your-repository-name
```

If you'd like to import a feature branch you're working on, maybe called `my-new-feature`, do the following:

```
yarn remove your-repository-name
```

(to make sure old files aren't hanging around)

Then,

```
yarn add https://github.com/your-name-or-organization/your-repository-name#my-new-feature
```

See the yarn docs (https://yarnpkg.com/lang/en/docs/cli/add/) for more info on alternative ways of importing packages.

## Built With

- [OpenSeadragon](https://openseadragon.github.io/) - OpenSeadragon
- [React](https://reactjs.org/) - JavaScript component library
- [Jest](https://jestjs.io/) - Testing framework

## Contributing

Please read [CONTRIBUTING.md](contributing.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your-name-or-organization/your-repository-name/tags).

## Authors

- **Your Name Here** - _Rock Star Developer_ - [Your Organization](#)

See also the list of [contributors](https://github.com/your-name-or-organization/your-repository-name/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
