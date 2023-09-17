const Contacts = require("../../models/contacts");
const createError = require("./createError");

const getAll = async (req, res, next) => {
    try{
        const data = await Contacts.find({});
        if (data){
          res.status(200).json({ 
          status: 'Success',
          code: 200,
          data,
          });
          
        }
      } catch(err){
        next(createError('INTERNAL_SERVER_ERROR',err));
      }
}

module.exports = getAll;