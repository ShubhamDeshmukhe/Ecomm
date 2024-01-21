const express = require('express');
const router = new express.Router();
const Products = require("../models/productmodel");

router.get("/getproducts", async(req,res)=>{
    try {
        const productdata = await Products.find();
        console.log(productdata);
        res.status(201).json(productdata)
    } catch (error) {
        console.log("error"+error.message);
    }
})


module.exports = router;