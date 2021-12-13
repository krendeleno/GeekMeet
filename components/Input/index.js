import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import {colors, globalStyles} from "../../styles/globalStyles";
import styles from "./styles";



const Input = ({ color, size, height, name, onChange, error, errorMessage, ...props }) => {

    const getCorrectColor = () => {
        return (error ? color : colors.red)
    }

    return (
        <>
            <View style={[styles(getCorrectColor(), size, height).container, globalStyles.container]}>
                <TextInput
                    {...props}
                    onChangeText={text => onChange({ name, text })}
                />
            </View>
            {!error && <Text style={styles().errorNotification}>{errorMessage}</Text>}
        </>
    );
};

export default Input;