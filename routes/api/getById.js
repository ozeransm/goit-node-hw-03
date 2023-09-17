const Contacts = require("../../models/contacts");
const createError = require("./createError");

const getById = async (req, res, next) => {
    try{
        const data = await Contacts.find({_id: req.params.contactId})
        if(data){
          res.status(200).json({ 
            status: 'Success',
            code: 200,
            data,
            });
        }
      } catch(err){
        next(createError('NOT_FOUND',err));
      }
}

module.exports = getById;