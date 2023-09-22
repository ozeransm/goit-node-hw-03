const Contacts = require("../models/contacts");
const createError = require("../helpers/createError");

const getById = async (req, res, next) => {
    try{
        const data = await Contacts.find({_id: req.params.contactId, owner: req.user})
        if(data.length !== 0){
          res.status(200).json({ 
            status: 'Success',
            code: 200,
            data,
            });
        }else next(createError('NOT_FOUND'));
      } catch(err){
        next(createError('NOT_FOUND',err));
      }
}

module.exports = getById;