import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native'; // Cambiado a useRoute
import apiCallGET from '../../../api/apiCalls.js';

export default function TaskScreen({ navigation }) {
  const route = useRoute(); // Usamos useRoute para obtener los parámetros
  const { category, id } = route.params;

  const [loading, setLoading] = useState(true);
  const [task, setTask] = useState(null);
  const [time, setTime] = useState();
  const [Iduser, setIdUser] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    async function fetchTask(catId) {
      let elem = (await apiCallGET(`tarea/idCategoria?idCategoria=${catId}`));
      elem = elem[0];
      console.log(elem)
      setLoading(false);
      setTask(elem);
    }
    fetchTask(id);
  }, []);
  useEffect(() => {
    if(task){
      let date = Date.now()
      date = new Date(date)
      let creacion = new Date(task.TiempoCreacion)
      setTime(Math.round((date - creacion)/60000));
      setIdUser(task.IdCliente);
    }
  }, [task])
  //fetch para sacar los datos del user
  useEffect(() => {
    async function fetchTask() {
      let elem = (await apiCallGET(``))
      setUser(elem);
    }
    fetchTask(id);
  }, []);


  const atask = {
    time: '1min',
    category: {
      name: category, // Usamos el valor de category pasado por los parámetros
    },
    description: `Turno Médico:Hospital Italiano\nDepartamento de Laboratorio\nAnálisis de Sangre y Orina\nOrden: SI\nDisponibilidad: Martes o Jueves por la tarde.`,
    user: {
      description: `Nombre: Martín Pérez DiSalvo\nEdad: 87 años\nGénero: Masculino\nDNI: 13803268`,
    },
  };

  const handlePress = () => {
    navigation.navigate('chat', {
      tarea: task,
    });
  };

  return (
    <>
      {!loading && (
        <>
          <SafeAreaView style={styles.safeAreaView}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 30, marginTop: 10 }}>
              <Image source={require('../../../../assets/images/arrowLeft.png')} style={styles.backButton} />
            </TouchableOpacity>

            <View style={styles.header}>
              <Text style={styles.headerText}>Tarea</Text>
              <View style={styles.headerRight}>
                <Text style={styles.headerRightText}>Esperando hace</Text>
                <Text style={styles.headerRightText}>{time} mins</Text>
                <Image source={require('../../../../assets/images/clock.png')} style={styles.clockIcon} />
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>{category}</Text>
              <Text>{task.Descripcion}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Información del asistido</Text>
              <Text>{atask.user.description}</Text>
            </View>

            <TouchableOpacity onPress={handlePress} style={styles.button}>
              <Text style={styles.buttonText}>Tomar Tarea</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    marginTop: 30,
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
    marginBottom: 10,
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
    fontSize: 20,
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
