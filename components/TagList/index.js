import React from 'react'
import { FlatList, View } from 'react-native'

import Tag from '../Tag'

import styles from './styles';

const TagList = ({tagList, fromSearch, onChange}) => {
    const renderTag = ({ item }) => (

        <Tag id={item} checkable={fromSearch} onChange = {onChange}/>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={tagList}
                renderItem={renderTag}
                keyExtractor={(item,i) => i}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={fromSearch}
            />
        </View>
    )
}

export default TagList
