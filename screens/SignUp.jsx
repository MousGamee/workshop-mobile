import React, { useContext } from 'react'
import { 
    View, 
    Text,
    SafeAreaView, 
    StatusBar, 
    StyleSheet,
    ImageBackground,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity
} from 'react-native'

import { AuthContext } from '../context/AuthContext';

const { width : WIDTH } = Dimensions.get('window')

const SignUp = ({ navigation }) => {
    const { signIn } = useContext(AuthContext);

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
                    <Text style={{color : 'white', fontSize : 20, fontWeight : "bold"}}> Inscription </Text>      
                    <View style={{marginTop : 30}}>
                        
                        <TextInput 
                            style={styles.input}
                            placeholder={'User name'}
                            placeholderTextColor={'lightgrey'}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <View style={{marginTop : 10}}>
                        
                        <TextInput 
                            style={styles.input}
                            placeholder={'Email'}
                            placeholderTextColor={'lightgrey'}
                            underlineColorAndroid='transparent'
                        />
                    </View>

                    <View style={{marginTop : 10}}>
                        <TextInput 
                            style={styles.input}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            placeholderTextColor={'lightgrey'}
                            underlineColorAndroid='transparent'
                        />                   
                    </View>
                    <View style={{marginTop : 10}}>
                        
                        <TextInput 
                            style={styles.input}
                            placeholder={'Confirm Password'}
                            secureTextEntry={true}
                            placeholderTextColor={'lightgrey'}
                            underlineColorAndroid='transparent'
                        />                                       
                    </View>

                <TouchableOpacity 
                    style={styles.btnLogin}
                    onPress={() => signIn()}
                >
                    <Text style={styles.btnLoginText}>S'inscrire</Text>                       
                </TouchableOpacity>  
                <View style={{flexDirection : 'row', marginTop : 25}}>
                    <Text>Deja un compte? </Text> 
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={{color : 'white', fontWeight : "bold"}}> S'inscrire</Text>
                    </TouchableOpacity> 
                </View>
               
        </ImageBackground>
        </>
    )
}
export default SignUp


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
