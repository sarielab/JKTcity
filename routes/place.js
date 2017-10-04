'use strict'
const express = require('express')
let router = express.Router()
const placeCtrl = require('../controllers/placeCtrl')

router.get('/tps', placeCtrl.getTPS) //v
router.get('/rsu', placeCtrl.getRSU) //v
router.get('/rsk', placeCtrl.getRSK) //v
router.get('/puskesmas', placeCtrl.getPuskesmas) //v
router.get('/pospolda', placeCtrl.getPospolda) //v
router.get('/cctv', placeCtrl.getCctv) //v
router.get('/pemadam', placeCtrl.getPemadam) //v
router.get('/ambulance', placeCtrl.getAmbulance) //v
router.get('/petugas/pemadam', placeCtrl.getPemadamPetugas) //v
router.get('/petugas/dinkes', placeCtrl.getDinkes) //v
router.get('/petugas/satpol', placeCtrl.getSatpol) //v
router.get('/petugas/dinhub', placeCtrl.getDinhub) //v

module.exports = router