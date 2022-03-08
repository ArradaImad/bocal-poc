import { useState } from "react";
import { geocoding } from "../services/geocoding";
import { search } from "../services/search";
import Map from "./Map";

function SearchByProximity() {
    const [address, setAddress] = useState(null);
    const [position, setPosition] = useState([48.864716, 2.349]);
    const [results, setResults] = useState([]);
    const [producteurs, setProducteurs] = useState([]);

    const handleAutocompleteAddress = async (e) => {
        let response = await geocoding.autocomplete(e.target.value);
        if (!!response) {
            setResults(response.features);
            console.log(response);
        }
    }

    const handleClickLocationSelection = async (e) => {
        setAddress(e.target.textContent);
        setPosition([e.target.getAttribute("lat"), e.target.getAttribute("lon")]);
        let response = await search.searchAround({ lat: e.target.getAttribute("lat"), lon: e.target.getAttribute("lon") });
        if (!!response) {
            console.log(response);
            setProducteurs(response.producteurs);
        }
    }

    return (
        <div className="flex space-x-4 items-stretch">
            <div className="w-1/2 relative">
                <div className="z-0">
                    <Map center={position} />
                </div>
                <form className="absolute top-0 right-0 z-1000 mt-8 mr-8 ">
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        onKeyUp={handleAutocompleteAddress}
                        placeholder="Saisir une localisation"
                        className="w-80 h-12 border border-gray-300 rounded-lg px-4 mb-4 hover:border-2 hover:border-sky-400 transition-colors ease-in-out duration-150"
                    />
                    {!!results &&
                        <div className="w-80 bg-white mt-2 rounded-lg flex flex-col overflow-hidden">
                            {results.map((result, index) =>
                                <div
                                    onClick={handleClickLocationSelection}
                                    key={index}
                                    lat={result.geometry.coordinates[0]}
                                    lon={result.geometry.coordinates[1]}
                                    className="text-sm px-4 py-2 border-b border-gray-300 last:border-0 hover:bg-sky-300 overflow-hidden"
                                >
                                    {result.properties.label}
                                </div>
                            )}
                        </div>
                    }
                </form>
            </div>
            <div className="w-1/2 overflow-hidden" >
                <h3 className="w-full h-16 flex items-center justify-center bg-green-700 text-white font-semibold tracking-wider rounded-t-lg">Liste des producteurs</h3>
                <div className="overflow-auto" style={{maxHeight: "536px"}}>
                    {producteurs.length === 0 && <div className="w-full text-center italic py-4">Saisir une localisation sur la carte...</div>}
                    {producteurs.length > 0 &&
                        producteurs.map((producteur, index) => {
                            return (
                                <div key={index}
                                    className="w-full text-sm px-4 py-2 border-b border-gray-300"
                                >
                                    <p>Distance : {(producteur.distance / 1000).toFixed(2)}km</p>
                                    <p>Nom : {producteur.name}</p>
                                    <p>Coordonnées: {JSON.stringify(producteur.location.coordinates)}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default SearchByProximity;