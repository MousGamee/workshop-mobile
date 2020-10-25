import React from 'react'
import { 
    View,
     Text,
     TextInput,
     ScrollView,
     Image
     } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SlideItem, SlideItem2 } from '../components/Category'


const Home = ({navigation}) => {

    return (
        <View style={{flex : 1, backgroundColor : '#fff'}}>
            {/**Header */}
            <View style={{
                marginTop : 10,
                height : 100,
                flexDirection : "row",
                justifyContent : "center", 
                alignItems : 'center'
            }}>
                <Ionicons name="ios-search" size={20} style={{color : "#72CCEC", marginRight : 10}} />
                <TextInput
                style={{
                    backgroundColor : "white",
                    width : '75%',
                    height : '45%',
                    borderRadius : 20,
                    paddingLeft : 20,
                }}
                placeholder="Que recherches tu ?" />
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
                        <SlideItem />
                        <SlideItem />
                        <SlideItem />

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
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
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
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
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
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                        <SlideItem2 />
                    </ScrollView>
                </View>   

                </ScrollView>
        </View>
    )
}

export default Home