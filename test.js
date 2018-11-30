
let objConnection = require("./DAOConnection/daoConnection")

async function getInformation() {
    let cn = await objConnection.connection()
    const promisePool = cn.promise();
    const [rows,fields] = await promisePool.query("SELECT * FROM users")
    cn.end()
    return rows
}


getInformation().then(msg => {
    console.log(msg)
})





