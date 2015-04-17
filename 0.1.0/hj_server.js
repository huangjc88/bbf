var express = require('express');
var app = express();
var maxAge = 31557600000;
var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: 'cheese.log', category: 'cheese' }
    ]
});

var logger = log4js.getLogger('cheese');
logger.setLevel('INFO');
app.configure(function() {
    app.use(log4js.connectLogger(logger, { level: log4js.levels.INFO }));
});
app.use(express.static(__dirname));
app.use('/hj/styles', express.static(__dirname + '/.tmp/styles/'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));
//var detail = require(7 + '/routes/detail');
//var home = require(__dirname + '/routes/home');
//
//detail(app);
//home(app);

//require('express-namespace');

//app.namespace('/huijiaApp', function() {
//app.get('/hj/((\\d+))', function (req, res) {
//    console.log('/hj/');
//    res.sendfile(__dirname + '/hj/views/index.html');
//});
app.get('/hj/area', function (req, res) {
    res.sendfile(__dirname + '/hj/views/area.html');
});

app.get('/hj/shoplist', function (req, res) {
    res.sendfile(__dirname + '/hj/views/shoplist.html');
});

app.get('/hj/shoplist/detail/*', function (req, res) {
    res.sendfile(__dirname + '/hj/views/shopdetail.html');
});

app.get('/hj/login', function (req, res) {
    res.sendfile(__dirname + '/hj/views/login.html');
});

app.get('/hj/my', function (req, res) {
    res.sendfile(__dirname + '/hj/views/my.html');
});


app.get('/hj/*', function (req, res,next) {
    res.sendfile(__dirname + '/hj/views/index.html');
});



app.listen(3088);

console.log('Listening on port 3088');
