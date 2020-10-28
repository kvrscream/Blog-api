const express = require("express");
const bodyParser = require("body-parser");
const consign = require("consign");
const mongoose = require("mongoose");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.json());

let envPathName = "dev.env";
require("dotenv").config({
    path: envPathName
});

mongoose.connect(process.env.MONGO,{
    auth:{
        user: process.env.MONGUSER,
        password: process.env.PWDA
    },
    useNewUrlParser:true
}).catch((ee) => {console.log(ee)});

consign()
    .include("./routes")
    .into(app);

module.exports = app;