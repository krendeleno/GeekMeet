import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'


const Button = ({ title, onPress, color }) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles(color).container}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button;