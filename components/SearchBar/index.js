import React from 'react'
import { View } from 'react-native'

import Input from '../Input'
import TagList from '../TagList'

import styles from './styles'
import { tags } from '../../MockData/tags'

const SearchBar = ({onChange, searchData, onTagChange}) => {
    const tagsId = (tags)=>{
        return tags.map(item => item.id);
    }

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Поиск" 
                name="searchInput" 
                value={searchData.searchInput} 
                onChange={onChange} 
                style={styles.input}
            />
            <TagList tagList={tagsId(tags)} onChange={onTagChange} fromSearch={true}/>
        </View>
    )
}

export default SearchBar
