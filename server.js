/**
 * Created by vikram on 13/2/18.
 */

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var http = require('http');
var mongoose = require('mongoose')

var app = express();

var api = require('./server/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'dist')));
app.use('/api',api);
app.get('*',function (req, res) {
  res.sendFile(path.join(__dirname,"dist/index.html"));
})

var port = process.env.PORT || '3000';
app.set('port',port);

var server = http.createServer(app);

app.listen(port,function (err) {
  if(err){
    console.log(err);
  }else {
    console.log('server started at port 3000')
  }
});

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/studentstack');


mongoose.connection.on('connected', function () {
  console.log("connected to database mongoDB @27017");
});

//on connection
mongoose.connection.on('error', function (err) {
  if (err) {
    console.log("error in database connection:");
  }
});
