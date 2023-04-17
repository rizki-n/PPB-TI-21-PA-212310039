import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View,Text,Image } from 'react-native';

const ThisHome = () => {
    return (
        <SafeAreaView>
            <View>
                <Image source={require('./assets/IG.png')}
                style={{width:200, height:200}}
                />
            </View>
        </SafeAreaView>
    );
}

export default ThisHome;
