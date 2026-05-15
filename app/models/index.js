import Sequelize from "sequelize";
import dbConfig from "../config/db.config.js";

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;