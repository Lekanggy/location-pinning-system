import { useEffect, useState } from 'react'

//import './App.css'
import { 
  APIProvider, 
  Map,
  //Marker,
  Pin,
  AdvancedMarker,
  useAdvancedMarkerRef,
  InfoWindow,
  //useMarkerRef,
  useApiIsLoaded
 } from '@vis.gl/react-google-maps'
import useLocation from './hooks/useLocation';
import CustomerForm from './components/CustomerForm';

function App() {
  //const [markerRef, marker] = useMarkerRef();
  const [markerRef, marker] = useAdvancedMarkerRef();
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
      <APIProvider apiKey='AIzaSyBs3WAeZg-NI35Jt51OT3Tv4reCquoG4Bk'>
        <Map
          style={{width: '100vw', height: '100vh', position: "relative"}}
          defaultCenter={{lat: pos?.lat, lng: pos?.lng}}
          defaultZoom={3}
          mapId="my-di-one"
          //gestureHandling={'greedy'}
          //disableDefaultUI={true}
        >

          <AdvancedMarker ref={markerRef} position={{lat: pos?.lat, lng: pos?.lng}} onClick={toggleInfoWindow}>
            <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
          </AdvancedMarker>
          {infowindowShown && (
             <InfoWindow anchor={marker} onCloseClick={toggleInfoWindow}>
             <h2>Hello everyone!</h2>
             <p>This is an Info Window</p>
             <img src="..." />
           </InfoWindow>
          )}
           
          
        </Map>
        <CustomerForm/>
      </APIProvider>
     
    </>
   
  )
}

export default App
