const {Product} = require('../models/product')

exports.getIndex = (req,res)=>{
   Product.fetchAll((products)=>{
      res.render('shop/index' , {
         pageTitle:'Shop',
         products:products,
         path:'/'
      });
   });
}

exports.getProducts = (req,res)=>{
   Product.fetchAll((products)=>{
      res.render('shop/product-list' , {
         pageTitle:'All Products',
         products:products,
         path:'/products'
      });
   });
}

exports.getCart = (req,res)=>{
   res.render('shop/cart' , {
      pageTitle: 'Cart',
      path: '/cart'
   })
}

exports.getCheckout = (req,res)=>{
   res.render('shop/checkout' , {
      pageTitle: 'Checkout',
      path:'/cart'
   })
}