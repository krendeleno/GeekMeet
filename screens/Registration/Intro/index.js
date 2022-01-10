import React, {useContext} from 'react'
import { Image,Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import VectorImage from 'react-native-vector-image';
import {Context} from "../../../components/Context";
import styles from './styles'

const slides = [
    {
      key: 1,
      title: 'Находи события',
      text: 'Выбирай мероприятия по вкусу,\nучавствуй в актуальных ивентах\nи добавляй в избранное',
      image: require("../../../assets/onboardingImages/event.svg"),
      backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Создавай мероприятия',
      text: 'Устрой собственный ивент\nи собери людей по интересам',
      image: require("../../../assets/onboardingImages/newEvent.svg"),
      backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Заводи новых друзей',
      text: 'Добавляй участников событий в друзья,\'чтобы продолжить с ними общение',
      image: require("../../../assets/onboardingImages/newFriends.svg"),
      backgroundColor: '#22bcb5',
    },
    {
      key: 4,
      title: 'Общайся',
      text: 'Переписывайся с участниками\nсобытий в групповых чатах,\nа с друзьями - в личных',
      image: require("../../../assets/onboardingImages/chat.svg"),
      backgroundColor: '#22bcb5',
    }
  ];

const Intro = ({navigation}) => {
    const [context, setContext] = useContext(Context);
    const _renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
              <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
            <VectorImage style={styles.image} source={item.image}/>
            
          </View>
        );
      }

    const _onDone = () => {
        setContext(values => ({...values, isFirst: false}));
      }

    const _keyExtractor = (item) => item.title;

    const _renderNextButton = () => {
        return (
            <View style={styles.next}>
                <Text style={styles.next.text}>Далее</Text>
            </View>
        );
      };

    const _renderDoneButton = () => {
        return (
          <View style={styles.done}>
            <Text style={styles.done.text}>Начать</Text>
          </View>
        );
      };

    const _renderSkipButton = () => {
        return (
            <View style={styles.skip}>
                <Text style={styles.skip.text}>Пропустить</Text>
            </View>
        );
      };

      
    return (
        <>
            <AppIntroSlider 
                keyExtractor={_keyExtractor}
                renderDoneButton={_renderDoneButton}
                renderNextButton={_renderNextButton}
                renderSkipButton={_renderSkipButton}
                bottomButton
                showSkipButton
                showPrevButton
                renderItem={_renderItem}
                data={slides} 
                onDone={_onDone}
                dotStyle={{backgroundColor:"#EBE1FF"}}
                activeDotStyle={{backgroundColor:"#9C8BC9"}}
            />
        </>
    )
}



export default Intro
