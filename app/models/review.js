'use strict'
module.exports = (sequelize, Sequelize) => {
	let Review = sequelize.define('Reviews', {
    idRev: {
    type: Sequelize.SMALLINT,
    primaryKey: true,
		autoIncrement: true
    },
	  idUserRev: {
		type: Sequelize.SMALLINT,
		allowNull: false
	  },
	  idMovRev: {
		type: Sequelize.SMALLINT,
		allowNull: false
	  },
		review: {
			type: Sequelize.TEXT,
			allowNull: false
		},
		valorRev: {
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

	return Review;
}