import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import User from '../User'
import {styles} from './styles'

const UsersList = ({label, userList}) => {
    const renderMember = ({ item }) => (
        <User style={styles.regularUser} userId = {item}/>
    );

    return (
        <View>
            <Text>{ label }</Text>
            <FlatList
                contentContainerStyle={{flexDirection:"row"}}
                data={userList}
                renderItem={renderMember}
                keyExtractor={(item,i) => i}
                horizontal={true}
            />
        </View>
    )
}

export default UsersList
