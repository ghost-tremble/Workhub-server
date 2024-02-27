const signUp = require('../controller/Authentication/signup');

const router = require('express').Router();

router.post('/signup',signUp);


module.exports = router;