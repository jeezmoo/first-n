const express = require('express')
const app  = express()
const port =5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://you6735:qwe123@cluster0.ybt1u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongpDB Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World!!!!123'))
app.listen(port, () => console.log('Exaple app listening on port ${port}!'))


