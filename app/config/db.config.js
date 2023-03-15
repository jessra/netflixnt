const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.Users = require('../models/users.js')(sequelize, Sequelize);
db.Review = require('../models/review.js')(sequelize, Sequelize);
db.MovieActors = require('../models/movieActors.js')(sequelize, Sequelize);
db.Actors = require('../models/actors.js')(sequelize, Sequelize);
db.Movie = require('../models/movie.js')(sequelize, Sequelize);
db.Genero = require('../models/genero.js')(sequelize, Sequelize);
db.Franquicia = require('../models/franquicia.js')(sequelize, Sequelize);
db.Director = require('../models/director.js')(sequelize, Sequelize);


module.exports = db;