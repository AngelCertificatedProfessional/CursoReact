const {response} = require('express')
const bcrypt = require('bcryptjs')
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');

const crearUsuario = async(req,res = response) => { //(req, res = response, io)

    try{
        const {email,password} = req.body;

        const existeEmail = await Usuario.findOne({email})

        if(existeEmail){
            return res.status(400).json({
                ok:false,
                msg:'El correo ya existe'
            })
        }

        const usuario = new Usuario(req.body)
        //Encriptar contrasena
        const salt = bcrypt.genSaltSync()
        usuario.password = bcrypt.hashSync(password,salt);
        //Guardar usuario en BD
        await usuario.save()

        const token = await generarJWT(usuario.id);

        // if (/* alguna condición */) {
        //     await this.sockets.metodoDeSockets(); // Reemplaza 'metodoDeSockets' por el método que quieras llamar
        // }
        //io.emit('evento', data); // Reemplaza 'evento' por el nombre del evento que quieres emitir y 'data' con la información que deseas enviar
        res.json({
            ok:true,
            usuario,
            token
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'hable con el administrador'
        })
    }
}

//para la funcionalidad del websocket
// const withIO = (io) => {
//     return async (req, res) => {
//         await crearUsuario(req, res, io);
//     };
// };

const login = async(req,res = response) => {
    const {email,password} = req.body
    try{

        const usuarioDB = await Usuario.findOne({email});
        if(!usuarioDB){
            return res.status(404).json({
                ok:false,
                msg:'Email no encontrado'
            })
        }

        //Validar el password
        const validPassword = bcrypt.compareSync(password,usuarioDB.password)

        if(!validPassword){
            return res.status(400).json({
                ok:false,
                msg:'Password no es correcto'
            })
        }

        //Generar el jwt
        const token = await generarJWT(usuarioDB._id)

        res.json({
            ok:true,
            usuario:usuarioDB,
            token
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'hable con el administrador'
        })
    }
}

const renewToken = async(req,res = response) => {

    const uid = req.uid;
    //generar un nuevo JWT
    const token = await generarJWT(uid);

    // Obtener el usuario por UID

    const usuario = await Usuario.findById(uid);

    res.json({
        ok:true,
        usuario,
        token
    })
}

module.exports = {
    crearUsuario,
    login,
    renewToken
}