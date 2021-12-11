import React from 'react'
import {View} from 'react-native'
import Swiper from "react-native-deck-swiper";
import {users} from "../../MockData/users";
import UserInformation from "../../components/UserInformation";

const FriendsRequests = ({navigation}) => {
    const renderCard = (card) => {
        return (
            <UserInformation user={card} fromRequests={true} />
        )
    };

    const onSwiped = (type) => {
        console.log(`on swiped ${type}`)
    }

    const onSwipedAllCards = () => {
        navigation.goBack();
    };



    return (
        <View>
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
                backgroundColor={'#FFFFF'}
                stackSize= {3}
                stackSeparation={15}>
            </Swiper>
        </View>
    )
}


export default FriendsRequests
