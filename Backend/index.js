 const express= require('express')

 const mongoose=require('mongoose')
const cors=require('cors')

 const app = express()
 app.use(cors());
app.use(express.json());

app.use('/uploads',express.static('uploads'))

const productRoutes= require('./routes/productRoutes')
app.use('/api', productRoutes);


 mongoose.connect('mongodb://localhost:27017/produnctdb')
 .then(() => {
     console.log("Connected to MongoDB");
 }) .catch(err => {
     console.error("Error connecting to MongoDB:", err);
 });


 app.get("/",(req,res)=>{
    console.log("hellopooooo");
    

 })

 

 app.listen(3000,()=>{
     console.log("Server is running on port 3000")
 });


  

 




