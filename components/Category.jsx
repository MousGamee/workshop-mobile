import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'

export const Category = ({img, title}) => {
    return (
        <View style={{ height : 150, width : 130, marginLeft : 20, borderWidth : 0.5, borderRadius : 3, borderColor : '#DDDDDD'}}>
        <View style={{flex : 2}}>
            <Image source={img} 
                style={{ flex : 1, width : null, height : null, resizeMode : 'cover'}}
            />
        </View>
        <View style={{flex : 1, paddingLeft:10, paddingTop : 10}}>
            <Text>{title}</Text>
        </View>
    </View>
    )
}

export const SlideItem = () => (
    <View style={{marginRight : 20}}>
             <TouchableOpacity>
                 <View style={{
                         width : 255,
                            height : 330,
                            }}>
                            
                            <Image 
                            imageStyle={{borderRadius : 65}}
                            style={{
                                resizeMode : "cover",
                                flex : 1,
                                width : null,
                                height : null,
                            }}
                            source={require('../assets/image6.png')}/>
                                
                          
                            </View>
                </TouchableOpacity>
                            <View style={{paddingHorizontal : 10}}>
                                <View style={{flexDirection : "row", justifyContent : "space-between"}}>
                                    <Text style={{fontSize : 15, fontWeight : 'bold', color : "#14AADF"}}>Hip hop comercial</Text>
                                    <Text>Studio MRG</Text>
                                </View>
                                <View>
                                    <Text>By Jk dash</Text>
                                </View>
                            </View>
                        </View>
)

export const SlideItem2 = () => (
    <View style={{marginRight : 20}}>
        <TouchableOpacity>
        <View style={{
                         width : 140,
                            height : 180,
                            }}>
                            <Image 
                            style={{
                                resizeMode : "cover",
                                flex : 1,
                                width : null,
                                height : null,
                            }}
                            source={require('../assets/image6.png')}/>
                            </View>
                </TouchableOpacity>
                            <View style={{paddingHorizontal : 5}}>
                                <View style={{flexDirection : "row", justifyContent : "space-between"}}>
                                    <Text style={{fontSize : 12, fontWeight : 'bold', color : "#14AADF"}}>Hip hop comercial</Text>
                                   
                                </View>
                                <View>
                                    <Text>By Jk dash</Text>
                                </View>
                            </View>
                        </View>
)
