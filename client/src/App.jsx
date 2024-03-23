import { useEffect } from 'react'

//import './App.css'
import { 
  APIProvider, 
  Map,
  useApiIsLoaded,

 } from '@vis.gl/react-google-maps'
import useLocation from './hooks/useLocation';
import CustomerForm from './components/CustomerForm';
import MapEvent from './components/MapEvent';
import PinLocation from './components/PinLocation';
import useFetch from './hooks/useFetch';
import useCustomer from './hooks/useCustomer';


function App() {

 
  const apiIsLoaded = useApiIsLoaded();
  const {pos} = useLocation()
  const {customers, fetch} = useFetch()
  const {refresh, setRefresh} = useCustomer()
  
  useEffect(()=>{
    if(refresh){
      fetch()
      setRefresh(false)
    }
  },[refresh, setRefresh, fetch])



  useEffect(() => {
    if (!apiIsLoaded) return;

  }, [apiIsLoaded]);

  return (
    <>
      <APIProvider apiKey='AIzaSyCAA3k3_jkqynSUuN-KNZ9ndd4k01Q1h-M'>
        <Map
          style={{width: '100vw', height: '100vh', position: "relative"}}
          defaultCenter={{lat: pos?.lat, lng: pos?.lng}}
          defaultZoom={3}
          id="54fe67695b6cbfc7"
        >

          {
            customers?.length > 0 && (
              customers.map(d=> 
                <PinLocation pos={d?.pos}  key={d?._id} user={d}/>
              )
            )
            
          }
          <PinLocation pos={pos} currentLocate={true}/>
        </Map>

        <MapEvent/>
        <CustomerForm/>

      </APIProvider>
     
    </>
   
  )
}

export default App
