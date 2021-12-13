import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import {colors, globalStyles} from "../../styles/globalStyles";
import styles from "./styles";



const Input = ({ value, color, size, height, name, type, onChange, placeholder, error, errorMessage, ...props }) => {

    const getCorrectColor = () => {
        return (error ? color : colors.red)
    }

    return (
        <>
            <View style={[styles(getCorrectColor(), size, height).container, globalStyles.container]}>
                <TextInput
                    {...props}
                    placeholder = {placeholder}
                    value={value}
                    onChangeText={text => onChange({ name, type, text })}
                />
            </View>
            {!error && <Text style={styles().errorNotification}>{errorMessage}</Text>}
        </>
    );
};

export default Input;