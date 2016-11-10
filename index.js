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

app.post('/style-guide-updater', function(req, res) {
  const commitInfo = {
    authorName: req.body.head_commit.author.name,
    timestamp: req.body.head_commit.timestamp,
  }
  restart(commitInfo)
  res.send('ok')
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
})
