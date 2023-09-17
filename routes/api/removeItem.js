const Contacts = require("../../models/contacts");
const createError = require("./createError");

const removeItem = async (req, res, next) => {
    try{
        const data = await Contacts.findByIdAndDelete({_id: req.params.contactId});
        if (data){
            res.status(200).json({ 
            message: 'contact deleted',
            status: 'Delete',
            code: 200,
            data,
          })
          
        }else next(createError('NOT_FOUND','Not found by id'));
      } catch(err){
        next(createError('INTERNAL_SERVER_ERROR', err));
      }
}

module.exports = removeItem;