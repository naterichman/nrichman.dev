const express = require('express')
const path = require('path')
const fs = require('fs')
const util = require('util')
const helmet = require('helmet')
const mime = require('mime')

const app = express()
app.use(helmet())

function log (message) {
  console.log(new Date().toLocaleTimeString({ month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit' }) + ': ' + message)
}

config = {
    'pictures': 'pictures/'
}

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/resources/images', (req, res) => {
  // Request for random image from pictures dir
  const pictures = path.join(__dirname, config.pictures)
  fs.readdir(pictures, (err, files) => {
    if (err) console.log(err)
    const file = files[Math.floor(Math.random() * files.length)]
    res.setHeader('Content-Type', mime.getType(path.join(pictures, file)))
    log('New request for picture from' + req.headers['user-agent'] + ', sending file ' + file)
    res.sendFile(path.join(pictures, file))
  })
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(3001, () => console.log('Running on port 3001'))
