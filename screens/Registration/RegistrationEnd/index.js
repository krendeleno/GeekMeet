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


const RegistrationEnd = ({userData, onChange, setToken}) => {

    const [isValid, setIsValid] = useState({
        description: true,
        firstEntry: false,
    });
    const [context, setContext] = useContext(Context);

    const errorMessages = {
        description: !userData.description ? 'Поле не может быть пустым' : 'Описание должно включать в себя от 3х до 50и слов',
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
            setContext(values => ({...values, isLoading: true}))
            postApiNoHeader('/user/register', context,{
                login: userData.nick,
                password: userData.password,
                email: userData.email,
                about: userData.description,
                avatar: userData.avatar,
                tags: []
            }).then((data) => setContext(values => ({...values, token: data.token, isLoading: false, isFirst: true})))
                .catch((e) => {console.log(e);
                    setContext(values => ({...values, isLoading: false}));
                }
                    )
    }

    const onTagChange = (title, isChecked) => {
        /* if (isChecked){
            setTags([...tags, title]);
        } else {
            let filteredArray = tags.filter(item => item !== title)
            setTags(filteredArray)
        } */
    }

    return (
        <View style={globalStyles.container}>
            <Input autoFocus={true} onChange={onChangeValidate} placeholder="О себе" name="description" value={userData.description}
                   error={isValid.description} errorMessage={errorMessages.description} color={colors.green} size={contentWidth.large} height={'40%'} multiline/>
            <TagList tagList={tags} onChange={onTagChange} fromSearch={true} small={false} color={true}/>
            <Button title="Зарегистрироваться" color={colors.violet} size={contentWidth.large} onPress={onPress}/>
        </View>
    )
}

export default RegistrationEnd;