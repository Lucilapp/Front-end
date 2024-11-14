import { Image, StyleSheet, Platform, View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';


export default function RegisterScreen({navigation}) {
    const [page, setPage] = useState(0)
      const handleReg = () => {
        navigation.navigate('login', {
        });
      }
      const handleNext = () => {
        setPage(1)
      }
    return (
      <>
      <SafeAreaView style={styles.safeAreaView}>
        <Text style={styles.Title}>Registrarse</Text>
      {page === 0 ? <>
                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nombre completo"
                        placeholderTextColor="#C0C0C0"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mail"
                        placeholderTextColor="#C0C0C0"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Telefono"
                        placeholderTextColor="#C0C0C0"
                    />
                </View>
                <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Siguiente</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleReg}>
                  <Text style={styles.TextLink}>Ya tengo cuenta</Text>
                </TouchableOpacity>
                
                </>
                
        :
        
        <>
            <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="#C0C0C0"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar contraseña"
                        placeholderTextColor="#C0C0C0"
                    />
                </View>
                <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Siguiente</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleReg}>
                  <Text style={styles.TextLink}>Ya tengo cuenta</Text>
                </TouchableOpacity>
        </>
        }
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
      fontSize: 50,
      fontWeight: 500,
      marginTop: '10%',
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
        marginTop: 40,
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
        marginTop: -60,
        fontWeight: 500
      }
  });
