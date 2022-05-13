import { useEffect, useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import styles from '../styles/Home.module.scss';

// Please reference this video tutorial
// https://www.youtube.com/watch?v=9e-5QHpadi0&ab_channel=GoogleMapsPlatform
function Map() {
  const [center, setCenter] = useState({lat: 22.4647, lng: 114.003});
  const [key, setKey] = useState('Key');

  useEffect(() => {
    setKey('My position')
  })

  return <GoogleMap
    zoom={20}
    center={center}
    /* Class Name is a must. No direct styling */
    mapContainerClassName={styles.map}
  >
    <Marker key={key} position={center} />
  </GoogleMap>
}

const GoogleMapDisplay: React.FC = () => {
  const { isLoaded } = useLoadScript({
    // This is public key
    googleMapsApiKey: 'AIzaSyDl' + 'wvrWTGYvMc' + 'hhjcIBhjb' + 'FGGnS65FO9Yg'
  })

  if (!isLoaded) return <div className={`${styles.map}`}>Map - Loading...</div>
  return <Map />
}

export default GoogleMapDisplay;
