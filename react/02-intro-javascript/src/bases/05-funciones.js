const saludar = function(nombre){
    return `Hola, ${nombre}`
}

const saludar2 = (nombre) => {
    return `hola, ${nombre}`
}

const saludar3 = (nombre) =>  `hola, ${nombre}`

console.log(saludar('Goku'))
console.log(saludar2('Vegeta'))
console.log(saludar3('Krillin'))

const getUser = () => (
    {
        uid:'ABC123',
        username:'El_Papi1502'
    }
)

console.log(getUser());
//Tarea
const getUsuarioActivo = (nombre) => ({
    uid:'ABC567',
    username: nombre,
})

const usuarioActivo = getUsuarioActivo('Fernando')
console.log(usuarioActivo);
