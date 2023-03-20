import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native'; //rfc
import React from 'react';

var name = "Honda";
const Motorcycle = () => {
    return (
        <SafeAreaView>
        <View>
            <Text>Hi im a Motorcycle</Text>
            <Text>Merk : {name}</Text>
            <Text>Type : {types.type}</Text>
            <Text>Model: {types.model}</Text>
            <Text>Harga: {types.harga}</Text>
            <StatusBar style='inverted'/>
        </View>
        
        </SafeAreaView>
    );
}

export default Motorcycle;

const types = {type:"Gigi", model:"Revo", harga:2000000};