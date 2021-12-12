import React from 'react';
import { View } from 'react-native';
import { globalStyles, colors } from '../../../styles/globalStyles'
import ImageLoader from "../../../components/ImageLoader";
import defaultAvatars from "../../../assets/defaultAvatars/defaultAvatars";


const RegistrationAvatar = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('RegistrationEnd')
    }

    return (
        <View style={globalStyles.container}>
            <ImageLoader defaultImages={defaultAvatars} title="Далее" onPress={onPress} color={colors.green}/>
        </View>
    )
}

export default RegistrationAvatar;