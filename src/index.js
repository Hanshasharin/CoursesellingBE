// const express = require('express')
// const app = express()
// const connectDb = require('../config/db.js')
// const port = 5000


// connectDb()
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

import express from "express";
import cookieParser from "cookie-parser";
import userRouter from "../routes/userRoutes.js";
import { connect } from "../config/db.js";

const app = express();

app.use(express.json());
app.use(cookieParser())
app.use("/api/v1/user", userRouter);

const port = 3000;
connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
