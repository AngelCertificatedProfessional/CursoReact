const express = require("express")
require('dotenv').config();
const {dbConnection} = require('./database/config')
const cors = require("cors");
// Crear el servidor de express

const app = express();

//Base de datos
dbConnection()

//Escuchar peticiones

// CORS
app.use(cors())

//Directorio publico
app.use(express.static('public')); //midleware

//Lectura y parseo del body
app.use(express.json())

//Rutas
app.use('/api/auth',require('./routes/auth'));
app.use('/api/events',require('./routes/events'));
//Todo: CRUD: Eventos

app.get('*',(req,res)=> {
    res.sendFile(__dirname+'/public/index.html');
})

app.listen(process.env.PORT,() => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
})