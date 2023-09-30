const multer = require("multer");
const path = require("path");
const avaPathTemp = path.join(__dirname, "../", "temp");

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, avaPathTemp)
    },
    filename: (req, file, cb)=>{
        cb(null, file.originalname);
    },
    limits: {
        fileSize: 2048
    }
});

const upload = multer({
    storage
});



module.exports = upload;