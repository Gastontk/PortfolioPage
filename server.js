//Express setup
var express = require('express'),
app= express(),
path = require('path')




var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')));
// app.use('/images', express.static(path.join(__dirname, './images')));
app.use(express.static(path.join(__dirname, './node_modules')));
app.use(express.static(path.join(__dirname, './static')));
// app.get('/', function(req, res){

// 	res.render('index');

// })


//
// require(path.join(process.env['APPROOT'], 'server/config/mongoose.js'));

// require('./server/config/mongoose.js');
// require('./server/config/routes.js')(app); //dont forget to send (app) as a param






app.listen(8000, function(){
	console.log('Listening on port 8000');
})