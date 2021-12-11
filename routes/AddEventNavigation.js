import React, {useState} from 'react';
import AddEventInfo from "../screens/AddEventInfo";
import {createStackNavigator} from "@react-navigation/stack";
import AddEventCover from "../screens/AddEventCover";
import CloseHeader from "../components/CloseHeader";
import BackHeader from "../components/BackHeader";

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
        tags: []
    }

    const [eventData, setEventData] = useState(defaultEventData);
    const onChange = (event) => {
        const {name, text} = event;
        setEventData(values => ({...values, [name]: text}))
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="EventAddInfo"
                          options={
                              ({route, navigation, options}) => ({
                                  headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                  title: 'Мероприятие',
                                  presentation: 'modal'
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
                    title: 'Обложка'
                })
            }>
                {(props) => <AddEventCover {...props} eventData={eventData} onChange={onChange}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default AddEventNavigation;