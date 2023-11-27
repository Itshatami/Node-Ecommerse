const express = require('express');
const { products } = require('./admin');

const path = require('path');

const router = express.Router();

router.get('/' , (req,res)=>{
   res.sendFile(path.join(__dirname , '..' , 'views' , 'shop.html'));
});

exports.router = router