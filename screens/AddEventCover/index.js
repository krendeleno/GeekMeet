import React, {useContext} from 'react';
import { View } from 'react-native';
import { globalStyles, colors, contentWidth } from '../../styles/globalStyles'
import ImageLoader from "../../components/ImageLoader";
import defaultAvatars from "../../assets/defaultEventCovers/defaultEventCovers";
import {Context} from "../../components/Context";
import {postApi} from "../../utils/api";


const AddEventCover = ({ navigation, eventData }) => {
    const [context, setContext] = useContext(Context);
    const onPress = () => {
        // postApi('event/create', context, {
        //     name: eventData.title,
        //     about: eventData.description,
        //     seats: eventData.participants,
        //     address: {
        //         name: eventData.place,
        //         address: eventData.street + ' ' + eventData.house,
        //         metro: eventData.metro
        //     }
        // }).then((data) => {
        //     navigation.navigate('FeedList');
        // })
    }

    return (
        <View style={globalStyles.anotherContainer}>
            <ImageLoader defaultImages={defaultAvatars} title="Добавить мероприятие" onPress={onPress} color={colors.green} size={contentWidth.large}/>
        </View>
    )
}

export default AddEventCover;