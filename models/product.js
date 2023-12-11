const {Sequelize , DataTypes} = require('sequelize');

const sequelize = require('../util/db');

const Product = sequelize.define('product' , {
   id:{
      type:DataTypes.INTEGER,
      autoIncrement:true,
      allowNull:false,
      primaryKey:true
   },
   title:{
      type:DataTypes.STRING,
      allowNull:false
   },
   imageUrl:{
      type:DataTypes.STRING,
      allowNull:false
   },
   price:{
      type:DataTypes.FLOAT,
      allowNull:false
   },
   description:{
      type:DataTypes.STRING,
      allowNull:false
   }
})

module.exports = Product;