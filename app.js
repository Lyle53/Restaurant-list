const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.redirect('/restaurant')
})
app.get('/restaurant', (req, res) => {
  res.send('listing restaurants')
})
app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  res.send(`read restaurant:${id}`)
})
app.listen(port, () => {
  console.log(`express sever is running on http://localhost:${port}`)
})