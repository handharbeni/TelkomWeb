'use strict';
var fs = require('fs');
var temp = require('templatesjs');

exports.test = function(req, res){
    // res.status(200).send({'results':'empty'});
    //res.render('test/samples.html');
    res.render('template/index');
    // fs.readFile("./views/test.html", (err, data) => {
    //     if(err) return res.status(404).send(err);
    //     var output = temp.setSync("A");
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     // res.send(data);
    //     res.end(data);
    // }); 
}