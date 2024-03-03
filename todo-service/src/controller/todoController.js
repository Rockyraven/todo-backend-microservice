const express = require('express');
const db = require('../conn/db');

const getTodo = async (req, res) => {
    // const userId = req.user.userId;
    db.query('SELECT * FROM todos ', (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({data: results});
      }
    });
  };

const createTodo = async (req, res) => {
    const { title, description } = req.body;
  
    db.query('INSERT INTO todos (title, description) VALUES (?, ?)', [title, description], (err, result) => {
      if (err) {
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        const newTodo = { id: result.insertId, title, description, bookmarked: false };
        res.json(newTodo);
      }
    });
  };

  module.exports = {getTodo, createTodo}