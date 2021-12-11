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
import FriendsRequests from "./screens/FriendsRequests";
import EventRequests from "./screens/EventRequests";
import NewFeed from "./screens/NewFeed";
import CloseHeader from "./components/CloseHeader";
import EventDetails from "./screens/EventDetails";
import ChatDetails from "./screens/ChatDetails";
import ChatHeader from "./components/ChatHeader";

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
                            <Stack.Screen name="NewFeed" component={NewFeed}
                                          options={
                                              ({route, navigation, options}) => ({
                                                  headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                                  title: "Новое",
                                                  presentation: 'modal'
                                              })
                                          }/>
                            <Stack.Screen name="FriendsRequests" component={EventRequests}
                                          options={
                                              ({route, navigation, options}) => ({
                                                  headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                                  title: "Запросы в друзья",
                                                  presentation: 'modal'
                                              })
                                          }/>
                            <Stack.Screen name="EventRequests" component={EventRequests}
                                          options={
                                              ({route, navigation, options}) => ({
                                                  headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                                  title: "Запросы на мероприятие",
                                                  presentation: 'modal'
                                              })
                                          }/>
                            <Stack.Screen name="EventDetails" component={EventDetails}
                                          options={
                                              ({route, navigation, options}) => ({
                                                  presentation: 'modal',
                                                  headerShown: false
                                              })
                                          }/>
                            <Stack.Screen name="ChatDetails"
                                          component={ChatDetails}
                                          options={
                                              ({route, navigation}) => ({

                                                  headerLeft: null,
                                                  headerTitle: () => {
                                                      const goToUserProfile = () => {
                                                          route.params.chatType === 'personal' ?
                                                              navigation.navigate('UserInfo', {
                                                                  userId: route.params.chatId,
                                                                  nick: '121212'
                                                              }) : {}
                                                      }

                                                      return (<ChatHeader onPress={navigation.goBack}
                                                                          title={route.params.chatTitle}
                                                                          participants={route.params.participants}
                                                                          color="violet"
                                                                          image={route.params.image}
                                                                          goToUserProfile={goToUserProfile}
                                                      />)}
                                              })
                                          }
                            />
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