import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import {colors, globalStyles} from "../../styles/globalStyles";




const Button = ({ title, onPress, color, size, children, image}) => {

    return ( image ?

            <TouchableOpacity style={styles().image} onPress={onPress}>
                {children}
            </TouchableOpacity>

            :

            <TouchableOpacity style={styles(color, size).container} onPress={onPress}>
                <View>
                    <Text style={styles(color, size).text}>{title}</Text>
                    {children}
                </View>
            </TouchableOpacity>
    )
}

Button.defaultProps = {
    image:false
};
export default Button;