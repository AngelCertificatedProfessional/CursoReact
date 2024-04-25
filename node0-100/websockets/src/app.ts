import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8097 });

wss.on('connection', function connection(ws) {
    console.log('client connected')
    ws.on('error', console.error);

    ws.on('message', function message(data, isBinary) {
        console.log('received: %s', data);


        const payload = {
            type: 'custom-payload',
            payload: data.toString()
        }

        ws.send(JSON.stringify(payload))
    });

    // ws.send('hola desde el servidor!');

    ws.on('close', () => {
        console.log('Client disconnected')
    })



});


console.log('ws://localhost:8097')