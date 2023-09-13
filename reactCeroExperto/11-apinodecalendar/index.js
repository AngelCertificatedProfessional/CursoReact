const express = require("express")
require('dotenv').config();
const {dbConnection} = require('./database/config')

// Crear el servidor de express

const app = express();

//Base de datos
dbConnection()

//Escuchar peticiones

//Directorio publico
app.use(express.static('public')); //midleware

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/auth',require('./routes/auth'));
//Todo: CRUD: Eventos

app.listen(process.env.PORT,() => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})