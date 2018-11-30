function validate(req, resp, next) {
  if (parseInt(req.headers.ok) === 1) {
    next();
  } else {
    return resp.status(401).send({ msg: "No tienes permisos para acceder" });
  }
}

module.exports = {
  validate
};
