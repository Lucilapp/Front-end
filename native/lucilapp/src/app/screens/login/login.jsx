import { Image, StyleSheet, Platform, View, Text, SafeAreaView, TextInput } from 'react-native';
import { useEffect, useState } from 'react';


export default function LoginScreen({navigation}) {
    const [pageNum, setPage] = useState(0);
    useEffect(() => {
        const timer = setTimeout(() => {
          setPage(1);
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    return (
      <>
      <SafeAreaView style={styles.safeAreaView}>
            {pageNum === 0 && <>
            <Image source={require('../../../../assets/images/Logo.png')} style={styles.logo_Middle} resizeMode='contain'></Image>
            </>}
            {pageNum === 1 && (<>
                <Image source={require('../../../../assets/images/Logo.png')} style={styles.logo_Middle} resizeMode='contain'></Image>
                <Text>Lucilapp</Text>
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
            </>)}
        </SafeAreaView>
      </>
    );
  }
  
  const styles = StyleSheet.create({
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
    },
    input: {
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
  });
