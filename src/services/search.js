export const search = {
    searchAround: async ({lat, lon}) => {
        const options = {
            method: "GET",
            headers: {"Content-type": "application/json"},
        };
        return fetch(`http://localhost:3003/search?lat=${lat}&lon=${lon}`, options)
        .then(data => data.json(), (err) => err);
    },
}