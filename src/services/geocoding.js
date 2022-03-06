export const geocoding = {
    autocomplete: async (query) => {
        const options = {
            method: "GET",
            headers: {"Content-type": "application/json"},
        };
        if (query.length < 3) {
            return;
        }
        return fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURI(query)}&limit=3`, options)
        .then(data => data.json(), (err) => err);
    },

    autocompleteByProximity: async (query, coordinates) => {
        const options = {
            method: "GET",
            headers: {"Content-type": "application/json"},
        };
        if (query.length < 3) {
            return;
        }
        return fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodeURI(query)}&lat=${coordinates.lat}&lon=${coordinates.lon}&limit=3`, options)
        .then(data => data.json(), (err) => err);
    }
}