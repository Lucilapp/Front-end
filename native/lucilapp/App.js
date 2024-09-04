import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/app/screens/index';
import { NavigationContainer } from '@react-navigation/native';
import ChatScreen from './src/app/screens/chat/[chat]';
import SocketTest from './src/app/screens/socketTest/socketTest';

export default function App() {
  return (
    // <>
    // <NavigationContainer>
    //   <HomeScreen/>
    // </NavigationContainer>
    // </>
    <View>
      <SocketTest/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
