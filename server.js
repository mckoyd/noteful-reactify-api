require('dotenv').config();   // Process ENV variables

const express = require('express'),
  morgan = require('morgan'),
  app = express(),
  { PORT } = require('./config');

app.use(morgan(process.env.NODE_ENV === 'development' ? 'dev' : 'common', {
  skip(){
    return process.env.NODE_ENV === 'test'
  }
}))

app.get('/', (req, res) => res.json({message: "Welcome to Noteful's API"}))

app.listen(PORT, () => console.log(`Listening on ${PORT}`))
