const createError = require("../../helpers/createError");
const Users = require("../../models/users");

const verifyCode = async (req, res, next) => {
     
    try{
        const user = await Users.findOne({verificationToken: req.params.verificationToken});
        if (!user) next(createError('NOT_FOUND','user not found'))
        else {
            await Users.findByIdAndUpdate(user._id, {verify: true, verificationToken: null});
            res.status(200);
            res.json({
                ResponseBody: {
                    message: 'Verification successful',
                  }
            });
        }
        
    }catch(err){
        next(createError('INTERNAL_SERVER_ERROR', err));
    }
    
}

module.exports = verifyCode;