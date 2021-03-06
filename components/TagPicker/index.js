import React from 'react'
import RNPickerSelect from 'react-native-picker-select';
import { useState } from 'react/cjs/react.development';
import { tags } from '../../MockData/tags'
import styles from './styles'
import TagList from '../TagList';

const TagPicker = ({onChange, eventTags}) => {
    const tagListMaker =(list)=>{
        let newList = []
        list.forEach(element => {
            newList.push({label: element.title, value: element.id})
            
        });
        return newList
    }

    const [selectedTags, setTags] = useState(eventTags)

    const onTagChange = (value)=>{
        setTags([...selectedTags, value])
        onChange(selectedTags)
    }

    const tagRemover =(id,checked) =>{
        
            let filteredArray = selectedTags.filter(item => item !== id)
            setTags(filteredArray)
        
    }

    return (
        <>
            <RNPickerSelect 
                placeholder={{
                    label: 'Выбрать теги',
                    value: null,
                }}

                style={styles}
                onValueChange={(value) => onTagChange(value)}
                items={tagListMaker(tags)
                }
                useNativeAndroidPickerStyle={false}
            />
            <TagList screen="TagPicker" tagList={selectedTags} onChange={tagRemover} fromSearch={true} isTagPicker={true}/>
        </>
    )
}

export default TagPicker
