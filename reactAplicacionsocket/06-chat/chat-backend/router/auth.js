const {Router} = require('express');
//Controladores
const { crearUsuario, login, renewToken } = require('../controllers/auth');

const router = Router();

router.post('/new',crearUsuario)

//Login
router.post('/',login)

//Revalidar Token
router.post('/renew',renewToken)


module.exports = router