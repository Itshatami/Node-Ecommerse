const Product = require('../models/product')
const {Cart} = require('../models/cart')


exports.getIndex = (req,res)=>{
   Product.findAll()
   .then(products=>{
      res.render('shop/index' , {
         products:products,
         pageTitle:'index' ,
         path:'/'
      })
   })
   .catch(err=>console.log(err))
}

exports.getProducts = (req,res)=>{
   Product.findAll()
   .then(products=>{
      res.render('shop/product-list' , {
         pageTitle:'All Products',
         path:'/products',
         products:products
      })
   })
   .catch(err => console.log(err))
}

exports.getProduct = (req,res)=>{
   const productId = req.params.productId
   Product.findByPk(productId).then(product=>{
      res.render('shop/product-detail' , {
         pageTitle:product.title,
         path:'/products',
         product: product
      })
   }).catch(err=>console.log(err))
}

exports.getCart = (req,res)=>{
   Cart.getCart(cart =>{
      Product.fetchAll(products=>{
         res.render('shop/cart' , {
            pageTitle: 'Cart',
            path: '/cart'
         })
      })
   })
}

exports.postCart = (req,res)=>{
   const productId = req.body.productId;
   Product.findById(productId , (product)=>{
   Cart.addProduct(productId , product.price )
   })
   res.redirect('/cart')
}

exports.getOrders = (req,res)=>{
   res.render('shop/orders' , {
      path:'/orders',
      pageTitle:'Orders',
   })
}

exports.getCheckout = (req,res)=>{
   res.render('shop/checkout' , {
      pageTitle: 'Checkout',
      path:'/cart'
   })
}