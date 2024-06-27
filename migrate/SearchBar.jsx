import React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const SearchBar = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const handleSearch = (text) => {
        setSearchQuery(text);
        const filteredCategories = props.categories.filter(category =>
        category.name.toLowerCase().includes(text.toLowerCase())
        );
        props.setResults(filteredCategories);
    };

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
        marginHorizontal: 16,
        paddingLeft: 10,
        marginBottom: 10,
      }
})

export default SearchBar;