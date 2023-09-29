const path = require("path");
const fs = require("fs/promises");
const Users = require("../../models/users");
const createError = require("../../helpers/createError");

const editAvatar = async (req, res, next) => {
    const { path: avaPathTemp, originalname} = req.file;
    const avaPath = path.join(__dirname, "../../", "public", "avatar", `${req.user}_${originalname}`);
    const avaPathShort = path.join("avatar", `${req.user}_${originalname}`);
    try{
        await fs.rename(avaPathTemp, avaPath);
    }catch(err){
        await fs.unlink(avaPathTemp);
        next(err);
    }
    try{
        const data = await Users.findByIdAndUpdate(req.user, { avatarURL: avaPathShort});
        console.log(data)
        res.status(200).json({
            ResponseBody:{
                avatarURL: avaPathShort
            }
        })
    }catch(err){
        next(createError('NOT_FOUND', "Not authorized"));
    }
    
}

module.exports = editAvatar;