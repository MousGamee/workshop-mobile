import React, { useContext } from 'react'
import { 
    View, 
    Text, 
    Button, 
    ImageBackground, 
    StyleSheet, 
    Image,
    TextInput,
    Dimensions,
    TouchableOpacity,
    Animated
} from 'react-native'
import { color } from 'react-native-reanimated';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { AuthContext } from '../context/AuthContext'
const { width : WIDTH } = Dimensions.get('window')
const SignIn = ({ navigation }) => {

   
    const { signIn } = useContext(AuthContext);

    return (
        <ImageBackground
            style={styles.loginBkg}
                source={require('../assets/loginBkg.jpg')} >
                    <View style={{justifyContent : "center",}}>
                        <Image
                            style={styles.logo}
                            source={require('../assets/Workshop.png')}
                            />
                    </View>           
                    <View style={{marginTop : 30}}>
                        <Ionicons 
                        style={styles.inputIcon}
                        name={'ios-person'} 
                        size={28} 
                        color={'rgba(255, 255, 255, 0.5)'}/>
                        <TextInput 
                            style={styles.input}
                            placeholder={'User name'}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid='transparent'
                        />
                    </View>
                    <View style={{marginTop : 10}}>
                        <Ionicons 
                        style={styles.inputIcon}
                        name={'ios-lock'} 
                        size={28} 
                        color={'rgba(255, 255, 255, 0.5)'}/>
                        <TextInput 
                            style={styles.input}
                            placeholder={'Password'}
                            secureTextEntry={true}
                            placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                            underlineColorAndroid='transparent'
                        />                   
                    <TouchableOpacity style={styles.btnEyes}>
                        <Ionicons 
                        name={'ios-eye'} 
                        size={26}
                        color={'rgba(255, 255, 255, 0.7)'}
                         /> 
                    </TouchableOpacity>
                        </View>

                <TouchableOpacity 
                style={styles.btnLogin}
                onPress={() => signIn()}
                
                >
                    <Text style={styles.btnLoginText}>Login</Text>                       
                    </TouchableOpacity>  
        </ImageBackground>
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
        backgroundColor : 'rgba(0, 0, 0, 0.35)',
        color : 'rgba(255, 255, 255, 0.7)',
        marginHorizontal : 25
    },
    inputIcon : {
        position : "absolute",
        top : 8,
        left : 37,
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
