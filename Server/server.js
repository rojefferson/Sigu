var express = require('express');
var bodyParser = require("body-parser");
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
var app = express();
exports.app = app;
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.get('/logar', function (req, res) {
    var user_id = req.param('id');
    var token = req.param('token');
});
var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
