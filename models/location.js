'use strict'
const Axios = require('axios')
require('dotenv').config()

const { GET_KOTA, GET_KECAMATAN, GET_KELURAHAN, GET_RW } = require('../config/url')

Axios.defaults.baseURL = process.env.BASE_URL
Axios.defaults.headers.common['Authorization'] = process.env.TOKEN

const Kota = () => Axios.get(GET_KOTA)
const Kecamatan = () => Axios.get(GET_KECAMATAN)
const Kelurahan = () => Axios.get(GET_KELURAHAN)
const RW = () => Axios.get(GET_RW)

module.exports = {
  Kota,
  Kecamatan,
  Kelurahan,
  RW
}