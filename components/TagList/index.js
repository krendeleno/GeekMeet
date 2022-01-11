import React from 'react'
import { FlatList, View } from 'react-native'
import Tag from '../Tag'
import styles from './styles';
import {tags} from '../../MockData/tags'


const TagList = ({tagList, fromSearch, onChange, color, small, fromAddScreens, screen}) => {

    const tagTitles = tags.filter(tag => tagList.find(tagId => tag.id === tagId))
    
    let horizontal = false
    let scroll = false
    let columnNumber = 0
    let containerStyles = styles(true).usual

    switch (screen) {
        case "UserAboutBox": // изменение инфы о юзере и регистрация 
            columnNumber = 3
            horizontal = false
            containerStyles = styles(true).tagPicker
            break;
        case "SearchBar":
            scroll = true
            horizontal = true
            columnNumber = 0
            containerStyles = styles(true).flatlist
            

            break;
        case "EventDetails": // карточка ивента
            columnNumber = 2
            horizontal = false
            break;
        case "UserInformation": // карточка юзера плюс реквесты
            columnNumber = 3
            horizontal = false
            break;

        case "Event": // маленький ивент
            columnNumber = 3
            horizontal = false
            break;
        case "Profile":
            columnNumber = 2
            horizontal = false
            break;

        case "TagPicker":
            columnNumber = 3
            horizontal = false
            scroll= true
            containerStyles = styles(true).tagPicker
            break;

        default:
            break;
    }

    const renderTag = ({ item }) => (

        <Tag title={item.title} id={item.id} checkable={fromSearch} onChange = {onChange} color={color} small={small} fromAddScreens={fromAddScreens}/>
    );

    return (
        <View style= {styles(fromAddScreens).container}>
            <FlatList
                
                data={tagTitles}
                renderItem={renderTag}
                keyExtractor={(item,i) => i}
                horizontal={true}
                /* numColumns={columnNumber} */
                showsHorizontalScrollIndicator={false}
                scrollEnabled={scroll}

                contentContainerStyle={containerStyles}
            />
        </View>
    )
}

export default TagList
