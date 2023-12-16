import React,{useState , useEffect} from 'react';
import GoogleMapReact from 'google-map-react';

function TheMap(props){
    const [lat, setLat] = useState(0);
    const [lang, setLang] = useState(0);
    const MyCustomMarker = () => <span className="material-icons">place</span>;
   
    useEffect(() => {
        setLat(props.latt)
        setLang(props.langg)
     }, [])
    
     return(
        
        <GoogleMapReact
            yesIWantToUseGoogleMapApiInternals={true}
            bootstrapURLKeys={{key: import.meta.env.GOOGLE_MAPS_API_KEY}}
            defaultZoom={16}
            center={[lat,lang]}
        >
            <MyCustomMarker
                lat={lat}
                lng={lang}

            />
        </GoogleMapReact>
    )
}

export default TheMap