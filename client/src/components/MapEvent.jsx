import { useMap } from "@vis.gl/react-google-maps"
import { useEffect } from "react"


const MapEvent = () => {

    const map = useMap("54fe67695b6cbfc7")
  useEffect(()=>{
    if(!map) return;

    map.addListener('click', (e)=>{
        console.log("eee", e)
    })
  },[map])

  return null;
}

export default MapEvent