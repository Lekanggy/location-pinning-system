import { useEffect, useState } from 'react'

//import './App.css'
import { 
  APIProvider, 
  Map,
  Marker,
  Pin,
  AdvancedMarker,
  useAdvancedMarkerRef,
  InfoWindow,
  useMarkerRef,
  useApiIsLoaded,

 } from '@vis.gl/react-google-maps'
import useLocation from './hooks/useLocation';
import CustomerForm from './components/CustomerForm';
import MapEvent from './components/MapEvent';


function App() {
  const [markerRef, marker] = useMarkerRef();
  //const [markerRef, marker] = useAdvancedMarkerRef();
  const apiIsLoaded = useApiIsLoaded();
  const [infowindowShown, setInfowindowShown] = useState(false);


 



  const toggleInfoWindow = () =>
    setInfowindowShown(previousState => !previousState);


  const {pos} = useLocation()
  //console.log("User", pos)

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

          <Marker ref={markerRef} position={{lat: pos?.lat, lng: pos?.lng}} onClick={toggleInfoWindow}/>
           
          {infowindowShown && (
             <InfoWindow anchor={marker} onCloseClick={toggleInfoWindow}>
             <h2>Hello everyone!</h2>
             <p>This is an Info Window</p>
             <img src="..." />
           </InfoWindow>
          )}
           
          
        </Map>
        <MapEvent/>
        <CustomerForm/>
      </APIProvider>
     
    </>
   
  )
}

export default App
