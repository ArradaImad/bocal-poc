import { useState } from "react";
import { geocoding } from "../services/geocoding";

function Geocoding(props) {
    const [address, setAddress] = useState(null);
    const [results, setResults] = useState([]);
    const [resultsByProx, setResultsByProx] = useState([]);
    const [position, setPosition] = useState({ lat: 48.864716, lon: 2.349 });

    if (!!props.coordinates) {
        setPosition(props.coordinates);
    }

    const handleAutocompleteAddress = async (e) => {
        let response = await geocoding.autocomplete(e.target.value);
        if (!!response) {
            setResults(response.features);
            console.log(response);
        }

        let response2 = await geocoding.autocompleteByProximity(e.target.value, position);
        if (!!response2) {
            setResultsByProx(response2.features);
            console.log(response2);
        }
    }

    const handleClickGeolocation = (e) => {
        e.preventDefault();
        navigator.geolocation.getCurrentPosition(
            (position) => setPosition({ lat: position.coords.latitude, lon: position.coords.longitude }),
            (error) => { console.error(error) }
        );
    }

    return (
        <div className="w-full">
            <form>
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    onKeyUp={handleAutocompleteAddress}
                    placeholder="Saisir une adresse"
                    className="w-full h-12 border border-gray-300 rounded-lg px-4 mb-4 hover:border-2 hover:border-sky-400 transition-colors ease-in-out duration-150"
                />
                <h3 className="font-mono text-gray-500 text-lg mb-4">Resultats sans contexte de proximité</h3>
                <div className="flex flex-col space-y-2 z-10 mb-6">
                    {results.length === 0 && <div className="w-full italic text-gray-500 text-center">Aucun resultat</div>}
                    {results.map((result, index) => <GeocodingItem key={index} item={result} />)}
                </div>
                <div className="flex flex-nowrap mb-4">
                    <h3 className="font-mono text-gray-500 text-lg">Resultats avec contexte de proximité (coordonnées :[{position.lat + ',' + position.lon}])</h3>
                    <button
                        onClick={handleClickGeolocation}
                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-800 transition-colors ease-in-out duration-150 uppercase tracking-wider font-semibold">Geolocaliser</button>
                </div>
                <div className="flex flex-col space-y-2 z-10">
                    {resultsByProx.length === 0 && <div className="w-full italic text-gray-500 text-center">Aucun resultat</div>}
                    {resultsByProx.map((result, index) => <GeocodingItem key={index} item={result} />)}
                </div>

            </form>
        </div>
    );
}

export default Geocoding;

export function GeocodingItem({ item }) {
    return (
        <div className="flex items-center justify-evenly bg-gray-50 rounded shadow-sm h-12 px-4 hover:bg-sky-200">
            <p className="font-semibold w-1/5">{(item.properties.score * 100).toFixed(2)}%</p>
            <p className="w-2/5">Lat: {item.geometry.coordinates[0]}, Lon: {item.geometry.coordinates[1]}</p>
            <p className="w-2/5">{item.properties.label}</p>
        </div>
    );
}