const fs  = require('fs')
const path = require('path')

const p = path.join(__dirname , '..' , 'data' , 'cart.json')

exports.Cart = class Cart{

   static addProduct(id , productPrice){
      // fetch the previous products
      fs.readFile(p , (err , fileContent)=>{
         let cart = {products:[] , totalPrice:0}
         if(!err){
            cart = JSON.parse(fileContent)
         }
         // analyze the cart => find existing product
         const existingProductIndex = cart.products.findIndex(p => p.id ===id);
         const existingProduct = cart.products[existingProductIndex]
         let updatedProduct;
         // add new product / increase quantity
         if(existingProduct){
            updatedProduct = {...existingProduct}
            updatedProduct.qty += 1
            cart.products = [...cart.products];
            cart.products[existingProduct] = updatedProduct;
         } else{
            updatedProduct = {id:id , qty:1}
            cart.products = [...cart.products , updatedProduct]
         }
         cart.totalPrice += +productPrice;
         fs.writeFile(p ,JSON.stringify(cart) , err=>{
            console.log(err);
         })
      })
   }
}