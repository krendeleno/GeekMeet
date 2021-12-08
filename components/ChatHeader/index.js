import React from 'react';
import {View, Text, Image} from 'react-native';
import VectorImage from "react-native-vector-image";
import {TouchableOpacity} from "react-native-gesture-handler";
import styles from "./styles";


const ChatHeader = ({ title, participants, onPress, image }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPress}>
                <VectorImage source={require('../../assets/Icons/backViolet.svg')}/>
            </TouchableOpacity>
            <View>
                <Text>{title}</Text>
                <Text>{participants}</Text>
            </View>
            <Image style={styles.img} source={require('../../assets/defaultAvatars/main.png')} />
        </View>
    )
}

export default ChatHeader;