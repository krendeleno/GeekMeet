import React from 'react'
import { FlatList, View } from 'react-native'

import Tag from '../Tag'

import styles from './styles';

const TagList = ({tagList, fromSearch, onChange, color, small, fromAddScreens}) => {
    const renderTag = ({ item }) => (

        <Tag title={item} checkable={fromSearch} onChange = {onChange} color={color} small={small} fromAddScreens={fromAddScreens}/>
    );

    return (
        <View style= {styles(fromAddScreens).container}>
            <FlatList
                numColumns={fromAddScreens && 3}
                data={tagList}
                renderItem={renderTag}
                keyExtractor={(item,i) => i}
                horizontal={!fromAddScreens && true}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={fromSearch}

                contentContainerStyle={(fromSearch || fromAddScreens) && styles(fromAddScreens).flatlist}
            />
        </View>
    )
}

export default TagList
