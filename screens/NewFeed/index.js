import React from 'react'
import Swiper from 'react-native-deck-swiper'
import { View } from 'react-native'
import { events } from '../../MockData/events'
import NewEvent from "../../components/NewEvent";



const NewFeed = ({navigation}) => {

    const renderCard = (card) => {
        return (
            <NewEvent title={card.title} image={card.image} date={card.date} place={card.place} />
        )
    };

    const onSwiped = (type) => {
        console.log(`on swiped ${type}`)
    }

    const onSwipedAllCards = () => {
        navigation.navigate('Feed');
    };



        return (
            <View>
                <Swiper
                    cards={events}
                    renderCard={renderCard}
                    onSwipedLeft={() => onSwiped('left')}
                    onSwipedRight={() => onSwiped('right')}
                    onSwipedTop={() => onSwiped('top')}
                    onSwipedBottom={() => onSwiped('bottom')}
                    onSwipedAll={() => onSwipedAllCards()}
                    cardVerticalMargin={80}
                    cardIndex={0}
                    backgroundColor={'#FFFFF'}
                    stackSize= {3}
                    stackSeparation={15}>
                </Swiper>
            </View>
        )
}

export default NewFeed;