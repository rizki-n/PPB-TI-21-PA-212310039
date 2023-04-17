import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import MyFriends from './components/Friends/MyFriends';
//import Styleshit from "./components/Styleshit";
import MyHome from './components/Friends/widgets/MyHome';
import LoginForm from './components/LoginForm';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
  <SafeAreaView>
    <View>
      <MyHome />
    </View>
  </SafeAreaView>  
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});