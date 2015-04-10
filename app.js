var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;  
var db = mongoose.connection; 
var bodyParser = require('body-parser');



app.use(express.static(__dirname + '/public'));
app.set('views', './views');
app.set('view engine', 'jade');

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

mongoose.connect('mongodb://localhost/goalpad');
db.on('error', console.error.bind(console, 'db connection error:'));
db.once('open', function (callback) {
  console.log('connected to db');
});

var server = app.listen(8888, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Example app listening at http://%s:%s', host, port)
});


var goalSchema = new Schema({
  
  description:   String
});

var Goal = mongoose.model('goalSchema', goalSchema);

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello From app.js'});
})

app.post('/login', function (req, res) {
  debugger   
   console.log(req.body);
})

app.put('/add', function (req, res) {
  debugger   
   var goal = new Goal({description: req.body.goal})
   goal.save(function(error, goal) {
      if (error) {
        console.log(error);  
      }
      console.log(goal);
   })
   
   res.json(req.body.goal);
})

app.get('/show', function (req, res) {
    debugger   
    
  var goals = [];
  
  Goal.find(function(err, result) {
    res.json(result);
  }); 
})




