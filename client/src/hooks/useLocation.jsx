import { useEffect} from "react";
import { errorCallback } from "../utils/callbacks";
import useCustomer from "./useCustomer";

  
const useLocation = () => {
   const {pos, setPos} = useCustomer()
   
    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation?.getCurrentPosition((position)=>{
                if(position)
                    setPos({lat: position?.coords?.latitude, lng: position?.coords?.longitude});
            }, errorCallback)
        }
       
    },[setPos])

    return {pos}
    
}

export default useLocation