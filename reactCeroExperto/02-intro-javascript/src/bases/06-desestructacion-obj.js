const persona = {
    nombre: 'Tony',
    edad:45,
    clave:'IronMan',
    rango:'Soldado'
}

// const {nombre,edad,clave} = persona;

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

// console.log(nombre)
// console.log(edad)
// console.log(clave)

const userContext = ({clave,edad,rango = 'Capitan'}) => {
    // console.log(nombre,edad,rango)
    return {
        nombreClave:clave,
        anios:edad,
        latlng:{
            lat:14.355,
            lng:-12.5453
        }
    }

}

const {nombreClave,anios,latlng:{lat,lng}} = userContext(persona)
console.log(nombreClave,anios)
console.log(lat,lng)