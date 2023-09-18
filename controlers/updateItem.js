const Contacts = require("../models/contacts");
const createError = require("../helpers/createError");

const updateItem = async (req, res, next) => {
    try{
        const data = await Contacts.findByIdAndUpdate(req.params.contactId, req.body);
        if (data.length !== 0){
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

module.exports = updateItem;