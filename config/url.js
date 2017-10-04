const GET_KOTA = '/v1/kota/?format=geojson'
const GET_KECAMATAN = '/v1/kecamatan/?format=geojson'
const GET_KELURAHAN = '/v1/kelurahan/?format=geojson'
const GET_RW = '/v1/rw/?format=geojson&page='
const GET_TPS = '/v1/tps?format=geojson&page='
const GET_RSU = '/v1/rumahsakitumum/?format=geojson'
const GET_RSK = '/v1/rumahsakitkhusus/?format=geojson'
const GET_PUSKESMAS = '/v1/puskesmas/?format=geojson'
const GET_POSPOLDA = '/v1/emergency/pospolda/'
const GET_CCTV = '/v1/cctvbalitower/?format=geojson'
const GET_PEMADAM = '/v1/emergency/pospemadam/'
const GET_AMBULANCE = '/v1/emergency/ambulance/'
const GET_PEMADAM_PETUGAS = '/v1/emergency/petugaspemadam/'
const GET_DINKES = '/v1/emergency/petugasdinkes/'
const GET_SATPOL = '/v1/emergency/petugassatpolpp/'
const GET_DINHUB = '/v1/emergency/petugasdishub/'

module.exports = {
  GET_KOTA,
  GET_KECAMATAN,
  GET_KELURAHAN,
  GET_RW,
  GET_TPS,
  GET_RSU,
  GET_RSK,
  GET_PUSKESMAS,
  GET_POSPOLDA,
  GET_CCTV,
  GET_PEMADAM,
  GET_AMBULANCE,
  GET_PEMADAM_PETUGAS,
  GET_DINKES,
  GET_SATPOL,
  GET_DINHUB
}