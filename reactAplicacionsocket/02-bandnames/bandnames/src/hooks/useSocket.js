import { useMemo,useEffect,useState } from 'react';
import io from 'socket.io-client'
export const useSocket = (serverPath) => {
    //Se usa el use memo para asegurarnos que no se volvera a cargar el socket a menos 
    //que el serverPath se vuelva a ejecutar 
    const socket = useMemo(() => io.connect(serverPath,{
        transports:['websocket']
    }),[serverPath]);
    const [online,setOnline] = useState(false);

    useEffect(() => {
        console.log('entre connected')
        setOnline(socket.connected)
      },[socket])
    
    useEffect(() => {
    console.log('entre connect')
    socket.on('connect', () => {
        setOnline(true)
    })
    },[socket])

    useEffect(() => {
    console.log('entre disconnect')
    socket.on('disconnect', () => {
        setOnline(false)
    })
    },[socket])

    return {
        socket,
        online
    }
}