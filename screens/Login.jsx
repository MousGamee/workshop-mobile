import React from 'react'
import { 
    View, 
    Text,
    Button,
    SafeAreaView, 
    StatusBar, 
    ImageBackground,
    Image,
    TextInput,
    Button as NativeBtn
} from 'react-native'


const Login = ({  }) => {
    return (
        <SafeAreaView style={{flex : 1, alignItems : "center"}}>
            <StatusBar barStyle='light-content' />
            <ImageBackground
            style={{
                flex : 1,
                alignItems : 'center',
                width : '100%',
                height : '100%'
            }}
                source={require('../assets/loginBkg.jpg')} >
                    <View style={{justifyContent : "center"}}>
                        <Image
                            style={{
                                marginTop : 100
                            }}
                            source={require('../assets/Workshop.png')}
                            />
                    </View>
                    <View style={{marginTop : 40, flexDirection : "row", justifyContent : 'space-around'}}>
                        <NativeBtn title="facebook" />
                        <NativeBtn title="Twitter" />
                    </View>

                    <View style={{width : '100%', marginTop : 20, paddingHorizontal : 20}}>
                        <TextInput style={{
                            height : 40,
                            backgroundColor : 'rgba(255,255,255,.5)',
                            fontSize : 15,
                            borderRadius : 20,
                            paddingHorizontal : 10,
                            color : '#fff'                       
                        }}
                        placeholder='Email'/>

                        <TextInput style={{
                            height : 40,
                            marginTop : 15,
                            marginBottom : 15,
                            backgroundColor : 'rgba(255,255,255,.5)',
                            fontSize : 15,
                            borderRadius : 20,
                            paddingHorizontal : 10,
                            color : '#fff'                       
                        }}
                        placeholder='Password'/>


                        <View style={{
                            marginTop : 10,
                            height : 40,
                        }}>
                            <NativeBtn 
                            title="Connexion" 
                            onPress={() => alert('Connexion')}
                          />
                        </View>
                    </View>

                    <View style={{ flex : 1,flexDirection : 'row' ,justifyContent : 'space-around', alignItems : "center"}}>
                        <Text> s'inscrire</Text>
                        <Text> Mot de passe oublié</Text>
                    </View>

            </ImageBackground>
        </SafeAreaView>
    )
}

export default Login
