const { createWorkspaceListing, getAllUserWorksSpaces, getWorkspaces, editWorkspace, deleteWorkspace, getAllUserSingleWorksSpace } = require('../controller/Workspaces/workspaces');

const router = require('express').Router();


router.get('/',getAllUserWorksSpaces)
router.get('/:id',getAllUserSingleWorksSpace)

router.get('/recommendations',getWorkspaces)

router.post('/',createWorkspaceListing)
router.put('/:id',editWorkspace)
router.delete('/:id',deleteWorkspace)


module.exports = router;