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
