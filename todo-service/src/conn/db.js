const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

// console.log(process.env.SQL_HOST);

const db = mysql.createConnection({
    host: "",
    user: "",
    password: "",
    database: "todo"
  });

  module.exports = db;
