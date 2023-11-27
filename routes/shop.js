const express = require('express');
const { products } = require('./admin');

const path = require('path');

const router = express.Router();

router.get('/' , (req,res)=>{
   console.log(products);
   res.render('shop' , {
      pageTitle:'Shop',
      products:products,
      path:'/'
   });
});

exports.router = router