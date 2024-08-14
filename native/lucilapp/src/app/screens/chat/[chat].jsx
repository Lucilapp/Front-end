import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
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

  return (
    <>
        <>
        <SafeAreaView style={styles.header}>
            {/*<Image source={require('IMAGEN DE ADULTO MAYOR')}/>*/}
            <Text style={styles.headerText}>Nombre adulto mayor</Text>
        </SafeAreaView>
        <View style={styles.container}>
        <Image source={require('../../../../assets/images/infoIcon.png')} style={styles.InfoIcon} />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Terminar Tarea</Text>
        </TouchableOpacity>
        </View>
        <View>
          <FlatList
              data={arrayMsj}        
              renderItem={renderItem} 
              keyExtractor={item => item.id}
            />
        </View>
        </>
    </>
  );
}
const styles = StyleSheet.create({

  sent: {
    backgroundColor: '#dcf8c6', // Verde claro
    alignSelf: 'flex-end',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '80%',
    marginRight: 17,
  },
  received: {
    backgroundColor: '#ffffff', // Blanco
    alignSelf: 'flex-start',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: '80%',
    marginLeft: 17,
  },
    InfoIcon: {
      width: 20,
      height: 20,
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
    color: 'black',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: '#C6A0FF',
    justifyContent:'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000', // Color negro para el texto
    fontWeight: 'bold',
    fontSize: 16,
  },
});