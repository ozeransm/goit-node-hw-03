const Users = require("../../models/users");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const createError = require("../../helpers/createError");
const {SEKRET_KEY} = process.env;
const singin = async (req, res, next) => {
    const { email, password } = req.body;
    const user = await Users.findOne({email});
    const result = await bcrypt.compare(password, user.password);
    if (result)
    if (!user.token)
    {
        const token = jwt.sign({_id: user._id}, SEKRET_KEY, { expiresIn: '1d' });
        const updateUser = await Users.findByIdAndUpdate(user._id, { token });
        res.status(200);
        res.json({
            message: "login success",
            token
        })
    }else{
        res.status(200);
        res.json({
            message: "login success",
            token: user.token,
            user:{
                email: user.email,
                subscription: user.subscription
            }
        })
    }else {
        next(createError('UNAUTHORIZED', 'Email or password is wrong'));
    }

    }
    

module.exports = singin;