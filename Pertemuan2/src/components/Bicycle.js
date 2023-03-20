import React from 'react'; //rfc
import { Text, View, Image } from 'react-native';

function Bicycle() {
    const city ="south west";
    const people = [{name:"Erdiana", fams:"sister"}
                    ,{name:"Emanuel", fams:"brother"},]

    return (
        <View style={{padding: 10}}>
            <Text>Hi, im Bicycle</Text>
            <TakeARide people={people} />
            {Place2Go(city)}
            <View>
                <Text>Sepeda Gunung</Text>
                <Image 
                source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2P3ajiTVMJlN9HOeDhc4NAPmlygZTfB_drPq5qQyS&s",
                }}
                style={{width:200, height:200}}
                />
            </View>
        </View>
    );
}

export default Bicycle;

const TakeARide = ({people}) => {
    return (
    <View>
        <Text>Lets GOOO </Text>
        {people.map((v,index)=>(
            <View key={index}>
                <Text>{v.name} / my {v.fams}</Text>
            </View>
        ))}
    </View>
    )
};

function Place2Go() {
    return<Text>Wre goin to south west</Text>;
}