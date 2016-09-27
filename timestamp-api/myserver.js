var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 8080));

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


//get index.html file

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

// app.get('/favicon.ico', function(res, res) {
//     res.end();
// });

//get the date and set format

app.get('/:date', function(req, res){
    var param = req.params.date;
    param = /^\d+$/.test(param) ? parseInt(param) * 1000 : param;
    
    var date = new Date(param);
    var result = {
        unix: null,
        natural: null
    };
    if(!isNaN(date)){
        result.unix = Math.floor(date.getTime() / 1000 | 0);
        result.natural = months[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
    }
    res.json(result);
});

app.listen(app.get('port'), function(){
    console.log('Example app listening on port', app.get('port'));
});