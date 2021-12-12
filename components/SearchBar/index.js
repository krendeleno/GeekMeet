import React from 'react'
import { View } from 'react-native'

import Input from '../Input'
import TagList from '../TagList'

import styles from './styles'
import { tags } from '../../MockData/tags'

const SearchBar = ({onChange, searchData, onTagChange}) => {

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Поиск" 
                name="searchInput" 
                value={searchData.searchInput} 
                onChange={onChange} 
                style={styles.input}
            />
            <TagList tagList={tags} onChange={onTagChange} fromSearch={true} small={false}/>
        </View>
    )
}

export default SearchBar
