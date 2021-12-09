import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import MessagesList from "../screens/Messages";
import ChatDetails from "../screens/ChatDetails";
import ChatHeader from "../components/ChatHeader";

const Stack = createStackNavigator();

const MessagesNavigation = ({}) => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="MessagesList" component={MessagesList}
                          options={{
                              headerShown: false,
                          }}/>
            <Stack.Screen name="ChatDetails"
                          component={ChatDetails}
                          options={
                              ({route, navigation}) => ({
                                  headerLeft: null,
                                  headerTitle: () => <ChatHeader onPress={navigation.goBack}
                                                                 title={route.params.chatTitle}
                                                                 participants={route.params.participants}
                                                                 color="violet"
                                                                 image={require('../assets/defaultAvatars/main.png')}
                                  />
                              })
                          }
            />
        </Stack.Navigator>
    )
}

export default MessagesNavigation;
