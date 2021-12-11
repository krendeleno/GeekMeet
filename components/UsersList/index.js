import React from 'react'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import RequestNum from '../RequestNum'
import User from '../User'
import {styles} from './styles'

const UsersList = ({label, userList, navigation, requests}) => {
    const renderMember = ({ item }) => (
        <User style={styles.regularUser} userId = {item} navigation={navigation}/>
    );

    return (
        <View style = {styles.container}>
            <View style = {styles.labelContainer}>
                <Text style={styles.text}>{ label }</Text>
                {requests && <RequestNum number={requests} fromFriends = {true} navigation={navigation}/>}
            </View>

            <FlatList
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{flexDirection:"row"}}
                data={userList}
                renderItem={renderMember}
                keyExtractor={(item,i) => i}
                horizontal={true}
                style={styles.flatlist}
            />
        </View>
    )
}

export default UsersList
