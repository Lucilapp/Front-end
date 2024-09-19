import React, { useState, useEffect, useRef  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList, TextInput, Keyboard } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import apiCallGET from '../../../api/apiCalls.js'
import Msj from '../../../components/chat/chatMsj.jsx';
import {io} from "socket.io-client";

export default function ChatScreen(props) {

  var socket;
  const [recieverState, setReciever] = useState();
  const [arrayMsj, setArrayMsj] = useState([]);
  const [lastId, setLastId] = useState(0);

  useEffect(() => {
    socket = io('http://localhost:5001', {
      withCredentials: true
    })
    
    socket.on('messageSend', (socketId, msg, reciever) => {
      setReciever(reciever);
      console.log(socketId, msg, reciever);
      renderItem(msg)
      //llega un msg
    });
  }, [])
  useEffect(() => {
    console.log(socket)
    socket.emit('messageSend', socket.id, "funciona", "reciever")
  }, [socket])

  const renderItem = ({ item }) => (
    //msg solo tiene el texto del mensaje (hay q sacar el send/sent y <Msj text={item} style={styles.sent}/>)
      <>
        {item.socketId === socket.id ?
        <View>
        <Msj text={item.msg} style={styles.sent}/>
      </View>
        :
        <View>
          <Msj text={item.msg} style={styles.received}/>
        </View>
        }
        {handleScrollToEnd()}
      </>
  );
  
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [valText, setvalText] = useState('');
  useEffect(() => {
    // listener que detecta cuando el teclado se muestra
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
  
    // listener que detecta cuando el teclado se oculta
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );
    // Limpieza de listeners
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  
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
        const event = "messageSend";
        const socketId = socket.id;
        socket.emit(event, socketId, msg, recieverState);
        }
    catch (error){
        console.log(error);
    } 
    
    setvalText('');
};

  const flatListRef = useRef(null);
  const handleScrollToEnd = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };

  return (
    <>
        
        <View style={styles.header}>
            {/*<Image source={require('IMAGEN DE ADULTO MAYOR')}/>*/}
            <Text style={styles.headerText}>Nombre adulto mayor</Text>
        </View>
        <View style={styles.section}>
          <View style={styles.flexSmall}>
            <Image source={require('../../../../assets/images/infoIcon.png')} style={styles.InfoIcon} />
          </View>
          <View style={styles.flexLarge}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Terminar Tarea</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mensajes}>
          <FlatList
              ref={flatListRef}
              data={arrayMsj}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListFooterComponent={<View style={styles.footer} />}
            />
        </View>
        <View style={keyboardVisible ? styles.containerInputKeyboard : styles.containerInput}>
          <TextInput
            value={valText}
            multiline={true}
            style={styles.input}
            placeholder="Escribir...."
            placeholderTextColor="#9E9E9E"
            onChangeText={nuevoTexto => setvalText(nuevoTexto)}
          />
          
          <TouchableOpacity onPress={() => {sendMsgToSocket(valText);}}>
            <Image source={require('../../../../assets/images/send.png')} style={styles.sendIcon} />
          </TouchableOpacity>
        </View>
        
    </>
  );
}

const styles = StyleSheet.create({
  containerInputKeyboard: {
    paddingHorizontal: 20,
    position: 'absolute',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  footer: {
    height: 375, 
  },
  sendIcon: {
    width: 30,
    height: 30,
    marginLeft: 20,
    marginTop: 5,
  },
  containerInput: {
    paddingHorizontal: 20,  
    position: 'absolute',
    width: '95%',
    top:'90%',
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    minHeight: 40,
    borderRadius: 20,
    backgroundColor: '#E0E0E0',
    paddingHorizontal: 15,
    fontSize: 16,
    width: '85%',
    color: '#000',
  },
  sent: {
    backgroundColor: '#dcf8c6',
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '80%',
    marginRight: 17,
  },
  received: {
    backgroundColor: '#00000010',
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '80%',
    marginLeft: 17,
  },
    InfoIcon: {
      width: 50,
      height: 50,
    },
  header: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(151, 71, 255, 0.6)',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  container: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#C6A0FF',
    justifyContent:'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 17,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"flex-start",
  },
  flexSmall: {
    width: "15%"
  },
  flexLarge: {
    width:"70%",
  },
});