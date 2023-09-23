const Users = require('../../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const createError = require('../../helpers/createError');
const {SEKRET_KEY} = process.env;
const singup  = async (req, res, next) => {
    const { email, password: pass } = req.body;
    const hashPassword = await bcrypt.hash(pass, 10);
    try{
        const user = await  Users.create(req.body);
        const {_id} = user;
        const token = jwt.sign({_id}, SEKRET_KEY, { expiresIn: '1d' });
        const updateUser = await Users.findByIdAndUpdate(_id, {...req.body, password: hashPassword, token});
        res.status(201);
        res.json({
            message: "User created",
            token
        })

    }catch(err){
        if (err.code === 11000){
            next(createError('CONFLICT','Email in use'))
        }
    }
    
}

module.exports = singup;