const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
//console.log(PORT)
const app= express()
const methodOverride = require('method-override')
const mongoose = require('mongoose')


app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))


app.use('/books', require('./controllers/booksController'))




app.get('/', (req,res) => {
    res.send('Welcome to an Awesome App about books!')
    //res.render('index')
})




// 404 Page
app.get('*', (req, res) => {
    res.send('404')
}) 



mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => { console.log('connected to mongo: ', process.env.MONGO_URI) })



app.listen(PORT, () => {
    console.log('listening on port',PORT)
})