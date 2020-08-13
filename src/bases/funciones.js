//Funciones

const saludar = function(nombre) {
    return `hola ${nombre}`
}


const saludar2 = (nombre) => {
    return `hola ${nombre}`
};


const saludar3 = (nombre) => `hola ${nombre}`;

const saludar4 = () => `hola`;


console.log(saludar)

console.log(saludar2('vegeta'))

console.log(saludar3('goku'))

console.log(saludar4());


const getUser = () => {
    return {
        uid: '233dfgg',
        username: 'El Pape'
    }
}


const getUser2 = () => ({
    uid: '233dfgg',
    username: 'El Pape'
})



console.log(getUser());

console.log(getUser2());



const getUsuarioActivo = (nombre) => ({
    uid: 'ADDFF2344',
    username: nombre
})



const userActive = getUsuarioActivo('nurina')

console.log(userActive);