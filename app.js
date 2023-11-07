const express = require('express')
const { engine } = require('express-handlebars')
const app = express()
const port = 3000
//載入restaurant.json
const restaurants = require('./public/jsons/restaurant.json').results





//Ｖ(view)負責畫面的呈現
app.engine('.hbs', engine({extname : '.hbs'}))
app.set('view engine', '.hbs')
app.set('views', './views')

//M(model)負責與資料集溝通(取得了restaurant.json裡面的資料)
app.use(express.static('public'))



//C 架構的中間人（先處理）
app.get('/', (req, res) => {
  res.redirect('/restaurant')
})
app.get('/restaurant', (req, res) => {
  res.render('index',{restaurants})
})
app.get('/restaurant/:id', (req, res) => {
  const id = req.params.id
  res.send(`read restaurant:${id}`)
})
app.listen(port, () => {
  console.log(`express sever is running on http://localhost:${port}`)
})