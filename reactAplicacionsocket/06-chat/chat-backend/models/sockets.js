const { usuarioConectado, usuarioDesconectado, getUsuarios, grabarMensaje } = require("../controllers/sockets");
const { comprobarJWT } = require("../helpers/jwt");


class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', async( socket ) => {
            //obtiene el token del lado del query del lado de la vista
            
            const [valido, uid] = comprobarJWT(socket.handshake.query['x-token'])
            if(!valido){
                console.log('socket no identificado')
                return socket.disconnect();
            }
            console.log('cliente conectado',uid)
            await usuarioConectado(uid)

            //console.log('cliente conectado',uid)

            //Unir al usuario a una sala de socket.io
            socket.join(uid)

            // Todo: Validar el JWT
            // Si el token no es valido, desconectarlo

            //Todo: Saber que usuario esta activo mediante el UID

            //Todo: Emitir todos los usuarios conectados
            this.io.emit('lista-usuarios',await getUsuarios())

            //Todo: Socket join, uid
            //Todo: Escuchar cuando el cliente manda un mensaje
            socket.on('mensaje-personal',async(payload) => {
                const mensaje = await grabarMensaje(payload);
                //enviar mensaje a la sala
                this.io.to(payload.para).emit('mensaje-personal',mensaje)
                //Nos lo regresamos a nosotros para poder obtener el resultado
                this.io.to(payload.de).emit('mensaje-personal',mensaje)
            })
            //mensaje-personal
            
            //Todo: Disconnect
            //Marcar en la bd que el usuario se desconecto

            //Todo: Emitir todos los usuarios conectados
            
            socket.on('disconnect', async() => {
                console.log('Cliente desconectado',uid)
                await usuarioDesconectado(uid)
                //Cuando nos desconectamos haremos que refresque a todos los usuarios
                this.io.emit('lista-usuarios',await getUsuarios())
            })

        });
    }


}


module.exports = Sockets;