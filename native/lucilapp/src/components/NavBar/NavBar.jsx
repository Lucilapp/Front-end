import React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const NavBar = (props) => {
    const handlePress = () => {
        navigation.navigate('index', {
        });
    }
    return (
        <>
         <TouchableOpacity onPress={handlePress}>
            <Image source={require('../../../assets/images/HomeIcon.png')} style={styles.Icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
            <Image source={require('../../../assets/images/ProfileIcon.png')} style={styles.Icon}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={handlePress}>
            <Image source={require('../../../assets/images/QuestionIcon.png')} style={styles.Icon}/>
        </TouchableOpacity>
        </>
    )
        
}
const styles = StyleSheet.create({
    Icon: {
        width: '10%',
        height: '10%'
    }
})

export default NavBar;