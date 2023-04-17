import React from 'react';
import {View, StyleSheet, Image, FlatList, Text} from 'react-native';
import { MyUsers } from '../../const-data/Dummy';

const UserItems = ({item}) => {
    return (
     <View style={{backgroundColor: 'white'}}>
        <Image source={
            item.gender === "M"
            ? require('../../../assets/man.png')
            : require('../../../assets/woman.png')
        }
        style={styles.img}/>
        <Text style={styles.accname}>{item.name}</Text>
     </View>   
    );
};

const MyStory = ({MyUsers}) => {
    return (
        <View>
            <FlatList horizontal={true} data={MyUsers} renderItem={({item}) => <UserItems item={item}/>}/>
        </View>
    );
};

const styles = StyleSheet.create({
    img:{
        width: 50,
        height: 50,
        borderColor: 'green',
        borderRadius:100,
        borderWidth: 2,
        marginHorizontal: 3
    },
    accname:{
        textAlign: 'center',
        fontSize: 15,
        color: 'black'
    }
})

export default MyStory;
