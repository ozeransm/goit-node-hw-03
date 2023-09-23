const singup = require("../../auth/user/singup");
const singin = require("../../auth/user/singin");
const schemaRegister = require("../../middlewares/schemaRegister");
const schemaLogin = require("../../middlewares/schemaLogin");
const validateSignIn = require("../../middlewares/validateSignIn");
const validateSignUp = require("../../middlewares/validateSignUp");
const auth = require("../../middlewares/auth");
const logout = require("../../auth/user/logout");
const current = require("../../controlers/current");

const express = require('express');
const router = express.Router();

router.post('/users/register', validateSignUp(schemaRegister), singup);
router.post('/users/login', validateSignIn(schemaLogin), singin);
router.post('/users/logout', auth, logout);
router.get('/users/current', auth, current);

module.exports = router;