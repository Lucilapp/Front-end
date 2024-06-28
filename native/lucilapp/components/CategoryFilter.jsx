import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Button, Image } from 'react-native';

const CategoryFilter = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const filterHandler = () => {
        
    }
    return(
        <View style={props.style}>
            <TouchableOpacity onPress={() => {setIsOpen(!isOpen)}}>
                <Image source={require('../assets/images/filter.png')} style={styles.image}/>
            </TouchableOpacity>
            
            {isOpen && (
            <View style={styles.menu}>
                <Text>A</Text>
            </View>
            )}
            
        </View>
        
    );
}

const styles = StyleSheet.create({
    image:{
        width: 25,
        height: 25,
    },
    menu:{
        width: 200,
        height: 100,
        left: -360,
        top: 20,
        backgroundColor:"#82bdfa90",
        marginBottom:30,
    },
})
export default CategoryFilter;