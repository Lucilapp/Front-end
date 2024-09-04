import { io } from "socket.io-client";
import { TouchableOpacity, Text } from 'react-native';
import { useEffect, useState } from "react";

export default function SocketTest() {
    const [socket, setSocket] = useState(null);
    const [serverConnected, setServerConnected] = useState(false);
    useEffect(() => {
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);

        // Manejar la conexión
        newSocket.on('connect', () => {
            console.log(newSocket.id);
        });
        newSocket.on('serverConnected', () => {
            setServerConnected(true);
        }) 
        // Limpiar la instancia del socket cuando el componente se desmonte
        return () => {
            newSocket.disconnect();
        };
    }, []); // El array vacío asegura que este efecto solo se ejecute una vez
    
    const sendMsgToSocket = (msg = "Hola") => {
        if (socket) {
            const event = "messageSend";
            const socketId = socket.id;
            const receiver = "a"; // props.ClientSocket;

            socket.emit(event, socketId, msg, receiver);
        }
    };

    return (
        <>
            <Text>A</Text>
            <TouchableOpacity onPress={() => sendMsgToSocket()}><Text>Mandar</Text></TouchableOpacity>
            {serverConnected && <Text>Server Responde</Text>}
        </>
    );
}
