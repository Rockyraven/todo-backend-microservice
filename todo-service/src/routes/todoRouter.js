const express = require('express');
const db = require('../conn/db');
const { getTodo, createTodo } = require('../controller/todoController');
const todoRouter = express.Router();

todoRouter.get('/todo', getTodo);
todoRouter.post('/todo', createTodo);

module.exports = todoRouter;