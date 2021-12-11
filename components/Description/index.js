import React from 'react'
import { View, Text } from 'react-native'

const Description = ({ style, description }) => {
    return (
        <View style={style}>
            <Text style={style.text}>{description}</Text>
        </View>
    )
}

export default Description
