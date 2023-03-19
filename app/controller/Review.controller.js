const db = require('../config/db.config.js');
const Review = db.Review;
const Publication = db.Publication;

  exports.create = async (req, res) => {
    try {
      await Review.create({
        idUserRev: req.body.user,
        idPeliRev: req.body.peli,
        review: req.body.review,
        valorRev: req.body.valor
      })
    } catch (error) {
      
    }
  }
// exports.create = async (req, res) => {	
//   const [favo, creado] = await Fav.findOrCreate({
// 		where: {
//       idUserFav: req.body.user,
//       idPubliFav: req.body.pub
// 		},
// 		default: {
//       idUserFav: req.body.user,
//       idPubliFav: req.body.pub
// 		}
// 	})
//   if (!creado) {
//     Fav.destroy({
//       where: {
//         idFav: favo.idFav
//       }
//     }).then(fav => {
//       res.send({msg: 'Se ha eliminado de favoritos'})
//     }).catch(err => {
//       res.status(500).send("Error -> " + err);
//     })
//   } else {
//     res.send({msg: 'Se ha agregado a favoritos'})
//   }
// };

// exports.findAll = (req, res) => {
// 	Fav.findAll({where: {idUserFav: req.userid}}).then(fav => {
//     let data = []
//     fav.forEach(f => {
//       data.push(f.dataValues.idPubliFav)
//     });
//     Publication.findAll({where: {idPub: data}}).then(pub => {
//       res.send(pub)
//     }).catch(err => {
//       res.status(500).send("Error -> " + err);
//     })
// 	}).catch(err => {
// 		res.status(500).send("Error -> " + err);
// 	})
// };