import React from 'react'
import { Image, Text, View } from 'react-native'
import {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
} from 'react-native';
import TagList from '../../components/TagList';
import User from '../../components/User';
import Description from '../../components/Description';
import UserInformation from '../../components/UserInformation';


const SCREEN_WIDTH = Dimensions.get('window').width;

const SwipeableCard = ({item, removeCard, swipedDirection}) => {
  const [xPosition, setXPosition] = useState(new Animated.Value(0));
  let swipeDirection = '';
  let cardOpacity = new Animated.Value(1);
  let rotateCard = xPosition.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: ['-20deg', '0deg', '20deg'],
  });

  let panResponder = PanResponder.create({
    onStartShouldSetPanResponder:
      (evt, gestureState) => false,
    onMoveShouldSetPanResponder:
      (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: 
      (evt, gestureState) => false,
    onMoveShouldSetPanResponderCapture:
      (evt, gestureState) => true,
    onPanResponderMove:
      (evt, gestureState) => {
        xPosition.setValue(gestureState.dx);
        if (gestureState.dx > SCREEN_WIDTH - 250) {
          swipeDirection = 'Right';
        } else if (gestureState.dx < -SCREEN_WIDTH + 250) {
          swipeDirection = 'Left';
        }
      },
    onPanResponderRelease: (evt, gestureState) => {
      if (
        gestureState.dx < SCREEN_WIDTH - 150 &&
        gestureState.dx > -SCREEN_WIDTH + 150
      ) {
        swipedDirection('--');
        Animated.spring(xPosition, {
          toValue: 0,
          speed: 5,
          bounciness: 10,
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > SCREEN_WIDTH - 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
        });
      } else if (gestureState.dx < -SCREEN_WIDTH + 150) {
        Animated.parallel([
          Animated.timing(xPosition, {
            toValue: -SCREEN_WIDTH,
            duration: 200,
            useNativeDriver: false,
          }),
          Animated.timing(cardOpacity, {
            toValue: 0,
            duration: 200,
            useNativeDriver: false,
          }),
        ]).start(() => {
          swipedDirection(swipeDirection);
          removeCard();
        });
      }
    },
  });

  return (
    <Animated.View
      {...panResponder.panHandlers}
      style={[
        styles.cardStyle,
        {
          backgroundColor: "#FBF8FF",
          opacity: cardOpacity,
          transform: [{translateX: xPosition}, {rotate: rotateCard}],
        },
      ]}>

        <UserInformation user={item} fromRequests={true}/>
    </Animated.View>
  );
};



const NewFeed = () => {
    const [noMoreCard, setNoMoreCard] = useState(false);
    const [
      sampleCardArray,
      setSampleCardArray
    ] = useState(users);
    const [swipeDirection, setSwipeDirection] = useState('--');
  
    const removeCard = (id) => {
      sampleCardArray.splice(
        sampleCardArray.findIndex((item) => item.id == id),
        1,
      );
      setSampleCardArray(sampleCardArray);
      if (sampleCardArray.length == 0) {
        setNoMoreCard(true);
      }
    };
  
    const lastSwipedDirection = (swipeDirection) => {
      setSwipeDirection(swipeDirection);
    };
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          {sampleCardArray.map((item, key) => (
            <SwipeableCard
              key={key}
              item={item}
              removeCard={() => removeCard(item.id)}
              swipedDirection={lastSwipedDirection}
            />
          ))}
          {noMoreCard ? (
            <Text style={{fontSize: 22, color: '#000'}}>
              А запросы закончились.
            </Text>
          ) : null}
        </View>
      </SafeAreaView>
    );
}






const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"white"
  },
  cardStyle: {
    width: 300,
    height: 490,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    borderRadius: 16,

    shadowColor: '#171717',
    shadowOffset: {width: 4, height: 4},
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  cardTitleStyle: {
    color: '#fff',
    fontSize: 24,
  },
  swipeText: {
    fontSize: 18,
    textAlign: 'center',
  },
  description:{
    backgroundColor: "white",
    alignSelf: 'center',
    borderRadius: 16,
    width:200,
    paddingVertical: 15,
    paddingHorizontal: 15,
    text:{
        
    }}

});


const users =[{
    id:1,
    nick:"CoffeeZombie",
    description:"Possibly the most common style of navigation in mobile apps is tab-based navigation.",
    tags:[1,2],
    friends:[2,3,4,5,6,7,8],
    image:"https://legkovmeste.ru/wp-content/uploads/2019/02/post_5aef047d1f75a.jpg"
},
{
    id:2,
    nick:"CrazyKitten",
    description:"Possibly the most common style of navigation in mobile apps is tab-based navigation.",
    tags:[1,3],
    friends:[1,3,4,5,6,7,8],
    image:"https://gafki.ru/wp-content/uploads/2019/09/4.-kotenok-elf.jpg"
},
{
    id:3,
    tags:[2,6],
    friends:[1,2,4,5,6,7,8],
    nick:"HungryKitten",
    description:"Possibly the most common style of navigation in mobile apps is tab-based navigation.",
    image:"https://i.pinimg.com/736x/a4/3e/64/a43e64f2990e19261f1949932e5846b5--pet-life-sphinx-cat.jpg"
}].reverse();

export default NewFeed