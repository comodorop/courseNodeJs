const mysql = require('mysql2')

async function connection() {
  return  mysql.createPool({host: process.env.HOST  , user: process.env.USER, database: process.env.DATA_BASE_NAME, password: process.env.PASSWORD})
}

module.exports = {
  connection
}
