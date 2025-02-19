const express = require('express')
const app = express()
const path = require('path')

app.set('view-engine', 'ejs')
app.set("views", path.join(__dirname, "./src/views"));

app.get('/', (req, res) => {
    res.send("Hello QuangBuiCP")
})

app.get('/login', (req, res) => {
    res.render('login.ejs')
})

app.get('/register', (req, res) => {
    res.render('register.ejs')
})

app.listen(3000)