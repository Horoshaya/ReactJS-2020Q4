const express = require('express');
const serverRenderer = require('../dist/serverRenderer').default;

const port = 8080;
const app = express();

app.use(express.static('dist'));
app.use(serverRenderer());

app.listen(8080, () => {
  console.info('Express listening on port: ' + port);
});

module.exports = app;

// import path from 'path';
// import Express from 'express';
// import React from 'react';
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import counterApp from './reducers';
// import App from '../src/App';

// const app = Express();
// const port = 3000;

// //Serve static files
// app.use('/static', Express.static('static'));

// // This is fired every time the server side receives a request
// app.use(handleRender);

// // We are going to fill these out in the sections to follow
// function handleRender(req, res) {
//   /* ... */
// }
// function renderFullPage(html, preloadedState) {
//   /* ... */
// }

// app.listen(port);
