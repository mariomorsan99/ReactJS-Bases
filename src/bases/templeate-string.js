const nombre = 'airy'

const apellido = 'herrera'

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto)

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log(`este es un saludo ${getSaludo(nombre)}`)