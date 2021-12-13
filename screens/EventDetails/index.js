import React, {useContext, useEffect} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { useState } from 'react/cjs/react.development'
import VectorImage from 'react-native-vector-image';

import Description from '../../components/Description';
import TagList from '../../components/TagList';
import Seats from '../../components/Seats';
import UsersList from '../../components/UsersList';
import Button from '../../components/Button';
import User from '../../components/User';

import {events} from '../../MockData/events'
import {detailsStyle} from '../../styles/detailsStyle'
import Bookmark from '../../components/EventRequestIcon/Bookmark';
import CloseHeader from "../../components/CloseHeader";
import styles from "../../components/EventInfo/styles";
import {format} from "date-fns";
import {ru} from "date-fns/locale";
import {getApi, postApi} from "../../utils/api";
import {Context} from "../../components/Context";




const EventDetails = ({ route, navigation }) => {
    const [context, setContext] = useContext(Context);
    const { eventId } = route.params;
    const event = events.find(item => item.id === eventId)
    const {image, title, tags, participants, date, place, adminId, description, members, isMarked, requestStatus,address} = event

    const [markStatus, setMark] = useState(isMarked);
    const [eventRequestStatus, setStatus] = useState(requestStatus);

    const onRequestIcon = ()=>{
        if (eventRequestStatus === "sent"){
            setStatus("default");
        } else if (eventRequestStatus === "default"){
            setStatus("sent");
        }
        // postApi(`/event/${eventId}/join`, context).then((data) => {});
    }

    // useEffect(() => {
    //     getApi(`/event/${eventId}`, context).then((data) => {});
    //     getApi(`/event/${eventId}/members`, context).then((data) => {});
    // }, [])

    const addToFavorites = () => {
        setMark(!markStatus);
        // postApi(`/event/${eventId}/favorites`, context).then((data) => {});
    }

    const renderRequestButton = (eventRequestStatus) =>{
        let image = "";
        let color = "";
        let text = "";

        switch (eventRequestStatus) {
            case "sent":
                text = "Отменить заявку"
                image = require('../../assets/Icons/whiteCross.svg');
                color = "red";
                break;

            case "default":
                text = "Подать заявку"
                image = require('../../assets/Icons/whitePlus.svg')
                color = "green";
                break;

            default:
                text = "Заявка одобрена"
                image = require('../../assets/Icons/whiteCheckMark.svg')
                color = "purple"
                break;
        }
        return <Button title={text} onPress={onRequestIcon} color={color}><VectorImage style ={detailsStyle.btnImg} source={image}/></Button>
    }

    return (
        <ScrollView contentContainerStyle={detailsStyle.container}>
            <View style={detailsStyle.header}>
                <CloseHeader onPress={navigation.goBack} whiteColor={true}/>
                <Bookmark isMarked={markStatus} onPress={addToFavorites} style={detailsStyle.bookmark} whiteColor={true}/>
            </View>
            <View styles={detailsStyle.containerForInnerShadow}>
                <Image style={detailsStyle.img} source={{uri: image}} />
                <View style={detailsStyle.topInnerShadow}/>
                {/* <View style={detailsStyle.bottomInnerShadow}/> */}
            </View>
            <Text style={detailsStyle.title}>{title}</Text>
            <View style={detailsStyle.viewInfo}>
                <View>

                    <TagList tagList={tags} fromSearch={false} color={true}/>
                    <Seats style={detailsStyle.seats} available={participants} fromSearch={false}/>
                    <Text style={detailsStyle.date}>{format(date, 'd MMMM p', {locale: ru})}</Text>
                    <Text style={detailsStyle.place}>{place}</Text>
                    <Text style={detailsStyle.place}>{address}</Text>
                </View>

                <User style={detailsStyle.bigUserImage} userId={adminId} navigation={navigation}/>
            </View>
            <Description style={detailsStyle.description} description={description}/>
            <UsersList label="Участники" userList={members} navigation={navigation}/>
            {renderRequestButton(eventRequestStatus)}
        </ScrollView>
    )
}

export default EventDetails;