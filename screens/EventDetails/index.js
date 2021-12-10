import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import { useState } from 'react/cjs/react.development'
import VectorImage from 'react-native-vector-image';

import EventDiscription from '../../components/EventDiscription';
import TagList from '../../components/TagList';
import Seats from '../../components/Seats';
import UsersList from '../../components/UsersList';
import Button from '../../components/Button';
import User from '../../components/User';

import {events} from '../../MockData/events'
import {detailsStyle} from '../../styles/detailsStyle'
import Bookmark from '../../components/EventRequestIcon/Bookmark';
import CloseHeader from "../../components/CloseHeader";



const EventDetails = ({ route, navigation }) => {

    const { eventId } = route.params;
    const event = events.find(item => item.id === eventId)
    const {image, title, tags, participants, date, place, adminId, discription, members, isMarked, requestStatus} = event

    const [markStatus, setMark] = useState(isMarked);
    const [eventRequestStatus, setStatus] = useState(requestStatus);

    const onRequestIcon = ()=>{
        if (eventRequestStatus === "sent"){
            setStatus("default");
        } else if (eventRequestStatus === "default"){
            setStatus("sent");
        }
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
            <CloseHeader onPress={navigation.goBack}/>
            <Bookmark isMarked={markStatus} onPress={()=>{
                    setMark(!markStatus)}}/>
            <Image style={detailsStyle.img} source={{uri: image}} />
            <View style={detailsStyle.viewInfo}>
                <View>
                    <Text style={detailsStyle.title}>{title}</Text>
                    <TagList tagList={tags} fromSearch={false}/>
                    <Seats style={detailsStyle.seats} available={participants}/>
                    <Text style={detailsStyle.date}>{date}</Text>
                    <Text style={detailsStyle.place}>{place}</Text>
                </View>
                
                <User style={detailsStyle.bigUserImage} userId={adminId} navigation={navigation}/>
            </View>
            <EventDiscription style={detailsStyle.discription} discription={discription}/>
            <UsersList label="Участники" userList={members} navigation={navigation}/>
            {renderRequestButton(eventRequestStatus)}
        </ScrollView>
    )
}

export default EventDetails;