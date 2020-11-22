import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Card from '../components/Card'
import { ClassContext } from '../context/ClassContext'

const ResultClass = ({navigation}) => {
    const { cours, img } = useContext(ClassContext)
    return (
        <View style={{flex : 1, justifyContent : "center", alignItems : "center"}}>
            <ScrollView style={{flex : 1 , paddingTop : 10}}>
            {
                cours.map((cour, i) => (
                    <TouchableOpacity key={i} onPress={() => navigation.navigate('Details', {cour})}>
                        <Card  
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
    )
}

export default ResultClass

const styles = StyleSheet.create({})
