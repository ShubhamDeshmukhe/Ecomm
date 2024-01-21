require ("dotenv").config;
const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("./db/conn.js");
const Products = require("./models/productmodel.js");
const cors = require("cors");
const data = require("./data");
const router = require("./routes/router.js");


app.use(express.json());
app.use(cors())
app.use(router);
const port = 3001;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

data()
