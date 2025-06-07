const mongoose=require("mongoose");
const productSchema=mongoose.Schema({
    productName:String,
    category:String,
    price:Number,
    rating:Number
});
const productData=mongoose.model("product",productSchema);
module.exports=productData;
