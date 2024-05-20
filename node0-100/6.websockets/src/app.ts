import { WebSocketServer, WebSocket } from 'ws';

const wss = new WebSocketServer({ port: 8097 });

wss.on('connection', function connection(ws) {
    console.log('client connected')
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {



        const payload = JSON.stringify({
            type: 'custom-payload',
            payload: data.toString()
        })

        // ws.send(JSON.stringify(payload))
        //todos incluyente
        // wss.clients.forEach(function each(client) {
        //     if (client.readyState === WebSocket.OPEN) {
        //         client.send(payload, { binary: false });
        //     }
        // });
        //todos excluyentes
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(payload, { binary: false });
            }
        });

    });

    // ws.send('hola desde el servidor!');

    ws.on('close', () => {
        console.log('Client disconnected')
    })



});


console.log('ws://localhost:8097')