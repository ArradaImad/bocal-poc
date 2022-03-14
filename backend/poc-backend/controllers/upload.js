const upload = require("../middlewares/upload");
const dbConfig = require("../config/db");
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, dbConfig.destination);

const url = dbConfig.url + dbConfig.database;
const baseUrl = "http://localhost:3003/public/images/";

const uploadFiles = async (req, res) => {
    try {
        await upload(req, res);
        if (req.file === undefined) {
            return res.send({
                message: "You must select a file.",
            });
        }
        return res.send({
            message: "File has been uploaded.",
        });
    } catch (error) {
        console.log(error);
        return res.send({
            message: "Error when trying upload image: ${error}",
        });
    }
};


const getListFiles = async (req, res) => {
    try {
        console.log(__dirname);
        fs.readdir(dbConfig.destination, function (err, files) {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            let fileInfos = [];
            files.forEach((doc) => {
                console.log(doc)
                fileInfos.push({
                    name: doc,
                    url: baseUrl + doc,
                });
            });

            if (files.length === 0) {
                return res.status(500).send({
                    message: "No files found!",
                });
            }
            return res.status(200).send(fileInfos)
        });
    } catch (error) {
        return res.status(500).send({
            message: error.message,
        });
    }
};


const serve = async (req, res) => {
    try {
        let filename = req.params.name;
        let options = {
            root: path.join(__dirname, '../', dbConfig.destination)
        }
        console.log(__dirname + '/../' + dbConfig.destination + '/' + filename);
        return res.status(200).sendFile(filename, options);
    } catch (error) {
        return res.status(500).send({
            message: error.message,
        });
    }
};

const download = async (req, res) => {
    try {
        let filename = req.params.name;

        console.log(__dirname + '/../' + dbConfig.destination + '/' + filename);
        return res.status(200).download(path.join(__dirname, '../', dbConfig.destination, filename), filename);

        //});
        //console.log(file);
    } catch (error) {
        return res.status(500).send({
            message: error.message,
        });
    }
};


module.exports = {
    uploadFiles,
    getListFiles,
    serve,
    download,
};