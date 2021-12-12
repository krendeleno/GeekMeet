import React, {useState} from 'react';
import {View} from 'react-native';
import {globalStyles, colors} from '../../../styles/globalStyles'
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {validateDescription} from "../../../utils/validate";


const RegistrationEnd = ({userData, onChange, login}) => {
    const [isValid, setIsValid] = useState({
        description: true,
        firstEntry: false,
    });

    const errorMessages = {
        description: !userData.description ? 'Поле не может быть пустым' : 'Описание должно состоять хотя бы из 3х слов',
    }

    const onValidation = (event) => {
        setIsValid(values => ({...values, firstEntry: true}))
        const {name, text} = event;
        switch (name) {
            case "description":
                setIsValid(values => ({...values, description: !!text && validateDescription(text)}))
                break;
        }
    }

    const onChangeValidate = (event) => {
        onChange(event);
        onValidation(event);
    }


    const onPress = () => {
        if (!isValid.firstEntry) {
            setIsValid({
                description: false,
                firstEntry: false,
            })
        }
        if (Object.values(isValid).every(item => item))
            login();
    }

    return (
        <View style={globalStyles.container}>
            <Input onChange={onChangeValidate} placeholder="О себе" name="description" value={userData.description}
                   error={isValid.description} errorMessage={errorMessages.description} multiline/>
            <Button title="Зарегистрироваться" color={colors.violet} onPress={onPress}/>
        </View>
    )
}

export default RegistrationEnd;