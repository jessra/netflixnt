'use strict'
module.exports = (sequelize, Sequelize) => {
	let Genero = sequelize.define('generos', {
    idGe: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  nameGe: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: {
			msg: 'Genero ya existente'
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

	return Genero;
}