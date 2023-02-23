import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp />', () => {

    const title = 'Hola, Soy Goku'

    test('Debe de hacer match con el snapshot',() => {
        const {container} = render(<FirstApp title={title}/>)
        expect(containser).toMatchSnapshot()
    })
})