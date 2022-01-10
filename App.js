import 'react-native-gesture-handler';
import React, {useState} from 'react';
import Login from "./screens/Login";
import RegistrationNavigation from "./routes/RegistrationNavigation";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import BaseNavigation from "./routes/BaseNavigation";
import AddEventNavigation from "./routes/AddEventNavigation";
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';
import UserInfo from "./screens/UserInfo";
import EventRequests from "./screens/EventRequests";
import NewFeed from "./screens/NewFeed";
import CloseHeader from "./components/CloseHeader";
import EventDetails from "./screens/EventDetails";
import ChatDetails from "./screens/ChatDetails";
import ChatHeader from "./components/ChatHeader";
import FriendsRequests from "./screens/FriendsRequests";
import { LogBox } from "react-native";
import { colors, fonts } from './styles/globalStyles';
import {Context} from "./components/Context.js"
import Loader from "./components/Loader";
import Intro from "./screens/Registration/Intro";
import EditUserData from "./routes/EditUserDataNavigation";
import EditUserAbout from "./screens/EditUserData/EditUserAbout";

const Stack = createStackNavigator();

const App = () => {
    LogBox.ignoreLogs(["EventEmitter.removeListener", "Require cycle:"]);
    const [context, setContext] = useState({
        token: '',
        baseUrl: 'http://geekmeet-backend.host1818494.hostland.pro/api/v1',
        isLoading: false,
        isFirst: false
    });

    return (
        <Context.Provider value={[context, setContext]}>
        <View style={styles.container} /* forceInset={bottom:'never'} */>
            {context.isLoading ? <Loader/> :
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerStyle: {
                            elevation: 0,
                            shadowOpacity: 0,

                        },
                    }}>
                        {context.token ? (
                            // Screens for logged in users
                            <Stack.Group>
                                {context.isFirst &&
                                <Stack.Screen name="Intro" component={Intro}
                                              options={{
                                                  headerShown: false,
                                              }} />
                                }

                                <Stack.Screen name="BaseNavigation" component={BaseNavigation}
                                              options={{headerShown: false}}/>
                                <Stack.Screen name="EditUserData" component={EditUserData}
                                              options={{headerShown: false}}/>
                                <Stack.Screen name="EditUserAbout" component={EditUserAbout} options={
                                    ({navigation}) => ({
                                        headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                        title: "Редактирование",
                                        presentation: 'modal',
                                        headerTitleStyle: {
                                            color: colors.textViolet,
                                            fontFamily: fonts.bold,
                                            fontSize: 20,
                                            textAlignVertical: "center"
                                        },
                                    })
                                }/>
                                <Stack.Screen name="UserInfo" component={UserInfo}
                                              options={
                                                  ({route, navigation}) => ({
                                                      headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                                      title: route.params.nick,
                                                      presentation: 'modal',
                                                      headerTitleStyle: {
                                                          color: colors.textViolet,
                                                          fontFamily: fonts.bold,
                                                          fontSize: 20,
                                                          textAlignVertical: "center"
                                                      },
                                                  })
                                              }/>
                                <Stack.Screen name="NewFeed" component={NewFeed}
                                              options={
                                                  ({navigation}) => ({
                                                      headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                                      title: "Новое",
                                                      presentation: 'modal',
                                                      headerTitleStyle: {
                                                          color: colors.textViolet,
                                                          fontFamily: fonts.bold,
                                                          fontSize: 20,
                                                          textAlignVertical: "center"
                                                      },
                                                  })
                                              }/>
                                <Stack.Screen name="FriendsRequests" component={FriendsRequests}
                                              options={
                                                  ({navigation}) => ({
                                                      headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                                      title: "Запросы в друзья",
                                                      headerTitleStyle: {
                                                          color: colors.textViolet,
                                                          fontFamily: fonts.bold,
                                                          fontSize: 20,
                                                          textAlignVertical: "center"
                                                      },

                                                      presentation: 'modal'
                                                  })
                                              }/>
                                <Stack.Screen name="EventRequests" component={EventRequests}
                                              options={
                                                  ({navigation}) => ({
                                                      headerLeft: () => <CloseHeader onPress={navigation.goBack}/>,
                                                      title: "Запросы на мероприятие",
                                                      presentation: 'modal',
                                                      headerTitleStyle: {
                                                          color: colors.textViolet,
                                                          fontFamily: fonts.bold,
                                                          fontSize: 20,
                                                          textAlignVertical: "center"
                                                      },
                                                  })
                                              }/>
                                <Stack.Screen name="EventDetails" component={EventDetails}
                                              options={
                                                  ({}) => ({
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
                                                              route.params.chatType === 'private' ?
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
                                                          />)
                                                      }
                                                  })
                                              }
                                />
                                <Stack.Screen name="EventAdd" component={AddEventNavigation}
                                              options={
                                                  ({}) => ({
                                                      headerShown: false
                                                  })
                                              }/>

                            </Stack.Group>
                        ) : (
                            // Auth screens
                            <Stack.Group screenOptions={{headerShown: false}}>
                                <Stack.Screen name="Login">
                                    {props => <Login {...props}/>}
                                </Stack.Screen>
                                <Stack.Screen name="Registration">
                                    {props => <RegistrationNavigation {...props}/>}
                                </Stack.Screen>
                            </Stack.Group>
                        )}
                    </Stack.Navigator>
                </NavigationContainer>
            }
        </View>
        </Context.Provider>
    )
}

{/* <SafeAreaView style={styles.container}></SafeAreaView> */
}

export const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === 'android' ? 0 : 45,
        flex:1,
        backgroundColor:"white"

    }
});

export default App;