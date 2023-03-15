module.exports = function(app) {
  const users = require('../controller/Users.controller.js');
  const movie = require('../controller/Movie.controller.js');
  const category = require('../controller/Category.controller.js');
  const favs = require('../controller/Favs.controller.js');
  const verify = require('../controller/Verify.controller');
  const jwt = require('jsonwebtoken');
  const config = require('../config')
  const multer = require("multer");
  let name = '';
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'netcli/src/peliculas')
    },
    filename: (req, file, cb) => {
      name = Date.now() + file.originalname
      cb(null, Date.now() + file.originalname)
    },
  })
  
  const upload = multer({ storage: storage })

  // Token
  // app.post('/api/token', function (req, res) {
  //   const token = jwt.sign({ id: req.body.idUser }, config.secret, {
  //     expiresIn: Date.now() + 60 * 80000
  //   });
	// 	res.send({token});
  // })
  // Users
  // app.get('/api/users', users.findAll);
  app.post('/api/inituser', users.findOneUse);
  app.post('/api/aggusers', upload.single('file'), function (req, res) {
    console.log(req.file);
    users.create(req, name, res)
  });

  // Movies
  app.get('/api/movies', movie.findAll);
  app.get('/api/movie/:id', movie.findOneMov)
  app.post('/api/aggmovies', verify, upload.single('file'), function (req, res) {
    console.log(req.file)
    movie.create(req, name, res)
  });
  app.post('/api/editmovies', upload.single('file'), function (req, res) {
    movie.update(req, name, res)
  });
  // app.post('/api/filpubcat', verify, publication.findAllFilCat)
  // app.post('/api/filpubautor', verify, publication.findAllFilAutor)
  // app.post('/api/perfil', verify, function (req, res) {
  //   publication.findAllUser(req, res)
  // })
  app.delete('/api/eliminar/:id/:img', function (req, res) {
    const fs = require("fs")
    let pathViejo = 'netcli/src/peliculas' + req.params.img
    if (fs.existsSync(pathViejo)) fs.unlinkSync(pathViejo)
    movie.destroy(req, res)
  })

  // Categorys
  // app.get('/api/category', category.findAll);
  // app.post('/api/dupcategory', category.findOrCreate)
  
  // Favs
  // app.post('/api/favoritos', verify, favs.findAll);
  // app.post('/api/favorito', verify, function (req, res) {
  //   favs.create(req, res)
  // })
}