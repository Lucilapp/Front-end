import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Button, Image } from 'react-native';


const colorMsj = () => {
    if(arrayMsj.send){

    }
}

const Msj = (props) => {
  return (
      <View style={[styles.container, props.style]}>
          <Text style={styles.text}>{props.text}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bubble: {
      maxWidth: '80%',
      padding: 10,
      borderRadius: 15,
      margin: 5,
    },
    sent: {
      backgroundColor: '#dcf8c6', // Verde claro
      alignSelf: 'flex-end',
    },
    received: {
      backgroundColor: '#ffffff', // Blanco
      alignSelf: 'flex-start',
    },
    text: {
      fontSize: 16,
      color: '#000',
    },
  });

export default Msj;
