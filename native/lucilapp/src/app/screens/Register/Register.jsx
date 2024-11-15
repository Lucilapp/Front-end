import { Image, StyleSheet, Platform, View, Text, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react';
import BackArrow from '../../../components/backArrow/arrow';
import apiUserCalls from '../../../api/apiUserCalls';


export default function RegisterScreen({navigation}) {
    const [page, setPage] = useState(0)

    const [nombre, setNombre] = useState('');
    const [contraseña, setContraseña] = useState('');
    const [contraseñaVerif, setContraseñaVerif] = useState('');
    const [mail, setMail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [dni, setDni] = useState('');

    const handleNombreChange = (text) => {
      setNombre(text);
    };
    const handleContraChange = (text) => {
      setContraseña(text);
    };
    const handleContraVerifChange = (text) => {
      setContraseñaVerif(text);
    };
    const handleMailChange = (text) => {
      setMail(text);
    };
    const handleTelChange = (text) => {
      setTelefono(text);
    };
    const handleDNIChange = (text) => {
      setDni(text);
    };


    const handleLog = () => {
      navigation.navigate('login', {
      });
    }
    const handleReg = async () => {
      let reg = await apiUserCalls.apiCallRegister(nombre, contraseña, mail, telefono, dni)
      if(reg){
        let token = await apiUserCalls.apiCallLogin(nombre, contraseña)
        if(token){
          console.log(token)
          navigation.navigate('index', {
          });
        }
      }
    }

    const handleNext = () => {
      setPage(1)
    }
    const handlePrev = () => {
      setPage(0)
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
                        value={nombre}
                        onChangeText={handleNombreChange}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="DNI"
                        placeholderTextColor="#C0C0C0"
                        value={dni}
                        onChangeText={handleDNIChange}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mail"
                        placeholderTextColor="#C0C0C0"
                        value={mail}
                        onChangeText={handleMailChange}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Telefono Ej: 1112345678"
                        placeholderTextColor="#C0C0C0"
                        value={telefono}
                        onChangeText={handleTelChange}
                    />
                </View>
                <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Siguiente</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleLog}>
                  <Text style={styles.TextLink}>Ya tengo cuenta</Text>
                </TouchableOpacity>
                
                </>
                
        :
        
        <>
            <View style={{position: 'absolute', top: '2.5%', left: '10%'}}>
              <BackArrow onPress={handlePrev}/>
            </View>
            <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Contraseña"
                        placeholderTextColor="#C0C0C0"
                        value={contraseña}
                        onChangeText={handleContraChange}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar contraseña"
                        placeholderTextColor="#C0C0C0"
                        value={contraseñaVerif}
                        onChangeText={handleContraVerifChange}
                    />
                </View>
                <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                  <TouchableOpacity style={styles.button} onPress={handleReg}>
                    <Text style={styles.buttonText}>Registrarse</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleLog}>
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
        marginTop: -40,
        fontWeight: 500
      }
  });
