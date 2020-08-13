//Desestructuring

const persona = {
    nombre: 'tony',
    edad: 45,
    clave: 'ironman',
    rango: 'Soldado',
    latitud: {
        lat: 2233,
        lng: 5674
    }
}

const { nombre, edad, clave } = persona


const useContext = ({ clave, nombre, edad, rango = 'Cap' }) => {

    return {
        nombreClave: clave,
        anios: 40
    }
}

const { nombreClave, anios } = useContext(persona);

console.log(nombre, anios);