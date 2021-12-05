import React, {useState} from 'react';
import RegistrationForm1 from "./RegistrationForm1";
import RegistrationForm2 from "./RegistrationForm2";
import RegistrationForm3 from "./RegistrationForm3";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const Registration = () => {
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
            <Stack.Screen name="RegistrationForm1">
                {(props) => <RegistrationForm1 {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
            <Stack.Screen name="RegistrationForm2">
                {(props) => <RegistrationForm2 {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
            <Stack.Screen name="RegistrationForm3">
                {(props) => <RegistrationForm3 {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Registration;