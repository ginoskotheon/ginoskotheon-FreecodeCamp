var express = require('express');
var app = express();
var useragent = require('express-useragent');
app.use(useragent.express());


app.get('/', function(req, res){

    var os = req.useragent.os,
    language = req.headers['accept-language'],
    ip = req.headers['x-forwarded-for'];
    
    var info = {
    "IP Address": ip,
    "Language": language,
    "OS": os
    
    }

    res.json(info);



});