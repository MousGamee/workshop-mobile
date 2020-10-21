import React from 'react'
import { 
    View, 
    Text, 
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Dimensions,  
    Image
} from 'react-native'
import { Input } from 'react-native-elements';
import { Value } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/Ionicons'

import Category from '../components/Category'

export default function Search() {
    const {height, width} = Dimensions.get('window')
    return (
        <SafeAreaView style={{flex : 1}}>
            <View style={{}}>
                <View style={{height : 110, backgroundColor : 'white', borderBottomWidth:1, borderBottomColor : '#DDDDDD'}}>
                    <View style={{
                        flexDirection : 'row', 
                        padding : 10, 
                        marginTop : 10,
                        backgroundColor : 'white', 
                        marginHorizontal : 20, 
                        shadowOffset : {width : 0, height : 0}, 
                        shadowColor : 'black',
                        elevation : 1,
                        shadowColor : 0.2}}>
                        <Input
                        underlineColorAndroid="transparent"
                        style={{background : 'none'}}
                            placeholder="Rechercher"
                            placeholderTextColor="grey"
                           
                            leftIcon={
                                <Icon name="ios-search" size={20} />
                            }
                            style={{flex : 1, fontWeight : '700', backgroundColor : 'white'}} />
                    </View>
                </View>
            </View>

            <ScrollView style={{flex : 0}}
            scrollEventThrottle={16}
            >
                <View style={{flex : 1, backgroundColor : 'white', paddingTop : 20}}>
                    {/** */}

                    <View>
                    <Text
                        style={{fontSize : 24, fontWeight : '700',paddingHorizontal: 20, color : '#34668D'}}
                    >Quel style cherches tu ?</Text>
                     <View style={{height : 160, marginTop : 20}}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        >
                            <Category img={require('../assets/image1.png')} title="Hip hop" />
                            <Category img={require('../assets/image2.png')} title="Classique"/>
                            <Category img={require('../assets/image3.png')} title="Tango"/>
                            <Category img={require('../assets/image4.png')} title="New Style"/>
                            <Category img={require('../assets/image5.png')} title="Afro"/>
                            <Category img={require('../assets/image6.png')} title="All style"/>
                        </ScrollView>
                     </View>
                    </View>

                    <View style={{marginTop : 20, paddingHorizontal : 20}}>
                        <Text style={{fontSize : 24, fontWeight : '700', color : '#34668D'}}>
                            Recement ajouté
                        </Text>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        >
                        <View style={{width : width-15, height : 200, marginTop : 20}}>
                            <Image 
                            style={{flex : 1, height : null, width : null, resizeMode : 'cover', borderRadius : 5, borderWidth: 1, borderColor : '#DDDDDD'}}
                                source={require('../assets/image5.png')}
                            />
                            <View style={{flexDirection : 'column', marginLeft : 10}}>
                                <Text style={{fontWeight : '700', fontSize : 15,}}>
                                    Class name
                                </Text>
                                <Text style={{fontWeight : '700', fontSize : 15,}}>
                                    Studio Name
                                </Text>
                                <Text style={{fontWeight : '700', fontSize : 15,}}>
                                    Teacher Name
                                </Text>                                
                            </View>
                        </View>
                        </ScrollView>
                    </View>

                    
                    <View style={{ marginTop : 40}}>
                    <Text
                        style={{fontSize : 24, fontWeight : '700',paddingHorizontal: 20, color : '#34668D'}}
                    >Recommandé pour vous?</Text>
                    <View style={{height : 160, marginTop : 20}}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        >
                            <Category img={require('../assets/image1.png')} title="Hip hop" />
                            <Category img={require('../assets/image2.png')} title="Classique"/>
                            <Category img={require('../assets/image3.png')} title="Tango"/>
                            <Category img={require('../assets/image4.png')} title="New Style"/>
                            <Category img={require('../assets/image5.png')} title="Afro"/>
                            <Category img={require('../assets/image6.png')} title="All style"/>
                        </ScrollView>
                    </View>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
