const db = require('../config/db.config.js');
const Review = db.Review;
const Publication = db.Publication;

  exports.create = async (req, res) => {
    try {
      await Review.create({
        idUserRev: req.body.user,
        idMovRev: req.body.mov,
        review: req.body.review,
        valorRev: req.body.valor
      })
      res.send({msg: 'Agregado', r: true})
    } catch (error) {
      res.send({msg:'Ocurrió un error. ' + error, r:false})
    }
  }