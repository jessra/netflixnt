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
    const token = jwt.sign({ id: user.idUser }, config.secret, {
      expiresIn: Date.now() + 60 * 80000
    });
		res.send({user, token});
	}).catch(err => {
		res.send({err});
	})
};

exports.findOneUse = (req, res) => {
	Users.findOne({where: {name: req.body.user, pass: req.body.pass}}).then(user => {
    const token = jwt.sign({ id: user.idUser }, config.secret, {
      expiresIn: Date.now() + 60 * 80000
    });
		res.send({user, token});
	}).catch(err => {
		res.send({err});
	})
};
