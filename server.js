// server.js

// set up ======================================================================
// get all the tools we need
var express      = require('express');
var app          = express();
var mongoose     = require('mongoose');
var passport     = require('passport');
var flash        = require('connect-flash');
var path         = require('path');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var cors         = require('cors')
require('./server/config/mongoose.js');
amazon = require('amazon-product-api');
var client = amazon.createClient({
  awsId: "AKIAIXU7Q7BS33F4KYEQ",
  awsSecret: "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",
  awsTag: "tsuyemura-20"
});

// configuration ===============================================================
require('./server/config/passport')(passport); // pass passport for configuration

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded()); // get information from html forms
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs'); // set up ejs for templating
app.use(express.static(__dirname + "/client/static"))
app.set('views', path.join(__dirname,'./client/views'));
// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./server/config/routes.js')(app, passport, path, client); // load our routes and pass in our app and fully configured passport
// app.get('/profile', function(req, res){
//   res.sendFile(path.join(__dirname+'/static/dashboard.html'))
// })
// launch ======================================================================
app.listen(8000,function(){
  console.log('Passport test on port 8000')
})
// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var passport = require('passport');
//
//
// require('./server/config/mongoose.js');
//
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(require('express-session')({
//     secret: 'SECRET TO EVERYONE',
//     resave: false,
//     saveUninitialized: false
// }));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static(__dirname + "/client/static"))
// app.set('views', path.join(__dirname,'./client/views'));
// // app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs')
//
// var routes_setter = require('./server/config/routes.js');
// routes_setter(app);
//
// app.listen(8000,function(){
//   console.log('Passport test on port 8000')
// })
