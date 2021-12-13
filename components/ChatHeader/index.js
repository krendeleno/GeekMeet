import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from "./styles";
import BackHeader from "../BackHeader";
import {numStringMaker} from '../../utils/numStringMaker'
import Button from "../Button";
import {colors} from "../../styles/globalStyles";


const ChatHeader = ({ title, participants, onPress, image, color, goToUserProfile }) => {

    const getCorrectHeader = () => {
        return participants? participants + ' ' +numStringMaker(participants, ['участник', 'участника', 'участников']) : '';
    }

    return (
        <View style={styles.container}>
            <BackHeader color={color} onPress={onPress} />
            <View>
                <Text style={{color: colors.deepViolet, fontSize: 22, fontWeight: 'bold'}}>{title}</Text>
                <Text style={{alignSelf: 'center'}}>{getCorrectHeader()}</Text>
            </View>
            <TouchableOpacity onPress={goToUserProfile}>
                <Image style={styles.img} source={image}/>
            </TouchableOpacity>
        </View>
    )
}

export default ChatHeader;