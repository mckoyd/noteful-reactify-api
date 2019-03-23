require('dotenv').config();   // Process ENV variables

const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => res.send('Hello finally'));

app.listen(port, () => console.log('Example working?'))
