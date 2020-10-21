import { TabActions } from '@react-navigation/native'
import React from 'react'
import { 
    View, 
    Text,
    Image,
    SafeAreaView 
} from 'react-native'

import { Avatar, ListItem } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/FontAwesome'

const Profile = ({ navigation }) => {
    const menuList = [
        {
            title : 'Notificaion',
            icon : 'fa'
        },
        {
            title : 'Réservation',
            icon : 'id-badge'
        },
        {
            title : 'Favoris',
            icon : 'heart'
        },
        {
            title : 'Personalisation',
            icon : 'gears'
        },
    ]
    return (
        <SafeAreaView style={{ flex : 1 }}>
            <ScrollView>
            <View style={{flexDirection : 'row', justifyContent : 'space-between', marginTop : 25, paddingHorizontal : 15}}>
                <Text style={{fontWeight : '700', fontSize : 25}}>Mon compte</Text>
                <View>
                    <Icon name="ellipsis-v" size={25} 
                          onPress={() => {navigation.navigate('Option')}}
                    />
                </View>
               
            </View>
            <View style={{alignSelf : 'center', marginTop : 34}}>
                <View style={{}}>
                <Avatar
                size="xlarge"
                    rounded
                    source={{
                        uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                        }}
                />
                        
                </View>
                <Text style={{fontSize : 24, fontWeight : '700', justifyContent : "center", alignSelf : "center"}}>
                    Marine Anissa</Text>
            </View>
            <View style={{marginTop : 25}}>
                {
                    menuList.map((item, i)=> (
                        <ListItem key={i} bottomDivider>
                            <Icon name={item.icon} size={15}/>
                            <ListItem.Content>
                                <ListItem.Title>{item.title}</ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    ))
                }
            </View>
            </ScrollView>
        </SafeAreaView>
        
    )
}

export default Profile
