import React, { useState } from 'react'
import TabIcon from '../TabIcon'
import EventList from '../EventList'

import {events} from '../../MockData/events'
import { globalStyles } from '../../styles/globalStyles'
import { Text, View } from 'react-native'
import styles from './styles'

const ProfEventsSecondTab = ({navigation, userId}) => {
    const [active, setActive] = useState(1)
    
    const markedEvents = events.filter(item=> item.isMarked)
    const sendEvents = events.filter(item=> item.requestStatus == "sent")
    const acceptedEvents = events.filter(item=> item.requestStatus == "accepted")
    const adminEvents = events.filter(item=> item.adminId == userId)


    const eventListRender = () => {
        switch(active){
            case 2:
                return (sendEvents ? <EventList events={sendEvents} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>У Вас нет мероприятий, заявки на которые ожидают одобрения</Text>)
            case 3:
                return (acceptedEvents ? <EventList events={acceptedEvents} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>Вас не хотят принимать на мероприятия :с</Text>)
            case 4:
                return (adminEvents ? <EventList events={events} userId={userId} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>Скорее добавьте что-нибудь в избранное!</Text>)
            default:
                return (markedEvents ? <EventList events={markedEvents} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>Скорее добавьте что-нибудь в избранное!</Text>)

        }

    }
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <TabIcon 
                    focused={active == 1}
                    image={require('../../assets/Icons/bookmarkFill.svg')}
                    imageFocused={require('../../assets/Icons/whiteBookmark.svg')}
                    onChange={()=>setActive(1)}
                    tabIndex={1}
                />
                <TabIcon
                    focused={active == 2}
                    image={require('../../assets/Icons/purplePlus.svg')}
                    imageFocused={require('../../assets/Icons/whitePlus.svg')}
                    onChange={()=>setActive(2)}
                    tabIndex={2}
                />
                <TabIcon
                    focused={active == 3} 
                    image={require('../../assets/Icons/purpleCheckMark.svg')}
                    imageFocused={require('../../assets/Icons/whiteCheckMark.svg')}
                    onChange={()=>setActive(3)}
                    tabIndex={3}
                />
                <TabIcon
                    focused={active == 4} 
                    image={require('../../assets/Icons/purpleCrown.svg')}
                    imageFocused={require('../../assets/Icons/whiteCrown.svg')}
                    onChange={()=>setActive(4)}
                    tabIndex={4}
                />
            </View>
            {eventListRender()}
        </View>
    )
}

export default ProfEventsSecondTab
