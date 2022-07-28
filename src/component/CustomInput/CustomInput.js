import React from "react";
import {Text, View, TextInput, StyleSheet} from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return( 
        <View style = {styles.container}>
            <TextInput 
                value={value}
                onChangeText= {setValue}
                placeholder= {placeholder} 
                style = {styles.input}
                secureTextEntry = {secureTextEntry}
            />       
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'white',
        width: '100%',
        padding: 15,
        borderRadius: 5,
        borderColor: '#e8e8e8',    
        borderWidth: 1,
        paddingHorizontal: 5,
        marginVertical:10,
        alignContent: 'left',
        justifyContent: 'center'
    },
    input: {
        textAlignVertical : "top",
    }
});

export default CustomInput
