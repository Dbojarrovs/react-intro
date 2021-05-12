const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');
const HttpError = require('./utils/http-error');

const app = express();

app.use(bodyParser.json());
app.use('/api', routes); 

app.use((request, response, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, request, response, next) => {
  if (response.headerSent) {
    return next(error);
  }
  response.status(error.code || 500)
  response.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(5000);