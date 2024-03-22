import { useEffect, useState } from "react";
import { errorCallback } from "../utils/callbacks";

  
const useLocation = () => {
    const [pos, setPos] = useState(undefined)
   
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation?.getCurrentPosition((position)=>{
                if(position) 
                    setPos({lat: position?.coords?.latitude, lng: position?.coords?.longitude});
            }, errorCallback)
        }
       
    },[])

    return {pos}
    
}

export default useLocation