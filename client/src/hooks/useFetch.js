import { useEffect, useState } from 'react'
import { client } from '../utils/axios-instance'

const useFetch = () => {

    const [dataState, setDataState] = useState("")
    const [customers, setCustomers] = useState([])
 
    useEffect(()=>{
        const fetch = async ()=>{
          const request = client()
          try {
            await request.get('http://localhost:1550/api/users').then((res)=>{
              setDataState("success")
              setCustomers(res.data?.data)
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
    
       fetch()
      }, [])

      return {customers, dataState}
}

export default useFetch