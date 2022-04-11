const express  = require('express');
const router = express.Router();
const {
    getAllBiodata,
    getBiodata,
    createBiodata,
    updateBiodata,
    deleteBiodata
} = require('../../../controllers/api/v1/biodata');

//endpoint untuk mengambil semua biodata user
router.get('/', getAllBiodata);

//endpoint untuk mengambil detail biodata
router.get('/:biodataId', getBiodata);

//endpoint untuk membuat biodata
router.post('/', createBiodata);

//endpoint untuk update biodata
router.put('/:biodataId', updateBiodata);

//endpoint untuk delete biodata
router.delete('/:biodataId', deleteBiodata);

module.exports = router;