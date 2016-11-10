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
  console.log('Received this request:')
  console.log('========');
  console.log(req.body.head_commit.author.name)
  console.log(req.body.head_commit.timestamp)
  console.log('========');

  // Pretend we're pulling this stuff from req.body, which comes from the webhook
  const commitInfo = {
    authorName: req.body.head_commit.author.name,
    timestamp: req.body.head_commit.timestamp,
    // committer: 'BillyZac'
  }
  console.log('commitInfo:');
  console.log(commitInfo);

  restart(commitInfo)
  res.send('ok')
})

app.listen(3000, function() {
  console.log('Listening on port 3000');
})
