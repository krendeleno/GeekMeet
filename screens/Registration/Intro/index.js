import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import {globalStyles, colors, contentWidth} from '../../../styles/globalStyles'
import Button from "../../../components/Button";

const slides = [
    {
      key: 1,
      title: 'Первый слайд',
      text: 'Description.\nSay something cool',
      image: require("../../../assets/defaultAvatars/naruto.png"),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Второй слайд',
      text: 'Other cool stuff',
      image: require("../../../assets/defaultAvatars/betmen.png"),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Третий слайд',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require("../../../assets/defaultAvatars/kharli.png"),
      backgroundColor: '#22bcb5',
    },
    {
      key: 4,
      title: 'Четвертый слайд',
      text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
      image: require("../../../assets/defaultAvatars/germiona.png"),
      backgroundColor: '#22bcb5',
    }
  ];

const Intro = () => {
    _renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
              <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <Image style={styles.image} source={item.image}/>
            
          </View>
        );
      }
    
      _onDone = () => {
        // User finished the introduction. Show real app through
        // navigation or simply by controlling state
        
      }

      _keyExtractor = (item) => item.title;
    
      _renderNextButton = () => {
        return (
            <View style={styles.next}>
                <Text style={styles.next.text}>Далее</Text>
            </View>
        );
      };
    
      _renderDoneButton = () => {
        return (
          <View style={styles.done}>
            <Text style={styles.done.text}>Начать</Text>
          </View>
        );
      };

      _renderSkipButton = () => {
        return (
            <View style={styles.skip}>
                <Text style={styles.skip.text}>Пропустить</Text>
            </View>
        );
      };

      
    return (
        <>
            <AppIntroSlider 
                keyExtractor={this._keyExtractor}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                renderSkipButton={this._renderSkipButton}
                bottomButton
                showSkipButton
                showPrevButton
                renderItem={this._renderItem} 
                data={slides} 
                onDone={this._onDone}
                dotStyle={{backgroundColor:"#EBE1FF"}}
                activeDotStyle={{backgroundColor:"#9C8BC9"}}
            />
        </>
    )
}


const styles = StyleSheet.create({
    next:{
        backgroundColor: '#F8F6FE',
        flex: 1,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width: contentWidth.large,
        maxHeight: 50,
        
        borderRadius: 16,
        minHeight: 50,
        text:{
            color:"#49386C"
        }
    },

    skip:{
        color:"black",
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width: contentWidth.large,
        marginTop:10,
        marginBottom:18,
        
        borderRadius: 16,
        
        text:{
            color:"#9C8BC9",
            textDecorationLine: "underline",
        }
    },

    done:{
        backgroundColor: '#9C8BC9',
        flex: 1,
        flexDirection:"row",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:"center",
        width: contentWidth.large,
        maxHeight: 50,
        
        borderRadius: 16,
        minHeight: 50,
        text:{
            
            color:"white"
        }
    },

    slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"white"
    },

    image: {
      width: 320,
      height: 320,
      marginVertical: 32,
    },

    text: {
      color: '#9C8BC9',
      textAlign: 'center',
    },

    title: {
      fontSize: 22,
      fontWeight:"bold",
      color: '#6E53AE',
      textAlign: 'center',
      marginBottom:30
    },

  });

export default Intro
