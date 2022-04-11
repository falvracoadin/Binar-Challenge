const express  = require('express');
const router = express.Router();
const {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../../../controllers/api/v1/user');

//endpoint untuk mengambil semua data user
router.get('/', getAllUser);

//endpoint untuk mengambil detail user
router.get('/:userId', getUser);

//endpoint untuk membuat user
router.post('/', createUser);

//endpoint untuk update user
router.put('/:id', updateUser);

//endpoint untuk delete user
router.delete('/:id', deleteUser);

module.exports = router;