const saveUserType = require("../controller/User/saveUserType")


const router = require('express').Router();

router.put('/user-type',saveUserType);



module.exports = router;