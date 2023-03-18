'use strict'
module.exports = (sequelize, Sequelize) => {
	let Movie = sequelize.define('Movies', {
    idMov: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  head: {
		type: Sequelize.STRING,
		allowNull: false
	  },
	  sipnosis: {
		type: Sequelize.TEXT,
		allowNull: false
	  },
		director: {
		type: Sequelize.SMALLINT,
		allowNull: false
		},
		genero: {
		type: Sequelize.SMALLINT,
		allowNull: false
		},
		franquicia: {
		type: Sequelize.SMALLINT,
		allowNull: false
		},
		img: {
		type: Sequelize.TEXT,
		allowNull: false
		},
		link: {
		type: Sequelize.TEXT,
		allowNull: false
		},
		fecMov: {
			type: Sequelize.DATE,
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

	return Movie;
}