import React from 'react'
import {View} from 'react-native'
import UserInformation from "../../components/UserInformation";
import Swiper from "react-native-deck-swiper";
import {users} from "../../MockData/users";
import { globalStyles } from '../../styles/globalStyles';

const EventRequests = ({navigation}) => {
    const renderCard = (card) => {
        return (
            <UserInformation user={card} fromRequests={true} greenBack={true}/>
        )
    };

    const onSwiped = (type) => {
        console.log(`on swiped ${type}`)
    }

    const onSwipedAllCards = () => {
        navigation.goBack();
    };



    return (
        <View style={globalStyles.containerNewFeed}>
            <Swiper
                cards={users}
                renderCard={renderCard}
                onSwipedLeft={() => onSwiped('left')}
                onSwipedRight={() => onSwiped('right')}
                disableBottomSwipe = {true}
                disableTopSwipe = {true}
                onSwipedAll={() => onSwipedAllCards()}
                cardVerticalMargin={80}
                cardIndex={0}
                backgroundColor={'white'}
                stackSize= {7}
                stackSeparation={50}
                stackScale={15}
                animateCardOpacity={true}>
            </Swiper>
        </View>
    )
}

export default EventRequests
