import React from 'react';
import { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';

const BackArrow = ({onPress}) => {
    return (
        <>
            <TouchableOpacity onPress={onPress}>
                <Image source={require('../../../assets/images/arrow.png')} style={styles.arrowImg}></Image>
            </TouchableOpacity>
        </>
    )
        
}
const styles = StyleSheet.create({
    arrowImg: {
        resizeMode: 'contain',
        width: '7vw',
        height: '7vw'
    }
})

export default BackArrow;