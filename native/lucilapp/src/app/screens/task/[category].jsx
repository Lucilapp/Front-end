import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import apiCallGET from '../../../api/apiCalls.js'
export default function TaskScreen(props) {
  const { category, id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState();
  useEffect(() => {
    async function fetchTask(catId) {
    let elem = (await apiCallGET(`tarea/idCategoria?idCategoria=${catId}`));
    elem = elem[0];
    setLoading(false);
    return elem;
    }
    setTask(fetchTask(id));
  }, [])

  useEffect(() => {
    console.log(task);
  }, [task])
  const atask = {
    time: '1min',
    category: {
      name: props.category
    },
    description: `Turno Médico:Hospital Italiano\nDepartamento de Laboratorio\nAnálisis de Sangre y Orina\nOrden: SI\nDisponibilidad: Martes o Jueves por la tarde.
    `,
    user: {
      description:`Nombre: Martín Pérez DiSalvo\nEdad: 87 años\nGénero: Masculino\nDNI: 13803268  
      `
    }
  }
  return (
    <>
      {!loading && (
        <>
          <SafeAreaView style={styles.safeAreaView}>
          <Link href="/" style={{height:30, marginTop:10}}>
            <Image source={require('../../../../assets/images/arrowLeft.png')} style={styles.backButton} />
          </Link>

          <View style={styles.header}>
            <Text style={styles.headerText}>Tarea</Text>
            <View style={styles.headerRight}>
              <Text style={styles.headerRightText}>Esperando hace</Text>
              <Text style={styles.headerRightText}>{atask.time}</Text>
              <Image source={require('../../../../assets/images/clock.png')} style={styles.clockIcon} />
            </View>
          </View>

          <View style={styles.section}> 
            <Text style={styles.sectionTitle}>Descripción de la tarea</Text>
            <Text style={styles.sectionTitle}>{atask.category.name}</Text>
            <Text>{atask.description}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Información del asistido</Text>
            <Text>{atask.user.description}</Text>
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Tomar Tarea</Text>
          </TouchableOpacity>
          </SafeAreaView>
        </>
      )}
    </>
  );
}
const styles = StyleSheet.create({
  safeAreaView:{
    marginTop: 30,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5%',
    width: '90%',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '5%',
    width: '90%',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    height: 20,
    width: 20,
    marginBottom:10,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightText: {
    marginRight: 5,
  },
  clockIcon: {
    width: 20,
    height: 20,
  },
  section: {
    width: '100%',
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize:20,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#1E90FF',
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