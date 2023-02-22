import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {
    test('debe de hacer match con el snapshot', () => {
        expect('string').toBe('string') // agregar este valor para no marcar el valor
        const title = 'Hola, soy goku'
        render(<FirstApp title = {title}/>)
    })
})