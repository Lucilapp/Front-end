import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem.jsx';

const CategoryList = ({ navigation, categories }) => {
  console.log(categories.returnArray)
  return (
    <FlatList
      data={categories.returnArray}
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
