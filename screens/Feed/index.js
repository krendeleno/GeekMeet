import React, {useState} from 'react';
import { ScrollView, Text, View} from 'react-native';
import {globalStyles, colors} from '../../styles/globalStyles';
import SearchBar from '../../components/SearchBar';
import EventList from '../../components/EventList'
import Button from '../../components/Button'

import {events} from '../../MockData/events'


const Feed = ({navigation}) => {
    const [isNew, setNew] = useState(true);
    const [searchData, setSearchData] = useState('');
    const [tags, setTags] = useState([]);

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

    const tagFilteredEvents = (tags.length !=0) ? filteredEvents.filter(
        item => item.tags.some(tag=> tags.includes(tag))
    ) : filteredEvents;

    const eventsToDisplay = (searchData || tags) ? tagFilteredEvents : events;
    
    return (
        <View style={globalStyles.anotherContainer}>
            <SearchBar 
                onChange={onSearchChange} 
                onTagChange = {onTagChange} 
                searchData = {searchData} 
            
            />
            {isNew && <Button title="Новое" color={colors.violet} onPress={() => {
                navigation.navigate('NewFeed', {
                    /* eventId: item.id, */
                });
            }}/>}
            {eventsToDisplay.length !=0 ? <EventList events={eventsToDisplay} navigation={navigation}/> 
            : 
            <Text>Такого ивента еще нет :С
            </Text> }
        </View>
    )
}

export default Feed;