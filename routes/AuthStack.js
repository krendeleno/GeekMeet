import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegistrationForm1 from "../screens/Registration/RegistrationForm1";
import RegistrationForm2 from "../screens/Registration/RegistrationForm2";
import RegistrationForm3 from "../screens/Registration/RegistrationForm3";
import Login from "../screens/Login";


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Auth">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="RegistrationForm1" component={RegistrationForm1} />
                <Stack.Screen name="RegistrationForm2" component={RegistrationForm2} />
                <Stack.Screen name="RegistrationForm3" component={RegistrationForm3} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AuthNavigation;