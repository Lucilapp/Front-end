import React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const NavBar = (props) => {
    const handlePress = () => {
        navigation.navigate('Home', {
          tarea: task,
          user: user,
        });
    }
    return (
        <>
        <TouchableOpacity onPress={handlePress} style={styles.button}>
            <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        </>
    )
        
}
const styles = StyleSheet.create({
    
})

export default NavBar;