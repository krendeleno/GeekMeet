import React, {useState, useContext} from 'react';
import {View, Text, Image, Alert} from 'react-native';
import {colors, contentWidth, globalStyles} from '../../styles/globalStyles'
import Input from "../../components/Input";
import Button from "../../components/Button";
import styles from "./styles";
import axios from "axios";
import {Context} from "../../components/Context.js"
import {postApiNoHeader} from "../../utils/api";


const Login = ({navigation}) => {
    const onPress = () => {
        navigation.navigate('Registration')
    }

    const defaultAuthData = {
        login: '',
        password: ''
    }
    const [context, setContext] = useContext(Context);
    const [authData, setData] = useState(defaultAuthData);
    const onChange = (event) => {
        const {name, text} = event;
        setData(values => ({...values, [name]: text}))
    }

    const [isValid, setIsValid] = useState({
        login: true,
        password: true,
        firstEntry: false,
    });

    const errorMessages = {
        login: 'Поле не может быть пустым',
        password: 'Поле не может быть пустым',
    }

    const onValidation = ({name, text}) => {
        setIsValid(values => ({...values, firstEntry: true}))
        switch (name) {
            case "login":
                setIsValid(values => ({...values, login: !!text}))
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
                login: false,
                password: false,
                firstEntry: false,
            })
        }
        if (Object.values(isValid).every(item => item))
            postApiNoHeader('/user/login', context, {
                login: authData.login,
                password: authData.password
            }).then((data) => setContext(values => ({...values, token: data.token})));
    }


    return (
        <View style={[styles().container, globalStyles.container]}>
            <Image source={require('../../assets/main.png')}/>
            <Text style={styles().title}>Вход</Text>
                <Input onChange={onChangeValidate} placeholder="Ник" name="login" value={authData.login}
                       error={isValid.login} errorMessage={errorMessages.login} color={colors.violet} size={contentWidth.small} height={50}/>
                <Input onChange={onChangeValidate} placeholder="Пароль" name="password" value={authData.password}
                       error={isValid.password} errorMessage={errorMessages.password} color={colors.violet} size={contentWidth.small} height={50}
                       secureTextEntry={true}/>
            <Button title="Войти" color={colors.violet} size={contentWidth.small} onPress={loginValidate}/>
            <Text style={styles().registration} onPress={onPress}>Нет аккаунта?</Text>
        </View>
    )
}

export default Login;