'use strict'
const {Kota, Kecamatan, Kelurahan, RW} = require('../models/location')

const getKota = async (req,res) => {
  let kota

  try {
    kota = await Kota()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(kota.data)
  }
}

const getKecamatan = async (req,res) => {
  let kecamatan

  try {
    kecamatan = await Kecamatan()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(kecamatan.data)
  }
}

const getKelurahan = async (req,res) => {
  let kelurahan

  try {
    kelurahan = await Kelurahan()
  } catch(err) {
    res.send({err:err.error})
  } finally {
    res.send(kelurahan.data)
  }
}

const getRW = async (req,res) => {
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
        res.send(allRW)
      }
      else {
        page++
        console.log('page',page)
        allRW.push(...rw.data.features)
      }
    }
  }



}

module.exports = {
  getKota,
  getKecamatan,
  getKelurahan,
  getRW
}