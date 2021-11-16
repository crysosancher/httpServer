const express = require('express')
const path=require('path')
const app = express()
const port = 3000
app.get('/', (req, res) => {

  res.json({"Himanshu Lomda": 69})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})