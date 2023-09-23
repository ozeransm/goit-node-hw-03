const Joi = require('joi');

const schemaRegister = Joi.object({
    name: Joi.string()
        .min(2).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string().min(6).required()
});

module.exports = schemaRegister;