import React, { useContext, useState } from 'react'
import { 
    FlatList, 
    Text, 
    View,
    TouchableOpacity 
} from 'react-native';
import { ClassContext } from '../context/ClassContext';
import TopTabNavigation from '../navigation/TopTabNavigation';

const Search = () => {
    const { isSearch } = useContext(ClassContext)
    return ( 
        <>{
            !isSearch ? (
                <View style={{flex : 1 , paddingHorizontal : 10}}>
                    <Text style={{marginTop : 20, fontSize : 20, fontWeight : 'bold'}}>Vos preference</Text>
                    <View style={{marginTop : 10}}>
                        <TouchableOpacity style={{backgroundColor : '#45da54' , width : 160, height : 100, borderRadius : 20, elevation : 5, shadowOpacity : 5, borderWidth : 0, justifyContent : "center", alignItems : "center"}}>
                                    <Text style={{color : 'white', fontSize : 20, fontWeight : 'bold'}}>Afro</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <TopTabNavigation />
            )
        }
        </>
    )
}

export default Search