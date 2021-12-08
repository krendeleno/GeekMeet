import React, {useState} from 'react';
import RegistrationForm1 from "./RegistrationForm1";
import RegistrationForm2 from "./RegistrationForm2";
import RegistrationForm3 from "./RegistrationForm3";
import {createStackNavigator} from "@react-navigation/stack";

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
        <Stack.Navigator>
            <Stack.Screen name="RegistrationForm1"
                          options={{
                              headerShown: false,
                          }}>
                {(props) => <RegistrationForm1 {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
            <Stack.Screen name="RegistrationForm2"
                          options={{
                              title: "Аватарка",
                          }}>
                {(props) => <RegistrationForm2 {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
            <Stack.Screen name="RegistrationForm3"
                          options={{
                              title: "О Себе",
                          }}>
                {(props) => <RegistrationForm3 {...props}
                                               userData={userData} onChange={onChange} login={login}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Registration;