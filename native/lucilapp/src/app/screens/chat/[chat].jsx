import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView, ScrollView, FlatList } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import apiCallGET from '../../../api/apiCalls.js'
import Msj from '../../../components/chat/chatMsj.jsx';

const arrayMsj = [
  { text: '¡Hola! ¿Cómo estás?', send: true },
  { text: 'Tengo una reunión a las 3 PM.', send: false },
  { text: '¿Te gustaría ir al cine este fin de semana?', send: true },
  { text: 'No podré asistir a la fiesta.', send: false },
  { text: 'El proyecto está casi terminado.', send: true },
  { text: '¿Podrías enviarme el informe?', send: false },
  { text: '¡Feliz cumpleaños!', send: true },
  { text: 'El pedido ha sido enviado.', send: false },
  { text: '¿Has visto la última película de Marvel?', send: true },
  { text: 'Necesito ayuda con la tarea de matemáticas.', send: false },
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
      {!loading && (
        <>
        <View style={styles.header}>
            {/*<Image source={require('IMAGEN DE ADULTO MAYOR')}/>*/}
            <Text style={styles.headerText}>Nombre adulto mayor</Text>
        </View>
        <View style={styles.section}>
        <Image source={require('../../../../assets/images/infoIcon.png')} style={styles.InfoIcon} />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Terminar Tarea</Text>
        </TouchableOpacity>
        </View>
        <ScrollView>
          <FlatList
            data={arrayMsj}        
            renderItem={renderItem} 
            keyExtractor={item => item.id}
          />
        </ScrollView>
        </>
        //AGREGAR INPUT PARA ENVIAR MSJS
      )}
    </>
  );
}
const styles = StyleSheet.create({

  sent: {
    backgroundColor: '#dcf8c6', // Verde claro
    alignSelf: 'flex-end',
  },
  received: {
    backgroundColor: '#ffffff', // Blanco
    alignSelf: 'flex-start',
  },
    InfoIcon: {
        justifyContent:'flex-start',
        width: 20,
        height: 20,
    },
  header: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#9747FF',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  section: {
    flexDirection:'row'
  },
  button: {
    backgroundColor: '#C6A0FF',
    justifyContent:'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});