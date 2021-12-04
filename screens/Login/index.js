import React from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../styles/globalStyles'


const Index = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('RegistrationForm1')
    }


    return (
        <View style={globalStyles.container}>
            <Text onPress={onPress}>Регистрация</Text>
        </View>
    )
}

export default Index;