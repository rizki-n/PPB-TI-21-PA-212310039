import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const MyHeader = () => {
    return (
        <View style={styles.headd}>
            <Image 
            source={require('../../../assets/ig_name.png')} 
            style={{width:100, height:40}}/>
            <View style={{ flexDirection: 'row'}}>
                <View style={{marginHorizontal: 5, marginVertical: 10}}>
                    <Image 
                    source={require('../../../assets/heart.png')}
                    style={{width:30, height:30}}    
                    />
                </View>
                <View style={{marginHorizontal: 10, marginVertical: 10}}>
                    <Image
                    source={require('../../../assets/airplane.png')}
                    style={{width:30, height:30}}
                    />
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headd:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        backgroundColor: 'white'
    }

});

export default MyHeader;
