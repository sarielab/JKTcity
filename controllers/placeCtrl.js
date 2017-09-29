'use strict'
const {  Tps, Rsu, Rsk, Puskesmas, Pospolda, Cctv, Pemadam, Ambulance, PemadamPetugas, Dinkes, Satpol, Dinhub } = require('../models/place')

const getTPS = async (req,res) => {
  let tps
  let flag = true
  let allTps = []
  let page = 1

  while(flag) {
    try {
      tps = await Tps(page)
    }
    catch(err) {
      res.send({err:err.error})
    }
    finally {
      if (typeof tps.data.meta === 'undefined' || page > tps.data.meta.pagination.total_pages) {
        flag = false
        res.send(allTps)
      } else
        allTps.push(...tps.data.features.map(feat => feat.properties))
      page++
    }
  }
}

const getRSU = async (req,res) => {
  let rsu

  try {
    rsu = await Rsu()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(rsu.data)
  }
}

const getRSK = async (req,res) => {
  let rsk

  try {
    rsk = await Rsk()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(rsk.data)
  }
}

const getPuskesmas = async (req,res) => {
  let puskesmas

  try {
    puskesmas = await Puskesmas()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(puskesmas.data)
  }
}

const getPospolda = async (req,res) => {
  let pospolda

  try {
    pospolda = await Pospolda()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(pospolda.data)
  }
}

const getCctv = async (req,res) => {
  let cctv

  try {
    cctv = await Cctv()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(cctv.data)
  }
}

const getPemadam = async (req,res) => {
  let pemadam

  try {
    pemadam = await Pemadam()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(pemadam.data)
  }
}

const getAmbulance = async (req,res) => {
  let ambulance

  try {
    ambulance = await Ambulance()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(ambulance.data)
  }
}

const getPemadamPetugas = async (req,res) => {
  let pemadam_petugas

  try {
    pemadam_petugas = await PemadamPetugas()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(pemadam_petugas.data)
  }
}

const getDinkes = async (req,res) => {
  let dinkes

  try {
    dinkes = await Dinkes()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(dinkes.data)
  }
}

const getSatpol = async (req,res) => {
  let satpol

  try {
    satpol = await Satpol()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(satpol.data)
  }
}

const getDinhub = async (req,res) => {
  let dinhub

  try {
    dinhub = await Dinhub()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(dinhub.data)
  }
}

module.exports = {
  getTPS,
  getRSU,
  getRSK,
  getPuskesmas,
  getPospolda,
  getCctv,
  getPemadam,
  getAmbulance,
  getPemadamPetugas,
  getDinkes,
  getSatpol,
  getDinhub
}