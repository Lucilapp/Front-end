import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CategoryItem from './CategoryItem.jsx';
import { useEffect, useState } from 'react';
import apiCallGET from '../../api/apiCalls.js';

const CategoryList = ({ navigation, categories }) => {
  const [task, setTask] = useState(null);
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false)
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
      {results.length <= 0 ? <Text>No hay Tareas disponibles</Text>:<></>}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: 10,
  },
});

export default CategoryList;
