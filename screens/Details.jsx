import React from 'react'
import { 
    StyleSheet, 
    Text, 
    View,
    ImageBackground,
    Image,
    TouchableOpacity,
    FlatList,
    ScrollView
} from 'react-native'

import { SlideItem2 } from '../components/Category'
import { classItems } from '../data'

import Ionicons from 'react-native-vector-icons/Ionicons';
const classImage = {
    id : {
      0 : require('../assets/image1.png'),
      1 : require('../assets/image2.png'),
      2 : require('../assets/image3.png'),
      3 : require('../assets/image4.png'),
      4 : require('../assets/image5.png'),
      5 : require('../assets/image6.png'),
    }
  }

const Details = ({navigation, route}) => {
    const {item} = route.params
    return (
        
        <ScrollView>
        <View style={{backgroundColor : 'white', flex : 1}}>
           <ImageBackground
           style={styles.image}
           source={classImage.id[item.id]}
           imageStyle={{borderBottomLeftRadius : 30, borderBottomRightRadius : 30}}
           >
               <Text style={styles.tagLine}> {item.title}</Text>
               <Text style={styles.classTitle}>{item.teacher}</Text>

               <TouchableOpacity 
               onPress={() => navigation.goBack()}
               style={{position : 'absolute', left : 20, top : 40, backgroundColor : '#fff', padding : 10, borderRadius : 40, width : 40, height : 40, alignContent : "center"}}>
                   <Ionicons name="ios-arrow-back" size={25} color="#14AADF" />
               </TouchableOpacity>

               <TouchableOpacity style={{position : 'absolute', right : 20, top : 40, backgroundColor : '#fff', padding : 10, borderRadius : 40, width : 40, height : 40, alignContent : "center"}}>
                   <Ionicons name="ios-heart" size={25} color="#14AADF" />
               </TouchableOpacity>
           </ImageBackground>

           <TouchableOpacity style={styles.btnReseerve}>
               <Text style={styles.btnText}>Réserver</Text>
           </TouchableOpacity>

           <View style={styles.detailsContainer}>
               <View>
                   <Text style={styles.studioName}>{item.studio}</Text>
                   <Text style={styles.stuioLocation}>Adresse du studio</Text>
               </View>
               <View>
                   <Text>{item.description}</Text>
               </View>
           

           <View style={{
                    marginTop : 30
                }}>
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 20,
                        marginBottom : 10,
                    }}>Recommandé pour vous</Text>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        {
                            classItems.map((item,i) => (
                                <TouchableOpacity key={i} onPress={() => navigation.push('Details', {item})}>
                                <SlideItem2 
                                    key={i}
                                    title={item.title}
                                    teacher={item.teacher}
                                    studio={item.studio}
                                    img={classImage.id[i]}
                                />
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>  
                </View>
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
        color : 'white',
        fontSize : 16,
        fontWeight : 'bold',
        paddingHorizontal : 14,
        marginVertical : 6
    },
    classTitle : {
        color : 'white',
        fontSize : 24,
        fontWeight : 'bold',
        paddingHorizontal : 14,
        marginBottom : 30
    },
    btnReseerve : {
        position : "absolute",
        right : 12,
        top : 350, 
        backgroundColor : '#14AADF',
        padding : 16,
        borderRadius : 40
    },
    btnText : {
        color : '#fff',
        fontSize : 14,
        fontWeight : 'bold'
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
    }


})
