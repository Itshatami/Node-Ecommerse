const products = [];

exports.product = class Product {
   constructor(title){
      this.title = title
   }

   save(){
      products.push(this)
   }

   fetchAll(){
      return products
   }
}