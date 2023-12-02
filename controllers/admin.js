const {Product} = require('../models/product')

exports.getAddProduct = (req,res)=>{
   res.render('admin/add-product' , {
      pageTitle: 'Add-Product',
      path: '/admin/add-product'
   })
}
exports.getAdminProducts = (req,res)=>{
   Product.fetchAll((products)=>{
      res.render('admin/products' , {
         pageTitle : 'Admin Products',
         path:'/admin/products',
         products: products
      })
   })
}

exports.postAddProduct = (req,res)=>{
   const product = new Product(req.body.title)
   product.save()
   res.redirect('/')
}

