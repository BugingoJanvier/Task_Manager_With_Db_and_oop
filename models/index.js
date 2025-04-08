import { Sequelize } from 'sequelize';
import config from '../config/config.cjs';
import tasksModel from './tasks.js';

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    dialectModule: config.development.dialectModule,
    dialectOptions: config.development.dialectOptions,
  }
);

// ⬇️ This is where the model gets associated with the actual DB connection
const db = {}; //  Create an empty object to hold the models
db.sequelize = sequelize; //  Add the sequelize instance to the db object
db.Tasks = tasksModel(sequelize, Sequelize.DataTypes); // ⬅️ This is where the model Tasks gets associated with the actual DB connection

export default db;
