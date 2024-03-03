// api-gateway/src/server.js
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const userRouter = require('./routes/userRouter');
const todoRouter = require('./routes/todoRouter');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

const AUTH_SERVICE_URL = 'http://localhost:4001';
const TODO_SERVICE_URL = 'http://localhost:4002';

app.use('/auth', userRouter);
app.use('/api', todoRouter);


// Authentication endpoint


app.listen(PORT, () => {
  console.log(`API Gateway is running on http://localhost:${PORT}`);
});
