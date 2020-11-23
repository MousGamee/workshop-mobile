import React, { createContext, useState } from 'react'
import { classItems, classImage, teachers } from '../data'

export const ClassContext = createContext()

const ClassContextProvider = props => {
    const [cours, setCours] = useState(classItems)
    const [img, setImg] = useState (classImage)
    const [teacher, setTeacher] = useState (teachers)
    const [isSearch, setIsSearch] = useState (false)

    // mettre dans les favoris
    const setFavoris = (id) => { 
        cours[id].isFavoris = !cours[id].isFavoris
        console.log(cours[id].isFavoris)
    }
   //effectuer une recherche
    const search = () => {
        alert(isSearch)
        setIsSearch(!isSearch)
    }

    //changement de laffichage seulement si une recherche est en cours
    const handleSearch = () => {
        setIsSearch(!isSearch)
    }
    return(
        <ClassContext.Provider value={{
            cours, img, teacher, setFavoris, search, isSearch
        }}>
            {props.children}
        </ClassContext.Provider>
    )
}

export default ClassContextProvider