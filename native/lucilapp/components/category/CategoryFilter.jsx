import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import CategoryTag from "./CategoryTag.jsx"
const CategoryFilter = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [tags, setTags] = useState([]);
    useEffect(()=>{
        props.categories.forEach(element => {
            let tagArray = tags;
            if(!tagArray.find(item => item === element.tag)){
                tagArray.push(element.tag);
                setTags(tagArray);
            }
        });
    }, []);
    return(
        <View style={props.style}>
            <TouchableOpacity onPress={() => {setIsOpen(!isOpen)}}>
                <Image source={require('../../assets/images/filter.png')} style={styles.image}/>
            </TouchableOpacity>
            
            {isOpen && (
            <View style={styles.filterContainer}>
                <FlatList
                    data={tags}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                    <CategoryTag tagname={item} />
                    )}
                    style={styles.filterFlatlist}
                />
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
        height: 100,
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
})
export default CategoryFilter;