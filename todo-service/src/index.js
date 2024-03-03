const express = require('express');
const db = require('./conn/db');
const todoRouter = require('./routes/todoRouter');
const app = express();


app.get('/', (req, res) => {
    res.send("working todo");
})

app.use(express.json());



db.connect(function(err) {
    if (err) throw err;
    console.log("Database Connected!");
  });

  app.use("/api", todoRouter);


app.listen(4002, () => {
    console.log("server is working on 4002 port")
})