const Sequelize = require('sequelize');

const sequelize = new Sequelize('store' , 'root' , '' , {
   host:'localhost',
   dialect:'mysql'
})

module.exports = sequelize;