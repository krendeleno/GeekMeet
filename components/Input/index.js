import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';


const Input = ({ value, name, type, onChange, placeholder, error, errorMessage, ...props }) => {

    return (
        <View>
            <TextInput
                {...props}
                placeholder = {placeholder}
                value={value}
                onChangeText={text => onChange({ name, type, text })}
            />
            {!error && <Text>{errorMessage}</Text>}
        </View>

    );
};

export default Input;