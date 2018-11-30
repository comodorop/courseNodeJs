
function webHook(req, resp, next){
    if(parseInt(req.headers.permisos)=== 1){
        next()
    }else{
        return resp.status(401).send({msg:'No tienes los privilegios de acceso'})
    }
}



module.exports = {
    webHook
}