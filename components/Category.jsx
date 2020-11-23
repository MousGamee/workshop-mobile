import React from 'react'
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native'

export const Category = ({}) => {
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

export const SlideItem = ({img, title, teacher, studio,}) => (
    <View style={{marginRight : 20}}>
        <View style={{
            width : 195,
            height : 270,
        }}>
            <Image 
                imageStyle={{borderRadius : 65}}
                borderRadius={20}
                style={{
                    resizeMode : "cover",
                    flex : 1,
                    width : null,
                     height : null,
                 }}
                   source={img}/>  
        </View>
        <View style={{paddingHorizontal : 10}}>
            <View style={{flexDirection : "row", justifyContent : "space-between"}}>
                <Text style={{fontSize : 13, fontWeight : 'bold', color : "#14AADF"}}>{title}</Text>
                <Text style={{fontSize : 13}}>{studio}</Text>
            </View>
            <View>
                <Text style={{fontSize : 14, fontWeight : 'bold'}}>{teacher}</Text>
            </View>
        </View>
    </View>
)

export const SlideItem2 = ({img, title, teacher, studio}) => (
    <View style={{marginRight : 20}}>
        <View style={{
            width : 140,
            height : 180,
            }}>
            <Image 
             borderRadius={20}
            style={{
                resizeMode : "cover",
                flex : 1,
                width : null,
                height : null,
            }}
            source={img}/>
        </View>             
        <View style={{paddingHorizontal : 5}}>
            <View style={{flexDirection : "row", justifyContent : "space-between"}}>
                <Text style={{fontSize : 12, fontWeight : 'bold', color : "#14AADF"}}>{title}</Text>                                  
            </View>
            <View>
                <Text>{teacher}</Text>
            </View>
        </View>
    </View>
)

export const TeacherPic = ({gotoTeacherDetails, name, img}) => (
    <View style={{width : 150, marginRight : 10}}>
        <TouchableOpacity style={{width : 150, height : 150}} onPress={() => gotoTeacherDetails()}>
            <Image 
            borderRadius={150}
            style={{
                width : null,
                height : null,
                resizeMode : "cover",
                flex : 1
             }}
                source={img}
            />                       
        </TouchableOpacity>
    <Text style={{color : '#72CCEC', fontSize : 15, fontWeight : "bold", alignSelf : "center", marginTop : 10}}>{name}</Text>
    </View>

)
