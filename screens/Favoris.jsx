import React, {useContext, useEffect, useState} from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Card from '../components/Card';
import { ClassContext } from '../context/ClassContext';

const Favoris = () => {
    const { cours, img } = useContext(ClassContext)
    const favoriteClass = []

    cours.forEach((cour, i) => {
        if(!cour.isFavoris){
            return
        }
        favoriteClass.push(<Card 
            key={i}
            title={cour.title}
            teacher={cour.teacher}
            studio={cour.studio}
            img={img.id[i]}
        />)
    })
    
    return (
        <View style={{flex : 1, justifyContent : "center", alignItems : 'center'}}>
            <ScrollView style={{marginTop : 20 }}>
                {favoriteClass} 
            </ScrollView>    
        </View>
    )
}

export default Favoris

const styles = StyleSheet.create({

})
