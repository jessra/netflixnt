// const { Actors } = require('../config/db.config.js');
const db = require('../config/db.config.js');
const { Op } = require("sequelize");
const Movie = db.Movie;
const Director = db.Director;
const Genero = db.Genero;
const Franquicia = db.Franquicia;
const Actors = db.Actors;
const MovieActors = db.MovieActors;


exports.create = async (req, name, res) => {
	try {
		const [dic, credic] = await Director.findOrCreate({
			attributes: ['idDi'],
			where: {
				nameDi: req.body.director
			},
			default: {
				nameDi: req.body.director
			}
		})
		const [gen, cregen] = await Genero.findOrCreate({
			attributes: ['idGe'],
			where: {
				nameGe: req.body.genero
			},
			default: {
				nameGe: req.body.genero
			}
		})
		const [fran, crefran] = await Franquicia.findOrCreate({
			attributes: ['idFran'],
			where: {
				nameFran: req.body.franquicia
			},
			default: {
				nameFran: req.body.franquicia
			}
		})
		const mov =  await Movie.create({  
			head: req.body.head,
			sipnosis: req.body.sipnosis,
			director: dic.idDi,
			genero: gen.idGe,
			franquicia: fran.idFran,
			fecMov: req.body.fecMov,
			img: name,
			link: req.body.link,
		})
		for await (const act of req.body.actors){
			const [actor, creactor] = await Actors.findOrCreate({
				attributes: ['idAc'],
				where: {
					nameAc: act
				},
				default: {
					nameAc: act
				}
			})
			await MovieActors.create({  
				idMovieMA: mov.idMov,
				idActorMA: actor.idAc
			})
		}
		res.send('Se registró la pelicula correctamente')
	} catch (error) {
		res.send('Ocurrió un error. ' + error)
	}
};
exports.update = async (req, name, res) => {
	try {
		if (req.body.director) {
			const [dic, credic] = await Director.findOrCreate({
				attributes: ['idDi'],
				where: {
					nameDi: req.body.director
				},
				default: {
					nameDi: req.body.director
				}
			})
			console.log(dic.dataValues)
			await Movie.update({ director: dic.dataValues.idDi }, { where: {idMov: req.body.id} })
		}
		if (req.body.genero) {
			const [gen, cregen] = await Genero.findOrCreate({
				attributes: ['idGe'],
				where: {
					nameGe: req.body.genero
				},
				default: {
					nameGe: req.body.genero
				}
			})
			await Movie.update({ genero: gen.dataValues.idGe }, { where: {idMov: req.body.id} })
		}
		if (req.body.franquicia) {
			const [fran, crefran] = await Franquicia.findOrCreate({
				attributes: ['idFran'],
				where: {
					nameFran: req.body.franquicia
				},
				default: {
					nameFran: req.body.franquicia
				}
			})
			await Movie.update({ franquicia: fran.dataValues.idFran }, { where: {idMov: req.body.id} })
		}
		if (req.body.head) {
			await Movie.update({ head: req.body.head }, { where: {idMov: req.body.id} })
		}
		if (req.body.sipnosis) {
			await Movie.update({ sipnosis: req.body.sipnosis }, { where: {idMov: req.body.id} })
		}
		if (req.body.fecMov) {
			await Movie.update({ fecMov: req.body.fecMov }, { where: {idMov: req.body.id} })
		}
		if (req.body.link) {
			await Movie.update({ link: req.body.link }, { where: {idMov: req.body.id} })
		}
		if (name) {
			await Movie.update({ img: name }, { where: {idMov: req.body.id} })
		}
		if (req.body.actors) {
			await MovieActors.destroy({where: {idMovieMA: req.body.id}})
			for await (const act of req.body.actors){
				const [actor, creactor] = await Actors.findOrCreate({
					attributes: ['idAc'],
					where: {
						nameAc: act
					},
					default: {
						nameAc: act
					}
				})
				await MovieActors.create({  
					idMovieMA: req.body.id,
					idActorMA: actor.idAc
				})
			}
		}
		res.send({msj: 'Editado exitosamente'})
	} catch (error) {
		res.send('Ocurrió un error. ' + error)	
	}
};

exports.findAll = async (req, res) => {
	try {
		const mov = await Movie.findAll()
		const act = await Actors.findAll()
		const dir = await Director.findAll()
		const fran = await Franquicia.findAll()
		const gen = await Genero.findAll()
		const mov_act = await MovieActors.findAll()

		res.send({mov: mov,act:act,dir: dir,fran: fran,gen: gen,mov_act: mov_act})
		
	} catch (error) {
		res.send('Ocurrió un error. ' + error)
	}
};

exports.findOneMov = async (req, res) => {
	try {
		const mov = await Movie.findOne({where: {idMov: req.params.id}})
		const dir = await Director.findOne({attributes: ['nameDi'], where: {idDi: mov.director}})
		const fran = await Franquicia.findOne({attributes: ['nameFran'], where: {idFran: mov.franquicia}})
		const gen = await Genero.findOne({attributes: ['nameGe'], where: {idGe: mov.genero}})
		const idAct = await MovieActors.findAll({attributes: ['idActorMA'], where: {idMovieMA: mov.idMov}})
		const rec = await Movie.findAll({attributes: ['idMov', 'head', 'sipnosis', 'fecMov', 'img'], limit: 5, order: [['idMov', 'DESC']]})
		let data = []
    idAct.forEach(c => {
      data.push(c.dataValues.idActorMA)
    });
		const act = await Actors.findAll({attributes: ['nameAc'], where: {idAc: data}})
		res.send({mov: mov,act:act,dir: dir,fran: fran,gen: gen, rec: rec})
	} catch (error) {
		res.send('Ocurrió un error. ' + error)		
	}
};
exports.findAllFiltrar = async (req, res) => {
	try {
		let mov = []
		if (req.body.gen && req.body.name) {
			console.log('1')
			mov = await Movie.findAll({where: {genero: req.body.gen, head: {[Op.like]: `${req.body.name}%`}}})
		} else if (req.body.gen && !req.body.name) {
			console.log('2')
			mov = await Movie.findAll({where: {genero: req.body.gen}})
		} else if (!req.body.gen && req.body.name) {
			console.log('3')
			mov = await Movie.findAll({where: {head: {[Op.like]: `${req.body.name}%`}}})
		}
		const act = await Actors.findAll()
		const dir = await Director.findAll()
		const fran = await Franquicia.findAll()
		const gen = await Genero.findAll()
		const mov_act = await MovieActors.findAll()
		res.send({mov: mov,act:act,dir: dir,fran: fran,gen: gen,mov_act: mov_act})
	} catch (error) {
		res.send('Ocurrió un error. ' + error)	
	}
};

exports.destroy = (req, res) => {
	Movie.destroy({where: {idMov: req.params.id}}).then(mov => {
		res.send({msg: 'Eliminado'});
	}).catch(error => {
		res.send('Ocurrió un error. ' + error)
	})
};
