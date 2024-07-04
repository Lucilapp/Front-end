import { View, Text, FlatList, StyleSheet, TouchableOpacity, TextInput, Button, Image } from 'react-native';
import { useEffect, useState } from 'react';



const CategoryTag = (props) => {
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = (pressed) => {
        useEffect(()=>{
            setIsPressed(isPressed);
        })
        // setPressed(!pressed);
    }
    return(
    <> 
    <TouchableOpacity onPress={handlePress(isPressed)}>
        {isPressed && (
        <>
            <View style={styles.tagPressed}>
                <Text>{props.tagName}</Text>
            </View>
        </>
    )}
    {!isPressed && (
        <>
            <View style={styles.tagUnpressed}>
                <Text>{props.tagName}</Text>
            </View>
        </>
    )}
    </TouchableOpacity>
    </>);
    
}
const styles = StyleSheet.create({
    tagPressed: {
        width: 50,
        height: 30,
        backgroundColor: "blue",
    },
    tagUnpressed: {
        width: 50,
        height: 30,
        backgroundColor: "white",
    },
});

export default CategoryTag;