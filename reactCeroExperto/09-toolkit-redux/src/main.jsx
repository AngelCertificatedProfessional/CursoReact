import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './store'
import { PokemonApp } from './PokemonApp'
import { TodoApp } from './TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Estructura del redux */}
    <Provider store={store}> 
      {/* <App /> */}
      {/* <PokemonApp/> */}
      <TodoApp/>
    </Provider>
  </React.StrictMode>,
)
