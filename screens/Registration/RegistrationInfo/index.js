import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {validateEmail, validateNick, validatePassword} from "../../../utils/validate";
import styles from "./styles";
import {contentWidth, globalStyles, colors} from "../../../styles/globalStyles";
import UserDataBox from "../../../components/UserDataBox";


const RegistrationInfo = ({navigation, onChange, userData}) => {
    const goNext = () => {
        navigation.navigate('RegistrationAvatar')
    }


    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={globalStyles.container}>
            <Text style={styles().title}>Регистрация</Text>
            <UserDataBox userData={userData} goNext={goNext} onChange={onChange} isEdit={false}/>
            <Text style={styles().login} onPress={goBack}>Есть аккаунт?</Text>
        </View>
    )
}

export default RegistrationInfo;