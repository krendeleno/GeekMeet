import React, {useContext, useState} from 'react'
import TabIcon from '../TabIcon'
import EventList from '../EventList'

import {events} from '../../MockData/events'
import { globalStyles } from '../../styles/globalStyles'
import { Text, View } from 'react-native'
import styles from './styles'
import {Context} from "../Context";

const ProfEventsSecondTab = ({navigation, userData}) => {
    const [active, setActive] = useState(1)
    const [context, setContext] = useContext(Context);

    const markedEvents = events.filter(item=> item.isMarked && item.adminId !== context.userId)
    const sendEvents = events.filter(item=> item.requestStatus === "sent"  && item.adminId !== context.userId)
    const acceptedEvents = events.filter(item=> item.requestStatus === "accepted"  && item.adminId !== context.userId)
    const adminEvents = events.filter(item=> item.adminId === context.userId)


    const eventListRender = () => {
        switch(active){
            case 2:
                return (sendEvents ? <EventList events={sendEvents} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>У Вас нет мероприятий, заявки на которые ожидают одобрения</Text>)
            case 3:
                return (acceptedEvents ? <EventList events={acceptedEvents} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>Вас не хотят принимать на мероприятия :с</Text>)
            case 4:
                return (adminEvents ? <EventList events={adminEvents} navigation={navigation}/> : <Text style={globalStyles.noEventsStyle}>Скорее добавьте что-нибудь в избранное!</Text>)
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
