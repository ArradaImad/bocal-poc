const multer = require('multer');
const dbConfig = require("../config/db");
const util = require("util");


let storage = multer.diskStorage({
    destination: dbConfig.destination,
    filename: (req, file, cb) => {
        let filename = Date.now() + "-" + file.originalname;
        cb(null, filename);
    }
})

const upload = multer({ storage: storage }).single("file");

const uploadFilesMiddleware = util.promisify(upload);

module.exports = uploadFilesMiddleware;