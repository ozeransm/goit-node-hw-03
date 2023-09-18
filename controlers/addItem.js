const Contacts = require("../models/contacts");
const createError = require("../helpers/createError");

const addItem = async (req, res, next) => {
    try{
        const data = await Contacts.create(req.body);
        if (data){
            res.status(201).json({ 
            status: 'Created',
            code: 201,
            data,
          })
          
        }
      } catch(err){
        next(createError('INTERNAL_SERVER_ERROR', err));
      }
}

module.exports = addItem;