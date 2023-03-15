'use strict'
module.exports = (sequelize, Sequelize) => {
	let MovAct = sequelize.define('movie_actors', {
    idMA: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
    idMovieMA: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
    idActorMA: {
      type: Sequelize.SMALLINT,
      allowNull: false
    },
		createdAt: {
			type: Sequelize.DATE,
			field: 'created_at',
			defaultValue: Sequelize.NOW
		},
		updatedAt: {
			type: Sequelize.DATE,
			field: 'update_at',
			defaultValue: Sequelize.NOW
		}
	}, {
		// freezeTableName: true
	});

	return MovAct;
}