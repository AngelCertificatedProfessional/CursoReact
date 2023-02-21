import {getHeroeByIdAsync} from '../../src/base-pruebas/09-promesas'
import {heroes} from '../../src/data/heroes';
describe('pruebas en 09-promesas', () => {
    test('getHeroeByIdAsync debe de retornar un heroe', (done) => {
        const id = 1;
        getHeroeByIdAsync(id).then( hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });
            done();
        })
    })
    test('getHeroeByIdAsync debe de tener un error si heroe no existe', (done) => {
        const id = 100;
        getHeroeByIdAsync(id)
        .then(hero => {
            expect(hero).toBeFalsy();
            done()})
        .catch( error => {
            expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
            done();
        })
    })
})