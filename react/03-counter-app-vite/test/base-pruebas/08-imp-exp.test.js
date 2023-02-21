import {getHeroeById,getHeroesByOwner} from '../../src/base-pruebas/08-imp-exp'
import {heroes} from '../../src/data/heroes';
describe('pruebas en 08-imp-exp', () => {
    test('getHeroeByIdf debe de retornar un heroe por ID', () => {
        const id = 100;
        const hero = getHeroeById(id);
        console.log(hero)
        expect(hero).toBeFalsy();
        // expect(hero).toEqual({id:1,name:'Batman',owner: 'DC'})
        // expect(hero).toEqual({id:1,name:'Yami',owner: 'DC'})
        // expect(hero).toEqual({id: 3,name: 'Superman',owner: 'DC'})
    })
    test('getHeroesByOwner debe de retornar heroes de DC', () => {
        const arrHeroDC = getHeroesByOwner('DC');
        expect(arrHeroDC.length).toBe(3)
        expect(arrHeroDC).toEqual([{"id": 1,"name": 'Batman',"owner": 'DC'},{"id": 3, "name": 'Superman',"owner": 'DC'},{"id": 4,"name": 'Flash',"owner": 'DC'}])
        expect(arrHeroDC).toEqual(heroes.filter( (heroe) => heroe.owner === 'DC'))

        
        const arrHeroMarvel = getHeroesByOwner('Marvel');
        expect(arrHeroMarvel.length).toBe(2)
    })

    test('getHeroesByOwner debe de retornar heroes de Marvel', () => {
        const arrHeroMarvel = getHeroesByOwner('Marvel');
        expect(arrHeroMarvel.length).toBe(2)
    })
})