const Jimp = require("jimp");

const handlerJpg =  (req, res, next)=>{
    const { path: avaPathTemp } = req.file;

    Jimp.read(avaPathTemp)
        .then((ava)=>{
        ava
            .resize(250, 250)
            .quality(70)
            .write(avaPathTemp);
        next();
    })
        .catch((err)=>{})
    
}

module.exports = handlerJpg;