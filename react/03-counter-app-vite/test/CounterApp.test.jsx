import { CounterApp } from "../src/CounterApp"
import { render, screen } from "@testing-library/react"
describe('Pruebas en <CounterApp />', () => {

    const initialValue = 10

    test('Debe de hacer match con el snapshot',() => {
        const {container} = render(<CounterApp value={initialValue}/>)
        expect(container).toMatchSnapshot()
    })

    test('Debe de mostrar el valor inicial de 100 <CounperApp value = {100}>',() => {
        render(<CounterApp value={100}/>)
        expect(screen.getByText(100)).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100')
    })
})