import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {colors, globalStyles} from '../../styles/globalStyles'
import Input from "../../components/Input";
import Button from "../../components/Button";
import VectorImage from "react-native-vector-image";
import {validateDescription} from "../../utils/validate";


const Login = ({navigation, login}) => {
    const onPress = () => {
        navigation.navigate('Registration')
    }

    const defaultAuthData = {
        nick: '',
        password: '',
    }

    const [authData, setData] = useState(defaultAuthData);
    const onChange = (event) => {
        const {name, text} = event;
        setData(values => ({...values, [name]: text}))
    }

    const [isValid, setIsValid] = useState({
        nick: true,
        password: true,
        firstEntry: false,
    });

    const errorMessages = {
        nick: 'Поле не может быть пустым',
        password: 'Поле не может быть пустым',
    }

    const onValidation = ({name, text}) => {
        setIsValid(values => ({...values, firstEntry: true}))
        switch (name) {
            case "nick":
                setIsValid(values => ({...values, nick: !!text}))
                break;
            case "password":
                setIsValid(values => ({...values, password: !!text}))
                break;
        }
    }


    const onChangeValidate = (event) => {
        onChange(event);
        onValidation(event);
    }

    const loginValidate = () => {
        if (!isValid.firstEntry) {
            setIsValid({
                nick: false,
                password: false,
                firstEntry: false,
            })
        }
        if (Object.values(isValid).every(item => item))
            login();
    }


    return (
        <View style={globalStyles.container}>
            <Image source={require('../../assets/main.png')}/>
            <Input onChange={onChangeValidate} placeholder="Ник" name="nick" value={authData.nick}
                   error={isValid.nick} errorMessage={errorMessages.nick}/>
            <Input onChange={onChangeValidate} placeholder="Пароль" name="password" value={authData.password}
                   error={isValid.password} errorMessage={errorMessages.password} secureTextEntry={true}/>
            <Button title="Войти" color={colors.violet} onPress={loginValidate}/>
            <Text onPress={onPress}>Нет аккаунта?</Text>
        </View>
    )
}

export default Login;