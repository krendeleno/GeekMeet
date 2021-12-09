import React from 'react'
import { View, Text } from 'react-native'

const EventDiscription = ({ style, discription }) => {
    return (
        <View style={style}>
            <Text style={style.text}>{discription}</Text>
        </View>
    )
}

export default EventDiscription
