const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
if (process.env.JAWS_DB) {
    sequelize = new Sequelize(process.env.JAWS_DB)
} else {
    sequelize = new Sequelize(
        
    )
}