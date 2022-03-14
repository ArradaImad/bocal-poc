export const upload = {
    uploadFile: async (files) => {
        // On utilise formData car un objet fileList n'est pas serialisable
        let formData = new FormData();
        formData.append('file', files[0]);
        const options = {
            method: "POST",
            body: formData,
        };
        console.log(options);
        return fetch(`http://localhost:3003/files/upload`, options)
        .then(data => data.json(), (err) => err);
    },

    listFiles: async () => {
        const options = {
            method: "GET",
            headers: {'Content-Type': "application/json" },
        };
        return fetch(`http://localhost:3003/files/list`, options)
        .then(data => data.json(), (err) => err);
    },

}