import React, {useState} from 'react';
import RegistrationInfo from "../screens/Registration/RegistrationInfo";
import RegistrationAvatar from "../screens/Registration/RegistrationAvatar";
import RegistrationEnd from "../screens/Registration/RegistrationEnd";
import {createStackNavigator} from "@react-navigation/stack";
import BackHeader from "../components/BackHeader";

const Stack = createStackNavigator();

const Registration = ({login}) => {
    const defaultUserData = {
        nick: '',
        email: '',
        password: '',
        confirmPassword: '',
        description: '',
        tags: []
    }

    const [userData, setData] = useState(defaultUserData);
    const onChange = (event) => {
        const {name, text} = event;
        setData(values => ({...values, [name]: text}))
    }

    return (
        <Stack.Navigator screenOptions={
            ({ navigation }) => ({
                headerLeft: () => <BackHeader onPress={navigation.goBack}
                                              color="green" />
            })
        }>
            <Stack.Screen name="RegistrationInfo"
                          options={{
                              headerShown: false,
                          }}>
                {(props) => <RegistrationInfo {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
            <Stack.Screen name="RegistrationAvatar" options={{title: "Аватарка"}}>
                {(props) => <RegistrationAvatar {...props} userData={userData} onChange={onChange}/>}
            </Stack.Screen>
            <Stack.Screen name="RegistrationEnd" options={{title: "О себе"}}>
                {(props) => <RegistrationEnd {...props}
                                   userData={userData} onChange={onChange} login={login}/>}
            </Stack.Screen>
        </Stack.Navigator>
    )
}

export default Registration;