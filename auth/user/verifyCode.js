const verifyCode = (req, res, next) => {
    console.log("Verify_Code", req.params.verificationToken);
    next();
}

module.exports = verifyCode;