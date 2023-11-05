import React from 'react'
import ReactDOM from 'react-dom/client'
import {ChatApp} from './ChatApp.jsx'
import './index.css'
import { BrowserRouter} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <ChatApp />
    </React.StrictMode>,
  </BrowserRouter>

)
