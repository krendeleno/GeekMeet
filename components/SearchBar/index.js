import React from 'react'
import { View } from 'react-native'

import Input from '../Input'
import TagSelector from '../TagSelector'

import styles from './styles'


const SearchBar = ({onChange, searchData, onTagChange}) => {

    return (
        <View>
            <Input 
                placeholder="Поиск" 
                name="searchInput" 
                value={searchData.searchInput} 
                onChange={onChange} 
                style={styles.input}
            />
            <TagSelector onChange={onTagChange}/>
        </View>
    )
}

export default SearchBar
