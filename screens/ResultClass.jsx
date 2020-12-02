import React, { useContext, useState,  } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native'
import Card from '../components/Card'
import { ClassContext } from '../context/ClassContext'
import { genres }  from '../data'

const ResultClass = ({navigation}) => {
    const { cours, textSearch } = useContext(ClassContext)
    const [apiGenre, setApiGenre ] = useState(genres)
  console.log(cours)
    return (
        <View style={styles.container}>
            <Text>{textSearch}</Text>
                <FlatList 
                    keyExtractor={item => item.id.toString()}
                    data={cours}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item, i }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Details', {item})}>
                        <Card  
                            title={item.title}
                            teacher={item.teacher}
                            studio={item.studio}
                            img={item.img}
                            genre={item.genre.map(g => apiGenre[g])}
                        />
                    </TouchableOpacity>
                    )}
                />
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
