import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from "./styles";
import BackHeader from "../BackHeader";
import {numStringMaker} from '../../utils/numStringMaker'
import Button from "../Button";


const ChatHeader = ({ title, participants, onPress, image, color, goToUserProfile }) => {

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
            <TouchableOpacity onPress={goToUserProfile}>
                <Image style={styles.img} source={image}/>
            </TouchableOpacity>
        </View>
    )
}

export default ChatHeader;