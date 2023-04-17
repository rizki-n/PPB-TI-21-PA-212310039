import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyFriends from './components/MyFriends';
//import Styleshit from "./components/Styleshit";
import MyHome from './components/MyHome';
import LoginForm from './components/LoginForm';
import { createBottomNagivator } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native'
import ThisHome from './ThisHome';



export default function App() {
  const Tab = createBottomNagivator();
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={LoginForm} />
          <Tab.Screen name="Message" component={ThisHome} />
        </Tab.Navigator>
      </NavigationContainer>
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