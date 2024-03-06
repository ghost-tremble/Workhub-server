const editPreferences = require("../controller/User/editPreferences");
const getUser = require("../controller/User/getUser");
const saveUserType = require("../controller/User/saveUserType");
const updateProfilePicture = require("../controller/User/updateProfilePicture");
const upload = require("../middleware/fileUpload");


const router = require('express').Router();

router.get('/',getUser)
router.put('/edit-preference',editPreferences)
router.put('/user-type',saveUserType);
router.put('/profile-photo',upload.single('avatar'),updateProfilePicture)



module.exports = router;