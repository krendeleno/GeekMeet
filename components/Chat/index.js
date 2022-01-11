import React, {useState} from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import {colors, globalStyles} from '../../styles/globalStyles'
import chatStyles from '../../styles/chatStyles'


const Chat = ({ title, lastMessage, onPress, image }) => {


    return (
        <TouchableOpacity onPress={onPress} style={chatStyles.chat}>
            <Image source={image} style={[globalStyles.tinyImg, {marginRight: '5%', borderRadius: 100,}]}/>
            <View>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: colors.deepViolet, paddingBottom: 1.5}}>{title}</Text>
                <Text style={{fontSize: 17.5, color: colors.deepViolet}}>{lastMessage}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Chat;