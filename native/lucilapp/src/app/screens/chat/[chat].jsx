import React, { useState, useEffect, useRef  } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList, TextInput, Keyboard, Modal } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import apiCallGET from '../../../api/apiCalls.js'
import apiCallDelete from '../../../api/apiCallDelete.js';
import Msj from '../../../components/chat/chatMsj.jsx';
import {io} from "socket.io-client";
import { socket } from '../../../api/socket.js';


export default function ChatScreen(props) {

  const [socketId, setSocketId] = useState(socket.id);
  const [recieverState, setReciever] = useState(props.route.params.tarea.ClientSocket);
  const [user, setUser] = useState(props.route.params.user);
  const [taskId, setTaskId] = useState (props.route.params.tarea.Id);
  const [arrayMsj, setArrayMsj] = useState([]);
  const [lastId, setLastId] = useState(0);
  const [lastMsgArray, setLastMsgArray] = useState([]);
  const [modalTareaVisible, setModalTareaVisible] = useState(false);
  const [modalInfo, setModalInfo] = useState(false);


  useEffect(() => {
    socket.on("connect", () => {
      socket.emit('messageSend', socket.id, "funciona", "reciever")
      setSocketId(socket.id)
    });
    socket.on('messageSend', (socketId, msg, reciever) => {
      setReciever(reciever);
      renderItem(msg)
      //llega un msg
    });

  }, [])


  socket.on('recieveMessage', (msg, senderId) => {

    if(lastMsgArray.length - 1 !== -1){
      if(msg !== lastMsgArray[lastMsgArray.length - 1]){
        console.log("built next")
        buildMsg(msg, false);
        submitToLastMessageArray(msg);
      }
    }
    else {
      console.log("built first")
      buildMsg(msg, false);
      submitToLastMessageArray(msg);
    }
  })

  const submitToLastMessageArray = (msg) => {
    let varArray = lastMsgArray;
    varArray.push(msg);
    setLastMsgArray(varArray);
  }

  const buildMsg = (msg, isClient) => {
    let message = {
      id: lastId + 1,
      msg: msg,
      client: isClient
    }
    let array = arrayMsj;
    array.push(message);
    setArrayMsj(array);
    setLastId(lastId + 1);
  } 
  const renderItem = ({ item }) => {
    return (
      <>
        {item.client ? (
          <View>
            <Msj text={item.msg} style={styles.sent} />
          </View>
        ) : (
          <View>
            <Msj text={item.msg} style={styles.received} />
          </View>
        )}
        {handleScrollToEnd()}
      </>
    );
  };  
  
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
    buildMsg(msg, true);
    try{
        const event = "messageSend";

        socket.emit(event, socketId, msg, recieverState);
        }
    catch (error){
        console.log(error);
    }
    setvalText('')
};

  const flatListRef = useRef(null);
  
  const handleScrollToEnd = () => {
    flatListRef.current.scrollToEnd({ animated: true });
  };

  const handleCloseModalTarea = () => {
    setModalTareaVisible(false);
  };

  const handleCloseModalInfo = () => {
    setModalInfo(false);
  };

  const handleOpenModalTarea = () => {
    setModalTareaVisible(true);
  };

  const handleModalNav = () => {
    apiCallDelete(`tarea/${taskId}`)
    socket.emit('chatDisconnect', socketId, recieverState);
    navigation.navigate('index', {
    });
  };
  const handleOpenModalInfo = () => {
    setModalInfo(true);
  };

  return (
    <>
        <View style={styles.header}>
            <Text style={styles.headerText}>{user.Nombre}</Text>
        </View>
        <View style={styles.section}>
          <View>
            <View style={styles.flexSmall}>
              <TouchableOpacity onPress={handleOpenModalInfo}>
                <Image source={require('../../../../assets/images/infoIcon.png')} style={styles.InfoIcon} />
              </TouchableOpacity>
            </View>
              <Modal
                animationType="slide"
                transparent={true}
                visible={modalInfo}
                onRequestClose={handleCloseModalInfo}
              >
                <View style={styles.modalOverlay}>
                  <View style={styles.modalContentInfo}>
                    <TouchableOpacity onPress={handleCloseModalInfo} style={styles.closeButton}>
                      <Text style={styles.closeButtonText}>✖</Text>
                    </TouchableOpacity>
                    <Text style={styles.modalText}>Nombre:  {user.Nombre}</Text>
                    <Text style={styles.modalText}>Edad:  {user.Edad}</Text>
                    <Text style={styles.modalText}>Genero:  {user.Genero}</Text>
                  </View>
                </View>
              </Modal>
          </View>
            <View style={styles.flexLarge}>
              <View>
                <View style={styles.container}>
                  <TouchableOpacity style={styles.button} onPress={handleOpenModalTarea}>
                    <Text style={styles.buttonText}>Terminar Tarea</Text>
                  </TouchableOpacity>
                </View>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalTareaVisible}
                  onRequestClose={handleCloseModalTarea}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <Text style={styles.modalText}>Estas seguro que queres finalizar esta tarea?</Text>
                      <View style={styles.buttonRow}>
                        <TouchableOpacity style={styles.confirmButton} onPress={handleCloseModalTarea}>
                          <Text style={styles.buttonTextCancel}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.confirmButton} onPress={handleModalNav}>
                          <Text style={styles.buttonText}>Confirmar</Text>
                        </TouchableOpacity>
                      </View> 
                    </View>
                  </View>
                </Modal>
              </View>
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
  mensajes: {
    flex: 1,
  },
  closeButtonText: {
    fontSize: 24,
    color: 'black',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonRow:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#C6A0FF',
    borderRadius: 22,
  },
  modalContentInfo: {
    width: 300,
    padding: 20,
    backgroundColor: '#B2DEFF',
    borderRadius: 15, 
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 'larger',
    fontWeight: '650'
  },
  confirmButton: {
    backgroundColor: '#B2DEFF',
    borderRadius: 15,
    padding: 10,
    width: '40%', 
    alignItems: 'center',
  },
  containerInputKeyboard: {
    paddingHorizontal: 20,
    position: 'absolute',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  footer: {
    height: 125, 
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
    color: '#000',
  },
  container: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#C6A0FF',
    justifyContent:'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 17,
    width: '80%',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonTextCancel: {
    color: '#000',
    fontWeight: 'semi-bold',
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