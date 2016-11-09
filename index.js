const express = require('express')
const bodyParser = require('body-parser')
const restart = require('./restart')

const app = express()

app.use(bodyParser.json())

app.get('/', function(req, res) {
  res.send('hey.')
})

app.post('/', function(req, res) {
  console.log('Received this request:')
  console.log(req.body)
  console.log('Rebuilding and restarting...')
  restart()
  res.send('ok')
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
})
