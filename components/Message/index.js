import React from 'react';
import {View, Text, Image} from 'react-native';
import {colors, globalStyles} from '../../styles/globalStyles'
import { format } from "date-fns";
import {ru} from "date-fns/locale";
import styles from "./styles";
import Button from "../Button";


const Message = ({ text, author, date, image, goToUserProfile }) => {

    const getCorrectStyle = () => {
        return author === "you" ? styles.yourMessage : styles.message;
    }


    return (
        <View style={[getCorrectStyle(), styles.messageContainer]}>
            <Button onPress={goToUserProfile}>
                <Image source={image} style={globalStyles.tinyImg}/>
            </Button>
            <Text>{text}</Text>
            <Text>{format(date, 'd LLL p', {locale: ru})}</Text>
        </View>
    )
}

export default Message;