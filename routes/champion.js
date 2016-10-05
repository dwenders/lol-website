var express = require('express');
var Client = require('node-rest-client').Client;
var router = express.Router();

var client = new Client();

var baseRequest = "https://euw.api.pvp.net/api/lol/"; //1.4
var globalBaseRequest = "https://global.api.pvp.net/api/lol/";

var baseRequest14 = baseRequest + "euw/v1.4"; //1.4
var baseRequest12 = baseRequest + "euw/v1.2"; //1.2
var baseRequestStatic = globalBaseRequest + "static-data/euw/v1.2"; //static 1.2

var args = {
    parameters: {locale: "de_DE", api_key: "RGAPI-41ab8ea3-143f-4bc8-bb67-0076dae9d72f", champData: "all"}
};

/* GET users listing. */
router.get('/', function (req, res, next) {
    client.get(baseRequestStatic + "/champion/"+req.query.id, args, function (data, response) {
        console.log(data);
        res.render('champion', {champion: data});
    });
});

module.exports = router;
