let express = require("express")
let app = express()
let router = express.Router()
let objUsers = require("./DAOUsers/daoUsers")
const midleware = require('./middleware/index')
const webHook = require('./middleware/webHook')
const webHookLast = require('./middleware/webHookLast')

app.use(midleware.validate)

router.get("/v1/user", webHook.webHook, async(req, resp) => {
  objUsers.getUsers().then(msg => {
    resp.status(200).send({ msg: "Informacion", data: msg})
  }).catch(err =>{
		console.log(err)
	})
})

router.get("/v1/user2", async (req, resp) => {
  objUsers.getUsers().then(msg => {
    resp.status(200).send({ msg: "Informacion", data: msg})
  }).catch(err =>{
		console.log(err)
	})
})

app.use(webHookLast.webHook)
app.use("/api", router);
app.listen("5123", () => {
  console.log("Servidor iniciado correctamente");
});
