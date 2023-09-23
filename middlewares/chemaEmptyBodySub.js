const Joi = require('joi');

const schemaEmptyBodySub = Joi.object({
    subscription: Joi.any().valid('starter', 'pro', 'business')
    
});
module.exports = schemaEmptyBodySub;