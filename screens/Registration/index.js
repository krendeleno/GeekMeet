import React, {useState} from 'react';
import RegistrationForm1 from "./RegistrationForm1";
import RegistrationForm2 from "./RegistrationForm2";
import RegistrationForm3 from "./RegistrationForm3";
import {createStackNavigator} from "@react-navigation/stack";
import ChatHeader from "../../components/ChatHeader";
import BackHeader from "../../components/BackHeader";
import {getHeaderTitle} from "@react-navigation/elements";

const Stack = createStackNavigator();

const Registration = ({login}) => {
    const defaultUserData = {
        nick: '',
        email: '',
        password: '',
        confirmPassword: '',
        about: '',
        tags: []
    }

    const [userData, setData] = useState(defaultUserData);
    const onChange = (event) => {
        const {name, text} = event;
        setData(values => ({...values, [name]: text}))
    }

    return (
        <Stack.Navigator screenOptions={
            ({route, navigation, options}) => ({
                headerLeft: null,
                headerTitle: () => <ChatHeader onPress={navigation.goBack}
                                               color="green"
                                               title={route.name}
                />
            })
        }>
            <Stack.Screen name="RegistrationForm1"
                          options={{
                              headerShown: false,
                          }}>
                {(props) => <RegistrationForm1 {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
            <Stack.Screen name="Аватарка">
                {(props) => <RegistrationForm2 {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
            <Stack.Screen name="О себе">
                {(props) => <RegistrationForm3 {...props}
                                               userData={userData} onChange={onChange} login={login}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Registration;