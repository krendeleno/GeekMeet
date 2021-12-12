import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {globalStyles, colors} from '../../../styles/globalStyles'
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {validateEmail} from "../../../utils/validate";


const RegistrationInfo = ({navigation, onChange, userData}) => {
    const [isValid, setIsValid] = useState({
        nick: true,
        password: true,
        email: true,
        firstEntry: false,
    });

    const errorMessages = {
        nick: 'Поле не может быть пустым',
        password: !userData.password ? 'Поле не может быть пустым' : 'Пароли не совпадают',
        email: !userData.email ? 'Поле не может быть пустым' : 'Некорретный email',
    }

    const onValidation = (event) => {
        setIsValid(values => ({...values, firstEntry: true}))
        const {name, text} = event;
        switch (name) {
            case "nick":
                setIsValid(values => ({...values, nick: !!text}))
                break;
            case "confirmPassword":
                setIsValid(values => ({...values, password: userData.password === text}))
                break;
            case "password":
                setIsValid(values => ({...values, password: !!text && text === userData.confirmPassword}))
                break;
            case "email":
                setIsValid(values => ({...values, email: !!text && validateEmail(text)}))
                break;
        }
    }


    const onPressNext = () => {
        if (!isValid.firstEntry) {
            setIsValid({
                nick: false,
                password: false,
                email: false,
                firstEntry: false,
            })
        }
        if (Object.values(isValid).every(item => item))
            navigation.navigate('RegistrationAvatar')

    }

    const onChangeValidate = (event) => {
        onChange(event);
        onValidation(event);
    }
    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text>Регистрация</Text>

            <Input onChange={onChangeValidate} placeholder="Ник" name="nick" value={userData.nick}
                   error={isValid.nick} errorMessage={errorMessages.nick}/>
            <Input onChange={onChangeValidate} placeholder="Почта" name="email" value={userData.email}
                   error={isValid.email} errorMessage={errorMessages.email}/>
            <Input onChange={onChangeValidate} placeholder="Пароль" name="password" value={userData.password}
                   error={isValid.password} errorMessage={errorMessages.password}/>
            <Input onChange={onChangeValidate} placeholder="Повторите пароль" name="confirmPassword"
                   value={userData.confirmPassword}/>
            <Button title="Далее" color={colors.green} onPress={onPressNext}/>
            <Text onPress={goBack}>Есть аккаунт?</Text>
        </View>
    )
}

export default RegistrationInfo;