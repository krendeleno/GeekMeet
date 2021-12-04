import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles'
import Button from "../../components/Button";


const RegistrationForm1 = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('RegistrationForm2')
    }

    return (
        <View style={globalStyles.container}>
            <Text>Форма 1</Text>
            <Button title="Далее" color={colors.green} onPress={onPress}/>
        </View>
    )
}

export default RegistrationForm1;