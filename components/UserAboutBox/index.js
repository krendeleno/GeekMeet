import React, {useContext, useState} from 'react'
import Input from "../Input";
import {colors, contentWidth} from "../../styles/globalStyles";
import Button from "../Button";
import {validateDescription, validateEmail, validateNick, validatePassword} from "../../utils/validate";
import TagList from "../TagList";
import {tags} from "../../MockData/tags";
import {View} from "react-native";
import {Context} from "../Context";
import {postApiNoHeader} from "../../utils/api";
import TagPicker from '../TagPicker';

const UserAboutBox = ({userData, onChange, onPress, title, isEdit}) => {
    const [isValid, setIsValid] = useState({
        description: true,
        firstEntry: isEdit,
    });
    const [context, setContext] = useContext(Context);

    const [selectedTags, setTags] = useState(userData.tags)

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

    const onTagChange = (id, isChecked) => {
        if (isChecked){
            setTags([...selectedTags, id]);
        } else {
            let filteredArray = selectedTags.filter(item => item !== id)
            setTags(filteredArray)
        }
        
    }

    const save = () => {
            if (!isValid.firstEntry) {
                setIsValid({
                    description: false,
                    firstEntry: false,
                })
            }
            if (Object.values(isValid).every(item => item)) {
                setContext(values => ({...values, isLoading: true}));
                onPress();
            }
    }

    return (
        <>
            <Input autoFocus={true} onChange={onChangeValidate} placeholder="О себе" name="description" value={userData.description}
                   error={isValid.description} errorMessage={errorMessages.description} color={colors.green} size={contentWidth.large} height={'40%'} multiline/>
            {/* <TagList tagList={tags.map(item => item.id)} onChange={onTagChange} fromSearch={true} small={false} color={true} screen="UserAboutBox"/> */}
            <TagPicker onChange={onTagChange} eventTags={userData.tags}/>
            <Button title={title} color={colors.violet} size={contentWidth.large} onPress={save}/>
        </>
    )
}


export default UserAboutBox;
