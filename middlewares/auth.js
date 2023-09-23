const jwt = require("jsonwebtoken");
const createError = require("../helpers/createError");
const {SEKRET_KEY} = process.env;
const auth = async (req, res, next) => {
 
 const [_, token] = req.headers.authorization.split(" ");
 try{
    const decoded = jwt.verify(token, SEKRET_KEY);
    const {_id: id} = decoded;
    req.user = id; 
      
 }catch(err){
    next(createError('UNAUTHORIZED'), err);
 }
 
 next();
}

module.exports = auth;