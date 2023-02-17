import React from 'react';
import {createRoot} from 'react-dom/client';
import {App} from './HelloWordApp'
import {FirstApp} from './FirstApp'
import {CounterApp} from './CounterApp'
import './styles.css'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={100}/>
    </React.StrictMode>
)