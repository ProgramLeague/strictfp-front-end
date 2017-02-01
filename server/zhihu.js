var express = require('express')
var app = express()
var https = require('https')
var ajaxData = []
var len = 0
app.get('/zhihu', function (req, res) {
    ajaxData = []
    len = 0
    https.get('https://zhuanlan.zhihu.com/api/columns/' + req.query.username + '/posts?limit=10&offset=0', function (ajax) {
        ajax.on("data", function (data) {
          ajaxData.push(data);
          len += data.length;
        })
        ajax.on("end", function () {
            res.header("Access-Control-Allow-Origin", req.headers.origin);
            res.header('Access-Control-Allow-Credentials', true)
            res.header("Access-Control-Allow-Headers", "Origin, No-Cache, X-Requested-With, If-Modified-Since, Pragma, " +
                "Last-Modified, Cache-Control, Expires, Content-Type, Content-Language, Cache-Control, X-E4M-With,X_FILENAME")
            res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
            res.header("X-Powered-By", ' 3.2.1')
            res.header("Content-Type", "application/json;charset=unicode")
            data = Buffer.concat( ajaxData, len ).toString();
            res.send(data)
            console.log(data.length)
        })
    })
})
var server = app.listen(9998, function () {
    var host = server.address().address;
    var port = server.address().port;
})