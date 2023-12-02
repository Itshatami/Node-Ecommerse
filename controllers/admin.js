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
   const title = req.body.title;
   const imageUrl = req.body.imageUrl;
   const price = req.body.price;
   const discription = req.body.discription;
   const product = new Product(title , imageUrl , price , discription)
   product.save()
   res.redirect('/')
}

