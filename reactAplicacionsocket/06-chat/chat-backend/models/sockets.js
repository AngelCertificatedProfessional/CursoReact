

class Sockets {

    constructor( io ) {

        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            console.log('cliente conectado')

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
            
            socket.on('disconnect', () => {
                console.log('Cliente desconectado')
            })

        });
    }


}


module.exports = Sockets;