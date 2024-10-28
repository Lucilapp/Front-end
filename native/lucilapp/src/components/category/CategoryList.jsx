import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem.jsx';
import { useEffect, useState } from 'react';

const CategoryList = ({ navigation, categories }) => {
  console.log(categories.returnArray)
  
  const [results, setResults] = useState([]);
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
    <FlatList
      data={results}
      keyExtractor={(item, index) => item.Id.toString()}
      renderItem={({ item }) => (
        <CategoryItem
          name={item.Nombre}
          pending={item.Pendientes}
          time={item.TiempoCreacion}
          id={item.Id}
        />
      )}
      contentContainerStyle={styles.container}
    />
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
