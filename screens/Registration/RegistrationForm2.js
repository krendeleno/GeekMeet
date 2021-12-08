import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles'
import Button from "../../components/Button";
import ImageLoader from "../../components/ImageLoader";


const RegistrationForm2 = ({ navigation, setData, userData }) => {
    const onPress = () => {
        navigation.navigate('RegistrationForm3')
    }

    return (
        <View style={globalStyles.container}>
            <Text>Аватарка</Text>
            <ImageLoader />
            <Button title="Далее" color={colors.green} onPress={onPress}/>
        </View>
    )
}

export default RegistrationForm2;