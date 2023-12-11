const Sequelize = require('sequelize');

const sequelize = new Sequelize('nn' , 'root' , '' , {dialect:'mysql' , host:'localhost'})

module.exports = sequelize;