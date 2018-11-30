const mysql = require('mysql2');

async function connection() {
  return  mysql.createPool({host:'localhost', user: 'root', database: 'capacitacionnodejs', password: ''});
}

module.exports = {
  connection
}
