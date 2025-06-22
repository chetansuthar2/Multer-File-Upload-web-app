const mongoose =require('mongoose')

// mongoose.connect('mongodb://localhost:127.0.0.1:27017/productdb')

 const productSchema=mongoose.Schema({
    name:String,
    price:Number,
    des:String, 
    image:String
});


module.exports=mongoose.model('product',productSchema);


