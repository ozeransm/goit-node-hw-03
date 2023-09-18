const Joi = require('joi');

const schemaEmptyBody = Joi.object({
    favorite: Joi.bool().required()
    
});
module.exports = schemaEmptyBody;