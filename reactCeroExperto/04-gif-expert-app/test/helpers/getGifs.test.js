import { getGifs } from "../../src/helpers/getGifs";
import { render, screen } from "@testing-library/react"
describe('Pruebas en getGifs',() => {
    test('debe de retornar un arreglo de gids', async() => {
        const gifs = await getGifs('One Punch')
        //Evaluamos el tamano del arreglo que sea mayor a cero
        expect(gifs.length).toBeGreaterThan(0);
        //Evaluamos los tipos de caracteres en el json
        expect(gifs[0]).toEqual({
            id:expect.any(String),
            title:expect.any(String),
            url:expect.any(String),
        })
    })
})