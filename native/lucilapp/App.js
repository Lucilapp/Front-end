import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/app/screens/index';
import { NavigationContainer } from '@react-navigation/native';
import ChatScreen from './src/app/screens/chat/[chat]';
import SocketTest from './src/app/screens/socketTest/socketTest';
import TaskScreen from './src/app/screens/task/[category]';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {io} from "socket.io-client";
import { useState, useEffect } from 'react';

const Stack = createNativeStackNavigator();

export default function App() {

  let socket
  const [socketId, setSocketId] = useState();
  const [isConnected, setIsConnected] = useState(false);
  const [recieverState, setReciever] = useState();

  useEffect(() => {
    socket = io('http://localhost:5001', {
      withCredentials: true,
      mode: 'cors',
	        headers: {
            	'Access-Control-Allow-Origin': 'http://localhost:5001',
        	}
    })
    console.log(socket)
    socket.on("connect", () => {
      socket.emit('messageSend', socket.id, "funciona", "reciever")
      setIsConnected(true)
      setSocketId(socket.id)
    });
    socket.on('messageSend', (socketId, msg, reciever) => {
      setReciever(reciever);
      renderItem(msg)
      //llega un msg
    });

  }, [])

  const sendMsgToSocket = (msg) => {

    let array = arrayMsj;
    let msgObj = {
      id: lastId + 1,
      msg: msg
    };

    array.push(msgObj);
    setLastId(lastId + 1);
    setArrayMsj(array);
    console.log(arrayMsj)

    try{

        socket.emit("messageSend", socketId, msg, recieverState);
        }
    catch (error){
        console.log(error);
    } 
    
    setvalText('');
};



  return (
    <>
       {isConnected ? <Text>Conectado</Text> : <Text>No conectado</Text> }
     <NavigationContainer>
       <Stack.Navigator initialRouteName="index">
         <Stack.Screen name="index" component={HomeScreen} options={{headerShown: false}} />  
         <Stack.Screen name="task" component={TaskScreen} options={{headerShown: false}} />
         <Stack.Screen name="chat" component={ChatScreen} options={{headerShown: true}} initialParams={{ sendMsgToSocket: {sendMsgToSocket}}}/>
       </Stack.Navigator>
     </NavigationContainer>
     </>

    //<SocketTest></SocketTest>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
