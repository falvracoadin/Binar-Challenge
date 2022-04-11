const express  = require('express');
const router = express.Router();
const {
    getAllHistory,
    getHistory,
    createHistory,
    updateHistory,
    deleteHistory
} = require('../../../controllers/api/v1/history');

//endpoint untuk mengambil semua history user
router.get('/', getAllHistory);

//endpoint untuk mengambil detail history
router.get('/:id', getHistory);

//endpoint untuk membuat history
router.post('/', createHistory);

//endpoint untuk update history
router.put('/:id', updateHistory);

//endpoint untuk delete history
router.delete('/:id', deleteHistory);

module.exports = router;