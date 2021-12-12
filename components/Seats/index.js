import React from 'react'
import { Text, View } from 'react-native';
import { numStringMaker } from '../../utils/numStringMaker'
import {styles} from './styles'

const Seats = ({available, fromSearch}) => {

    return (
        <View style={styles(fromSearch).container}>
            <Text style={styles(fromSearch).text}>{available} {numStringMaker(available, ['место', 'места', 'мест'])}</Text>
        </View>
    )
}

export default Seats
