import React from 'react';
import { Children } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import VectorImage from 'react-native-vector-image';
import styles from './styles'


const Button = ({ title, onPress, color, image, children}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles(color).container}>
                <Text>{title}</Text>
                {children}
            </View>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    image:false
};
export default Button;