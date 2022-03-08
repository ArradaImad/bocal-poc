import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import { useEffect, useState } from "react";
import { PRODUCTEURS } from "../services/producteurs";
import { iconPin, iconStar } from "./Icon";

function Map({center}) {
    const [position, setPosition] = useState([48.864716, 2.349]);
    const [producteurs, setProducteurs] = useState([]);

    
    useEffect(() => {
        if (!!center) {
            setPosition(center);
        }
        
        navigator.geolocation.getCurrentPosition( 
                (position) => {
                    setPosition([position.coords.latitude, position.coords.longitude]);
                }, 
                (error) => {console.error(error)})
        setProducteurs(PRODUCTEURS);
    }, [])

    return (
        <div className="map__container w-full h-full rounded-lg overflow-hidden" style={{ height: "600px" }}>
            <MapContainer
                center={position}
                zoom={13}
                className="w-full h-full"
            >
                <MapUpdate center={position} zoom={13}/>
                <Marker position={position} icon={iconStar}>
                    <Popup>Hello you ;)</Popup>
                </Marker>
                {producteurs.map((producteur) => (
                    <Marker
                        key={producteur.id}
                        position={producteur.coordinates}
                        icon={iconPin}
                    >
                        
                        <Popup>
                            <div className="flex flex-nowrap items-center space-x-4">
                                <div className="w-32 h-32 bg-gray-500 rounded shrink-0">
                                </div>
                                <div className="flex flex-col">
                                    <h4 className="text-lg">{producteur.name}</h4>
                                    <p className="italic text-ellipsis overflow-hidden">{producteur.description}</p>
                                    <p className="text-wrap">{producteur.email} - {producteur.phone}</p>
                                    <p>{producteur.address}</p>
                                </div>
                            </div>
                        </Popup>

                    </Marker>
                ))}

                <TileLayer
                    attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />
            </MapContainer>
        </div>
    );
};

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export function MapUpdate({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    map.removeControl(map.zoomControl);
    return null;
}

export default Map;
