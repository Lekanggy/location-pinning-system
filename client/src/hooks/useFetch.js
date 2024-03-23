import { useCallback, useEffect, useState } from 'react'
import { client } from '../utils/axios-instance'
import useCustomer from './useCustomer'
import { calculateDistanceBetweenPoints } from '../utils/distance'


const useFetch = () => {

    const [dataState, setDataState] = useState("")
    const {customers, setCustomers, pos} = useCustomer()
 
    const addDistance = useCallback((arr)=>{

      if(pos){
        setCustomers(
          arr?.map(d=>{
            const dis = calculateDistanceBetweenPoints(d?.pos, pos)
            return {...d, dist: dis}
          })
        )
      }
     
    }, [pos, setCustomers])

    const fetch = useCallback(async ()=>{
      const request = client()
      try {
        await request.get('http://localhost:1550/api/users').then((res)=>{
          setDataState("success")
          addDistance(res?.data?.data)
        }).catch(error=>{
          console.log(error)
          setDataState("failed")
        }).finally(()=>{
          setDataState("idle")
        })
      } catch (error) {
        console.log(error)
      }
    }, [addDistance])
    console.log("posss", customers)

   
    useEffect(()=>{
        
        if(pos){
          fetch()
        }
    
      
    }, [ pos, fetch])

      return {customers, dataState, fetch}
}

export default useFetch