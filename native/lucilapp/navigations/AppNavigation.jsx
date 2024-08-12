import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import chat from "../src/app/screens/chat/[chat]"
import index from "../src/app/screens/index/index"
import task from "../src/app/screens/task/[category]"

const AppNavigation = () => {
    
    const AppStack = createNativeStackNavigator()


    return(
        <AppStack.Navigator>
            <AppStack.Screen name="index" component={index}></AppStack.Screen>
            <AppStack.Screen name="task" component={task}></AppStack.Screen>
            <AppStack.Screen name="chat" component={chat}></AppStack.Screen>
        </AppStack.Navigator>
    )

}
export default AppNavigation