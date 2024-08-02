import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import apiCallGET from '../../../api/apiCalls.js'
export default function ChatScreen(props) {
    
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
        </>
        //AGREGAR INPUT PARA ENVIAR MSJS
      )}
    </>
  );
}
const styles = StyleSheet.create({
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