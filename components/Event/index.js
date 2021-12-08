import React from 'react'
import { useState } from 'react/cjs/react.development'
import {  TouchableOpacity, Image, View } from 'react-native'

import EventRequestIcon from '../EventRequestIcon'
import Bookmark from '../EventRequestIcon/Bookmark'
import TagList from '../TagList'
import EventInfo from './EventInfo'

import styles from './styles'

const Event = ({title, date, time, place, participants, isBookmarked, eventRequestStatus, tags, onPress, image}) => {

    const [isMarked, setMark] = useState(isBookmarked);
    const [requestStatus, setStatus] = useState(eventRequestStatus);

    const onRequestIcon = ()=>{
        if (requestStatus == "sent"){
            setStatus("default");
            console.log(title + " request status now: " +  requestStatus);
        } else if (requestStatus == "default"){
            setStatus("sent");
            console.log(title + " request status now: " +  requestStatus);
        }
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image style= {styles.img} source={{uri:image}}/>
            <View>
                <TagList tagList={tags}/>
                <EventInfo title={title} date={date} time ={time} place={place} participants={participants}/>
            </View>
            <View>
                <EventRequestIcon 
                    status={requestStatus} 
                    onPress={onRequestIcon}/>
                <Bookmark 
                    isMarked={isMarked} 
                    onPress={()=>{
                        setMark(!isMarked)}}
                />
            </View>
        </TouchableOpacity>
    )
}

export default Event
