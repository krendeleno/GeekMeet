import React from 'react'
import { FlatList, View } from 'react-native';
import Tag from '../Tag';
import styles from './styles'

const tagList = ["first", "second", "third", "forth", "fifth"]

const TagSelector = ({onChange}) => {
    const renderTag = ({ item }) => (
        <Tag title = {item} checkable={true} onChange = {onChange}/>
      );


    return (
        <View style={styles.container}>
            <FlatList 
                data={tagList}
                renderItem={renderTag}
                keyExtractor={(item,i) => i}
                style={{flexDirection:"row"}}
                horizontal={true}
            />
        </View>
    )
}

export default TagSelector



