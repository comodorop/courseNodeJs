require("dotenv").config();
const jwt = require("jsonwebtoken");
let express = require("express");
let app = express();
let router = express.Router();
const bodyParser = require("body-parser");
let objUsers = require("./DAOUsers/daoUsers");
const midleware = require("./middleware/index");
const webHook = require("./middleware/webHook");
const webHookLast = require("./middleware/webHookLast");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(midleware.validate)

router.get("/v1/user", webHook.webHook, async (req, resp) => {
  objUsers
    .getUsers()
    .then(msg => {
      resp
        .status(200)
        .send({ msg: "Informacion", data: msg, host: process.env.HOST });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/v1/user2", async (req, resp) => {
  objUsers
    .getUsers()
    .then(msg => {
      resp.status(200).send({ msg: "Informacion", data: msg });
    })
    .catch(err => {
      console.log(err);
    });
});

router.post("/v1/user/", (req, resp) => {
  let objInfo = req.body;
  objUsers.saveUser(objInfo);
  resp.send(201).send({ status: 200, msg: "Pass encriptada" });
});

router.post("/v1/access", (req, resp) => {
  let infoBody = req.body;
  if (infoBody.user === "") {
    return resp.status(401).send({ msg: "Se requiere un nombre" });
  } else {
    let token = jwt.sign(
      {
        user: infoBody.user,
        comapany: infoBody.company,
        employee: infoBody.employee
      },
      process.env.PRIVATE_KEY
    );
    jwt.verify(token, process.env.PRIVATE_KEY, function(err, decoded) {
      console.log(decoded);
    });
    resp.status(200).send(token);
  }
});

router.put("/v1/user", (req, resp) => {});

app.use(webHookLast.webHook);

app.use("/api", router);

app.listen(process.env.PORT, () => {
  console.log(`Servidor iniciado correctamente ${process.env.PORT}`);
});
