'use strict'

const redis = require('redis')
const client = redis.createClient()

const {Kota, Kecamatan, Kelurahan, RW} = require('../models/location')

client.on('error', err=> { console.log(`Error : ${err}`) } )

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

const getKota = (req,res) => {
  getData('Kota', res, async () => {
    let kota
    try {
      kota = await Kota()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Kota', 5, JSON.stringify(kota.data))
      res.send({data:kota.data, source: 'data'})
    }
  })
}

const getKecamatan = (req,res) => {
  getData('Kecamatan', res, async (res) => {
    let kecamatan

    try {
      kecamatan = await Kecamatan()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Kecamatan', 30*24*3600, JSON.stringify(kecamatan.data))
      res.send({data:kecamatan.data, source: 'data'})
    }
  })
}

const getKelurahan = (req,res) => {
  getData('Kelurahan', res, async (res) => {
    let kelurahan

    try {
      kelurahan = await Kelurahan()
    } catch(err) {
      res.send({err:err.error})
    } finally {
      client.setex('Kelurahan', 30*24*3600, JSON.stringify(kelurahan.data))
      res.send(kelurahan.data)
    }
  })
}

const getRW = (req,res) => {
  getData('RW', res, async (res) => {
    let rw
    let flag = true
    let allRW = []
    let page = 1

    while(flag) {
      try {
        rw = await RW(page)
      } catch(err) {
        res.send({err:err.error})
      } finally {
        if (typeof rw.data.meta === 'undefined' || page > rw.data.meta.pagination.total_pages) {
          flag = false
          client.setex('RW', 30*24*3600, JSON.stringify(allRW))
          res.send(allRW)
        }
        else {
          page++
          allRW.push(...rw.data.features.map(feat=> feat.properties))
        }
      }
    }
  })
}

module.exports = {
  getKota,
  getKecamatan,
  getKelurahan,
  getRW
}