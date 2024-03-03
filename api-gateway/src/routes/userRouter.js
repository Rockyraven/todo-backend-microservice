const express = require('express');
const userRouter = express.Router();
const AUTH_SERVICE_URL = 'http://localhost:4001';
const TODO_SERVICE_URL = 'http://localhost:4002';

// Authentication endpoint
userRouter.post('/login', async (req, res) => {
    console.log(req.body);
  try {
    const authResponse = await axios.post(`${AUTH_SERVICE_URL}/auth/signin`, req.body);
    console.log(authResponse);
    res.json(authResponse.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});
userRouter.post('/signup', async (req, res) => {
    console.log(req.body);
  try {
    const authResponse = await axios.post(`${AUTH_SERVICE_URL}/auth/signup`, req.body);
    console.log(authResponse);
    res.json(authResponse.data);
  } catch (error) {
    res.status(error.response.status).json(error.response.data);
  }
});

module.exports = userRouter;