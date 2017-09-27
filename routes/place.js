'use strict'
const express = require('express')
let router = express.Router()
const placeCtrl = require('../controllers/placeCtrl')

router.get('/tps', placeCtrl.getTPS)
router.get('/rsu', placeCtrl.getRSU)
router.get('/rsk', placeCtrl.getRSK)
router.get('/puskesmas', placeCtrl.getPuskesmas)
router.get('/pospolisi', placeCtrl.getPospolisi)
router.get('/cctv', placeCtrl.getCctv)
router.get('/pemadam', placeCtrl.getPemadam)
router.get('/ambulance', placeCtrl.getAmbulance)
router.get('/petugas/pemadam', placeCtrl.getPemadamPetugas)
router.get('/petugas/dinkes', placeCtrl.getDinkes)
router.get('/petugas/satpol', placeCtrl.getSatpol)
router.get('/petugas/dinhub', placeCtrl.getDinhub)

module.exports = router