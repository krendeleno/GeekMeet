import React from 'react'
import {FlatList, RefreshControl, View} from 'react-native';
import VectorImage from 'react-native-vector-image';
import Event from '../../components/Event';

const separator = ()=>{
    return <VectorImage style={{alignSelf:"center", width:390}}
    source={require('../../assets/Icons/eventSeparator.svg')}
/>}

const EventList = ({events, navigation, admin, onRefresh, refreshing, fromSearch}) => {

    const renderEvent = ({item,i}) => (
        <Event item={item}
               onPress={() => {
                   navigation.navigate('EventDetails', {
                       eventId: item.id,
                   });
               }}
               admin={admin}
               navigation={navigation}

        />
    );
    return (
        <>
            {fromSearch 
                ? 
                <FlatList
                    ItemSeparatorComponent={separator}
                    data={events}
                    renderItem={renderEvent}
                    keyExtractor={(item) => item.id}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{backgroundColor: "white"}}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                />
                :

                    <View>
                        {events.map((item,i)=>{
                            const event = <Event item={item}
                                        key={item.id}
                                        onPress={() => {
                                            navigation.navigate('EventDetails', {
                                                eventId: item.id,
                                            });
                                        }}
                                        admin={admin}
                                        navigation={navigation}
                                        
                                        />
                            return i === events.length - 1 ? event : <>{event}{separator()}</>
                        })}
                    </View>  
            }
        </>
    )
}

export default EventList
