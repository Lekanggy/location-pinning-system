import  { useContext } from 'react'
import { CustomerCtx } from '../context/ContextProvider'

const useCustomer = () => {

   return useContext(CustomerCtx)
}

export default useCustomer