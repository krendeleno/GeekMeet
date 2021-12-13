import React from 'react';
import { View } from 'react-native';
import {globalStyles, colors, contentWidth} from '../../../styles/globalStyles'
import ImageLoader from "../../../components/ImageLoader";
import defaultAvatars from "../../../assets/defaultAvatars/defaultAvatars";


const RegistrationAvatar = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('RegistrationEnd')
    }

    return (
        <View style={globalStyles.anotherContainer}>
            <ImageLoader defaultImages={defaultAvatars} title="Далее" onPress={onPress} color={colors.green} size={contentWidth.small}/>
        </View>
    )
}

export default RegistrationAvatar;