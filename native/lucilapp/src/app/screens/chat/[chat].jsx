import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList, TextInput, Keyboard } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import apiCallGET from '../../../api/apiCalls.js'
import Msj from '../../../components/chat/chatMsj.jsx';

const arrayMsj = [
  { id: '1', text: '¡Hola! ¿Cómo estás?', send: true },
  { id: '2', text: 'Tengo una reunión a las 3 PM.', send: true },
  { id: '3', text: '¿Te gustaría ir al cine este fin de semana?', send: true },
  { id: '4', text: 'No podré asistir a la fiesta.', send: false },
  { id: '5', text: 'El proyecto está casi terminado.', send: true },
  { id: '6', text: '¿Podrías enviarme el informe?', send: false },
  { id: '7', text: '¡Feliz cumpleaños!', send: true },
  { id: '8', text: 'El pedido ha sido enviado.', send: false },
  { id: '9', text: '¿Has visto la última película de Marvel?', send: true },
  { id: '10', text: 'Necesito ayuda con la tarea de matemáticas.', send: false },
  { id: '11', text: '¡Hola! ¿Cómo estás?', send: true },
  { id: '12', text: 'Tengo una reunión a las 3 PM.', send: true },
  { id: '13', text: '¿Te gustaría ir al cine este fin de semana?', send: true },
  { id: '14', text: 'No podré asistir a la fiesta.', send: false },
  { id: '15', text: 'El proyecto está casi terminado.', send: true },
  { id: '16', text: '¿Podrías enviarme el informe?', send: false },
  { id: '17', text: '¡Feliz cumpleaños!', send: true },
  { id: '18', text: 'El pedido ha sido enviado.', send: false },
  { id: '19', text: '¿Has visto la última película de Marvel?', send: true },
  { id: '20', text: 'Necesito ayuda con la tarea de matemáticas.', send: false },
  { id: '21', text: '¡Hola! ¿Cómo estás?', send: true },
  { id: '22', text: 'Tengo una reunión a las 3 PM.', send: true },
  { id: '23', text: '¿Te gustaría ir al cine este fin de semana?', send: true },
  { id: '24', text: 'No podré asistir a la fiesta.', send: false },
  { id: '25', text: 'El proyecto está casi terminado.', send: true },
  { id: '26', text: '¿Podrías enviarme el informe?', send: false },
  { id: '27', text: '¡Feliz cumpleaños!', send: true },
  { id: '28', text: 'El pedido ha sido enviado.', send: false },
  { id: '29', text: '¿Has visto la última película de Marvel?', send: true },
  { id: '30', text: 'El proyecto está casi terminado.', send: true },
  { id: '31', text: '¿Podrías enviarme el informe?', send: false },
  { id: '32', text: '¡Feliz cumpleaños!bdjwkabdjoahbdhuowahbdujwbaduoibwauodbwuoahduwoahdiwoahdiowhfiohauohduowauodhgduwoabfwouabduwaoboooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooFeliz cumpleaños!bdjwkabdjoahbdhuowahbdujwbaduoibwauodbwuoahduwoahdiwoahdiowhfiohauohduowauodhgduwoabfwouabduwaoboooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooFeliz cumpleaños!bdjwkabdjoahbdhuowahbdujwbaduoibwauodbwuoahduwoahdiwoahdiowhfiohauohduowauodhgduwoabfwouabduwaobooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo', send: true },
  { id: '33', text: 'El pedido ha sido enviado.', send: false },
  { id: '34', text: '¿Has visto la última película de Marvel?', send: true },
  { id: '35', text: '¡Feliz cumpleaños!', send: true },
  { id: '36', text: 'El pedido ha sido enviado.', send: false },
  { id: '37', text: '¿Has visto la última película de Marvel?', send: true },
  { id: '38', text: 'El proyecto está casi terminado.', send: true },
  { id: '39', text: '¿Podrías enviarme el informe?', send: false },
  { id: '40', text: '¡Feliz cumpleaños!', send: true },
  { id: '41', text: 'El pedido ha sido enviado.', send: false },
  { id: '42', text: '¿Has visto la última película de Marvel?', send: true },
  { id: '43', text: 'ULTIMO MENSAJE.', send: false },
];




export default function ChatScreen(props) {
  
/*
  useEffect(() => {
    async function fetchTask() {
    let elem = (await apiCallGET(`tarea/idCategoria?idCategoria=${}`));
    elem = elem[0];
    setLoading(false);
    return elem;
    }
    setTask(fetchTask(id));
  }, [])
*/

  const renderItem = ({ item }) => (
      <>
        {item.send ? 
        <View>
        <Msj text={item.text} style={styles.sent}/>
      </View>
        :
        <View>
          <Msj text={item.text} style={styles.received}/>
        </View>
        }
        
      </>
  );
  
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    // Listener para detectar cuando el teclado se muestra
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => setKeyboardVisible(true)
    );
  
    // Listener para detectar cuando el teclado se oculta
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => setKeyboardVisible(false)
    );
  
    // Limpieza de listeners cuando el componente se desmonta
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

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
              data={arrayMsj}        
              renderItem={renderItem}
              keyExtractor={item => item.id}
              ListFooterComponent={<View style={styles.footer} />}
            />
        </View>
        <View style={keyboardVisible ? styles.containerInputKeyboard : styles.containerInput}>
          <TextInput
            style={styles.input}
            placeholder="Escribir...."
            placeholderTextColor="#9E9E9E"
          />
          <Image source={require('../../../../assets/images/send.png')} style={styles.sendIcon} />
        </View>
        
    </>
  );
}

const styles = StyleSheet.create({
  containerInputKeyboard: {
    paddingHorizontal: 20,
    position: 'absolute',
    top: 530,
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
    /*borderRadius: '100%',*/
  },
  containerInput: {
    paddingHorizontal: 20,  
    position: 'absolute',
    top: 850,
    width: '100%',
    paddingTop: -20,
    display: 'flex',
    flexDirection: 'row',
  },
  input: {
    height: 40,
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
    backgroundColor: '#ffffff',
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