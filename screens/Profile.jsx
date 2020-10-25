import React, {useContext} from 'react'
import { 
    View, 
    Text,
    Image,
    SafeAreaView,
    StyleSheet, 
    ImageBackground,
    TouchableOpacity,
    Button
} from 'react-native'

import { Avatar, ListItem } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context';

const Profile = ({ navigation }) => {

    const { logOut } = useContext(AuthContext)

    const AccountList = [
        {
            title : 'Mes Cours',
            icon : 'fa',
            link : 'MyClass'
        },
        {
            title : 'Mes Achats',
            icon : 'id-badge',
            link : 'MyPurchase'

        },
        {
            title : 'Mon compte',
            icon : 'gears',
            link : 'MyAccount'

        },
    ]

    const Setting = [
        {
            title : 'Notification',
            icon : 'fa',
            link : 'Notification'
        },
        {
            title : 'Aide',
            icon : 'id-badge',
            link : 'Help'

        }
    ]
    return (
        <View style={{ flex : 1, backgroundColor : 'white' }}>
            <View style={styles.header}>
                <ImageBackground
                style={styles.headerBkg}
                source={require('../assets/header.png')}
                
                >
                </ImageBackground>
                <View style={{position : "absolute", top : 80, left : 10,}}>
                    <Text style={{ color : '#FFFFFF', fontSize : 20}}>NOM Prenom</Text>
                </View>
                <View style={{position : 'absolute', right : 20, top : 80}}>
                        <Avatar
                        size="xlarge"
                        rounded
                        source={{
                            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'
                            }}
                    /></View>

                    <View style={{marginTop : -150}}>
                      
                        <View style={{paddingHorizontal : 10}}>  
                        <Text style={{fontSize : 20 , color : '#C1C1C1', marginBottom : 10}}> Compte </Text>
                            {
                                AccountList.map((item, i) => (
                                    <ListItem key={i} bottomDivider onPress={() => navigation.push(item.link)}>
                                        <Icon name={item.icon} size={15}/>
                                            <ListItem.Content>
                                                <ListItem.Title>{item.title}</ListItem.Title>
                                            </ListItem.Content>
                                    </ListItem>
                                ))
                            }
                        </View>
                    </View>

                    <View>
                        
                        <View style={{paddingHorizontal : 10, marginTop : 15}}>
                        <Text style={{fontSize : 20 , color : '#C1C1C1', marginBottom : 10}}> Réglages </Text>
                            {
                                Setting.map((item, i) => 
                                
                                (
                                    
                                    <ListItem key={i} bottomDivider onPress={() => navigation.push(item.link)}>
                                        <Icon name={item.icon} size={15}/>
                                            <ListItem.Content>
                                                <ListItem.Title>{item.title}</ListItem.Title>
                                            </ListItem.Content>
                                    </ListItem>
                                ))
                            }
                         <Button
                         onPress={() => logOut()}
                            title='deconnection' />
                             
                        </View>
                    </View>
            </View>
        </View>
        
    )
}
export default Profile
const styles = StyleSheet.create({

    header : {
        width : '100%',
    },
    headerBkg : {
        height : 380,
        justifyContent : "flex-end",
        top : -220
        
    },

})
