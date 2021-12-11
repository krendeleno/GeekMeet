import React from 'react'
import { Text, TouchableOpacity} from 'react-native'
import {styles} from './styles'

const RequestNum = ({number, fromFriends, navigation}) => {

    const goToFriendsRequests = () => {
         navigation.navigate('EventRequests', {}) 
    }

    const goToEventsRequests = () => {
        navigation.navigate('EventRequests', {
        })
    }

    return (
        <TouchableOpacity 
            style={fromFriends ? styles.friends.container : styles.eventRequest.container} 
            onPress={fromFriends ? goToFriendsRequests : goToEventsRequests}>
            <Text 
                style={fromFriends ? styles.friends.text : styles.eventRequest.text}>
                    +{number}
            </Text>
        </TouchableOpacity>
    )
}

export default RequestNum
