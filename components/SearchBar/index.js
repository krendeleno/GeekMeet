import React from 'react'
import { View } from 'react-native'

import Input from '../Input'
import TagList from '../TagList'

import styles from './styles'
import { tags } from '../../MockData/tags'
import {colors, contentWidth} from "../../styles/globalStyles";

const SearchBar = ({onChange, searchData, onTagChange}) => {

    return (
        <View style={styles.container}>
            <Input 
                placeholder="Поиск" 
                name="searchInput" 
                value={searchData}
                onChange={onChange}
                style={styles.input}
                color={colors.green}
                size={contentWidth.full}
                height={40}
                error={'false'}
            />
            <TagList tagList={tags} onChange={onTagChange} fromSearch={true} small={false} color={true}/>
        </View>
    )
}

export default SearchBar
