import React, { createContext, useState } from 'react'
import { Animated } from 'react-native'
import { classItems, teachers, events } from '../data'

export const ClassContext = createContext()

const ClassContextProvider = props => {
    //data
    const [cours, setCours] = useState(classItems)
    const [coursBackup, setCoursBackup] = useState([])
    const [teacher, setTeacher] = useState (teachers)
    const [isSearch, setIsSearch] = useState (true)
    const [textSearch, setTextSearch] = useState('')
    const [event, setEvent] = useState(events)

    // mettre dans les favoris
    const setFavoris = (id) => { 
        cours[id].isFavoris = !cours[id].isFavoris
        console.log(cours[id].isFavoris)
    }
   //effectuer une recherche
    const search = (text) => {
        console.log(textSearch)
        setTextSearch(text)
        // afficher le resultat en fonction de la recherche
    }

    //changement de laffichage seulement si une recherche est en cours
    const handleSearch = () => {
        
    }

    return(
        <ClassContext.Provider value={{
            cours, coursBackup, teacher, textSearch, setTextSearch, setFavoris, search, isSearch, event,
        }}>
            {props.children}
        </ClassContext.Provider>
    )
}

export default ClassContextProvider