import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState } from 'react'
import { 
    View, 
    Text,  
    ImageBackground, 
    StyleSheet, 
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../context/AuthContext'

const { width : WIDTH } = Dimensions.get('window')

const SignIn = ({ navigation }) => {

    const { signIn } = useContext(AuthContext);
    const [userName, setUserName] = useState('')
    const [mdp, setMdp] = useState('')

    return (
        <>
        <StatusBar barStyle={"light-content"} backgroundColor={'#26DCC9'} />
        <ImageBackground
            style={styles.loginBkg}
                source={require('../assets/loginBkg.jpg')} >
                    <View style={{justifyContent : "center",}}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/Workshop.png')}
                            />
                    </View>     
                    <Text style={{color : 'white', fontSize : 20, fontWeight : "bold"}}> Connection </Text>      
                    <View style={{marginTop : 30}}>
                        <Ionicons 
                        style={styles.inputIcon}
                        name={'ios-person'} 
                        size={28} 
                        color={'rgba(0, 0, 0, .5)'}/>
                        <TextInput 
                            onChangeText={(text) => setUserName(text)}
                            value={userName}
                            style={styles.input}
                            placeholder={'User name'}
                            placeholderTextColor={'lightgrey'}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={{marginTop : 10}}>
                        <Ionicons 
                        style={styles.inputIcon}
                        name={'ios-lock'} 
                        size={28} 
                        color={'rgba(0, 0, 0, .5)'}/>
                        <TextInput 
                            onChangeText={(text) => setMdp(text)}
                            value={mdp}
                            style={styles.input}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            placeholderTextColor={'lightgrey'}
                            underlineColorAndroid='transparent'
                        />                   
                    <TouchableOpacity style={styles.btnEyes}>
                        <Ionicons 
                        name={'ios-eye'} 
                        size={20}
                        color={'rgba(0, 0, 0, .7)'}
                         /> 
                    </TouchableOpacity>
                    </View>
                <TouchableOpacity 
                    style={styles.btnLogin}
                    onPress={() => signIn(userName, mdp)}
                >
                    <Text style={styles.btnLoginText}>Login</Text>                       
                </TouchableOpacity>  
                <View style={{flexDirection : 'row', marginTop : 25}}>
                    <Text>Pas de compte ? </Text> 
                    <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                        <Text style={{color : 'white', fontWeight : "bold"}}>S'inscrire</Text>
                    </TouchableOpacity> 
                </View>
               
        </ImageBackground>
        </>
    )
}

export default SignIn

const styles = StyleSheet.create({
    loginBkg : {
        flex : 1,
        alignItems : 'center',
        width : '100%',
        height : '100%'
    },
    logo : {
        marginTop : 100
    },
    input : {
        width: WIDTH - 55,
        height : 50,
        borderRadius : 25,
        fontSize : 16,
        paddingLeft : 45,
        backgroundColor : 'white',
        color : '#000000',
        marginHorizontal : 25
    },
    inputIcon : {
        position : "absolute",
        top : 8,
        left : 37,
        zIndex : 2
    },
    btnEyes : {
        position : "absolute",
        top : 12,
        right : 37
    },
    btnLogin : {
        width : WIDTH - 55,
        height : 50,
        borderRadius : 25,
        justifyContent : "center",
        backgroundColor : '#1D90E8',
        marginTop : 20
    },
    btnLoginText : {
        alignSelf : "center",
        fontSize : 15,
        fontWeight : "bold",
        color : '#fff'    
}

})
