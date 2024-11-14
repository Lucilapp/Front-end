import { Image, StyleSheet, Platform, View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


export default function LoginScreen({navigation}) {
      const handleReg = () => {
        navigation.navigate('Register', {
        });
      }
    return (
      <>
      <SafeAreaView style={styles.safeAreaView}>  
                <View style={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                  <Image source={require('../../../../assets/images/Logo.png')} style={styles.logo_Middle} resizeMode='contain'></Image>
                  <Text style={styles.Title}>Lucilapp</Text>
                </View>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Usuario"
                        placeholderTextColor="#C0C0C0"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="#C0C0C0"
                    />
                </View>
                <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Iniciar Sesión</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleReg}>
                  <Text style={styles.TextLink}>No tengo cuenta</Text>
                </TouchableOpacity>
        </SafeAreaView>
    </>
    );
  }
  
  const styles = StyleSheet.create({
    button:{
      backgroundColor: '#4DA7FC',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 5,
      elevation: 3,
      width: '50%',
      height: '160%',
      display: 'flex',
      justifyContent: 'center'
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 20,
      fontWeight: 'bold',
  },
    Title:{
      fontSize: 30,
      fontWeight: 500,
    },
    safeAreaView:{
      marginTop: 10,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    row: {
      display: 'flex',
      flexDirection: 'row',
    },
    footer: {
      height: 20,
    },
    logo_Middle: {
        width: 250,
    },
    container: {
        padding: 10,
        width: '75%',
    },
    input: {
        marginTop: 10,
        height: 40,
        backgroundColor: '#F8F8F8',
        borderRadius: 20,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#DADADA',
        color: '#000',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
    },
    TextLink: {
      textDecorationLine: 'underline',
      marginTop: -30,
      fontWeight: 500
    }
  });
