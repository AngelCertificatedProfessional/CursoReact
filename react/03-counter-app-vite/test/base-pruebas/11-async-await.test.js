import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('Pruebas en 11-async-await.test',() => {
    test('getImage debe de retornar un URL de la imagen', async() => {
        const resp = await getImagen();
        console.log(resp)
        expect(typeof resp).toBe('string')
    })
})