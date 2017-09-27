require('dotenv').config()

const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

const port = process.env.PORT || 3001
const index = require('./routes/index')
const location = require('./routes/location')
// const place = require('./routes/place')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())
app.use('/', index)
app.use('/jkt/location', location)
// app.use('/jkt/place', place)

app.listen(port, (err,scs) => {console.log(err? err: `Listening on port ${port}`)})


module.exports = app