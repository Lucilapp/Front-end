import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Button, Image } from 'react-native';


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
    text: {
      fontSize: 16,
      color: '#000',
    },
  });

export default Msj;
