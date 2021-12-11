import React from 'react'
import { Text, View } from 'react-native';
import { numStringMaker } from '../../utils/numStringMaker'
import {styles} from './styles'

const Seats = ({available, fromSearch}) => {

    return (
        <View style={fromSearch ? styles.containerSearch : styles.container}>
            <Text style={fromSearch ? styles.textSearch : styles.text}>{available} {numStringMaker(available, ['место', 'места', 'мест'])}</Text>
        </View>
    )
}

export default Seats
