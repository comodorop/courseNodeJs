let objConnection = require("../DAOConnection/daoConnection");

async function executeSelect(sql) {
    let cn = await objConnection.connection()
    const promisePool = cn.promise();
    const [rows,fields] = await promisePool.query(sql)
    cn.end()
    return rows
}

async function executeInsert(sql) {
    let cn = await objConnection.connection()
    const promisePool = cn.promise();
    const [rows,fields] = await promisePool.query(sql)
    cn.end()
    return rows
}

module.exports = {
    executeSelect,
    executeInsert
}