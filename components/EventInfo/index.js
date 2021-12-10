import React from 'react'
import { View, Text } from 'react-native'
import Seats from '../Seats';

import styles from './styles'

const EventInfo = ({title, date, time, place, participants}) => {
    return (
        <View>
            <Text style={styles.eventTitle}>{ title }</Text>
            <Text style={styles.eventDate}>{date}</Text>
            <Text style={styles.eventTime}>{time}</Text>
            <Text style={styles.eventPlace}>{place}</Text>
            <Seats style={styles.seats} available={participants}/>
        </View>
    )
}

export default EventInfo
