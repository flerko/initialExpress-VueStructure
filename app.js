require('dotenv').config();
var express = require('express')
  , app = express()
  , bodyParser = require('body-parser')
  , port = process.env.PORT || 3000
  , path = require('path')

app.set('views', __dirname)
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname + '/public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))

app.listen(port, function() {
  console.log('Listening on port ' + port)
})
