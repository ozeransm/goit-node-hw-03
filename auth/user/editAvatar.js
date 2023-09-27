const path = require("path");
const fs = require("fs/promises");
const Users = require("../../models/users");
const editAvatar = async (req, res, next) => {
    const { path: avaPathTemp, originalname} = req.file;
    const avaPath = path.join(__dirname, "../../", "public", "avatar", `${req.user}_${originalname}`);
    try{
        await fs.rename(avaPathTemp, avaPath);
    }catch(err){

    }
    await Users.findByIdAndUpdate(req.user, { avatarURL: avaPath});
    next();
}

module.exports = editAvatar;