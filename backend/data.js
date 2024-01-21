const Products = require("./models/productmodel.js")
const productdata =require("./data/productdata");

const data = async()=>{
    try {
        await Products.deleteMany({});
        
        const dataStore = await Products.insertMany(productdata)
        console.log(dataStore)
    } catch (error) {
        console.log("error"+ error.message)
    }
}

module.exports = data;