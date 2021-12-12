import React from 'react'
import {View} from 'react-native'
import Swiper from "react-native-deck-swiper";
import {users} from "../../MockData/users";
import UserInformation from "../../components/UserInformation";
import { globalStyles } from '../../styles/globalStyles';

const FriendsRequests = ({navigation}) => {
    const renderCard = (card) => {
        return (
            <UserInformation user={card} fromRequests={true} greenBack={false} />
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
                onSwipedTop={() => onSwiped('top')}
                onSwipedBottom={() => onSwiped('bottom')}
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


export default FriendsRequests
