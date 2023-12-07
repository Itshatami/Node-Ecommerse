const fs = require('fs')
const path = require('path')

const p = path.join(__dirname , '..' , 'data' , 'products.json');

const getFileFromProducts = cd =>{
   fs.readFile(p , (err , data)=>{
      if(err){
         cd([]);
      }else{
         cd(JSON.parse(data));
      }
   })
}
exports.Product = class Product {
   constructor(id ,title , imageUrl , price, description){
      this.id = id;
      this.title = title
      this.imageUrl = imageUrl
      this.price = price
      this.description = description
   }

   save(){
      getFileFromProducts(products =>{
         if(this.id){
            const existingProductIndex = products.findIndex(p => p.id === this.id);
            const updatedProduct = [...products];
            updatedProduct[existingProductIndex] = this; 
            fs.writeFile(p , JSON.stringify(updatedProduct) , (err)=>{
               console.log(err);
            })
         }else{
            this.id = Math.random().toString()
            products.push(this)
            fs.writeFile(p , JSON.stringify(products) , (err)=>{
               console.log(err);
            })
         }
         });
   }

   static fetchAll(cd){
      getFileFromProducts(cd)
   }

   static findById(id , cb){
      getFileFromProducts(products=>{
         const product = products.find(p => p.id ===id);
         cb(product)
      })
   }
}