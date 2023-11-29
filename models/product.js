const fs = require('fs')
const path = require('path')
exports.Product = class Product {
   constructor(title){
      this.title = title
   }

   save(){
      const p = path.join(__dirname , '..' , 'data' , 'products.json');
      fs.readFile(p , (err , data)=>{
         let products = []
         if(!err){
            products = JSON.parse(data);
         }
         products.push(this)
         fs.writeFile(p , JSON.stringify(products) , (err)=>{
            console.log(err);
         })
      })
   }

   static fetchAll(cd){
      const p = path.join(__dirname , '..' , 'data' , 'products.json');
      fs.readFile(p , (err , data)=>{
         if(err){
            cd([]);
         }else{
            cd(JSON.parse(data));
         }
      })
   }
}