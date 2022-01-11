import React from 'react'
import {View} from 'react-native'
import UserInformation from "../../components/UserInformation";
import Swiper from "react-native-deck-swiper";
import {users} from "../../MockData/users";
import {colors, globalStyles} from '../../styles/globalStyles';

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
                animateCardOpacity={true}
                overlayLabels={{
                left: {
                    title: 'Отклонить',
                    style: {
                        label: {
                            color: 'white',
                            fontSize: 24,
                            height: 100,
                            width: 175,
                            backgroundColor: colors.darkRed,
                            flexWrap: 'wrap',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            borderBottomRightRadius: 25,
                            borderTopRightRadius: 125,
                            borderBottomLeftRadius: 25,
                            borderTopLeftRadius: 25,
                        },
                        wrapper: {
                            alignItems: 'flex-end',
                            justifyContent: 'flex-start',
                            marginTop: 50,
                            marginLeft: 75,
                            zIndex: 100,
                            elevation: 100,
                            shadowColor: "black",
                            shadowOffset: {
                                width: 15,
                                height: 15,
                            },
                            shadowOpacity: 0.75,
                            shadowRadius: 10,
                        }
                    }
                },
                right: {
                    title: 'Одобрить',
                    style: {
                        label: {
                            color: 'white',
                            fontSize: 24,
                            height: 100,
                            width: 175,
                            backgroundColor: colors.violet,
                            flexWrap: 'wrap',
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            borderBottomRightRadius: 25,
                            borderTopRightRadius: 25,
                            borderBottomLeftRadius: 25,
                            borderTopLeftRadius: 125,
                        },
                        wrapper: {
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            justifyContent: 'flex-start',
                            marginTop: 30,
                            marginLeft: -75,
                            zIndex: 100,
                            elevation: 100
                        }
                    }
                }
            }}>
            </Swiper>
        </View>
    )
}

export default EventRequests
