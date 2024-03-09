const express = require('express');
const db = require('../conn/db');
const { getTodo, createTodo, deleteResume, updateResume } = require('../controller/todoController');
const auth = require('../middleware/auth');
const todoRouter = express.Router();

todoRouter.get('/todo', auth, getTodo);
todoRouter.post('/todo', auth, createTodo);
todoRouter.delete('/todo/:id', deleteResume);
todoRouter.put('/todo/:id', updateResume);

module.exports = todoRouter;