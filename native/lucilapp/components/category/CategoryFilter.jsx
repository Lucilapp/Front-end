import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import CategoryTag from "./CategoryTag.jsx"
const CategoryFilter = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [initialTags, setInitialTags] = useState([]);
    const pressTag = (tag) => {
        let tags = props.usedTags;
        tags = [...tags, tag];
        props.setTags(tags);
    }
    const unpressTag = (tagToRemove) => {
        let tags = props.usedTags;
        const updatedTags = tags.filter(tag => tag !== tagToRemove);
        props.setTags(updatedTags);
    };
    useEffect(() => {
        const uniqueTags = Array.from(new Set(props.categories.map(element => element.tag)));
        setInitialTags(uniqueTags);
    }, []);
    return(
        <View style={props.style}>
            <TouchableOpacity onPress={() => {setIsOpen(!isOpen)}}>
                <Image source={require('../../assets/images/filter.png')} style={styles.image}/>
            </TouchableOpacity>
            
            {isOpen && (
            <View style={styles.filterContainer}>
                <View style={styles.filterContent}>
                        {initialTags.map((tag, index) => (
                            <CategoryTag key={index} tagname={tag} press={pressTag} unpress={unpressTag} />
                        ))}
                </View>
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
    filterContainer:{
        width: 390,
        left: -362,
        top: 20,
        backgroundColor:"#82bdfa90",
        marginBottom:30,
        borderRadius: 20,
    },
    filterText:{
        marginTop: 10,
        marginLeft: 10,
    },
    filterContent: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    }
})
export default CategoryFilter;