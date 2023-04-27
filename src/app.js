const express  = require("express");
const app = express();

const studentRouter = require("./routers/studentrouter")

//mongodb connection import here
require("./db/conn.js");

//model import here
const Student = require("./model/students.js");
const { default: mongoose } = require("mongoose");

const port  = process.env.PORT || 3000;

//middleware
//express.json() == data json form mai aa rha hai

app.use(express.json());

app.use(studentRouter);

app.listen(port, ()=>{
    console.log(`Server is working on ${port}`)
})