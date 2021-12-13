import React from 'react';
import { View } from 'react-native';
import { globalStyles, colors, contentWidth } from '../../styles/globalStyles'
import ImageLoader from "../../components/ImageLoader";
import defaultAvatars from "../../assets/defaultEventCovers/defaultEventCovers";


const AddEventCover = ({ navigation }) => {
    const onPress = () => {
        navigation.navigate('FeedList')
    }

    return (
        <View style={globalStyles.container}>
            <ImageLoader defaultImages={defaultAvatars} title="Добавить мероприятие" onPress={onPress} color={colors.green} size={contentWidth.large}/>
        </View>
    )
}

export default AddEventCover;