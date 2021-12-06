import React, {useState} from 'react';
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import BaseNavigation from "./routes/BaseNavigation";

const Stack = createNativeStackNavigator();

const App = () => {
    const [token, setToken] = useState('');

    const login = () => {
        setToken('myToken');
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {token ? (
                    // Screens for logged in users
                    <Stack.Group screenOptions={{headerShown: false}}>
                        <Stack.Screen name="BaseNavigation" component={BaseNavigation} />
                    </Stack.Group>
                ) : (
                    // Auth screens
                    <Stack.Group screenOptions={{headerShown: false}}>
                        <Stack.Screen name="Login">
                            {props => <Login {...props} login={login} />}
                        </Stack.Screen>
                        <Stack.Screen name="Registration">
                            {props => <Registration {...props} login={login} />}
                        </Stack.Screen>
                    </Stack.Group>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;