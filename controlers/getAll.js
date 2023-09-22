const Contacts = require("../models/contacts");
const createError = require("../helpers/createError");

const getAll = async (req, res, next) => {
  const {page=1, limit=10, favorite} = req.query;
   try{
        if(favorite!==undefined){
         
        const data = await Contacts.find({owner: req.user})
                            .where('favorite').equals(favorite)
                            .select('-owner')
                            .limit(limit)
                            .skip(limit*(page-1));
        if (data.length !== 0){
          res.status(200).json({ 
          status: 'Success',
          code: 200,
          page,
          limit,
          favorite,
          data,
          });
          
        }else next(createError('OK','this list is empty'))
      } else {
        const data = await Contacts.find({owner: req.user})
                            .select('-owner')
                            .limit(limit)
                            .skip(limit*(page-1));
        if (data.length !== 0){
          res.status(200).json({ 
          status: 'Success',
          code: 200,
          page,
          limit,
          favorite,
          data,
          });
          
        }else next(createError('OK','this list is empty'))                    
                            
      }
      } catch(err){
        next(createError('INTERNAL_SERVER_ERROR',err));
      }

    
    
}

module.exports = getAll;