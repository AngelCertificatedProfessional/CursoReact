

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            // Todo: Validar el JWT
            // Si el token no es valido, desconectarlo

            //Todo: Saber que usuario esta activo mediante el UID

            //Todo: Emitir todos los usuarios conectados

            //Todo: Socket join, uid
        
            //Todo: Escuchar cuando el cliente manda un mensaje
            //mensaje-personal

            //Todo: Disconnect
            //Marcar en la bd que el usuario se desconecto

            //Todo: Emitir todos los usuarios conectados

        });
    }


}


module.exports = Sockets;