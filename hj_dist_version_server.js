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
app.use('/dist/version/0.1.0', express.static(__dirname + '/dist/version/0.1.0'));


//var detail = require(__dirname + '/routes/detail');
//var home = require(__dirname + '/routes/home');
//
//detail(app);
//home(app);

//require('express-namespace');

//app.namespace('/huijiaApp', function() {

app.get('/dist/version/0.1.0/', function (req, res) {
    res.sendfile(__dirname + '/dist/version/0.1.0/views/index.html');
});

app.get('/dist/version/0.1.0/area', function (req, res) {
    res.sendfile(__dirname + '/dist/version/0.1.0/views/area.html');
});

app.get('/dist/version/0.1.0/shoplist', function (req, res) {
    console.log('/dist/version/0.1.0/shoplist')
    logger.info('cccccccc');
    res.sendfile(__dirname + '/dist/version/0.1.0/views/shoplist.html');
});

app.get('/dist/version/0.1.0/shoplist/detail/*', function (req, res) {
    console.log('/dist/version/0.1.0/shoplist')
    logger.info('ddddddddd');
    res.sendfile(__dirname + '/dist/version/0.1.0/views/shopdetail.html');
});

app.get('/dist/version/0.1.0/login', function (req, res) {
    console.log('/dist/version/0.1.0')
    res.sendfile(__dirname + '/dist/version/0.1.0/views/login.html');
});

app.get('/dist/version/0.1.0/my', function (req, res) {
    console.log('/dist/my')
    res.sendfile(__dirname + '/dist/version/0.1.0/views/my.html');
});



//app.get('/*', function (req, res) {
//    res.sendfile(__dirname + '/app/index.html');
//});
//});


app.listen(3090);

console.log('Listening on port 3090');
