import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Nomor1 from './components/Nomor1';
import Nomor2 from './components/Nomor2';
import RCCno4 from './components/RRCno4';
import RFCno4 from './components/RFCno4';


export default function App() {
  return (
   // <Nomor1/>
   //<Nomor2/>
   //<RCCno4/>
   <RFCno4/>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'column'
  },
});
