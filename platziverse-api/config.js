'use strict'

const debug = require('debug')('platziverse:api:db')
const Sequelize = require('sequelize')

module.exports = {
  db: {
    database: process.env.DB_NAME || 'platziverse'
    /*  username: process.env.DB_USER || 'postgres',
    password: process.env.DB_PASS || 'toor',
    host: process.env.DB_HOST || 'localhost',
    dialect: 'postgres',
    logging: s => debug(s),
    operatorsAliases: Sequelize.Op */
  }
}
