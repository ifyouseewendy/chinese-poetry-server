var express = require('express');
var app = express();

var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/ci.db');

app.get('/', function (req, res) {
  db.serialize(function() {
    db.each("select * from ci limit 1;", function(err, row) {
      console.log(row);
      res.send(row);
    });
  });
});

app.listen(3000);
