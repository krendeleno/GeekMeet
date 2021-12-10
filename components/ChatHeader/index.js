import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from "./styles";
import BackHeader from "../BackHeader";
import {numStringMaker} from '../../utils/numStringMaker'


const ChatHeader = ({ title, participants, onPress, image, color }) => {

    const getCorrectHeader = () => {
        return participants? participants + ' ' +numStringMaker(participants, ['участник', 'участника', 'участников']) : '';
    }

    return (
        <View style={styles.container}>
            <BackHeader color={color} onPress={onPress} />
            <View>
                <Text>{title}</Text>
                <Text>{getCorrectHeader()}</Text>
            </View>
            <Image style={styles.img} source={image} />
        </View>
    )
}

export default ChatHeader;