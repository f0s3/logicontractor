const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

let app = express()
let port = 3400

app.use(cors())
app.use(bodyParser.json())
app.use(morgan('combined'))

app.get('/', (req, res) => {
  res.send({
    message: "hello"
  })
})

app.listen(port, () => {
  console.log('app is listening on port ' + port + '!')
})
