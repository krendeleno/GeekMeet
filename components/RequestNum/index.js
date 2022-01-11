import React from 'react'
import { Text, TouchableOpacity} from 'react-native'
import {styles} from './styles'

const RequestNum = ({number, fromFriends, navigation}) => {

    const goToFriendsRequests = () => {
         navigation.navigate('FriendsRequests')
    }

    const goToEventsRequests = () => {
        navigation.navigate('EventRequests')
    }

    return (
        <TouchableOpacity 
            style={styles(fromFriends).container} 
            onPress={fromFriends ? goToFriendsRequests : goToEventsRequests}>
            <Text 
                style={styles(fromFriends).text}>
                    {"+" + number.toString()}
            </Text>
        </TouchableOpacity>
    )
}

export default RequestNum
