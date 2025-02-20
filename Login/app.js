const express = require('express')
const app = express()
const path = require('path')
const bcrypt = require('bcrypt')

const users = []

app.set('view-engine', 'ejs')
app.set("views", path.join(__dirname, "./src/views"));
app.use(express.urlencoded({ extended : false }))
app.use(express.static(path.join(__dirname, "./src/public")));

// console.log("__dirname:", __dirname);

app.get('/', (req, res) => {
    res.send("Hello QuangBuiCP")
})

app.get('/login', (req, res) => {
    res.render("login.ejs", {title: "Login Page", bodyClass: "login-page"});
})

app.get('/register', (req, res) => {
    res.render("register.ejs", {title: "Register Page", bodyClass: "register-page"});
})

app.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword            
        })
        res.redirect('/login')
    }
    catch {
        res.redirect('/register')                
    }
    console.log(users)
})

app.listen(3000)