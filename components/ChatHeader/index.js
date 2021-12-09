import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from "./styles";
import BackHeader from "../BackHeader";


const ChatHeader = ({ title, participants, onPress, image, color }) => {

    return (
        <View style={styles.container}>
            <BackHeader color={color} onPress={onPress} />
            <View>
                <Text>{title}</Text>
                <Text>{participants}</Text>
            </View>
            <Image style={styles.img} source={image} />
        </View>
    )
}

export default ChatHeader;