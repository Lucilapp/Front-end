import { io } from "socket.io-client";
import { TouchableOpacity, Text, View } from 'react-native';
import { useEffect, useState } from "react";

export default function SocketTest() {
    const [socket, setSocket] = useState(null);
    const [serverConnected, setServerConnected] = useState(false);

    const [stateError, setError] = useState('No hay Error');
    const urlNgrok = "https://cf81-200-73-176-50.ngrok-free.app";
      useEffect(() => {
        try
        {
            const newSocket = io(urlNgrok, { transports : ['websocket'] });
            setSocket(newSocket);

            newSocket.on('connect', () => {
                console.log(newSocket.id);
            });
            newSocket.on('serverConnected', () => {
                setServerConnected(true);
            }) 
            return () => {
                newSocket.disconnect();
            };
        }
        catch (error) {
            console.log(error)
            setError(error.msg)
        }
        
    }, []);
    
    const sendMsgToSocket = (msg = "Hola") => {
        setError('Error')

        try{
            const event = "messageSend";
            const socketId = socket.id;
            const receiver = "a"; // props.ClientSocket;
            socket.emit(event, socketId, msg, receiver);
            }
        catch (error){
            console.log(error);
            setError(error.msg)
        } 
        
    };

    return (
        <>
            <View style={{flex: 1, display: "flex", justifyContent: "center"}}>
                <Text>A</Text>
                <TouchableOpacity onPress={() => sendMsgToSocket()}><Text>Mandar</Text></TouchableOpacity>
                {serverConnected && <Text>Server Responde</Text>}
                <Text>{stateError}</Text>
            </View>
            
        </>
    );


}
