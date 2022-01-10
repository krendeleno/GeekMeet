import React from 'react'
import Swiper from 'react-native-deck-swiper'
import { Text, View } from 'react-native'
import { events } from '../../MockData/events'
import NewEvent from "../../components/NewEvent";
import { globalStyles } from '../../styles/globalStyles';



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
                            title: 'NOPE',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-end',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: -30,
                                    zIndex: 100,
                                    elevation: 100
                                }
                            }
                        },
                        right: {
                            title: 'LIKE',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start',
                                    marginTop: 30,
                                    marginLeft: 30,
                                    zIndex: 100,
                                    elevation: 100
                                }
                            }
                        },
                        top: {
                            title: 'SUPER LIKE',
                            style: {
                                label: {
                                    backgroundColor: 'black',
                                    borderColor: 'black',
                                    color: 'white',
                                    borderWidth: 1
                                },
                                wrapper: {
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    zIndex: 100,
                                    elevation: 100
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