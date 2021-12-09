import React from 'react'
import { Text, View } from 'react-native';
import { numStringMaker } from '../../utils/numStringMaker'

const Seats = ({style, available}) => {

    return (
        <View style={style.contaiter}>
            <Text style={style.text}>{available} {numStringMaker(available, ['место', 'места', 'мест'])}</Text>
        </View>
    )
}

export default Seats
