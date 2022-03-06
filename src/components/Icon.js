import L from 'leaflet';
import pin from "../assets/images/pin.svg";
import star from "../assets/images/star.svg";

const iconPin = new L.Icon({
    iconUrl: pin,
    iconRetinaUrl: pin,
    iconAnchor: [16, 32],
    popupAnchor: [0, -32], // Obligatoire pour l'affichage de la popup
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(32, 32),
    className: 'leaflet-div-icon'
});

const iconStar = new L.Icon({
    iconUrl: star,
    iconRetinaUrl: star,
    iconAnchor: [16, 32],
    popupAnchor: [0, -32], // Obligatoire pour l'affichage de la popup
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(32, 32),
    className: 'leaflet-div-icon'
});

export { iconPin, iconStar };