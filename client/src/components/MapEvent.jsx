import { useMap } from "@vis.gl/react-google-maps"
import { useEffect } from "react"
import useForm from "../hooks/useForm"


const MapEvent = () => {

    const map = useMap("54fe67695b6cbfc7")
    const {setFormData} = useForm()

   
  useEffect(()=>{
    if(!map) return;

    map.addListener('click', (e)=>{
      setFormData(prev=>{
        return {
          ...prev,
          pos: {lat:e.latLng.lat(), lng:e.latLng.lng()} 
        }
      })

      // map.setZoom( {lat:e.latLng.lat(), lng:e.latLng.lng()})
        console.log("eee", e.latLng.lng())
        console.log("eee", e.latLng.lat())
    })
  },[map, setFormData])

  return null;
}

export default MapEvent