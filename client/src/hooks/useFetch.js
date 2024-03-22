import { useEffect, useState } from 'react'
import { client } from '../utils/axios-instance'
import useCustomer from './useCustomer'
import { calculateDistanceBetweenPoints } from '../utils/distance'


const useFetch = () => {

    const [dataState, setDataState] = useState("")
    const {customers, setCustomers, pos} = useCustomer()
 
    const addDistance = (arr)=>{

      if(pos){
        setCustomers(
          arr?.map(d=>{
            const dis = calculateDistanceBetweenPoints(d?.pos, pos)
            return {...d, dist: dis}
          })
        )
      }
     
    }
    console.log("posss", customers)
    useEffect(()=>{
        const fetch = async ()=>{
          const request = client()
          try {
            await request.get('http://localhost:1550/api/users').then((res)=>{
              setDataState("success")
              //console.log("data", res?.data?.data)
              //setCustomers(res?.data?.data)
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
        }

        if(pos){
          fetch()
        }
    
      
      }, [setCustomers, pos])

      return {customers, dataState}
}

export default useFetch