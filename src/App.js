import Geocoding from "./components/Geocoding";
import Map from "./components/Map";
import SearchByProximity from "./components/SearchByProximity";
import Upload from "./components/Upload";

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
              <p>Dans le dossier backend du projet POC se trouve un petit back permettant de faire des requêtes de recherche de producteurs par proximité.</p>
              <p>On crée un modèle de producteur contenant un champ location comme suit: </p>
              <code className="p-4 text-green-500 bg-slate-800 rounded-sm">
                location: &#123; <br />
                &nbsp;type: &#123;<br />
                &nbsp;&nbsp; type: String,<br />
                &nbsp;&nbsp; enum: ['Point'],<br />
                &nbsp;&nbsp; required: true<br />
                &nbsp;&#125;,<br />
                &nbsp;coordinates: &#123;<br />
                &nbsp;&nbsp;type: [Number],<br />
                &nbsp;&nbsp;required: true<br />
                &nbsp;&#125;<br />
                &#125;
              </code>
              <p>Le modèle producteur contient des coordonnées qui sont utilisées pour calculer la distance entre la position passée en paramètre de requête et la localisation du producteur.</p>
              <p>Il faut également ajouter un index au schéma producteur pour permettre la recherche par coordonnées.</p>
              <code className="p-4 text-green-500 bg-slate-800 rounded-sm">
                ProducteurSchema.index(&#123;location: '2dsphere'&#125;);
              </code>
              <p>On utilise une fonction d'aggrégation avec le mot clé <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/geoNear/" className="text-sky-600">$geoNear</a>. Le détail de la fonction se trouve dans le controller des nos routes de recherche : <span className="italic">backend/poc-backend/controllers/search.js</span></p>
              <p>La liste des producteurs triée par ordre de distance croissant est envoyée en résultat aux front.</p>
            </div>
          </div>

        </div>
      </div>
      <div className="mb-16">
        <h2 className="font-mono text-2xl font-thin text-gray-500 mb-12">Upload d'images</h2>
        <div className="flex">
          <div className="w-1/2 px-8">
            <div className="flex flex-col space-y-6 border border-gray-300 rounded-lg w-full p-4">
              <h3 className="text-xl text-gray-500 font-mono">Procédure</h3>
              <div className="px-2">
                <h4 className="text-lg text-gray-500 font-mono italic mb-4">1. Envoi de fichier</h4>
                <h5 className="text-md text-gray-500 font-mono font-semibold">Front</h5>
                <div className="flex flex-col mb-6">
                  <p>Créer un formulaire ayant des attributs obligatoires pour l'envoi de fichiers <span className="italic">enctype="multipart/form-data"</span>, ainsi qu'un input de type file comme suit :</p>
                  <code className="p-4 text-green-500 bg-slate-800 rounded-sm">
                    &#60;form action="/profile" method="post" enctype="multipart/form-data"&#62;
                    <br />
                    &nbsp;&nbsp;&#60;input type="file" name="file" /&#62;
                    <br />
                    &#60;/form&#62;
                  </code>
                  <p>Dans la fonction submit du formulaire, il faut penser à utiliser un objet de type <span className="font-semibold">FormData</span> et y ajouter une propriété stockant les fichiers dedans. L'objet sera ensuite passé en option dans l'attribut body de la requête (cf. fichier <span className="italic">services/upload.js</span>).</p>
                </div>
                <h5 className="text-md text-gray-500 font-mono font-semibold">Back</h5>
                <div className="flex flex-col">
                  <p>A l'aide de la librairie Multer, on créer un middleware d'upload (cf. <span className="italic">middlewares/upload.js</span>) permettant de configurer le stockage des fichiers sur le serveur. Il faut veiller à bien "Promessifier" la fonction d'upload.</p>
                  <code className="p-4 text-green-500 bg-slate-800 rounded-sm">
                    const uploadFilesMiddleware = util.promisify(upload);
                  </code>
                  <p> Les fichiers sont stockés sur le serveur dans un dossier créé à cet effet.</p>
                </div>
              </div>
              <div className="px-2">
                <h4 className="text-lg text-gray-500 font-mono italic mb-4">2. Récupération de fichier</h4>
                <h5 className="text-md text-gray-500 font-mono font-semibold">Front</h5>
                <div className="flex flex-col mb-6">
                  <p>Utilisation d'une route du back permettant de récupérer les fichiers. Cf. composant Upload.js élément "img" avec attribut source pointant sur l'endpoint adéquat.</p>
                </div>
                <h5 className="text-md text-gray-500 font-mono font-semibold">Back</h5>
                <div className="flex flex-col">
                  <p>On créer une route spéciale permettant de servir les fichiers stockés dans le répertoire prévu à cet effet. Dans l'exemple ici, on reçoit le nom de fichier souhaité en parmaètre de la requête et on envoie le fichier grâce à la fonction Express sendFile() (cf. <span className="italic">controllers/upload.js - fonction "serve"</span>) </p>
                  <code className="p-4 text-green-500 bg-slate-800 rounded-sm">
                    let filename = req.params.name;<br/>
                    let options = &#123; <br/>
                    &nbsp;&nbsp;root: path.join(__dirname, '../', dbConfig.destination) <br/>
                      &#125; <br/>
                    return res.status(200).sendFile(filename, options);
                  </code>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 relative overflow-hidden">
            <Upload />
          </div>
        </div>
      </div>
    </div >
  )
}