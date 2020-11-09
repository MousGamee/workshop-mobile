import React, { createContext, useState } from 'react'
import { classItems, classImage } from '../data'

export const ClassContext = createContext()

const ClassContextProvider = props => {
    const [cours, setCours] = useState(classItems)
    const [img, setImg] = useState (classImage)

    const setFavoris = (id) => { 
        cours[id].isFavoris = !cours[id].isFavoris
        console.log(cours[id].isFavoris)
    }
   
    return(
        <ClassContext.Provider value={{
            cours, img, setFavoris
        }}>
            {props.children}
        </ClassContext.Provider>
    )
}

export default ClassContextProvider