import React, {useState} from 'react';
import AddEventInfo from "../screens/AddEventInfo";
import {createStackNavigator} from "@react-navigation/stack";
import AddEventCover from "../screens/AddEventCover";
import CloseHeader from "../components/CloseHeader";
import BackHeader from "../components/BackHeader";
import { colors, fonts } from '../styles/globalStyles';

const Stack = createStackNavigator();

const AddEventNavigation = () => {
    const defaultEventData = {
        title: '',
        dateTime: new Date(),
        place: '',
        street: '',
        house: '',
        metro: '',
        participants: 2,
        description: '',
        tags: [],
        avatar: ''
    }

    const [eventData, setEventData] = useState(defaultEventData);
    const onChange = (event) => {
        const {name, text} = event;
        setEventData(values => ({...values, [name]: text}))
    }

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
                elevation: 0,
                shadowOpacity: 0,

                },
        }}>
            <Stack.Screen name="EventAddInfo"
                          options={
                              ({route, navigation, options}) => ({
                                  headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                  title: 'Мероприятие',
                                  presentation: 'modal',
                                  headerTitleStyle: {
                                    color:colors.textViolet,
                                    fontFamily: fonts.bold,
                                    fontSize: 20,
                                    textAlignVertical:"center"
                                  },
                              })
                          }>
                {(props) => <AddEventInfo {...props}
                                          eventData={eventData}
                                          onChange={onChange}
                                          setEventData={setEventData}/>}
            </Stack.Screen>
            <Stack.Screen name="EventAddCover" options={
                ({ navigation }) => ({
                    headerLeft: () => <BackHeader onPress={navigation.goBack}
                                                  color="violet" />,
                    title: 'Обложка',
                    headerTitleStyle: {
                        color:colors.textViolet,
                        fontFamily: fonts.bold,
                        fontSize: 20,
                        textAlignVertical:"center"
                      },

                })
            }>
                {(props) => <AddEventCover {...props} eventData={eventData} setEventData={setEventData}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default AddEventNavigation;