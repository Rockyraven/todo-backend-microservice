const express = require('express');
const todoRouter = express.Router();
const TODO_SERVICE_URL = 'http://localhost:4002';
// const 

todoRouter.get('/todo', async (req, res) => {
    try {
      const todosResponse = await axios.get(`${TODO_SERVICE_URL}/api/todo`, {
        headers: { authorization: req.headers.authorization },
      });
      res.json(todosResponse.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });
  
  todoRouter.post('/todo', async (req, res) => {
    try {
      const todosResponse = await axios.post(`${TODO_SERVICE_URL}/api/todo`, req.body, {
        headers: { authorization: req.headers.authorization },
      });
      res.json(todosResponse.data);
    } catch (error) {
      res.status(error.response.status).json(error.response.data);
    }
  });

  module.exports = todoRouter;