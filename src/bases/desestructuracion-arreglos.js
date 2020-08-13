const personajes = ['goku', 'vegeta', 'trunks']

const [, , p3] = personajes

console.log(p3)


const retornaArreglo = () => {
    return ['ABC', 123]
}

const [, letras] = retornaArreglo();

console.log(letras)


const useState = (valor) => {
    return [valor, () => { console.log('hola mundo') }];
}

const [nombre, setNombre] = useState('goku')

console.log(nombre);
setNombre();