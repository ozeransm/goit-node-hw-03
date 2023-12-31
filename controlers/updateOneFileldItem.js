const Contacts = require("../models/contacts");
const createError = require("../helpers/createError");

const updateOneFileldItem = async (req, res, next) => {
    try{
        const data = await Contacts.findByIdAndUpdate(req.params.contactId, req.body);
        if (data){
            res.status(200).json({ 
            message: 'contact updated',
            status: 'Update',
            code: 200,
            data,
          })
          
        }
      } catch(err){
        next(createError('NOT_FOUND', err.message));
      }
}

module.exports = updateOneFileldItem;