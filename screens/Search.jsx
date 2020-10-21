import React, {useState} from 'react'
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

import Icon from 'react-native-vector-icons/Ionicons'

import Category from '../components/Category'
import * as Animatable from 'react-native-animatable'

export default function Search() {

    const {height, width} = Dimensions.get('window')
    const [searchBarFocused, setSearchBarFocused] = useState(false)
    return (
        <SafeAreaView style={{flex : 1}}>
            <StatusBar hidden={true}/>
            <View>
                <View style={{height : 80, backgroundColor : 'green',justifyContent : 'center',paddingHorizontal : 5, }}>
                    <Animatable.View 
                     animation='slideInRight'
                    style={{
                        flexDirection : 'row',                        
                        backgroundColor : 'white',  
                        shadowOffset : {width : 0, height : 0}, 
                        shadowColor : 'black',
                        elevation : 1,
                        padding : 5,
                        height : 50,
                        borderRadius : 10,
                        alignItems : "center",
                        width : '100%',     
                        shadowColor : 0.2}}>
                            <Icon name='ios-search' size={24} />
                        <TextInput
                            placeholder="Rechercher"
                            placeholderTextColor="grey"                            
                            style={{ backgroundColor : 'white', fontSize : 20, marginLeft : 15}} />
                    </Animatable.View>
                </View>
            </View>
            
            <ScrollView style={{flex : 1}}
            scrollEventThrottle={16}
            style={{backgroundColor : 'black'}}
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
