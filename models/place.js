'use strict'
const Axios = require('axios')
require('dotenv').config()

const { GET_TPS, GET_RSU, GET_RSK, GET_PUSKESMAS, GET_POSPOLDA, GET_CCTV, GET_PEMADAM, GET_AMBULANCE, GET_PEMADAM_PETUGAS, GET_DINKES, GET_SATPOL, GET_DINHUB } = require('../config/url')

Axios.defaults.baseURL = process.env.BASE_URL
Axios.defaults.headers.common = { Authorization: process.env.TOKEN }

const Tps = () => Axios.get(GET_TPS)
const Rsu = () => Axios.get(GET_RSU)
const Rsk = () => Axios.get(GET_RSK)
const Puskesmas = () => Axios.get(GET_PUSKESMAS)
const Pospolda = () => Axios.get(GET_POSPOLDA)
const Cctv = () => Axios.get(GET_CCTV)
const Pemadam = () => Axios.get(GET_PEMADAM)
const Ambulance = () => Axios.get(GET_AMBULANCE)
const PemadamPetugas = () => Axios.get(GET_PEMADAM_PETUGAS)
const Dinkes = () => Axios.get(GET_DINKES)
const Satpol = () => Axios.get(GET_SATPOL)
const Dinhub = () => Axios.get(GET_DINHUB)

module.exports = {
  Tps,
  Rsu,
  Rsk,
  Puskesmas,
  Pospolda,
  Cctv,
  Pemadam,
  Ambulance,
  PemadamPetugas,
  Dinkes,
  Satpol,
  Dinhub
}