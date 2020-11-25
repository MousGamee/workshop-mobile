import React, { createContext, useState } from 'react'
import { classItems, teachers } from '../data'

export const ClassContext = createContext()

const ClassContextProvider = props => {
    const [cours, setCours] = useState(classItems)
    const [coursBackup, setCoursBackup] = useState([])
    const [teacher, setTeacher] = useState (teachers)
    const [isSearch, setIsSearch] = useState (true)
    const [textSearch, setTextSearch] = useState('')

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
            cours, coursBackup, teacher, textSearch, setTextSearch, setFavoris, search, isSearch
        }}>
            {props.children}
        </ClassContext.Provider>
    )
}

export default ClassContextProvider