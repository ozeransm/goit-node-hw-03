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
const editAvatar = require("../../auth/user/editAvatar");
const upload = require("../../middlewares/handlerFile");
const handlerJpg = require("../../helpers/handlerJpg");
const verifyCode = require("../../auth/user/verifyCode");
const verifyCodeRepeated = require("../../auth/user/verifyCodeRepeated");
const validateEmail = require("../../middlewares/validateEmail");
const schemaVerifyEmail = require("../../middlewares/schemaVerifyEmail");
const router = express.Router();

router.post('/users/register', validateSignUp(schemaRegister), singup);
router.post('/users/login', validateSignIn(schemaLogin), singin);
router.post('/users/logout', auth, logout);
router.get('/users/current', auth, current);
router.patch('/users/avatars', auth, upload.single("avatar"), handlerJpg, editAvatar);
router.get('/users/verify/:verificationToken', verifyCode);
router.post('/users/verify', validateEmail(schemaVerifyEmail), verifyCodeRepeated);
module.exports = router;
