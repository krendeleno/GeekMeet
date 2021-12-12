import React from 'react'
import Swiper from 'react-native-deck-swiper'
import { View } from 'react-native'
import { events } from '../../MockData/events'
import NewEvent from "../../components/NewEvent";
import { globalStyles } from '../../styles/globalStyles';



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
        navigation.navigate('FeedList');
    };



        return (
            <View style={globalStyles.containerNewFeed}>
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
                    
                    backgroundColor={'white'}
                    stackSize= {7}
                    stackSeparation={50}
                    stackScale={15}
                    animateCardOpacity={true}
                    >
                        
                </Swiper>
            </View>
        )
}

export default NewFeed;