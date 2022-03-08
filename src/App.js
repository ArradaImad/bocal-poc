import Geocoding from "./components/Geocoding";
import Map from "./components/Map";
import SearchByProximity from "./components/SearchByProximity";

export default function App() {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="font-mono text-5xl font-thin text-gray-700 mb-16">Les POC du Bocal</h1>
      <div className="mb-16">
        <h2 className="font-mono text-2xl font-thin text-gray-500 mb-12">Cartographie</h2>
        <div className="flex">
          <div className="w-1/2 relative overflow-hidden">
            <Map />
          </div>
          <div className="w-1/2 px-8">
            <div className="flex flex-col space-y-2 border border-gray-300 rounded-lg w-full p-4">
              <h3 className="text-xl text-gray-500 font-mono">Procédure</h3>
              <p>Installer les packages Leaflet et React Leaflet avec la commande suivante:</p>
              <code className="p-4 text-green-500 bg-slate-800 rounded-sm">
                npm i leaflet leaflet-react
              </code>
              <p>Consulter le composant Map.js pour observer la définition d'une carte. Elle se définit essentiellement par 2 composants principaux MapContainer et TileLayer.</p>
              <p>Il est possible de modifier le fond de carte en changeant url de tiles provider, des exemples en prévisualisation sont disponibles à cette url : <a className="underline text-blue-600 font-semibold" href="https://leaflet-extras.github.io/leaflet-providers/preview">leaflet-extras.github.io</a></p>
              <p>Suivre les instructions suivantes pour ajouter des marqueurs dans sur la carte.</p>
              <ul className="list-disc px-12">
                <li>Création du composant Icon.js - Les attributs sont importants</li>
                <li>Ajout d'un élément Marker dans le MapContainer</li>
                <li>Possiblité d'ajouter des Popup, Tooltip etc...</li>
              </ul>
              <p>Cet exemple fait également appel à la localisation du navigateur pour définir le centre de la carte. Il faut noter que pour cela on doit utiliser un composant enfant de MapContainer qui pourra bénéficier de hooks spécifique pour intéragir avec la carte. Dans cet exemple, le composant fonctonnel MapUpdate dans le fichier Map.js sert exclusivement à cet effet.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="font-mono text-2xl font-thin text-gray-500 mb-12">Geocoding / Autocompletion</h2>
        <div className="flex">
          <div className="w-1/2 px-8">
            <div className="flex flex-col space-y-2 border border-gray-300 rounded-lg w-full p-4">
              <h3 className="text-xl text-gray-500 font-mono">Procédure</h3>
              <p>Pas d'installation nécessaire dans cette section</p>
              <p>Ici, il faut regarder le composant Geocoding.js qui contient le formulaire avec le champ d'autocompletion.</p>
              <p>Il n'y a rien de compliqué là-dedans, tout à été vu pendant nos cours, à savoir des champs controlés et des variables d'état. <br /> On s'appuie sur une API de l'Etat, que vous pouvez consulter à l'adresse suivante : <a className="underline text-blue-600 font-semibold" href="https://adresse.data.gouv.fr/api-doc/adresse">adresse.data.gouv.fr</a></p>
              <p>Il y a plusieurs fonctionnalités intéressantes pour nous. Dans cet exemple, il y a deux démonstration :</p>
              <ol className="list-decimal px-12">
                <li>Recherche par géocodage</li>
                <li>Recherche par géocodage avec priorité géographique</li>
              </ol>
              <p>Le détail des appels à l'API sont dans le fichier <span className="italic">services/geocoding.js</span></p>
            </div>
          </div>
          <div className="w-1/2 relative overflow-hidden">
            <Geocoding />
          </div>
        </div>
      </div>
      <div className="mb-16">
        <h2 className="font-mono text-2xl font-thin text-gray-500 mb-12">Recherche par proximité</h2>
        <div className="flex">
          <div className="w-1/2 relative overflow-hidden">
            <SearchByProximity />
          </div>
          <div className="w-1/2 px-8">
            <div className="flex flex-col space-y-2 border border-gray-300 rounded-lg w-full p-4">
              <h3 className="text-xl text-gray-500 font-mono">Procédure</h3>
              
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}