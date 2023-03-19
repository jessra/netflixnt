module.exports = function(app) {
  const users = require('../controller/Users.controller.js');
  const movie = require('../controller/Movie.controller.js');
  const genero = require('../controller/Genero.controller.js');
  const review = require('../controller/Review.controller.js');
  const verify = require('../controller/Verify.controller');
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

  // Users
  app.post('/api/inituser', users.findOneUse);
  app.post('/api/aggusers', upload.single('file'), function (req, res) {
    console.log(req.file);
    users.create(req, name, res)
  });

  // Movies
  app.get('/api/movies', movie.findAll);
  app.post('/api/movie/:id', movie.findOneMov)
  app.post('/api/aggmovies', verify, upload.single('file'), function (req, res) {
    console.log(req.file)
    movie.create(req, name, res)
  });
  app.post('/api/editmovies', upload.single('file'), function (req, res) {
    movie.update(req, name, res)
  });
  app.post('/api/filtrar', movie.findAllFiltrar)
  app.delete('/api/eliminar/:id/:img', function (req, res) {
    const fs = require("fs")
    let pathViejo = 'netcli/src/peliculas' + req.params.img
    if (fs.existsSync(pathViejo)) fs.unlinkSync(pathViejo)
    movie.destroy(req, res)
  })

  // Categorys
  app.get('/api/generos', genero.findAll);
  
  // Review
  app.post('/api/aggreview', review.create);
}