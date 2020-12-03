import React, { useContext, useEffect, useState } from 'react'
import { 
    View,
     Text,
     ScrollView,
     StatusBar,
     TouchableOpacity,
     FlatList,
     StyleSheet,
     Image,
     ImageBackground
     } 
from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SlideItem, SlideItem2, TeacherPic } from '../components/Category'
import { ClassContext } from '../context/ClassContext';
import { AuthContext } from '../context/AuthContext'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient';


const Home = ({navigation}) => {

    const { cours, img, teacher } = useContext(ClassContext)
    const { users } = useContext(AuthContext)
    const [isAdd, setIsAdd] = useState(false)

    return (
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            <StatusBar barStyle={"light-content"} backgroundColor={'#72CCEC'}/>
            <ScrollView
             style={{flex:1}}
                >
                <ImageBackground 
                source={require('../assets/events/afroNationCover.jpg')}
                style={{width : '100%', height : 450}}>
                    <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', 'white']}
                        style={{
                        height: 150,
                        width : '100%',
                        position: 'absolute',
                        bottom: 0,
                            }}
                    />  
                    <View style={{alignItems : "center", marginTop : 300}}>
                        <Image 
                            source={require('../assets/events/afroNationLogo.png')}
                            style={{width : 100, height : 100}}

                        />
                        <View style={{flexDirection : "row", justifyContent : "space-around", width : '100%', marginTop : -20}}>
                            <View style={{alignItems : "center", flex : 1}}>
                                <Ionicons name='ios-information-circle' size={30} color='black'/>
                                <Text>Info</Text>
                            </View>
                            <View style={{alignItems : "center", flex : 1}}>
                                <TouchableOpacity>
                                <Ionicons name={isAdd ? 'ios-checkmark' : 'ios-add'} size={30} color='black' onPress={() => setIsAdd(!isAdd)}/>
                                </TouchableOpacity>
                                <Text>{isAdd ? 'Retirer' : 'Ajouter'}</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{paddingHorizontal : 15}}>
                    <Animatable.View style={{marginTop : 15}} animation='fadeInUp' delay={400}>
                        <Text style={{color : '#7E8081',fontSize : 25,marginBottom : 10}}>Top du jour</Text>
                        
                    <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={cours}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item, i }) => (
                        <TouchableOpacity                   
                        onPress={() => navigation.navigate('Details', {item})}>
                        <SlideItem2  
                            title={item.title}
                            teacher={item.teacher}
                            studio={item.studio}
                            img={item.img}
                    
                            />
                            </TouchableOpacity>
                    )}
                    />
                    </Animatable.View>
                    {/**Popular */}    
                    <Animatable.View style={{
                        marginTop : 30
                    }} animation='fadeInUp' delay={500}>
                        <Text style={{color : '#7E8081',fontSize : 20,marginBottom : 10}}>Populaire</Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={cours}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item, i }) => (
                        <TouchableOpacity                   
                        onPress={() => navigation.navigate('Details', {item})}>
                        <SlideItem  
                            title={item.title}
                            teacher={item.teacher}
                            studio={item.studio}
                            img={item.img}
                    
                            />
                            </TouchableOpacity>
                    )}
                    />
                    </Animatable.View>   

                    {/** recommandation */}
                    <View style={{marginTop : 30}}>
                        <Text style={{color : '#7E8081',fontSize : 20,marginBottom : 10}}>Recommandé pour vous {users.name}</Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={cours}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item, i }) => (
                        <TouchableOpacity                   
                        onPress={() => navigation.navigate('Details', {item})}>
                        <SlideItem2  
                            title={item.title}
                            teacher={item.teacher}
                            studio={item.studio}
                            img={item.img}
                    
                            />
                            </TouchableOpacity>
                    )}
                    />
                    </View>  
                    {/* Teacher recommendation */}
                    <View style={{marginTop : 30, paddingBottom : 20 }}>
                        <Text style={{
                            color : '#7E8081',
                            fontSize : 20,
                            marginBottom : 10,
                        }}>Les Profs en <Text style={{color : '#72CCEC'}}>Hip Hop</Text></Text>

                            <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item) => item.id.toString() }
                            data={teacher}
                            renderItem={({ item }) => (
                                <TouchableOpacity style={{width : 150, height : 200, marginLeft : 10}} onPress={() => navigation.navigate('Teacher', {item})}>
                                    <View style={{width : '100%', height : 150, borderRadius : 150}}>
                                    <Image 
                                            style={{borderRadius : 150, width : null, resizeMode : "cover",flex : 1}}
                                            source={item.picture}
                                        /> 
                                    </View>
                                    <Text style={{color : '#72CCEC', fontSize : 15, fontWeight : "bold", alignSelf : "center", marginTop : 10}}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                            />
            
                    </View>

                    {/** recommandation */}
                    <View style={{ paddingBottom : 20}}>
                        <Text style={{color : '#7E8081',fontSize : 20, marginBottom : 10,}}>Parce que vous aimez le <Text style={{color : '#72CCEC'}}>Hip Hop</Text></Text>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={cours}
                            keyExtractor={item => item.id.toString()}
                            renderItem={({ item, i }) => (
                        <TouchableOpacity                   
                        onPress={() => navigation.navigate('Details', {item})}>
                        <SlideItem2  
                            title={item.title}
                            teacher={item.teacher}
                            studio={item.studio}
                            img={item.img}                
                            />
                            </TouchableOpacity>
                    )}
                    />
                    </View>   
                </View>
             </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})