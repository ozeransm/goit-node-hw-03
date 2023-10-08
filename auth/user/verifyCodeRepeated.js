const createError = require("../../helpers/createError");
const sendEmail = require("../../helpers/sendEmail");
const Users = require("../../models/users");

const verifyCodeRepeated = async (req, res, next) => {
    try{
        const user = await Users.findOne(req.body);
        
        if (user.verify) next(createError('BAD_REQUEST', 'Verification has already been passed'))
        else{
            sendEmail(req.body, user.verificationToken);
            console.log(user._id);
            res.status(200);
            res.json({
                ResponseBody: {
                    "message": "Verification email sent"
                  }
            });
        }
    }catch(err){
        next(createError('NOT_FOUND', err));
    }

    
}

module.exports = verifyCodeRepeated;