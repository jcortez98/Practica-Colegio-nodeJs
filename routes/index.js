var express = require('express');
var grupo = require('../model/grupo');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/grupo', function(req, res) {
  grupo.selectAll(function(error, resultado) {
    if(resultado != undefined) {
        res.json(resultado);
    } else {
        res.json({mensaje: "No hay grupos"});
    }
  });
});

module.exports = router;
