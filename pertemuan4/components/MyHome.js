import React, { Component } from 'react';
import { SafeAreaView, View, Text, StyleSheet, StatusBar} from 'react-native';
import MyHeader from "./Friends/widgets/MyHeader";
import { ScrollView } from 'react-native';
import MyStory from "./Friends/widgets/MyStory";
import MyFeed from "./Friends/widgets/MyFeed";
import { MyUsers } from "./const-data/Dummy";

class MyHome extends Component {
    render() {
        return (
            <SafeAreaView style={{flex: 6, backgroundColor: "white"}}>
                <StatusBar hidden={false}/>
                <MyHeader/>
                <View style={{flex:10}}>
                    <ScrollView style={{flex:1}}>
                        <MyStory MyUsers={MyUsers}/>
                    </ScrollView>
                </View>

            </SafeAreaView>    
        )
    }
}

export default MyHome;
