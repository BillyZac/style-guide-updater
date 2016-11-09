const express = require('express')
const bodyParser = require('body-parser')
const restart = require('./restart')
const logger = require('morgan');

const app = express()

app.use(bodyParser.json())
app.use(logger('dev'))

app.get('/', function(req, res) {
  res.send('hey.')
})

app.post('/', function(req, res) {
  console.log('Received this request:')
  console.log(req.body)

  // Pretend we're pulling this stuff from req.body, which comes from the webhook
  const commitInfo = {
    time: '2016-05-03',
    committer: 'BillyZac'
  }

  restart(commitInfo)
  res.send('ok')
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
})
