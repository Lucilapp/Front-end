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
import { socket } from './src/api/socket';
import RegisterScreen from './src/app/screens/login/login';
import LoginScreen from './src/app/screens/login/login';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <>
     <NavigationContainer>
       <Stack.Navigator initialRouteName="index">
         <Stack.Screen name="index" component={HomeScreen} options={{headerShown: false}} />  
         <Stack.Screen name="task" component={TaskScreen} options={{headerShown: false}} />
         <Stack.Screen name="chat" component={ChatScreen} options={{headerShown: true}}/>
         <Stack.Screen name='login' component={LoginScreen} options={{headerShown: false}}/>
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
