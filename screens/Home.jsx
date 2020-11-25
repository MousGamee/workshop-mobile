import React, { useContext } from 'react'
import { 
    View,
     Text,
     ScrollView,
     StatusBar,
     TouchableOpacity,
     FlatList,
     StyleSheet,
     Image
     } 
from 'react-native'
import { SlideItem, SlideItem2, TeacherPic } from '../components/Category'
import { ClassContext } from '../context/ClassContext';
import { AuthContext } from '../context/AuthContext'
import * as Animatable from 'react-native-animatable'

const Home = ({navigation}) => {

    const { cours, img, teacher } = useContext(ClassContext)
    const { users } = useContext(AuthContext)
    
    return (
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            <StatusBar barStyle={"light-content"} backgroundColor={'#72CCEC'}/>
            {/**Landing */}
            <ScrollView
                style={{flex:1, paddingHorizontal : 15}}
                >
                <Animatable.View style={{marginTop : 15}} animation='fadeInUp' delay={400}>
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 25,
                        marginBottom : 10,
                    }}>Top du jour</Text>
                    
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
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 20,
                        marginBottom : 10,
                    }}>Populaire</Text>
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
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 20,
                        marginBottom : 10,
                    }}>Recommandé pour vous {users.name}</Text>
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
                            <View style={{width : 150, marginRight : 10}}>
                                <TouchableOpacity style={{width : 150, height : 150}} onPress={() => navigation.navigate('Teacher', {item})}>
                                    <Image 
                                        borderRadius={150}
                                        style={{
                                            width : 150,
                                            height : 200,
                                            resizeMode : "cover",
                                            flex : 1
                                        }}
                                            source={item.picture}
                                    />                       
                                    <Text style={{color : '#72CCEC', fontSize : 15, fontWeight : "bold", alignSelf : "center", marginTop : 10}}>{item.name}</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                        />
        
                </View>

                {/** recommandation */}
                <View style={{
                    marginTop : 30,
                    paddingBottom : 20
                }}>
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 20,
                        marginBottom : 10,
                    }}>Parce que vous aimez le <Text style={{color : '#72CCEC'}}>Hip Hop</Text></Text>
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

                </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

})