import React from 'react';
import {TextInput} from 'react-native';


const Input = ({ value, name, type, onChange, placeholder }) => {
    return (
        <TextInput
            placeholder = {placeholder}
            value={value}
            onChangeText={text => onChange({ name, type, text })}
        />
    );
};

export default Input;