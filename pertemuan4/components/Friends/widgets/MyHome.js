import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar} from 'react-native';
import { ScrollView } from 'react-native';
import MyStory from "./MyStory";
import MyFeed from "./MyFeed";
import { MyUsers } from "../../const-data/Dummy";
import MyHeader from './MyHeader';

class MyHome extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: "grey"}}>
                <StatusBar hidden={false}/>
                <MyHeader />
                <View style={{flex:17}}>
                    <ScrollView style={{flex:1}}>
                        <MyStory MyUsers={MyUsers}/>
                        <MyFeed/>
                    </ScrollView>
                </View>
            
            </SafeAreaView>    
        )
    }
}

export default MyHome;
