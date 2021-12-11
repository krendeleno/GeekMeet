import React from 'react'
import { useState } from 'react/cjs/react.development'
import {  TouchableOpacity, Image, View } from 'react-native'

import EventRequestIcon from '../EventRequestIcon'
import Bookmark from '../EventRequestIcon/Bookmark'
import TagList from '../TagList'
import EventInfo from '../EventInfo'

import styles from './styles'
import RequestNum from '../RequestNum'

const Event = ({item, onPress, admin}) => {

    const {title, date, time, place, participants, isMarked, requestStatus, tags,image} = item;

    const [isBookmarked, setBookmark] = useState(isMarked);
    const [eventRequestStatus, setStatus] = useState(requestStatus);

    const onRequestIcon = ()=>{
        if (eventRequestStatus == "sent"){
            setStatus("default");
            console.log(title + " request status now: " +  eventRequestStatus);
        } else if (eventRequestStatus == "default"){
            setStatus("sent");
            console.log(title + " request status now: " +  eventRequestStatus);
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style= {styles.img} source={{uri:image}}/>
            <View style={styles.infoContainer}>
                <TagList tagList={tags} fromSearch={false} small={true}/>
                <EventInfo title={title} date={date} time ={time} place={place} participants={participants}/>
            </View>
            
            {admin 
                ? 
                <RequestNum number={6} fromFriends={false}/>
                :
                <View style={styles.iconsContainer}>
                    
                    <Bookmark 
                        isMarked={isBookmarked} 
                        onPress={()=>{
                            setBookmark(!isBookmarked)}}
                    />
                    <EventRequestIcon 
                        status={eventRequestStatus} 
                        onPress={onRequestIcon}/>
                </View>
            }
                
        </TouchableOpacity>
    )
}

export default Event
