const Contacts = require("../models/contacts");
const createError = require("../helpers/createError");

const getAll = async (req, res, next) => {
    try{
        const data = await Contacts.find({});
        console.log(data)
        if (data.length !== 0){
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