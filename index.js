const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));
app.set('view engine', 'ejs');
app.get('/', (request, response) => {
    response.render('pages/home')
})
app.get('/about', (request, response) => {
    response.render('pages/about')
})
app.get('/login', (request, response) => {
    response.render('pages/login')
})
app.listen(3500, () => {
    console.log("Server is running")
})