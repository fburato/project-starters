# React starter typescript

Project bootstrap for react application written in [typescript](https://www.typescriptlang.org/) and uses the following technologies:

- [react](https://reactjs.org/): user interface library.
- [webpack](https://webpack.js.org/): build and development environment.
- [babel](https://babeljs.io/): transpiler to ES5.
- [eslint](https://eslint.org/): linter for the source code.
- [jest](https://jestjs.io/): testing framework.
- [enzyme](https://enzymejs.github.io/enzyme/): testing library for React component testing.

## Development

### Requirements

In order to build and develop this application you need to have installed `node` and `npm`. To install them, run

```bash
brew install node
```

### Run typescript compiler

Execute the following command:

```bash
npm run compile
```

### Running the application

To run the application, execute

```bash
npm install
npm run start
```

alternatively, the application can be started in a docker container using the Makefile targets `localinstall` and `localrun`.

```bash
make localinstall
make localrun
```

### Build the artifact for deployment in the CDN

Execute the Makefile target `localbuild` indicating the base URL for the mountpoint in the CDN:

```bash
CDN_URL=https://foobar/app make localbuild
```

The URL for serving the application will be `CDN_URL/<VERSION>`

### Run tests

Execute the following command:

```bash
npm run test
```
