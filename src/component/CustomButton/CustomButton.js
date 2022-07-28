import React from "react";
import {Button, Text, View, StyleSheet, Pressable} from "react-native";

const CustomButton = ({buttonText, onPress, type = "PRIMARY",  bgColor, fgColor}) => {
    return( 
        <Pressable 
            onPress={onPress} 
            style = {[
                styles.container, 
                styles[`container_${type}`],
                bgColor ? {backgroundColor: bgColor} : {}
            ]}
        >
            <Text 
                style = {[
                    styles.text, 
                    styles[`text_${type}`],
                    fgColor ? {color: fgColor} : {}
                ]}>
                {buttonText}
            </Text>       
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container : {
        width: '100%',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical:5,
        alignContent: 'center',
        justifyContent: 'center',
    },
    container_PRIMARY : {
        backgroundColor: '#3B71F3',
    },
    container_TERTIARY : {},
    text: {
        fontWeight: 'bold',
    },
    text_TERTIARY : {
        color: 'gray'
    },
    text_PRIMARY : {
        color: 'white'
    },
});

export default CustomButton
