const db = require('../config/db.config.js');
const Genero = db.Genero;

exports.findAll = (req, res) => {
	Genero.findAll().then(cat => {
		res.send(cat);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};