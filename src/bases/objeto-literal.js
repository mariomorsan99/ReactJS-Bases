//objeto literal
const persona = {
    nombre: 'tony',
    apellido: 'stark',
    edad: 45,
    direccion: {
        ciudad: 'mexico',
        zip: '06060'

    }
}

console.log({ persona });

//spread
const persona2 = {...persona };

persona2.nombre = 'luna'

console.table(persona2);