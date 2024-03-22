import {createContext, useState } from "react";
import PropTypes from 'prop-types'


export const CustomerCtx = createContext({})


const ContextProvider = ({children})=>{

 
    const initialState = {
        tempMarkerPos: {lat:0, lng: 0}
    }
    const [dataItem, setItem] = useState(initialState)
    const [open, setOpen] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [dataState, setDataState] = useState("")
    const [formData, setFormData] = useState({
      name: '',
      address: '',
      contactInfo: '',
      pos: {lat: 0, lng: 0}
    });

    return(
        <CustomerCtx.Provider value={{
                dataItem, 
                setItem, 
                open, 
                setOpen, 
                isSubmitting, 
                setIsSubmitting, 
                dataState, 
                setDataState,
                formData, 
                setFormData
            }}
        >
            {children}
        </CustomerCtx.Provider>
    )
}

ContextProvider.propTypes = {
    children: PropTypes.node
}

export default ContextProvider