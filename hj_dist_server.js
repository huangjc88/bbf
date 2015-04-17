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
app.use('/dist', express.static(__dirname + '/dist'));

//var detail = require(__dirname + '/routes/detail');
//var home = require(__dirname + '/routes/home');
//
//detail(app);
//home(app);

//require('express-namespace');

//app.namespace('/huijiaApp', function() {

app.get('/dist/area', function (req, res) {
    console.log('/dist/area')
    logger.info('aaaaaaaaa')
    res.sendfile(__dirname + '/dist/views/area.html');
});

app.get('/dist/shoplist', function (req, res) {
    console.log('/dist/shoplist')
    logger.info('cccccccc');
    res.sendfile(__dirname + '/dist/views/shoplist.html');
});

app.get('/dist/shoplist/detail/*', function (req, res) {
    console.log('/dist/shoplist')
    logger.info('ddddddddd');
    res.sendfile(__dirname + '/dist/views/shopdetail.html');
});

app.get('/dist/login', function (req, res) {
    console.log('/dist/login')
    res.sendfile(__dirname + '/dist/views/login.html');
});

app.get('/dist/my', function (req, res) {
    console.log('/dist/my')
    res.sendfile(__dirname + '/dist/views/my.html');
});

app.get('/dist/*', function (req, res,next) {
//    console.log('1111111','/dist/'+req.params.cityCode);
//    if (req.params.cityCode === 'area') return next('route');
    res.sendfile(__dirname + '/dist/views/index.html');
});

app.listen(3089);

console.log('Listening on port 3089');
