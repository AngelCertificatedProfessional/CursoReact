import { useEffect, useReducer } from "react";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";

const initialState = [

]

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  
  const [todos, dispatchTodo] = useReducer(todoReducer,initialState,init)
  
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    }
    console.log(todo)
    dispatchTodo(action)
  }

  return (
    <>
      <h1>
        TodoApp 
        <small>
          Pendientes:   
        </small>
      </h1>

      <div className="row">
        <div className="col-7">
          <TodoList todos={todos}/>
        </div>

        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr/>
          <TodoAdd onNewTodo = {handleNewTodo}/>
        </div>
      </div>
    </>
  )
}