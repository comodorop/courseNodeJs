let execute = require("../Queries/executeQueries")
const Cryptr = require('cryptr')
const cryptr = new Cryptr('secret')

function getUsers() {
  let promise = new Promise((res, rej) => {
    execute.executeSelect("SELECT * FROM users").then(msg => {
	  res(msg)
    })
  })
  return promise;
}

function saveUser (objInfo){
  const encryptedString = cryptr.encrypt(objInfo.pass)
  console.log(encryptedString)
}

module.exports = {
  getUsers,
  saveUser
};
