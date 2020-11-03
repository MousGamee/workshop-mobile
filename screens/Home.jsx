import React, { useContext } from 'react'
import { 
    View,
     Text,
     TextInput,
     ScrollView,
     Image,
     TouchableOpacity,
     ImageBackground
     } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SlideItem, SlideItem2 } from '../components/Category'
import { ClassContext } from '../context/ClassContext';

import { classItems,  } from '../data'

const Home = ({navigation}) => {

    const { cours, img } = useContext(ClassContext)

    return (
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            {/**Header */}
            <View style={{
                height : 90,
                flexDirection : "row",
                backgroundColor : '#72CCEC',
                alignItems : 'center'
            }}>
                
                <Image
                style={{width : 100, height : 50, marginLeft : 20, marginTop :20 }}
                 source={require('../assets/Workshop.png')}
                            />
            </View>

            {/**Landing */}
            <ScrollView
                style={{flex:1, paddingHorizontal : 15}}
                >
                <View>
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 25,
                        marginBottom : 10,
                    }}>Top du jour</Text>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        {
                            cours.map((cour, i) => (
                                <TouchableOpacity key={i} onPress={() => navigation.navigate('Details', {cour})}>
                                  <SlideItem 
                                    key={i}
                                    title={cour.title}
                                    teacher={cour.teacher}
                                    studio={cour.studio}
                                    img={img.id[i]}
                            
                                     />
                                     </TouchableOpacity>
                            ))
                        }
                        
                    </ScrollView>

                </View>

                {/**Popular */}    
                <View style={{
                    marginTop : 30
                }}>
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 20,
                        marginBottom : 10,
                    }}>Populaire</Text>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                       {
                            cours.map((cour, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('Details', {cour})}>
                                <SlideItem2 
                                    key={i}
                                    title={cour.title}
                                    teacher={cour.teacher}
                                    studio={cour.studio}
                                    img={img.id[i]}
                                    />
                            </TouchableOpacity>
                            ))
                        }
                    </ScrollView>

                </View>   

                {/** recommandation */}
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
                            cours.map((cour, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('Details', {cour})}>
                                <SlideItem2 
                                    key={i}
                                    title={cour.title}
                                    teacher={cour.teacher}
                                    studio={cour.studio}
                                    img={img.id[i]}
                                    />
                            </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>  

                {/** recommandation */}
                <View style={{
                    marginTop : 30
                }}>
                    <Text style={{
                        color : '#7E8081',
                        fontSize : 20,
                        marginBottom : 10,
                    }}>Parce que vous aimez le <Text style={{color : '#72CCEC'}}>Hip Hop</Text></Text>
                    <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    >
                        {
                            cours.map((cour, i) => (
                            <TouchableOpacity key={i} onPress={() => navigation.navigate('Details', {cour})}>
                                <SlideItem2 
                                    key={i}
                                    title={cour.title}
                                    teacher={cour.teacher}
                                    studio={cour.studio}
                                    img={img.id[i]}
                                    />
                            </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                </View>   

                </ScrollView>
        </View>
    )
}

export default Home