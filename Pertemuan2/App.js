import { StatusBar } from 'expo-status-bar';
import { ImageBackground } from 'react-native';
import { SafeAreaView, StyleSheet} from 'react-native';
import Bicycle from './src/components/Bicycle';
import Car from './src/components/Car';
import FormUI from './src/components/FormUI';
import Motorcycle from './src/components/Motorcycle';


export default function App() {
  return (
    //<Motorcycle/>
    //<Car /> 
    // <Bicycle/>
    //<ImageBackground
    //  source={{
    //    uri: "https://asset-a.grid.id/crop/0x0:0x0/x/photo/2022/03/07/russia-ready-to-deliver-six-mig-20220307083838.jpg",
    //  }}
    //  resizeMode="repeat" style={{ flex:1 }}
   // >
    <SafeAreaView>
      <StatusBar hidden={true}/>
      <FormUI/>
    </SafeAreaView>
   // </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});
