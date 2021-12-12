import React from 'react';
import { View } from 'react-native';
import { globalStyles, colors } from '../../styles/globalStyles'
import ImageLoader from "../../components/ImageLoader";
import defaultAvatars from "../../assets/defaultEventCovers/defaultEventCovers";


const AddEventCover = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('Feed')
    }

    return (
        <View style={globalStyles.container}>
            <ImageLoader defaultImages={defaultAvatars} title="Добавить мероприятие" onPress={onPress} color={colors.green}/>
        </View>
    )
}

export default AddEventCover;