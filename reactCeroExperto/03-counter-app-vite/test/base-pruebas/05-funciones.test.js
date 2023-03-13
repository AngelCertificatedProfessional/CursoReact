import {getUser,getUsuarioActivo} from '../../src/base-pruebas/05-funciones'

describe('pruebas en 05-template-string',() => {
    test('getUser debe de retornar un objeto',() => {
      const testUser = {
        uid: 'ABC123',
        username:'El_Papi1502'
      }

      const user = getUser();

      expect(testUser).toEqual(user)

      console.log(user)
    });

    test('getUsuarioActivo debe de retornar un objeto',() => {
      
      const nombre = "El_Papi1502"
      const user = getUsuarioActivo(nombre);

      expect(user).toEqual({
        uid: 'ABC567',
        username:nombre
      })

      console.log(user)
    });

})