import React from 'react';
import { View } from 'react-native';
import { globalStyles, colors } from '../../../styles/globalStyles'
import Button from "../../../components/Button";
import Input from "../../../components/Input";


const RegistrationEnd = ({ userData, onChange, login }) => {

    return (
        <View style={globalStyles.container}>
            <Input onChange={onChange} placeholder="О себе" name="about" value={userData.about}/>
            <Button title="Зарегистрироваться" color={colors.violet} onPress={login}/>
        </View>
    )
}

export default RegistrationEnd;