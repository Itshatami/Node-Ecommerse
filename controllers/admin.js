const {Product} = require('../models/product')

exports.getAddProduct = (req,res)=>{
   res.render('admin/edit-product' , {
      pageTitle: 'Add-Product',
      path: '/admin/add-product',
      editing:false
   })
}

exports.getEditProduct = (req,res)=>{
   const editMode = req.query.edit;
   if(!editMode){
      return  res.redirect('/')
   }
   const productId = req.params.productId
   Product.findById(productId , product =>{
      if(!product){
         return res.redirect('/')
      }
      res.render('admin/edit-product' , {
      pageTitle: 'Add-Product',
      path: '/admin/edit-product',
      editing:editMode,
      product:product
      })
   })
}

exports.postEditProduct = (req,res)=>{
   const productId = req.body.productId
   const updatedTitle = req.body.title
   const updatedImageUrl = req.body.imageUrl
   const updatedPrice = req.body.price
   const updatedDescription = req.body.description
   const updatedProduct = new Product(productId , updatedTitle , updatedImageUrl , updatedPrice , updatedDescription)
   console.log(updatedProduct);
   updatedProduct.save();
   res.redirect('/admin/products')
}

exports.postAddProduct = (req,res)=>{
   const title = req.body.title;
   const imageUrl = req.body.imageUrl;
   const price = req.body.price;
   const description = req.body.description;
   const product = new Product(null ,title , imageUrl , price , description)
   product.save()
   res.redirect('/')
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
