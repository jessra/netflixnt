'use strict'
module.exports = (sequelize, Sequelize) => {
	let Franquicia = sequelize.define('franquicias', {
    idFran: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  nameFran: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: {
			msg: 'La franquicia ya existente'
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

	return Franquicia;
}