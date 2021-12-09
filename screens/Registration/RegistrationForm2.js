import React from 'react';
import { View } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles'
import ImageLoader from "../../components/ImageLoader";
import defaultAvatars from "../../MockData/defaultImages";


const RegistrationForm2 = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('О себе')
    }

    return (
        <View style={globalStyles.container}>
            <ImageLoader defaultImages={defaultAvatars} title="Далее" onPress={onPress} color={colors.green}/>
        </View>
    )
}

export default RegistrationForm2;