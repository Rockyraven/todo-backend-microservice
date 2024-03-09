const express = require('express');
const mysql = require('mysql');
require('dotenv').config();

// console.log(process.env.SQL_HOST);

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB
  });

  module.exports = db;
