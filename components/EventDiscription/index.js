import React from 'react'
import { View, Text } from 'react-native'

const EventDiscription = ({ style, discription }) => {
    return (
        <View style={style}>
            <Text>{discription}</Text>
        </View>
    )
}

export default EventDiscription
