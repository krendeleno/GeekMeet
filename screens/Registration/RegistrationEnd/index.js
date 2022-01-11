import React, {useContext, useState} from 'react';
import {View} from 'react-native';
import {globalStyles, colors, contentWidth} from '../../../styles/globalStyles'
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import {validateDescription} from "../../../utils/validate";
import axios from "axios";
import {Context} from "../../../components/Context.js"
import {postApiNoHeader} from "../../../utils/api";
import TagList from '../../../components/TagList';
import {tags} from '../../../MockData/tags'
import UserAboutBox from "../../../components/UserAboutBox";


const RegistrationEnd = ({userData, onChange, setToken}) => {
    const [context, setContext] = useContext(Context);

    const onPress = () => {

            postApiNoHeader('/user/register', context,{
                login: userData.nick,
                password: userData.password,
                email: userData.email,
                about: userData.description,
                avatar: userData.avatar,
                tags: []
            }).then((data) => setContext(values => ({...values, token: data.token, userId: data.id, isLoading: false, isFirst: true})))
                .catch((e) => {console.log(e);
                    setContext(values => ({...values, isLoading: false, isInfoModalVisible: true,
                        textModal: "Регистрация не удалась", infoModal: e.toString()}));
                }
                    )
    }

    return (
        <View style={globalStyles.container}>
            <UserAboutBox userData={userData} onChange={onChange} onPress={onPress} title="Зарегистрироваться" isEdit={false}/>
        </View>
    )
}

export default RegistrationEnd;