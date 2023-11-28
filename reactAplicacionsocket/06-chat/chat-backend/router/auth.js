const {Router} = require('express');
//Controladores
const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
// const io = this.socket;
router.post('/new',[
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').isEmail(),
    validarCampos
],
// async (req, res) => {
//     await crearUsuario(req, res, io); // Pasando io directamente a la función crearUsuario
// }
crearUsuario
)

//Login
router.post('/',[
    check('email','El email es obligatorio').isEmail(),
    check('password','El password es obligatorio').not().isEmpty(),
    validarCampos
],
login)

//Revalidar Token
router.post('/renew',[
    validarJWT
],renewToken)


module.exports = router