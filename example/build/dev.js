const express = require('express');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const config = require('../webpack.config');
const { join } = require('path');
const getPort = require('get-port');

const compiler = webpack(config);
const app = express();

app.use(middleware(compiler, {}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '../public/index.html'));
});
getPort({ port: 5000 }).then((port) => {
  console.log(`Application is running on http://locahost:${port}`);
  app.listen(port);
});
