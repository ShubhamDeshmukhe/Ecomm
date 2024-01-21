const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB = process.env.DATABASE;

mongoose.connect(DB)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((err)=>console.log(err) )