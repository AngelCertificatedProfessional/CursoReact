import { CounterApp } from "../src/CounterApp"
import { fireEvent, render, screen } from "@testing-library/react"
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

    test('debe de incrementar con el boton +1', () => {
        render(<CounterApp value ={initialValue} />)
        //Generamos un evento click al boton
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy()
    })

    test('debe de decrementar con el boton -1', () => {
        render(<CounterApp value ={initialValue} />)
        //Generamos un evento click al boton
        fireEvent.click(screen.getByText('-1'))
        expect(screen.getByText('9')).toBeTruthy()
    })

    test('debe de functonar el boton de reset',() => {
        render(<CounterApp value={initialValue}/>);
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        //Se hace una impresion del resultado
        // fireEvent.click(screen.getByText('Reset'));
        fireEvent.click(screen.getByRole('button',{name:'btn-reset'}))

        //screen.debug()
        expect(screen.getByText(initialValue)).toBeTruthy();
    })

})