import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CategoryItem from './CategoryItem.jsx';
import { useEffect, useState } from 'react';
import apiCallGET from '../../api/apiCalls.js';

const CategoryList = ({ navigation, categories }) => {
  const [task, setTask] = useState(null);
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [noTasks, setNoTasks] = useState(true);
  async function fetchTask(catId) {
    if(!loaded){
      
    }
  }
  const filtrarArray = (array) => {
    let result = [];
    array.forEach(element => {
      if(element.Pendientes > 0){
        setResults[results.push(element)]
      }
    });
    return result;
  }
  useEffect(() => {
    filtrarArray(categories.returnArray)
  }, [])
  useEffect(() => {
    if(results.length > 0){
      setNoTasks(false);
    }
  },[results])

  return (
    <>
      <FlatList
        data={results}
        keyExtractor={(item, index) => item.Id.toString()}
        renderItem={({ item }) => {
          
          return(
            <CategoryItem
            name={item.Nombre}
            pending={item.Pendientes}
            id={item.Id}
          />
          )
        }}
        contentContainerStyle={styles.container}
      />
      {console.log(results.length)}
      {noTasks ? <Text style={styles.noTasks}>No hay Tareas disponibles</Text>:<></>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: 10,
  },
  noTasks: {
    fontSize: 25,
    fontWeight: 600,
    alignSelf: 'center',
    color: '#C0C0C0'
  }
});

export default CategoryList;
