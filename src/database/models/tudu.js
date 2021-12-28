const Sequelize = require('sequelize');
const database = require('../db');

const Tudu = database.define('Tudus', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  textTudu: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Tudu;