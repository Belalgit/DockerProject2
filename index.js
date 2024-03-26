const express = require('express')
const app = express()
const port = 8080
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
  res.send('Hello World! This is a Docker project1 for Begineers. I love you too')
})

app.listen(port, () => {
  console.log(`Example app listening at http://${hostname}:${port}`)
})