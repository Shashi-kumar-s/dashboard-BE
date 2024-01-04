const express = require('express');
const router = express.Router();
const addUser = require('../controller/addUser');

router.post('/addUser', addUser.addUser);
router.get('/getAllUser', addUser.getAllUser);
router.delete('/deleteUserById/:id', addUser.deleteUserById);
router.get('/getSingleUserById/:id', addUser.getSingleUserById);
router.put('/updateSingleUserDataById/:id', addUser.updateSingleUserDataById);
module.exports = router; 