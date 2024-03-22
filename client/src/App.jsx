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


function App() {

 
  const apiIsLoaded = useApiIsLoaded();


// const positions = [
//   {lat:6.4550, lng:3.3841},
//   {lat:9.0667, lng:7.4833},
//   {lat:7.3964, lng:3.9167},
//   {lat:6.2069, lng:7.0678},
//   {lat:12.0000, lng:8.5167},
//   {lat:4.8242, lng:7.0336},
//   {lat:6.3333, lng:6.8333},
//   {lat:6.1667, lng:6.7833},
//   {lat:11.8333, lng:13.1500},
//   {lat:5.1167, lng:7.3667},
//   {lat:6.3333, lng:5.6222}
// ]

 


  const {pos} = useLocation()
  const {customers} = useFetch()
  console.log("User", customers)

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
          //gestureHandling={'greedy'}
          //disableDefaultUI={true}
        >

          {
            customers?.length > 0 && (
              customers.map(d=> 
                <PinLocation pos={d?.pos}  key={d?._id} user={d}/>
              )
            )
            
          }
          <PinLocation pos={pos}/>
        </Map>

        <MapEvent/>
        <CustomerForm/>

      </APIProvider>
     
    </>
   
  )
}

export default App
