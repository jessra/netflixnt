'use strict'
module.exports = (sequelize, Sequelize) => {
	let Actors = sequelize.define('actors', {
    idAc: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  nameAc: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: {
			msg: 'EL actor ya existente'
		},
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

	return Actors;
}