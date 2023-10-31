const {response} = require('express')
const bcrypt = require('bcryptjs')
const Usuario = require('../models/usuario')

const crearUsuario = async(req,res = response) => {

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
        res.json({
            ok:true,
            usuario
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            ok:false,
            msg: 'hable con el administrador'
        })
    }


}

const login = async(req,res = response) => {
    const {email,password} = req.body
    res.json({
        ok:true,
        usuario:'ABC',
        email,
        password
    })
}

const renewToken = async(req,res = response) => {
    res.json({
        ok:true,
        usuario:'ABC'
    })
}

module.exports = {
    crearUsuario,
    login,
    renewToken
}