const express = require('express')
const app = express()
const port = 3000

// routing untuk path pada browser
app.get('/', (req, res) => {
  res.sendFile('./index.html', {root: __dirname}) //direktori dimana file berada
})

//routing untuk path pada browser
app.get('/about', (req, res) => {
  res.sendFile('./about.html', {root: __dirname}) //direktori dimana file berada
})

//routing untuk path pada browser
app.get('/contact', (req, res) => {
  res.sendFile('./contact.html', {root: __dirname}) //direktori dimana file berada
})

//routing untuk path pada browser
app.get('/product', (req, res) => {
  //req.query() disini harus dipanggil dengan mengetikkan parameter seperti input di url
  //contoh parameter dengan kasus dibawah : http://localhost:3000/product?id=1&barang=shoes
  res.send(`product id : ${req.query.id} <br> category id : ${req.query.barang}`)
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('page not found')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  