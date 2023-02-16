import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './HelloWordApp'
import {FirstApp} from './FirstApp'
import './styles.css'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title = "Hola soy Goku" subTitle={123}/>
    </React.StrictMode>
)