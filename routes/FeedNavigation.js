import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import 'react-native-gesture-handler';
import Feed from "../screens/Feed";
import EventDetails from "../screens/EventDetails";

const Stack = createNativeStackNavigator();

const FeedNavigation = () => {
    return (
        <Stack.Navigator mode="modal">
            <Stack.Screen name="FeedList" component={Feed}
                          options={{
                              headerShown: false,
                          }}/>
            <Stack.Screen name="EventDetails"
                          component={EventDetails}
                          options={
                              ({route}) => ({
                                  title: route.params.eventTitle
                              })
                          }
            />
        </Stack.Navigator>
    )
}

export default FeedNavigation;