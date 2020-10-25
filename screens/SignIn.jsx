import React from 'react'
import { View, Text, Button } from 'react-native'

const SignIn = ({ navigation }) => {
    return (
        <View style={{flex : 1, justifyContent : "center", alignItems : 'center'}}>
            <Text>SignIn</Text>
            <Button
                title="go to login"
                onPress={() => navigation.push('Login')}
                />
          
        </View>
    )
}

export default SignIn
