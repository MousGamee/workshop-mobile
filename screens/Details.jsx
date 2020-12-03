import React, { useContext, useState } from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    ScrollView,
    Image
} from 'react-native'
import { genres }  from '../data'
import { LinearGradient } from 'expo-linear-gradient'
import { SlideItem2 } from '../components/Category'
import * as Animatable from 'react-native-animatable'
import { ClassContext } from '../context/ClassContext';

const Details = ({navigation, route}) => {

    const { cours, teacher, setFavoris } = useContext(ClassContext)
    const [apiGenre, setApiGener ] = useState(genres)
    const {item} = route.params
    console.log(item)
    return (
        <ScrollView>
            <View style={{backgroundColor : 'white', flex : 1}}>
            <ImageBackground
                style={styles.image}
                source={item.img}
                imageStyle={{borderBottomLeftRadius : 30, borderBottomRightRadius : 30}}
            >
               <LinearGradient
                        colors={['rgba(0, 0, 0, 0)', 'white']}
                        style={{
                        height: 250,
                        width : '100%',
                        position: 'absolute',
                        bottom: 0,
                        }}
                />  
                <Animatable.View animation='fadeInRight' delay={200} duration={500}>  
                    <Text style={styles.tagLine}> {item.title}</Text>
                    <Text style={styles.classTitle}>{item.teacher}</Text>
                    <View style={styles.genres}>
                        {item.genre.map(( g ) => {
                            return (
                            <View key={g} style={styles.genre}>
                                <Text style={{fontSize: 9, opacity: 0.4, color : '#000000'}}>{ apiGenre[g] }</Text>
                            </View>
                            );
                        })}
                    </View>
                </Animatable.View>
           </ImageBackground>
           
           <Animatable.View style={styles.detailsContainer} animation='fadeInLeft' delay={400} duration={500}>
               <View style={styles.teacherProfilContainer}>
                   <Image 
                        borderRadius={90}
                        style={styles.teacherPic}
                        source={teacher[0].picture}
                   />
                   <TouchableOpacity style={styles.profilBtn}>
                       <Text style={styles.profilBtnText}>Voir le profil</Text>
                   </TouchableOpacity>
               </View>
               <View>
                   <Text style={styles.studioName}>{item.studio}</Text>
                   <Text style={styles.stuioLocation}>Adresse du studio</Text>
               </View>
               <View>
                   <Text>{item.description}</Text>
               </View>
               <View style={{width : '100%', height : 200, marginTop : 20}}>
                 <Image 
                 source={require('../assets/googlemap.png')}
                 style={{width : null, height : null, resizeMode : 'cover', flex : 1}}
                   /> 
               </View>
                <View style={{ marginTop : 30}}>
                            <Text style={{color : '#7E8081',fontSize : 20,marginBottom : 10,}}>Recommandé pour vous</Text>
                        <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={cours}
                                keyExtractor={item => item.id.toString()}
                                renderItem={({ item, i }) => (
                            <TouchableOpacity                   
                            onPress={() => navigation.push('Details', {item})}>
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
                </Animatable.View>
        </View>
        </ScrollView>
    )
}

export default Details

const styles = StyleSheet.create({

    image : {
        height : 380,
        justifyContent : "flex-end"
    },
    tagLine : {
        color : '#14AADF',
        fontSize : 16,
        fontWeight : 'bold',
        paddingHorizontal : 14,
        marginVertical : 6
    },
    classTitle : {
        color : '#7E8081',
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 14,
        marginBottom : 10
    },
    detailsContainer : {
        paddingHorizontal : 10,
        marginTop : 40,
    },
    studioName : {
        fontSize : 25,
        marginBottom : 10,
        fontWeight : "bold",
        color : '#14AADF'
    },
    stuioLocation : {
        fontSize : 15,
        color : '#7E8081',
        marginBottom : 20,
    },
    teacherPic : {
        width : 90,
        height : 90
    },
    teacherProfilContainer : {
        alignItems : "center",
        alignSelf : "flex-end",
        marginTop : -80,
        marginRight : 20
    },
    profilBtn : {
        backgroundColor : '#14AADF',
        padding : 4,
        marginTop : 5,
        borderRadius : 10
    },
    profilBtnText : {
        color : 'white',
        fontSize : 12,
      
    },
    genres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft : 15,
        marginVertical: 4,
      },
      genre: {
        paddingHorizontal: 6,
        paddingVertical: 2,
        borderWidth: 1,
        borderRadius: 14,
        borderColor: '#ccc',
        marginRight: 4,
      },



})
