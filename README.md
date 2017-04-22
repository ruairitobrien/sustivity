# Sustivity

> Simple tool for journaling and reporting to help with sustainable productivity.

### Developing

Based on [NodeJs](https://nodejs.org/en/) and [React](https://facebook.github.io/react/). You will need node installed to continue.

Install required dependencies for the project in command prompt from the project directory with:

`npm install`

or if you use [yarn](https://github.com/yarnpkg/yarn)

`yarn`

For all following commands, you can just replace `yarn` with `npm` if you want to use npm instead.

To build and run the application in a development server with [hot reloading](https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack):

`yarn start`

A dev server will be started on port 3000. You can configure the dev server in webpack.config.js.

To package the JavaScript using webpack:

`yarn build`

To run test:

`yarn test`

To run tests continuously:

`yarn test:watch`


This app uses firebase. To deploy you will need firebase tools installed:

`yarn global add firebase-tools`

To deploy:

`firebase deploy`
