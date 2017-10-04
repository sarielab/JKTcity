'use strict'
const express = require('express')
let router = express.Router()

router.get('/', (req, res) => res.send('alive'))

module.exports = router