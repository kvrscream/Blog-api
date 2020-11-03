const express = require("express");
const bodyParser = require("body-parser");
const consign = require("consign");
const mongoose = require("mongoose");
const cors = require("cors");

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

app.use(express.json());


let envPathName = "dev.env";
require("dotenv").config({
    path: envPathName
});

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept, x-token-auth, Authorization");
    next();
});

mongoose.connect(process.env.MONGO,{
    auth:{
        user: process.env.MONGUSER,
        password: process.env.PWDA
    },
    useNewUrlParser:true
}).catch((ee) => {"erro => ",console.log(ee)});




consign()
    .include("./models")
    .include("./routes")
    .into(app);

module.exports = app;