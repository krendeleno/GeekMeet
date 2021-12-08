import React from 'react'
import { FlatList } from 'react-native';
import VectorImage from 'react-native-vector-image';

import Event from '../../components/Event';

const separator = ()=>{
    return <VectorImage 
    source={require('../../assets/Icons/eventSeparator.svg')}
/>
}

const EventList = ({events, navigation}) => {
    const renderEvent = ({ item }) => (
        <Event title={item.title} 
            date={item.date}  
            time={item.time} 
            place={item.place} 
            participants={item.participants} 
            tags = {item.tags} 
            isBookmarked={item.isMarked} 
            eventRequestStatus = {item.requestStatus}
            image={item.image}
            onPress={() => {
                navigation.navigate('EventDetails', {
                    eventId: item.id,
                });
            }}
        />
    );

    return (
        <>
            <FlatList
                ItemSeparatorComponent={separator}
                data={events}
                renderItem={renderEvent}
                keyExtractor={(item) => item.id}
            />
        </>
    )
}

export default EventList
