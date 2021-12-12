import React from 'react'
import { FlatList, View } from 'react-native';
import VectorImage from 'react-native-vector-image';

import Event from '../../components/Event';

const separator = ()=>{
    return <VectorImage style={{alignSelf:"center", width:390}}
    source={require('../../assets/Icons/eventSeparator.svg')}
/>}

const EventList = ({events, navigation, admin}) => {

    const renderEvent = ({ item, i }) => (
        <Event item ={item}
            onPress={() => {
                navigation.navigate('EventDetails', {
                    eventId: item.id,
                });
            }}
            admin={admin}
        />
    );
    return (
        <FlatList
                ItemSeparatorComponent={separator}
                data={events}
                renderItem={renderEvent}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{backgroundColor:"white"}}

            /> 
    )
}

export default EventList
