import React from 'react';
import {View, Text} from 'react-native';
import {colors, globalStyles} from '../../styles/globalStyles'
import { format } from "date-fns";
import {ru} from "date-fns/locale";
import styles from "./styles";


const Message = ({ text, author, date }) => {

    return (
        <View style={ author === "you" ? styles.yourMessage : styles.message }>
            <Text>{text}</Text>
            {author !== "you" ? (
                <Text>{author}</Text>
            ) : (
                <></>
            )}
            <Text>{format(date, 'd LLL p', {locale: ru})}</Text>
        </View>
    )
}

export default Message;