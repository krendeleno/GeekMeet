import React from 'react'
import { View, Text, Image } from 'react-native';
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import styles from './styles'
import {globalStyles} from "../../styles/globalStyles";

const NewEvent = ({image, title, date, place}) => {

    return (
        <View style={styles.card}>
            <Image source={{uri: image}} style={globalStyles.img}/>
            <Text>{title}</Text>
            <Text>{format(date, 'd MMMM', {locale: ru})}</Text>
            <Text>{format(date, 'p', {locale: ru})}</Text>
            <Text>{place}</Text>
        </View>

    )
}

export default NewEvent
