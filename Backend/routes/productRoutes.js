const express=require('express')
const router=express.Router()

const Product=  require('../model/product')
const upload = require('../multer/upload')




router.post('/product', upload.single('image'), async (req, res) => {
  try {
    const { name, price, des } = req.body;

    //! create a product object

    const product = new Product({
      name,
      price,
       des,
      image: req.file?.filename
    });

    

    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to save product." });
  }
});

router.get('/product', async (req, res) => {
  try {
    const products = await Product.find();
    // res.send(products);
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products." });
  }
});

router.get('/product/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    // res.send(product);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product." });
  }
});

module.exports = router;
