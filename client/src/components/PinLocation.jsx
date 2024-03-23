import PropTypes from 'prop-types';
import { 

    Marker,
    // Pin,
    // AdvancedMarker,
    // useAdvancedMarkerRef,
    InfoWindow,
    useMarkerRef,
   } from '@vis.gl/react-google-maps'
import { useState } from 'react';
import CustomerDetails from './CustomerDetails';


const PinLocation = ({pos, user, currentLocate}) => {

    const [markerRef, marker] = useMarkerRef();
    const [infowindowShown, setInfowindowShown] = useState(false);
  //const [markerRef, marker] = useAdvancedMarkerRef();

  const toggleInfoWindow = () =>
    setInfowindowShown(previousState => !previousState);

 

  return (
   <>
      <Marker ref={markerRef} position={{lat: pos?.lat, lng: pos?.lng}} onClick={toggleInfoWindow}/>
        
        {infowindowShown && (
            <InfoWindow anchor={marker} onCloseClick={toggleInfoWindow}>
              {
                currentLocate 
                ? "This your location relative to the customer location" 
                :  <CustomerDetails user={user}/>
              }
            
            </InfoWindow>
        )}
   </>
  )
}

PinLocation.propTypes = {
  pos: PropTypes.object,
  user: PropTypes.object,
  currentLocate:PropTypes.bool
}

export default PinLocation