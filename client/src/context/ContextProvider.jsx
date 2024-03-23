import {createContext, useState } from "react";
import PropTypes from 'prop-types'
import { dataForm } from "../components/data";


export const CustomerCtx = createContext({})



const ContextProvider = ({children})=>{

 
    const initialState = {
        tempMarkerPos: {lat:0, lng: 0}
    }
    const [center, setCenter] = useState(initialState)
    const [open, setOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);
    const [pos, setPos] = useState(null)
    const [customers, setCustomers] = useState([])
    const [dataState, setDataState] = useState("idle")
    const [formData, setFormData] = useState(dataForm);

    return(
        <CustomerCtx.Provider value={{
                center, 
                setCenter, 
                open, 
                setOpen, 
                refresh,
                setRefresh,
                dataState, 
                setDataState,
                customers, 
                setCustomers,
                pos,
                setPos,
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