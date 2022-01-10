import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {validateEmail, validateNick, validatePassword} from "../../../utils/validate";
import styles from "./styles";
import {contentWidth, globalStyles, colors} from "../../../styles/globalStyles";
import UserDataBox from "../../../components/UserDataBox";


const EditUserInfo = ({navigation, onChange, userData}) => {
    const goNext = () => {
        navigation.navigate('EditUserAvatar')
    }

    return (
        <View style={globalStyles.container}>
            <UserDataBox userData={userData} goNext={goNext} onChange={onChange} isEdit={true}/>
        </View>
    )
}

export default EditUserInfo;