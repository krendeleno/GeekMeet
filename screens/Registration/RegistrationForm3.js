import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles'
import Button from "../../components/Button";
import Input from "../../components/Input";


const RegistrationForm3 = ({ navigation, userData, onChange, login }) => {

    return (
        <View style={globalStyles.container}>
            <Text>О себе</Text>
            <Input onChange={onChange} placeholder="О себе" name="about" value={userData.about}/>
            <Button title="Зарегистрироваться" color={colors.violet} onPress={login}/>
        </View>
    )
}

export default RegistrationForm3;