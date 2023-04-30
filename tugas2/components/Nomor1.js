import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Nomor1 = () => {
  return (
    <View style={styles.box}>
      <View style={{flex: 1, alignItems: 'center', padding: 10, justifyContent: 'center'}}>
        
      
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          backgroundColor: "brown",
          color: "#fff",
          textAlign: "center",
          textDecorationLine: "underline",
          padding: 10,
          marginBottom: 10,
        }}
      >
        History of Bicycle
      </Text>
      <Text style={styles.paragrapf}>
        A Bicycle,Also Called a pedal cycle,bike,push-bike, or cycle, is a 
        human-powered or motor powered assisted, single-track vehicle having 
        two wheels attached to a frame ,one behind the other.A bicycle rider
        is called a cyclist. or bicyclist
      </Text>
      <Image source={require('../assets/man.png')} style={styles.img} />
      </View>
    </View>
  );
};

export default Nomor1 ;

const styles = StyleSheet.create({
  paragrapf: {
    fontSize: 18,
    textAlign: "justify",
  },
  box: {
    width: 200,
    alignItems:"centers",
    
  },

  img: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "black",
    borderRadius: 3,
  },

  container:{
    padding: 5,
    flex:1,
    alignItems:"centers",
    
    
  }
});