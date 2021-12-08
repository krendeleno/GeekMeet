import React, {useState} from 'react';
import { View, Text } from 'react-native';
import {colors, globalStyles} from '../../styles/globalStyles'
import Input from "../../components/Input";
import Button from "../../components/Button";
import VectorImage from "react-native-vector-image";


const Login = ({ navigation, login }) => {
    const onPress = () => {
        navigation.navigate('Registration')
    }

    const defaultAuthData = {
        nick: '',
        email: '',
    }

    const [authData, setData] = useState(defaultAuthData);
    const onChange = (event) => {
        const {name, text} = event;
        setData(values => ({...values, [name]: text}))
    }


    return (
        <View style={globalStyles.container}>
            {/*<VectorImage source={require('../../assets/Icons/mainIcon.svg')}/>*/}
            <Input onChange={onChange} placeholder="Ник" name="nick" value={authData.nick}/>
            <Input onChange={onChange} placeholder="Почта" name="email" value={authData.email}/>
            <Button title="Войти" color={colors.violet} onPress={login}/>
            <Text onPress={onPress}>Нет аккаунта?</Text>
        </View>
    )
}

export default Login;