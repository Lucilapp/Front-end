import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CategoryItem = ({ name, pending, time }) => {
  console.log('CategoryItem:', name, pending, time);
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.pending}>{pending} Pendientes</Text>
      <Text style={styles.time}>{time}</Text>
      </TouchableOpacity>
    </View>
    
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#87CEFA',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    minHeight: 25,
    minWidth: 50
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  pending: {
    fontSize: 16,
  },
  time: {
    fontSize: 14,
    color: '#555',
  },
});

export default CategoryItem;
