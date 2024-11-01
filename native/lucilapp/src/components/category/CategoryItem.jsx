import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import apiCallGET from '../../api/apiCalls';
import { convertTypeAcquisitionFromJson } from 'typescript';

const CategoryItem = ({ name, pending, id }) => {
  const navigation = useNavigation(); // Usa el hook para obtener la navegación
  
  const [task, setTask] = useState(null);
  const [time, setTime] = useState(null);
  const [taskArray, setTaskArray] = useState(null)
  const handlePress = () => {
    navigation.navigate('task', {
      category: name,
      id: id,
    });
  }
  useEffect(() => {
    const func = async () => {
      let elem = await getLastTask();
      setTaskArray(elem);
    }
    func();
  }, [])

  useEffect(() => {
    if(taskArray && taskArray.length > 0){
      let tarea = taskArray[0];
      setTask(tarea);
    }
  },[taskArray])

  useEffect(() => {
    if(task) {
      let date = Date.now()
      date = new Date(date)
      console.log(date)
      console.log(task.TiempoCreacion)
      let creacion = new Date(task.TiempoCreacion)
      setTime(Math.round((date - creacion)/60000));
    }
  }, [task])

  const getLastTask = async () => {
    return await apiCallGET(`tarea/idCategoria?idCategoria=${id}`);  
  }

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>  
        <View style={styles.container}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.column}>
            <View style={styles.details}>
              <Text style={styles.boldText}>{pending}</Text>
              <Text style={styles.text}> Pendientes</Text>
            </View>
            <View style={styles.timeContainer}>
              <Image
                source={require('../../../assets/images/clock.png')}
                style={styles.clockIcon}
              />
              <Text style={styles.text}>Hace {time} min</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: '2.5%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
    padding: 10,
    borderRadius: 10,
    height: 70,
    width: '95%',
    marginBottom: 10,
  },
  column: {},
  title: {
    flex: 1,
    fontSize: 22,
    fontWeight: 'bold',
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: '#555',
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  clockIcon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
});

export default CategoryItem;
