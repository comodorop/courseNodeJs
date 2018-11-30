
function webHook(req, resp, next){
    console.log('Web hook al final')
    next()
}



module.exports = {
    webHook
}