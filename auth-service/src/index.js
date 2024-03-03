const express = require('express');
const mongoose = require("mongoose");
const userRouter = require('./routes/userRouter');
const app = express();


app.get('/', (req, res) => {
    res.send("working auth");
})
app.use(express.json());

app.use("/auth", userRouter);

mongoose
  .connect(
    "MONGODB_URL"
  )
  .then(() => {
    console.log("database connected ");
  })
  .catch((error) => {
    console.log(error);
  });


app.listen(4001, () => {
    console.log("server is working on 4001 port")
})