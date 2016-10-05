var express = require('express');
var Client = require('node-rest-client').Client;
var router = express.Router();

var client = new Client();

var globalBaseRequest = "https://global.api.pvp.net/api/lol/";
var baseRequestStatic = globalBaseRequest+"static-data/euw/v1.2";


var args = {
    parameters: { locale: "de_DE", api_key: "RGAPI-41ab8ea3-143f-4bc8-bb67-0076dae9d72f" }
};


router.get('/', function (req, res) {
    client.get(baseRequestStatic+"/champion", args, function (data, response) {
        res.render('champions', {champions: data});
    });
});

module.exports = router;
