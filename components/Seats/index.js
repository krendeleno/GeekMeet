import React from 'react'
import { Text, View } from 'react-native';
import { numStringMaker } from '../../utils/numStringMaker'
import {styles} from './styles'

const Seats = ({ available}) => {

    return (
        <View style={styles.contaiter}>
            <Text style={styles.text}>{available} {numStringMaker(available, ['место', 'места', 'мест'])}</Text>
        </View>
    )
}

export default Seats
