import React, { createContext, useState } from 'react'
import { classItems, classImage, teachers } from '../data'

export const ClassContext = createContext()

const ClassContextProvider = props => {
    const [cours, setCours] = useState(classItems)
    const [coursBackup, setCoursBackup] = useState(classItems)
    const [img, setImg] = useState (classImage)
    const [teacher, setTeacher] = useState (teachers)
    const [isSearch, setIsSearch] = useState (false)
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
        if(textSearch.length > 0){
            setIsSearch(true)
        }else setIsSearch(false)
        console.log(isSearch)
        console.log(textSearch)
        console.log(textSearch.length)
    }

    //changement de laffichage seulement si une recherche est en cours
    const handleSearch = () => {
        setIsSearch(!isSearch)
    }
    return(
        <ClassContext.Provider value={{
            cours, coursBackup, img, teacher, textSearch, setTextSearch, setFavoris, search, isSearch
        }}>
            {props.children}
        </ClassContext.Provider>
    )
}

export default ClassContextProvider