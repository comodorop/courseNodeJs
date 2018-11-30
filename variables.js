
var v1 = ''
var v2 = 4
var v3 = false
var v4 = 0.0
const PI = 3.1416
let local = 0
var lstData = []
var lista_datos = []


var objPerro = {}

var objUsuario = {
    user: '',
    pass: '',
    data: [],
    objDatosPersonales: {
        name: '',
        age: 0
    },
    obtenerNombre: function () {
        console.log('este es el metodo de mi objeto')
    }
}



function obtenerNombre(){
    console.log('este es un metodo afuera')
}
objUsuario.objDatosPersonales.name = 'Orlando'
objUsuario.obtenerNombre()
objUsuario.user = 'Hola soy un valor'
console.log(objUsuario.user)
console.log(objUsuario)





obtenerNombre()
