const express = require('express'),
  morgan = require('morgan'), 
  app = express();

app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common'), {
  skip(){
    return process.env.NODE_ENV === 'test'
  }
});