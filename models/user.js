const {Sequelize , DataTypes, INTEGER} = require('sequelize')
const sequelize = require('../util/db')

const User = sequelize.define('user' , {
   id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true,
      allowNull:false
   },
   name:{
      type:DataTypes.STRING,
      allowNull:false,
   },
   email:{
      type:DataTypes.STRING,
      allowNull:false
   }
})

module.exports = User;