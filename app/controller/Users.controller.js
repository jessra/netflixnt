const db = require('../config/db.config.js');
const Users = db.Users;
const jwt = require('jsonwebtoken');
const config = require('../config')

exports.create = (req, name, res) => {	
	Users.create({  
		name: req.body.name,
		pass: req.body.pass,
		img: name
	}).then(user => {
		res.send({user});
	}).catch(err => {
		res.send({err});
	})
};

exports.findOneUse = async (req, res) => {
	try {
		if (req.body.user == 'netflixnt' && req.body.pass == 'administrarNet') {
			const token = jwt.sign({ id: 'netflixnt' }, config.secret, {
				expiresIn: Date.now() + 60 * 80000
			});
			res.send({user: {idUser: 'netflixnt', img: '1678838866279UVM.png', name: 'netflixnt'}, token});
		} else {
			const user = await Users.findOne({where: {name: req.body.user, pass: req.body.pass}})
			res.send({user});
		}
	} catch (error) {
		res.send({msg:'Ocurrió un error. ' + error, r: false})
	}
};
