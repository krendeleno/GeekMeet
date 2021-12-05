import React, {useState} from 'react';
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const App = () => {
    const [token, setToken] = useState('');

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {token ? (
                    // Screens for logged in users
                    <Stack.Group>

                    </Stack.Group>
                ) : (
                    // Auth screens
                    <Stack.Group screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Login" component={Login}/>
                        <Stack.Screen name="Registration" component={Registration}/>
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;