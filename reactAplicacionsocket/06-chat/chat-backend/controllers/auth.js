const {response} = require('express')

const crearUsuario = async(req,res = response) => {
    res.json({
        ok:true,
        usuario:'ABC'
    })
}

const login = async(req,res = response) => {
    res.json({
        ok:true,
        usuario:'ABC'
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