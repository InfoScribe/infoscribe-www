/**
 * A simple static webserver to host the Future News Rig client
 */
var express = require('express'),
    partials = require('express-partials'),
    ejs = require('ejs');

var app = express();
app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
app.use(partials());
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('ejs', ejs.__express);
partials.register('.ejs', ejs);

app.get('/', function(req, res){
    res.render('index');
});

app.get('/dashboard', function(req, res){
    res.render('dashboard');
});

app.get('/transcribe', function(req, res){
    res.render('transcribe');
});

app.use(function(req, res, next) {
    res.render('file-not-found');
});

app.listen(app.get('port'), function() {
    console.log('Server started on http://localhost:%d/', app.get('port'));
});

process.on('uncaughtException', function(err) {
    switch (err.errno) {
        case "EADDRINUSE":
            console.log('Unable to start server on port %d (is something already running on that port?)', app.get('port'));
            break;
        default:
             console.log(err);
    }
    process.exit(1);
});