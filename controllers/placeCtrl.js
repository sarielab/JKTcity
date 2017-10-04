'use strict'
require('dotenv').config()

const redis = require('redis')
const client = redis.createClient(
  process.env.redisPort,
  process.env.redisHost,
  {
    'auth_pass': process.env.redisKey,
    'return_buffers': true
  }
).on('error', err=> { console.log(`Error : ${err}`) } )
const {  Tps, Rsu, Rsk, Puskesmas, Pospolda, Cctv, Pemadam, Ambulance, PemadamPetugas, Dinkes, Satpol, Dinhub } = require('../models/place')
const cachetime = 30 * 24 * 3600

const getData = (name, res, callback) => {
  client.get(name, (err, result) => {
    console.log(`Err get data ${err}`)
    if (result)
      return res.send({
        data: JSON.parse(result),
        source: 'redis cache'
      })
    return callback()
  })
}

const getTPS = (req, res) => {
  getData('Tps', res, async () =>  {
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
          client.setex('Tps', cachetime, JSON.stringify(allTps))
          res.send(allTps)
        } else
          allTps.push(...tps.data.features.map(feat => feat.properties))
        page++
      }
    }
  })
}

const getRSU = (req, res) => {
  getData('Rsu', res, async () =>  {
    let rsu

    try {
      rsu = await Rsu()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Rsu', cachetime, JSON.stringify(rsu.data))
      res.send(rsu.data)
    }
  })
}

const getRSK = (req, res) => {
  getData('Rsk', res, async () =>  {
    let rsk

    try {
      rsk = await Rsk()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Rsk', cachetime, JSON.stringify(rsk.data))
      res.send(rsk.data)
    }
  })
}

const getPuskesmas = (req, res) => {
  getData('Puskesmas', res, async () => {
    let puskesmas

    try {
      puskesmas = await Puskesmas()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Puskesmas', cachetime, JSON.stringify(puskesmas.data))
      res.send(puskesmas.data)
    }
  })
}

const getPospolda = (req, res) => {
  getData('Pospolda', res, async () => {
    let pospolda

    try {
      pospolda = await Pospolda()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Pospolda', cachetime, JSON.stringify(pospolda.data))
      res.send(pospolda.data)
    }
  })
}

const getCctv = (req, res) => {
  getData('Cctv', res, async () => {
    let cctv

    try {
      cctv = await Cctv()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Cctv', cachetime, JSON.stringify(cctv.data))
      res.send(cctv.data)
    }
  })
}

const getPemadam = (req, res) => {
  getData('Pemadam', res, async () => {
    let pemadam

    try {
      pemadam = await Pemadam()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Pemadam', cachetime, JSON.stringify(pemadam.data))
      res.send(pemadam.data)
    }
  })
}

const getAmbulance = (req, res) => {
  getData('Ambulance', res, async () => {
    let ambulance

    try {
      ambulance = await Ambulance()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Ambulance', cachetime, JSON.stringify(ambulance.data))
      res.send(ambulance.data)
    }
  })
}

const getPemadamPetugas = (req, res) => {
  getData('PemadamPetugas', res, async () => {
    let pemadam_petugas

    try {
      pemadam_petugas = await PemadamPetugas()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('PemadamPetugas', cachetime, JSON.stringify(pemadam_petugas.data))
      res.send(pemadam_petugas.data)
    }
  })
}

const getDinkes = (req, res) => {
  getData('Dinkes', res, async () => {
    let dinkes

    try {
      dinkes = await Dinkes()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Dinkes', cachetime, JSON.stringify(dinkes.data))
      res.send(dinkes.data)
    }
  })
}

const getSatpol = (req, res) => {
  getData('Satpol', res, async () => {
    let satpol

    try {
      satpol = await Satpol()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Satpol', cachetime, JSON.stringify(satpol.data))
      res.send(satpol.data)
    }
  })
}

const getDinhub = (req, res) => {
  getData('Dinhub', res, async () => {
    let dinhub

    try {
      dinhub = await Dinhub()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Dinhub', cachetime, JSON.stringify(dinhub.data))
      res.send(dinhub.data)
    }
  })
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