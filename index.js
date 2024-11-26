const express = require('express')
const exphbs = require('express-handlebars')

//Invocar o express
const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.get('/', (req,res) => {

    res.render('home', { layout: false })
})

app.listen(3000, () => {
console.log('Server listening')
})
