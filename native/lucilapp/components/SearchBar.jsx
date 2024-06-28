import React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (text) => {
        setSearchQuery(text);
        text = removeAccents(text);
        const filteredCategories = props.categories.filter(category =>
        removeAccents(category.name.toLowerCase()).includes(text.toLowerCase())
        );
        props.setResults(filteredCategories);
    };
    const removeAccents = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      }
    return (
        <TextInput
            style={styles.searchInput}
            placeholder="Buscar Categorías"
            value={searchQuery}
            onChangeText={handleSearch}
        />
    )
        
}
const styles = StyleSheet.create({
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        marginHorizontal: 11,
        paddingLeft: 10,
        marginBottom: 10,
        width:'85%',
      }
})

export default SearchBar;