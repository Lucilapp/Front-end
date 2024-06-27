import { View } from 'react-native';
import App from '../App.jsx'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import HomeScreen from "../HomeScreen";
import TaskScreen from "../TaskScreen";
import { StyleSheet } from 'react-native';
const Stack = createNativeStackNavigator()

const Index = () =>{
    <View style = {styles.container}>
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Task" component={TaskScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    </View>
    
    
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    }
})

export default Index;