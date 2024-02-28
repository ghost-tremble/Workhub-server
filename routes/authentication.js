const login = require('../controller/Authentication/login');
const signUp = require('../controller/Authentication/signup');

const router = require('express').Router();

router.post('/signup',signUp);
router.post('/login',login);


module.exports = router;