import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';


const Input = ({ name, onChange, error, errorMessage, ...props }) => {

    return (
        <View>
            <TextInput
                {...props}
                onChangeText={text => onChange({ name, text })}
            />
            {!error && <Text>{errorMessage}</Text>}
        </View>

    );
};

export default Input;