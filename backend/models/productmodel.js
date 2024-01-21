const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    id: String,
    name: String,
    category: String,
    price: Number,
    description: String,
    image: String
})

const Products = new mongoose.model("products",productsSchema)
module.exports = Products;