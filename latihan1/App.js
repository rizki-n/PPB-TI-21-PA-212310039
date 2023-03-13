import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-web';
import { Image } from 'react-native';

export default function App() {
  return (
<><View style={styles.square2}>
    <Image source={require('./assets/photo.jpg')}
      style={styles.photo}
      />
  </View>
    <View style={styles.square}></View>
      <View style={styles.container}><View>
        <Text style={styles.blackWord}>Nama : Rizki N</Text>
        <Text style={styles.blackBold}>Umur : 20</Text>
        <Text style={styles.blackWord}>Status : Pelajar </Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.bottom}></View>
    </View></>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  square2: {
    width: 100, height: 400,
    backgroundColor: 'orange'
  },
  square: {
    
    width: 230, height: 40,
    backgroundColor: 'orange',
    
  },
  blackWord: {
    marginRight: '30%',
    color: 'black', 
    fontWeight : 'bold',
    fontSize : 30
  },
  blackBold: {
    marginRight: '48%',
    color: 'black', 
    fontWeight : 'bold',
    fontSize : 30
  },
  photo: {
    width: 200, height: 400,
    marginLeft: '150%',

  },
  bottom: {
    width: 100, height: 40,
    backgroundColor: 'orange'
  }
});
