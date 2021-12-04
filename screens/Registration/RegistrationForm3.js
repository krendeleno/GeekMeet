import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles'
import Button from "../../components/Button";


const RegistrationForm3 = ({ navigation }) => {

    return (
        <View style={globalStyles.container}>
            <Text>Форма 3</Text>
            <Button title="Зарегистрироваться" color={colors.violet}/>
        </View>
    )
}

export default RegistrationForm3;