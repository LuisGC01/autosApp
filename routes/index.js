var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Autos App' });
});

router.get('/mazda', function(req, res, next) {
	var infoMazada={};
	infoMazada.pais='Japon';
	infoMazada.sectorVentas='Comercial';
	infoMazada.anioFundacion=1929;
	infoMazada.logo='https://www.mazda.mx/siteassets/mazda-mx/logos-new-mazda/mazda-logo-desktop-2.png';
  	res.render('mazda', infoMazada);
});
router.get('/honda', function(req, res, next) {
	var infoHonda={};
	infoHonda.pais='Japon';
	infoHonda.sectorVentas='Comercial';
	infoHonda.anioFundacion=1946;
	infoHonda.logo='https://scontent.fmex7-1.fna.fbcdn.net/v/t1.0-9/17191237_1231863270267015_7937676917139878913_n.png?_nc_cat=1&_nc_ht=scontent.fmex7-1.fna&oh=3a5688678172d1efe80514fc53c46882&oe=5D78C437';
  	res.render('honda', infoHonda);
});




module.exports = router;
