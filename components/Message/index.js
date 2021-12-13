import React from 'react';
import {View, Text, Image} from 'react-native';
import {colors, globalStyles} from '../../styles/globalStyles'
import { format } from "date-fns";
import {ru} from "date-fns/locale";
import styles from "./styles";
import Button from "../Button";


const Message = ({ text, author, date, image, goToUserProfile }) => {

    const getCorrectColor = () => {
        return author === "you" ? styles.yourMessageColor : styles.messageColor;
    }

    const getCorrectRow = () => {
        return author === "you" ? styles.yourMessageRow : styles.messageRow;
    }

    const getImage = () => {
        return author === "you" ? styles.noImg : styles.img;
    }

    return (
        <View style={[styles.messageContainer, getCorrectRow()]}>
            <Button onPress={goToUserProfile} image={'true'}>
                <Image style={getImage()} source={image}/>
            </Button>
            <View style={[getCorrectColor(), styles.messageText]}>
            <Text style={styles.text}>{text}</Text>
            </View>
            <Text>{format(date, 'd LLL p', {locale: ru})}</Text>
        </View>
    )
}

export default Message;