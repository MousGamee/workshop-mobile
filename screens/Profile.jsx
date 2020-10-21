import React from 'react'
import { 
    View, 
    Text,
    Image,
    SafeAreaView 
} from 'react-native'

export default function Profile() {
    return (
        <SafeAreaView style={{ flex : 1 }}>
            <View>

            </View>
            <View style={{alignSelf : 'center', marginTop : 24}}>
                <View style={{width : 200, height : 200, borderRadius : 100, overflow : 'hidden'}}>
                    <Image
                    style={{flex : 1, width : undefined, height : undefined}}
                        source={require('../assets/profile.jpg')}
                        resizeMode="center"
                        />

                </View>
            </View>
        </SafeAreaView>
    )
}
