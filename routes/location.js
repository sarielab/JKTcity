'use strict'
const express = require('express')
let router = express.Router()
const locationCtrl = require('../controllers/locationCtrl')

router.get('/kota', locationCtrl.getKota)
router.get('/kecamatan', locationCtrl.getKecamatan)
router.get('/kelurahan', locationCtrl.getKelurahan)
router.get('/rw', locationCtrl.getRW)

module.exports = router