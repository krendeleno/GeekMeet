import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Login from "./screens/Login";
import Registration from "./screens/Registration";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import BaseNavigation from "./routes/BaseNavigation";
import { SafeAreaView } from 'react-native-safe-area-context';
import {globalStyles} from './styles/globalStyles'
import { StyleSheet } from 'react-native';
import UserInfo from "./screens/UserInfo";
import ChatHeader from "./components/ChatHeader";
import CloseHeader from "./components/CloseHeader";

const Stack = createStackNavigator();

const App = () => {
    const [token, setToken] = useState('');

    const login = () => {
        setToken('myToken');
    }

    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer >
                <Stack.Navigator>
                    {token ? (
                        // Screens for logged in users
                        <Stack.Group>
                            <Stack.Screen name="BaseNavigation" component={BaseNavigation} options={{headerShown: false}}/>
                            <Stack.Screen name="UserInfo" component={UserInfo}
                                          options={
                                              ({route, navigation, options}) => ({
                                                  headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                                  title: route.params.nick,
                                                  presentation: 'modal'
                                              })
                                          }/>
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
        </SafeAreaView> 
        
    )
}

{/* <SafeAreaView style={styles.container}></SafeAreaView> */}

export const styles = StyleSheet.create({
    container: {
        flex: 1.5,
    }
});

export default App;