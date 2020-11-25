import React, { useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, ScrollView , FlatList} from 'react-native'
import Card from '../components/Card'
import { ClassContext } from '../context/ClassContext'

const ResultClass = ({navigation}) => {
    const { cours, coursBackup, img, textSearch } = useContext(ClassContext)
   const filterCours = event => {
       var query = event.nativeEvent.text
   }
    return (
        <View style={styles.container}>
            <Text>{textSearch}</Text>
            <ScrollView style={{flex : 1 , paddingTop : 10}}>
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={cours}
                    renderItem={({ item, i }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
                        <Card  
                            title={item.title}
                            teacher={item.teacher}
                            studio={item.studio}
                            img={item.img}
                        />
                    </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </View>
    )
}

export default ResultClass

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        justifyContent : "center", 
        alignItems : "center",
        backgroundColor : 'white'
    }
})
