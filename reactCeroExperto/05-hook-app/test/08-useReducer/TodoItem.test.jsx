import { TodoItem } from "../../src/08-useReducer/TodoItem";
import { fireEvent,render, screen } from "@testing-library/react"
describe('Pruebas en <TodoItem>',() =>{
   
    const todo = {
        id:1,
        description: 'Pieda del Alma',
        done:false
    }
 
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    //limpia mis jest de pruebas
    beforeEach(() => jest.clearAllMocks());


    test('debe de mostrar el Todo pendiente de completar', () => { 
        render(<TodoItem 
            todo={todo} 
            onToggleTodo= {onToggleTodoMock} 
            onDeleteTodo = {onDeleteTodoMock}/>)

        const liElement = screen.getByRole('listitem')
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center')

    })


    test('debe de mostrar el componente completado', () => { 

        todo.done = true;
        render(<TodoItem 
            todo={todo} 
            onToggleTodo= {onToggleTodoMock} 
            onDeleteTodo = {onDeleteTodoMock}/>)

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('text-decoration-line-through')
    })

    test('span dene de llamar el toggletodo cuando se hace click', () => { 

        render(<TodoItem 
            todo={todo} 
            onToggleTodo= {onToggleTodoMock} 
            onDeleteTodo = {onDeleteTodoMock}/>)

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement)
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
    })

    test('button dene de llamar el deleteodo', () => { 

        render(<TodoItem 
            todo={todo} 
            onToggleTodo= {onToggleTodoMock} 
            onDeleteTodo = {onDeleteTodoMock}/>)

        const deleteButton = screen.getByRole('button');
        fireEvent.click(deleteButton)
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
    })
})