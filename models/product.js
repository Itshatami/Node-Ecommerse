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
   constructor(title){
      this.title = title
   }

   save(){
         getFileFromProducts(products =>{
            products.push(this)
            fs.writeFile(p , JSON.stringify(products) , (err)=>{
               console.log(err);
            })
         });
   }

   static fetchAll(cd){
      getFileFromProducts(cd)
   }
}