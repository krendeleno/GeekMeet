import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles'
import Button from "../../components/Button";
import Input from "../../components/Input";


const RegistrationForm1 = ({ navigation, onChange, userData }) => {
    const onPress = () => {
        navigation.navigate('RegistrationForm2')
    }

    return (
        <View style={globalStyles.container}>
            <Text>Регистрация</Text>

            <Input onChange={onChange} placeholder="Ник" name="nick" value={userData.nick}/>
            <Input onChange={onChange} placeholder="Почта" name="email" value={userData.email}/>
            <Input onChange={onChange} placeholder="Пароль" name="password" value={userData.password}/>
            <Input onChange={onChange} placeholder="Повторите пароль" name="confirmPassword" value={userData.confirmPassword}/>
            {userData.password === userData.confirmPassword ? <></> : <Text> Пароли не совпадают! </Text>}
            <Button title="Далее" color={colors.green} onPress={onPress}/>
        </View>
    )
}

export default RegistrationForm1;