'use strict'
module.exports = (sequelize, Sequelize) => {
	let Director = sequelize.define('directors', {
    idDi: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  nameDi: {
		type: Sequelize.STRING,
		allowNull: false,
		unique: {
			msg: 'EL director ya existente'
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

	return Director;
}