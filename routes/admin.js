const express = require("express");
const path = require('path')

const router = express.Router();

const products = []

router.get('/add-product' , (req,res)=>{
   res.sendFile(path.join(__dirname , '..' , 'views' , 'add-product.html'))
});

router.post('/add-product' , (req,res)=>{
   console.log(req.body.title);
   products.push(req.body)
   res.redirect('/')
});

exports.routes = router
exports.products = products