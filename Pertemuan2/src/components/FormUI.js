import React, { useEffect, useCallback, useForm } from 'react';
import { View, Text,TextInput, Button, StyleSheet, Image } from 'react-native';


const FormUI = () => {
  return (
    <View style={{padding: 20, marginVertical: 40}}>
      <View style={styles.photoss}>
      <Image  
        source={{ uri: "https://assets.entrepreneur.com/content/3x2/2000/1616083468-GettyImages-1279497558.jpg",
        }}
        style={{width:150, height:150}}
        />
      </View>

      <View style={{marginVertical: 20}}>
        <Text>STUDENT ID</Text>
        <TextInput 
        style={{borderWidth: 1, height: 40}}
        placeholder='Enter Your NPM'
        keyboardType='numeric'          
        />
      </View>

      <View>
        <Text>Fullname</Text>
        <TextInput 
        style={{borderWidth: 1, height: 40}}
        placeholder='Enter Yourname Here'
          />
      </View>

      <View style={{marginVertical :20}}>
        <Text>Address</Text>
        <TextInput
        style={{borderWidth: 1}}
        editable multiline
        maxLength={40}
        numberOfLines={4}
        
        />
      </View>

    </View>
  );
};


export default FormUI;

const styles = StyleSheet.create({
alas: {
  flex:1,
  padding: 10,
  alignContent: 'center',
  justifyContent: 'center'
},   
photoss: {
  alignContent: 'center',
  alignItems: 'center'
}

});
  
