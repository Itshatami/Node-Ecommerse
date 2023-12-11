const db = require('../util/db')

const {Cart} = require('./cart')
exports.Product = class Product {
   constructor( title  , price, description, imageUrl){
      this.title = title
      this.price = price
      this.description = description
      this.imageUrl = imageUrl
   }

   save(){
      return db.execute('INSERT INTO products (title , price , description , imageUrl) VALUES (? , ? , ? , ?)' 
      , [this.title , this.price , this.description, this.imageUrl])
   }

   static deleteById(id){}

   static fetchAll(){
      return db.execute('SELECT * FROM products');
   }

   static findById(id , cb){
      return db.execute('SELECT * FROM products where products.id = ?' , [id])
   }
}