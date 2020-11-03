import React, { createContext, useState } from 'react'
import { classItems, classImage } from '../data'

export const ClassContext = createContext()

const ClassContextProvider = props => {
    const [cours, setCours] = useState(classItems)
    const [img, setImg] = useState (classImage)
    
    return(
        <ClassContext.Provider value={{
            cours, img
        }}>
            {props.children}
        </ClassContext.Provider>
    )
}

export default ClassContextProvider