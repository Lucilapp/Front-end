import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import CategoryItem from './CategoryItem.jsx'

const CategoryList = (props) => (
        <ScrollView style={styles.container}>
          {props.categories.map((cat, index) => (
            <CategoryItem key={index} name={cat.Nombre} pending={cat.Pendientes} time={cat.TiempoTarea} id={cat.Id} />
          ))}
        </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    marginTop: 1,
    display: "flex",
    flexDirection: "column",
  }
});

export default CategoryList;
