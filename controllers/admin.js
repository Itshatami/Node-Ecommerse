const Product = require('../models/product')

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
   updatedProduct.save();
   res.redirect('/admin/products')
}

exports.postAddProduct = (req,res)=>{
   const title = req.body.title;
   const price = req.body.price;
   const imageUrl = req.body.imageUrl;
   const description = req.body.description;
   Product.create({
      title:title,
      imageUrl:imageUrl,
      price:price,
      description:description
   }).then(res=>{
      console.log(res);
   }).catch(err=>{
      console.log(err);
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

exports.postDeleteProduct = (req,res)=>{
   const productId = req.body.productId;
   Product.deleteById(productId)
   res.redirect('/admin/products')
}
