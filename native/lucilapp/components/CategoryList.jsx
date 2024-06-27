import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import CategoryItem from './CategoryItem.jsx'


const CategoryList = (props) => (
    <View style={styles.container}>
        <FlatList
        data={props.categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <CategoryItem name={item.name} pending={item.pending} time={item.time} />
        )}
        style={styles.container}
        />
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1
  }
});

export default CategoryList;
