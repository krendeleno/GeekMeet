import React from 'react'
import { View, Text, Image } from 'react-native';
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import styles from './styles'

const NewEvent = ({image, title, date, place}) => {

    return (
        <View style={styles.card}>
            <View style={styles.viewForOverflow}>
            <Image source={{uri: image}} style={styles.img}/>
            <View style={styles.innerShadow}/>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.date}>{format(date, 'd MMMM', {locale: ru})}</Text>
            <Text style={styles.date}>{format(date, 'p', {locale: ru})}</Text>
            <Text style={styles.date}>{place}</Text>
            </View>
        </View>

    )
}

export default NewEvent
