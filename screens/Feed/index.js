import React, {useContext, useEffect, useState} from 'react';
import { Text, View} from 'react-native';
import {globalStyles, colors, contentWidth} from '../../styles/globalStyles';
import SearchBar from '../../components/SearchBar';
import EventList from '../../components/EventList'
import Button from '../../components/Button'
import {Context} from "../../components/Context.js"
import {events} from "../../MockData/events"
import {TouchableOpacity} from "react-native-gesture-handler";
import axios from "axios";


const Feed = ({navigation}) => {
    const [context, setContext] = useContext(Context);
    // const [events, setEvents] = useState([]);
    const [isNew, setNew] = useState(true);
    const [searchData, setSearchData] = useState('');
    const [tags, setTags] = useState([]);
    const [refreshing, setRefreshing] = React.useState(false);

    // const getEvents = async () => {
    //     const response = await axios.post(`${context.baseUrl}/user/login`, {headers: {
    //             Authorization: 'token ' + context.token
    //         }})
    //     return response.data;
    // }
    //
    // useEffect(() => {
    //     getEvents().then((data) => setEvents(data))
    //     console.log(events)
    // }, [])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setNew(true);
        setTimeout(() => setRefreshing(false), 500);
    }, []);

    const onSearchChange = (event) => {
        const {text} = event;
        setSearchData(text.toLocaleLowerCase())
    }

    const onTagChange = (id, isChecked) => {
        if (isChecked){
            setTags([...tags, id]);
        } else {
            let filteredArray = tags.filter(item => item !== id)
            setTags(filteredArray)
        }
    }

    const filteredEvents = events.filter(
        item =>
          item.place.toLocaleLowerCase().includes(searchData) ||
          item.title.toLocaleLowerCase().includes(searchData)
    );

    const tagFilteredEvents = (tags.length !== 0) ? filteredEvents.filter(
        item => item.tags.some(tag=> tags.includes(tag))
    ) : filteredEvents;

    const eventsToDisplay = (searchData || tags) ? tagFilteredEvents : events;

    return (
        <View style={globalStyles.feedContainer}>
            <SearchBar
                onChange={onSearchChange}
                onTagChange = {onTagChange}
                searchData = {searchData}
            />
            
            {isNew &&

                <TouchableOpacity style={globalStyles.newButton} onPress={() => {
                    setNew(false);
                    navigation.navigate('NewFeed');
                }}>
                    <Text style={globalStyles.newTextStyle}>Новое</Text>
                </TouchableOpacity>

            }
            {eventsToDisplay.length !== 0 
                ? 
            <EventList
                    events={eventsToDisplay} 
                    navigation={navigation}
                    onRefresh={onRefresh} 
                    refreshing={refreshing} 
                    fromSearch={true}
                    userId = {context.userId}
            />
                : 
                <>
                    <Text style={globalStyles.noEventsStyle}>Такого ивента еще нет :С {"\n"}попробуйте нажать на кнопку{"\n"}Новое{"\n"}или создайте событие сами!{"\n"}</Text>
                </>
             }
        </View>
    )
}

export default Feed;