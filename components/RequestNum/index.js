import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import {styles} from './styles'

const RequestNum = ({number, fromFriends}) => {
    return (
        <TouchableOpacity 
            style={fromFriends ? styles.friends.container : styles.eventRequest.container}>
            <Text 
                style={fromFriends ? styles.friends.text : styles.eventRequest.text}>
                    +{number}
            </Text>
        </TouchableOpacity>
    )
}

export default RequestNum
