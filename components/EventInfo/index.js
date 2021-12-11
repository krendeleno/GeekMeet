import React from 'react'
import { View, Text } from 'react-native'
import Seats from '../Seats';

import styles from './styles'
import {format} from "date-fns";
import {ru} from "date-fns/locale";

const EventInfo = ({title, date, place, participants }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.eventTitle}>{ title }</Text>
            <Text style={styles.eventDate}>{format(date, 'd MMMM p', {locale: ru})}</Text>
            <Text style={styles.eventPlace}>{place}</Text>
            <Seats style={styles.seats} available={participants} fromSearch={true}/>
        </View>
    )
}

export default EventInfo
