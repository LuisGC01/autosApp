var express = require('express');
var router = express.Router();
router.get('/mazda', function(req, res, next) {
	var data={autos:[]};
	var auto={};
	
	auto.nombre="Mazda 3";
	auto.foto="http://chiquini.mx/wp-content/uploads/2018/12/Mazda-3_Sedan-2019-1280-01.jpg";
	data.autos.push(auto);
	auto=null;
	auto={};
	auto.nombre="Mazda 6";
	auto.foto="https://upload.wikimedia.org/wikipedia/commons/b/b0/2018_Mazda6_facelift.jpg";
	data.autos.push(auto);
	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.foto="https://autoland.com.pe/wp-content/uploads/2018/02/20180118072122-1.jpg";
	data.autos.push(auto);
	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.foto="https://autoland.com.pe/wp-content/uploads/2018/02/20180118072122-1.jpg";
	data.autos.push(auto);
	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.foto="https://autoland.com.pe/wp-content/uploads/2018/02/20180118072122-1.jpg";
	data.autos.push(auto);
	auto=null;
	auto={};
	auto.nombre="Mazda CX-3";
	auto.foto="https://autoland.com.pe/wp-content/uploads/2018/02/20180118072122-1.jpg";
	data.autos.push(auto);
	
	console.log(data);

	res.render('./galeria/mazda', data);
});

module.exports = router;