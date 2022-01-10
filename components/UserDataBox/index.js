import React, {useState} from 'react'
import Input from "../Input";
import {colors, contentWidth} from "../../styles/globalStyles";
import Button from "../Button";
import {validateEmail, validateNick, validatePassword} from "../../utils/validate";

const UserDataBox = ({userData, onChange, goNext, isEdit}) => {
    const [isValid, setIsValid] = useState({
        nick: true,
        password: true,
        email: true,
        firstEntry: isEdit,
    });

    const errorMessages = {
        nick: !userData.nick ? 'Поле не может быть пустым' : 'Ник должен содержать от 3х до 20и символов',
        password: !userData.password ? 'Поле не может быть пустым' :
            (validatePassword(userData.password) ? 'Пароли не совпадают' : 'Пароль должен содержать от 8и символов, хотя бы одну букву и хотя бы один символ'),
        email: !userData.email ? 'Поле не может быть пустым' : 'Некорретный email',
    }

    const onValidation = (event) => {
        setIsValid(values => ({...values, firstEntry: true}))
        const {name, text} = event;
        switch (name) {
            case "nick":
                setIsValid(values => ({...values, nick: !!text && validateNick(text)}))
                break;
            case "confirmPassword":
                setIsValid(values => ({...values, password: userData.password === text}))
                break;
            case "password":
                setIsValid(values => ({...values, password: !!text && text === userData.confirmPassword
                        && validatePassword(text)}))
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
            goNext();
    }

    const onChangeValidate = (event) => {
        onChange(event);
        onValidation(event);
    }

    return (
        <>
            <Input autoFocus={true} onChange={onChangeValidate} placeholder="Ник" name="nick" value={userData.nick}
                   error={isValid.nick} errorMessage={errorMessages.nick} color={colors.green} size={contentWidth.small}
                   height={50}/>
            <Input onChange={onChangeValidate} placeholder="Почта" name="email" value={userData.email}
                   error={isValid.email} errorMessage={errorMessages.email} color={colors.green}
                   size={contentWidth.small} height={50}/>
            <Input onChange={onChangeValidate} placeholder="Пароль" name="password" value={userData.password}
                   error={isValid.password} errorMessage={errorMessages.password} secureTextEntry={true}
                   color={colors.green} size={contentWidth.small} height={50}/>
            <Input onChange={onChangeValidate} placeholder="Повторите пароль" name="confirmPassword"
                   error={isValid.password}
                   value={userData.confirmPassword} color={colors.green} size={contentWidth.small} height={50}
                   secureTextEntry={true}/>
            <Button title="Далее" onPress={onPressNext} color={colors.green} size={contentWidth.small}/>
        </>
    )
}


export default UserDataBox;
