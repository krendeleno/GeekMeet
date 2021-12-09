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
        <Event item ={item}
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
