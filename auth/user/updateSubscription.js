const Users = require("../../models/users");

const updateSubscription = async (req, res, next) => {
    
    try{
        const data = await Users.findByIdAndUpdate(req.user, req.body)
        if (data){
            res.status(200).json({ 
            message: 'contact updated',
            status: 'Update',
            code: 200,
            data,
          })
          
        }
    }catch(err){
        next(createError('NOT_FOUND', err.message));
    }
    
}

module.exports = updateSubscription;