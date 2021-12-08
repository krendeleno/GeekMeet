import React from 'react'
import Tag from '../Tag'
import { FlatList, ScrollView, View } from 'react-native'
import styles from './styles';

const TagList = ({tagList}) => {
    const renderTag = ({ item }) => (
        <Tag title = {item} checkable={false}/>
    );

    return (
        <ScrollView style={styles.container}>
            <FlatList
                contentContainerStyle={{flexDirection:"row"}}
                data={tagList}
                renderItem={renderTag}
                keyExtractor={(item,i) => i}
                horizontal={true}
            />
        </ScrollView>
    )
}

export default TagList
