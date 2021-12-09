import React from 'react';
import {TextInput} from 'react-native';


const Input = ({ value, name, type, onChange, placeholder, ...props }) => {
    return (
        <TextInput
            {...props}
            placeholder = {placeholder}
            value={value}
            onChangeText={text => onChange({ name, type, text })}
        />
    );
};

export default Input;