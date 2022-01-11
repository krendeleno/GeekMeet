import React from 'react'
import Swiper from 'react-native-deck-swiper'
import { Text, View } from 'react-native'
import { events } from '../../MockData/events'
import NewEvent from "../../components/NewEvent";
import {colors, globalStyles} from '../../styles/globalStyles';



const NewFeed = ({navigation}) => {

    const renderCard = (card) => {
        return (
            <NewEvent title={card.title} image={card.image} date={card.dateTime} place={card.place} />
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
                    disableBottomSwipe = {true}
                    cardVerticalMargin={80}
                    cardIndex={0}
                    
                    backgroundColor={'white'}
                    stackSize= {7}
                    stackSeparation={50}
                    stackScale={15}
                    animateCardOpacity={true}

                    overlayLabels={{
                        left: {
                            title: 'Перейти к следующему',
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
                            title: 'Добавить в закладки',
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
                        },
                        top: {
                            title: 'Отправить заявку',
                            style: {
                                label: {
                                    color: 'white',
                                    fontSize: 24,
                                    height: 100,
                                    width: 175,
                                    backgroundColor: colors.green,
                                    flexWrap: 'wrap',
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    borderBottomRightRadius: 125,
                                    borderTopRightRadius: 25,
                                    borderBottomLeftRadius: 125,
                                    borderTopLeftRadius: 25,
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 100,
                                    elevation: 100,
                                    marginTop: 170,
                                }
                            }
                        }
                    }}
                    >
                        
                </Swiper>
            </View>
        )
}

export default NewFeed;