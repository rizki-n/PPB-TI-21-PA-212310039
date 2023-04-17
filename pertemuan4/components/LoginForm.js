import React, {useState} from 'react';
import { TextInput, View, Text, TouchableOpacity} from 'react-native';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const LoginForm = ({navigation}) => {
    const [Mail, setMail] = useState('');
    const [ValidMail, setValidMail] = useState('');
    const HandlerValidMail = (value) =>{
        if (value){
            setValidMail('');
        }else{
            setValidMail('Masukan Email')
        }
    }
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.frm_row}>    
                <Text>Email</Text>
                <TextInput style={styles.text_input}
                
                placeholder="npm@studsent.ibik.ac.id"
                keyboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => HandlerValidMail(text)}
                />
                <Text style={{color:'red'}}>{ValidMail}</Text>
            </View>
            <View style={styles.frm_row}>
                <Text>Password</Text>
                <TextInput style={styles.text_input}
                placeholder="Password"
                keyboardType="-password"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(text) => setPassword(text)}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Text>Sign In</Text>
            </TouchableOpacity>
        </View>
            
        
    );
}

export default LoginForm;

const styles = StyleSheet.create({
    container: {
        padding: 20,backgroundColor: "white"
    },
    frm_row: { marginBottom: 15 },
        text_label: {
        fontWeight: "bold",
        marginBottom: 10,
        fontSize: 16,
    },
    text_input: {
        borderWidth: 1,
        borderColor: "grey",
        borderRadius: 5,
        padding: 10,
        fontSize: 16,
        color: "grey",
    },
    btn_signin: {
        backgroundColor: "purple",
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginTop:15
    },
    btn_signin_text:{ color: "white", textAlign: "center", fontSize: 16 }
});