import React from 'react';
import { View } from 'react-native';
import {globalStyles, colors, contentWidth} from '../../../styles/globalStyles'
import ImageLoader from "../../../components/ImageLoader";
import defaultAvatars from "../../../assets/defaultAvatars/defaultAvatars";


const EditUserAvatar = ({ navigation, setData, userData }) => {
    const onPress = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={globalStyles.anotherContainer}>
            <ImageLoader avatar={userData.avatar} setData={setData} defaultImages={defaultAvatars} title="Готово" onPress={onPress} color={colors.green} size={contentWidth.small}/>
        </View>
    )
}

export default EditUserAvatar;