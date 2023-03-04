import { AddCategory } from "../../src/components/AddCategory"
import { render, screen,fireEvent } from "@testing-library/react"
describe('Pruebas en <AddCategory>',() => {
    test('debe de cambiar el valor de la caja de texto',() => {
        render(<AddCategory onNewCategory={() => {}}/>)
        const input = screen.getByRole('textbox');
        fireEvent.input(input,{target:{value:'Saitama'}})
        expect(input.value).toBe('Saitama')
    })

    test('debe de llamar onNewCategory si el input tiene un valor',() => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        //TODO: ???? 
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form');
        fireEvent.input(input,{target:{value:inputValue}})
        fireEvent.submit(form);
        expect(input.value).toBe('')
        //sirve para detectar si la funcion es llamada
        expect(onNewCategory).toHaveBeenCalled();
        //ayuda a detectar cuantas veces a sido llamada una funcion
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        //ayuda a detectar si la funcion fue llamada con el valor de inputValue
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
        
    })

    test('no debe de llamar onNewCategory si el input esta vacio',() => {
        const onNewCategory = jest.fn();
        //TODO: ???? 
        render(<AddCategory onNewCategory={onNewCategory}/>)

        const form = screen.getByRole('form');
        fireEvent.submit(form);
        //ayuda a detectar cuantas veces a sido llamada una funcion
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        //sirve para detectar si la funcion es llamada
        expect(onNewCategory).not.toHaveBeenCalled();
        
    })
})