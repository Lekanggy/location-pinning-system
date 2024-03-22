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


const PinLocation = ({pos}) => {

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
            <CustomerDetails/>
            </InfoWindow>
        )}
   </>
  )
}

PinLocation.propTypes = {
  pos: PropTypes.object,
}

export default PinLocation