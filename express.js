const express = require('express');
const app = express();
const path = require('path');
const userData = require('./data.js');

const mustacheExpress = require('mustache-express');
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use('/css', express.static('public'));

app.get('/', function(req, res) {
    res.render('users', userData);
})

app.get('/users/:id', function(req, res) {
    let user = userData.users[req.params.id];
    res.render('userPage', user);
})

app.listen(3000, function() {
    console.log('Successfully started express application!')
});