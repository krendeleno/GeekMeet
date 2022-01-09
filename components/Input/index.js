import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import {colors, globalStyles} from "../../styles/globalStyles";
import styles from "./styles";



const Input = ({ color, size, height, name, onChange, error, errorMessage, refInner, ...props }) => {
    const [isFocused, setIsFocused] = useState(false);
    const getCorrectColor = () => {
        if (!error)
            return colors.red;
        if (isFocused)
            return colors.deepViolet;

        return color;
    }

    return (
        <>
            <View style={[styles(getCorrectColor(), size, height).container,]}>
                <TextInput
                    {...props}
                    ref={refInner}
                    onChangeText={text => onChange({ name, text })
                    }
                    placeholderTextColor= '#ABA5AA'
                    onBlur={() => setIsFocused(false)}
                    onFocus={() => setIsFocused(true)}
                />
            </View>
            {!error && <Text style={styles().errorNotification}>{errorMessage}</Text>}
        </>
    );
};

export default Input;