import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';

const CategoryTag = (props) => {
    const [isPressed, setIsPressed] = useState(false);
    const handlePress = () => {
        if(isPressed){
            props.unpress(props.tagId);
        }
        else{
            props.press(props.tagId);
        }
        setIsPressed(!isPressed);
    };

    return (
        <View style={styles.tag}>
            <TouchableOpacity onPress={handlePress}>
                <View style={isPressed ? styles.tagPressed : styles.tagUnpressed}>
                    <Text style={styles.tagText}>{props.tagname}</Text>
                    {isPressed && (<>
                        <Image source={require('../../../assets/images/X.png')} style={styles.tagX} />
                    </>)}
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    tag: {
        marginLeft: 10,
        marginTop: 10,
    },
    tagPressed: {
        display: "flex",
        flexDirection: "row",
        height: 30,
        backgroundColor: "#d1ebff",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    tagUnpressed: {
        display: "flex",
        height: 30,
        backgroundColor: "white",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    tagText: {
        marginHorizontal: 10,
    },
    tagX: {
        width: 10,
        height: 10,
        marginRight: 10,
    },
});

export default CategoryTag;
