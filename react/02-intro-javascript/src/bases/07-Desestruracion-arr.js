const personajes = ['goku','vegeta','trunks']

const [,p2] = personajes;

console.log(p2);
// console.log(personajes[1]);
// console.log(personajes[2]);

const retornaArreglo = () => {
    return ['ABC',123]
}

const [letras,numeros] = retornaArreglo()
console.log(letras,numeros)

const usarState = (valor) => {
    return [valor, () =>{ console.log('Hola mundo')}];
}

const [nombre,setNombre] = usarState('Angel');
console.log(/*----------*/);
console.log(nombre);
setNombre();