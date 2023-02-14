import { getHeroeById } from "./bases/09-ImportParte2";

// const promesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         // console.log('2 segundos despues')
//         console.log('heroe')
//         const heroe = getHeroeById(2);
//         console.log(heroe)
//         resolve(heroe)
//         //Tarea
//     },2000)
// });

// promesa.then((heroe) => {
//     console.log('Heroe',heroe)
// }).catch(err => console.warm(err))

const getHeroByIdAsync = (id) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            // console.log('2 segundos despues')
            const heroe = getHeroeById(id);
            if(heroe !== undefined){
                resolve(heroe)
            }else{
                reject('No se pudo encontrar el heroe')
            }
            //Tarea
        },2000)
    });
}

getHeroByIdAsync(3)
    .then(console.log)
    .catch(console.warn)